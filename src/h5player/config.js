import localStorageProxy from 'local-storage-proxy'

const defaultConfig = {
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
}

const config = localStorageProxy('_h5playerConfig_', {
  defaults: defaultConfig,
  lspReset: false,
  storageEventListener: false
})

export default config
