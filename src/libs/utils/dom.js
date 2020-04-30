function hideDom (selector, delay) {
  setTimeout(function () {
    const dom = document.querySelector(selector)
    if (dom) {
      dom.style.opacity = 0
    }
  }, delay || 1000 * 5)
}

/**
 * 向上查找操作
 * @param dom {Element} -必选 初始dom元素
 * @param fn {function} -必选 每一级ParentNode的回调操作
 * 如果函数返回true则表示停止向上查找动作
 */
function eachParentNode (dom, fn) {
  let parent = dom.parentNode
  while (parent) {
    const isEnd = fn(parent, dom)
    parent = parent.parentNode
    if (isEnd) {
      break
    }
  }
}

/**
 * 根据节点的宽高获取其包裹节点
 * @param el {Element} -必选 要查找的节点
 * @param noRecursive {Boolean} -可选 禁止递归，默认false
 * @returns {element}
 */
function getContainer (el, noRecursive) {
  if (!el || !el.getBoundingClientRect) return el

  const domBox = el.getBoundingClientRect()
  let container = el
  eachParentNode(el, function (parentNode) {
    if (!parentNode || !parentNode.getBoundingClientRect) return true
    const parentBox = parentNode.getBoundingClientRect()
    const isInsideTheBox = parentBox.width <= domBox.width && parentBox.height <= domBox.height
    if (isInsideTheBox) {
      container = parentNode
    } else {
      return true
    }
  })

  // 如果查找到的包裹节点指向自己，则尝试使用parentNode作为包裹节点再次查找
  if (container === el && el.parentNode) {
    if (noRecursive) {
      // 直接以父节点作为包裹节点
      container = el.parentNode
    } else {
      // 以父节点作为基准再次查找，但不再深入递归
      container = getContainer(el.parentNode, true)
    }
  }

  return container
}

/**
 * 动态加载css内容
 * @param cssText {String} -必选 样式的文本内容
 * @param id {String} -可选 指定样式文本的id号，如果已存在对应id号则不会再次插入
 * @param insetTo {Dom} -可选 指定插入到哪
 * @returns {HTMLStyleElement}
 */
function loadCSSText (cssText, id, insetTo) {
  if (id && document.getElementById(id)) {
    return false
  }

  const style = document.createElement('style')
  const head = insetTo || document.head || document.getElementsByTagName('head')[0]
  style.appendChild(document.createTextNode(cssText))
  head.appendChild(style)

  if (id) {
    style.setAttribute('id', id)
  }

  return style
}

/**
 * 判断当前元素是否为可编辑元素
 * @param target
 * @returns Boolean
 */
function isEditableTarget (target) {
  const isEditable = target.getAttribute && target.getAttribute('contenteditable') === 'true'
  const isInputDom = /INPUT|TEXTAREA|SELECT/.test(target.nodeName)
  return isEditable || isInputDom
}

export { hideDom, eachParentNode, loadCSSText, getContainer, isEditableTarget }
