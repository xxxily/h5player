/* js实现监控触屏长按时间达到10秒则输出个提示，要封装成可单独调用的纯函数 */
function touchLongPress (element, callback, timeout = 10000) {
  let timer

  function onTouchStart () {
    clearTimeout(timer)
    timer = setTimeout(callback, timeout)
  }

  function onTouchEnd () {
    clearTimeout(timer)
  }

  element.addEventListener('touchstart', onTouchStart, true)
  element.addEventListener('touchend', onTouchEnd, true)

  return function cleanup () {
    element.removeEventListener('touchstart', onTouchStart)
    element.removeEventListener('touchend', onTouchEnd)
  }
}

touchLongPress(document.body, () => {
  alert('You have pressed for 10 seconds!')
})

/* js实现判断当前页面处于横屏还是直屏模式，要考虑各种兼容情况 */

function isPortrait () {
  if ('orientation' in window.screen) {
    return window.screen.orientation.type.includes('portrait')
  } else {
    return window.innerHeight > window.innerWidth
  }
}
window.addEventListener('resize', function () {
  if (isPortrait()) {
    console.log('当前处于竖屏模式')
  } else {
    console.log('当前处于横屏模式')
  }
})

function handleClickInCenter (element) {
  const rect = element.getBoundingClientRect()
  const center = {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  }

  return function (e) {
    const dx = e.clientX - center.x
    const dy = e.clientY - center.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance <= 60) {
      alert('You clicked in the center!')
    }
  }
}

// 使用示例
const myElement = document.getElementById('my-element')
myElement.addEventListener('click', handleClickInCenter(myElement))
