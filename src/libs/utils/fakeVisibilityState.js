/* 伪装当前处于可视状态 */
function fakeVisible () {
  Object.defineProperty(document, 'visibilityState', { value: 'visible', writable: false })
  Object.defineProperty(document, 'hidden', { value: false, writable: false })

  Object.defineProperty(document, 'webkitVisibilityState', { value: 'visible', writable: false })
  Object.defineProperty(document, 'webkitHidden', { value: false, writable: false })

  document.dispatchEvent(new window.Event('visibilitychange'))
  document.dispatchEvent(new window.Event('focus'))
  window.dispatchEvent(new window.Event('pageshow'))
}

/* 伪装当前处于不可视状态 */
function fakeHidden () {
  Object.defineProperty(document, 'visibilityState', { value: 'hidden', writable: false })
  Object.defineProperty(document, 'hidden', { value: true, writable: false })

  Object.defineProperty(document, 'webkitVisibilityState', { value: 'hidden', writable: false })
  Object.defineProperty(document, 'webkitHidden', { value: true, writable: false })

  document.dispatchEvent(new window.Event('visibilitychange'))
}

export { fakeVisible, fakeHidden }
