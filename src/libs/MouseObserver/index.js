/**
 * 鼠标事件观测对象
 * 用于实现鼠标事件的穿透响应，有别于pointer-events:none
 * pointer-events:none是设置当前层允许穿透
 * 而MouseObserver是：即使不知道target上面存在多少层遮挡，一样可以响应鼠标事件
 */

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

  /**
   * 增加事件绑定
   * @param target {element} -必选 要绑定事件的dom对象
   * @param type {string} -必选 要绑定的事件，只支持鼠标事件
   * @param listener {function} -必选 符合触发条件时的响应函数
   */
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
                  }, target)
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

  /**
   * 解除事件绑定
   * @param target {element} -必选 要解除事件的dom对象
   * @param type {string} -必选 要解除的事件，只支持鼠标事件
   * @param listener {function} -必选 绑定事件时的响应函数
   * @returns {boolean}
   */
  off (target, type, listener) {
    const t = this
    if (!target || !type || !listener || !t._mouseObserver_ || !t._mouseObserver_[type] || !target.MouseObserverEvent || !target.MouseObserverEvent[type]) return false

    const newListenerList = []
    const listenerList = t._mouseObserver_[type]
    let isMatch = false
    listenerList.forEach((listenerItem) => {
      if (listenerItem === listener) {
        isMatch = true
      } else {
        newListenerList.push(listenerItem)
      }
    })

    if (isMatch) {
      t._mouseObserver_[type] = newListenerList

      /* 侦听器已被完全移除 */
      if (newListenerList.length === 0) {
        delete target.MouseObserverEvent[type]
      }

      /* 当MouseObserverEvent为空对象时移除观测对象 */
      if (JSON.stringify(target.MouseObserverEvent[type]) === '{}') {
        t._unobserve(target)
      }
    }
  }
}

// 测试代码
// var mouseObserver = new MouseObserver()
// var target = document.querySelector('#additional-info')
// var listener = (event, offset, target) => {
//   console.log('偏移信息：', offset, event, target)
// }
// mouseObserver.on(target, 'click', listener)
// setTimeout(function () {
//   mouseObserver.off(target, 'click', listener)
// }, 1000 * 10)

export default MouseObserver
