class SimpleTips {
  constructor (opts) {
    const defOpts = {
      fontSize: 16,
      parentNode: null,
      tipsClassName: 'simple-tips-' + Date.now(),
      timeout: 1000,
      absolute: 'absolute',
      /* 是否允许输出html内容 */
      html: false
    }

    this.opts = Object.assign(defOpts, opts || {})
    this.tipsEl = null
    this.tipsTimer = null

    this.create()
  }

  create () {
    const t = this
    const parentNode = t.opts.parentNode
    const opts = this.opts

    if (!parentNode || !parentNode.querySelector || parentNode.querySelector('.' + opts.tipsClassName)) return

    const tipsStyle = `
      position: ${opts.position || 'absolute'};
      z-index: 999999;
      font-size: ${opts.fontSize || 16}px;
      padding: 5px 10px;
      background: rgba(0,0,0,0.4);
      color:white;
      top: 0;
      left: 0;
      transition: all 500ms ease;
      opacity: 0;
      transition: opacity 600ms;
      border-bottom-right-radius: 5px;
      display: none;
      pointer-events: none;
      -webkit-font-smoothing: subpixel-antialiased;
      font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;
      -webkit-user-select: none;
    `

    const tips = document.createElement('div')
    tips.setAttribute('style', tipsStyle)
    tips.setAttribute('class', opts.tipsClassName)
    parentNode.appendChild(tips)
    t.tipsEl = tips
  }

  tips (msg, parentNode) {
    const t = this

    /* 如果新指定了parentNode，则移除旧的tipsEl，并重新创建tipsEl */
    if (parentNode && parentNode !== t.opts.parentNode) {
      if (t.opts.parentNode && t.opts.parentNode.querySelector instanceof Function && t.tipsEl) {
        t.tipsEl.parentNode && t.tipsEl.parentNode.removeChild(t.tipsEl)
      }

      t.opts.parentNode = parentNode
      t.tipsEl = null
    }

    if (!t.tipsEl) {
      t.create()
    }

    const tipsEl = t.tipsEl
    if (tipsEl) {
      if (t.opts.html) {
        tipsEl.innerHTML = msg
      } else {
        tipsEl.innerText = msg
      }

      t._show()
      t.tipsTimer = setTimeout(() => {
        t.hide()
      }, t.opts.timeout)
    }
  }

  _show () {
    const tipsEl = this.tipsEl
    if (tipsEl && tipsEl.style) {
      clearTimeout(this.tipsTimer)
      tipsEl.style.display = 'block'
      tipsEl.style.transition = 'opacity 600ms'
      tipsEl.style.opacity = 1
    }
  }

  show (msg) {
    this.tips(msg)
  }

  hide (duration) {
    const tipsEl = this.tipsEl
    if (tipsEl && tipsEl.style) {
      tipsEl.style.transition = `opacity ${duration || 1000}ms`
      tipsEl.style.opacity = 0
    }
  }
}

export default SimpleTips
