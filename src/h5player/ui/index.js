/*!
 * @name         index.js
 * @description  ui界面
 * @version      0.0.1
 * @author       xxxily
 * @date         2020/4/13 am 10:12
 * @github       https://github.com/xxxily
 */
const h5playerUi = {
  init () {
    const ui = document.createElement('h5-player-ui')
    ui.attachShadow({ mode: 'open' })
    const uiRoot = ui.shadowRoot

    const wrap = document.createElement('div')
    wrap.id = 'h5-player-app'
    wrap.innerHTML = '{{message}}'
    uiRoot.appendChild(wrap)

    var app = new window.Vue({
      el: wrap,
      data: {
        message: 'Hello Vue!'
      }
    })

    /* 插入到html文档中 */
    if (!document.querySelector('h5-player-ui')) {
      document.body.appendChild(ui)
    }
  }
}

export default h5playerUi
