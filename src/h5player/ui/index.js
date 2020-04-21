/*!
 * @name         index.js
 * @description  ui界面
 * @version      0.0.1
 * @author       xxxily
 * @date         2020/4/13 am 10:12
 * @github       https://github.com/xxxily
 */

import App from './app'

const h5playerUi = {
  addElementUiCss () {
    if (window.GM_getResourceText && window.GM_addStyle) {
      const elementUiCss = window.GM_getResourceText('elementUiCss')
      window.GM_addStyle(elementUiCss)
    }
  },
  init (useShadow) {
    let uiRoot = null
    const ui = document.createElement('h5-player-ui')
    if (useShadow) {
      ui.attachShadow({ mode: 'open' })
      uiRoot = ui.shadowRoot
    }

    const wrap = document.createElement('div')
    wrap.id = 'h5-player-app'
    if (uiRoot) {
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

    /* 插入到html文档中 */
    if (!document.querySelector('h5-player-ui')) {
      document.body.appendChild(ui)
      window.renderH5playeruiCss(element => {
        if (uiRoot) {
          uiRoot.appendChild(element)
        } else {
          ui.appendChild(element)
        }
      })
    }
  }
}

h5playerUi.init()

export default h5playerUi
