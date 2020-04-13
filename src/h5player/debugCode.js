import { fakeHidden } from '../libs/utils'
import { debug, getPageWindow } from './helper'

const debugCode = {
  async init (h5Player) {
    fakeHidden()
    debug.isDebugMode() && h5Player.mountToGlobal()

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

    hackRequestAnimationFrame(window)
    const pageWindow = await getPageWindow()
    hackRequestAnimationFrame(pageWindow)

    /* 把所有事件干掉 */
    pageWindow._delListener = {}
    pageWindow._delListenerCount = 0
    pageWindow.EventTarget.prototype.addEventListener = pageWindow.addEventListener = pageWindow.document = function () {
      const t = this
      const arg = arguments
      const type = arg[0]
      const listener = arg[1]

      if (!pageWindow._delListener[type]) {
        pageWindow._delListener[type] = []
      }

      pageWindow._delListener[type].push({
        listener,
        target: t
      })
      pageWindow._delListenerCount += 1
      // console.log(`[${type}] 事件已被取消`, listener.toString(), t)
    }

    // console.log('document.hidden:', document.hidden)
    // console.log('document.visibilityState:', document.visibilityState)
    // console.log('document.webkitVisibilityState:', document.webkitVisibilityState)
    // console.log('document.webkitHidden:', document.webkitHidden)
  }
}

export default debugCode
