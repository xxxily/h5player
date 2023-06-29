/*!
 * configManager parse localStorage error * @name         configManager.ts
 * @description  配置统一管理脚本
 * @version      0.0.1
 * @author       xxxily
 * @date         2023/03/06 14:29
 * @github       https://github.com/xxxily
 */

/**
 * 由于插件是针对多网页，多域名的脚本，所以每个配置项都需要单独写入和读取，
 * 而不能采用local-storage-proxy这种将所有配置项都放在一个对象里统一管理的配置模式
 * 配置项集中在一个对象里进行统管的问题在于：配置项会因为缺乏锁机制和状态同步机制而导致配置相互冲突、相互覆盖，具体表现为：
 * 当某个配置项需要变更时，整个配置对象都要被写入覆盖原来的对象，这在只打开了一个页面的情况下问题不大，但在打开了多页的情况下则存在致命的问题：
 * 所有已打开的页面都读取了一份配置到内存，一个页面更新配置后，并不能将修改的值同步到别的页面内存中去
 * 这个时候，如果另外一个页面也要修改另外一项配置，则只会修改它想修改的项，而其它项只会按照原先读取且已存在于内存的状态覆盖回去，
 * 这就会导致A页面更改了配置，切换到B页面后又被莫名地覆写回去了
 * 所以需要configManager来解决原先采用local-storage-proxy和monkeyStorageProxy管理配置产生的问题
 */

import { getValByPath, setValByPath, mergeObj } from '../utils/index'

/**
 * 判断localStorage是否可用
 * localStorage并不能保证100%可用，所以使用前必须进行判断，否则会导致部分网站下脚本出现异常
 * https://stackoverflow.com/questions/30481516/iframe-in-chrome-error-failed-to-read-localstorage-from-window-access-deni
 * https://cloud.tencent.com/developer/article/1803097 (当localStorage不能用时，window.localStorage为null，而不是文中的undefined)
 */
function isLocalStorageUsable() {
  return window.localStorage && window.localStorage.getItem instanceof Function && window.localStorage.setItem instanceof Function
}

/**
 * 判断GlobalStorage是否可用，目前使用的GlobalStorage是基于tampermonkey提供的相关api
 * https://www.tampermonkey.net/documentation.php?ext=dhdg#GM_setValue
 */
function isGlobalStorageUsable() {
  return window.GM_setValue && window.GM_getValue && window.GM_deleteValue && window.GM_listValues
}

/**
 * 存储干净的localStorage相关方法
 * 防止localStorage对象下的方法被改写而导致读取和写入规则不一样的问题
 */
const rawLocalStorage = (function getRawLocalStorage() {
  const localStorageApis = ['getItem', 'setItem', 'removeItem', 'clear', 'key']

  const rawLocalStorage: Record<string, any> = {}

  localStorageApis.forEach((apiKey) => {
    if (isLocalStorageUsable()) {
      rawLocalStorage[`_${apiKey}_`] = localStorage[apiKey]
      rawLocalStorage[apiKey] = function () {
        return rawLocalStorage[`_${apiKey}_`].apply(localStorage, arguments)
      }
    } else {
      rawLocalStorage[apiKey] = function () {
        console.error('localStorage unavailable')
      }
    }
  })

  return rawLocalStorage
})()

interface ConfigManagerOpts {
  /* 定义配置名称的前缀 */
  prefix: string
  /* 初始化的默认配置 */
  config: Record<string, any>
}

export default class ConfigManager {
  opts: ConfigManagerOpts

  constructor(opts: ConfigManagerOpts) {
    this.opts = opts
  }

  /**
   * 将confPath转换称最终存储到localStorage或globalStorage里的键名
   * @param {String} confPath -必选，配置路径信息：例如：'enhance.blockSetPlaybackRate'
   * @returns {keyName}
   */
  getConfKeyName(confPath = '') {
    return this.opts.prefix + confPath.replace(/\./g, '_')
  }

  /**
   * 将存储到localStorage或globalStorage里的键名转换成实际调用时候的confPath
   * @param {String} keyName -必选 存储到localStorage或globalStorage里的键名，例如：'_h5player_enhance_blockSetPlaybackRate'
   * @returns {confPath}
   */
  getConfPath(keyName = '') {
    return keyName.replace(this.opts.prefix, '').replace(/_/g, '.')
  }

  getConfPathList(config: Record<string, any>) {
    const confPathList:string[] = []
    
    /* 递归获取所有配置项的路径 */
    function getConfPathList(config: Record<string, any>, path = '') {
      Object.keys(config).forEach((key) => {
        const pathKey = path ? `${path}.${key}` : key
        if (Object.prototype.toString.call(config[key]) === '[object Object]') {
          getConfPathList(config[key], pathKey)
        } else {
          confPathList.push(pathKey)
        }
      })
    }
    getConfPathList(config)

    return confPathList
  }

  /**
   * 根据给定的配置路径，获取相关配置信息
   * 获取顺序：LocalStorage > GlobalStorage > defConfig > null
   * @param {String} confPath -必选，配置路径信息：例如：'enhance.blockSetPlaybackRate'
   * @returns {*} 如果返回null，则表示没获取到相关配置信息
   */
  get(confPath: string) {
    if (typeof confPath !== 'string') {
      return null
    }

    /* 默认优先使用本地的localStorage配置 */
    const localConf = this.getLocalStorage(confPath)
    if (localConf !== null && localConf !== undefined) {
      return localConf
    }

    /* 如果localStorage没相关配置，则尝试使用GlobalStorage的配置 */
    const globalConf = this.getGlobalStorage(confPath)
    if (globalConf !== null && globalConf !== undefined) {
      return globalConf
    }

    /* 如果localStorage和GlobalStorage配置都没找到，则尝试在默认配置表里拿相关配置信息 */
    const config = this.getConfObj()
    const defConfVal = getValByPath(config, confPath)
    if (typeof defConfVal !== 'undefined' && defConfVal !== null) {
      return defConfVal
    }

    return null
  }

  /**
   * 将配置结果写入到localStorage或GlobalStorage
   * 写入顺序：LocalStorage > GlobalStorage
   * 无论是否写入成功都会将结果更新到defConfig里对应的配置项上
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  set(confPath: string, val: any): boolean {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    setValByPath(this.opts.config, confPath, val)

    let sucStatus = false

    sucStatus = this.setLocalStorage(confPath, val)

    if (!sucStatus) {
      sucStatus = this.setGlobalStorage(confPath, val)
    }

    return sucStatus
  }

  /* 获取并列出当前所有已设定的配置项 */
  list() {
    const result = {
      localConf: this.listLocalStorage(),
      globalConf: this.listGlobalStorage(),
      defConfig: this.opts.config,
    }
    return result
  }

  /* 清除已经写入到本地存储里的配置项 */
  clear() {
    this.clearLocalStorage()
    this.clearGlobalStorage()
  }

  /**
   * 根据给定的配置路径，获取LocalStorage下定义的配置信息
   * @param {String} confPath -必选，配置路径信息
   * @returns
   */
  getLocalStorage(confPath: string) {
    if (typeof confPath !== 'string') {
      return null
    }

    const key = this.getConfKeyName(confPath)

    if (isLocalStorageUsable()) {
      let localConf = rawLocalStorage.getItem(key)
      if (localConf !== null && localConf !== undefined) {
        try {
          localConf = JSON.parse(localConf)
        } catch (e) {
          console.error('configManager parse localStorage error:', key, localConf)
        }

        return localConf
      }
    }

    return null
  }

  /**
   * 根据给定的配置路径，获取GlobalStorage下定义的配置信息
   * @param {String} confPath -必选，配置路径信息
   * @returns
   */
  getGlobalStorage(confPath: string) {
    if (typeof confPath !== 'string') {
      return null
    }

    const key = this.getConfKeyName(confPath)

    if (isGlobalStorageUsable()) {
      const globalConf = window.GM_getValue(key)
      if (globalConf !== null && globalConf !== undefined) {
        return globalConf
      }
    }

    return null
  }

  /**
   * 将配置结果写入到localStorage里
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  setLocalStorage(confPath: string, val: any): boolean {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    setValByPath(this.opts.config, confPath, val)

    const key = this.getConfKeyName(confPath)

    if (isLocalStorageUsable()) {
      try {
        if (Object.prototype.toString.call(val) === '[object Object]' || Array.isArray(val)) {
          val = JSON.stringify(val)
        }

        rawLocalStorage.setItem(key, val)

        return true
      } catch (e) {
        console.error('configManager set localStorage error:', key, val, e)
        return false
      }
    } else {
      return false
    }
  }

  /**
   * 将配置结果写入到globalStorage里
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  setGlobalStorage(confPath: string, val: any): boolean {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    setValByPath(this.opts.config, confPath, val)

    const key = this.getConfKeyName(confPath)

    if (isGlobalStorageUsable()) {
      try {
        window.GM_setValue(key, val)
        return true
      } catch (e) {
        console.error('configManager set globalStorage error:', key, val, e)
        return false
      }
    } else {
      return false
    }
  }

  listLocalStorage() {
    if (isLocalStorageUsable()) {
      const result: Record<string, any> = {}
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(this.opts.prefix)) {
          const confPath = this.getConfPath(key)
          result[confPath] = this.getLocalStorage(confPath)
        }
      })
      return result
    } else {
      return {}
    }
  }

  listGlobalStorage() {
    if (isGlobalStorageUsable()) {
      const result: Record<string, any> = {}
      const globalStorage = window.GM_listValues() as string[]
      globalStorage.forEach((key) => {
        if (key.startsWith(this.opts.prefix)) {
          const confPath = this.getConfPath(key)
          result[confPath] = this.getGlobalStorage(confPath)
        }
      })
      return result
    } else {
      return {}
    }
  }

  getConfObj() {
    const confList = this.list()

    /* 同步全局配置到this.opts.config */
    Object.keys(confList.globalConf).forEach((confPath) => {
      setValByPath(this.opts.config, confPath, confList.globalConf[confPath])
    })

    /* 同步本地配置到this.opts.config */
    Object.keys(confList.localConf).forEach((confPath) => {
      setValByPath(this.opts.config, confPath, confList.localConf[confPath])
    })

    return this.opts.config
  }

  setLocalStorageByObj(config: Record<string, any>) {
    const oldConfig = this.getConfObj()
    const confPathList = this.getConfPathList(config)
    confPathList.forEach((confPath) => {
      const oldVal = getValByPath(oldConfig, confPath)
      const val = getValByPath(config, confPath)

      /* 跳过一样的值或在旧配置中不存在的值 */
      if (oldVal === val || oldVal === undefined) {
        return
      }

      this.setLocalStorage(confPath, val)
    })
  }

  setGlobalStorageByObj(config: Record<string, any>) {
    const oldConfig = this.getConfObj()
    const confPathList = this.getConfPathList(config)
    confPathList.forEach((confPath) => {
      const oldVal = getValByPath(oldConfig, confPath)
      const val = getValByPath(config, confPath)

      /* 跳过一样的值或在旧配置中不存在的值 */
      
      if (oldVal === val || oldVal === undefined) {
        return
      }

      console.log('setGlobalStorageByObj', confPath, val)

      this.setGlobalStorage(confPath, val)
    })
  }

  clearLocalStorage() {
    if (isLocalStorageUsable()) {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(this.opts.prefix)) {
          rawLocalStorage.removeItem(key)
        }
      })
    }
  }

  clearGlobalStorage() {
    if (isGlobalStorageUsable()) {
      const globalStorage = window.GM_listValues() as string[]
      globalStorage.forEach((key) => {
        if (key.startsWith(this.opts.prefix)) {
          window.GM_deleteValue(key)
        }
      })
    }
  }

  mergeDefConf(conf: Record<string, any>): Record<string, any> {
    return mergeObj(this.opts.config, conf)
  }
}

/* 使用示例： */
// const myConfig = new ConfigManager({
//   prefix: '_myConfig_',
//   config: {
//     hotkeys: [
//       {
//         desc: '测试',
//         key: 'v',
//         command: 'toogleVisible',
//         /* 如需禁用快捷键，将disabled设为true */
//         disabled: false,
//       },
//     ],
//     enable: true,
//     debug: false,
//   },
// })
// myConfig.set('enable', false)
// /* 对于数组，暂不支持直接修改数组元素，需要先获取数组，再修改数组元素，再重新写入 */
// const hotkeys = myConfig.get('hotkeys')
// hotkeys[0].disabled = true
// myConfig.set('hotkeys', hotkeys)
