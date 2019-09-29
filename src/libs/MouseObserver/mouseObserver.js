class MouseObserver {
  constructor () {
    // eslint-disable-next-line no-undef
    this.observer = new IntersectionObserver((infoList) => {
      infoList.forEach((info) => {
        const target = info.target
        delete info.target
        target.IntersectionObserverEntry = info
      })
    }, {})

    this.observeList = []

    window.addEventListener('click', (event) => {
      this.observeList.forEach((el) => {
        if (el.IntersectionObserverEntry && el.IntersectionObserverEntry.intersectionRatio > 0) {
          const { x, y } = event
          console.log('当前视窗位置：', x, y)
          console.log('intersectionInfo:', el.IntersectionObserverEntry)
          console.log('元素位置信息：', el.getBoundingClientRect())
        }
      })
    })
  }

  observe (target) {
    this.observer.observe(target)
    let hasObserve = false

    for (let i = 0; i < this.observeList.length; i++) {
      const el = this.observeList[i]
      if (target === el) {
        hasObserve = true
        break
      }
    }

    if (!hasObserve) {
      this.observeList.push(target)
    }
  }

  unobserve (target) {
    this.observer.unobserve(target)
    const newObserveList = []
    this.observeList.forEach((el) => {
      if (el !== target) {
        newObserveList.push(el)
      }
    })
    this.observeList = newObserveList
  }

  on (type, listener, options) {
    window.addEventListener(type, (event) => {
      this.observeList.forEach((el) => {
        if (el.IntersectionObserverEntry && el.IntersectionObserverEntry.intersectionRatio > 0) {
          const { x, y } = event
          console.log('当前视窗位置：', x, y)
          console.log('intersectionInfo:', el.IntersectionObserverEntry)
          console.log('元素位置信息：', el.getBoundingClientRect())
        }
      })
    }, options)
  }
}

export default MouseObserver

function mouseObserver (selector) {
  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver((infoList) => {
    infoList.forEach((info) => {
      info.target.IntersectionObserverEntry = info
    })
  }, {})

  const observeList = []

  const el = document.querySelector(selector)
  if (el) {
    observer.observe(el)
    observeList.push(el)
  }

  window.addEventListener('click', (event) => {
    observeList.forEach((el) => {
      if (el.IntersectionObserverEntry && el.IntersectionObserverEntry.intersectionRatio > 0) {
        const { x, y } = event
        console.log('当前视窗位置：', x, y)
        console.log('intersectionInfo:', el.IntersectionObserverEntry)
        console.log('元素位置信息：', el.getBoundingClientRect())
      }
    })
  })
}

mouseObserver('#additional-info')

// mouseObserver('section#sect15')
