import { fakeHidden } from '../libs/utils'
import { debug, getPageWindow } from './helper'

const debugCode = {
  async init (h5Player) {
    // fakeHidden()
    debug.isDebugMode() && h5Player.mountToGlobal()

    // debug.log(window.location.href)
    // debug.log(document.querySelector('html').outerHTML)

    /* hack掉动画相关api */
    function hackRequestAnimationFrame (window) {
      const hackList = [
        'mozRequestAnimationFrame',
        'oRequestAnimationFrame',
        'msRequestAnimationFrame',
        'webkitRequestAnimationFrame',
        'requestAnimationFrame'
      ]

      hackList.forEach(key => {
        const sourceKey = '_' + key
        if (!window[sourceKey]) {
          window[sourceKey] = window[key]
          window[key] = function (callback) {
            // window.alert('requestAnimationFrame callback')
            console.log('requestAnimationFrame callback ' + key, callback)
          }
        }
      })
    }

    window.addEventListener('visibilitychange', () => {
      debug.log('visibilityState:', document.visibilityState)
      debug.log(h5Player.player().src, new Date())
    })

    // hackRequestAnimationFrame(window)
    const pageWindow = await getPageWindow()
    // hackRequestAnimationFrame(pageWindow)

    /* 把所有事件干掉 */
    return true
    const addEventListener = pageWindow.EventTarget.prototype.addEventListener
    pageWindow._delListener = {}
    pageWindow._delListenerCount = 0
    pageWindow.EventTarget.prototype.addEventListener = pageWindow.addEventListener = pageWindow.document = function () {
      const t = this
      const arg = arguments
      const type = arg[0]
      const listener = arg[1]

      arg[1] = function (event) {
        // if (['sourceopen', 'updateend', 'loadedmetadata', 'progress', 'timeupdate', 'canplay', 'seeking', 'seeked'].includes(event.type)) {
        //   listener.apply(t, event)
        // }

        if (['sourceopen'].includes(event.type)) {
          return false
        }

        if (event.type === 'sourceopen') {
          console.log('sourceopen:', event)
        }

        if (!['load', 'sourceopen', 'updateend', 'loadedmetadata', 'progress', 'timeupdate', 'mousemove', 'pointermove'].includes(event.type) || !/mouse/gi.test(event.type)) {
          console.log(event.type)
        }
        listener.apply(t, event)
      }

      if (!pageWindow._delListener[type]) {
        pageWindow._delListener[type] = []
      }

      pageWindow._delListener[type].push({
        listener,
        target: t
      })
      pageWindow._delListenerCount += 1

      addEventListener.apply(this, arg)
      // console.log(`[${type}] 事件已被取消`, listener.toString(), t)
    }

    // console.log('document.hidden:', document.hidden)
    // console.log('document.visibilityState:', document.visibilityState)
    // console.log('document.webkitVisibilityState:', document.webkitVisibilityState)
    // console.log('document.webkitHidden:', document.webkitHidden)
  }
}

export default debugCode
