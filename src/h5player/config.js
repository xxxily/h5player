import localStorageProxy from 'local-storage-proxy'
import monkeyStorageProxy from './monkeyStorageProxy'
import fixState from './fixState'

/* 针对具体域名的局部配置，不同网站可以有自己的相应配置 */
const defConfig = {
  video: {
    autoPlay: true,
    playbackRate: 1,
    volume: 1,

    /* transform样式规则 */
    transform: {
    /* 放大缩小系数 */
      scale: 1,

      /* 水平位移参数 */
      translate: {
        x: 0,
        y: 0
      },

      /* 旋转角度 */
      rotate: 0,

      /* 水平镜像翻转, 0 或 180 */
      rotateY: 0,
      /* 垂直镜像翻转, 0 或 180 */
      rotateX: 0
    }
  },

  enhance: {
    blockSetPlaybackRate: false,
    blockSetCurrentTime: false
  },

  hotkeys: {},

  /**
   * TODO 控制是否开启/关闭调试模式，功能带补充
   */
  debug: true
}

/* 全局配置，优先级低于defConfig */
const defGlobalConfig = {
  video: {
    playbackRate: 1,
    volume: 1
  },
  hotkeys: {},

  /**
   * TODO 控制是否开启/关闭调试模式，功能带补充
   */
  debug: true
}

const config = localStorageProxy('_h5playerConfig_', {
  defaults: defConfig,
  lspReset: false,
  storageEventListener: false
})

const globalConfig = monkeyStorageProxy('_h5playerGlobalConfig_', {
  defaults: defGlobalConfig,
  lspReset: false,
  storageEventListener: false
})

/* 修复配置项状态管理器的配置项同步异常问题 */
fixState(config, defConfig)
fixState(globalConfig, defGlobalConfig)

export { config, globalConfig }
