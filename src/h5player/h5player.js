import './comment'
import './tips'
import { config, globalConfig } from './config'
import originalMethods from './originalMethods'
import h5PlayerTccInit from './h5PlayerTccInit'
import { setFakeUA } from './userAgent'
import FullScreen from '../libs/FullScreen/index'
import videoCapturer from '../libs/videoCapturer/index'
import MouseObserver from '../libs/MouseObserver/index'
import i18n from './i18n'
import monkeyMsg from './monkeyMsg'
import crossTabCtl from './crossTabCtl'
import debug from './debug'
import hackDefineProperty from './hackDefineProperty'
import { menuRegister, addMenu } from './menuManager'
import { proxyHTMLMediaElementEvent } from './hackEventListener'
import {
  ready,
  hackAttachShadow,
  isObj,
  quickSort,
  eachParentNode,
  fakeUA,
  userAgentMap,
  isInIframe,
  isInCrossOriginFrame,
  isEditableTarget,
  throttle,
  isInViewPort
} from '../libs/utils/index'

import {
  openInTab,
  isRegisterKey,
  getPageWindow,
  numUp,
  numDown
} from './helper'

window._debugMode_ = true

let TCC = null
const h5Player = {
  /* 提示文本的字号 */
  fontSize: 12,
  enable: true,
  globalMode: true,
  playerInstance: null,
  scale: 1,
  translate: {
    x: 0,
    y: 0
  },
  rotate: 0,

  /* 水平镜像翻转, 0 或 180 */
  rotateY: 0,
  /* 垂直镜像翻转, 0 或 180 */
  rotateX: 0,

  playbackRate: config.video.playbackRate,
  volume: config.video.volume,
  lastPlaybackRate: 1,
  /* 快进快退步长 */
  skipStep: 5,

  /* 监听鼠标活动的观察对象 */
  mouseObserver: new MouseObserver(),

  /* 获取当前播放器的实例 */
  player: function () {
    const t = this
    return t.playerInstance || t.getPlayerList()[0]
  },

  /* 每个网页可能存在的多个video播放器 */
  getPlayerList: function () {
    const list = []
    function findPlayer (context) {
      context.querySelectorAll('video').forEach(function (player) {
        list.push(player)
      })
    }
    findPlayer(document)

    // 被封装在 shadow dom 里面的video
    if (window._shadowDomList_) {
      window._shadowDomList_.forEach(function (shadowRoot) {
        findPlayer(shadowRoot)
      })
    }

    return list
  },

  getPlayerWrapDom: function () {
    const t = this
    const player = t.player()
    if (!player) return

    let wrapDom = null
    const playerBox = player.getBoundingClientRect()
    eachParentNode(player, function (parent) {
      if (parent === document || !parent.getBoundingClientRect) return
      const parentBox = parent.getBoundingClientRect()
      if (parentBox.width && parentBox.height) {
        if (parentBox.width === playerBox.width && parentBox.height === playerBox.height) {
          wrapDom = parent
        }
      }
    })
    return wrapDom
  },

  /* 挂载到页面上的window对象，用于调试 */
  async mountToGlobal () {
    try {
      const pageWindow = await getPageWindow()
      if (pageWindow) {
        pageWindow._h5Player = h5Player || 'null'
        if (window.top !== window) {
          pageWindow._h5PlayerInFrame = h5Player || 'null'
        }
        pageWindow._window = window || ''
        debug.log('h5Player对象已成功挂载到全局')
      }
    } catch (e) {
      debug.error(e)
    }
  },

  /**
   * 初始化播放器实例
   * @param isSingle 是否为单实例video标签
   */
  initPlayerInstance (isSingle) {
    const t = this
    if (!t.playerInstance) return

    const player = t.playerInstance
    t.initPlaybackRate()
    t.isFoucs()
    t.proxyPlayerInstance(player)

    t.setPlaybackRate()
    t.setVolume(null, true)

    /* 增加通用全屏，网页全屏api */
    player._fullScreen_ = new FullScreen(player)
    player._fullPageScreen_ = new FullScreen(player, true)

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
          /* 同步之前设定的播放速度，音量等 */
          t.setPlaybackRate()
          t.setVolume(null, true)

          if (isSingle === true) {
            /* 恢复播放进度和进行进度记录 */
            t.setPlayProgress(player)
            setTimeout(function () {
              t.playProgressRecorder(player)
            }, 1000 * 3)
          }
        } else {
          t.setPlaybackRate(null, true)
          t.setVolume(null, true)
        }
        setPlaybackRateOnPlayingCount += 1
      })
      player._hasPlayingInitEvent_ = true
    }

    /* 进行自定义初始化操作 */
    const taskConf = TCC.getTaskConfig()
    if (taskConf.init) {
      TCC.doTask('init', player)
    }

    /* 注册鼠标响应事件 */
    t.mouseObserver.on(player, 'click', function (event, offset, target) {
      // debug.log('捕捉到鼠标点击事件：', event, offset, target)
    })

    /* 画中画事件监听 */
    player.addEventListener('enterpictureinpicture', () => {
      monkeyMsg.send('globalPictureInPictureInfo', {
        usePictureInPicture: true
      })
      debug.log('enterpictureinpicture', player)
    })
    player.addEventListener('leavepictureinpicture', () => {
      t.leavepictureinpictureTime = Date.now()

      monkeyMsg.send('globalPictureInPictureInfo', {
        usePictureInPicture: false
      })
      debug.log('leavepictureinpicture', player)
    })

    if (debug.isDebugMode()) {
      t.mountToGlobal()
      player.addEventListener('loadeddata', function () {
        debug.log('video dom:', player)
        debug.log('video url:', player.src)
        debug.log('video duration:', player.duration)
      })

      player.addEventListener('durationchange', function () {
        debug.log('video durationchange:', player.duration)
      })
    }
  },

  /* 刚关闭画中画不久，此段时间内允许跨TAB控制 */
  isLeavepictureinpictureAwhile () {
    const t = this
    return t.leavepictureinpictureTime && (Date.now() - t.leavepictureinpictureTime < 1000 * 10)
  },

  /**
   * 对播放器实例的方法或属性进行代理
   * @param player
   */
  proxyPlayerInstance (player) {
    if (!player) return

    /* 要代理的方法或属性列表 */
    const proxyList = [
      'play',
      'pause'
    ]

    proxyList.forEach(key => {
      const originKey = 'origin_' + key
      if (Reflect.has(player, key) && !Reflect.has(player, originKey)) {
        player[originKey] = player[key]
        const proxy = new Proxy(player[key], {
          apply (target, ctx, args) {
            debug.log(key + '被调用')

            /* 处理挂起逻辑 */
            const hangUpInfo = player._hangUpInfo_ || {}
            const hangUpDetail = hangUpInfo[key] || hangUpInfo['hangUp_' + key]
            const needHangUp = hangUpDetail && hangUpDetail.timeout >= Date.now()
            if (needHangUp) {
              debug.log(key + '已被挂起，本次调用将被忽略')
              return false
            }

            return target.apply(ctx || player, args)
          }
        })

        player[key] = proxy
      }
    })

    if (!player._hangUp_) {
      player._hangUpInfo_ = {}
      /**
       * 挂起player某个函数的调用
       * @param name {String} -必选 player方法或属性名，名字写对外，还须要该方法或属性被代理了才能进行挂起，否则这将是个无效的调用
       * @param timeout {Number} -可选 挂起多长时间，默认200ms
       * @private
       */
      player._hangUp_ = function (name, timeout) {
        timeout = Number(timeout) || 200
        debug.log('_hangUp_', name, timeout)
        player._hangUpInfo_[name] = {
          timeout: Date.now() + timeout
        }
      }
    }
  },

  /**
   * 初始化自动播放逻辑
   * 必须是配置了自动播放按钮选择器得的才会进行自动播放
   */
  initAutoPlay: function (p) {
    const t = this
    const player = p || t.player()
    const taskConf = TCC.getTaskConfig()

    /* 注册开启禁止自动播放的控制菜单 */
    if (taskConf.autoPlay) {
      addMenu({
        title: () => config.video.autoPlay ? i18n.t('disableInitAutoPlay') : i18n.t('enableInitAutoPlay'),
        fn: () => {
          const confirm = window.confirm(config.video.autoPlay ? i18n.t('disableInitAutoPlay') : i18n.t('enableInitAutoPlay'))
          if (confirm) {
            config.video.autoPlay = !config.video.autoPlay
          }
        }
      })
    }

    // 在轮询重试的时候，如果实例变了，或处于隐藏页面中则不进行自动播放操作
    if (!config.video.autoPlay || (!p && t.hasInitAutoPlay) || !player || (p && p !== t.player()) || document.hidden) {
      return false
    }

    /**
     * 元素不在可视范围，不允许进行初始化自动播放逻辑
     * 由于iframe下元素的可视范围判断不准确，所以iframe下也禁止初始化自动播放逻辑
     * TODO 待优化
     */
    if (!isInViewPort(player) || isInIframe()) {
      return false
    }

    if (!taskConf.autoPlay || window.localStorage.getItem('_disableInitAutoPlay_')) {
      return false
    }

    t.hasInitAutoPlay = true

    if (player && taskConf.autoPlay && player.paused) {
      TCC.doTask('autoPlay')
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
  },

  /* 设置视频全屏 */
  setFullScreen () {
    const player = this.player()
    const isDo = TCC.doTask('fullScreen')
    if (!isDo && player && player._fullScreen_) {
      player._fullScreen_.toggle()
    }
  },

  /* 设置页面全屏 */
  setWebFullScreen: function () {
    const t = this
    const player = t.player()
    const isDo = TCC.doTask('webFullScreen')
    if (!isDo && player && player._fullPageScreen_) {
      player._fullPageScreen_.toggle()
    }
  },

  initPlaybackRate () {
    const t = this
    t.playbackRate = t.getPlaybackRate()
  },

  getPlaybackRate () {
    let playbackRate = config.video.playbackRate
    if (isInIframe()) {
      playbackRate = globalConfig.video.playbackRate
    }
    return Number(Number(playbackRate).toFixed(1))
  },

  /* 设置播放速度 */
  setPlaybackRate: function (num, notips) {
    if (TCC.doTask('playbackRate')) {
      // debug.log('[TCC][playbackRate]', 'suc')
      return
    }

    const t = this
    const player = t.player()

    if (!player) return

    let curPlaybackRate
    if (num) {
      num = Number(num)
      if (Number.isNaN(num)) {
        debug.error('h5player: 播放速度转换出错')
        return false
      }

      if (num <= 0) {
        num = 0.1
      } else if (num > 16) {
        num = 16
      }

      num = Number(num.toFixed(1))
      curPlaybackRate = num
    } else {
      curPlaybackRate = t.getPlaybackRate()
    }

    /* 记录播放速度的信息 */
    t.playbackRate = curPlaybackRate
    if (isInIframe()) {
      globalConfig.video.playbackRate = curPlaybackRate
    } else {
      config.video.playbackRate = curPlaybackRate
    }

    delete player.playbackRate
    player.playbackRate = curPlaybackRate
    player._setPlaybackRate_ = {
      time: Date.now(),
      value: curPlaybackRate
    }

    try {
      const playbackRateDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate')
      originalMethods.Object.defineProperty.call(Object, player, 'playbackRate', {
        configurable: true,
        get: function () {
          return playbackRateDescriptor.get.apply(player, arguments)
        },
        set: function (val) {
          if (typeof val !== 'number' || TCC.doTask('blockSetPlaybackRate') || config.enhance.blockSetPlaybackRate) {
            return false
          }

          if (player.currentTime > 2 && player._setPlaybackRate_ && player._setPlaybackRate_.value !== val && Date.now() - player._setPlaybackRate_.time > 500) {
            /* 在符合条件的情况下，允许外部设置playbackRate */
            // debug.info('[setPlaybackRate]', val, player.currentTime)
            t.setPlaybackRate(val)
          }

          /* 记录外部设置playbackRate的信息 */
          player._setPlaybackRate_ = {
            time: Date.now(),
            value: val
          }
        }
      })
    } catch (e) {
      debug.error('解锁playbackRate失败', e)
    }

    /* 本身处于1倍播放速度的时候不再提示 */
    if (!num && curPlaybackRate === 1) {
      return true
    } else {
      !notips && t.tips(i18n.t('tipsMsg.playspeed') + player.playbackRate)
    }
  },
  /* 恢复播放速度，还原到1倍速度、或恢复到上次的倍速 */
  resetPlaybackRate: function (player) {
    const t = this
    player = player || t.player()

    const oldPlaybackRate = Number(player.playbackRate)
    const playbackRate = oldPlaybackRate === 1 ? t.lastPlaybackRate : 1
    if (oldPlaybackRate !== 1) {
      t.lastPlaybackRate = oldPlaybackRate
    }

    t.setPlaybackRate(playbackRate)
  },

  /* 提升播放速率 */
  setPlaybackRateUp (num) {
    num = numUp(num) || 0.1
    this.player() && this.setPlaybackRate(this.player().playbackRate + num)
  },

  /* 降低播放速率 */
  setPlaybackRateDown (num) {
    num = numDown(num) || -0.1
    this.player() && this.setPlaybackRate(this.player().playbackRate + num)
  },

  /* 设置播放进度 */
  setCurrentTime: function (num) {
    if (!num) return
    num = Number(num)
    const _num = Math.abs(Number(num.toFixed(1)))

    const t = this
    const player = t.player()
    if (TCC.doTask('currentTime')) {
      // debug.log('[TCC][currentTime]', 'suc')
      return
    }

    delete player.currentTime
    player.currentTime = _num
    player._setCurrentTime_ = {
      time: Date.now()
    }

    try {
      const currentTimeDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime')
      originalMethods.Object.defineProperty.call(Object, player, 'currentTime', {
        configurable: true,
        enumerable: true,
        get: function () {
          return currentTimeDescriptor.get.apply(player, arguments)
        },
        set: function (val) {
          if (typeof val !== 'number' || TCC.doTask('blockSetCurrentTime') || config.enhance.blockSetCurrentTime) {
            return
          }

          if (player._setCurrentTime_ && player.currentTime !== val && Date.now() - player._setCurrentTime_.time > 500) {
            /* 在符合条件的情况下，允许外部设置currentTime */
            // debug.log('[currentTime]', val)
            player._setCurrentTime_ = { time: Date.now() }
            return currentTimeDescriptor.set.apply(player, arguments)
          } else {
            debug.log(`[currentTime block] 检测到潜在的阻断currentTime变更的情况，已对该操作进行过滤, currentTime: ${val}`)
          }

          /* 记录外部设置currentTime的信息 */
          player._setCurrentTime_ = {
            time: Date.now()
          }
        }
      })
    } catch (e) {
      debug.error('解锁currentTime失败', e)
    }
  },

  setCurrentTimeUp (num) {
    num = Number(numUp(num) || this.skipStep)

    if (TCC.doTask('addCurrentTime')) {
      // debug.log('[TCC][addCurrentTime]', 'suc')
    } else {
      this.player() && this.setCurrentTime(this.player().currentTime + num)
      this.tips(i18n.t('tipsMsg.forward') + num + i18n.t('tipsMsg.seconds'))
    }
  },

  setCurrentTimeDown (num) {
    num = Number(numDown(num) || -this.skipStep)

    if (TCC.doTask('subtractCurrentTime')) {
      // debug.log('[TCC][subtractCurrentTime]', 'suc')
    } else {
      this.player() && this.setCurrentTime(this.player().currentTime + num)
      this.tips(i18n.t('tipsMsg.backward') + Math.abs(num) + i18n.t('tipsMsg.seconds'))
    }
  },

  getVolume: function () {
    let volume = config.video.volume
    if (isInIframe()) {
      volume = globalConfig.video.volume
    }
    return Number(Number(volume).toFixed(2))
  },

  /* 设置声音大小 */
  setVolume: function (num, notips) {
    const t = this
    const player = t.player()

    if (!num && num !== 0) {
      num = t.getVolume()
    }

    num = Number(num).toFixed(2)
    if (num < 0) {
      num = 0
    } else if (num > 1) {
      num = 1
    }

    /* 记录播放音量信息 */
    t.volume = num
    if (isInIframe()) {
      globalConfig.video.volume = num
    } else {
      config.video.volume = num
    }

    delete player.volume
    player.volume = num
    player._setVolume_ = {
      time: Date.now(),
      value: num
    }

    try {
      const volumeDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'volume')
      originalMethods.Object.defineProperty.call(Object, player, 'volume', {
        configurable: true,
        get: function () {
          return volumeDescriptor.get.apply(player, arguments)
        },
        set: function (val) {
          if (typeof val !== 'number' || val < 0) {
            return false
          }

          if (player.currentTime > 2 && player._setVolume_ && player._setVolume_.value !== val && Date.now() - player._setVolume_.time > 500) {
            /* 在符合条件的情况下，允许外部设置播放声音 */
            // debug.info('[setVolume]', val, player.currentTime)
            t.setVolume(val)
          }

          /* 记录外部设置声音的信息 */
          player._setVolume_ = {
            time: Date.now(),
            value: val
          }
        }
      })
    } catch (e) {
      debug.error('解锁volume失败', e)
    }

    /* 调节音量的时候顺便把静音模式关闭 */
    player.muted = false

    !notips && t.tips(i18n.t('tipsMsg.volume') + parseInt(player.volume * 100) + '%')
  },

  setVolumeUp (num) {
    num = numUp(num) || 0.2
    this.player() && this.setVolume(this.player().volume + num)
  },

  setVolumeDown (num) {
    num = numDown(num) || -0.2
    this.player() && this.setVolume(this.player().volume + num)
  },

  /* 设置视频画面的缩放与位移 */
  setTransform (notTips) {
    const t = this
    const player = t.player()
    const scale = t.scale = Number(t.scale).toFixed(1)
    const translate = t.translate

    const mirror = t.rotateX === 180 ? `rotateX(${t.rotateX}deg)` : (t.rotateY === 180 ? `rotateY(${t.rotateY}deg)` : '')
    player.style.transform = `scale(${scale}) translate(${translate.x}px, ${translate.y}px) rotate(${t.rotate}deg) ${mirror}`

    let tipsMsg = i18n.t('tipsMsg.videozoom') + `${scale * 100}%`
    if (translate.x) {
      tipsMsg += ` ${i18n.t('tipsMsg.horizontal')}${t.translate.x}px`
    }
    if (translate.y) {
      tipsMsg += ` ${i18n.t('tipsMsg.vertical')}${t.translate.y}px`
    }

    if (notTips === true) {
      /* transform状态守护调用，不进行提示 */
    } else {
      t.tips(tipsMsg)
    }

    /* 始终保持transform样式的正常 */
    if (!t._transformStateGuard_) {
      t._transformStateGuard_ = setInterval(() => {
        t.setTransform(true)
      }, 300)
    }
  },

  /* 视频画面旋转 90 度 */
  setRotate () {
    const t = this
    t.rotate += 90
    if (t.rotate % 360 === 0) t.rotate = 0
    t.setTransform(true)
    t.tips(i18n.t('tipsMsg.imgrotate') + t.rotate + '°')
  },

  /* 设置镜像翻转 */
  setMirror (vertical = false) {
    const t = this
    let tipsMsg = ''
    if (vertical) {
      t.rotateX = t.rotateX === 0 ? 180 : 0
      tipsMsg += ` ${i18n.t('tipsMsg.verticalMirror')} ${t.rotateX}deg`
    } else {
      t.rotateY = t.rotateY === 0 ? 180 : 0
      tipsMsg += ` ${i18n.t('tipsMsg.horizontalMirror')} ${t.rotateY}deg`
    }

    t.setTransform(true)
    t.tips(tipsMsg)
  },

  /* 缩放视频画面 */
  setScale (num) {
    this.scale = num
    this.setTransform()
  },

  /* 视频放大 +0.1 */
  setScaleUp () {
    this.scale += 0.1
    this.setTransform()
  },

  /* 视频缩小 -0.1 */
  setScaleDown () {
    this.scale -= 0.1
    this.setTransform()
  },

  /* 设置视频画面的位移属性 */
  setTranslate (x, y) {
    if (typeof x === 'number') {
      this.translate.x = x
    }

    if (typeof y === 'number') {
      this.translate.y = y
    }

    this.setTransform()
  },

  /* 视频画面向右平移 */
  setTranslateRight () {
    this.translate.x += 10
    this.setTransform()
  },

  /* 视频画面向左平移 */
  setTranslateLeft () {
    this.translate.x -= 10
    this.setTransform()
  },

  /* 视频画面向上平移 */
  setTranslateUp () {
    this.translate.y -= 10
    this.setTransform()
  },

  /* 视频画面向下平移 */
  setTranslateDown () {
    this.translate.y += 10
    this.setTransform()
  },

  resetTransform (notTips) {
    const t = this
    t.scale = 1
    t.translate = { x: 0, y: 0 }
    t.rotate = 0
    t.rotateX = 0
    t.rotateY = 0
    t.setTransform(notTips)
  },

  /**
   * 定格帧画面
   * @param perFps {Number} -可选 默认 1，即定格到下一帧，如果是-1则为定格到上一帧
   */
  freezeFrame (perFps) {
    perFps = perFps || 1
    const t = this
    const player = t.player()

    /* 跳帧 */
    player.currentTime += Number(perFps / t.fps)

    /* 定格画面 */
    if (!player.paused) player.pause()

    /* 有些播放器发现画面所在位置变了会自动进行播放，所以此时需要对播放操作进行挂起 */
    player._hangUp_ && player._hangUp_('play', 400)

    if (perFps === 1) {
      t.tips(i18n.t('tipsMsg.nextframe'))
    } else if (perFps === -1) {
      t.tips(i18n.t('tipsMsg.previousframe'))
    } else {
      t.tips(i18n.t('tipsMsg.stopframe') + perFps)
    }
  },

  /**
   * 切换画中画功能
   */
  togglePictureInPicture () {
    const player = this.player()
    if (window._isPictureInPicture_ && document.pictureInPictureElement) {
      document.exitPictureInPicture().then(() => {
        window._isPictureInPicture_ = null
      }).catch((e) => {
        window._isPictureInPicture_ = null
        debug.error('[togglePictureInPicture]', e)
      })
    } else {
      player.requestPictureInPicture && player.requestPictureInPicture().then(() => {
        window._isPictureInPicture_ = true
      }).catch((e) => {
        window._isPictureInPicture_ = null
        debug.error('[togglePictureInPicture]', e)
      })
    }
  },

  /* 播放下一个视频，默认是没有这个功能的，只有在TCC里配置了next字段才会有该功能 */
  setNextVideo () {
    const isDo = TCC.doTask('next')
    if (!isDo) {
      debug.log('当前网页不支持一键播放下个视频功能~')
    }
  },

  setFakeUA (ua) {
    ua = ua || userAgentMap.iPhone.safari

    /* 记录设定的ua信息 */
    !isInCrossOriginFrame() && window.localStorage.setItem('_h5_player_user_agent_', ua)
    fakeUA(ua)
  },

  /* ua伪装切换开关 */
  switchFakeUA (ua) {
    const customUA = isInCrossOriginFrame() ? null : window.localStorage.getItem('_h5_player_user_agent_')
    if (customUA) {
      !isInCrossOriginFrame() && window.localStorage.removeItem('_h5_player_user_agent_')
    } else {
      this.setFakeUA(ua)
    }

    debug.log('ua', navigator.userAgent)
  },

  /* 切换播放状态 */
  switchPlayStatus () {
    const t = this
    const player = t.player()
    if (TCC.doTask('switchPlayStatus')) {
      // debug.log('[TCC][switchPlayStatus]', 'suc')
      return
    }

    if (player.paused) {
      if (TCC.doTask('play')) {
        // debug.log('[TCC][play]', 'suc')
        // 自定义播放调用成功
      } else {
        player.play()
        t.tips(i18n.t('tipsMsg.play'))
      }
    } else {
      if (TCC.doTask('pause')) {
        // debug.log('[TCC][pause]', 'suc')
        // 自定义暂停调用成功
      } else {
        player.pause()
        t.tips(i18n.t('tipsMsg.pause'))
      }
    }
  },

  isAllowRestorePlayProgress: function () {
    const keyName = '_allowRestorePlayProgress_' + window.location.host
    const allowRestorePlayProgressVal = window.GM_getValue(keyName)
    return !allowRestorePlayProgressVal || allowRestorePlayProgressVal === 'true'
  },
  /* 切换自动恢复播放进度的状态 */
  switchRestorePlayProgressStatus: function () {
    const t = h5Player
    let isAllowRestorePlayProgress = t.isAllowRestorePlayProgress()
    /* 进行值反转 */
    isAllowRestorePlayProgress = !isAllowRestorePlayProgress
    const keyName = '_allowRestorePlayProgress_' + window.location.host
    window.GM_setValue(keyName, String(isAllowRestorePlayProgress))

    /* 操作提示 */
    if (isAllowRestorePlayProgress) {
      t.tips(i18n.t('tipsMsg.arpl'))
      t.setPlayProgress(t.player())
    } else {
      t.tips(i18n.t('tipsMsg.drpl'))
    }
  },
  tipsClassName: 'html_player_enhance_tips',

  getTipsContainer: function (videoEl) {
    const t = h5Player
    const player = videoEl || t.player()
    // 使用getContainer获取到的父节点弊端太多，暂时弃用
    // const _tispContainer_ = player._tispContainer_  ||  getContainer(player);

    let tispContainer = player.parentNode || player

    /* 如果父节点为无长宽的元素，则再往上查找一级 */
    const containerBox = tispContainer.getBoundingClientRect()
    if ((!containerBox.width || !containerBox.height) && tispContainer.parentNode) {
      tispContainer = tispContainer.parentNode
    }

    return tispContainer
  },
  tips: function (str) {
    const t = h5Player
    const player = t.player()
    if (!player) {
      debug.log('h5Player Tips:', str)
      return true
    }

    const parentNode = t.getTipsContainer()

    if (parentNode === player) {
      debug.info('获取tips的包裹容器异常：', player, str)
      return false
    }

    // 修复部分提示按钮位置异常问题
    const defStyle = parentNode.getAttribute('style') || ''
    let backupStyle = parentNode.getAttribute('style-backup') || ''
    if (!backupStyle) {
      parentNode.setAttribute('style-backup', defStyle || 'style-backup:none')
      backupStyle = defStyle
    }

    const newStyleArr = backupStyle.split(';')

    const oldPosition = parentNode.getAttribute('def-position') || window.getComputedStyle(parentNode).position
    if (parentNode.getAttribute('def-position') === null) {
      parentNode.setAttribute('def-position', oldPosition || '')
    }
    if (['static', 'inherit', 'initial', 'unset', ''].includes(oldPosition)) {
      newStyleArr.push('position: relative')
    }

    const playerBox = player.getBoundingClientRect()
    const parentNodeBox = parentNode.getBoundingClientRect()
    /* 不存在高宽时，给包裹节点一个最小高宽，才能保证提示能正常显示 */
    if (!parentNodeBox.width || !parentNodeBox.height) {
      newStyleArr.push('min-width:' + playerBox.width + 'px')
      newStyleArr.push('min-height:' + playerBox.height + 'px')
    }

    parentNode.setAttribute('style', newStyleArr.join(';'))

    const newPlayerBox = player.getBoundingClientRect()
    if (Math.abs(newPlayerBox.height - playerBox.height) > 50) {
      parentNode.setAttribute('style', backupStyle)
      // debug.info('应用新样式后给播放器高宽造成了严重的偏差，样式已被还原：', player, playerBox, newPlayerBox)
    }

    const tipsSelector = '.' + t.tipsClassName
    let tipsDom = parentNode.querySelector(tipsSelector)

    /* 提示dom未初始化的，则进行初始化 */
    if (!tipsDom) {
      t.initTips()
      tipsDom = parentNode.querySelector(tipsSelector)
      if (!tipsDom) {
        debug.log('init h5player tips dom error...')
        return false
      }
    }

    const style = tipsDom.style
    tipsDom.innerText = str

    for (var i = 0; i < 3; i++) {
      if (this.on_off[i]) clearTimeout(this.on_off[i])
    }

    function showTips () {
      style.display = 'block'
      t.on_off[0] = setTimeout(function () {
        style.opacity = 1
      }, 50)
      t.on_off[1] = setTimeout(function () {
        // 隐藏提示框和还原样式
        style.opacity = 0
        style.display = 'none'
        if (backupStyle) {
          parentNode.setAttribute('style', backupStyle)
        }
      }, 2000)
    }

    if (style.display === 'block') {
      style.display = 'none'
      clearTimeout(this.on_off[3])
      t.on_off[2] = setTimeout(function () {
        showTips()
      }, 100)
    } else {
      showTips()
    }
  },
  /* 设置提示DOM的样式 */
  initTips: function () {
    const t = h5Player
    const parentNode = t.getTipsContainer()
    if (parentNode.querySelector('.' + t.tipsClassName)) return

    // top: 50%;
    // left: 50%;
    // transform: translate(-50%,-50%);
    const tipsStyle = `
      position: absolute;
      z-index: 999999;
      font-size: ${t.fontSize || 16}px;
      padding: 5px 10px;
      background: rgba(0,0,0,0.4);
      color:white;
      top: 0;
      left: 0;
      transition: all 500ms ease;
      opacity: 0;
      border-bottom-right-radius: 5px;
      display: none;
      -webkit-font-smoothing: subpixel-antialiased;
      font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;
      -webkit-user-select: none;
    `
    const tips = document.createElement('div')
    tips.setAttribute('style', tipsStyle)
    tips.setAttribute('class', t.tipsClassName)
    parentNode.appendChild(tips)
  },
  on_off: new Array(3),
  fps: 30,
  /* 滤镜效果 */
  filter: {
    key: [1, 1, 1, 0, 0],
    setup: function () {
      var view = 'brightness({0}) contrast({1}) saturate({2}) hue-rotate({3}deg) blur({4}px)'
      for (var i = 0; i < 5; i++) {
        view = view.replace('{' + i + '}', String(this.key[i]))
        this.key[i] = Number(this.key[i])
      }
      h5Player.player().style.filter = view
    },
    reset: function () {
      this.key[0] = 1
      this.key[1] = 1
      this.key[2] = 1
      this.key[3] = 0
      this.key[4] = 0
      this.setup()
    }
  },

  setFilter (item, num, isDown) {
    if (![0, 1, 2, 3, 4].includes(item) || typeof num !== 'number') {
      debug.error('[setFilter]', '参数有误', item, num)
      return false
    }

    /* 如果标识为down，则自动取负数值 */
    if (isDown === true) {
      if (num && num > 0) { num = -num }
    }

    const nameMap = {
      0: 'brightness',
      1: 'contrast',
      2: 'saturation',
      3: 'hue',
      4: 'blur'
    }

    const t = this
    t.filter.key[item] += num || 0.1
    t.filter.key[item] = t.filter.key[item].toFixed(2)

    if (t.filter.key[item] < 0 && nameMap[item] !== 'hue') {
      t.filter.key[item] = 0
    }

    t.filter.setup()
    t.tips(i18n.t(`tipsMsg.${nameMap[item]}`) + parseInt(t.filter.key[item] * 100) + '%')
  },

  /* 设置视频的亮度 */
  setBrightness (num) {
    this.setFilter(0, num)
  },

  /* 提升视频的亮度 */
  setBrightnessUp (num) {
    this.setFilter(0, num || 0.1)
  },

  /* 降低视频的亮度 */
  setBrightnessDown (num) {
    this.setFilter(0, num || -0.1, true)
  },

  /* 设置视频的对比度 */
  setContrast (num) {
    this.setFilter(1, num)
  },

  /* 提升视频的对比度 */
  setContrastUp (num) {
    this.setFilter(1, num || 0.1)
  },

  /* 降低视频的对比度 */
  setContrastDown (num) {
    this.setFilter(1, num || -0.1, true)
  },

  /* 设置饱和度 */
  setSaturation (num) {
    this.setFilter(2, num)
  },

  /* 提升饱和度 */
  setSaturationUp (num) {
    this.setFilter(2, num || 0.1)
  },

  /* 降低饱和度 */
  setSaturationDown (num) {
    this.setFilter(2, num || -0.1, true)
  },

  /* 设置色相 */
  setHue (num) {
    this.setFilter(3, num)
  },

  /* 增加色相 */
  setHueUp (num) {
    this.setFilter(3, num || 1)
  },

  /* 降低色相 */
  setHueDown (num) {
    this.setFilter(3, num || -1, true)
  },

  /* 设置模糊度 */
  setBlur (num) {
    this.setFilter(4, num)
  },

  /* 增加模糊度 */
  setBlurUp (num) {
    this.setFilter(4, num || 1)
  },

  /* 降低模糊度 */
  setBlurDown (num) {
    this.setFilter(4, num || -1, true)
  },

  resetFilterAndTransform () {
    const t = this

    t.resetTransform(true)
    t.filter.reset()
    t.tips(i18n.t('tipsMsg.imgattrreset'))
  },

  _isFoucs: false,

  /* 播放器的聚焦事件 */
  isFoucs: function () {
    const t = h5Player
    const player = t.player()
    if (!player) return

    player.onmouseenter = function (e) {
      h5Player._isFoucs = true
    }
    player.onmouseleave = function (e) {
      h5Player._isFoucs = false
    }
  },
  /* 播放器事件响应器 */
  palyerTrigger: function (player, event) {
    if (!player || !event) return
    const t = h5Player
    const keyCode = event.keyCode
    const key = event.key.toLowerCase()

    if (event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {
      // 网页全屏
      if (key === 'enter') {
        t.setWebFullScreen()
      }

      // 进入或退出画中画模式
      if (key === 'p') {
        t.togglePictureInPicture()
      }

      // 截图并下载保存
      if (key === 's') {
        videoCapturer.capture(player, true)

        /* 暂停画面 */
        if (!player.paused && !document.pictureInPictureElement && document.visibilityState !== 'visible') {
          t.freezeFrame()
        }
      }

      if (key === 'r') {
        t.switchRestorePlayProgressStatus()
      }

      if (key === 'm') {
        /* 垂直镜像翻转 */
        t.setMirror(true)
      }

      // 视频画面缩放相关事件
      const allowKeys = ['x', 'c', 'z', 'arrowright', 'arrowleft', 'arrowup', 'arrowdown']
      if (!allowKeys.includes(key)) return

      t.scale = Number(t.scale)
      switch (key) {
        // shift+X：视频缩小 -0.1
        case 'x' :
          t.setScaleDown()
          break
        // shift+C：视频放大 +0.1
        case 'c' :
          t.setScaleUp()
          break
        // shift+Z：视频恢复正常大小
        case 'z' :
          t.resetTransform()
          break
        case 'arrowright' :
          t.setTranslateRight()
          break
        case 'arrowleft' :
          t.setTranslateLeft()
          break
        case 'arrowup' :
          t.setTranslateUp()
          break
        case 'arrowdown' :
          t.setTranslateDown()
          break
      }

      // 阻止事件冒泡
      event.stopPropagation()
      event.preventDefault()
      return true
    }

    // ctrl+方向键右→：快进30秒
    if (event.ctrlKey && keyCode === 39) {
      t.setCurrentTimeUp(t.skipStep * 6)
    }
    // ctrl+方向键左←：后退30秒
    if (event.ctrlKey && keyCode === 37) {
      t.setCurrentTimeDown(-t.skipStep * 6)
    }

    // ctrl+方向键上↑：音量升高 20%
    if (event.ctrlKey && keyCode === 38) {
      t.setVolumeUp(0.2)
    }
    // 方向键下↓：音量降低 20%
    if (event.ctrlKey && keyCode === 40) {
      t.setVolumeDown(-0.2)
    }

    // 防止其它无关组合键冲突
    if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) return

    // 方向键右→：快进5秒
    if (keyCode === 39) {
      t.setCurrentTimeUp()
    }
    // 方向键左←：后退5秒
    if (keyCode === 37) {
      t.setCurrentTimeDown()
    }

    // 方向键上↑：音量升高 10%
    if (keyCode === 38) {
      t.setVolumeUp(0.1)
    }
    // 方向键下↓：音量降低 10%
    if (keyCode === 40) {
      t.setVolumeDown(-0.1)
    }

    // 空格键：暂停/播放
    if (keyCode === 32) {
      t.switchPlayStatus()
    }

    // 按键X：减速播放 -0.1
    if (keyCode === 88) {
      t.setPlaybackRateDown()
    }
    // 按键C：加速播放 +0.1
    if (keyCode === 67) {
      t.setPlaybackRateUp()
    }
    // 按键Z：正常速度播放
    if (keyCode === 90) {
      t.resetPlaybackRate()
    }

    // 按1-4设置播放速度 49-52;97-100
    if ((keyCode >= 49 && keyCode <= 52) || (keyCode >= 97 && keyCode <= 100)) {
      t.setPlaybackRate(event.key)
    }

    // 按键F：下一帧
    if (keyCode === 70) {
      t.freezeFrame(1)
    }
    // 按键D：上一帧
    if (keyCode === 68) {
      t.freezeFrame(-1)
    }

    // 按键E：亮度增加%
    if (keyCode === 69) {
      t.setBrightnessUp()
    }
    // 按键W：亮度减少%
    if (keyCode === 87) {
      t.setBrightnessDown()
    }

    // 按键T：对比度增加%
    if (keyCode === 84) {
      t.setContrastUp()
    }
    // 按键R：对比度减少%
    if (keyCode === 82) {
      t.setContrastDown()
    }

    // 按键U：饱和度增加%
    if (keyCode === 85) {
      t.setSaturationUp()
    }
    // 按键Y：饱和度减少%
    if (keyCode === 89) {
      t.setSaturationDown()
    }

    // 按键O：色相增加 1 度
    if (keyCode === 79) {
      t.setHueUp()
    }
    // 按键I：色相减少 1 度
    if (keyCode === 73) {
      t.setHueDown()
    }

    // 按键K：模糊增加 1 px
    if (keyCode === 75) {
      t.setBlurUp()
    }
    // 按键J：模糊减少 1 px
    if (keyCode === 74) {
      t.setBlurDown()
    }

    // 按键Q：图像复位
    if (keyCode === 81) {
      t.resetFilterAndTransform()
    }

    // 按键S：画面旋转 90 度
    if (keyCode === 83) {
      t.setRotate()
    }

    /* 水平镜像翻转 */
    if (keyCode === 77) {
      t.setMirror()
    }

    // 按键回车，进入全屏
    if (keyCode === 13) {
      t.setFullScreen()
    }

    if (key === 'n') {
      t.setNextVideo()
    }

    // 阻止事件冒泡
    event.stopPropagation()
    event.preventDefault()
    return true
  },

  /* 运行自定义的快捷键操作，如果运行了会返回true */
  runCustomShortcuts: function (player, event) {
    if (!player || !event) return
    const key = event.key.toLowerCase()
    const taskConf = TCC.getTaskConfig()
    const confIsCorrect = isObj(taskConf.shortcuts) &&
      Array.isArray(taskConf.shortcuts.register) &&
      taskConf.shortcuts.callback instanceof Function

    /* 判断当前触发的快捷键是否已被注册 */
    function isRegister () {
      const list = taskConf.shortcuts.register

      /* 当前触发的组合键 */
      const combineKey = []
      if (event.ctrlKey) {
        combineKey.push('ctrl')
      }
      if (event.shiftKey) {
        combineKey.push('shift')
      }
      if (event.altKey) {
        combineKey.push('alt')
      }
      if (event.metaKey) {
        combineKey.push('command')
      }

      combineKey.push(key)

      /* 通过循环判断当前触发的组合键和已注册的组合键是否完全一致 */
      let hasReg = false
      list.forEach((shortcut) => {
        const regKey = shortcut.split('+')
        if (combineKey.length === regKey.length) {
          let allMatch = true
          regKey.forEach((key) => {
            if (!combineKey.includes(key)) {
              allMatch = false
            }
          })
          if (allMatch) {
            hasReg = true
          }
        }
      })

      return hasReg
    }

    if (confIsCorrect && isRegister()) {
      // 执行自定义快捷键操作
      const isDo = TCC.doTask('shortcuts', {
        event,
        player,
        h5Player
      })

      if (isDo) {
        event.stopPropagation()
        event.preventDefault()
      }

      return isDo
    } else {
      return false
    }
  },

  /* 按键响应方法 */
  keydownEvent: function (event) {
    const t = h5Player
    const keyCode = event.keyCode
    // const key = event.key.toLowerCase()
    const player = t.player()

    /* 处于可编辑元素中不执行任何快捷键 */
    if (isEditableTarget(event.target)) return

    /* shift+f 切换UA伪装 */
    if (event.shiftKey && keyCode === 70) {
      t.switchFakeUA()
    }

    /* 未用到的按键不进行任何事件监听 */
    if (!isRegisterKey(event)) return

    /* 广播按键消息，进行跨域控制 */
    monkeyMsg.send('globalKeydownEvent', event, 0)

    if (!player) {
      if (t.hasCrossOriginVideoDetected) {
        // debug.log('当前页面检出了跨域受限的视频，仍需阻止默认事件和事件冒泡')
        event.stopPropagation()
        event.preventDefault()
        return true
      }

      // debug.log('无可用的播放，不执行相关操作')
      return
    }

    /* 切换插件的可用状态 */
    if (event.ctrlKey && keyCode === 32) {
      t.enable = !t.enable
      if (t.enable) {
        t.tips(i18n.t('tipsMsg.onplugin'))
      } else {
        t.tips(i18n.t('tipsMsg.offplugin'))
      }
    }

    if (!t.enable) {
      debug.log('h5Player 已禁用~')
      return false
    }

    // 按ctrl+\ 键进入聚焦或取消聚焦状态，用于视频标签被遮挡的场景
    if (event.ctrlKey && keyCode === 220) {
      t.globalMode = !t.globalMode
      if (t.globalMode) {
        t.tips(i18n.t('tipsMsg.globalmode') + ' ON')
      } else {
        t.tips(i18n.t('tipsMsg.globalmode') + ' OFF')
      }
    }

    /* 非全局模式下，不聚焦则不执行快捷键的操作 */
    if (!t.globalMode && !t._isFoucs) return

    /* 判断是否执行了自定义快捷键操作，如果是则不再响应后面默认定义操作 */
    if (t.runCustomShortcuts(player, event) === true) return

    /* 响应播放器相关操作 */
    t.palyerTrigger(player, event)
  },

  /**
   * 获取播放进度
   * @param player -可选 对应的h5 播放器对象， 如果不传，则获取到的是整个播放进度表，传则获取当前播放器的播放进度
   */
  getPlayProgress: function (player) {
    let progressMap = isInCrossOriginFrame() ? null : window.localStorage.getItem('_h5_player_play_progress_')
    if (!progressMap) {
      progressMap = {}
    } else {
      try {
        progressMap = JSON.parse(progressMap)
      } catch (e) {
        progressMap = {}
      }
    }

    if (!player) {
      return progressMap
    } else {
      let keyName = window.location.href || player.src
      keyName += player.duration
      if (progressMap[keyName]) {
        return progressMap[keyName].progress
      } else {
        return player.currentTime
      }
    }
  },
  /* 播放进度记录器 */
  playProgressRecorder: function (player) {
    const t = h5Player
    clearTimeout(player._playProgressTimer_)
    function recorder (player) {
      player._playProgressTimer_ = setTimeout(function () {
        if (!t.isAllowRestorePlayProgress()) {
          recorder(player)
          return true
        }

        const progressMap = t.getPlayProgress() || {}
        const list = Object.keys(progressMap)

        let keyName = window.location.href || player.src
        keyName += player.duration

        /* 只保存最近10个视频的播放进度 */
        if (list.length > 10) {
          /* 根据更新的时间戳，取出最早添加播放进度的记录项 */
          let timeList = []
          list.forEach(function (keyName) {
            progressMap[keyName] && progressMap[keyName].t && timeList.push(progressMap[keyName].t)
          })
          timeList = quickSort(timeList)
          const timestamp = timeList[0]

          /* 删除最早添加的记录项 */
          list.forEach(function (keyName) {
            if (progressMap[keyName].t === timestamp) {
              delete progressMap[keyName]
            }
          })
        }

        /* 记录当前播放进度 */
        progressMap[keyName] = {
          progress: player.currentTime,
          t: new Date().getTime()
        }

        /* 存储播放进度表 */
        !isInCrossOriginFrame() && window.localStorage.setItem('_h5_player_play_progress_', JSON.stringify(progressMap))

        /* 循环侦听 */
        recorder(player)
      }, 1000 * 2)
    }
    recorder(player)
  },
  /* 设置播放进度 */
  setPlayProgress: function (player, time) {
    const t = h5Player
    if (!player) return

    const curTime = Number(t.getPlayProgress(player))
    if (!curTime || Number.isNaN(curTime)) return

    if (t.isAllowRestorePlayProgress()) {
      player.currentTime = curTime || player.currentTime
      if (curTime > 3) {
        t.tips(i18n.t('tipsMsg.playbackrestored'))
      }
    } else {
      t.tips(i18n.t('tipsMsg.playbackrestoreoff'))
    }
  },

  setPlayerInstance (el) {
    if (el && el.getBoundingClientRect) {
      const t = h5Player

      const elParentNode = t.getTipsContainer(el)
      const elInfo = el.getBoundingClientRect()
      const parentElInfo = elParentNode && elParentNode.getBoundingClientRect()
      if (elInfo && elInfo.width > 200 && parentElInfo && parentElInfo.width > 200) {
        t.playerInstance = el
        t.initPlayerInstance(false)
      }
    }
  },

  /**
   * 视频元素是否出现在视口里的观察对象，用于优化多视频实例的实例切换
   * https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
   */
  intersectionObserver: new IntersectionObserver(function (entries, observer) {
    const t = h5Player
    // debug.log('[intersectionObserver]', entries)

    let tmpIntersectionRatio = 0
    entries.forEach(entrie => {
      entrie.target._intersectionInfo_ = entrie

      if (entrie.intersectionRatio > tmpIntersectionRatio && entrie.intersectionRatio > 0.4) {
        tmpIntersectionRatio = entrie.intersectionRatio

        const oldPlayer = t.player()
        if (oldPlayer && oldPlayer._intersectionInfo_ && tmpIntersectionRatio < oldPlayer._intersectionInfo_.intersectionRatio) {
          /* 新实例的视图范围比旧的小，则不切换实例 */
          return
        }

        /* 切换视频实例 */
        t.setPlayerInstance(entrie.target)
        debug.log('[intersectionObserver] 切换视频实例', entrie)
      }
    })
  }, {
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
  }),

  /* 注册H5player相关的菜单 */
  registerH5playerMenus () {
    const t = this
    const player = t.player()

    if (player && !t._hasRegisterH5playerMenus_) {
      const menus = [
        {
          title: () => i18n.t('openCrossOriginFramePage'),
          disable: !isInCrossOriginFrame(),
          fn: () => {
            openInTab(location.href)
          }
        },
        {
          title: () => config.enhance.blockSetPlaybackRate ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate'),
          fn: () => {
            const confirm = window.confirm(config.enhance.blockSetPlaybackRate ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate'))
            if (confirm) {
              config.enhance.blockSetPlaybackRate = !config.enhance.blockSetPlaybackRate
            }
          }
        },
        {
          title: () => config.enhance.blockSetCurrentTime ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime'),
          fn: () => {
            const confirm = window.confirm(config.enhance.blockSetCurrentTime ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime'))
            if (confirm) {
              config.enhance.blockSetCurrentTime = !config.enhance.blockSetCurrentTime
            }
          }
        }
      ]

      let titlePrefix = ''
      if (isInIframe()) {
        titlePrefix = `[${location.hostname}]`
      }

      /* 补充title前缀 */
      menus.forEach(menu => {
        const titleFn = menu.title
        menu.title = () => titlePrefix + titleFn()
      })

      addMenu(menus)

      t._hasRegisterH5playerMenus_ = true
    }
  },

  /**
   * 检测h5播放器是否存在
   * @param callback
   */
  detecH5Player: function () {
    const t = this
    const playerList = t.getPlayerList()

    if (playerList.length) {
      debug.log('检测到HTML5视频！', location.href, h5Player)

      /* 单video实例标签的情况 */
      if (playerList.length === 1) {
        t.playerInstance = playerList[0]
        t.initPlayerInstance(true)
      } else {
        /* 多video实例标签的情况 */
        playerList.forEach(function (player) {
          /* 鼠标移到其上面的时候重新指定实例 */
          if (!player._hasMouseRedirectEvent_) {
            player.addEventListener('mouseenter', function (event) {
              t.setPlayerInstance(event.target)
            })
            player._hasMouseRedirectEvent_ = true
          }

          /* 播放器开始播放的时候重新指向实例 */
          if (!player._hasPlayingRedirectEvent_) {
            player.addEventListener('playing', function (event) {
              t.setPlayerInstance(event.target)
            })
            player._hasPlayingRedirectEvent_ = true
          }

          /* 当被观察到出现在浏览器视口里时，切换视频实例 */
          if (!player._hasIntersectionObserver_) {
            t.intersectionObserver.observe(player)
            player._hasIntersectionObserver_ = true
          }
        })
      }

      if (isInCrossOriginFrame()) {
        /* 广播检测到H5Player的消息 */
        monkeyMsg.send('videoDetected', {
          src: t.playerInstance.src
        })
      }

      t.registerH5playerMenus()
    }
  },

  /* 响应来自按键消息的广播 */
  bindFakeEvent () {
    const t = this
    if (t._hasBindFakeEvent_) return

    /* 触发来自消息广播的模拟事件，实现跨域、跨Tab控制视频播放 */
    let triggerFakeEvent = function (name, oldVal, newVal, remote) {
      const player = t.player()
      if (player) {
        const fakeEvent = newVal.data
        fakeEvent.stopPropagation = () => {}
        fakeEvent.preventDefault = () => {}
        t.palyerTrigger(player, fakeEvent)

        debug.log('已响应跨Tab/跨域按键控制信息：', newVal)
      }
    }

    /**
     * 操作节流控制，减少按键消息频率，
     * 注意，开启节流控制后导致复合按键（如：shift+s）没法生效
     */
    if (!crossTabCtl.hasOpenPictureInPicture() && !t.hasCrossOriginVideoDetected) {
      triggerFakeEvent = throttle(triggerFakeEvent, 80)
    }

    /* 注册响应来自按键消息的广播的事件 */
    monkeyMsg.on('globalKeydownEvent', async (name, oldVal, newVal, remote) => {
      if (remote) {
        if (isInCrossOriginFrame()) {
          /**
           * 同处跨域受限页面，且都处于可见状态，大概率处于同一个Tab标签里，但不是100%
           * tabId一致则100%为同一标签下
           */
          if (document.visibilityState === 'visible' && newVal.originTab) {
            triggerFakeEvent(name, oldVal, newVal, remote)
          }
        } else if (crossTabCtl.hasOpenPictureInPicture()) {
          /* 跨Tab控制画中画里面的视频播放 */
          if (!newVal.originTab && (document.pictureInPictureElement || t.isLeavepictureinpictureAwhile())) {
            triggerFakeEvent(name, oldVal, newVal, remote)
          }
        }
      }
    })

    t._hasBindFakeEvent_ = true
  },

  /* 绑定相关事件 */
  bindEvent: function () {
    const t = this
    if (t._hasBindEvent_) return

    document.removeEventListener('keydown', t.keydownEvent)
    document.addEventListener('keydown', t.keydownEvent, true)

    /* 兼容iframe操作 */
    if (isInIframe() && !isInCrossOriginFrame()) {
      window.top.document.removeEventListener('keydown', t.keydownEvent)
      window.top.document.addEventListener('keydown', t.keydownEvent, true)
    }

    t._hasBindEvent_ = true
  },
  init: function (global) {
    var t = this

    if (TCC && TCC.doTask('disable') === true) {
      debug.info(`[TCC][disable][${location.host}] 已禁止在该网站运行视频检测逻辑，您可查看任务配置中心的相关配置了解详情`)
      return true
    }

    if (!global) {
      /* 检测是否存在H5播放器 */
      t.detecH5Player()
      return true
    }

    setFakeUA()

    /* 初始化任务配置中心 */
    TCC = h5PlayerTccInit(t)

    /* 绑定键盘事件 */
    t.bindEvent()
    t.bindFakeEvent()

    /* 响应来自跨域受限的视频检出事件 */
    monkeyMsg.on('videoDetected', async (name, oldVal, newVal, remote) => {
      if (newVal.originTab) {
        t.hasCrossOriginVideoDetected = true
      }

      debug.log('[hasCrossOriginVideoDetected]', t, name, oldVal, newVal, remote)
    })

    /* 当页面处于可视化状态时，初始化自定义播放逻辑 */
    document.addEventListener('visibilitychange', function () {
      h5Player.initAutoPlay()
    })
  }
}

async function h5PlayerInit () {
  try {
    /* 禁止对playbackRate等属性进行锁定 */
    hackDefineProperty()

    /* 禁止对shadowdom使用close模式 */
    hackAttachShadow()

    /* 对所有事件进行接管 */
    proxyHTMLMediaElementEvent()
    // hackEventListener()
  } catch (e) {
    console.error('h5player hack error', e)
  }

  menuRegister()

  try {
    /* 初始化全局所需的相关方法 */
    h5Player.init(true)

    /* 检测到有视频标签就进行初始化 */
    ready('video', function () {
      h5Player.init()
    })

    /* 兼容B站的bwp播放器 */
    ready('bwp-video', function () {
      h5Player.init()
    })

    /* 检测shadow dom 下面的video */
    document.addEventListener('addShadowRoot', function (e) {
      const shadowRoot = e.detail.shadowRoot
      ready('video', function (element) {
        h5Player.init()
      }, shadowRoot)

      /* 兼容B站的bwp播放器 */
      ready('bwp-video', function (element) {
        h5Player.init()
      }, shadowRoot)
    })

    /* 初始化跨Tab控制逻辑 */
    crossTabCtl.init()

    debug.log('h5Player init suc', window, globalConfig)

    if (isInCrossOriginFrame()) {
      debug.log('当前处于跨域受限的iframe中，h5Player部分功能可能无法正常开启', window.location.href)
    }
  } catch (e) {
    debug.error('h5Player init fail', e)
  }
}

export default h5PlayerInit
