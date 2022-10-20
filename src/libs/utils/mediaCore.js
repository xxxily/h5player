import original from './original'

/**
 * 媒体标签检测，可以检测出viode、audio、以及其它标签名经过改造后的媒体Element
 * @param {Function} handler -必选 检出后要执行的回调函数
 * @returns mediaElementList
 */
const mediaCore = (function () {
  let hasMediaCoreInit = false
  let hasProxyHTMLMediaElement = false
  let originDescriptors = {}
  const originMethods = {}
  const mediaElementList = []
  const mediaElementHandler = []
  const mediaMap = new original.Map()

  const firstUpperCase = str => str.replace(/^\S/, s => s.toUpperCase())
  function isHTMLMediaElement (el) {
    return el instanceof original.HTMLMediaElement
  }

  /**
   * 根据HTMLMediaElement的实例对象创建增强控制的相关API函数，从而实现锁定播放倍速，锁定暂停和播放等增强功能
   * @param {*} mediaElement - 必选，HTMLMediaElement的具体实例，例如网页上的video标签或new Audio()等
   * @returns mediaPlusApi
   */
  function createMediaPlusApi (mediaElement) {
    if (!isHTMLMediaElement(mediaElement)) { return false }

    let mediaPlusApi = original.map.get.call(mediaMap, mediaElement)
    if (mediaPlusApi) {
      return mediaPlusApi
    }

    /* 创建MediaPlusApi对象 */
    mediaPlusApi = {}
    const mediaPlusBaseApi = {
      /**
       * 创建锁，阻止外部逻辑操作mediaElement相关的属性或函数
       * 这里的锁逻辑只是数据状态标注和切换，具体的锁功能需在
       * proxyPrototypeMethod和hijackPrototypeProperty里实现
       */
      lock (keyName, duration) {
        const infoKey = `__${keyName}_info__`
        mediaPlusApi[infoKey] = mediaPlusApi[infoKey] || {}
        mediaPlusApi[infoKey].lock = true

        /* 解锁时间信息 */
        duration = Number(duration)
        if (!Number.isNaN(duration) && duration > 0) {
          mediaPlusApi[infoKey].unLockTime = Date.now() + duration
        }
      },
      unLock (keyName) {
        const infoKey = `__${keyName}_info__`
        mediaPlusApi[infoKey] = mediaPlusApi[infoKey] || {}
        mediaPlusApi[infoKey].lock = false
        mediaPlusApi[infoKey].unLockTime = Date.now() - 100
      },
      isLock (keyName) {
        const info = mediaPlusApi[`__${keyName}_info__`] || {}

        if (info.unLockTime) {
          /* 延时锁根据当前时间计算是否还处于锁状态 */
          return Date.now() < info.unLockTime
        } else {
          return info.lock || false
        }
      },

      /* 注意：调用此处的get和set和apply不受锁的限制 */
      get (keyName) {
        if (originDescriptors[keyName] && originDescriptors[keyName].get && !originMethods[keyName]) {
          return originDescriptors[keyName].get.apply(mediaElement)
        }
      },
      set (keyName, val) {
        if (originDescriptors[keyName] && originDescriptors[keyName].set && !originMethods[keyName] && typeof val !== 'undefined') {
          original.console.log(`[mediaPlusApi][${keyName}] 执行原生set操作`)
          return originDescriptors[keyName].set.apply(mediaElement, [val])
        }
      },
      apply (keyName) {
        if (originMethods[keyName] instanceof Function) {
          const args = Array.from(arguments)
          args.shift()
          original.console.log(`[mediaPlusApi][${keyName}] 执行原生apply操作`)
          return originMethods[keyName].apply(mediaElement, args)
        }
      }
    }

    mediaPlusApi = { ...mediaPlusApi, ...mediaPlusBaseApi }

    /**
     * 扩展api列表。实现'playbackRate', 'volume', 'currentTime', 'play', 'pause'的纯api调用效果，具体可用API如下：
     * mediaPlusApi.lockPlaybackRate()
     * mediaPlusApi.unLockPlaybackRate()
     * mediaPlusApi.isLockPlaybackRate()
     * mediaPlusApi.getPlaybackRate()
     * mediaPlusApi.setPlaybackRate(val)
     *
     * mediaPlusApi.lockVolume()
     * mediaPlusApi.unLockVolume()
     * mediaPlusApi.isLockVolume()
     * mediaPlusApi.getVolume()
     * mediaPlusApi.setVolume(val)
     *
     * mediaPlusApi.lockCurrentTime()
     * mediaPlusApi.unLockCurrentTime()
     * mediaPlusApi.isLockCurrentTime()
     * mediaPlusApi.getCurrentTime()
     * mediaPlusApi.setCurrentTime(val)
     *
     * mediaPlusApi.lockPlay()
     * mediaPlusApi.unLockPlay()
     * mediaPlusApi.isLockPlay()
     * mediaPlusApi.applyPlay()
     *
     * mediaPlusApi.lockPause()
     * mediaPlusApi.unLockPause()
     * mediaPlusApi.isLockPause()
     * mediaPlusApi.applyPause()
     */
    const extApiKeys = ['playbackRate', 'volume', 'currentTime', 'play', 'pause']
    const baseApiKeys = Object.keys(mediaPlusBaseApi)
    extApiKeys.forEach(key => {
      baseApiKeys.forEach(baseKey => {
        /* 当key对应的是函数时，不应该有get、set的api，而应该有apply的api */
        if (originMethods[key] instanceof Function) {
          if (baseKey === 'get' || baseKey === 'set') {
            return true
          }
        } else if (baseKey === 'apply') {
          return true
        }

        mediaPlusApi[`${baseKey}${firstUpperCase(key)}`] = function () {
          return mediaPlusBaseApi[baseKey].apply(null, [key, ...arguments])
        }
      })
    })

    original.map.set.call(mediaMap, mediaElement, mediaPlusApi)

    return mediaPlusApi
  }

  /* 检测到media对象的处理逻辑，依赖Proxy对media函数的代理 */
  function mediaDetectHandler (ctx) {
    if (isHTMLMediaElement(ctx) && !mediaElementList.includes(ctx)) {
      // console.log(`[mediaDetectHandler]`, ctx)
      mediaElementList.push(ctx)
      createMediaPlusApi(ctx)

      try {
        mediaElementHandler.forEach(handler => {
          (handler instanceof Function) && handler(ctx)
        })
      } catch (e) {}
    }
  }

  /* 代理方法play和pause方法，确保能正确暂停和播放 */
  function proxyPrototypeMethod (element, methodName) {
    const originFunc = element && element.prototype[methodName]
    if (!originFunc) return

    element.prototype[methodName] = new original.Proxy(originFunc, {
      apply (target, ctx, args) {
        mediaDetectHandler(ctx)
        // original.console.log(`[mediaElementMethodProxy] 执行代理后的${methodName}函数`)

        /* 对播放暂停逻辑进行增强处理，例如允许通过mediaPlusApi进行锁定 */
        if (['play', 'pause'].includes(methodName)) {
          const mediaPlusApi = createMediaPlusApi(ctx)
          if (mediaPlusApi && mediaPlusApi.isLock(methodName)) {
            original.console.log(`[mediaElementMethodProxy] ${methodName}已被锁定，无法执行相关操作`)
            return
          }
        }

        const result = target.apply(ctx, args)

        // TODO 对函数执行结果进行观察判断

        return result
      }
    })

    // 不建议对HTMLMediaElement的原型链进行扩展，这样容易让网页检测到mediaCore增强逻辑的存在
    // if (originMethods[methodName]) {
    //   element.prototype[`__${methodName}__`] = originMethods[methodName]
    // }
  }

  /**
   * 劫持 playbackRate、volume、currentTime 属性，并增加锁定的逻辑，从而实现更强的抗干扰能力
   */
  function hijackPrototypeProperty (element, property) {
    if (!element || !element.prototype || !originDescriptors[property]) {
      return false
    }

    original.Object.defineProperty.call(Object, element.prototype, property, {
      configurable: true,
      enumerable: true,
      get: function () {
        const val = originDescriptors[property].get.apply(this, arguments)
        // original.console.log(`[mediaElementPropertyHijack][${property}][get]`, val)
        return val
      },
      set: function (value) {
        // original.console.log(`[mediaElementPropertyHijack][${property}][set]`, value)

        if (property === 'src') {
          mediaDetectHandler(this)
        }

        /* 对调速、调音和进度控制逻辑进行增强处理，例如允许通过mediaPlusApi这些功能进行锁定 */
        if (['playbackRate', 'volume', 'currentTime'].includes(property)) {
          const mediaPlusApi = createMediaPlusApi(this)
          if (mediaPlusApi && mediaPlusApi.isLock(property)) {
            original.console.log(`[mediaElementPropertyHijack] ${property}已被锁定，无法执行相关操作`)
            return
          }
        }

        return originDescriptors[property].set.apply(this, arguments)
      }
    })
  }

  function mediaPlus (mediaElement) {
    return createMediaPlusApi(mediaElement)
  }

  function mediaProxy () {
    if (!hasProxyHTMLMediaElement) {
      const proxyMethods = ['play', 'pause', 'load', 'addEventListener']
      proxyMethods.forEach(methodName => { proxyPrototypeMethod(HTMLMediaElement, methodName) })

      const hijackProperty = ['playbackRate', 'volume', 'currentTime', 'src']
      hijackProperty.forEach(property => { hijackPrototypeProperty(HTMLMediaElement, property) })

      hasProxyHTMLMediaElement = true
    }

    return hasProxyHTMLMediaElement
  }

  /**
   * 媒体标签检测，可以检测出viode、audio、以及其它标签名经过改造后的媒体Element
   * @param {Function} handler -必选 检出后要执行的回调函数
   * @returns mediaElementList
   */
  function mediaChecker (handler) {
    if (!(handler instanceof Function) || mediaElementHandler.includes(handler)) {
      return mediaElementList
    } else {
      mediaElementHandler.push(handler)
    }

    if (!hasProxyHTMLMediaElement) {
      mediaProxy()
    }

    return mediaElementList
  }

  /**
   * 初始化mediaCore相关功能
   */
  function init (mediaCheckerHandler) {
    if (hasMediaCoreInit) { return false }

    originDescriptors = Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype)

    Object.keys(HTMLMediaElement.prototype).forEach(key => {
      try {
        if (HTMLMediaElement.prototype[key] instanceof Function) {
          originMethods[key] = HTMLMediaElement.prototype[key]
        }
      } catch (e) {}
    })

    mediaCheckerHandler = mediaCheckerHandler instanceof Function ? mediaCheckerHandler : function () {}
    mediaChecker(mediaCheckerHandler)

    hasMediaCoreInit = true
    return true
  }

  return {
    init,
    mediaPlus,
    mediaChecker,
    originDescriptors,
    originMethods,
    mediaElementList
  }
})()

export default mediaCore
