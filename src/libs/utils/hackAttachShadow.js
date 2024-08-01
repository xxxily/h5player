/**
 * 某些网页用了attachShadow closed mode，需要open才能获取video标签，例如百度云盘
 * 解决参考：
 * https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn#closed
 * https://stackoverflow.com/questions/54954383/override-element-prototype-attachshadow-using-chrome-extension
 */
function hackAttachShadow () {
  if (window._hasHackAttachShadow_) return
  try {
    window._shadowDomList_ = []
    window.Element.prototype._attachShadow = window.Element.prototype.attachShadow
    window.Element.prototype.attachShadow = function () {
      const arg = arguments
      const isClosed = arg[0] && arg[0].mode === 'closed'

      if (arg[0] && arg[0].mode) {
        // 强制使用 open mode
        arg[0].mode = 'open'
      }
      const shadowRoot = this._attachShadow.apply(this, arg)
      // 存一份shadowDomList
      window._shadowDomList_.push(shadowRoot)

      /* 让shadowRoot里面的元素有机会访问shadowHost */
      shadowRoot._shadowHost = this

      // 在document下面添加 addShadowRoot 自定义事件
      const shadowEvent = new window.CustomEvent('addShadowRoot', {
        shadowRoot,
        detail: {
          shadowRoot,
          message: 'addShadowRoot',
          time: new Date()
        },
        bubbles: true,
        cancelable: true
      })
      document.dispatchEvent(shadowEvent)

      if (isClosed) {
        /**
         * 通过defineProperty来设置shadowRoot，get的时候返回null
         * 让外部感知到的还是closed的shadowRoot，防止误判或针对性检测
         */
        Object.defineProperty(this, 'shadowRoot', {
          get () {
            return null
          }
        })
      }

      // console.log('addShadowRoot', shadowRoot.host, this, this.shadowRoot)

      return shadowRoot
    }
    window._hasHackAttachShadow_ = true
  } catch (e) {
    console.error('hackAttachShadow error by h5player plug-in', e)
  }
}

export default hackAttachShadow
