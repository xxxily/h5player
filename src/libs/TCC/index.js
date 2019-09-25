import {
  isObj
} from '../utils/typeof'

/**
 * 任务配置中心 Task Control Center
 * 用于配置所有无法进行通用处理的任务，如不同网站的全屏方式不一样，必须调用网站本身的全屏逻辑，才能确保字幕、弹幕等正常工作
 * */

class TCC {
  constructor (taskConf, doTaskFunc) {
    this.conf = taskConf || {
      /**
       * 配置示例
       * 父级键名对应的是一级域名，
       * 子级键名对应的相关功能名称，键值对应的该功能要触发的点击选择器或者要调用的相关函数
       * 所有子级的键值都支持使用选择器触发或函数调用
       * 配置了子级的则使用子级配置逻辑进行操作，否则使用默认逻辑
       * 注意：include，exclude这两个子级键名除外，这两个是用来进行url范围匹配的
       * */
      'demo.demo': {
        fullScreen: '.fullscreen-btn',
        exitFullScreen: '.exit-fullscreen-btn',
        webFullScreen: function () {},
        exitWebFullScreen: '.exit-fullscreen-btn',
        autoPlay: '.player-start-btn',
        pause: '.player-pause',
        play: '.player-play',
        switchPlayStatus: '.player-play',
        playbackRate: function () {},
        currentTime: function () {},
        addCurrentTime: '.add-currenttime',
        subtractCurrentTime: '.subtract-currenttime',
        // 自定义快捷键的执行方式，如果是组合键，必须是 ctrl-->shift-->alt 这样的顺序，没有可以忽略，键名必须全小写
        shortcuts: {
          /* 注册要执行自定义回调操作的快捷键 */
          register: [
            'ctrl+shift+alt+c',
            'ctrl+shift+c',
            'ctrl+alt+c',
            'ctrl+c',
            'c'
          ],
          /* 自定义快捷键的回调操作 */
          callback: function (h5Player, taskConf, data) {
            const { event, player } = data
            console.log(event, player)
          }
        },
        /* 当前域名下需包含的路径信息，默认整个域名下所有路径可用 必须是正则 */
        include: /^.*/,
        /* 当前域名下需排除的路径信息，默认不排除任何路径 必须是正则 */
        exclude: /\t/
      }
    }

    // 通过doTaskFunc回调定义配置该如何执行任务
    this.doTaskFunc = doTaskFunc instanceof Function ? doTaskFunc : function () {}
  }

  /**
   * 获取域名 , 目前实现方式不好，需改造，对地区性域名（如com.cn）、三级及以上域名支持不好
   * */
  getDomain () {
    const host = window.location.host
    let domain = host
    const tmpArr = host.split('.')
    if (tmpArr.length > 2) {
      tmpArr.shift()
      domain = tmpArr.join('.')
    }
    return domain
  }

  /**
   * 格式化配置任务
   * @param isAll { boolean } -可选 默认只格式当前域名或host下的配置任务，传入true则将所有域名下的任务配置都进行格式化
   */
  formatTCC (isAll) {
    const t = this
    const keys = Object.keys(t.conf)
    const domain = t.getDomain()
    const host = window.location.host

    function formatter (item) {
      const defObj = {
        include: /^.*/,
        exclude: /\t/
      }
      item.include = item.include || defObj.include
      item.exclude = item.exclude || defObj.exclude
      return item
    }

    const result = {}
    keys.forEach(function (key) {
      let item = t[key]
      if (isObj(item)) {
        if (isAll) {
          item = formatter(item)
          result[key] = item
        } else {
          if (key === host || key === domain) {
            item = formatter(item)
            result[key] = item
          }
        }
      }
    })
    return result
  }

  /* 判断所提供的配置任务是否适用于当前URL */
  isMatch (taskConf) {
    const url = window.location.href
    let isMatch = false
    if (!taskConf.include && !taskConf.exclude) {
      isMatch = true
    } else {
      if (taskConf.include && taskConf.include.test(url)) {
        isMatch = true
      }
      if (taskConf.exclude && taskConf.exclude.test(url)) {
        isMatch = false
      }
    }
    return isMatch
  }

  /**
   * 获取任务配置，只能获取到当前域名下的任务配置信息
   * @param taskName {string} -可选 指定具体任务，默认返回所有类型的任务配置
   */
  getTaskConfig () {
    const t = this
    if (!t._hasFormatTCC_) {
      t.formatTCC()
      t._hasFormatTCC_ = true
    }
    const domain = t.getDomain()
    const taskConf = t.conf[window.location.host] || t.conf[domain]

    if (taskConf && t.isMatch(taskConf)) {
      return taskConf
    }

    return {}
  }

  /**
   * 执行当前页面下的相应任务
   * @param taskName {object|string} -必选，可直接传入任务配置对象，也可用是任务名称的字符串信息，自己去查找是否有任务需要执行
   * @param data {object} -可选，传给回调函数的数据
   */
  doTask (taskName, data) {
    const t = this
    let isDo = false
    if (!taskName) return isDo
    const taskConf = isObj(taskName) ? taskName : t.getTaskConfig()

    if (!isObj(taskConf) || !taskConf[taskName]) return isDo

    const task = taskConf[taskName]

    if (task) {
      isDo = t.doTaskFunc(taskName, taskConf, data)
    }

    return isDo
  }
}

export default TCC
