/**
 * 事件侦听hack
 * @param config.debug {Boolean} -可选 开启调试模式，调试模式下会把所有注册的事件都挂载到 window._listenerList_ 对象下，用于调试分析
 * @param config.proxyNodeType {String|Array} -可选 对某些类型的dom标签的事件进行代理处理
 * 请不要对一些非常常见的标签进行事件代理，过多的代理会造成严重的性能消耗
 */
function hackEventListener (config) {
  config = config || {
    debug: false,
    proxyAll: false,
    proxyNodeType: []
  }

  /* 对proxyNodeType数据进行预处理，将里面的字符变成大写 */
  let proxyNodeType = Array.isArray(config.proxyNodeType) ? config.proxyNodeType : [config.proxyNodeType]
  const tmpArr = []
  proxyNodeType.forEach(type => {
    if (typeof type === 'string') {
      tmpArr.push(type.toUpperCase())
    }
  })
  proxyNodeType = tmpArr

  const EVENT = window.EventTarget.prototype
  if (EVENT._addEventListener) return
  EVENT._addEventListener = EVENT.addEventListener
  EVENT._removeEventListener = EVENT.removeEventListener
  // 挂载到全局用于调试
  window._listenerList_ = window._listenerList_ || {}

  // hack addEventListener
  EVENT.addEventListener = function () {
    const t = this
    const arg = arguments
    const type = arg[0]
    const listener = arg[1]

    if (!listener) {
      return false
    }

    /* 把sourceopen事件干掉，则好多网站视频都将播放不了 */
    // if (/sourceopen/gi.test(type)) {
    //   console.log('------------------------------')
    //   console.log(type, listener)
    //   return false
    // }

    /**
     * 使用了Symbol之后，某些页面下会和 raven-js发生冲突，所以必须进行 try catch
     * TODO 如何解决该问题待研究，测试页面：https://xueqiu.com/S/SZ300498
     */
    try {
      /**
       * 对监听函数进行代理
       * 为了降低对性能的影响，此处只对特定的标签的事件进行代理
       */
      const listenerSymbol = Symbol.for(listener)
      let listenerProxy = null
      if (config.proxyAll || proxyNodeType.includes(t.nodeName)) {
        try {
          listenerProxy = new Proxy(listener, {
            apply (target, ctx, args) {
              // const event = args[0]
              // console.log(event.type, event, target)

              /* 让外部通过 _listenerProxyApplyHandler_ 控制事件的执行 */
              if (t._listenerProxyApplyHandler_ instanceof Function) {
                const handlerResult = t._listenerProxyApplyHandler_(target, ctx, args, arg)
                if (handlerResult !== undefined) {
                  return handlerResult
                }
              }

              return target.apply(ctx, args)
            }
          })

          /* 挂载listenerProxy到自身，方便快速查找 */
          listener[listenerSymbol] = listenerProxy

          /* 使用listenerProxy替代本来应该进行侦听的listener */
          arg[1] = listenerProxy
        } catch (e) {
          // console.error('listenerProxy error:', e)
        }
      }
      t._addEventListener.apply(t, arg)
      t._listeners = t._listeners || {}
      t._listeners[type] = t._listeners[type] || []
      const listenerObj = {
        target: t,
        type,
        listener,
        listenerProxy,
        options: arg[2],
        addTime: new Date().getTime()
      }
      t._listeners[type].push(listenerObj)

      /* 挂载到全局对象用于观测调试 */
      if (config.debug) {
        window._listenerList_[type] = window._listenerList_[type] || []
        window._listenerList_[type].push(listenerObj)
      }
    } catch (e) {
      t._addEventListener.apply(t, arg)
      // console.error(e)
    }
  }

  // hack removeEventListener
  EVENT.removeEventListener = function () {
    const arg = arguments
    const type = arg[0]
    const listener = arg[1]

    if (!listener) {
      return false
    }

    try {
      /* 对arg[1]重新赋值，以便正确卸载对应的监听函数 */
      const listenerSymbol = Symbol.for(listener)
      arg[1] = listener[listenerSymbol] || listener

      this._removeEventListener.apply(this, arg)
      this._listeners = this._listeners || {}
      this._listeners[type] = this._listeners[type] || []

      const result = []
      this._listeners[type].forEach(listenerObj => {
        if (listenerObj.listener !== listener) {
          result.push(listenerObj)
        }
      })
      this._listeners[type] = result

      /* 从全局列表中移除 */
      if (config.debug) {
        const result = []
        const listenerTypeList = window._listenerList_[type] || []
        listenerTypeList.forEach(listenerObj => {
          if (listenerObj.listener !== listener) {
            result.push(listenerObj)
          }
        })
        window._listenerList_[type] = result
      }
    } catch (e) {
      this._removeEventListener.apply(this, arg)
      console.error(e)
    }
  }

  /* 对document下的事件侦听方法进行hack */
  try {
    if (document.addEventListener !== EVENT.addEventListener) {
      document.addEventListener = EVENT.addEventListener
    }
    if (document.removeEventListener !== EVENT.removeEventListener) {
      document.removeEventListener = EVENT.removeEventListener
    }

    // if (window.addEventListener !== EVENT.addEventListener) {
    //   window.addEventListener = EVENT.addEventListener
    // }
    // if (window.removeEventListener !== EVENT.removeEventListener) {
    //   window.removeEventListener = EVENT.removeEventListener
    // }
  } catch (e) {
    console.error(e)
  }
}

export default hackEventListener
