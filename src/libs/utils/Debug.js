class Debug {
  constructor (config = {}) {
    this.config = {
      msg: '[Debug Msg]',
      /* 显示调用栈信息 */
      trace: false,
      /* 是否把调用栈信息和要打印的信息放在一组折叠起来，直接输出的话再大量较多信息的时候会显得非常凌乱，所以默认true */
      traceGroup: true,
      printTime: false,

      /* 统一设置字体颜色，背景颜色，其它样式等 */
      color: '#000000',
      backgroundColor: 'transparent',
      style: '',

      ...config,

      /* 为不同的调试方法设置不同的字体颜色，背景颜色，其它样式等 */
      colorMap: {
        info: '#2274A5',
        log: '#95B46A',
        warn: '#F5A623',
        error: '#D33F49',
        ...config.colorMap || {}
      },
      backgroundColorMap: {
        info: '',
        log: '',
        warn: '',
        error: '',
        ...config.backgroundColorMap || {}
      },
      styleMap: {
        info: '',
        log: '',
        warn: '',
        error: '',
        ...config.styleMap || {}
      }
    }

    const debugMethodList = ['log', 'error', 'info', 'warn']
    debugMethodList.forEach((name) => {
      this[name] = this.createDebugMethod(name)
    })
  }

  create (msg) {
    return new Debug(msg)
  }

  createDebugMethod (name) {
    name = name || 'info'

    const { msg, color, colorMap, backgroundColor, backgroundColorMap, style, styleMap, printTime, trace, traceGroup } = this.config
    const textColor = colorMap[name] || color
    const bgColor = backgroundColorMap[name] || backgroundColor
    const customStyle = styleMap[name] || style

    return function () {
      if (!window._debugMode_) {
        return false
      }

      const arg = Array.from(arguments)
      const arg0 = arg[0]
      arg.unshift(`color: ${textColor}; background-color: ${bgColor}; ${customStyle}`)

      let timeStr = ''

      if (printTime) {
        const curTime = new Date()
        const H = curTime.getHours()
        const M = curTime.getMinutes()
        const S = curTime.getSeconds()
        timeStr = `[${H}:${M}:${S}] `
      }

      arg.unshift(`%c ${timeStr}${msg} `)

      if (trace) {
        if (traceGroup) {
          const arg1Str = typeof arg0 === 'string' ? arg0 : Object.prototype.toString.call(arg0)
          console.groupCollapsed(`%c ${timeStr}${msg} ${arg1Str}`, `color: ${textColor}; background-color: ${bgColor}; ${customStyle}`)
          window.console[name].apply(console, arg)
          console.trace()
          console.groupEnd()
        } else {
          window.console[name].apply(console, arg)
          console.trace()
        }
      } else {
        window.console[name].apply(window.console, arg)
      }
    }
  }

  isDebugMode () {
    return Boolean(window._debugMode_)
  }
}

// function demo () {
//   window._debugMode_ = true
//   window.debug = new Debug({
//     msg: '[Debug Message]',
//     colorMap: {
//       info: '#FFFFFF',
//       log: '#FFFFFF'
//     },
//     backgroundColorMap: {
//       info: '#2274A5',
//       log: '#95B46A'
//     },
//     style: 'font-size: 22px; font-weight: bold; padding: 2px 4px; border-radius: 2px;',
//     trace: true,
//     traceGroup: true,
//     printTime: true
//   })

//   window.debug.log('debug mode is on', window.debug)
//   window.debug.info('debug mode is on', window.debug)
//   window.debug.warn('debug mode is on', window.debug)
//   window.debug.error('debug mode is on', window.debug)
// }
// demo()

export default new Debug()
