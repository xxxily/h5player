import localStorageProxy from 'local-storage-proxy'
import monkeyStorageProxy from './monkeyStorageProxy'

const config = localStorageProxy('_h5playerConfig_', {
  defaults: {
    autoPlay: true,

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
  lspReset: false,
  storageEventListener: false
})

const globalConfig = monkeyStorageProxy('_h5playerGlobalConfig_', {
  defaults: {
    video: {
      playbackRate: 1
    },
    hotkeys: {}
  },
  lspReset: false,
  storageEventListener: false
})

export { config, globalConfig }
