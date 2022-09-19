// import localStorageProxy from 'local-storage-proxy'
import monkeyStorageProxy from './monkeyStorageProxy'
import fixState from './fixState'
import {
  getValByPath,
  setValByPath
} from '../libs/utils/index'

/* 针对具体域名的局部配置，不同网站可以有自己的相应配置 */
const defConfig = {
  video: {
    autoPlay: true,
    playbackRate: 1,

    /**
     * 对音量进行统一管理容易产生误判，例如本身静音播放的广告视频或处于未激活TAB的背景视频
     * 所以应尽量使用网站默认的初始音量设置
     */
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
    /* 不禁用默认的调速逻辑，则在多个视频切换时，速度很容易被重置，所以该选项默认开启 */
    blockSetPlaybackRate: true,

    blockSetCurrentTime: null,
    blockSetVolume: null
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

  enhance: {
    /* 不禁用默认的调速逻辑，则在多个视频切换时，速度很容易被重置，所以该选项默认开启 */
    blockSetPlaybackRate: true,

    blockSetCurrentTime: false,
    blockSetVolume: false
  },

  /**
   * TODO 控制是否开启/关闭调试模式，功能带补充
   */
  debug: true
}

const config = defConfig

try {
  // config = localStorageProxy('_h5playerConfig_', {
  //   defaults: defConfig,
  //   lspReset: false,
  //   storageEventListener: false
  // })
} catch (e) {
  console.error('localStorageProxy error:', e)
}

const globalConfig = monkeyStorageProxy('_h5playerGlobalConfig_', {
  defaults: defGlobalConfig,
  lspReset: false,
  storageEventListener: false
})

/* 修复配置项状态管理器的配置项同步异常问题 */
// fixState(config, defConfig)
fixState(globalConfig, defGlobalConfig)

/**
 * 根据本域配置和全局配置，在localState优先的前提下，找出最终应该应用的配置结果
 * @param statePath {string} -必选 配置的路径名，例如：'enhance.blockSetVolume'
 * @returns
 */
function getConfigState (statePath) {
  const localState = getValByPath(config, statePath)
  const globalState = getValByPath(globalConfig, statePath)

  /* localState优先，如果localState没有定义，则使用globalState */
  if (typeof localState === 'undefined' || localState === null) {
    return globalState
  } else {
    return localState
  }
}

/**
 * 根据本域配置和全局配置，在localState优先的前提下，将值设置给localState还是globalState
 * @param statePath {String} -必选 配置的路径名，例如：'enhance.blockSetVolume'
 * @param val {Any} -必选 要设置的任意值
 * @returns {Boolean} 返回true表示设置成功
 */
function setConfigState (statePath, val) {
  const localState = getValByPath(config, statePath)
  const globalState = getValByPath(globalConfig, statePath)

  /* localState优先，如果localState没有定义，则说明应该设置globalState */
  if (typeof localState === 'undefined' || localState === null) {
    return setValByPath(globalState, statePath, val)
  } else {
    return setValByPath(localState, statePath, val)
  }
}

export { config, globalConfig, getConfigState, setConfigState }
