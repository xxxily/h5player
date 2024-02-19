// ==UserScript==
// @name         HTML5播放器自定义配置
// @name:en      HTML5 player enhanced script custom configuration
// @namespace    https://github.com/xxxily/h5player
// @homepage     https://github.com/xxxily/h5player
// @version      0.0.1
// @description  HTML5播放器自定义配置，按需定制自己的功能
// @description:en  HTML5 video player enhanced script custom configuration
// @author       ankvps
// @icon         https://cdn.jsdelivr.net/gh/xxxily/h5player@master/logo.png
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-start
// @license      GPL
// ==/UserScript==

/* 自定义配置 */
const customConfiguration = {
  media: {
    autoPlay: false,
    playbackRate: 1,
    volume: 1,

    /* 是否允许存储播放进度 */
    allowRestorePlayProgress: {

    },
    /* 视频播放进度映射表 */
    progress: {}
  },
  hotkeys: [
    {
      desc: '网页全屏',
      key: 'shift+enter',
      command: 'setWebFullScreen',
      /* 如需禁用快捷键，将disabled设为true */
      disabled: false
    },
    {
      desc: '全屏',
      key: 'enter',
      command: 'setFullScreen'
    },
    {
      desc: '切换画中画模式',
      key: 'shift+p',
      command: 'togglePictureInPicture'
    },
    {
      desc: '视频截图',
      key: 'shift+s',
      command: 'capture'
    },
    {
      desc: '启用或禁止自动恢复播放进度功能',
      key: 'shift+r',
      command: 'capture'
    },
    {
      desc: '垂直镜像翻转',
      key: 'shift+m',
      command: 'setMirror',
      args: [true]
    },
    {
      desc: '水平镜像翻转',
      key: 'm',
      command: 'setMirror'
    },
    {
      desc: '下载音视频文件（实验性功能）',
      key: 'shift+d',
      command: 'mediaDownload'
    },
    {
      desc: '缩小视频画面 -0.05',
      key: 'shift+x',
      command: 'setScaleDown'
    },
    {
      desc: '放大视频画面 +0.05',
      key: 'shift+c',
      command: 'setScaleUp'
    },
    {
      desc: '恢复视频画面',
      key: 'shift+z',
      command: 'resetTransform'
    },
    {
      desc: '画面向右移动10px',
      key: 'shift+arrowright',
      command: 'setTranslateRight'
    },
    {
      desc: '画面向左移动10px',
      key: 'shift+arrowleft',
      command: 'setTranslateLeft'
    },
    {
      desc: '画面向上移动10px',
      key: 'shift+arrowup',
      command: 'setTranslateUp'
    },
    {
      desc: '画面向下移动10px',
      key: 'shift+arrowdown',
      command: 'setTranslateDown'
    },
    {
      desc: '前进5秒',
      key: 'arrowright',
      command: 'setCurrentTimeUp'
    },
    {
      desc: '后退5秒',
      key: 'arrowleft',
      command: 'setCurrentTimeDown'
    },
    {
      desc: '前进30秒',
      key: 'ctrl+arrowright',
      command: 'setCurrentTimeUp',
      args: [30]
    },
    {
      desc: '后退30秒',
      key: 'ctrl+arrowleft',
      command: 'setCurrentTimeDown',
      args: [-30]
    },
    {
      desc: '音量升高 5%',
      key: 'arrowup',
      command: 'setVolumeUp',
      args: [0.05]
    },
    {
      desc: '音量降低 5%',
      key: 'arrowdown',
      command: 'setVolumeDown',
      args: [-0.05]
    },
    {
      desc: '音量升高 20%',
      key: 'ctrl+arrowup',
      command: 'setVolumeUp',
      args: [0.2]
    },
    {
      desc: '音量降低 20%',
      key: 'ctrl+arrowdown',
      command: 'setVolumeDown',
      args: [-0.2]
    },
    {
      desc: '切换暂停/播放',
      key: 'space',
      command: 'switchPlayStatus'
    },
    {
      desc: '减速播放 -0.1',
      key: 'x',
      command: 'setPlaybackRateDown',
      args: [-0.1]
    },
    {
      desc: '加速播放 +0.1',
      key: 'c',
      command: 'setPlaybackRateUp',
      args: [0.1]
    },
    {
      desc: '正常速度播放',
      key: 'z',
      command: 'resetPlaybackRate'
    },
    {
      desc: '设置1x的播放速度',
      key: 'Digit1',
      command: 'setPlaybackRatePlus',
      args: 1
    },
    {
      desc: '设置1x的播放速度',
      key: 'Numpad1',
      command: 'setPlaybackRatePlus',
      args: 1
    },
    {
      desc: '设置2x的播放速度',
      key: 'Digit2',
      command: 'setPlaybackRatePlus',
      args: 2
    },
    {
      desc: '设置2x的播放速度',
      key: 'Numpad2',
      command: 'setPlaybackRatePlus',
      args: 2
    },
    {
      desc: '设置3x的播放速度',
      key: 'Digit3',
      command: 'setPlaybackRatePlus',
      args: 3
    },
    {
      desc: '设置3x的播放速度',
      key: 'Numpad3',
      command: 'setPlaybackRatePlus',
      args: 3
    },
    {
      desc: '设置4x的播放速度',
      key: 'Digit4',
      command: 'setPlaybackRatePlus',
      args: 4
    },
    {
      desc: '设置4x的播放速度',
      key: 'Numpad4',
      command: 'setPlaybackRatePlus',
      args: 4
    },
    {
      desc: '下一帧',
      key: 'F',
      command: 'freezeFrame',
      args: 1
    },
    {
      desc: '上一帧',
      key: 'D',
      command: 'freezeFrame',
      args: -1
    },
    {
      desc: '增加亮度',
      key: 'E',
      command: 'setBrightnessUp'
    },
    {
      desc: '减少亮度',
      key: 'W',
      command: 'setBrightnessDown'
    },
    {
      desc: '增加对比度',
      key: 'T',
      command: 'setContrastUp'
    },
    {
      desc: '减少对比度',
      key: 'R',
      command: 'setContrastDown'
    },
    {
      desc: '增加饱和度',
      key: 'U',
      command: 'setSaturationUp'
    },
    {
      desc: '减少饱和度',
      key: 'Y',
      command: 'setSaturationDown'
    },
    {
      desc: '增加色相',
      key: 'O',
      command: 'setHueUp'
    },
    {
      desc: '减少色相',
      key: 'I',
      command: 'setHueDown'
    },
    {
      desc: '模糊增加 1 px',
      key: 'K',
      command: 'setBlurUp'
    },
    {
      desc: '模糊减少 1 px',
      key: 'J',
      command: 'setBlurDown'
    },
    {
      desc: '图像复位',
      key: 'Q',
      command: 'resetFilterAndTransform'
    },
    {
      desc: '画面旋转 90 度',
      key: 'S',
      command: 'setRotate'
    },
    {
      desc: '播放下一集',
      key: 'N',
      command: 'setNextVideo'
    },
    {
      desc: '执行JS脚本',
      key: 'ctrl+j ctrl+s',
      command: () => {
        alert('自定义JS脚本-demo')
      },
      when: ''
    }
  ],
  enhance: {
    /* 不禁用默认的调速逻辑，则在多个视频切换时，速度很容易被重置，所以该选项默认开启 */
    blockSetPlaybackRate: true,

    blockSetCurrentTime: false,
    blockSetVolume: false,
    allowExperimentFeatures: false
  },
  debug: false
}

/**
 * 任务配置中心 Task Control Center
 * 用于配置所有无法进行通用处理的任务，如不同网站的全屏方式不一样，必须调用网站本身的全屏逻辑，才能确保字幕、弹幕等正常工作
 **/
const customTaskControlCenter = {
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
  }
}

/* 注册自定义配置信息 */
const pageWin = window.unsafeWindow
if (pageWin) {
  const configuration = { customConfiguration, customTaskControlCenter }
  pageWin.__h5PlayerCustomConfiguration__ = configuration
  pageWin.__setH5PlayerCustomConfiguration__ instanceof Function && pageWin.__setH5PlayerCustomConfiguration__(configuration, 'External')
}
