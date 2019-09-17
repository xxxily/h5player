/* 事件侦听hack */
function hackEventListener () {
  const EVENT = window.EventTarget.prototype
  if (EVENT._addEventListener) return
  EVENT._addEventListener = EVENT.addEventListener
  EVENT._removeEventListener = EVENT.removeEventListener
  window._listenerList_ = []

  // hack addEventListener
  EVENT.addEventListener = function () {
    const arg = arguments
    const type = arg[0]
    const listener = arg[1]
    this._addEventListener.apply(this, arg)
    this._listeners = this._listeners || {}
    this._listeners[type] = this._listeners[type] || []
    const listenerObj = {
      target: this,
      type,
      listener,
      options: arg[2],
      addTime: new Date().getTime()
    }
    window._listenerList_.push(listenerObj)
    this._listeners[type].push(listenerObj)
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
