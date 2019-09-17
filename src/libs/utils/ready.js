/**
 * 元素监听器
 * @param selector -必选
 * @param fn -必选，元素存在时的回调
 * @param shadowRoot -可选 指定监听某个shadowRoot下面的DOM元素
 * 参考：https://javascript.ruanyifeng.com/dom/mutationobserver.html
 */
function ready (selector, fn, shadowRoot) {
  const listeners = []
  const win = window
  const doc = shadowRoot || win.document
  const MutationObserver = win.MutationObserver || win.WebKitMutationObserver
  let observer

  function $ready (selector, fn) {
    // 储存选择器和回调函数
    listeners.push({
      selector: selector,
      fn: fn
    })
    if (!observer) {
      // 监听document变化
      observer = new MutationObserver(check)
      observer.observe(shadowRoot || doc.documentElement, {
        childList: true,
        subtree: true
      })
    }
    // 检查该节点是否已经在DOM中
    check()
  }

  function check () {
    for (let i = 0; i < listeners.length; i++) {
      var listener = listeners[i]
      var elements = doc.querySelectorAll(listener.selector)
      for (let j = 0; j < elements.length; j++) {
        var element = elements[j]
        if (!element._isMutationReady_) {
          element._isMutationReady_ = true
          listener.fn.call(element, element)
        }
      }
    }
  }

  $ready(selector, fn)
}

export default ready
