import './comment'
import h5PlayerTccInit from './h5PlayerTccInit'
import fakeConfig from './fakeConfig'
import FullScreen from '../libs/FullScreen/index'
import {
  ready,
  hackAttachShadow,
  hackEventListener,
  isObj,
  quickSort,
  eachParentNode,
  fakeUA,
  userAgentMap
} from '../libs/utils/index'

(function () {
  hackAttachShadow()
  hackEventListener()

  function debugMsg () {
    const arg = Array.from(arguments)
    arg.unshift('h5player debug message :')
    console.info.apply(console, arg)
  }

  let TCC = null
  const h5Player = {
    /* 提示文本的字号 */
    fontSize: 16,
    enable: true,
    globalMode: true,
    playerInstance: null,
    scale: 1,
    translate: {
      x: 0,
      y: 0
    },
    playbackRate: 1,
    /* 快进快退步长 */
    skipStep: 5,
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
    /**
     * 初始化播放器实例
     * @param isSingle 是否为单实例video标签
     */
    initPlayerInstance: function (isSingle) {
      const t = this
      if (!t.playerInstance) return

      const player = t.playerInstance
      t.filter.reset()
      t.initTips()
      t.initPlaybackRate()
      t.isFoucs()

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
      const taskConf = TCC.getTaskConfig()
      if (taskConf.init) {
        TCC.doTask('init', player)
      }
    },
    initPlaybackRate: function () {
      const t = this
      t.playbackRate = t.getPlaybackRate()
    },
    getPlaybackRate: function () {
      const t = this
      const playbackRate = window.localStorage.getItem('_h5_player_playback_rate_') || t.playbackRate
      return Number(Number(playbackRate).toFixed(1))
    },
    /* 设置播放速度 */
    setPlaybackRate: function (num, notips) {
      const taskConf = TCC.getTaskConfig()
      if (taskConf.playbackRate) {
        TCC.doTask('playbackRate')
        return
      }

      const t = this
      const player = t.player()
      let curPlaybackRate
      if (num) {
        num = Number(num)
        if (Number.isNaN(num)) {
          console.error('h5player: 播放速度转换出错')
          return false
        }
        if (num <= 0) {
          num = 0.1
        }
        num = Number(num.toFixed(1))
        curPlaybackRate = num
      } else {
        curPlaybackRate = t.getPlaybackRate()
      }

      /* 记录播放速度的信息 */
      window.localStorage.setItem('_h5_player_playback_rate_', curPlaybackRate)

      t.playbackRate = curPlaybackRate
      player.playbackRate = curPlaybackRate

      /* 本身处于1被播放速度的时候不再提示 */
      if (!num && curPlaybackRate === 1) return
      !notips && t.tips('播放速度：' + player.playbackRate + '倍')
    },
    /**
     * 初始化自动播放逻辑
     * 必须是配置了自动播放按钮选择器得的才会进行自动播放
     */
    initAutoPlay: function (p) {
      const t = this
      const player = p || t.player()

      // 在轮询重试的时候，如果实例变了，或处于隐藏页面中则不进行自动播放操作
      if (!player || (p && p !== t.player()) || document.hidden) return

      const taskConf = TCC.getTaskConfig()
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
    setWebFullScreen: function () {
      const t = this
      const player = t.player()
      const isDo = TCC.doTask('webFullScreen')
      if (!isDo && player && player._fullPageScreen_) {
        player._fullPageScreen_.toggle()
      }
    },
    setCurrentTime: function (num, notips) {
      if (!num) return
      num = Number(num)
      const _num = Math.abs(Number(num.toFixed(1)))

      const t = this
      const player = t.player()
      const taskConf = TCC.getTaskConfig()
      if (taskConf.currentTime) {
        TCC.doTask('currentTime')
        return
      }

      if (num > 0) {
        if (taskConf.addCurrentTime) {
          TCC.doTask('addCurrentTime')
        } else {
          player.currentTime += _num
          !notips && t.tips('前进：' + _num + '秒')
        }
      } else {
        if (taskConf.subtractCurrentTime) {
          TCC.doTask('subtractCurrentTime')
        } else {
          player.currentTime -= _num
          !notips && t.tips('后退：' + _num + '秒')
        }
      }
    },
    setVolume: function (num) {
      if (!num) return
      num = Number(num)
      const _num = Math.abs(Number(num.toFixed(2)))

      const t = this
      const player = t.player()
      if (num > 0) {
        if (player.volume < 1) {
          player.volume += _num
        }
      } else {
        if (player.volume > 0) {
          player.volume -= _num
        }
      }
      t.tips('音量：' + parseInt(player.volume * 100) + '%')
    },
    setFakeUA (ua) {
      ua = ua || userAgentMap.iPhone.safari

      /* 记录设定的ua信息 */
      window.localStorage.setItem('_h5_player_user_agent_', ua)
      fakeUA(ua)
    },

    /* ua伪装切换开关 */
    switchFakeUA (ua) {
      const customUA = window.localStorage.getItem('_h5_player_user_agent_')
      if (customUA) {
        window.localStorage.removeItem('_h5_player_user_agent_')
      } else {
        this.setFakeUA(ua)
      }

      debugMsg('ua', navigator.userAgent)
    },

    switchPlayStatus: function () {
      const t = this
      const player = t.player()
      const taskConf = TCC.getTaskConfig()
      if (taskConf.switchPlayStatus) {
        TCC.doTask('switchPlayStatus')
        return
      }

      if (player.paused) {
        if (taskConf.play) {
          TCC.doTask('play')
        } else {
          player.play()
          t.tips('播放')
        }
      } else {
        if (taskConf.pause) {
          TCC.doTask('pause')
        } else {
          player.pause()
          t.tips('暂停')
        }
      }
    },
    tipsClassName: 'html_player_enhance_tips',
    tips: function (str) {
      const t = h5Player
      const player = t.player()
      if (!player) {
        console.log('h5Player Tips:', str)
        return true
      }

      const parentNode = player.parentNode

      // 修复部分提示按钮位置异常问题
      let backupStyle = parentNode.getAttribute('style-backup') || ''
      const defStyle = parentNode.getAttribute('style') || ''
      if (backupStyle === null) {
        parentNode.setAttribute('style-backup', defStyle)
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
      newStyleArr.push('min-width:' + playerBox.width + 'px')
      newStyleArr.push('min-height:' + playerBox.height + 'px')
      parentNode.setAttribute('style', newStyleArr.join(';'))

      const tipsSelector = '.' + t.tipsClassName
      let tipsDom = parentNode.querySelector(tipsSelector)

      /* 提示dom未初始化的，则进行初始化 */
      if (!tipsDom) {
        t.initTips()
        tipsDom = parentNode.querySelector(tipsSelector)
        if (!tipsDom) {
          console.log('init h5player tips dom error...')
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
          parentNode.setAttribute('style', backupStyle)
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
      const t = this
      const player = t.player()
      const parentNode = player.parentNode
      if (parentNode.querySelector('.' + t.tipsClassName)) return

      const tipsStyle = `
        position: absolute;
        z-index: 999999;
        font-size: ${t.fontSize || 16}px;
        padding: 10px;
        background: rgba(0,0,0,0.4);
        color:white;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        transition: all 500ms ease;
        opacity: 0;
        border-radius:3px;
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
    rotate: 0,
    fps: 30,
    /* 滤镜效果 */
    filter: {
      key: new Array(5),
      setup: function () {
        var view = 'brightness({0}) contrast({1}) saturate({2}) hue-rotate({3}deg) blur({4}px)'
        for (var i = 0; i < 5; i++) {
          view = view.replace('{' + i + '}', String(this.key[i]))
          this.key[i] = Number(this.key[i])
        }
        h5Player.player().style.WebkitFilter = view
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

    keyCodeList: [13, 16, 17, 18, 27, 32, 37, 38, 39, 40, 49, 50, 51, 52, 67, 68, 69, 70, 73, 74, 75, 79, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 97, 98, 99, 100, 220],
    keyList: ['enter', 'shift', 'control', 'alt', 'escape', ' ', 'arrowleft', 'arrowright', 'arrowright', 'arrowup', 'arrowdown', '1', '2', '3', '4', 'c', 'd', 'e', 'f', 'i', 'j', 'k', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', '\\', '|'],
    keyMap: {
      enter: 13,
      shift: 16,
      ctrl: 17,
      alt: 18,
      esc: 27,
      space: 32,
      '←': 37,
      '↑': 38,
      '→': 39,
      '↓': 40,
      1: 49,
      2: 50,
      3: 51,
      4: 52,
      c: 67,
      d: 68,
      e: 69,
      f: 70,
      i: 73,
      j: 74,
      k: 75,
      o: 79,
      p: 80,
      q: 81,
      r: 82,
      s: 83,
      t: 84,
      u: 85,
      w: 87,
      x: 88,
      y: 89,
      z: 90,
      pad1: 97,
      pad2: 98,
      pad3: 99,
      pad4: 100,
      '\\': 220
    },
    /* 播放器事件响应器 */
    palyerTrigger: function (player, event) {
      if (!player || !event) return
      const t = h5Player
      const keyCode = event.keyCode
      const key = event.key.toLowerCase()

      if (event.shiftKey && !event.ctrlKey && !event.altKey) {
        // 网页全屏
        if (key === 'enter') {
          t.setWebFullScreen()
        }

        // 进入或退出画中画模式
        if (key === 'p') {
          if (window._isPictureInPicture_) {
            document.exitPictureInPicture().then(() => {
              window._isPictureInPicture_ = null
            }).catch(() => {
              window._isPictureInPicture_ = null
            })
          } else {
            player.requestPictureInPicture && player.requestPictureInPicture().then(() => {
              window._isPictureInPicture_ = true
            }).catch(() => {
              window._isPictureInPicture_ = null
            })
          }
        }

        // 视频画面缩放相关事件
        const allowKeys = ['x', 'c', 'z', 'arrowright', 'arrowleft', 'arrowup', 'arrowdown']
        if (!allowKeys.includes(key)) return

        t.scale = Number(t.scale)
        switch (key) {
          // shift+X：视频缩小 -0.1
          case 'x' :
            t.scale -= 0.1
            break
          // shift+C：视频放大 +0.1
          case 'c' :
            t.scale += 0.1
            break
          // shift+Z：视频恢复正常大小
          case 'z' :
            t.scale = 1
            t.translate = { x: 0, y: 0 }
            break
          case 'arrowright' :
            t.translate.x += 10
            break
          case 'arrowleft' :
            t.translate.x -= 10
            break
          case 'arrowup' :
            t.translate.y -= 10
            break
          case 'arrowdown' :
            t.translate.y += 10
            break
        }

        const scale = t.scale = Number(t.scale).toFixed(1)
        player.style.transform = `scale(${scale}) translate(${t.translate.x}px, ${t.translate.y}px)`
        let tipsMsg = `视频缩放率：${scale * 100}%`
        if (t.translate.x) {
          tipsMsg += `，水平位移：${t.translate.x}px`
        }
        if (t.translate.y) {
          tipsMsg += `，垂直位移：${t.translate.y}px`
        }
        t.tips(tipsMsg)

        // 阻止事件冒泡
        event.stopPropagation()
        event.preventDefault()
        return true
      }

      // 防止其它无关组合键冲突
      if (event.altKey || event.ctrlKey || event.shiftKey) return

      // 方向键右→：快进3秒
      if (keyCode === 39) {
        t.setCurrentTime(t.skipStep)
      }
      // 方向键左←：后退3秒
      if (keyCode === 37) {
        t.setCurrentTime(-t.skipStep)
      }

      // 方向键上↑：音量升高 1%
      if (keyCode === 38) {
        t.setVolume(0.01)
      }
      // 方向键下↓：音量降低 1%
      if (keyCode === 40) {
        t.setVolume(-0.01)
      }

      // 空格键：暂停/播放
      if (keyCode === 32) {
        t.switchPlayStatus()
      }

      // 按键X：减速播放 -0.1
      if (keyCode === 88) {
        if (player.playbackRate > 0) {
          t.setPlaybackRate(player.playbackRate - 0.1)
        }
      }
      // 按键C：加速播放 +0.1
      if (keyCode === 67) {
        if (player.playbackRate < 16) {
          t.setPlaybackRate(player.playbackRate + 0.1)
        }
      }
      // 按键Z：正常速度播放
      if (keyCode === 90) {
        player.playbackRate = 1
        t.setPlaybackRate(player.playbackRate)
      }

      // 按1-4设置播放速度 49-52;97-100
      if ((keyCode >= 49 && keyCode <= 52) || (keyCode >= 97 && keyCode <= 100)) {
        player.playbackRate = Number(event.key)
        t.setPlaybackRate(player.playbackRate)
      }

      // 按键F：下一帧
      if (keyCode === 70) {
        if (window.location.hostname === 'www.netflix.com') {
          /* netflix 的F键是全屏的意思 */
          return
        }
        if (!player.paused) player.pause()
        player.currentTime += Number(1 / t.fps)
        t.tips('定位：下一帧')
      }
      // 按键D：上一帧
      if (keyCode === 68) {
        if (!player.paused) player.pause()
        player.currentTime -= Number(1 / t.fps)
        t.tips('定位：上一帧')
      }

      // 按键E：亮度增加%
      if (keyCode === 69) {
        t.filter.key[0] += 0.1
        t.filter.key[0] = t.filter.key[0].toFixed(2)
        t.filter.setup()
        t.tips('图像亮度增加：' + parseInt(t.filter.key[0] * 100) + '%')
      }
      // 按键W：亮度减少%
      if (keyCode === 87) {
        if (t.filter.key[0] > 0) {
          t.filter.key[0] -= 0.1
          t.filter.key[0] = t.filter.key[0].toFixed(2)
          t.filter.setup()
        }
        t.tips('图像亮度减少：' + parseInt(t.filter.key[0] * 100) + '%')
      }

      // 按键T：对比度增加%
      if (keyCode === 84) {
        t.filter.key[1] += 0.1
        t.filter.key[1] = t.filter.key[1].toFixed(2)
        t.filter.setup()
        t.tips('图像对比度增加：' + parseInt(t.filter.key[1] * 100) + '%')
      }
      // 按键R：对比度减少%
      if (keyCode === 82) {
        if (t.filter.key[1] > 0) {
          t.filter.key[1] -= 0.1
          t.filter.key[1] = t.filter.key[1].toFixed(2)
          t.filter.setup()
        }
        t.tips('图像对比度减少：' + parseInt(t.filter.key[1] * 100) + '%')
      }

      // 按键U：饱和度增加%
      if (keyCode === 85) {
        t.filter.key[2] += 0.1
        t.filter.key[2] = t.filter.key[2].toFixed(2)
        t.filter.setup()
        t.tips('图像饱和度增加：' + parseInt(t.filter.key[2] * 100) + '%')
      }
      // 按键Y：饱和度减少%
      if (keyCode === 89) {
        if (t.filter.key[2] > 0) {
          t.filter.key[2] -= 0.1
          t.filter.key[2] = t.filter.key[2].toFixed(2)
          t.filter.setup()
        }
        t.tips('图像饱和度减少：' + parseInt(t.filter.key[2] * 100) + '%')
      }

      // 按键O：色相增加 1 度
      if (keyCode === 79) {
        t.filter.key[3] += 1
        t.filter.setup()
        t.tips('图像色相增加：' + t.filter.key[3] + '度')
      }
      // 按键I：色相减少 1 度
      if (keyCode === 73) {
        t.filter.key[3] -= 1
        t.filter.setup()
        t.tips('图像色相减少：' + t.filter.key[3] + '度')
      }

      // 按键K：模糊增加 1 px
      if (keyCode === 75) {
        t.filter.key[4] += 1
        t.filter.setup()
        t.tips('图像模糊增加：' + t.filter.key[4] + 'PX')
      }
      // 按键J：模糊减少 1 px
      if (keyCode === 74) {
        if (t.filter.key[4] > 0) {
          t.filter.key[4] -= 1
          t.filter.setup()
        }
        t.tips('图像模糊减少：' + t.filter.key[4] + 'PX')
      }

      // 按键Q：图像复位
      if (keyCode === 81) {
        t.filter.reset()
        t.tips('图像属性：复位')
      }

      // 按键S：画面旋转 90 度
      if (keyCode === 83) {
        t.rotate += 90
        if (t.rotate % 360 === 0) t.rotate = 0
        player.style.transform = 'rotate(' + t.rotate + 'deg)'
        t.tips('画面旋转：' + t.rotate + '度')
      }

      // 按键回车，进入全屏
      if (keyCode === 13) {
        const isDo = TCC.doTask('fullScreen')
        if (!isDo && player._fullScreen_) {
          player._fullScreen_.toggle()
        }
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
        TCC.doTask('shortcuts', {
          event,
          player,
          h5Player
        })

        return true
      } else {
        return false
      }
    },

    /* 判断焦点是否处于可编辑元素 */
    isEditableTarget: function (target) {
      const isEditable = target.getAttribute && target.getAttribute('contenteditable') === 'true'
      const isInputDom = /INPUT|TEXTAREA|SELECT/.test(target.nodeName)
      return isEditable || isInputDom
    },

    /* 按键响应方法 */
    keydownEvent: function (event) {
      const t = h5Player
      const keyCode = event.keyCode
      const key = event.key.toLowerCase()
      const player = t.player()

      /* 处于可编辑元素中不执行任何快捷键 */
      if (t.isEditableTarget(event.target)) return

      /* shift+f 切换UA伪装 */
      if (event.shiftKey && keyCode === 70) {
        t.switchFakeUA()
      }

      /* 未用到的按键不进行任何事件监听 */
      const isInUseCode = t.keyCodeList.includes(keyCode) || t.keyList.includes(key)
      if (!isInUseCode) return

      if (!player) {
        // console.log('无可用的播放，不执行相关操作')
        return
      }

      /* 切换插件的可用状态 */
      if (event.ctrlKey && keyCode === 32) {
        t.enable = !t.enable
        if (t.enable) {
          t.tips('启用h5Player插件')
        } else {
          t.tips('禁用h5Player插件')
        }
      }

      if (!t.enable) {
        console.log('h5Player 已禁用~')
        return false
      }

      // 按ctrl+\ 键进入聚焦或取消聚焦状态，用于视频标签被遮挡的场景
      if (event.ctrlKey && keyCode === 220) {
        t.globalMode = !t.globalMode
        if (t.globalMode) {
          t.tips('全局模式')
        } else {
          t.tips('禁用全局模式')
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
      let progressMap = window.localStorage.getItem('_h5_player_play_progress_')
      if (!progressMap) {
        progressMap = {}
      } else {
        progressMap = JSON.parse(progressMap)
      }
      if (!player) {
        return progressMap
      } else {
        const keyName = window.location.href || player.src
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
          const progressMap = t.getPlayProgress()

          const keyName = window.location.href || player.src
          const list = Object.keys(progressMap)

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
          window.localStorage.setItem('_h5_player_play_progress_', JSON.stringify(progressMap))

          /* 循环侦听 */
          recorder(player)
        }, 1000 * 2)
      }
      recorder(player)
    },
    /* 设置播放进度 */
    setPlayProgress: function (player, time) {
      if (!player) return
      const t = h5Player
      const curTime = Number(t.getPlayProgress(player))
      if (!curTime || Number.isNaN(curTime)) return

      player.currentTime = curTime || player.currentTime
      if (curTime > 3) {
        t.tips('为你恢复上次播放进度~')
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
        console.log('检测到HTML5视频！')

        /* 单video实例标签的情况 */
        if (playerList.length === 1) {
          t.playerInstance = playerList[0]
          t.initPlayerInstance(true)
        } else {
          /* 多video实例标签的情况 */
          playerList.forEach(function (player) {
            /* 鼠标移到其上面的时候重新指定实例 */
            if (player._hasMouseRedirectEvent_) return
            player.addEventListener('mouseenter', function (event) {
              t.playerInstance = event.target
              t.initPlayerInstance(false)
            })
            player._hasMouseRedirectEvent_ = true

            /* 播放器开始播放的时候重新指向实例 */
            if (player._hasPlayingRedirectEvent_) return
            player.addEventListener('playing', function (event) {
              t.playerInstance = event.target
              t.initPlayerInstance(false)

              /* 同步之前设定的播放速度 */
              t.setPlaybackRate()
            })
            player._hasPlayingRedirectEvent_ = true
          })
        }
      }
    },
    /* 绑定相关事件 */
    bindEvent: function () {
      var t = this
      if (t._hasBindEvent_) return

      document.removeEventListener('keydown', t.keydownEvent)
      document.addEventListener('keydown', t.keydownEvent, true)

      /* 兼容iframe操作 */
      if (window.top !== window && window.top.document) {
        window.top.document.removeEventListener('keydown', t.keydownEvent)
        window.top.document.addEventListener('keydown', t.keydownEvent, true)
      }
      t._hasBindEvent_ = true
    },

    init: function (global) {
      var t = this
      if (global) {
        /* 绑定键盘事件 */
        t.bindEvent()

        /**
         * 判断是否需要进行ua伪装
         * 下面方案暂时不可用
         * 由于部分网站跳转至移动端后域名不一致，形成跨域问题
         * 导致无法同步伪装配置而不断死循环跳转
         * eg. open.163.com
         * */
        // let customUA = window.localStorage.getItem('_h5_player_user_agent_')
        // debugMsg(customUA, window.location.href, window.navigator.userAgent, document.referrer)
        // if (customUA) {
        //   t.setFakeUA(customUA)
        //   alert(customUA)
        // } else {
        //   alert('ua false')
        // }

        /* 对配置了ua伪装的域名进行伪装 */
        const host = window.location.host
        if (fakeConfig[host]) {
          t.setFakeUA(fakeConfig[host])
        }
      } else {
        /* 检测是否存在H5播放器 */
        t.detecH5Player()
      }
    },
    load: false
  }

  /* 初始化任务配置中心 */
  TCC = h5PlayerTccInit(h5Player)

  try {
    /* 初始化全局所需的相关方法 */
    h5Player.init(true)

    /* 检测到有视频标签就进行初始化 */
    ready('video', function () {
      h5Player.init()
    })

    /* 检测shadow dom 下面的video */
    document.addEventListener('addShadowRoot', function (e) {
      const shadowRoot = e.detail.shadowRoot
      ready('video', function (element) {
        h5Player.init()
      }, shadowRoot)
    })

    window.top._h5PlayerForDebug_ = h5Player
  } catch (e) {
    console.error('h5player:', e)
  }

  // document.addEventListener('visibilitychange', function () {
  //   if (!document.hidden) {
  //     h5Player.initAutoPlay()
  //   }
  // })
})()
