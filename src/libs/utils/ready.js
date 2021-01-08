/**
 * 元素监听器
 * @param selector -必选
 * @param fn -必选，元素存在时的回调
 * @param shadowRoot -可选 指定监听某个shadowRoot下面的DOM元素
 * 参考：https://javascript.ruanyifeng.com/dom/mutationobserver.html
 */
function ready (selector, fn, shadowRoot) {
  const win = window
  const docRoot = shadowRoot || win.document.documentElement
  const MutationObserver = win.MutationObserver || win.WebKitMutationObserver
  const listeners = docRoot._MutationListeners || []

  function $ready (selector, fn) {
    // 储存选择器和回调函数
    listeners.push({
      selector: selector,
      fn: fn
    })

    /* 增加监听对象 */
    if (!docRoot._MutationListeners || !docRoot._MutationObserver) {
      docRoot._MutationListeners = listeners
      docRoot._MutationObserver = new MutationObserver(() => {
        for (let i = 0; i < docRoot._MutationListeners.length; i++) {
          const item = docRoot._MutationListeners[i]
          check(item.selector, item.fn)
        }
      })

      docRoot._MutationObserver.observe(docRoot, {
        childList: true,
        subtree: true
      })
    }

    // 检查节点是否已经在DOM中
    check(selector, fn)
  }

  function check (selector, fn) {
    const elements = docRoot.querySelectorAll(selector)
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i]
      element._MutationReadyList_ = element._MutationReadyList_ || []
      if (!element._MutationReadyList_.includes(fn)) {
        element._MutationReadyList_.push(fn)
        fn.call(element, element)
      }
    }
  }

  const selectorArr = Array.isArray(selector) ? selector : [selector]
  selectorArr.forEach(selector => $ready(selector, fn))
}

export default ready
