import { getPageWindow } from './helper'

const Popper = window.Popper

class Tips {
  constructor (opts = {}) {
    opts.fontSize = opts.fontSize || 16
    opts.className = opts.className || 'tooltips_el'

    this.popperInstance = null
    this.reference = null
    this.tooltip = null
    this.opts = opts

    if (opts.reference) {
      this.create(opts.reference)
      this.show('111111111111111')
    }
  }

  createTipsDom (opts = {}) {
    opts.fontSize = opts.fontSize || 16
    opts.className = opts.className || 'tooltips_el'
    opts.content = opts.content || 'no msg...'

    const tipsStyle = `
      position: absolute;
      z-index: 999999;
      font-size: ${opts.fontSize}px;
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
    `
    // 过渡动画
    // transition: all 500ms ease;

    const tipsDom = document.createElement('div')
    tipsDom.setAttribute('style', tipsStyle)
    tipsDom.setAttribute('class', opts.className)

    const contenDom = document.createElement('div')
    contenDom.setAttribute('class', 'tooltips-content')
    contenDom.innerHTML = opts.content
    tipsDom.appendChild(contenDom)

    const styleDom = document.createElement('style')
    styleDom.appendChild(document.createTextNode(`
      .${opts.className}[data-popper-reference-hidden] { visibility: hidden; pointer-events: none; }
      .${opts.className}[data-popper-escaped] { visibility: hidden; pointer-events: none; }
    `))
    tipsDom.appendChild(styleDom)

    return tipsDom
  }

  create (reference) {
    const t = this

    /* 没提供参考对象或已创建实例 */
    if (!reference || t.popperInstance) {
      return t.popperInstance
    }

    t.reference = reference
    t.tooltip = t.createTipsDom(t.opts)

    const parentNode = reference.parentNode || reference
    parentNode.appendChild(t.tooltip)

    t.popperInstance = Popper.createPopper(reference, t.tooltip, {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8]
          }
        }
      ]
    })

    return t.popperInstance
  }

  setTips (str) {
    const t = this

    if (str && t.tooltip) {
      const contentEl = t.tooltip.querySelector('.tooltips-content')
      contentEl && (contentEl.innerHTML = str)
    }
  }

  show (str) {
    const t = this

    if (t.reference && t.tooltip) {
      t.setTips(str)
      t.tooltip.style.display = 'block'
      t.tooltip.style.opacity = 1
    }
  }

  hide () {
    const t = this

    if (t.reference && t.tooltip) {
      t.tooltip.style.display = 'none'
      t.tooltip.style.opacity = 0
    }
  }

  destroy () {
    const t = this
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
  }
}
init()

export default Tips
