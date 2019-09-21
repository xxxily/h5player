// ==UserScript==
// @name         HTML5播放器增强插件 - 修订版
// @namespace    https://github.com/xxxily/h5player
// @homepage     https://github.com/xxxily/h5player
// @version      2.6.1
// @description  对HTML5播放器的功能进行增强，支持所有使用H5进行视频播放的网站，快捷键仿照Potplayer的快捷键布局，实现调节亮度，饱和度，对比度，速度等功能。
// @author       ankvps
// @match        http://*/*
// @match        https://*/*
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getTab
// @grant        GM_saveTab
// @grant        GM_getTabs
// @run-at       document-start
// ==/UserScript==
(function (w) { if (w) { w.name = 'h5player' } })()
