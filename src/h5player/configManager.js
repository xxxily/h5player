import { getPageWindow } from './helper'
import ConfigManager from '../libs/monkey/configManager'

const configManager = new ConfigManager({
  prefix: '_h5player_',
  config: {
    enable: true,
    media: {
      autoPlay: false,
      playbackRate: 1,
      volume: 1,

      /* 最后一次设定的播放速度，默认1.5 */
      lastPlaybackRate: 1.5,

      /* 是否允许存储播放进度 */
      allowRestorePlayProgress: {

      },
      /* 视频播放进度映射表 */
      progress: {}
    },
    enableHotkeys: true,
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
        command: 'switchRestorePlayProgressStatus'
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
        command: 'setScaleDown',
        args: -0.05
      },
      {
        desc: '放大视频画面 +0.05',
        key: 'shift+c',
        command: 'setScaleUp',
        args: 0.05
      },
      {
        desc: '恢复视频画面',
        key: 'shift+z',
        command: 'resetTransform'
      },
      {
        desc: '画面向右移动10px',
        key: 'shift+arrowright',
        command: 'setTranslateRight',
        args: 10
      },
      {
        desc: '画面向左移动10px',
        key: 'shift+arrowleft',
        command: 'setTranslateLeft',
        args: -10
      },
      {
        desc: '画面向上移动10px',
        key: 'shift+arrowup',
        command: 'setTranslateUp',
        args: 10
      },
      {
        desc: '画面向下移动10px',
        key: 'shift+arrowdown',
        command: 'setTranslateDown',
        args: -10
      },
      {
        desc: '前进5秒',
        key: 'arrowright',
        command: 'setCurrentTimeUp',
        args: 5
      },
      {
        desc: '后退5秒',
        key: 'arrowleft',
        command: 'setCurrentTimeDown',
        args: -5
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
        desc: '减速播放',
        key: 'x',
        command: 'setPlaybackRateDown',
        args: -0.1
      },
      {
        desc: '加速播放',
        key: 'c',
        command: 'setPlaybackRateUp',
        args: 0.1
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
        desc: '插入debugger断点',
        key: 'ctrl+shift+alt+d',
        command: 'debuggerNow'
      },
      {
        desc: '执行JS脚本',
        key: 'ctrl+j ctrl+s',
        command: () => {
          alert('自定义JS脚本')
        },
        when: ''
      }
    ],
    mouse: {
      enable: false,
      /* 长按多久响应鼠标长按事件 */
      longPressTime: 600
    },
    ui: {
      enable: true,
      alwaysShow: false
    },
    download: {
      enable: true
    },
    enhance: {
    /* 不禁用默认的调速逻辑，则在多个视频切换时，速度很容易被重置，所以该选项默认开启 */
      blockSetPlaybackRate: true,

      blockSetCurrentTime: false,
      blockSetVolume: false,
      allowExperimentFeatures: false,
      allowExternalCustomConfiguration: false,
      /* 是否开启音量增益功能 */
      allowAcousticGain: false,
      /* 是否开启跨域控制 */
      allowCrossOriginControl: true,
      unfoldMenu: false
    },
    language: 'auto',
    debug: false,
    blacklist: {
      /**
       * url黑名单，在这些url下面禁止运行h5player脚本
       * 以适应一些难以排查、或难以通一兼容的页面，但又不希望对整个网站进行禁用的情况
       * 例如：B站首页
       */
      urls: [
        'https://www.bilibili.com/'
      ],
      domains: []
    }
  }
})

async function initUiConfigManager () {
  const isUiConfigPage = location.href.indexOf('h5player.anzz.top/tools/json-editor') > -1 || location.href.indexOf('ankvps.gitee.io/h5player/tools/json-editor') > -1
  const isUiConfigMode = location.href.indexOf('saveHandlerName=saveH5PlayerConfig') > -1
  if (!isUiConfigPage || !isUiConfigMode) return

  function init (pageWindow) {
    const config = JSON.parse(JSON.stringify(configManager.getConfObj()))
    delete config.recommendList
    if (Array.isArray(config.hotkeys)) {
      /* 给hotkeys的各自项添加disabled选项，以便在界面侧可以快速禁用或启用某个项 */
      config.hotkeys.forEach(item => {
        if (item.disabled === undefined) {
          item.disabled = false
        }
      })
    }

    pageWindow.jsonEditor.set(config)

    // pageWindow.jsonEditor.collapseAll()
    pageWindow.jsonEditor.expandAll()

    pageWindow.saveH5PlayerConfig = function (editor) {
      try {
        const defConfig = configManager.getConfObj()
        const newConfig = editor.get()
        newConfig.recommendList = defConfig.recommendList || []
        configManager.setGlobalStorageByObj(newConfig)
        alert('配置已更新')
      } catch (e) {
        alert(`配置格式异常，保存失败：${e}`)
      }
    }
  }

  let checkCount = 0
  function checkJSONEditor (pageWindow) {
    if (!pageWindow.JSONEditor) {
      if (checkCount < 30) {
        setTimeout(() => {
          checkCount++
          checkJSONEditor(pageWindow)
        }, 200)
      }

      return
    }

    init(pageWindow)
  }

  const pageWindow = await getPageWindow()

  if (!pageWindow) {
    return
  }

  checkJSONEditor(pageWindow)
}
initUiConfigManager()

export default configManager
