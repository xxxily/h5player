import debug from './debug'
import hookJs from '../libs/hookJs'

function hackEventListener () {
  // const hookJsPro = hookJs.hookJsPro()
  hookJs.before(window.EventTarget.prototype, 'addEventListener', function (args) {
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

/**
   * 代理视频播放器的事件注册和取消注册的函数，以对注册事件进行调试或阻断
   * @param {*} player
   * @returns
   */
function proxyHTMLMediaElementEvent () {
  if (HTMLMediaElement.prototype._rawAddEventListener_) {
    return false
  }

  HTMLMediaElement.prototype._rawAddEventListener_ = HTMLMediaElement.prototype.addEventListener
  HTMLMediaElement.prototype._rawRemoveEventListener_ = HTMLMediaElement.prototype.removeEventListener

  HTMLMediaElement.prototype.addEventListener = new Proxy(HTMLMediaElement.prototype.addEventListener, {
    apply (target, ctx, args) {
      const eventName = args[0]
      const listener = args[1]
      if (listener instanceof Function) {
        // if (typeof eventName === 'string' && !eventName.includes('mouse') && !eventName.includes('click')) {
        //   debug.info(`[addVideoEvent][${eventName}]`, listener)
        // }

        args[1] = new Proxy(listener, {
          apply (target, ctx, args) {
            if (typeof eventName === 'string' && !eventName.includes('mouse') && !eventName.includes('click')) {
              // debug.info(`[execVideoEvent][${eventName}]`, listener)
            }

            if (ctx) {
              /* 阻止调速检测，并进行反阻止 */
              if (ctx.playbackRate && eventName === 'ratechange') {
                if (ctx._hasBlockRatechangeEvent_) {
                  return true
                }

                const oldRate = ctx.playbackRate
                const startTime = Date.now()

                const result = target.apply(ctx, args)

                /**
                 * 通过判断执行ratechange前后的速率是否被改变，
                 * 以及是否出现了超长的执行时间（可能出现了alert弹窗）来检测是否可能存在阻止调速的行为
                 * 其他检测手段待补充
                 */
                const blockRatechangeBehave1 = oldRate !== ctx.playbackRate || Date.now() - startTime > 1000
                const blockRatechangeBehave2 = ctx._setPlaybackRate_ && ctx._setPlaybackRate_.value !== ctx.playbackRate
                if (blockRatechangeBehave1 || blockRatechangeBehave2) {
                  debug.info(`[execVideoEvent][${eventName}]检测到可能存在阻止调速的行为，已禁止${eventName}事件的执行`, listener)
                  ctx._hasBlockRatechangeEvent_ = true
                  return true
                } else {
                  return result
                }
              }
            }

            /* 禁止对调速事件的监听 */
            // if (eventName === 'ratechange') {
            //   debug.info(`[execVideoEvent][${eventName}]禁止对调速事件的监听`, listener)
            //   return true
            // }

            try {
              return target.apply(ctx, args)
            } catch (e) {
              debug.error('[proxyPlayerEvent]', e)
            }
          }
        })
      }

      return target.apply(ctx, args)
    }
  })
}

export { proxyHTMLMediaElementEvent, hackEventListener }

export default hackEventListener
