/* 伪装当前处于可视状态 */
function fakeVisible () {
  const descriptor = { writable: false, configurable: true, enumerable: false }
  Object.defineProperty(document, 'visibilityState', { value: 'visible', ...descriptor })
  Object.defineProperty(document, 'hidden', { value: false, ...descriptor })

  Object.defineProperty(document, 'webkitVisibilityState', { value: 'visible', ...descriptor })
  Object.defineProperty(document, 'webkitHidden', { value: false, ...descriptor })

  /* visibilitychange会同时作用于document和window */
  document.dispatchEvent(new window.Event('visibilitychange'))
  window.dispatchEvent(new window.Event('visibilitychange'))
  window.dispatchEvent(new window.Event('focus'))
  // window.dispatchEvent(new window.Event('pageshow'))
}

/* 伪装当前处于不可视状态 */
function fakeHidden () {
  const descriptor = { writable: false, configurable: true, enumerable: false }
  Object.defineProperty(document, 'visibilityState', { value: 'hidden', ...descriptor })
  Object.defineProperty(document, 'hidden', { value: true, ...descriptor })

  Object.defineProperty(document, 'webkitVisibilityState', { value: 'hidden', ...descriptor })
  Object.defineProperty(document, 'webkitHidden', { value: true, ...descriptor })

  /* visibilitychange会同时作用于document和window */
  document.dispatchEvent(new window.Event('visibilitychange'))
  window.dispatchEvent(new window.Event('visibilitychange'))

  window.dispatchEvent(new window.Event('blur'))
  // window.dispatchEvent(new window.Event('pagehide'))
}

/* 事件的测试代码 */
// const events = ['visibilitychange', 'pagehide', 'pageshow', 'blur', 'focus', 'focusin', 'focusout', 'load', 'unload']
// events.forEach((eventName) => {
//   document.addEventListener(eventName, (event) => {
//     console.log(`[document][${event.type}]`, document.visibilityState, event)
//   })

//   document.body.addEventListener(eventName, (event) => {
//     console.log(`[document.body][${event.type}]`, document.visibilityState, event)
//   })

//   window.addEventListener(eventName, (event) => {
//     console.log(`[window][${event.type}]`, document.visibilityState, event)
//   })
// })

export { fakeVisible, fakeHidden }
