import TCC from '../libs/TCC/index'
import {
  isObj,
  hideDom
} from '../libs/utils/index'

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
    fullScreen: '.fullscreen-btn',
    exitFullScreen: '.exit-fullscreen-btn',
    webFullScreen: function () {},
    exitWebFullScreen: '.exit-fullscreen-btn',
    autoPlay: '.player-start-btn',
    pause: '.player-pause',
    play: '.player-play',
    switchPlayStatus: '.player-play',
    playbackRate: function () {},
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
    /* 当前域名下需包含的路径信息，默认整个域名下所有路径可用 必须是正则 */
    include: /^.*/,
    /* 当前域名下需排除的路径信息，默认不排除任何路径 必须是正则 */
    exclude: /\t/
  },
  'youtube.com': {
    // webFullScreen: 'button.ytp-size-button',
    fullScreen: 'button.ytp-fullscreen-button'
  },
  'netflix.com': {
    fullScreen: 'button.button-nfplayerFullscreen',
    addCurrentTime: 'button.button-nfplayerFastForward',
    subtractCurrentTime: 'button.button-nfplayerBackTen'
  },
  'bilibili.com': {
    fullScreen: '[data-text="进入全屏"]',
    webFullScreen: '[data-text="网页全屏"]',
    autoPlay: '.bilibili-player-video-btn-start',
    switchPlayStatus: '.bilibili-player-video-btn-start'
  },
  't.bilibili.com': {
    fullScreen: 'button[name="fullscreen-button"]'
  },
  'live.bilibili.com': {
    fullScreen: '.bilibili-live-player-video-controller-fullscreen-btn button',
    webFullScreen: '.bilibili-live-player-video-controller-web-fullscreen-btn button',
    switchPlayStatus: '.bilibili-live-player-video-controller-start-btn button'
  },
  'iqiyi.com': {
    fullScreen: '.iqp-btn-fullscreen',
    webFullScreen: '.iqp-btn-webscreen',
    init: function (h5Player, taskConf) {
      // 隐藏水印
      hideDom('.iqp-logo-box')
      // 移除暂停广告
      // eslint-disable-next-line no-undef
      GM_addStyle(`
          div[templatetype="common_pause"]{ display:none }
          .iqp-logo-box{ display:none !important }
      `)
    }
  },
  'youku.com': {
    fullScreen: '.control-fullscreen-icon',
    init: function (h5Player, taskConf) {
      // 隐藏水印
      hideDom('.youku-layer-logo')
    }
  },
  'ted.com': {
    fullScreen: 'button.Fullscreen'
  },
  'qq.com': {
    pause: '.container_inner .txp-shadow-mod]',
    play: '.container_inner .txp-shadow-mod',
    shortcuts: {
      register: ['c', 'x', 'z'],
      callback: function (h5Player, taskConf, data) {
        const { event } = data
        const key = event.key.toLowerCase()
        const speedItems = document.querySelectorAll('.container_inner txpdiv[data-role="txp-button-speed-list"] .txp_menuitem')

        /* 利用sessionStorage下的playbackRate进行设置 */
        if (window.sessionStorage.playbackRate && /(c|x|z)/.test(key)) {
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
          }
          window.sessionStorage.playbackRate = targetSpeed
          h5Player.setCurrentTime(0.1, true)
          h5Player.setPlaybackRate(targetSpeed, true)
          return true
        }

        /* 模拟点击触发 */
        if (speedItems.length >= 3 && /(c|x|z)/.test(key)) {
          let curIndex = 1
          speedItems.forEach((item, index) => {
            if (item.classList.contains('txp_current')) {
              curIndex = index
            }
          })
          const perIndex = curIndex - 1 >= 0 ? curIndex - 1 : 0
          const nextIndex = curIndex + 1 < speedItems.length ? curIndex + 1 : speedItems.length - 1

          let target = speedItems[1]
          switch (key) {
            case 'z' :
              target = speedItems[1]
              break
            case 'c' :
              target = speedItems[nextIndex]
              break
            case 'x' :
              target = speedItems[perIndex]
              break
          }

          target.click()
          const speedNum = Number(target.innerHTML.replace('x'))
          h5Player.setPlaybackRate(speedNum)
        }
      }
    },
    fullScreen: 'txpdiv[data-report="window-fullscreen"]',
    webFullScreen: 'txpdiv[data-report="browser-fullscreen"]',
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
  }
}

function h5PlayerTccInit (h5Player) {
  return new TCC(taskConf, function (taskName, taskConf, data) {
    const task = taskConf[taskName]
    const wrapDom = h5Player.getPlayerWrapDom()

    if (taskName === 'shortcuts') {
      if (isObj(task) && task.callback instanceof Function) {
        return task.callback(h5Player, taskConf, data)
      }
    } else if (task instanceof Function) {
      try {
        return task(h5Player, taskConf, data)
      } catch (e) {
        console.error('TCC自定义函数任务执行失败：', h5Player, taskConf, data)
        return false
      }
    } else {
      /* 触发选择器上的点击事件 */
      if (wrapDom && wrapDom.querySelector(task)) {
        // 在video的父元素里查找，是为了尽可能兼容多实例下的逻辑
        wrapDom.querySelector(task).click()
        return true
      } else if (document.querySelector(task)) {
        document.querySelector(task).click()
        return true
      }
    }
  })
}

export default h5PlayerTccInit
