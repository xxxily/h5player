/*!
 * @name         index.js
 * @description  ui界面
 * @version      0.0.1
 * @author       xxxily
 * @date         2020/4/13 am 10:12
 * @github       https://github.com/xxxily
 */

import {
  loadCSSText
} from '../../libs/utils/index'
import App from './app'
import appStatus from './data'

const h5playerUi = {
  addElementUiCss () {
    if (window.GM_getResourceText && window.GM_addStyle) {
      const elementUiCss = window.GM_getResourceText('elementUiCss')
      window.GM_addStyle(elementUiCss)
    }
  },

  close () {
    appStatus.openSettingPanel = false
  },

  open () {
    appStatus.openSettingPanel = true
  },

  toggle () {
    appStatus.openSettingPanel = !appStatus.openSettingPanel
  },

  /* 创建ui用的dom对象 */
  create (useShadow) {
    /* 已创建过则不再重复创建 */
    if (document.querySelector('h5-player-ui')) {
      return true
    }

    let uiRoot = null
    const ui = document.createElement('h5-player-ui')
    ui.style.position = 'fixed'
    ui.style.left = 0
    ui.style.top = 0
    ui.style.zIndex = 99999999999

    if (useShadow) {
      ui.attachShadow({ mode: 'open' })
      uiRoot = ui.shadowRoot
    }

    const wrap = document.createElement('div')
    wrap.id = 'h5-player-app'
    if (uiRoot) {
      /* 注入element css */
      if (window.GM_getResourceText) {
        loadCSSText(window.GM_getResourceText('elementUiCss'), 'elementUiCss', uiRoot)
      } else {
        const styLink = document.createElement('link')
        styLink.rel = 'stylesheet'
        styLink.href = 'https://unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css'
        uiRoot.appendChild(styLink)
      }

      uiRoot.appendChild(wrap)
    } else {
      ui.appendChild(wrap)
    }

    const app = new window.Vue({
      el: wrap,
      components: { App },
      template: '<App />'
    })

    window['h5playerUi-app'] = app

    /**
     * 动态插入所需的css
     * 使用document._renderH5playeruiCss_的原因见webpack的style-loader配置
     * bin/webpack/utils.js 30-50
     */
    document._renderH5playeruiCss_ && document._renderH5playeruiCss_(elements => {
      elements = Array.isArray(elements) ? elements : [elements]
      elements.forEach(element => {
        if (uiRoot) {
          uiRoot.appendChild(element)
        } else {
          ui.appendChild(element)
        }
      })
    })

    /* 插入到html文档中 */
    document.body.appendChild(ui)
  },

  init (useShadow) {
    this.create(useShadow)
  }
}

/* 必须使用shadow DOM 否则界面很容易被其它样式污染 */
h5playerUi.init(true)

export default h5playerUi
