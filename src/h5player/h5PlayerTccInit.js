import TCC from '../libs/TCC/index'
import {
  isObj,
  hideDom,
  eachParentNode
} from '../libs/utils/index'
import debug from './debug'
const $q = function (str) { return document.querySelector(str) }

/**
 * 任务配置中心 Task Control Center
 * 用于配置所有无法进行通用处理的任务，如不同网站的全屏方式不一样，必须调用网站本身的全屏逻辑，才能确保字幕、弹幕等正常工作
 * */

const taskConf = {
  /**
   * 配置示例
   * 父级键名对应的是一级域名，
   * 子级键名对应的相关功能名称，键值对应的该功能要触发的点击选择器或者要调用的相关函数
   * 所有子级的键值都支持使用选择器触发或函数调用
   * 配置了子级的则使用子级配置逻辑进行操作，否则使用默认逻辑
   * 注意：include，exclude这两个子级键名除外，这两个是用来进行url范围匹配的
   * */
  'demo.demo': {
    // disable: true, // 在该域名下禁止插件的所有功能
    fullScreen: '.fullscreen-btn',
    exitFullScreen: '.exit-fullscreen-btn',
    webFullScreen: function () {},
    exitWebFullScreen: '.exit-fullscreen-btn',
    autoPlay: '.player-start-btn',
    // pause: ['.player-pause', '.player-pause02'], //多种情况对应不同的选择器时，可使用数组，插件会对选择器进行遍历，知道找到可用的为止
    pause: '.player-pause',
    play: '.player-play',
    switchPlayStatus: '.player-play',
    playbackRate: function () {},
    // playbackRate: true, // 当给某个功能设置true时，表示使用网站自身的能力控制视频，而忽略插件的能力
    currentTime: function () {},
    addCurrentTime: '.add-currenttime',
    subtractCurrentTime: '.subtract-currenttime',
    // 自定义快捷键的执行方式，如果是组合键，必须是 ctrl-->shift-->alt 这样的顺序，没有可以忽略，键名必须全小写
    shortcuts: {
      /* 注册要执行自定义回调操作的快捷键 */
      register: [
        'ctrl+shift+alt+c',
        'ctrl+shift+c',
        'ctrl+alt+c',
        'ctrl+c',
        'c'
      ],
      /* 自定义快捷键的回调操作 */
      callback: function (h5Player, taskConf, data) {
        const { event, player } = data
        console.log(event, player)
      }
    },

    /* 阻止网站自身的调速行为，增强突破调速限制的能力 */
    blockSetPlaybackRate: true,
    /* 阻止网站自身的播放进度控制逻辑，增强突破进度调控限制的能力 */
    blockSetCurrentTime: true,
    /* 阻止网站自身的音量控制逻辑，排除网站自身的调音干扰 */
    blockSetVolume: true,

    /* 当前域名下需包含的路径信息，默认整个域名下所有路径可用 必须是正则 */
    include: /^.*/,
    /* 当前域名下需排除的路径信息，默认不排除任何路径 必须是正则 */
    exclude: /\t/
  },
  'youtube.com': {
    webFullScreen: 'button.ytp-size-button',
    fullScreen: 'button.ytp-fullscreen-button',
    next: '.ytp-next-button',
    shortcuts: {
      register: [
        'escape'
      ],
      callback: function (h5Player, taskConf, data) {
        const { event } = data
        if (event.keyCode === 27) {
          /* 取消播放下一个推荐的视频 */
          if (document.querySelector('.ytp-upnext').style.display !== 'none') {
            document.querySelector('.ytp-upnext-cancel-button').click()
          }
        }
      }
    }
  },
  'netflix.com': {
    // 停止在netflix下使用插件的所有功能
    // disable: true,
    fullScreen: 'button.button-nfplayerFullscreen',
    addCurrentTime: 'button.button-nfplayerFastForward',
    subtractCurrentTime: 'button.button-nfplayerBackTen',
    /**
     * 使用netflix自身的调速，因为目前插件没法解决调速导致的服务中断问题
     * https://github.com/xxxily/h5player/issues/234
     * https://github.com/xxxily/h5player/issues/317
     * https://github.com/xxxily/h5player/issues/381
     * https://github.com/xxxily/h5player/issues/179
     * https://github.com/xxxily/h5player/issues/147
     */
    playbackRate: true,
    shortcuts: {
      /**
       * TODO
       * netflix 一些用户习惯使用F键进行全屏，所以此处屏蔽掉f键的下一帧功能
       * 后续开放自定义配置能力后，让用户自行决定是否屏蔽
       */
      register: [
        'f'
      ],
      callback: function (h5Player, taskConf, data) {
        return true
      }
    }
  },
  'bilibili.com': {
    fullScreen: function () {
      const fullScreen = $q('.bpx-player-ctrl-full') || $q('.squirtle-video-fullscreen') || $q('.bilibili-player-video-btn-fullscreen')
      if (fullScreen) {
        fullScreen.click()
        return true
      }
    },
    webFullScreen: function () {
      const oldWebFullscreen = $q('.bilibili-player-video-web-fullscreen')
      const webFullscreenEnter = $q('.bpx-player-ctrl-web-enter') || $q('.squirtle-pagefullscreen-inactive')
      const webFullscreenLeave = $q('.bpx-player-ctrl-web-leave') || $q('.squirtle-pagefullscreen-active')
      if (oldWebFullscreen || (webFullscreenEnter && webFullscreenLeave)) {
        const webFullscreen = oldWebFullscreen || (getComputedStyle(webFullscreenLeave).display === 'none' ? webFullscreenEnter : webFullscreenLeave)
        webFullscreen.click()

        /* 取消弹幕框聚焦，干扰了快捷键的操作 */
        setTimeout(function () {
          const danmaku = $q('.bpx-player-dm-input') || $q('.bilibili-player-video-danmaku-input')
          danmaku && danmaku.blur()
        }, 1000 * 0.1)

        return true
      }
    },
    autoPlay: ['.bpx-player-ctrl-play', '.squirtle-video-start', '.bilibili-player-video-btn-start'],
    switchPlayStatus: ['.bpx-player-ctrl-play', '.squirtle-video-start', '.bilibili-player-video-btn-start'],
    next: ['.bpx-player-ctrl-next', '.squirtle-video-next', '.bilibili-player-video-btn-next'],
    init: function (h5Player, taskConf) {},
    shortcuts: {
      register: [
        'escape'
      ],
      callback: function (h5Player, taskConf, data) {
        const { event } = data
        if (event.keyCode === 27) {
          /* 退出网页全屏 */
          const oldWebFullscreen = $q('.bilibili-player-video-web-fullscreen')
          if (oldWebFullscreen && oldWebFullscreen.classList.contains('closed')) {
            oldWebFullscreen.click()
          } else {
            const webFullscreenLeave = $q('.bpx-player-ctrl-web-leave') || $q('.squirtle-pagefullscreen-active')
            if (getComputedStyle(webFullscreenLeave).display !== 'none') {
              webFullscreenLeave.click()
            }
          }
        }
      }
    }
  },
  't.bilibili.com': {
    fullScreen: 'button[name="fullscreen-button"]'
  },
  'live.bilibili.com': {
    init: function () {
      if (!JSON._stringifySource_) {
        JSON._stringifySource_ = JSON.stringify

        JSON.stringify = function (arg1) {
          try {
            return JSON._stringifySource_.apply(this, arguments)
          } catch (e) {
            console.error('JSON.stringify 解释出错：', e, arg1)
          }
        }
      }
    },
    fullScreen: '.bilibili-live-player-video-controller-fullscreen-btn button',
    webFullScreen: '.bilibili-live-player-video-controller-web-fullscreen-btn button',
    switchPlayStatus: '.bilibili-live-player-video-controller-start-btn button'
  },
  'acfun.cn': {
    fullScreen: '[data-bind-key="screenTip"]',
    webFullScreen: '[data-bind-key="webTip"]',
    switchPlayStatus: function (h5player) {
      /* 无法抢得控制权，只好延迟判断要不要干预 */
      const player = h5player.player()
      const status = player.paused
      setTimeout(function () {
        if (status === player.paused) {
          if (player.paused) {
            player.play()
          } else {
            player.pause()
          }
        }
      }, 200)
    }
  },
  'ixigua.com': {
    fullScreen: ['xg-fullscreen.xgplayer-fullscreen', '.xgplayer-control-item__entry[aria-label="全屏"]', '.xgplayer-control-item__entry[aria-label="退出全屏"]'],
    webFullScreen: ['xg-cssfullscreen.xgplayer-cssfullscreen', '.xgplayer-control-item__entry[aria-label="剧场模式"]', '.xgplayer-control-item__entry[aria-label="退出剧场模式"]']
  },
  'tv.sohu.com': {
    fullScreen: 'button[data-title="网页全屏"]',
    webFullScreen: 'button[data-title="全屏"]'
  },
  'iqiyi.com': {
    fullScreen: '.iqp-btn-fullscreen',
    webFullScreen: '.iqp-btn-webscreen',
    next: '.iqp-btn-next',
    init: function (h5Player, taskConf) {
      // 隐藏水印
      hideDom('.iqp-logo-box')
      // 移除暂停广告
      window.GM_addStyle(`
          div[templatetype="common_pause"]{ display:none }
          .iqp-logo-box{ display:none !important }
      `)
    }
  },
  'youku.com': {
    fullScreen: '.control-fullscreen-icon',
    next: '.control-next-video',
    init: function (h5Player, taskConf) {
      // 隐藏水印
      hideDom('.youku-layer-logo')
    }
  },
  'ted.com': {
    fullScreen: 'button.Fullscreen'
  },
  'qq.com': {
    pause: '.container_inner .txp-shadow-mod',
    play: '.container_inner .txp-shadow-mod',
    shortcuts: {
      register: ['c', 'x', 'z', '1', '2', '3', '4'],
      callback: function (h5Player, taskConf, data) {
        const { event } = data
        const key = event.key.toLowerCase()
        const keyName = 'customShortcuts_' + key

        if (!h5Player[keyName]) {
          /* 第一次按下快捷键使用默认逻辑进行调速 */
          h5Player[keyName] = {
            time: Date.now(),
            playbackRate: h5Player.playbackRate
          }
          return false
        } else {
          /* 第一次操作后的200ms内的操作都是由默认逻辑进行调速 */
          if (Date.now() - h5Player[keyName].time < 200) {
            return false
          }

          /* 判断是否需进行降级处理，利用sessionStorage进行调速 */
          if (h5Player[keyName] === h5Player.playbackRate || h5Player[keyName] === true) {
            if (window.sessionStorage.playbackRate && /(c|x|z|1|2|3|4)/.test(key)) {
              const curSpeed = Number(window.sessionStorage.playbackRate)
              const perSpeed = curSpeed - 0.1 >= 0 ? curSpeed - 0.1 : 0.1
              const nextSpeed = curSpeed + 0.1 <= 4 ? curSpeed + 0.1 : 4
              let targetSpeed = curSpeed
              switch (key) {
                case 'z' :
                  targetSpeed = 1
                  break
                case 'c' :
                  targetSpeed = nextSpeed
                  break
                case 'x' :
                  targetSpeed = perSpeed
                  break
                default :
                  targetSpeed = Number(key)
                  break
              }

              window.sessionStorage.playbackRate = targetSpeed
              h5Player.setCurrentTime(0.01, true)
              h5Player.setPlaybackRate(targetSpeed, true)
              return true
            }

            /* 标识默认调速方案失效，需启用sessionStorage调速方案 */
            h5Player[keyName] = true
          } else {
            /* 标识默认调速方案生效 */
            h5Player[keyName] = false
          }
        }
      }
    },
    fullScreen: 'txpdiv[data-report="window-fullscreen"]',
    webFullScreen: 'txpdiv[data-report="browser-fullscreen"]',
    next: 'txpdiv[data-report="play-next"]',
    init: function (h5Player, taskConf) {
      // 隐藏水印
      hideDom('.txp-watermark')
      hideDom('.txp-watermark-action')
    },
    include: /(v.qq|sports.qq)/
  },
  'pan.baidu.com': {
    fullScreen: function (h5Player, taskConf) {
      h5Player.player().parentNode.querySelector('.vjs-fullscreen-control').click()
    }
  },
  // 'pornhub.com': {
  //   fullScreen: 'div[class*="icon-fullscreen"]',
  //   webFullScreen: 'div[class*="icon-size-large"]'
  // },
  'facebook.com': {
    fullScreen: function (h5Player, taskConf) {
      const actionBtn = h5Player.player().parentNode.querySelectorAll('button')
      if (actionBtn && actionBtn.length > 3) {
        /* 模拟点击倒数第二个按钮 */
        actionBtn[actionBtn.length - 2].click()
        return true
      }
    },
    webFullScreen: function (h5Player, taskConf) {
      const actionBtn = h5Player.player().parentNode.querySelectorAll('button')
      if (actionBtn && actionBtn.length > 3) {
        /* 模拟点击倒数第二个按钮 */
        actionBtn[actionBtn.length - 2].click()
        return true
      }
    },
    shortcuts: {
      /* 在视频模式下按esc键，自动返回上一层界面 */
      register: [
        'escape'
      ],
      /* 自定义快捷键的回调操作 */
      callback: function (h5Player, taskConf, data) {
        eachParentNode(h5Player.player(), function (parentNode) {
          if (parentNode.getAttribute('data-fullscreen-container') === 'true') {
            const goBackBtn = parentNode.parentNode.querySelector('div>a>i>u')
            if (goBackBtn) {
              goBackBtn.parentNode.parentNode.click()
            }
            return true
          }
        })
      }
    }
  },
  'douyu.com': {
    fullScreen: function (h5Player, taskConf) {
      const player = h5Player.player()
      const container = player._fullScreen_.getContainer()
      if (player._isFullScreen_) {
        container.querySelector('div[title="退出窗口全屏"]').click()
      } else {
        container.querySelector('div[title="窗口全屏"]').click()
      }
      player._isFullScreen_ = !player._isFullScreen_
      return true
    },
    webFullScreen: function (h5Player, taskConf) {
      const player = h5Player.player()
      const container = player._fullScreen_.getContainer()
      if (player._isWebFullScreen_) {
        container.querySelector('div[title="退出网页全屏"]').click()
      } else {
        container.querySelector('div[title="网页全屏"]').click()
      }
      player._isWebFullScreen_ = !player._isWebFullScreen_
      return true
    }
  },
  'open.163.com': {
    init: function (h5Player, taskConf) {
      const player = h5Player.player()
      /**
       * 不设置CORS标识，这样才能跨域截图
       * https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_enabled_image
       * https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes
       */
      player.setAttribute('crossOrigin', 'anonymous')
    }
  },
  'agefans.tv': {
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous')
    }
  },
  'chaoxing.com': {
    fullScreen: '.vjs-fullscreen-control'
  },
  'yixi.tv': {
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous')
    }
  },
  'douyin.com': {
    fullScreen: '.xgplayer-fullscreen',
    webFullScreen: '.xgplayer-page-full-screen',
    next: ['.xgplayer-playswitch-next'],
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous')
    }
  },
  'live.douyin.com': {
    fullScreen: '.xgplayer-fullscreen',
    webFullScreen: '.xgplayer-page-full-screen',
    next: ['.xgplayer-playswitch-next'],
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous')
    }
  },
  'zhihu.com': {
    fullScreen: ['button[aria-label="全屏"]', 'button[aria-label="退出全屏"]'],
    play: function (h5Player, taskConf, data) {
      const player = h5Player.player()
      if (player && player.parentNode && player.parentNode.parentNode) {
        const maskWrap = player.parentNode.parentNode.querySelector('div~div:nth-child(3)')
        if (maskWrap) {
          const mask = maskWrap.querySelector('div')
          if (mask && mask.innerText === '') {
            mask.click()
          }
        }
      }
    },
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous')
    }
  },
  'weibo.com': {
    fullScreen: ['button.wbpv-fullscreen-control'],
    // webFullScreen: ['div[title="关闭弹层"]', 'div.wbpv-open-layer-button']
    webFullScreen: ['div.wbpv-open-layer-button']
  }
}

function h5PlayerTccInit (h5Player) {
  return new TCC(taskConf, function (taskName, taskConf, data) {
    try {
      const task = taskConf[taskName]
      const wrapDom = h5Player.getPlayerWrapDom()

      if (!task) { return }

      if (taskName === 'shortcuts') {
        if (isObj(task) && task.callback instanceof Function) {
          return task.callback(h5Player, taskConf, data)
        }
      } else if (task instanceof Function) {
        try {
          return task(h5Player, taskConf, data)
        } catch (e) {
          debug.error('任务配置中心的自定义函数执行失败：', taskName, taskConf, data, e)
          return false
        }
      } else if (typeof task === 'boolean') {
        return task
      } else {
        const selectorList = Array.isArray(task) ? task : [task]
        for (let i = 0; i < selectorList.length; i++) {
          const selector = selectorList[i]

          /* 触发选择器上的点击事件 */
          if (wrapDom && wrapDom.querySelector(selector)) {
          // 在video的父元素里查找，是为了尽可能兼容多实例下的逻辑
            wrapDom.querySelector(selector).click()
            return true
          } else if (document.querySelector(selector)) {
            document.querySelector(selector).click()
            return true
          }
        }
      }
    } catch (e) {
      debug.error('任务配置中心的自定义任务执行失败：', taskName, taskConf, data, e)
      return false
    }
  })
}

export default h5PlayerTccInit
