/* 事件侦听hack */
function hackEventListener () {
  const EVENT = window.EventTarget.prototype
  if (EVENT._addEventListener) return
  EVENT._addEventListener = EVENT.addEventListener
  EVENT._removeEventListener = EVENT.removeEventListener
  window._listenerList_ = []

  // hack addEventListener
  EVENT.addEventListener = function () {
    const t = this
    const arg = arguments
    const type = arg[0]
    const listener = arg[1]

    /* 对监听函数进行代理 */
    const listenerProxy = new Proxy(listener, {
      apply (target, ctx, args) {
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
    arg[1] = listenerProxy

    t._addEventListener.apply(t, arg)
    t._listeners = t._listeners || {}
    t._listeners[type] = t._listeners[type] || []
    const listenerObj = {
      target: t,
      type,
      listener,
      options: arg[2],
      addTime: new Date().getTime()
    }
    window._listenerList_.push(listenerObj)
    t._listeners[type].push(listenerObj)
  }

  // hack removeEventListener
  EVENT.removeEventListener = function () {
    const arg = arguments
    const type = arg[0]
    const listener = arg[1]
    this._removeEventListener.apply(this, arg)
    this._listeners = this._listeners || {}
    this._listeners[type] = this._listeners[type] || []

    const result = []
    this._listeners[type].forEach(function (listenerObj) {
      if (listenerObj.listener !== listener) {
        result.push(listenerObj)
      }
    })
    this._listeners[type] = result
  }
}

export default hackEventListener
