/*!
 * @name         menuManager.js
 * @description  菜单管理器
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/08/11 10:05
 * @github       https://github.com/xxxily
 */
import i18n from './i18n'
import monkeyMenu from './monkeyMenu'
import configManager from './configManager'
import { openInTab } from './helper'
import {
  isInIframe,
  isInCrossOriginFrame
} from '../libs/utils/index'

function refreshPage (msg) {
  msg = msg || '配置已更改，马上刷新页面让配置生效？'
  const status = confirm(msg)
  if (status) {
    window.location.reload()
  }
}

let monkeyMenuList = [
  {
    title: i18n.t('website'),
    fn: () => {
      openInTab('https://h5player.anzz.top/')
    }
  },
  {
    title: i18n.t('hotkeys'),
    fn: () => {
      openInTab('https://h5player.anzz.top/home/Introduction.html#%E5%BF%AB%E6%8D%B7%E9%94%AE%E5%88%97%E8%A1%A8')
    }
  },
  {
    title: i18n.t('issues'),
    fn: () => {
      openInTab('https://github.com/xxxily/h5player/issues')
    }
  },
  {
    title: i18n.t('donate'),
    fn: () => {
      openInTab('https://h5player.anzz.top/#%E8%B5%9E')
    }
  },
  {
    title: i18n.t('setting'),
    disable: true,
    fn: () => {
      openInTab('https://h5player.anzz.top/configure/', null, true)
      window.alert('功能开发中，敬请期待...')
    }
  },
  {
    title: i18n.t('restoreConfiguration'),
    disable: false,
    fn: () => {
      configManager.clear()
      refreshPage()
    }
  }
]

/* 菜单构造函数（必须是函数才能在点击后动态更新菜单状态） */
function menuBuilder () {
  return monkeyMenuList
}

/* 注册动态菜单 */
export function menuRegister () {
  monkeyMenu.build(menuBuilder)
}

/**
 * 增加菜单项
 * @param {Object|Array} menuOpts 菜单的配置项目，多个配置项目用数组表示
 */
export function addMenu (menuOpts, before) {
  menuOpts = Array.isArray(menuOpts) ? menuOpts : [menuOpts]
  menuOpts = menuOpts.filter(item => item.title && !item.disabled)

  if (before) {
    /* 将菜单追加到其它菜单的前面 */
    monkeyMenuList = menuOpts.concat(monkeyMenuList)
  } else {
    monkeyMenuList = monkeyMenuList.concat(menuOpts)
  }

  /* 重新注册菜单 */
  menuRegister()
}

/**
 * 注册跟h5player相关的菜单，只有检测到存在媒体标签了才会注册
 */
export function registerH5playerMenus (h5player) {
  const t = h5player
  const player = t.player()

  if (player && !t._hasRegisterH5playerMenus_) {
    const menus = [
      {
        title: () => i18n.t('openCrossOriginFramePage'),
        disable: !isInCrossOriginFrame(),
        fn: () => {
          openInTab(location.href)
        }
      },
      {
        title: () => configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate'),
        type: 'global',
        fn: () => {
          const confirm = window.confirm(configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate'))
          if (confirm) {
            /* 倍速参数，只能全局设置 */
            configManager.setGlobalStorage('enhance.blockSetPlaybackRate', !configManager.get('enhance.blockSetPlaybackRate'))
            window.location.reload()
          }
        }
      },
      {
        title: () => configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime'),
        type: 'local',
        fn: () => {
          const confirm = window.confirm(configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime'))
          if (confirm) {
            configManager.setLocalStorage('enhance.blockSetCurrentTime', !configManager.get('enhance.blockSetCurrentTime'))
            window.location.reload()
          }
        }
      },
      {
        title: () => configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume'),
        type: 'local',
        fn: () => {
          const confirm = window.confirm(configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume'))
          if (confirm) {
            configManager.setLocalStorage('enhance.blockSetVolume', !configManager.get('enhance.blockSetVolume'))
            window.location.reload()
          }
        }
      },
      {
        title: () => configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('allowExperimentFeatures'),
        type: 'global',
        fn: () => {
          const confirm = window.confirm(configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('experimentFeaturesWarning'))
          if (confirm) {
            configManager.setGlobalStorage('enhance.allowExperimentFeatures', !configManager.get('enhance.allowExperimentFeatures'))
            window.location.reload()
          }
        }
      }
    ]

    let titlePrefix = ''
    if (isInIframe()) {
      titlePrefix = `[${location.hostname}]`

      /* 补充title前缀 */
      menus.forEach(menu => {
        const titleFn = menu.title
        if (titleFn instanceof Function && menu.type === 'local') {
          menu.title = () => titlePrefix + titleFn()
        }
      })
    }

    addMenu(menus)

    t._hasRegisterH5playerMenus_ = true
  }
}
