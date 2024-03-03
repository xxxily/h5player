/*!
 * @name         menuManager.js
 * @description  菜单管理器
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/08/11 10:05
 * @github       https://github.com/xxxily
 */
import monkeyMenu from './monkeyMenu'
import configManager from './configManager'
import {
  isInIframe,
  isInCrossOriginFrame
} from '../libs/utils/index'
import globalFunctional from './globalFunctional'

let monkeyMenuList = [
  { ...globalFunctional.openWebsite },
  // { ...globalFunctional.openHotkeysPage },
  {
    ...globalFunctional.openIssuesPage,
    disable: !configManager.get('enhance.unfoldMenu')
  },
  { ...globalFunctional.openDonatePage },
  {
    ...globalFunctional.toggleScriptEnableState
  },
  {
    ...globalFunctional.toggleGUIStatusUnderCurrentSite,
    disable: configManager.getLocalStorage('ui.enable') !== false
  },
  {
    ...globalFunctional.toggleGUIStatus,
    disable: configManager.getGlobalStorage('ui.enable') === false ? false : !configManager.get('enhance.unfoldMenu')
  },
  {
    ...globalFunctional.toggleHotkeysStatusUnderCurrentSite,
    disable: configManager.getLocalStorage('enableHotkeys') !== false
  },
  {
    ...globalFunctional.toggleHotkeysStatus,
    disable: configManager.get('enableHotkeys') !== false
  },
  { ...globalFunctional.openCustomConfigurationEditor },
  /* 展开或收起菜单 */
  { ...globalFunctional.toggleExpandedOrCollapsedStateOfMonkeyMenu },
  {
    ...globalFunctional.restoreGlobalConfiguration,
    disable: !configManager.get('enhance.unfoldMenu')
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
  const foldMenu = !configManager.get('enhance.unfoldMenu')

  if (player && !t._hasRegisterH5playerMenus_) {
    const menus = [
      {
        ...globalFunctional.openCrossOriginFramePage,
        disable: foldMenu || !isInCrossOriginFrame()
      },
      {
        ...globalFunctional.toggleSetCurrentTimeFunctional,
        type: 'local',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleSetVolumeFunctional,
        type: 'local',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleSetPlaybackRateFunctional,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleAcousticGainFunctional,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleCrossOriginControlFunctional,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleExperimentFeatures,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleExternalCustomConfiguration,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleDebugMode,
        disable: foldMenu
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
