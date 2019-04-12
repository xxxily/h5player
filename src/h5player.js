// ==UserScript==
// @name         HTML5播放器增强插件 - 修订版
// @namespace    http://www.ankvps.null
// @homepage     http://www.ankvps.null
// @version      1.2.0
// @description  基于https://greasyfork.org/users/49622 对HTML5播放器的功能进行增强(仅对支持HTML5视频的网站有效)，快捷键仿照Potplayer的快捷键布局，实现调节亮度，饱和度，对比度，速度等功能。
// @author       ankvps
// @match        http://*/*
// @match        https://*/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

/*
 提示字体设置：找到下面代码中，按住说明修改值即可，找到fontSize。

 快捷键说明：
 ctrl+Enter || ctrl+\  切换是否聚焦，解决某些vidoe标签被遮罩而不能使用快捷键问题

 播放时间定位：
 方向键右→：快进3秒
 方向键左←：后退3秒
 按键F：下一帧
 按键D：上一帧

 音量调节：
 方向键上↑：音量升高 1%
 方向键下↓：音量降低 1%

 播放速度调节：
 按键C：加速播放 +0.1
 按键X：减速播放 -0.1
 按键Z：正常速度播放

 图像参数调节：
 按键E：亮度增加%
 按键W：亮度减少%
 按键T：对比度增加%
 按键R：对比度减少%
 按键U：饱和度增加%
 按键Y：饱和度减少%
 按键O：色相增加 1 度
 按键I：色相减少 1 度
 按键K：模糊增加 1 px
 按键J：模糊减少 1 px
 按键Q：图像复位

 画面调节：
 按键S：画面旋转 90 度
 按键回车：进入全屏（只支持部分网站 B站，油管），还想增加什么网站的话，和我反馈一下！

 兼容性问题：可以使用组合键临时停用插件，例如 播放/暂停 默认为空格键，那么使用Ctrl+space(空格键)即可暂停使用一次插件。
 */

(function () {
  // 'use strict';
  var html_player_enhance = {
    fontSize: 20, // 请输入您希望提示的文字大小(px)，默认值(浏览器默认)为 0,直接输入数字即可！
    player: function () {
      return document.querySelector('video')
    },
    scale: 1,
    globalMode: false,
    tips: function (str) {
      let t = html_player_enhance
      let tipsDom = document.querySelector('#html_player_enhance_tips')

      /* 出现异常的时候参数再初始化一次tips节点 */
      if (!tipsDom) {
        console.log('h5player init error...')
        t.settips()
        tipsDom = document.querySelector('#html_player_enhance_tips')
        if (!tipsDom) {
          return false
        }
      }

      let style = tipsDom.style
      tipsDom.innerText = str
      for (var i = 0; i < 3; i++) {
        if (this.on_off[i]) clearTimeout(this.on_off[i])
      }
      style.display = 'block'
      this.on_off[0] = setTimeout(function () {
        style.opacity = 1
      }, 50)
      this.on_off[1] = setTimeout(function () {
        style.opacity = 0
      }, 2000)
      this.on_off[2] = setTimeout(function () {
        style.display = 'none'
      }, 2800)
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
        html_player_enhance.player().style.WebkitFilter = view
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
    /* 设置提示DOM的样式 */
    settips: function () {
      var tips = document.createElement('div')
      this.player().parentNode.appendChild(tips)
      tips.setAttribute('id', 'html_player_enhance_tips')
      tips.setAttribute('style', "position: absolute;z-index: 999999;padding: 10px;background: rgba(0,0,0,0.8);color:white;top: 50%;left: 50%;transform: translate(-50%,-50%);transition: all 500ms ease;opacity: 0;display: none; -webkit-font-smoothing: subpixel-antialiased;font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;-webkit-user-select: none;")
      if (this.fontSize !== 0) {
        tips.style.fontSize = this.fontSize + 'px'
      }
      // 修复油管的兼容性问题
      if (location.hostname === 'www.youtube.com') {
        this.player().parentNode.style.height = '100%'
      }
    },
    _isFoucs: false,
    isFoucs: function () {
      let t = html_player_enhance
      let player = t.player()
      if (!player) return

      player.onmouseover = function () {
        if (!t.globalMode) {
          html_player_enhance._isFoucs = true
        }
      }
      player.onmouseout = function () {
        if (!t.globalMode) {
          html_player_enhance._isFoucs = false
        }
      }
    },
    /* 按键响应方法 */
    button: function (event) {
      let t = html_player_enhance
      let keyCode = event.keyCode
      let player = t.player()

      if (!player) {
        t.tips('video元素获取失败~')
        t.init()
        return
      }

      // 按shift+Enter 键进入聚焦或取消聚焦状态，用于视频标签被遮挡的场景
      if (event.ctrlKey && (keyCode === 13 || keyCode === 220)) {
        t._isFoucs = !t._isFoucs
        if (t._isFoucs) {
          t.globalMode = true
          t.tips('全局模式')
        } else {
          t.globalMode = false
          t.tips('禁用全局模式')
        }
      }

      /* 未聚焦，不能进行任何快捷键的操作 */
      if (!t._isFoucs) return

      if (event.shiftKey) {
        let isScaleKeyCode = keyCode === 88 || keyCode === 67 || keyCode === 90
        if (!isScaleKeyCode) return

        // shift+X：视频缩小 -0.1
        if (keyCode === 88) {
          t.scale -= 0.1
        }

        // shift+C：视频放大 +0.1
        if (keyCode === 67) {
          t.scale = Number(t.scale)
          t.scale += 0.1
        }

        // shift+Z：视频恢复正常大小
        if (keyCode === 90) {
          t.scale = 1
        }

        let scale = t.scale = t.scale.toFixed(1)
        player.style.transform = 'scale(' + scale + ')'
        t.tips('视频缩放率：' + scale)
        return true
      }

      // 防止其它组合键冲突
      if (event.altKey || event.ctrlKey || event.shiftKey) return
      event.stopPropagation()
      event.preventDefault()

      // 方向键右→：快进3秒
      if (keyCode === 39) {
        if (location.hostname === 'www.netflix.com') {
          return
        }
        player.currentTime += 3
        t.tips('快进：3秒')
      }
      // 方向键左←：后退3秒
      if (keyCode === 37) {
        if (location.hostname === 'www.netflix.com') {
          return
        }
        player.currentTime -= 3
        t.tips('后退：3秒')
      }
      // 方向键上↑：音量升高 1%
      if (keyCode === 38) {
        if (player.volume < 1) {
          player.volume += 0.01
        }
        player.volume = player.volume.toFixed(2)
        t.tips('音量：' + parseInt(player.volume * 100) + '%')
      }
      // 方向键下↓：音量降低 1%
      if (keyCode === 40) {
        if (player.volume > 0) {
          player.volume -= 0.01
        }
        player.volume = player.volume.toFixed(2)
        t.tips('音量：' + parseInt(player.volume * 100) + '%')
      }
      // 空格键：暂停/播放
      if (keyCode === 32) {
        // 已支持空格暂停的不在注册改键
        var hostname = window.location.hostname || window.location.host
        if (/youtube/i.test(hostname)) {
          return
        }

        let curStatus = player.paused

        setTimeout(function () {
          if (curStatus !== player.paused) {
            // 默认快捷键已经处理过了，就不再重复处理
            return
          }
          if (curStatus) {
            player.play()
            t.tips('播放')
          } else {
            player.pause()
            t.tips('暂停')
          }
        }, 150)
      }

      // 按键X：减速播放 -0.1
      if (keyCode === 88) {
        if (player.playbackRate > 0) {
          player.playbackRate -= 0.1
          player.playbackRate = player.playbackRate.toFixed(1)
          t.tips('播放速度：' + player.playbackRate + '倍')
        }
      }
      // 按键C：加速播放 +0.1
      if (keyCode === 67) {
        if (player.playbackRate < 16) {
          player.playbackRate += 0.1
          player.playbackRate = player.playbackRate.toFixed(1)
          t.tips('播放速度：' + player.playbackRate + '倍')
        }
      }
      // 按键Z：正常速度播放
      if (keyCode === 90) {
        player.playbackRate = 1
        t.tips('播放速度：1倍')
      }

      // 按1-4设置播放速度 49-52;97-100
      if ((keyCode >= 49 && keyCode <= 52) || (keyCode >= 97 && keyCode <= 100)) {
        player.playbackRate = Number(event.key)
        t.tips('播放速度：' + event.key + '倍')
        return false
      }

      // 按键F：下一帧
      if (keyCode == 70) {
        if (location.hostname === 'www.netflix.com') {
          /* netflix 的F键是全屏的意思 */
          return
        }
        if (!player.paused) player.pause()
        player.currentTime += Number(1 / t.fps)
        t.tips('定位：下一帧')
      }
      // 按键D：上一帧
      if (keyCode == 68) {
        if (!player.paused) player.pause()
        player.currentTime -= Number(1 / t.fps)
        t.tips('定位：上一帧')
      }
      // 按键E：亮度增加%
      if (keyCode == 69) {
        if (t.filter.key[0] > 1) {
          t.filter.key[0] += 1
        } else {
          t.filter.key[0] += 0.1
        }
        t.filter.key[0] = t.filter.key[0].toFixed(2)
        t.filter.setup()
        t.tips('图像亮度增加：' + parseInt(t.filter.key[0] * 100) + '%')
      }
      // 按键W：亮度减少%
      if (keyCode == 87) {
        if (t.filter.key[0] > 0) {
          if (t.filter.key[0] > 1) {
            t.filter.key[0] -= 1
          } else {
            t.filter.key[0] -= 0.1
          }
          t.filter.key[0] = t.filter.key[0].toFixed(2)
          t.filter.setup()
        }
        t.tips('图像亮度减少：' + parseInt(t.filter.key[0] * 100) + '%')
      }
      // 按键T：对比度增加%
      if (keyCode == 84) {
        if (t.filter.key[1] > 1) {
          t.filter.key[1] += 1
        } else {
          t.filter.key[1] += 0.1
        }
        t.filter.key[1] = t.filter.key[1].toFixed(2)
        t.filter.setup()
        t.tips('图像对比度增加：' + parseInt(t.filter.key[1] * 100) + '%')
      }
      // 按键R：对比度减少%
      if (keyCode == 82) {
        if (t.filter.key[1] > 0) {
          if (t.filter.key[1] > 1) {
            t.filter.key[1] -= 1
          } else {
            t.filter.key[1] -= 0.1
          }
          t.filter.key[1] = t.filter.key[1].toFixed(2)
          t.filter.setup()
        }
        t.tips('图像对比度减少：' + parseInt(t.filter.key[1] * 100) + '%')
      }
      // 按键U：饱和度增加%
      if (keyCode == 85) {
        if (t.filter.key[2] > 1) {
          t.filter.key[2] += 1
        } else {
          t.filter.key[2] += 0.1
        }
        t.filter.key[2] = t.filter.key[2].toFixed(2)
        t.filter.setup()
        t.tips('图像饱和度增加：' + parseInt(t.filter.key[2] * 100) + '%')
      }
      // 按键Y：饱和度减少%
      if (keyCode == 89) {
        if (t.filter.key[2] > 0) {
          if (t.filter.key[2] > 1) {
            t.filter.key[2] -= 1
          } else {
            t.filter.key[2] -= 0.1
          }
          t.filter.key[2] = t.filter.key[2].toFixed(2)
          t.filter.setup()
        }
        t.tips('图像饱和度减少：' + parseInt(t.filter.key[2] * 100) + '%')
      }
      // 按键O：色相增加 1 度
      if (keyCode == 79) {
        t.filter.key[3] += 1
        t.filter.setup()
        t.tips('图像色相增加：' + t.filter.key[3] + '度')
      }
      // 按键I：色相减少 1 度
      if (keyCode == 73) {
        t.filter.key[3] -= 1
        t.filter.setup()
        t.tips('图像色相减少：' + t.filter.key[3] + '度')
      }
      // 按键K：模糊增加 1 px
      if (keyCode == 75) {
        t.filter.key[4] += 1
        t.filter.setup()
        t.tips('图像模糊增加：' + t.filter.key[4] + 'PX')
      }
      // 按键J：模糊减少 1 px
      if (keyCode == 74) {
        if (t.filter.key[4] > 0) {
          t.filter.key[4] -= 1
          t.filter.setup()
        }
        t.tips('图像模糊减少：' + t.filter.key[4] + 'PX')
      }
      // 按键Q：图像复位
      if (keyCode == 81) {
        t.filter.reset()
        t.tips('图像属性：复位')
      }
      // 按键S：画面旋转 90 度
      if (keyCode == 83) {
        t.rotate += 90
        if (t.rotate % 360 === 0) t.rotate = 0
        player.style.transform = 'rotate(' + t.rotate + 'deg)'
        t.tips('画面旋转：' + t.rotate + '度')
      }
      // 按键回车，进入全屏，支持仅部分网站(B站，油管)
      if (keyCode == 13) {
        if (location.hostname === 'www.bilibili.com') {
          if (document.querySelector('[data-text="进入全屏"]')) {
            document.querySelector('[data-text="进入全屏"]').click()
          }
        }
        if (location.hostname === 'www.youtube.com') {
          if (document.querySelector('[class="ytp-fullscreen-button ytp-button"]')) {
            document.querySelector('[class="ytp-fullscreen-button ytp-button"]').click()
          }
        }
      }
    },
    /**
     * 检测h5播放器是否存在
     * @param callback
     */
    detecH5Player: function (callback) {
      var t = this
      var player = document.querySelector('video')
      if (player) {
        callback && callback(player)
      } else {
        // 轮询检测
        setTimeout(function () {
          t.detecH5Player(callback)
        }, 1000)
      }
    },
    init: function () {
      var t = this
      if (document.querySelectorAll('#html_player_enhance_tips').length > 1) {
        document.querySelector('#html_player_enhance_tips').parentNode.removeChild(document.querySelectorAll('#html_player_enhance_tips')[1])
      }

      t.detecH5Player(function (player) {
        if (document.querySelectorAll('#html_player_enhance_tips').length === 0) {
          if (!this.load) {
            var t = html_player_enhance
            this.load = true
            console.log('检测到HTML5视频！')
            t.load = false
            t.filter.reset()
            t.settips()
            t.isFoucs()
            document.onkeydown = t.button
          }
        }
      })
    },
    load: false
  }

  /* 进行初始化 */
  html_player_enhance.init()
  document.addEventListener('DOMNodeInserted', function () {
    html_player_enhance.init()
  })
})()
