import FullScreen from '../libs/FullScreen'
import debug from './debug'
import h5PlayerTccInit from './h5PlayerTccInit'
import { getPageWindow } from './helper'

class playerCore {
  constructor (playerInstance, isSingle = true) {
    this.config = {
      player: playerInstance || null,
      fontSize: 12,
      scale: 1,
      translate: {
        x: 0,
        y: 0
      },
      playbackRate: 1,
      lastPlaybackRate: 1,
      /* 快进快退步长 */
      skipStep: 5
    }

    this.TCC = h5PlayerTccInit(this)

    if (playerInstance) {
      this.setPlayer(playerInstance, isSingle)
    }
  }

  player () {
    return this.config.player
  }

  /* 设置或更新播放器对象 */
  setPlayer (playerInstance, isSingle) {
    this.config.player = playerInstance
    this.initPlayerInstance(isSingle)
  }

  /* 挂载到页面上的window对象，用于调试 */
  async mountToGlobal () {
    try {
      const pageWindow = await getPageWindow()
      if (pageWindow) {
        pageWindow._h5Player = this
        if (window.top !== window) {
          pageWindow._h5PlayerInFrame = this
        }
        pageWindow._window = window || ''
        debug.log('h5Player对象已成功挂载到全局')
      }
    } catch (e) {
      debug.error(e)
    }
  }

  /**
   * 初始化播放器实例
   * @param isSingle 是否为单实例video标签
   */
  initPlayerInstance (isSingle) {
    const t = this
    const player = t.player()

    if (!t.player) return

    t.initPlaybackRate()
    t.isFoucs()
    t.proxyPlayerInstance(player)

    /* 增加通用全屏，网页全屏api */
    player._fullScreen_ = new FullScreen(player)
    player._fullPageScreen_ = new FullScreen(player, true)

    /* 注册播放器的事件代理处理器 */
    player._listenerProxyApplyHandler_ = t.playerEventHandler

    if (!player._hasCanplayEvent_) {
      player.addEventListener('canplay', function (event) {
        t.initAutoPlay(player)
      })
      player._hasCanplayEvent_ = true
    }

    /* 播放的时候进行相关同步操作 */
    if (!player._hasPlayingInitEvent_) {
      let setPlaybackRateOnPlayingCount = 0
      player.addEventListener('playing', function (event) {
        if (setPlaybackRateOnPlayingCount === 0) {
          /* 同步之前设定的播放速度 */
          t.setPlaybackRate()

          if (isSingle === true) {
            /* 恢复播放进度和进行进度记录 */
            t.setPlayProgress(player)
            setTimeout(function () {
              t.playProgressRecorder(player)
            }, 1000 * 3)
          }
        } else {
          t.setPlaybackRate(null, true)
        }
        setPlaybackRateOnPlayingCount += 1
      })
      player._hasPlayingInitEvent_ = true
    }

    /* 进行自定义初始化操作 */
    const taskConf = t.TCC.getTaskConfig()
    if (taskConf.init) {
      t.TCC.doTask('init', player)
    }

    /* 注册鼠标响应事件 */
    // mouseObserver.on(player, 'click', function (event, offset, target) {
    //   // debug.log('捕捉到鼠标点击事件：', event, offset, target)
    // })

    debug.isDebugMode() && t.mountToGlobal()
  }

  /**
   * 初始化自动播放逻辑
   * 必须是配置了自动播放按钮选择器得的才会进行自动播放
   */
  initAutoPlay (playerInstance) {
    const t = this
    const player = playerInstance || t.player()

    // 在轮询重试的时候，如果实例变了，或处于隐藏页面中则不进行自动播放操作
    if (!player || (playerInstance && playerInstance !== t.player()) || document.hidden) {
      return false
    }

    const taskConf = t.TCC.getTaskConfig()
    if (player && taskConf.autoPlay && player.paused) {
      t.TCC.doTask('autoPlay')

      if (player.paused) {
        // 轮询重试
        if (!player._initAutoPlayCount_) {
          player._initAutoPlayCount_ = 1
        }
        player._initAutoPlayCount_ += 1
        if (player._initAutoPlayCount_ >= 10) {
          return false
        }
        setTimeout(function () {
          t.initAutoPlay(player)
        }, 200)
      }
    }
  }
}

export default playerCore
