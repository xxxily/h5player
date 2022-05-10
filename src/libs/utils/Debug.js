class Debug {
  constructor (msg, printTime = false) {
    const t = this
    msg = msg || 'debug message:'
    t.log = t.createDebugMethod('log', null, msg)
    t.error = t.createDebugMethod('error', null, msg)
    t.info = t.createDebugMethod('info', null, msg)
    t.warn = t.createDebugMethod('warn', null, msg)
  }

  create (msg) {
    return new Debug(msg)
  }

  createDebugMethod (name, color, tipsMsg) {
    name = name || 'info'

    const bgColorMap = {
      info: '#2274A5',
      log: '#95B46A',
      warn: '#F5A623',
      error: '#D33F49'
    }

    const printTime = this.printTime

    return function () {
      if (!window._debugMode_) {
        return false
      }

      const msg = tipsMsg || 'debug message:'

      const arg = Array.from(arguments)
      arg.unshift(`color: white; background-color: ${color || bgColorMap[name] || '#95B46A'}`)

      if (printTime) {
        const curTime = new Date()
        const H = curTime.getHours()
        const M = curTime.getMinutes()
        const S = curTime.getSeconds()
        arg.unshift(`%c [${H}:${M}:${S}] ${msg} `)
      } else {
        arg.unshift(`%c ${msg} `)
      }

      window.console[name].apply(window.console, arg)
    }
  }

  isDebugMode () {
    return Boolean(window._debugMode_)
  }
}

export default new Debug()
