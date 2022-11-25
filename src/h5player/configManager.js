/*!
configManager parse localStorage error * @name         configManager.js
 * @description  配置统一管理脚本
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/09/20 16:10
 * @github       https://github.com/xxxily
 */

/**
 * 由于h5player是针对多网页，多域名的脚本，所以每个配置项都需要单独写入和读取，
 * 而不能采用local-storage-proxy这种将所有配置项都放在一个对象里统一管理的配置模式
 * 配置项集中在一个对象里进行统管的问题在于：配置项会因为缺乏锁机制和状态同步机制而导致配置相互冲突、相互覆盖，具体表现为：
 * 当某个配置项需要变更时，整个配置对象都要被写入覆盖原来的对象，这在只打开了一个页面的情况下问题不大，但在打开了多页的情况下则存在致命的问题：
 * 所有已打开的页面都读取了一份配置到内存，一个页面更新配置后，并不能将修改的值同步到别的页面内存中去
 * 这个时候，如果另外一个页面也要修改另外一项配置，则只会修改它想修改的项，而其它项只会按照原先读取且已存在于内存的状态覆盖回去，
 * 这就会导致A页面更改了配置，切换到B页面后又被莫名地覆写回去了
 * 所以需要configManager来解决原先采用local-storage-proxy和monkeyStorageProxy管理配置产生的问题
 */

import {
  getValByPath,
  setValByPath,
  mergeObj
} from '../libs/utils/index'

/**
 * 判断localStorage是否可用
 * localStorage并不能保证100%可用，所以使用前必须进行判断，否则会导致部分网站下脚本出现异常
 * https://stackoverflow.com/questions/30481516/iframe-in-chrome-error-failed-to-read-localstorage-from-window-access-deni
 * https://cloud.tencent.com/developer/article/1803097 (当localStorage不能用时，window.localStorage为null，而不是文中的undefined)
 */
function isLocalStorageUsable () {
  return window.localStorage && window.localStorage.getItem && window.localStorage.setItem
}

/**
 * 判断GlobalStorage是否可用，目前使用的GlobalStorage是基于tampermonkey提供的相关api
 * https://www.tampermonkey.net/documentation.php?ext=dhdg#GM_setValue
 */
function isGlobalStorageUsable () {
  return window.GM_setValue && window.GM_getValue && window.GM_deleteValue && window.GM_listValues
}

/**
 * 存储干净的localStorage相关方法
 * 防止localStorage对象下的方法被改写而导致读取和写入规则不一样的问题
 */
const rawLocalStorage = (function getRawLocalStorage () {
  const localStorageApis = [
    'getItem',
    'setItem',
    'removeItem',
    'clear',
    'key'
  ]

  const rawLocalStorage = {}

  localStorageApis.forEach(apiKey => {
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

const configPrefix = '_h5player_'
const defConfig = {
  media: {
    autoPlay: false,
    playbackRate: 1,
    volume: 1,

    /* 是否允许存储播放进度 */
    allowRestorePlayProgress: {

    },
    /* 视频播放进度映射表 */
    progress: {}
  },
  hotkeys: [
    {
      desc: '网页全屏',
      key: 'shift+enter',
      command: 'setWebFullScreen',
      /* 如需禁用快捷键，将disabled设为true */
      disabled: false
    },
    {
      desc: '全屏',
      key: 'enter',
      command: 'setFullScreen'
    },
    {
      desc: '切换画中画模式',
      key: 'shift+p',
      command: 'togglePictureInPicture'
    },
    {
      desc: '视频截图',
      key: 'shift+s',
      command: 'capture'
    },
    {
      desc: '启用或禁止自动恢复播放进度功能',
      key: 'shift+r',
      command: 'capture'
    },
    {
      desc: '垂直镜像翻转',
      key: 'shift+m',
      command: 'setMirror',
      args: [true]
    },
    {
      desc: '水平镜像翻转',
      key: 'm',
      command: 'setMirror'
    },
    {
      desc: '下载音视频文件（实验性功能）',
      key: 'shift+d',
      command: 'mediaDownload'
    },
    {
      desc: '缩小视频画面 -0.05',
      key: 'shift+x',
      command: 'setScaleDown'
    },
    {
      desc: '放大视频画面 +0.05',
      key: 'shift+c',
      command: 'setScaleUp'
    },
    {
      desc: '恢复视频画面',
      key: 'shift+z',
      command: 'resetTransform'
    },
    {
      desc: '画面向右移动10px',
      key: 'shift+arrowright',
      command: 'setTranslateRight'
    },
    {
      desc: '画面向左移动10px',
      key: 'shift+arrowleft',
      command: 'setTranslateLeft'
    },
    {
      desc: '画面向上移动10px',
      key: 'shift+arrowup',
      command: 'setTranslateUp'
    },
    {
      desc: '画面向下移动10px',
      key: 'shift+arrowdown',
      command: 'setTranslateDown'
    },
    {
      desc: '前进5秒',
      key: 'arrowright',
      command: 'setCurrentTimeUp'
    },
    {
      desc: '后退5秒',
      key: 'arrowleft',
      command: 'setCurrentTimeDown'
    },
    {
      desc: '前进30秒',
      key: 'ctrl+arrowright',
      command: 'setCurrentTimeUp',
      args: [30]
    },
    {
      desc: '后退30秒',
      key: 'ctrl+arrowleft',
      command: 'setCurrentTimeDown',
      args: [-30]
    },
    {
      desc: '音量升高 5%',
      key: 'arrowup',
      command: 'setVolumeUp',
      args: [0.05]
    },
    {
      desc: '音量降低 5%',
      key: 'arrowdown',
      command: 'setVolumeDown',
      args: [-0.05]
    },
    {
      desc: '音量升高 20%',
      key: 'ctrl+arrowup',
      command: 'setVolumeUp',
      args: [0.2]
    },
    {
      desc: '音量降低 20%',
      key: 'ctrl+arrowdown',
      command: 'setVolumeDown',
      args: [-0.2]
    },
    {
      desc: '切换暂停/播放',
      key: 'space',
      command: 'switchPlayStatus'
    },
    {
      desc: '减速播放 -0.1',
      key: 'x',
      command: 'setPlaybackRateDown'
    },
    {
      desc: '加速播放 +0.1',
      key: 'c',
      command: 'setPlaybackRateUp'
    },
    {
      desc: '正常速度播放',
      key: 'z',
      command: 'resetPlaybackRate'
    },
    {
      desc: '设置1x的播放速度',
      key: 'Digit1',
      command: 'setPlaybackRatePlus',
      args: 1
    },
    {
      desc: '设置1x的播放速度',
      key: 'Numpad1',
      command: 'setPlaybackRatePlus',
      args: 1
    },
    {
      desc: '设置2x的播放速度',
      key: 'Digit2',
      command: 'setPlaybackRatePlus',
      args: 2
    },
    {
      desc: '设置2x的播放速度',
      key: 'Numpad2',
      command: 'setPlaybackRatePlus',
      args: 2
    },
    {
      desc: '设置3x的播放速度',
      key: 'Digit3',
      command: 'setPlaybackRatePlus',
      args: 3
    },
    {
      desc: '设置3x的播放速度',
      key: 'Numpad3',
      command: 'setPlaybackRatePlus',
      args: 3
    },
    {
      desc: '设置4x的播放速度',
      key: 'Digit4',
      command: 'setPlaybackRatePlus',
      args: 4
    },
    {
      desc: '设置4x的播放速度',
      key: 'Numpad4',
      command: 'setPlaybackRatePlus',
      args: 4
    },
    {
      desc: '下一帧',
      key: 'F',
      command: 'freezeFrame',
      args: 1
    },
    {
      desc: '上一帧',
      key: 'D',
      command: 'freezeFrame',
      args: -1
    },
    {
      desc: '增加亮度',
      key: 'E',
      command: 'setBrightnessUp'
    },
    {
      desc: '减少亮度',
      key: 'W',
      command: 'setBrightnessDown'
    },
    {
      desc: '增加对比度',
      key: 'T',
      command: 'setContrastUp'
    },
    {
      desc: '减少对比度',
      key: 'R',
      command: 'setContrastDown'
    },
    {
      desc: '增加饱和度',
      key: 'U',
      command: 'setSaturationUp'
    },
    {
      desc: '减少饱和度',
      key: 'Y',
      command: 'setSaturationDown'
    },
    {
      desc: '增加色相',
      key: 'O',
      command: 'setHueUp'
    },
    {
      desc: '减少色相',
      key: 'I',
      command: 'setHueDown'
    },
    {
      desc: '模糊增加 1 px',
      key: 'K',
      command: 'setBlurUp'
    },
    {
      desc: '模糊减少 1 px',
      key: 'J',
      command: 'setBlurDown'
    },
    {
      desc: '图像复位',
      key: 'Q',
      command: 'resetFilterAndTransform'
    },
    {
      desc: '画面旋转 90 度',
      key: 'S',
      command: 'setRotate'
    },
    {
      desc: '播放下一集',
      key: 'N',
      command: 'setNextVideo'
    },
    {
      desc: '执行JS脚本',
      key: 'ctrl+j ctrl+s',
      command: () => {
        alert('自定义JS脚本')
      },
      when: ''
    }
  ],
  enhance: {
    /* 不禁用默认的调速逻辑，则在多个视频切换时，速度很容易被重置，所以该选项默认开启 */
    blockSetPlaybackRate: true,

    blockSetCurrentTime: false,
    blockSetVolume: false,
    allowExperimentFeatures: false,
    allowExternalCustomConfiguration: false,
    unfoldMenu: false
  },
  debug: false
}

const configManager = {
  /**
   * 将confPath转换称最终存储到localStorage或globalStorage里的键名
   * @param {String} confPath -必选，配置路径信息：例如：'enhance.blockSetPlaybackRate'
   * @returns {keyName}
   */
  getConfKeyName (confPath = '') {
    return configPrefix + confPath.replace(/\./g, '_')
  },

  /**
   * 将存储到localStorage或globalStorage里的键名转换成实际调用时候的confPath
   * @param {String} keyName -必选 存储到localStorage或globalStorage里的键名，例如：'_h5player_enhance_blockSetPlaybackRate'
   * @returns {confPath}
   */
  getConfPath (keyName = '') {
    return keyName.replace(configPrefix, '').replace(/_/g, '.')
  },

  /**
   * 根据给定的配置路径，获取相关配置信息
   * 获取顺序：LocalStorage > GlobalStorage > defConfig > null
   * @param {String} confPath -必选，配置路径信息：例如：'enhance.blockSetPlaybackRate'
   * @returns {*} 如果返回null，则表示没获取到相关配置信息
   */
  get (confPath) {
    if (typeof confPath !== 'string') {
      return null
    }

    /* 默认优先使用本地的localStorage配置 */
    const localConf = configManager.getLocalStorage(confPath)
    if (localConf !== null && localConf !== undefined) {
      return localConf
    }

    /* 如果localStorage没相关配置，则尝试使用GlobalStorage的配置 */
    const globalConf = configManager.getGlobalStorage(confPath)
    if (globalConf !== null && globalConf !== undefined) {
      return globalConf
    }

    /* 如果localStorage和GlobalStorage配置都没找到，则尝试在默认配置表里拿相关配置信息 */
    const defConfVal = getValByPath(defConfig, confPath)
    if (typeof defConfVal !== 'undefined' && defConfVal !== null) {
      return defConfVal
    }

    return null
  },

  /**
   * 将配置结果写入到localStorage或GlobalStorage
   * 写入顺序：LocalStorage > GlobalStorage
   * 无论是否写入成功都会将结果更新到defConfig里对应的配置项上
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  set (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    // setValByPath(defConfig, confPath, val)

    let sucStatus = false

    sucStatus = configManager.setLocalStorage(confPath, val)

    if (!sucStatus) {
      sucStatus = configManager.setGlobalStorage(confPath, val)
    }

    return sucStatus
  },

  /* 获取并列出当前所有已设定的配置项 */
  list () {
    const result = {
      localConf: configManager.listLocalStorage(),
      globalConf: configManager.listGlobalStorage(),
      defConfig
    }
    return result
  },

  /* 清除已经写入到本地存储里的配置项 */
  clear () {
    configManager.clearLocalStorage()
    configManager.clearGlobalStorage()
  },

  /**
   * 根据给定的配置路径，获取LocalStorage下定义的配置信息
   * @param {String} confPath -必选，配置路径信息
   * @returns
   */
  getLocalStorage (confPath) {
    if (typeof confPath !== 'string') {
      return null
    }

    const key = configManager.getConfKeyName(confPath)

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
  },

  /**
   * 根据给定的配置路径，获取GlobalStorage下定义的配置信息
   * @param {String} confPath -必选，配置路径信息
   * @returns
   */
  getGlobalStorage (confPath) {
    if (typeof confPath !== 'string') {
      return null
    }

    const key = configManager.getConfKeyName(confPath)

    if (isGlobalStorageUsable()) {
      const globalConf = window.GM_getValue(key)
      if (globalConf !== null && globalConf !== undefined) {
        return globalConf
      }
    }

    return null
  },

  /**
   * 将配置结果写入到localStorage里
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  setLocalStorage (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    setValByPath(defConfig, confPath, val)

    const key = configManager.getConfKeyName(confPath)

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
  },

  /**
   * 将配置结果写入到globalStorage里
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  setGlobalStorage (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    setValByPath(defConfig, confPath, val)

    const key = configManager.getConfKeyName(confPath)

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
  },

  listLocalStorage () {
    if (isLocalStorageUsable()) {
      const result = {}
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(configPrefix)) {
          const confPath = configManager.getConfPath(key)
          result[confPath] = configManager.getLocalStorage(confPath)
        }
      })
      return result
    } else {
      return {}
    }
  },

  listGlobalStorage () {
    if (isGlobalStorageUsable()) {
      const result = {}
      const globalStorage = window.GM_listValues()
      globalStorage.forEach(key => {
        if (key.startsWith(configPrefix)) {
          const confPath = configManager.getConfPath(key)
          result[confPath] = configManager.getGlobalStorage(confPath)
        }
      })
      return result
    } else {
      return {}
    }
  },

  clearLocalStorage () {
    if (isLocalStorageUsable()) {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(configPrefix)) {
          rawLocalStorage.removeItem(key)
        }
      })
    }
  },

  clearGlobalStorage () {
    if (isGlobalStorageUsable()) {
      const globalStorage = window.GM_listValues()
      globalStorage.forEach(key => {
        if (key.startsWith(configPrefix)) {
          window.GM_deleteValue(key)
        }
      })
    }
  },

  mergeDefConf (conf) { return mergeObj(defConfig, conf) }
}

export default configManager
