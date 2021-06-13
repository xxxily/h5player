import { getPageWindow } from './helper'

function toArray (arg) {
  arg = Array.isArray(arg) ? arg : [arg]
  return arg
}

const Popper = window.Popper
class Tips {
  constructor (opts = {}) {
    opts.fontSize = opts.fontSize || 16
    opts.className = opts.className || 'tooltips_el'
    opts.content = opts.content || 'tips msg...'
    opts.styleRule = opts.styleRule || ''
    opts.show = opts.show || false
    opts.popperOpts = opts.popperOpts || {}
    opts.showEvents = toArray(opts.showEvents || [])
    opts.hideEvents = toArray(opts.hideEvents || [])
    opts.toggleEvents = toArray(opts.toggleEvents || [])

    this.popperInstance = null
    this.reference = null
    this.tooltip = null
    this.opts = opts

    /* 当前tooltip显示还是隐藏的状态标识 */
    this.status = false

    if (opts.reference) {
      this.create(opts.reference)
      if (opts.show) {
        this.show()
      }
    }
  }

  _createTipsDom (opts = {}) {
    const wrapDom = document.createElement('div')
    wrapDom.setAttribute('class', opts.className)

    const contenDom = document.createElement('div')
    contenDom.setAttribute('class', 'tooltips-content')
    contenDom.innerHTML = opts.content
    wrapDom.appendChild(contenDom)

    // 过渡动画
    // transition: all 500ms ease;
    const styleDom = document.createElement('style')
    styleDom.appendChild(document.createTextNode(`
      .${opts.className} {
        z-index: 999999;
        font-size: ${opts.fontSize || 16}px;
        padding: 5px 10px;
        background: rgba(0,0,0,0.4);
        color:white;
        top: 0;
        left: 0;
        opacity: 0;
        border-bottom-right-radius: 5px;
        display: none;
        -webkit-font-smoothing: subpixel-antialiased;
        font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;
        -webkit-user-select: none;
      }
      .${opts.className}[data-popper-reference-hidden] { visibility: hidden; pointer-events: none; }
      .${opts.className}[data-popper-escaped] { visibility: hidden; pointer-events: none; }
      ${opts.styleRule || ''}
    `))
    wrapDom.appendChild(styleDom)

    return wrapDom
  }

  /**
   * 创建可用的tooltip对象
   * @param reference {Element} -必选 提供给createPopper的reference对象
   * @returns {null|boolean}
   */
  create (reference) {
    const t = this

    /* 没引入Popper脚本或没提供参考对象或已创建实例 */
    if (!Popper || !reference || t.popperInstance) {
      return t.popperInstance || false
    }

    t.reference = reference
    t.tooltip = t._createTipsDom(t.opts)

    const parentNode = reference.parentNode || reference
    parentNode.appendChild(t.tooltip)

    t.popperInstance = Popper.createPopper(reference, t.tooltip, t.opts.popperOpts || {})
    t._eventsHandler()

    return t.popperInstance
  }

  /**
   * 重建tooltip对象
   * @param reference {Element} -可选 create函数所需参数，没提供则使用之前的reference
   * @returns {null|boolean}
   */
  rebuild (reference) {
    const t = this
    reference = reference || t.reference
    t.destroy()
    return t.create(reference)
  }

  /**
   * 绑定和解绑相关事件
   * @param unbind {Boolean} 默认是绑定相关事件，如果为true则解绑相关事件
   * @returns {boolean}
   * @private
   */
  _eventsHandler (unbind) {
    const t = this
    if (!t.reference) return false

    const handlerName = unbind ? 'removeEventListener' : 'addEventListener'
    const eventTypeArr = ['show', 'hide', 'toggle']
    eventTypeArr.forEach(eventType => {
      const eventList = toArray(t.opts[eventType + 'Events'])
      eventList.forEach(eventName => {
        t.reference[handlerName](eventName, () => t[eventType]())
      })
    })
  }

  /**
   * 设置tooltip的内容
   * @param str {String} -必选 要设置的内容，可以包含HTML内容
   */
  setContent (str) {
    const t = this

    if (str && t.tooltip) {
      const contentEl = t.tooltip.querySelector('.tooltips-content')
      if (contentEl) {
        contentEl.innerHTML = str
        t.opts.content = str
      }
    }
  }

  /**
   * 设置tooltip的样式规则
   * @param rule {String} -必选 要设置的样式规则
   * @param replace {Boolean} -可选 使用当前样式规则替换之前的所有规则
   */
  setStyleRule (rule, replace) {
    const t = this

    if (rule && t.tooltip) {
      const styleEl = t.tooltip.querySelector('style') || document.createElement('style')

      if (replace) {
        styleEl.innerHTML = ''
      }

      styleEl.appendChild(document.createTextNode(rule))
      t.opts.styleRule = rule
    }
  }

  /**
   * 显示tooltip对象
   * @param str {String} -可选 修改要显示的内容
   */
  show (str) {
    const t = this

    if (t.reference && t.tooltip) {
      t.setContent(str)
      t.tooltip.style.display = 'block'
      t.tooltip.style.opacity = 1
      t.status = true
    }
  }

  hide () {
    const t = this

    if (t.reference && t.tooltip) {
      t.tooltip.style.display = 'none'
      t.tooltip.style.opacity = 0
      t.status = false
    }
  }

  toggle () {
    if (this.status === true) {
      this.hide()
    } else {
      this.show()
    }
  }

  destroy () {
    const t = this

    t._eventsHandler(true)
    t.reference = null

    if (t.tooltip && t.tooltip.parentNode) {
      t.tooltip.parentNode.removeChild(t.tooltip)
    }
    t.tooltip = null

    t.popperInstance && t.popperInstance.destroy()
    t.popperInstance = null
  }
}

async function init () {
  const win = await getPageWindow()
  if (win) {
    win.Tips = Tips

    if (location.host === 'www.baidu.com') {
      var reference = document.querySelector('#s_kw_wrap .soutu-btn') || document.querySelector('#form .soutu-btn')

      var tips = new Tips({
        fontSize: 12,
        reference: reference,
        className: 'test-tooltips',
        content: '<h1>document.querySelector(\'#s_kw_wrap .soutu-btn\')</h1>',
        show: true,
        popperOpts: {},
        showEvents: ['mouseenter', 'focus'],
        // hideEvents: ['mouseleave', 'blur'],
        toggleEvents: ['click']
      })

      console.log(tips)
    }
  }
}
init()

export default Tips
