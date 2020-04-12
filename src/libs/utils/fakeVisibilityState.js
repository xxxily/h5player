/* 伪装当前处于可视状态 */
function fakeVisible () {
  Object.defineProperty(document, 'visibilityState', { value: 'visible', writable: false })
  Object.defineProperty(document, 'hidden', { value: false, writable: false })
  document.dispatchEvent(new window.Event('visibilitychange'))
}

/* 伪装当前处于不可视状态 */
function fakeHidden () {
  Object.defineProperty(document, 'visibilityState', { value: 'hidden', writable: false })
  Object.defineProperty(document, 'hidden', { value: true, writable: false })
  document.dispatchEvent(new window.Event('visibilitychange'))
}

export { fakeVisible, fakeHidden }
