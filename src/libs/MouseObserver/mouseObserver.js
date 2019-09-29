function mouseObserver (selector) {
  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver((infoList) => {
    infoList.forEach((info) => {
      const {
        boundingClientRect,
        intersectionRatio,
        intersectionRect,
        isIntersecting,
        isVisible,
        rootBounds,
        time
      } = info

      info.target.IntersectionObserverEntry = {
        boundingClientRect,
        intersectionRatio,
        intersectionRect,
        isIntersecting,
        isVisible,
        rootBounds,
        time
      }
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

mouseObserver('section#sect15')
