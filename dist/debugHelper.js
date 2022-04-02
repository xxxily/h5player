// ==UserScript==
// @name         h5player DebugHelper
// @name:en      h5player DebugHelper
// @name:zh      油猴调试助手
// @namespace    https://github.com/xxxily/TampermonkeyDebugHelper
// @version      0.0.1
// @description  Used for local development and debugging of TamperMonkey script
// @description:zh  用于油猴脚本的本地开发调试使用
// @author       xxxily
// @match        http://*/*
// @match        https://*/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        window.close
// @grant        window.focus
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_log
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        GM_webRequest
// @grant        GM_download
// @grant        GM_getTab
// @grant        GM_saveTab
// @grant        GM_getTabs
// @grant        GM_notification
// @grant        GM_setClipboard
// @grant        GM_info
// @require      https://cdnjs.cloudflare.com/ajax/libs/eruda/2.2.1/eruda.js
// @require      https://cdn.jsdelivr.net/npm/socket.io-client@2/dist/socket.io.js
// @require      https://unpkg.com/vue@2.6.11/dist/vue.min.js
// @require      https://unpkg.com/element-ui@2.13.0/lib/index.js
// @resource     elementUiCss https://unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css
// @connect      127.0.0.1
// ==/UserScript==

window._debugMode_ = true
// window.eruda && window.eruda.init()

const elementUiCss = window.GM_getResourceText ("elementUiCss")
window.GM_addStyle (elementUiCss)

/**
 * 后续可以将font文件转成base64，以便更好嵌入到所有网站
 * 转换网址：https://www.giftofspeed.com/base64-encoder/
 */
const elementFonts = `
@font-face {
  font-family: element-icons;
  src: url("https://unpkg.com/element-ui@2.13.0/lib/theme-chalk/fonts/element-icons.woff") format("woff");
}
`
window.GM_addStyle (elementFonts)

const _debugTools_ = {
  ajax: window.GM_xmlhttpRequest || function () { console.log('GM_xmlhttpRequest 未注册，不能进行接口请求') },
  http: function () { return this.ajax.apply(null, arguments) },
  get: function (url, data) {
    return new Promise((resolve, reject) => {
      this.ajax({
        method: 'GET',
        url: url,
        data: data,
        onerror: err => reject(err),
        onload: res => resolve(res)
      })
    })
  },

  /* 通过同步的方式获取pageWindow */
  getPageWindowSync () {
    if (document._win_) return document._win_

    const head = document.head || document.querySelector('head')
    const script = document.createElement('script')
    script.appendChild(document.createTextNode('document._win_ = window'))
    head.appendChild(script)
    head.removeChild(script)

    return document._win_
  },

  loadScriptText (scriptText, id) {
    if (id && document.getElementById(id)) {
      return false
    }

    const script = document.createElement('script')
    const head = document.head || document.getElementsByTagName('head')[0]
    script.appendChild(document.createTextNode(scriptText))
    head.appendChild(script)

    if (id) {
      script.setAttribute('id', id)
    }

    return script
  },

  /**
   * 动态加载脚本内容
   * @param scriptUrl {String} -必选 脚本的url地址
   * @param saveToNamespace {String} -可选 将加载到的脚本内容保存到本地的某个命名空间对象里面
   * @returns {Promise<unknown>}
   */
  getScript (scriptUrl, saveToNamespace) {
    const t = this
    return new Promise((resolve, reject) => {
      t.get(scriptUrl + '?t=' + Date.now()).catch(err => {
        console.log('脚本内容加载出错~ / Error loading script <' + scriptUrl + '>')
        resolve('')
      }).then(res => {
        console.log('脚本内容更新成功~ / Script <' + scriptUrl + '> was updated successfully')
        if (saveToNamespace) {
          window.GM_setValue(saveToNamespace, res.responseText)
        }
        resolve(res.responseText)
      })
    })
  },

  debugScriptUrl: 'http://127.0.0.1:3086/dist/h5player.js',
  uiScriptUrl: 'http://127.0.0.1:3086/dist/h5player-ui.js',

  getDebugScript () {
    const t = this
    return this.getScript(t.debugScriptUrl, 'debugScript')
  },

  getUiScript () {
    const t = this
    return this.getScript(t.uiScriptUrl, 'uiScript')
  },

  async debugScriptHasUpdateHandler () {
    console.log('debugScriptHasUpdate')

    /* 对可视页面进行重载 */
    if (document.visibilityState === 'visible') {
      await _debugTools_.getDebugScript()
      await _debugTools_.getUiScript()
      window.location.reload()
      console.log('window.location.reload')
    }
  },
  runScriptText (scriptText) {
    const runtimeFunc = new Function('window', 'document', 'alert', scriptText)
    runtimeFunc(window, document, window.alert)
  },

  async init () {
    const t = this
    const pageWindow = t.getPageWindowSync()

    /* 将tampermonkey特有的方法或属性挂载到页面的windo上 */
    Reflect.ownKeys(window).forEach(key => {
      if (window[key] && !pageWindow[key]) {
        // console.log('挂载：' + key)
        pageWindow[key] = window[key]
      }
    })

    const debugScript = window.GM_getValue('debugScript') || `
      console.log('未存在要调试的脚本')
    `
    t.loadScriptText(debugScript)

    const uiScript = window.GM_getValue('uiScript') || `
      console.log('未存在要调试的脚本')
    `
    t.loadScriptText(uiScript)

    /* 每次页面加载的时候都去获取并更新脚本 */
    const newDebugScript = await t.getDebugScript()
    const newUiScript = await t.getUiScript()
    if ((newDebugScript && newDebugScript !== debugScript) || (newUiScript && newUiScript !== uiScript)) {
      window.location.reload()
    }
  }
}

_debugTools_.init()

const socket = window.io.connect('http://127.0.0.1:3086')
socket.on('connect', function () {
  console.log('socket connect succeed')
  socket.off('debugScriptHasUpdate', _debugTools_.debugScriptHasUpdateHandler)
  socket.on('debugScriptHasUpdate', _debugTools_.debugScriptHasUpdateHandler)
})

/**
 * 使用说明：
 * 开启 Tampermonkey 的 允许访问文件网址 权限
 * 使用 @require 指向到你要调试的本地文件路径，例如：
 * // @require file:///D:/Tampermonkey/myScript.js
 *
 * 注意，使用该调试助手的时候以为你注入所有需要的特殊权限和功能，如果你使用了这些特殊的权限和功能必须在你的脚本里也注入一遍，否则会出现在调试模式下可以调用的功能，安装到油猴上却使用不了
 *
 * tampermonkey 开发说明文档：
 * https://www.tampermonkey.net/documentation.php?version=4.8.41&ext=dhdg
 */
