/**
 * 元素全屏API，同时兼容网页全屏
 */
import hackAttachShadow from '../utils/hackAttachShadow'
import { loadCSSText, isInShadow } from '../utils/dom'

hackAttachShadow()
class FullScreen {
  constructor (dom, pageMode) {
    this.dom = dom
    this.shadowRoot = null
    this.fullStatus = false
    // 默认全屏模式，如果传入pageMode则表示进行的是页面全屏操作
    this.pageMode = pageMode || false
    const fullPageStyle = `
      ._webfullscreen_box_size_ {
				width: 100% !important;
				height: 100% !important;
			}
      ._webfullscreen_ {
        display: block !important;
				position: fixed !important;
				width: 100% !important;
				height: 100% !important;
				top: 0 !important;
				left: 0 !important;
				background: #000 !important;
				z-index: 999999 !important;
			}
			._webfullscreen_zindex_ {
				z-index: 999999 !important;
			}
		`
    /* 将样式插入到全局页面中 */
    if (!window._hasInitFullPageStyle_ && window.GM_addStyle) {
      window.GM_addStyle(fullPageStyle)
      window._hasInitFullPageStyle_ = true
    }

    /* 将样式插入到shadowRoot中 */
    const shadowRoot = isInShadow(dom, true)
    if (shadowRoot) {
      this.shadowRoot = shadowRoot
      loadCSSText(fullPageStyle, 'fullPageStyle', shadowRoot)
    }

    const t = this
    window.addEventListener('keyup', (event) => {
      const key = event.key.toLowerCase()
      if (key === 'escape') {
        if (t.isFull()) {
          t.exit()
        } else if (t.isFullScreen()) {
          t.exitFullScreen()
        }
      }
    }, true)

    this.getContainer()
  }

  eachParentNode (dom, fn) {
    let parent = dom.parentNode
    while (parent && parent.classList) {
      const isEnd = fn(parent, dom)
      parent = parent.parentNode
      if (isEnd) {
        break
      }
    }
  }

  getContainer () {
    const t = this
    if (t._container_) return t._container_

    const d = t.dom
    const domBox = d.getBoundingClientRect()
    let container = d
    t.eachParentNode(d, function (parentNode) {
      const noParentNode = !parentNode || !parentNode.getBoundingClientRect
      if (noParentNode || parentNode.getAttribute('data-fullscreen-container')) {
        container = parentNode
        return true
      }

      const parentBox = parentNode.getBoundingClientRect()
      const isInsideTheBox = parentBox.width <= domBox.width && parentBox.height <= domBox.height
      if (isInsideTheBox) {
        container = parentNode
      } else {
        return true
      }
    })

    container.setAttribute('data-fullscreen-container', 'true')
    t._container_ = container
    return container
  }

  isFull () {
    return this.dom.classList.contains('_webfullscreen_') || this.fullStatus
  }

  isFullScreen () {
    const d = document
    return !!(d.fullscreen || d.webkitIsFullScreen || d.mozFullScreen ||
      d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement)
  }

  enterFullScreen () {
    const c = this.getContainer()
    const enterFn = c.requestFullscreen || c.webkitRequestFullScreen || c.mozRequestFullScreen || c.msRequestFullScreen
    enterFn && enterFn.call(c)
  }

  enter () {
    const t = this
    if (t.isFull()) return
    const container = t.getContainer()
    let needSetIndex = false
    if (t.dom === container) {
      needSetIndex = true
    }

    function addFullscreenStyleToParentNode (node) {
      t.eachParentNode(node, function (parentNode) {
        parentNode.classList.add('_webfullscreen_')
        if (container === parentNode || needSetIndex) {
          needSetIndex = true
          parentNode.classList.add('_webfullscreen_zindex_')
        }
      })
    }
    addFullscreenStyleToParentNode(t.dom)

    /* 判断dom自身是否需要加上webfullscreen样式 */
    if (t.dom.parentNode) {
      const domBox = t.dom.getBoundingClientRect()
      const domParentBox = t.dom.parentNode.getBoundingClientRect()
      if (domParentBox.width - domBox.width >= 5) {
        t.dom.classList.add('_webfullscreen_')
      }

      if (t.shadowRoot && t.shadowRoot._shadowHost) {
        const shadowHost = t.shadowRoot._shadowHost
        const shadowHostBox = shadowHost.getBoundingClientRect()
        if (shadowHostBox.width <= domBox.width) {
          shadowHost.classList.add('_webfullscreen_')
          addFullscreenStyleToParentNode(shadowHost)
        }
      }
    }

    const fullScreenMode = !t.pageMode
    if (fullScreenMode) {
      t.enterFullScreen()
    }

    this.fullStatus = true
  }

  exitFullScreen () {
    const d = document
    const exitFn = d.exitFullscreen || d.webkitExitFullscreen || d.mozCancelFullScreen || d.msExitFullscreen
    exitFn && exitFn.call(d)
  }

  exit () {
    const t = this

    function removeFullscreenStyleToParentNode (node) {
      t.eachParentNode(node, function (parentNode) {
        parentNode.classList.remove('_webfullscreen_')
        parentNode.classList.remove('_webfullscreen_zindex_')
      })
    }
    removeFullscreenStyleToParentNode(t.dom)

    t.dom.classList.remove('_webfullscreen_')

    if (t.shadowRoot && t.shadowRoot._shadowHost) {
      const shadowHost = t.shadowRoot._shadowHost
      shadowHost.classList.remove('_webfullscreen_')
      removeFullscreenStyleToParentNode(shadowHost)
    }

    const fullScreenMode = !t.pageMode
    if (fullScreenMode || t.isFullScreen()) {
      t.exitFullScreen()
    }
    this.fullStatus = false
  }

  toggle () {
    this.isFull() ? this.exit() : this.enter()
  }
}
export default FullScreen
