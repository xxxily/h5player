// ==UserScript==
// @name         油猴调试助手
// @namespace    https://github.com/xxxily/TampermonkeyDebugHelper
// @version      0.0.1
// @description  用于油猴脚本的本地开发调试使用
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
// @require      http://127.0.0.1:3086/dist/h5player.js
// ==/UserScript==


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
