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
  const isInputDom = /INPUT|TEXTAREA|SELECT|LABEL/.test(target.nodeName)
  return isEditable || isInputDom
}

/**
 * 判断某个元素是否处于shadowDom里面
 * 参考：https://www.coder.work/article/299700
 * @param node
 * @returns {boolean}
 */
function isInShadow (node, returnShadowRoot) {
  for (; node; node = node.parentNode) {
    if (node.toString() === '[object ShadowRoot]') {
      if (returnShadowRoot) {
        return node
      } else {
        return true
      }
    }
  }
  return false
}

/**
 * 判断某个元素是否处于可视区域，适用于被动调用情况，需要高性能，请使用IntersectionObserver
 * 参考：https://github.com/febobo/web-interview/issues/84
 * @param element
 * @returns {boolean}
 */
function isInViewPort (element) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  const {
    top,
    right,
    bottom,
    left
  } = element.getBoundingClientRect()

  return (
    top >= 0 &&
    left >= 0 &&
    right <= viewWidth &&
    bottom <= viewHeight
  )
}

/**
 * 基于IntersectionObserver的可视区域判断
 * @param { Function } callback
 * @param { Element } element
 * @returns { IntersectionObserver }
 */
function observeVisibility (callback, element) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        /* 元素在可视区域内 */
        callback(entry, observer)
      } else {
        /* 元素不在可视区域内 */
        callback(null, observer)
      }
    })
  })

  if (element) {
    observer.observe(element)
  }

  /* 返回观察对象，以便外部可以取消观察：observer.disconnect()，或者增加新的观察对象：observer.observe(element) */
  return observer
}

// 使用示例：
// const temp1 = document.querySelector('#temp1')
// var observer = observeVisibility(function (entry, observer) {
//   if (entry) {
//     console.log('[entry]', entry)
//   } else {
//     console.log('[entry]', 'null')
//   }
// }, temp1)

/**
 * 判断是否为不可见的元素，主要用以判断是否已经脱离文档流或被设置为display:none的元素
 * @param {*} element
 * @returns
 */
function isOutOfDocument (element) {
  if (!element || element.offsetParent === null) {
    return true
  }

  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = element.getBoundingClientRect()

  return (
    top === 0 &&
    right === 0 &&
    bottom === 0 &&
    left === 0 &&
    width === 0 &&
    height === 0
  )
}

/**
 * 判断坐标是否在元素内
 */
function isCoordinateInElement (x, y, element) {
  if (!element || !element.getBoundingClientRect) { return false }

  const rect = element.getBoundingClientRect()

  if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
    return true
  } else {
    return false
  }
}

/**
 * 给定坐标点，判断其在元素的哪个位置，可以为left、right、top、bottom、center
 * 注意这里并没有限定给出的坐标必须是元素内部的坐标，可以是任意坐标
 * @param { Number } x -必选 鼠标的x坐标
 * @param { Number } y -必选 鼠标的y坐标
 * @param { Element } element -必选 要判断的元素
 * @param { Number } deadZone -可选 死区范围，默认为0
 * @returns
 */
function coordinateToPosition (x, y, element, deadZone = 0) {
  const rect = element.getBoundingClientRect()

  const verticalMidpoint = rect.top + rect.height / 2
  const horizontalMidpoint = rect.left + rect.width / 2

  const position = {
    horizontal: '',
    vertical: ''
  }

  if (x <= horizontalMidpoint - deadZone) {
    position.horizontal = 'left'
  } else if (x >= horizontalMidpoint + deadZone) {
    position.horizontal = 'right'
  } else {
    position.horizontal = 'center'
  }

  if (y < verticalMidpoint - deadZone) {
    position.vertical = 'top'
  } else if (y > verticalMidpoint + deadZone) {
    position.vertical = 'bottom'
  } else {
    position.vertical = 'center'
  }

  return position
}

/**
 * 计算两点之间形成的夹角度数
 */
function calculateDegree (x1, y1, x2, y2) {
  const dy = y2 - y1
  const dx = x2 - x1
  let theta = Math.atan2(dy, dx) // 返回的是弧度
  theta *= 180 / Math.PI // 弧度转换为度
  return Math.round(theta)
}

export { hideDom, eachParentNode, loadCSSText, getContainer, isEditableTarget, isInShadow, isInViewPort, observeVisibility, isOutOfDocument, isCoordinateInElement, coordinateToPosition, calculateDegree }
