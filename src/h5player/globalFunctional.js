import i18n from './i18n'
import configManager from './configManager'
import { openInTab } from './helper'
import version from './version'

function refreshPage (msg) {
  msg = msg || '配置已更改，马上刷新页面让配置生效？'
  const status = confirm(msg)
  if (status) {
    window.location.reload()
  }
}

/**
 * 全局可调用的功能，会提供给monkeyMenu调用和UI界面的相关位置进行调用
 * 为了便于调用编排所以使用对象的方式进行管理
 */
const globalFunctional = {
  openInTab,
  getHomePageLink: {
    title: i18n.t('website'),
    desc: i18n.t('website'),
    fn: () => {
      const homePageLinks = [
        'https://h5player.anzz.top',
        'https://github.com/xxxily/h5player',
        'https://greasyfork.org/scripts/381682'
      ]

      /* 从homePageLinks中随机选取一个链接返回 */
      return homePageLinks[Math.floor(Math.random() * homePageLinks.length)]
    }
  },

  /* 打开官网 */
  openWebsite: {
    title: i18n.t('website'),
    desc: i18n.t('website'),
    fn: () => {
      openInTab('https://h5player.anzz.top/')
    }
  },
  openAuthorHomePage: {
    title: i18n.t('aboutAuthor'),
    desc: i18n.t('aboutAuthor'),
    fn: () => {
      openInTab('https://github.com/xxxily')
    }
  },
  openHotkeysPage: {
    title: i18n.t('hotkeysDocs'),
    desc: i18n.t('hotkeysDocs'),
    fn: () => {
      openInTab('https://h5player.anzz.top/home/Introduction.html#%E5%BF%AB%E6%8D%B7%E9%94%AE%E5%88%97%E8%A1%A8')
    }
  },
  openProjectGithub: {
    title: 'GitHub',
    desc: 'GitHub',
    fn: () => {
      openInTab('https://github.com/xxxily/h5player')
    }
  },
  openIssuesPage: {
    title: i18n.t('issues'),
    desc: i18n.t('hotkeys'),
    fn: () => {
      openInTab('https://github.com/xxxily/h5player/issues')
    }
  },
  openDonatePage: {
    title: i18n.t('donate'),
    desc: i18n.t('donate'),
    fn: () => {
      openInTab('https://h5player.anzz.top/#%E8%B5%9E')
    }
  },
  openAddGroupChatPage: {
    title: i18n.t('addGroupChat'),
    desc: i18n.t('addGroupChat'),
    fn: () => {
      openInTab('https://h5player.anzz.top/home/#%E4%BA%A4%E6%B5%81%E7%BE%A4')
    }
  },
  openChangeLogPage: {
    title: i18n.t('changeLog'),
    desc: i18n.t('changeLog'),
    fn: () => {
      openInTab('https://h5player.anzz.top/home/changeLog.html')
    }
  },
  openCheckVersionPage: {
    title: i18n.t('checkVersion'),
    desc: i18n.t('checkVersion'),
    fn: () => {
      const confirm = window.confirm(`${i18n.t('currentVersion')}「${version}」\n${i18n.t('checkVersion')}`)
      if (confirm) {
        openInTab('https://greasyfork.org/zh-CN/scripts/381682/versions')
      }
    }
  },
  openRecommendPage: {
    title: i18n.t('recommend'),
    desc: i18n.t('recommend'),
    fn: () => {
      function randomZeroOrOne () {
        return Math.floor(Math.random() * 2)
      }

      if (randomZeroOrOne()) {
        openInTab('https://hello-ai.anzz.top/home/')
      } else {
        openInTab('https://github.com/xxxily/hello-ai')
      }
    }
  },
  openCustomConfigurationEditor: {
    title: i18n.t('openCustomConfigurationEditor'),
    desc: i18n.t('openCustomConfigurationEditor'),
    fn: () => {
      openInTab('https://h5player.anzz.top/tools/json-editor/index.html?mode=tree&saveHandlerName=saveH5PlayerConfig&expandAll=true&json={}')
    }
  },
  /* 切换tampermonkey菜单的展开或折叠状态 */
  toggleExpandedOrCollapsedStateOfMonkeyMenu: {
    title: `${configManager.get('enhance.unfoldMenu') ? i18n.t('foldMenu') : i18n.t('unfoldMenu')} 「${i18n.t('globalSetting')}」`,
    desc: `${configManager.get('enhance.unfoldMenu') ? i18n.t('foldMenu') : i18n.t('unfoldMenu')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.unfoldMenu') ? i18n.t('foldMenu') : i18n.t('unfoldMenu'))
      if (confirm) {
        configManager.setGlobalStorage('enhance.unfoldMenu', !configManager.get('enhance.unfoldMenu'))
        window.location.reload()
      }
    }
  },
  /* 切换脚本的启用或禁用状态 */
  toggleScriptEnableState: {
    title: `${configManager.get('enable') ? i18n.t('disableScript') : i18n.t('enableScript')} 「${i18n.t('localSetting')}」`,
    desc: `${configManager.get('enable') ? i18n.t('disableScript') : i18n.t('enableScript')} 「${i18n.t('localSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enable') ? i18n.t('disableScript') : i18n.t('enableScript'))
      if (confirm) {
        configManager.setLocalStorage('enable', !configManager.get('enable'))
        window.location.reload()
      }
    }
  },
  /* 切换默认播放进度的控制逻辑 */
  toggleSetCurrentTimeFunctional: {
    /* 标题使用函数是为了下次调用的时候读取到最新的状态信息 */
    title: () => `${configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime')} 「${i18n.t('localSetting')}」`,
    desc: () => `${configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime')} 「${i18n.t('localSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime'))
      if (confirm) {
        configManager.setLocalStorage('enhance.blockSetCurrentTime', !configManager.get('enhance.blockSetCurrentTime'))
        window.location.reload()
      }
    }
  },
  toggleSetVolumeFunctional: {
    title: () => `${configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume')} 「${i18n.t('localSetting')}」`,
    desc: () => `${configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume')} 「${i18n.t('localSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume'))
      if (confirm) {
        configManager.setLocalStorage('enhance.blockSetVolume', !configManager.get('enhance.blockSetVolume'))
        window.location.reload()
      }
    }
  },
  toggleSetPlaybackRateFunctional: {
    title: () => `${configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate'))
      if (confirm) {
        /* 倍速参数，只能全局设置 */
        configManager.setGlobalStorage('enhance.blockSetPlaybackRate', !configManager.get('enhance.blockSetPlaybackRate'))
        window.location.reload()
      }
    }
  },
  toggleAcousticGainFunctional: {
    title: () => `${configManager.get('enhance.allowAcousticGain') ? i18n.t('notAllowAcousticGain') : i18n.t('allowAcousticGain')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.get('enhance.allowAcousticGain') ? i18n.t('notAllowAcousticGain') : i18n.t('allowAcousticGain')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.allowAcousticGain') ? i18n.t('notAllowAcousticGain') : i18n.t('allowAcousticGain'))
      if (confirm) {
        configManager.setGlobalStorage('enhance.allowAcousticGain', !configManager.getGlobalStorage('enhance.allowAcousticGain'))
        window.location.reload()
      }
    }
  },
  toggleCrossOriginControlFunctional: {
    title: () => `${configManager.get('enhance.allowCrossOriginControl') ? i18n.t('notAllowCrossOriginControl') : i18n.t('allowCrossOriginControl')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.get('enhance.allowCrossOriginControl') ? i18n.t('notAllowCrossOriginControl') : i18n.t('allowCrossOriginControl')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.allowCrossOriginControl') ? i18n.t('notAllowCrossOriginControl') : i18n.t('allowCrossOriginControl'))
      if (confirm) {
        configManager.setGlobalStorage('enhance.allowCrossOriginControl', !configManager.getGlobalStorage('enhance.allowCrossOriginControl'))
        window.location.reload()
      }
    }
  },
  toggleExperimentFeatures: {
    title: () => `${configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('allowExperimentFeatures')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('allowExperimentFeatures')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('experimentFeaturesWarning'))
      if (confirm) {
        configManager.setGlobalStorage('enhance.allowExperimentFeatures', !configManager.get('enhance.allowExperimentFeatures'))
        window.location.reload()
      }
    }
  },
  toggleExternalCustomConfiguration: {
    title: () => `${configManager.get('enhance.allowExternalCustomConfiguration') ? i18n.t('notAllowExternalCustomConfiguration') : i18n.t('allowExternalCustomConfiguration')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.get('enhance.allowExternalCustomConfiguration') ? i18n.t('notAllowExternalCustomConfiguration') : i18n.t('allowExternalCustomConfiguration')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.allowExternalCustomConfiguration') ? i18n.t('notAllowExternalCustomConfiguration') : i18n.t('allowExternalCustomConfiguration'))
      if (confirm) {
        configManager.setGlobalStorage('enhance.allowExternalCustomConfiguration', !configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration'))
        window.location.reload()
      }
    }
  },
  toggleDebugMode: {
    title: () => `${configManager.getGlobalStorage('debug') ? i18n.t('closeDebugMode') : i18n.t('openDebugMode')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.getGlobalStorage('debug') ? i18n.t('closeDebugMode') : i18n.t('openDebugMode')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.getGlobalStorage('debug') ? i18n.t('closeDebugMode') : i18n.t('openDebugMode'))
      if (confirm) {
        configManager.setGlobalStorage('debug', !configManager.getGlobalStorage('debug'))
        window.location.reload()
      }
    }
  },

  /* 还原全局的默认配置 */
  restoreGlobalConfiguration: {
    title: i18n.t('restoreConfiguration'),
    desc: i18n.t('restoreConfiguration'),
    fn: () => {
      configManager.clear()
      refreshPage()
    }
  },
  openCrossOriginFramePage: {
    title: i18n.t('openCrossOriginFramePage'),
    desc: i18n.t('openCrossOriginFramePage'),
    fn: () => {
      openInTab(location.href)
    }
  },

  /* 切换脚本UI界面的显示或隐藏状态，注意：只有明确为fasle才隐藏GUI，其它情况都要显示GUI，例如null、undefined等都正常显示GUI */
  toggleGUIStatus: {
    title: () => `${configManager.getGlobalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.getGlobalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getGlobalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} 「${i18n.t('globalSetting')}」`)
      if (confirm) {
        configManager.setGlobalStorage('ui.enable', !configManager.getGlobalStorage('ui.enable'))
        window.location.reload()
      }
    }
  },

  /* 切换当前网站下的脚本UI界面的显示或隐藏状态 */
  toggleGUIStatusUnderCurrentSite: {
    title: () => `${configManager.getLocalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} 「${i18n.t('localSetting')}」`,
    desc: () => `${configManager.getLocalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} 「${i18n.t('localSetting')}」`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getLocalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} 「${i18n.t('localSetting')}」`)
      if (confirm) {
        configManager.setLocalStorage('ui.enable', !configManager.getLocalStorage('ui.enable'))
        window.location.reload()
      }
    }
  },
  alwaysShowGraphicalInterface: {
    title: `${i18n.t('toggleStates')}${i18n.t('alwaysShowGraphicalInterface')} 「${i18n.t('globalSetting')}」`,
    desc: `${i18n.t('toggleStates')}${i18n.t('alwaysShowGraphicalInterface')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const alwaysShow = configManager.getGlobalStorage('ui.alwaysShow')
      const confirm = window.confirm(alwaysShow === true ? `${i18n.t('disable')}${i18n.t('alwaysShowGraphicalInterface')} 「${i18n.t('globalSetting')}」` : `${i18n.t('alwaysShowGraphicalInterface')} 「${i18n.t('globalSetting')}」`)
      if (confirm) {
        configManager.setGlobalStorage('ui.alwaysShow', !alwaysShow)
        window.location.reload()
      }
    }
  },

  toggleHotkeysStatus: {
    title: () => `${configManager.getGlobalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.getGlobalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getGlobalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} 「${i18n.t('globalSetting')}」`)
      if (confirm) {
        configManager.setGlobalStorage('enableHotkeys', !configManager.getGlobalStorage('enableHotkeys'))
        window.location.reload()
      }
    }
  },

  toggleHotkeysStatusUnderCurrentSite: {
    title: () => `${configManager.getLocalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} 「${i18n.t('localSetting')}」`,
    desc: () => `${configManager.getLocalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} 「${i18n.t('localSetting')}」`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getLocalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} 「${i18n.t('localSetting')}」`)
      if (confirm) {
        configManager.setLocalStorage('enableHotkeys', !configManager.getLocalStorage('enableHotkeys'))
        window.location.reload()
      }
    }
  },

  setLanguage: {
    title: `${i18n.t('languageSettings')}「${i18n.t('globalSetting')}」`,
    desc: `${i18n.t('languageSettings')}「${i18n.t('globalSetting')}」`,
    fn: (lang) => {
      const confirm = window.confirm(`${i18n.t('languageSettings')}[${lang}] ?`)
      if (confirm) {
        if (lang === 'auto' || i18n.languages()[lang]) {
          configManager.setGlobalStorage('language', lang)
          window.location.reload()
        } else {
          alert('Language not found')
        }
      }
    }
  }
}

export default globalFunctional
