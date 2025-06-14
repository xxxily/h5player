import './comment'
import originalMethods from './originalMethods'
import configManager from './configManager'
import { h5PlayerTccInit, mergeTaskConf } from './h5PlayerTccInit'
import { setFakeUA } from './userAgent'
import FullScreen from '../libs/FullScreen/index'
import videoCapturer from '../libs/videoCapturer/index'
import MouseObserver from '../libs/MouseObserver/index'
import i18n from './i18n'
import monkeyMsg from './monkeyMsg'
import crossTabCtl from './crossTabCtl'
import debug from './debug'
import hackDefineProperty from './hackDefineProperty'
import { menuRegister, addMenu, registerH5playerMenus } from './menuManager'
import { proxyHTMLMediaElementEvent } from './hackEventListener'
import mediaSource from './mediaSource'
import {
  ready,
  hackAttachShadow,
  mediaCore,
  isObj,
  quickSort,
  eachParentNode,
  isInIframe,
  isInCrossOriginFrame,
  isEditableTarget,
  throttle,
  isInViewPort,
  inlineStyleToObj,
  objToInlineStyle,
  clone
} from '../libs/utils/index'
import HotkeysRunner from '../libs/utils/hotkeysRunner'
import MediaElementAmplifier from '../libs/utils/MediaElementAmplifier'
import mediaDownload from './mediaDownload'
import windowSandbox from './h5playerUISandbox'
import version from './version'
import remoteHelper from './remoteHelper'
import { isCloudflareChallengePage } from './cfChallenge'

import {
  isRegisterKey,
  getPageWindow,
  numUp,
  numDown,
  isMediaElement,
  isVideoElement,
  isAudioElement
} from './helper'

import { registerMouseEvent } from './mouseEvent'

import h5playerUiWraper from './ui/h5playerUI.es'

/* 定义支持哪些媒体标签 */
// const supportMediaTags = ['video', 'bwp-video', 'audio']
const supportMediaTags = ['video', 'bwp-video']

let TCC = null
const h5Player = {
  version,
  mediaCore,
  mediaPlusApi: null,
  mediaSource,
  configManager,
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

  defaultTransform: {
    scale: 1,
    translate: {
      x: 0,
      y: 0
    },
    rotate: 0,
    rotateY: 0,
    rotateX: 0
  },

  /* 存储旧的Transform值 */
  historyTransform: {},

  playbackRate: configManager.get('media.playbackRate'),
  volume: configManager.get('media.volume'),
  lastPlaybackRate: configManager.get('media.lastPlaybackRate'),
  /* 快进快退步长 */
  skipStep: 5,

  /* 监听鼠标活动的观察对象 */
  mouseObserver: new MouseObserver(),

  disableHotkeysTemporarily () {
    this.__disableHotkeysTemporarily__ = true
  },
  enableHotkeys () {
    this.__disableHotkeysTemporarily__ = false
  },
  toggleHotkeys () {
    const confirm = window.confirm(this.__disableHotkeysTemporarily__ ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys'))
    if (confirm) {
      this.__disableHotkeysTemporarily__ = !this.__disableHotkeysTemporarily__
    }
  },

  debuggerNow () {
    if (debug.isDebugMode()) {
      const script = document.createElement('script')
      script.innerText = 'debugger'
      document.body.appendChild(script)
    }
  },

  /* 关闭当前视频实例的UI界面，以便消除UI界面对其他元素遮挡等相关影响 */
  disableCurrentInstanceGUI () {
    const t = this
    const player = t.player()
    if (player && t.UI && t.UI.removePopupWrapByElement) {
      player.__disableGUITemporarily__ = true
      t.UI.removePopupWrapByElement(player)
    }
  },

  /* 获取当前播放器的实例 */
  player: function () {
    const t = this
    let playerInstance = t.playerInstance

    if (!playerInstance) {
      const mediaList = t.getPlayerList()
      if (mediaList.length) {
        playerInstance = mediaList[mediaList.length - 1]
        t.playerInstance = playerInstance
        t.initPlayerInstance(mediaList.length === 1)
      }
    }

    if (playerInstance && !t.mediaPlusApi) {
      t.mediaPlusApi = mediaCore.mediaPlus(playerInstance)
    }

    return playerInstance
  },

  isAudioInstance () {
    return isAudioElement(this.player())
  },

  /* 每个网页可能存在的多个video播放器 */
  getPlayerList: function () {
    const list = mediaCore.mediaElementList || []

    function findPlayer (context) {
      supportMediaTags.forEach(tagName => {
        context.querySelectorAll(tagName).forEach(function (player) {
          if (player.tagName.toLowerCase() === 'bwp-video') {
            /* 将B站的BWP-VIDEO标识为HTMLVideoElement */
            player.HTMLVideoElement = true
          }

          if (isMediaElement(player) && !list.includes(player)) {
            list.push(player)
          }
        })
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

    t.mediaPlusApi = mediaCore.mediaPlus(player)

    t.initPlaybackRate()
    t.isFoucs()
    t.proxyPlayerInstance(player)

    t.unLockPlaybackRate()
    t.setPlaybackRate()
    t.lockPlaybackRate(1000)

    /* 增加通用全屏，网页全屏api */
    player._fullScreen_ = new FullScreen(player)
    player._fullPageScreen_ = new FullScreen(player, true)

    /* 注册热键运行器 */
    t.registerHotkeysRunner()

    if (!player._hasCanplayEvent_) {
      player.addEventListener('canplay', function (event) {
        t.initAutoPlay(player)
      })
      player._hasCanplayEvent_ = true
    }

    /* 播放的时候进行相关同步操作 */
    if (!player._hasPlayerInitEvent_) {
      let setPlaybackRateOnPlayingCount = 0
      player.addEventListener('playing', function (event) {
        t.unLockPlaybackRate()
        t.setPlaybackRate(null, true)
        t.lockPlaybackRate(1000)

        /* 同步播放音量 */
        if (configManager.get('enhance.blockSetVolume') === true && event.target.muted === false) {
          t.setVolume(configManager.getGlobalStorage('media.volume'), true)
        }

        /* 禁止默认的进度控制 */
        if (configManager.get('enhance.blockSetCurrentTime') === true) {
          t.lockCurrentTime()
        }

        /* 恢复播放进度 */
        t.setPlayProgress(player)

        if (setPlaybackRateOnPlayingCount === 0) {
          /* 同步之前设定的播放速度，音量等 */
          t.unLockPlaybackRate()
          t.setPlaybackRate()
          t.lockPlaybackRate(1000)

          /* 启动播放进度记录 */
          setTimeout(() => {
            t.playProgressRecorder(player)
          }, 2000)
        } else {
          t.unLockPlaybackRate()
          t.setPlaybackRate(null, true)
          t.lockPlaybackRate(1000)
        }
        setPlaybackRateOnPlayingCount += 1
      })

      player._hasPlayerInitEvent_ = true
    }

    /* 进行自定义初始化操作 */
    const taskConf = TCC.getTaskConfig()
    if (taskConf.init) {
      TCC.doTask('init', player)
    }

    const needInitEvent = !player.__registeredInitEvent__

    /* 注册鼠标响应事件 */
    needInitEvent && t.mouseObserver.on(player, 'click', function (event, offset, target) {
      // debug.log('捕捉到鼠标点击事件：', event, offset, target)
    })

    /* 画中画事件监听 */
    needInitEvent && player.addEventListener('enterpictureinpicture', () => {
      monkeyMsg.send('globalPictureInPictureInfo', {
        usePictureInPicture: true
      })
      debug.log('enterpictureinpicture', player)
    })
    needInitEvent && player.addEventListener('leavepictureinpicture', () => {
      t.leavepictureinpictureTime = Date.now()

      monkeyMsg.send('globalPictureInPictureInfo', {
        usePictureInPicture: false
      })
      debug.log('leavepictureinpicture', player)
    })

    // if (debug.isDebugMode()) {}

    /* 记录player使用过的src */
    function srcRecord (player) {
      const src = player.currentSrc || player.src
      if (!src) { return }

      player.srcList = player.srcList || [src]
      if (!player.srcList.includes(src)) {
        player.srcList.push(src)
      }
    }

    function updataBufferedTime (player) {
      /* 随时记录缓存数据到了哪个时间节点 */
      if (player.buffered.length > 0) {
        const bufferedTime = player.buffered.end(player.buffered.length - 1)
        player.bufferedTime = bufferedTime
      }

      if (t.autoGotoBufferedTime && player.bufferedTime && t.player() === player && player.bufferedTime < player.duration - 1 && player.currentTime < player.bufferedTime - 1) {
        t.setCurrentTime(player.bufferedTime)
      }
    }

    needInitEvent && player.addEventListener('loadeddata', function () {
      debug.log(`[player][loadeddata] ${player.src} video duration: ${player.duration} video dom:`, player)
      srcRecord(player)
    })
    needInitEvent && player.addEventListener('durationchange', function () {
      debug.log(`[player][durationchange] ${player.duration}`)
      srcRecord(player)
    })

    needInitEvent && player.addEventListener('loadstart', function () {
      debug.log('[player][loadstart]', player.currentSrc, player.src)
      srcRecord(player)
    })

    /* 注册UI界面 */
    t.UI && t.UI.popup && t.UI.popup(player, t)

    /* 在播放或暂停时，也尝试注册UI界面，这样即使popup被意外删除，也还是能正常再次创建回来 */
    needInitEvent && player.addEventListener('play', function () {
      t.UI && t.UI.popup && t.UI.popup(player, t)
    })
    needInitEvent && player.addEventListener('pause', function () {
      t.UI && t.UI.popup && t.UI.popup(player, t)
    })
    let lastRegisterUIPopupTime = Date.now()
    let tryRegisterUIPopupCount = 0
    needInitEvent && player.addEventListener('timeupdate', function () {
      // updataBufferedTime(player)

      if (Date.now() - lastRegisterUIPopupTime > 800 && tryRegisterUIPopupCount < 60) {
        lastRegisterUIPopupTime = Date.now()
        tryRegisterUIPopupCount += 1
        t.UI && t.UI.popup && t.UI.popup(player, t)
      }

      srcRecord(player)
      mediaSource.connectMediaSourceWithMediaElement(player)
    })

    let lastCleanMediaSourceDataTime = Date.now()
    needInitEvent && player.addEventListener('progress', () => {
      updataBufferedTime(player)
      mediaSource.connectMediaSourceWithMediaElement(player)

      if (Date.now() - lastCleanMediaSourceDataTime > 1000 * 10) {
        lastCleanMediaSourceDataTime = Date.now()
        mediaSource.cleanMediaSourceData()
      }
    })

    needInitEvent && player.addEventListener('durationchange', function () {
      lastRegisterUIPopupTime = Date.now()
      tryRegisterUIPopupCount = 0
      t.UI && t.UI.popup && t.UI.popup(player, t)
    })

    player.__registeredInitEvent__ = true
  },

  registerHotkeysRunner () {
    if (!this.hotkeysRunner) {
      this.hotkeysRunner = new HotkeysRunner(configManager.get('hotkeys'))

      if (isInIframe() && !isInCrossOriginFrame()) {
        /* 让顶层页面也可以监听组合键的触发 */
        this.hotkeysRunner.setCombinationKeysMonitor(window.top)
      }
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
            // debug.log(key + '被调用')

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
        // debug.log('_hangUp_', name, timeout)
        player._hangUpInfo_[name] = {
          timeout: Date.now() + timeout
        }
      }

      /* 取消挂起 */
      player._unHangUp_ = function (name) {
        if (player._hangUpInfo_ && player._hangUpInfo_[name]) {
          player._hangUpInfo_[name].timeout = Date.now() - 1
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
      if (configManager.getLocalStorage('media.autoPlay') === null) {
        configManager.setLocalStorage('media.autoPlay', true)
      }

      addMenu({
        title: () => configManager.getLocalStorage('media.autoPlay') ? i18n.t('disableInitAutoPlay') : i18n.t('enableInitAutoPlay'),
        fn: () => {
          const confirm = window.confirm(configManager.getLocalStorage('media.autoPlay') ? i18n.t('disableInitAutoPlay') : i18n.t('enableInitAutoPlay'))
          if (confirm) {
            const autoPlay = configManager.getLocalStorage('media.autoPlay')
            if (autoPlay === null) {
              alert(i18n.t('configFail'))
            } else {
              configManager.setLocalStorage('media.autoPlay', !autoPlay)
            }
          }
        }
      })
    }

    // 在轮询重试的时候，如果实例变了，或处于隐藏页面中则不进行自动播放操作
    if (!configManager.get('media.autoPlay') || (!p && t.hasInitAutoPlay) || !player || (p && p !== t.player()) || document.hidden) {
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

    if (!taskConf.autoPlay) {
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

  printPlayerInfo (p) {
    const t = this
    const player = p || t.player()

    const info = {
      curPlayer: player,
      srcList: player.srcList,
      h5player: t,
      h5playerUI: t.UI,
      mediaSource,
      window
    }

    if (t.UI && t.UI.findPopupWrapWithElement) {
      info.curlPopupWrap = t.UI.findPopupWrapWithElement(player)
      info.allPopupWrap = t.UI.getAllPopupWrapElement()
    }

    debug.info('[playerInfo]', info)
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

  playbackRateInfo: {
    lockTimeout: Date.now() - 1,
    time: Date.now(),
    /* 未初始化播放实列前，不知道倍速是多少，所以设置为-1 */
    value: -1
  },

  getPlaybackRate () {
    let playbackRate = configManager.get('media.playbackRate') || this.playbackRate
    if (isInIframe()) {
      const globalPlaybackRate = configManager.getGlobalStorage('media.playbackRate')
      if (globalPlaybackRate) {
        playbackRate = globalPlaybackRate
      }
    }
    return Number(Number(playbackRate).toFixed(1))
  },

  /* 锁定playbackRate，禁止调速 */
  lockPlaybackRate: function (timeout = 200) {
    if (this.mediaPlusApi) {
      if (configManager.get('enhance.blockSetPlaybackRate') === true) {
        // 如果配置了要锁死外部对playbackRate的操作，则直接给一个超大的值
        timeout = 1000 * 60 * 60 * 24 * 365
      }

      this.mediaPlusApi.lockPlaybackRate(timeout)
      return true
    }

    this.playbackRateInfo.lockTimeout = Date.now() + timeout
  },

  unLockPlaybackRate: function () {
    if (this.mediaPlusApi) {
      this.mediaPlusApi.unLockPlaybackRate()
      return true
    }

    this.playbackRateInfo.lockTimeout = Date.now() - 1
  },

  isLockPlaybackRate: function () {
    if (this.mediaPlusApi) {
      return this.mediaPlusApi.isLockPlaybackRate()
    }

    return Date.now() - this.playbackRateInfo.lockTimeout < 0
  },

  /* 解决高低倍速频繁切换后，音画不同步的问题 */
  fixPlaybackRate: function (oldPlaybackRate) {
    const t = this
    const curPlaybackRate = t.getPlaybackRate()

    if (Math.abs(curPlaybackRate - oldPlaybackRate) > 1) {
      t.setCurrentTimeUp(0.1, true)
    }
  },

  /* 设置播放速度 */
  setPlaybackRate: function (num, notips, duplicate, skipLock) {
    const t = this
    const player = t.player()

    if (!skipLock && t.isLockPlaybackRate()) {
      debug.info('调速能力已被锁定')
      return false
    }

    if (TCC.doTask('playbackRate')) {
      // debug.log('[TCC][playbackRate]', 'suc')
      return
    }

    if (!player) return

    const oldPlaybackRate = t.getPlaybackRate()

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
      configManager.setGlobalStorage('media.playbackRate', curPlaybackRate)
    } else {
      configManager.set('media.playbackRate', curPlaybackRate)
    }

    if (t.mediaPlusApi) {
      t.mediaPlusApi.setPlaybackRate(curPlaybackRate)

      if (!(!num && curPlaybackRate === 1) && !notips) {
        t.tips(i18n.t('tipsMsg.playspeed') + player.playbackRate)
      }

      /* 将播放倍速同步到全部媒体元素 */
      const mediaList = t.getPlayerList()
      mediaList.forEach(media => {
        if (media !== player) {
          const mediaPlusApi = mediaCore.mediaPlus(media)
          mediaPlusApi && mediaPlusApi.setPlaybackRate(curPlaybackRate)
        }
      })

      t.fixPlaybackRate(oldPlaybackRate)
      return true
    }

    delete player.playbackRate
    player.playbackRate = curPlaybackRate

    t.playbackRateInfo.time = Date.now()
    t.playbackRateInfo.value = curPlaybackRate
    player._setPlaybackRate_ = {
      time: Date.now(),
      value: curPlaybackRate
    }

    try {
      const playbackRateDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate')
      originalMethods.Object.defineProperty.call(Object, player, 'playbackRate', {
        configurable: true,
        get: function () {
          /**
           * 在油管，如果返回的是playbackRateDescriptor.get.apply(player, arguments)，调速会出现波动和异常
           * 暂时不知是什么原因，所以还是先返回curPlaybackRate
           */
          return curPlaybackRate || playbackRateDescriptor.get.apply(player, arguments)
        },
        set: function (val) {
          if (typeof val !== 'number') {
            return false
          }

          /* 有些网站是通过定时器不断刷playbackRate的，所以通过计时器减少不必要的信息输出 */
          !Number.isInteger(player._blockSetPlaybackRateTips_) && (player._blockSetPlaybackRateTips_ = 0)

          if (TCC.doTask('blockSetPlaybackRate')) {
            player._blockSetPlaybackRateTips_++
            player._blockSetPlaybackRateTips_ < 3 && debug.info('调速能力已被自定义的调速任务进行处理')
            return false
          }

          if (configManager.get('enhance.blockSetPlaybackRate') === true) {
            player._blockSetPlaybackRateTips_++
            player._blockSetPlaybackRateTips_ < 3 && debug.info('调速能力已被blockSetPlaybackRate锁定')
            return false
          } else {
            t.setPlaybackRate(val)
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

    /**
     * 重复触发最后一次倍速的设定
     * 解决YouTube快速调速时并不生效，要停顿下来再调节一下才能生效的问题
     */
    if (!duplicate && configManager.get('enhance.blockSetPlaybackRate') === true) {
      clearTimeout(t._setPlaybackRateDuplicate_)
      clearTimeout(t._setPlaybackRateDuplicate2_)
      const duplicatePlaybackRate = () => {
        t.unLockPlaybackRate()
        t.setPlaybackRate(curPlaybackRate, true, true)
        t.lockPlaybackRate(1000)
      }
      t._setPlaybackRateDuplicate_ = setTimeout(duplicatePlaybackRate, 600)
      /* 600ms时重新触发无效的话，再来个1200ms后触发，如果是1200ms才生效，则调速生效的延迟已经非常明显了 */
      t._setPlaybackRateDuplicate2_ = setTimeout(duplicatePlaybackRate, 1200)
    }

    t.fixPlaybackRate(oldPlaybackRate)
  },

  /**
   * 加强版的倍速调节，当短时间内设置同一个值时，会认为需更快的跳速能力
   * 则会对调速的数值进行叠加放大，从而达到快速跳跃地进行倍速调节的目的
   * 可用于视频广告的高速快进，片头片尾的速看等场景
   * @param {*} num
   */
  setPlaybackRatePlus: function (num) {
    num = Number(num)
    if (!num || Number.isNaN(num)) {
      return false
    }

    const t = this
    t.playbackRatePlusInfo = t.playbackRatePlusInfo || {}
    t.playbackRatePlusInfo[num] = t.playbackRatePlusInfo[num] || {
      time: Date.now() - 1000,
      value: num
    }

    if (Date.now() - t.playbackRatePlusInfo[num].time < 300) {
      t.playbackRatePlusInfo[num].value = t.playbackRatePlusInfo[num].value + num
    } else {
      t.playbackRatePlusInfo[num].value = num
    }

    t.playbackRatePlusInfo[num].time = Date.now()

    t.unLockPlaybackRate()
    t.setPlaybackRate(t.playbackRatePlusInfo[num].value)
    t.lockPlaybackRate(1000)
  },

  /* 恢复播放速度，还原到1倍速度、或恢复到上次的倍速 */
  resetPlaybackRate: function (player) {
    const t = this
    player = player || t.player()

    t.unLockPlaybackRate()

    const oldPlaybackRate = Number(player.playbackRate)
    const playbackRate = oldPlaybackRate === 1 ? t.lastPlaybackRate : 1
    if (oldPlaybackRate !== 1) {
      t.lastPlaybackRate = oldPlaybackRate
      configManager.setLocalStorage('media.lastPlaybackRate', oldPlaybackRate)
    }

    t.setPlaybackRate(playbackRate)

    /* 防止外部调速逻辑的干扰，所以锁定一段时间 */
    t.lockPlaybackRate(1000)
  },

  /* 提升播放速率 */
  setPlaybackRateUp (num) {
    num = numUp(num) || 0.1
    if (this.player()) {
      this.unLockPlaybackRate()
      this.setPlaybackRate(this.player().playbackRate + num)

      /* 防止外部调速逻辑的干扰，所以锁定一段时间 */
      this.lockPlaybackRate(1000)
    }
  },

  /* 降低播放速率 */
  setPlaybackRateDown (num) {
    num = numDown(num) || -0.1
    if (this.player()) {
      this.unLockPlaybackRate()
      this.setPlaybackRate(this.player().playbackRate + num)

      /* 防止外部调速逻辑的干扰，所以锁定一段时间 */
      this.lockPlaybackRate(1000)
    }
  },

  /**
   * 锁定播放进度的控制逻辑
   * 跟锁定音量和倍速不一样，播放进度是跟视频实例有密切相关的，所以其锁定信息必须依附于播放实例
   */
  lockCurrentTime: function (timeout = 200) {
    if (this.mediaPlusApi) {
      if (configManager.get('enhance.blockSetCurrentTime') === true) {
        // 如果配置了要锁死外部对currentTime的操作，则直接给一个超大的值
        timeout = 1000 * 60 * 60 * 24 * 365
      }

      this.mediaPlusApi.lockCurrentTime(timeout)
      return true
    }

    const player = this.player()
    if (player) {
      player.currentTimeInfo = player.currentTimeInfo || {}
      player.currentTimeInfo.lockTimeout = Date.now() + timeout
    }
  },

  unLockCurrentTime: function () {
    if (this.mediaPlusApi) {
      this.mediaPlusApi.unLockCurrentTime()
      return true
    }

    const player = this.player()
    if (player) {
      player.currentTimeInfo = player.currentTimeInfo || {}
      player.currentTimeInfo.lockTimeout = Date.now() - 1
    }
  },

  isLockCurrentTime: function () {
    if (this.mediaPlusApi) {
      return this.mediaPlusApi.isLockCurrentTime()
    }

    const player = this.player()
    if (player && player.currentTimeInfo && player.currentTimeInfo.lockTimeout) {
      return Date.now() - player.currentTimeInfo.lockTimeout < 0
    } else {
      return false
    }
  },

  /* 设置播放进度 */
  setCurrentTime: function (num) {
    if (!num && num !== 0) return
    num = Number(num)
    const _num = Math.abs(Number(num.toFixed(1)))

    const t = this
    const player = t.player()

    if (t.isLockCurrentTime()) {
      return false
    }

    if (TCC.doTask('currentTime')) {
      // debug.log('[TCC][currentTime]', 'suc')
      return
    }

    if (this.mediaPlusApi) {
      this.mediaPlusApi.setCurrentTime(_num)
      return true
    }

    delete player.currentTime
    player.currentTime = _num
    player.currentTimeInfo = player.currentTimeInfo || {}
    player.currentTimeInfo.time = Date.now()
    player.currentTimeInfo.value = _num

    try {
      const currentTimeDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime')
      originalMethods.Object.defineProperty.call(Object, player, 'currentTime', {
        configurable: true,
        enumerable: true,
        get: function () {
          return currentTimeDescriptor.get.apply(player, arguments)
        },
        set: function (val) {
          if (typeof val !== 'number' || TCC.doTask('blockSetCurrentTime') || configManager.get('enhance.blockSetCurrentTime') === true) {
            return false
          }

          if (t.isLockCurrentTime()) {
            return false
          }

          player.currentTimeInfo.time = Date.now()
          player.currentTimeInfo.value = val

          return currentTimeDescriptor.set.apply(player, arguments)
        }
      })
    } catch (e) {
      debug.error('解锁currentTime失败', e)
    }
  },

  setCurrentTimeUp (num, hideTips) {
    num = Number(numUp(num) || this.skipStep)

    if (TCC.doTask('addCurrentTime')) {
      // debug.log('[TCC][addCurrentTime]', 'suc')
    } else {
      if (this.player()) {
        this.unLockCurrentTime()
        this.setCurrentTime(this.player().currentTime + num)

        /* 防止外部进度控制逻辑的干扰，所以锁定一段时间 */
        this.lockCurrentTime(500)

        if (!hideTips) {
          this.tips(i18n.t('tipsMsg.forward') + num + i18n.t('tipsMsg.seconds'))
        }
      }
    }
  },

  setCurrentTimeDown (num) {
    num = Number(numDown(num) || -this.skipStep)

    if (TCC.doTask('subtractCurrentTime')) {
      // debug.log('[TCC][subtractCurrentTime]', 'suc')
    } else {
      if (this.player()) {
        let currentTime = this.player().currentTime + num
        if (currentTime < 1) {
          currentTime = 0
        }

        this.unLockCurrentTime()
        this.setCurrentTime(currentTime)

        /* 防止外部进度控制逻辑的干扰，所以锁定一段时间 */
        this.lockCurrentTime(500)

        this.tips(i18n.t('tipsMsg.backward') + Math.abs(num) + i18n.t('tipsMsg.seconds'))
      }
    }
  },

  volumeInfo: {
    lockTimeout: Date.now() - 1,
    time: Date.now(),
    /* 未初始化播放实列前，不知道音量是多少，所以设置为-1 */
    value: -1
  },

  getVolume: function () {
    let volume = configManager.get('media.volume')
    if (isInIframe() || configManager.get('enhance.blockSetVolume') === true) {
      const globalVolume = configManager.getGlobalStorage('media.volume')
      if (globalVolume !== null) {
        volume = globalVolume
      }
    }
    return Number(Number(volume).toFixed(2))
  },

  /* 锁定音量，禁止调音 */
  lockVolume: function (timeout = 200) {
    if (this.mediaPlusApi) {
      if (configManager.get('enhance.blockSetVolume') === true) {
        // 如果配置了要锁死外部对voluem的操作，则直接给一个超大的值
        timeout = 1000 * 60 * 60 * 24 * 365
      }

      this.mediaPlusApi.lockVolume(timeout)
      return true
    }

    this.volumeInfo.lockTimeout = Date.now() + timeout
  },

  unLockVolume: function () {
    if (this.mediaPlusApi) {
      this.mediaPlusApi.unLockVolume()
      return true
    }

    this.volumeInfo.lockTimeout = Date.now() - 1
  },

  isLockVolume: function () {
    if (this.mediaPlusApi) {
      return this.mediaPlusApi.isLockVolume()
    }

    return Date.now() - this.volumeInfo.lockTimeout < 0
  },

  /* 设置声音大小 */
  setVolume: function (num, notips, outerCall) {
    const t = this
    const player = t.player()

    if (t.isLockVolume()) {
      return false
    }

    if (!num && num !== 0) {
      num = t.getVolume()
    }

    num = Number(num).toFixed(2)
    if (num < 0) {
      num = 0
    }

    if (num > 1 && configManager.get('enhance.allowAcousticGain')) {
      num = Math.ceil(num)

      try {
        player._amp_ = player._amp_ || new MediaElementAmplifier(player)
      } catch (e) {
        num = 1
        debug.error('媒体声音响度增益逻辑异常', e)
      }

      /* 限定增益的最大值 */
      if (num > 6) {
        num = 6
      }

      if (!player._amp_ || !player._amp_.setLoudness) {
        num = 1
      }
    } else if (num > 1) {
      num = 1
    }

    /* 记录播放音量信息 */
    t.volume = num

    /* 使用音量增益逻辑，增益音量不进行本地存储记录 */
    if (num > 1 && player._amp_ && player._amp_.setLoudness) {
      player._amp_.setLoudness(num)

      if (!outerCall) { player.muted = false }

      !notips && t.tips(i18n.t('tipsMsg.volume') + parseInt(num * 100) + '%')
      return true
    }

    if (isInIframe() || configManager.get('enhance.blockSetVolume') === true) {
      configManager.setGlobalStorage('media.volume', num)
    } else {
      configManager.setLocalStorage('media.volume', num)
    }

    if (t.mediaPlusApi) {
      t.mediaPlusApi.setVolume(num)

      /* 将播放音量同步到全部媒体元素 */
      const mediaList = t.getPlayerList()
      mediaList.forEach(media => {
        if (media !== player) {
          const mediaPlusApi = mediaCore.mediaPlus(media)
          mediaPlusApi && mediaPlusApi.setVolume(num)
        }
      })
    } else {
      delete player.volume
      player.volume = num
      t.volumeInfo.time = Date.now()
      t.volumeInfo.value = num

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

            if (TCC.doTask('blockSetVolume') || configManager.get('enhance.blockSetVolume') === true) {
              return false
            } else {
              t.setVolume(val, false, true)
            }
          }
        })
      } catch (e) {
        debug.error('解锁volume失败', e)
      }
    }

    /* 调节音量的时候顺便把静音模式关闭 */
    if (!outerCall) { player.muted = false }

    !notips && t.tips(i18n.t('tipsMsg.volume') + parseInt(player.volume * 100) + '%')
  },

  setVolumeUp (num) {
    num = numUp(num) || 0.2
    const player = this.player()
    if (player) {
      this.unLockVolume()

      if (this.volume > 1 && player._amp_) {
        this.setVolume(this.volume + num)
      } else {
        this.setVolume(player.volume + num)
      }

      /* 防止外部调音逻辑的干扰，所以锁定一段时间 */
      this.lockVolume(500)
    }
  },

  setVolumeDown (num) {
    num = numDown(num) || -0.2
    const player = this.player()
    if (player) {
      this.unLockVolume()

      if (this.volume > 1 && player._amp_) {
        this.setVolume(Math.floor(this.volume + num))
      } else {
        this.setVolume(player.volume + num)
      }

      /* 防止外部调音逻辑的干扰，所以锁定一段时间 */
      this.lockVolume(500)
    }
  },

  /* 采集Transform值的历史变更记录，以便后续进行还原 */
  collectTransformHistoryInfo () {
    const t = this
    Object.keys(t.defaultTransform).forEach(key => {
      if (key === 'translate') {
        const translate = t.defaultTransform.translate
        t.historyTransform.translate = t.historyTransform.translate || {}
        Object.keys(translate).forEach(subKey => {
          if (Number(t.translate[subKey]) !== t.defaultTransform.translate[subKey]) {
            t.historyTransform.translate[subKey] = t.translate[subKey]
          }
        })
      } else {
        if (Number(t[key]) !== t.defaultTransform[key]) {
          t.historyTransform[key] = t[key]
        }
      }
    })
  },

  /* 判断h5Player下的Transform值是否跟默认的Transform值一致 */
  isSameAsDefaultTransform () {
    let result = true
    const t = this
    Object.keys(t.defaultTransform).forEach(key => {
      if (isObj(t.defaultTransform[key])) {
        Object.keys(t.defaultTransform[key]).forEach(subKey => {
          if (Number(t[key][subKey]) !== t.defaultTransform[key][subKey]) {
            result = false
          }
        })
      } else {
        if (Number(t[key]) !== t.defaultTransform[key]) {
          result = false
        }
      }
    })
    return result
  },

  /* 设置视频画面的缩放与位移 */
  setTransform (notTips) {
    const t = this
    const player = t.player()
    const scale = t.scale = Number(t.scale).toFixed(2)
    const translate = t.translate

    const mirror = t.rotateX === 180 ? `rotateX(${t.rotateX}deg)` : (t.rotateY === 180 ? `rotateY(${t.rotateY}deg)` : '')
    player.style.transform = `scale(${scale}) translate(${translate.x}px, ${translate.y}px) rotate(${t.rotate}deg) ${mirror}`

    let tipsMsg = i18n.t('tipsMsg.videozoom') + `${(scale * 100).toFixed(0)}%`
    if (translate.x) {
      tipsMsg += ` ${i18n.t('tipsMsg.horizontal')}${t.translate.x}px`
    }
    if (translate.y) {
      tipsMsg += ` ${i18n.t('tipsMsg.vertical')}${t.translate.y}px`
    }

    if (notTips === true) {
      /* transform状态守护调用，不进行提示 */
    } else {
      t.collectTransformHistoryInfo()
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
    if (Number.isNaN(this.scale) || Number.isNaN(num)) {
      this.scale = 1
    } else {
      this.scale = num
    }

    this.setTransform()
  },

  /* 视频放大 +0.1 */
  setScaleUp (num) {
    num = numUp(num) || 0.05
    this.setScale(Number(this.scale) + num)
  },

  /* 视频缩小 -0.1 */
  setScaleDown (num) {
    num = numDown(num) || -0.05
    this.setScale(Number(this.scale) + num)
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
  setTranslateRight (num) {
    num = numUp(num) || 10
    this.setTranslate(this.translate.x + num)
  },

  /* 视频画面向左平移 */
  setTranslateLeft (num) {
    num = numDown(num) || -10
    this.setTranslate(this.translate.x + num)
  },

  /* 视频画面向上平移 */
  setTranslateUp (num) {
    num = numUp(num) || 10
    this.setTranslate(null, this.translate.y - num)
  },

  /* 视频画面向下平移 */
  setTranslateDown (num) {
    num = numDown(num) || -10
    this.setTranslate(null, this.translate.y - num)
  },

  resetTransform (notTips) {
    const t = this

    if (t.isSameAsDefaultTransform() && Object.keys(t.historyTransform).length) {
      /* 还原成历史记录中的Transform值 */
      Object.keys(t.historyTransform).forEach(key => {
        if (isObj(t.historyTransform[key])) {
          Object.keys(t.historyTransform[key]).forEach(subKey => {
            t[key][subKey] = t.historyTransform[key][subKey]
          })
        } else {
          t[key] = t.historyTransform[key]
        }
      })
    } else {
      /* 还原成默认的Transform值 */
      const defaultTransform = clone(t.defaultTransform)
      Object.keys(defaultTransform).forEach(key => {
        t[key] = defaultTransform[key]
      })
    }

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

  autoGotoBufferedTime: false,
  toggleAutoGotoBufferedTime () {
    const t = this
    t.autoGotoBufferedTime = !t.autoGotoBufferedTime
    t.tips(t.autoGotoBufferedTime ? i18n.t('autoGotoBufferedTime') : i18n.t('disableAutoGotoBufferedTime'))
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
        if (t.mediaPlusApi) {
          t.mediaPlusApi.lockPause(400)
          t.mediaPlusApi.applyPlay()
        } else {
          /* 挂起其它逻辑的暂停操作，确保播放状态生效 */
          if (player._hangUp_ instanceof Function) {
            player._hangUp_('pause', 400)
            player._unHangUp_('play')
          }

          player.play()
        }

        t.tips(i18n.t('tipsMsg.play'))
      }

      TCC.doTask('afterPlay')
    } else {
      if (TCC.doTask('pause')) {
        // debug.log('[TCC][pause]', 'suc')
        // 自定义暂停调用成功
      } else {
        if (t.mediaPlusApi) {
          t.mediaPlusApi.lockPlay(400)
          t.mediaPlusApi.applyPause()
        } else {
          /* 挂起其它逻辑的播放操作，确保暂停状态生效 */
          if (player._hangUp_ instanceof Function) {
            player._hangUp_('play', 400)
            player._unHangUp_('pause')
          }

          player.pause()
        }

        t.tips(i18n.t('tipsMsg.pause'))
      }

      TCC.doTask('afterPause')
    }
  },

  isAllowRestorePlayProgress: function () {
    const allowRestoreVal = configManager.get(`media.allowRestorePlayProgress.${window.location.host}`)
    return allowRestoreVal === null || allowRestoreVal
  },
  /* 切换自动恢复播放进度的状态 */
  switchRestorePlayProgressStatus: function () {
    const t = h5Player
    let isAllowRestorePlayProgress = t.isAllowRestorePlayProgress()

    if (isInCrossOriginFrame()) {
      isAllowRestorePlayProgress = false
    } else {
      /* 进行值反转 */
      isAllowRestorePlayProgress = !isAllowRestorePlayProgress
    }

    configManager.set(`media.allowRestorePlayProgress.${window.location.host}`, isAllowRestorePlayProgress)

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

    const isAudio = t.isAudioInstance()
    const parentNode = isAudio ? document.body : t.getTipsContainer()

    if (parentNode === player) {
      debug.info('获取tips的包裹容器异常：', player, str)
      return false
    }

    let backupStyle = ''
    if (!isAudio) {
      // 修复部分提示按钮位置异常问题
      const defStyle = parentNode.getAttribute('style') || ''

      backupStyle = parentNode.getAttribute('style-backup') || ''
      if (!backupStyle) {
        let backupSty = defStyle || 'style-backup: none'
        const backupStyObj = inlineStyleToObj(backupSty)

        /**
         * 修复因为缓存时机获取到错误样式的问题
         * 例如在：https://www.xuetangx.com/
         */
        if (backupStyObj.opacity === '0') {
          backupStyObj.opacity = '1'
        }
        if (backupStyObj.visibility === 'hidden') {
          backupStyObj.visibility = 'visible'
        }

        backupSty = objToInlineStyle(backupStyObj)

        parentNode.setAttribute('style-backup', backupSty)
        backupStyle = defStyle
      } else {
        /* 如果defStyle被外部修改了，则需要更新备份样式 */
        if (defStyle && !defStyle.includes('style-backup')) {
          backupStyle = defStyle
        }
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
    }

    const tipsSelector = '.' + t.tipsClassName

    /* 当出现多个tips元素时，将这些tips元素全部移除 */
    const tipsList = document.querySelectorAll(tipsSelector)
    if (tipsList.length > 1) {
      tipsList.forEach(tipsItem => {
        tipsItem.remove()
      })
    }

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

    for (let i = 0; i < 3; i++) {
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
    const isAudio = t.isAudioInstance()
    const parentNode = isAudio ? document.body : t.getTipsContainer()
    if (parentNode.querySelector('.' + t.tipsClassName)) return

    // top: 50%;
    // left: 50%;
    // transform: translate(-50%,-50%);
    let tipsStyle = `
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

    if (isAudio) {
      tipsStyle = `
        position: fixed;
        z-index: 999999;
        font-size: ${t.fontSize || 16}px;
        padding: 5px 10px;
        background: rgba(0,0,0,0.4);
        color:white;
        bottom: 0;
        right: 0;
        transition: all 500ms ease;
        opacity: 0;
        border-top-left-radius: 5px;
        display: none;
        -webkit-font-smoothing: subpixel-antialiased;
        font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;
        -webkit-user-select: none;
      `
    }

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
      let view = 'brightness({0}) contrast({1}) saturate({2}) hue-rotate({3}deg) blur({4}px)'
      for (let i = 0; i < 5; i++) {
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

  mediaDownload () {
    if (configManager.get('enhance.allowExperimentFeatures')) {
      debug.warn('[experimentFeatures][mediaDownload]')
      mediaDownload(this.player())
    } else {
      const result = window.confirm(i18n.t('useMediaDownloadTips'))
      if (result) {
        configManager.setGlobalStorage('enhance.allowExperimentFeatures', !configManager.get('enhance.allowExperimentFeatures'))
        window.location.reload()
      }
    }
  },

  capture () {
    const player = this.player()
    videoCapturer.capture(player, true)

    /* 暂停画面 */
    if (!player.paused && !document.pictureInPictureElement && document.visibilityState !== 'visible') {
      this.freezeFrame()
    }
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
        t.capture()
      }

      if (key === 'r') {
        t.switchRestorePlayProgressStatus()
      }

      if (key === 'm') {
        /* 垂直镜像翻转 */
        t.setMirror(true)
      }

      if (key === 'd') {
        t.mediaDownload()
      }

      // 视频画面缩放相关事件
      const allowKeys = ['x', 'c', 'z', 'arrowright', 'arrowleft', 'arrowup', 'arrowdown']
      if (!allowKeys.includes(key)) return

      t.scale = Number(t.scale)
      switch (key) {
        // shift+X：视频缩小 -0.1
        case 'x':
          t.setScaleDown()
          break
        // shift+C：视频放大 +0.1
        case 'c':
          t.setScaleUp()
          break
        // shift+Z：视频恢复正常大小
        case 'z':
          t.resetTransform()
          break
        case 'arrowright':
          t.setTranslateRight()
          break
        case 'arrowleft':
          t.setTranslateLeft()
          break
        case 'arrowup':
          t.setTranslateUp()
          break
        case 'arrowdown':
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
      t.setVolumeUp(0.05)
    }
    // 方向键下↓：音量降低 10%
    if (keyCode === 40) {
      t.setVolumeDown(-0.05)
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
      t.setPlaybackRatePlus(event.key)
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
    const target = event.composedPath ? event.composedPath()[0] || event.target : event.target
    if (t.__disableHotkeysTemporarily__ || isEditableTarget(target)) return

    /* 广播按键消息，进行跨域控制 */
    monkeyMsg.send('globalKeydownEvent', event, 0)

    if (!player || !document.contains(player)) {
      if (t.hasCrossOriginVideoDetected) {
        if (!configManager.get('enhance.allowCrossOriginControl')) {
          return false
        }

        /**
         * 利用热键运行器的匹配能力来决定要不要禁止事件冒泡和阻止默认事件
         * 解决处于跨TAB、跨域控制时造成其它默认快捷键响应异常的问题
         */
        if (t.hotkeysRunner && t.hotkeysRunner.run) {
          t.hotkeysRunner.run({
            event,
            stopPropagation: true,
            preventDefault: true
          })
        } else {
          t.registerHotkeysRunner()
          event.stopPropagation()
          event.preventDefault()
        }

        // debug.log('当前页面检出了跨域受限的视频，仍需阻止默认事件和事件冒泡')
      }

      // debug.log('无可用的媒体元素，不执行相关操作')
      return false
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

    /* 热键运行器匹配到相关执行任务便不在执行后续的palyerTrigger */
    if (t.hotkeysRunner && t.hotkeysRunner.run) {
      const matchResult = t.hotkeysRunner.run({
        event,
        target: t,
        stopPropagation: true,
        preventDefault: true,
        conditionHandler (condition) {
          // TODO 完善条件限定回调逻辑
          if (condition) {
            return true
          }
        }
      })

      if (matchResult) {
        debug.info('[hotkeysRunner][matchResult]', matchResult)
        return true
      }
    } else {
      /* 未用到的按键不进行任何事件监听 */
      if (!isRegisterKey(event)) { return false }

      /* 响应播放器相关操作 */
      t.palyerTrigger(player, event)
    }
  },

  /**
   * 获取播放进度
   * @param player -可选 对应的h5 播放器对象， 如果不传，则获取到的是整个播放进度表，传则获取当前播放器的播放进度
   */
  getPlayProgress: function (player) {
    const progressMap = configManager.get('media.progress') || {}

    if (!player) {
      return progressMap
    } else {
      const keyName = window.location.href + player.duration
      if (progressMap[keyName]) {
        /* 对于直播的视频流，会出现记录的duration和当前视频duration不一致的情况，这时候通过返回currentTime来忽略恢复播放进度 */
        if (Number.isNaN(Number(player.duration)) || Number(progressMap[keyName].duration) !== Number(player.duration)) {
          return player.currentTime
        } else {
          return progressMap[keyName].progress
        }
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
        /* 时长小于两分钟的视频不记录播放进度 */
        const isToShort = !player.duration || Number.isNaN(Number(player.duration)) || player.duration < 120
        const isLeave = document.visibilityState !== 'visible' && player.paused

        if (!t.isAllowRestorePlayProgress() || isToShort || isLeave) {
          recorder(player)
          return true
        }

        const progressMap = t.getPlayProgress() || {}
        const list = Object.keys(progressMap)
        const keyName = window.location.href + player.duration

        /**
         * 对首次记录到progressMap的值进行标记
         * 用于防止手动切换播放进度时，执行到错误的恢复逻辑
         */
        if (!progressMap[keyName]) {
          t._firstProgressRecord_ = keyName
          t._hasRestorePlayProgress_ = keyName
        }

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
          duration: player.duration,
          t: new Date().getTime()
        }

        /* 存储播放进度表 */
        configManager.setLocalStorage('media.progress', progressMap)

        /* 循环侦听 */
        recorder(player)
      }, 1000 * 2)
    }
    recorder(player)
  },

  /* 设置播放进度 */
  setPlayProgress: function (player) {
    const t = h5Player
    if (!player || !player.duration || Number.isNaN(player.duration)) return

    const curTime = Number(t.getPlayProgress(player))

    /* 要恢复进度的时间过小或大于player.duration都不符合规范，不进行进度恢复操作 */
    if (!curTime || Number.isNaN(curTime) || curTime < 10 || curTime >= player.duration) return

    /* 忽略恢复进度时间与当前播放进度时间相差不大的情况 */
    if (Math.abs(curTime - player.currentTime) < 2) {
      return false
    }

    const progressKey = window.location.href + player.duration
    t._hasRestorePlayProgress_ = t._hasRestorePlayProgress_ || ''

    if (t._hasRestorePlayProgress_ === progressKey || t._firstProgressRecord_ === progressKey) {
      if (t._hasRestorePlayProgress_ === progressKey) {
        t._firstProgressRecord_ = ''
      }
      return false
    }

    if (t.isAllowRestorePlayProgress()) {
      // 比curTime少1.5s可以让用户知道是前面的画面，从而有个衔接上了的感觉
      player.currentTime = curTime - 1.5
      t._hasRestorePlayProgress_ = progressKey
      t.tips(i18n.t('tipsMsg.playbackrestored'))
    } else {
      t.tips(i18n.t('tipsMsg.playbackrestoreoff'))
    }
  },

  setPlayerInstance (el) {
    if (!el && !el.getBoundingClientRect) {
      return false
    }

    const t = h5Player

    if (t.player() === el) {
      return false
    }

    if (!t.playerInstance && isMediaElement(el)) {
      t.playerInstance = el
      t.initPlayerInstance(false)
      return true
    }

    if (isVideoElement(el)) {
      const elParentNode = t.getTipsContainer(el)
      const elInfo = el.getBoundingClientRect()
      const parentElInfo = elParentNode && elParentNode.getBoundingClientRect()
      if (elInfo && elInfo.width > 200 && parentElInfo && parentElInfo.width > 200) {
        t.playerInstance = el
        t.initPlayerInstance(false)
      }
    } else if (isAudioElement(el)) {
      if (isAudioElement(t.playerInstance) || (isVideoElement(t.playerInstance) && !t.playerInstance.isConnected)) {
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
        const toggleResult = t.setPlayerInstance(entrie.target)
        toggleResult && debug.log('[intersectionObserver] 切换视频实例', entrie)
      }
    })
  }, {
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
  }),

  /**
   * 检测h5播放器是否存在
   * @param callback
   */
  detecH5Player: function () {
    const t = this
    const playerList = t.getPlayerList()

    if (playerList.length) {
      // debug.log('检测到HTML5视频！', location.href, h5Player, playerList)

      /* 单video实例标签的情况 */
      if (playerList.length === 1) {
        t.playerInstance = playerList[0]
        t.initPlayerInstance(true)
      }

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
            const media = event.target

            /* 对于超短的音视频可能是某些操作反馈的特效，可忽略对其进行播放实例切换 */
            if (media.duration && media.duration < 8) {
              return false
            }

            t.setPlayerInstance(media)
          })
          player._hasPlayingRedirectEvent_ = true
        }

        /* 当被观察到出现在浏览器视口里时，切换视频实例 */
        if (!player._hasIntersectionObserver_) {
          t.intersectionObserver.observe(player)
          player._hasIntersectionObserver_ = true
        }
      })

      if (isInCrossOriginFrame()) {
        /* 广播检测到H5Player的消息 */
        monkeyMsg.send('videoDetected', {
          src: t.playerInstance.src
        })
      }

      registerH5playerMenus(h5Player)
    }
  },

  /* 响应来自按键消息的广播 */
  bindFakeEvent () {
    const t = this
    if (t._hasBindFakeEvent_) return

    /* 触发来自消息广播的模拟事件，实现跨域、跨Tab控制视频播放 */
    let triggerFakeEvent = function (name, oldVal, newVal, remote) {
      const player = t.player()
      if (player && !t.__disableHotkeysTemporarily__) {
        const fakeEvent = newVal.data
        fakeEvent.stopPropagation = () => { }
        fakeEvent.preventDefault = () => { }
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

  setCustomConfiguration (config, tag = 'Default') {
    if (!config) return false

    const configuration = configManager.mergeDefConf(config.customConfiguration)
    const taskConf = mergeTaskConf(config.customTaskControlCenter)
    if (TCC && TCC.setTaskConf) {
      TCC.setTaskConf(taskConf)
    }

    h5Player.hasSetCustomConfiguration = tag
    debug.info(`[CustomConfiguration][${tag}]`, configuration, taskConf)
  },

  mergeExternalConfiguration (config, tag = 'Default') {
    if (!config || !configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration')) return false
    h5Player.setCustomConfiguration(config, 'External')
    h5Player.hasExternalCustomConfiguration = tag
  },

  init: function (global) {
    const t = this

    if (window.unsafeWindow && window.unsafeWindow.__h5PlayerCustomConfiguration__) {
      !t.hasExternalCustomConfiguration && t.mergeExternalConfiguration(window.unsafeWindow.__h5PlayerCustomConfiguration__)
    }

    if (TCC && TCC.doTask('disable') === true) {
      debug.info(`[TCC][disable][${location.host}] 已禁止在该网站运行视频检测逻辑，您可查看任务配置中心的相关配置了解详情`)
      return true
    }

    if (!global) {
      /* 检测是否存在H5播放器 */
      t.detecH5Player()
      return true
    }

    if (configManager.get('debug') === true) {
      window._debugMode_ = true
      t.mountToGlobal()
    }

    setFakeUA()

    /* 初始化任务配置中心 */
    TCC = h5PlayerTccInit(t)

    /* 绑定键盘事件 */
    if (configManager.get('enableHotkeys') !== false) {
      t.bindEvent()
      t.bindFakeEvent()
    } else {
      debug.warn('快捷键能力已被禁用')
    }

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

    if (window.unsafeWindow && configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration')) {
      window.unsafeWindow.__setH5PlayerCustomConfiguration__ = t.mergeExternalConfiguration
    }
  }
}

async function h5PlayerInit () {
  try {
    if (isCloudflareChallengePage()) {
      console.warn('当前处于cloudflare的人机验证页面，暂停h5player的运行', location.href)
      return false
    }
  } catch (e) {
    debug.error(e)
  }

  const isEnabled = configManager.get('enable')
  const blackUrlList = configManager.get('blacklist.urls') || []
  const blackDomainList = configManager.get('blacklist.domains') || []
  const isInBlackList = blackUrlList.includes(location.href) || blackDomainList.includes(location.host)

  if (isInBlackList) {
    console.warn(`[h5player][config][blacklist][${location.href}] \n当前页面已被加入黑名单，不执行h5player增强脚本的相关逻辑，如有需要开启，请在配置里的blacklist移除对应的地址`)
  }

  try {
    if (isEnabled && !isInBlackList) {
      mediaCore.init(function (mediaElement) {
        h5Player.init()
      })

      if (configManager.get('enhance.allowExperimentFeatures') && configManager.get('download.enable')) {
        mediaSource.init()
        debug.warn(`[experimentFeatures][warning] ${i18n.t('experimentFeaturesWarning')}`)
        debug.warn('[experimentFeatures][mediaSource][activated]')
      }

      /* 禁止对playbackRate等属性进行锁定 */
      hackDefineProperty()

      /* 禁止对shadowdom使用close模式 */
      hackAttachShadow()

      /* 对所有事件进行接管 */
      proxyHTMLMediaElementEvent()
      // hackEventListener()
    }
  } catch (e) {
    console.error('h5player hack error', e)
  }

  /* 注意：油猴的菜单注册不能根据isEnabled禁用掉，否则没法通过油猴的菜单进行启用 */
  menuRegister()

  if (!isEnabled || isInBlackList) {
    debug.warn(`[config][disable][${location.host}] 当前网站已禁用脚本，如要启用脚本，请在菜单里开启`)
    return false
  }

  try {
    /* 初始化全局所需的相关方法 */
    h5Player.init(true)

    /* 检测到有视频标签就进行初始化 */
    supportMediaTags.forEach(tagName => {
      ready(tagName, function () {
        h5Player.init()
      })
    })

    /* 检测shadow dom 下面的video */
    document.addEventListener('addShadowRoot', function (e) {
      const shadowRoot = e.detail.shadowRoot
      supportMediaTags.forEach(tagName => {
        ready(tagName, function (element) {
          h5Player.init()
        }, shadowRoot)
      })
    })

    /* 初始化跨Tab控制逻辑 */
    crossTabCtl.init()

    if (isInIframe()) {
      debug.log('h5Player init suc, in iframe:')
    } else {
      debug.log('h5Player init suc')
    }

    if (isInCrossOriginFrame()) {
      debug.log('当前处于跨域受限的iframe中，h5Player部分功能可能无法正常开启', window.location.href)
    }

    /* 注册鼠标控制事件 */
    if (configManager.get('mouse.enable')) {
      registerMouseEvent(h5Player)
    }
  } catch (e) {
    debug.error('h5Player init fail', e)
  }

  /* 注意：只有明确为fasle才隐藏GUI */
  if (configManager.get('ui.enable') !== false) {
    if (window.customElements && document.adoptedStyleSheets) {
      h5Player.UI = h5playerUiWraper(windowSandbox)
      setTimeout(async () => {
        h5Player.UI.init()
      }, 400)
    } else {
      /* webkit内核建议73以上的浏览器才允许使用UI组件，否则兼容或性能都是很大的问题 */
      debug.warn('当前浏览器不支持customElements或adoptedStyleSheets，无法使用UI组件，建议使用Chrome 83+，Edge 83+')
    }
  } else {
    debug.warn('UI组件已被禁用', configManager.get('ui.enable'))
  }

  /**
   * 跟官网远程助手进行互动，有严重安全或信息洁癖的人手动注释下面代码即可
   * 下面代码不会影响主要功能的正常使用
   * 不注释代码，禁用UI界面也有同等效果
   */
  try {
    configManager.get('ui.enable') !== false && remoteHelper.init()
  } catch (e) {
    debug.error('[remoteHelper.init]', e)
  }

  // console.clear = () => {}
}

export default h5PlayerInit
