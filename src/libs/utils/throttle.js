/**
 * 简单的节流函数
 * @param fn
 * @param interval
 * @returns {Function}
 */
function throttle (fn, interval = 80) {
  let timeout = null
  return function () {
    if (timeout) return false
    timeout = setTimeout(() => {
      timeout = null
    }, interval)
    fn.apply(this, arguments)
  }
}

export { throttle }
