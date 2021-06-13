import debug from './debug'
import hookJs from '../libs/hookJs'

function hackEventListener () {
  const hookJsPro = hookJs.hookJsPro()
  hookJsPro.before(window.EventTarget.prototype, 'addEventListener', function (args) {
    const type = args[0]
    const listener = args[1]
    const eventFilter = ['click', 'mouse', 'touch', 'key', 'toggle', 'change', 'reset', 'resize', 'error']

    let isHitEventFilter = false
    for (let i = 0; i < eventFilter.length; i++) {
      const str = eventFilter[i]
      if (type && type.startsWith && type.startsWith(str)) {
        isHitEventFilter = true
        break
      }
    }

    if (!listener || isHitEventFilter) {
      return false
    }

    debug.info('addEventListener:', type)
  })
}

export default hackEventListener
