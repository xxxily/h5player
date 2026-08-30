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

function addTitlePrefix (menus, titlePrefix) {
  menus.forEach(menu => {
    const title = menu.title
    menu.title = () => titlePrefix + (title instanceof Function ? title() : title)
  })
}

let monkeyMenuList = [
  { key: 'openWebsite', type: 'global', ...globalFunctional.openWebsite },
  // { ...globalFunctional.openHotkeysPage },
  {
    key: 'openIssuesPage',
    type: 'global',
    ...globalFunctional.openIssuesPage,
    disable: !configManager.get('enhance.unfoldMenu')
  },
  { key: 'openDonatePage', type: 'global', ...globalFunctional.openDonatePage },
  { key: 'openAiProjectsPage', type: 'global', ...globalFunctional.openAiProjectsPage },
  {
    key: 'toggleScriptEnableState',
    type: 'local',
    ...globalFunctional.toggleScriptEnableState
  },
  {
    key: 'toggleGUIStatusUnderCurrentSite',
    type: 'local',
    ...globalFunctional.toggleGUIStatusUnderCurrentSite,
    disable: configManager.getLocalStorage('ui.enable') !== false
  },
  {
    key: 'toggleGUIStatus',
    type: 'global',
    ...globalFunctional.toggleGUIStatus,
    disable: configManager.getGlobalStorage('ui.enable') === false ? false : !configManager.get('enhance.unfoldMenu')
  },
  {
    key: 'toggleHotkeysStatusUnderCurrentSite',
    type: 'local',
    ...globalFunctional.toggleHotkeysStatusUnderCurrentSite,
    disable: configManager.getLocalStorage('enableHotkeys') !== false
  },
  {
    key: 'toggleHotkeysStatus',
    type: 'global',
    ...globalFunctional.toggleHotkeysStatus,
    disable: configManager.get('enableHotkeys') !== false
  },
  { key: 'openCustomConfigurationEditor', type: 'global', ...globalFunctional.openCustomConfigurationEditor },
  /* 展开或收起菜单 */
  { key: 'toggleExpandedOrCollapsedStateOfMonkeyMenu', type: 'global', ...globalFunctional.toggleExpandedOrCollapsedStateOfMonkeyMenu },
  {
    key: 'restoreGlobalConfiguration',
    type: 'global',
    ...globalFunctional.restoreGlobalConfiguration,
    disable: !configManager.get('enhance.unfoldMenu')
  }
]

if (isInIframe()) {
  /* iframe只保留作用于自身的基础菜单，全局菜单统一交由顶层页面注册 */
  monkeyMenuList = monkeyMenuList.filter(menu => menu.type === 'local')
  addTitlePrefix(monkeyMenuList, `[${location.hostname}]`)
}

/* 菜单构造函数，用于按最新列表同步菜单状态 */
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

  const newMenus = []
  menuOpts.forEach(menu => {
    const menuKey = menu.key || menu.fn
    const registeredIndex = monkeyMenuList.findIndex(item => (item.key || item.fn) === menuKey)

    if (registeredIndex > -1) {
      monkeyMenuList[registeredIndex] = menu
    } else {
      newMenus.push(menu)
    }
  })

  if (before) {
    /* 将菜单追加到其它菜单的前面 */
    monkeyMenuList = newMenus.concat(monkeyMenuList)
  } else {
    monkeyMenuList = monkeyMenuList.concat(newMenus)
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
    let menus = [
      {
        key: 'openCrossOriginFramePage',
        ...globalFunctional.openCrossOriginFramePage,
        type: 'local',
        disable: foldMenu || !isInCrossOriginFrame()
      },
      {
        key: 'toggleSetCurrentTimeFunctional',
        ...globalFunctional.toggleSetCurrentTimeFunctional,
        type: 'local',
        disable: foldMenu
      },
      {
        key: 'toggleSetVolumeFunctional',
        ...globalFunctional.toggleSetVolumeFunctional,
        type: 'local',
        disable: foldMenu
      },
      {
        key: 'toggleSetPlaybackRateFunctional',
        ...globalFunctional.toggleSetPlaybackRateFunctional,
        type: 'global',
        disable: foldMenu
      },
      {
        key: 'toggleAcousticGainFunctional',
        ...globalFunctional.toggleAcousticGainFunctional,
        type: 'global',
        disable: foldMenu
      },
      {
        key: 'toggleCrossOriginControlFunctional',
        ...globalFunctional.toggleCrossOriginControlFunctional,
        type: 'global',
        disable: foldMenu
      },
      {
        key: 'toggleExperimentFeatures',
        ...globalFunctional.toggleExperimentFeatures,
        type: 'global',
        disable: foldMenu
      },
      {
        key: 'toggleExternalCustomConfiguration',
        ...globalFunctional.toggleExternalCustomConfiguration,
        type: 'global',
        disable: foldMenu
      },
      {
        key: 'toggleDebugMode',
        ...globalFunctional.toggleDebugMode,
        type: 'global',
        disable: foldMenu
      }
    ]

    if (isInIframe()) {
      /* iframe只注册作用于自身的菜单，全局菜单统一交由顶层页面注册 */
      menus = menus.filter(menu => menu.type === 'local')
      addTitlePrefix(menus, `[${location.hostname}]`)
    }

    addMenu(menus)

    t._hasRegisterH5playerMenus_ = true
  }
}
