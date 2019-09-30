class MouseObserver {
  constructor (observeOpt) {
    // eslint-disable-next-line no-undef
    this.observer = new IntersectionObserver((infoList) => {
      infoList.forEach((info) => {
        info.target.IntersectionObserverEntry = info
      })
    }, observeOpt || {})

    this.observeList = []
  }

  _observe (target) {
    let hasObserve = false
    for (let i = 0; i < this.observeList.length; i++) {
      const el = this.observeList[i]
      if (target === el) {
        hasObserve = true
        break
      }
    }

    if (!hasObserve) {
      this.observer.observe(target)
      this.observeList.push(target)
    }
  }

  _unobserve (target) {
    this.observer.unobserve(target)
    const newObserveList = []
    this.observeList.forEach((el) => {
      if (el !== target) {
        newObserveList.push(el)
      }
    })
    this.observeList = newObserveList
  }

  on (target, type, listener, options) {
    const t = this
    t._observe(target)

    if (!target.MouseObserverEvent) {
      target.MouseObserverEvent = {}
    }
    target.MouseObserverEvent[type] = true

    if (!t._mouseObserver_) {
      t._mouseObserver_ = {}
    }

    if (!t._mouseObserver_[type]) {
      t._mouseObserver_[type] = []

      window.addEventListener(type, (event) => {
        t.observeList.forEach((target) => {
          const isVisibility = target.IntersectionObserverEntry && target.IntersectionObserverEntry.intersectionRatio > 0
          const isReg = target.MouseObserverEvent[event.type] === true
          if (isVisibility && isReg) {
            /* 判断是否符合触发侦听器事件条件 */
            const bound = target.getBoundingClientRect()
            const offsetX = event.x - bound.x
            const offsetY = event.y - bound.y
            const isNeedTap = offsetX <= bound.width && offsetX >= 0 && offsetY <= bound.height && offsetY >= 0

            if (isNeedTap) {
              /* 执行监听回调 */
              const listenerList = t._mouseObserver_[type]
              listenerList.forEach((listener) => {
                if (listener instanceof Function) {
                  listener.call(t, event, {
                    x: offsetX,
                    y: offsetY
                  })
                }
              })
            }
          }
        })
      }, options)
    }

    /* 将监听回调加入到事件队列 */
    if (listener instanceof Function) {
      t._mouseObserver_[type].push(listener)
    }
  }
}

var mouseObserver = new MouseObserver()
mouseObserver.on(document.querySelector('#additional-info'), 'click', (event, offset) => {
  console.log('偏移信息：', offset, event)
})

export default MouseObserver
