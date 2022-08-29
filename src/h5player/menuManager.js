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
import { config } from './config'
import debug from './debug'
import { openInTab } from './helper'

function refreshPage (msg) {
  debug.log('[config]', JSON.stringify(config, null, 2))

  msg = msg || '配置已更改，马上刷新页面让配置生效？'
  const status = confirm(msg)
  if (status) {
    window.location.reload()
  }
}

let monkeyMenuList = [
  {
    title: '还原默认配置',
    disable: true,
    fn: () => {
      localStorage.removeItem('_h5playerConfig_')
      window.GM_deleteValue && window.GM_deleteValue('_h5playerGlobalConfig_')
      refreshPage()
    }
  },
  {
    title: i18n.t('hotkeys'),
    fn: () => {
      openInTab('https://github.com/xxxily/h5player#%E5%BF%AB%E6%8D%B7%E9%94%AE%E5%88%97%E8%A1%A8')
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
      openInTab('https://cdn.jsdelivr.net/gh/xxxily/h5player@master/donate.png')
    }
  },
  {
    title: i18n.t('setting'),
    disable: true,
    fn: () => {
      window.alert('功能开发中，敬请期待...')
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
