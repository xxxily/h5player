// ==UserScript==
// @name         HTML5视频播放器增强脚本
// @name:en      HTML5 video player enhanced script
// @name:zh      HTML5视频播放器增强脚本
// @name:zh-CN   HTML5视频播放器增强脚本
// @name:zh-TW   HTML5視頻播放器增強腳本
// @name:ja      HTML5ビデオプレーヤーの拡張スクリプト
// @name:ko      HTML5 비디오 플레이어 고급 스크립트
// @name:ru      HTML5 видео плеер улучшенный скрипт
// @name:de      HTML5 Video Player erweitertes Skript
// @namespace    https://github.com/xxxily/h5player
// @homepage     https://github.com/xxxily/h5player
// @version      3.2.5
// @description  HTML5视频播放增强脚本，支持所有H5视频播放网站，全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能。
// @description:en  HTML5 video playback enhanced script, supports all H5 video playback websites, full-length shortcut key control, supports: double-speed playback / accelerated playback, video screenshots, picture-in-picture, full-page webpage, brightness, saturation, contrast, custom configuration enhancement And other functions.
// @description:zh  HTML5视频播放增强脚本，支持所有H5视频播放网站，全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能。
// @description:zh-CN  HTML5视频播放增强脚本，支持所有H5视频播放网站，全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能。
// @description:zh-TW  HTML5視頻播放增強腳本，支持所有H5視頻播放網站，全程快捷鍵控制，支持：倍速播放/加速播放、視頻畫面截圖、畫中畫、網頁全屏、調節亮度、飽和度、對比度、自定義配置功能增強等功能。
// @description:ja  HTML5ビデオ再生拡張スクリプト、すべてのH5ビデオ再生Webサイト、フルレングスのショートカットキーコントロールをサポート、サポート：倍速再生/加速再生、ビデオスクリーンショット、ピクチャーインピクチャー、フルページWebページ、明るさ、彩度、コントラスト、カスタム構成拡張 そして他の機能。
// @description:ko  HTML5 비디오 재생 고급 스크립트, 모든 H5 비디오 재생 웹 사이트 지원, 전체 길이 바로 가기 키 제어 지원 : 2 배속 재생 / 가속 재생, 비디오 스크린 샷, PIP (picture-in-picture), 전체 페이지 웹 페이지, 밝기, 채도, 대비, 사용자 정의 구성 향상 그리고 다른 기능들.
// @description:ru  HTML5 улучшенный сценарий воспроизведения видео, поддерживает все веб-сайты воспроизведения видео H5, полноразмерное управление с помощью сочетания клавиш, поддерживает: двухскоростное воспроизведение / ускоренное воспроизведение, скриншоты видео, картинка в картинке, полностраничную веб-страницу, яркость, насыщенность, контрастность, улучшение пользовательской конфигурации И другие функции.
// @description:de  Verbessertes Skript für die HTML5-Videowiedergabe, unterstützt alle H5-Videowiedergabewebsites, Tastenkombination in voller Länge, unterstützt: Wiedergabe mit doppelter Geschwindigkeit / beschleunigte Wiedergabe, Video-Screenshots, Bild-in-Bild, ganzseitige Webseite, Helligkeit, Sättigung, Kontrast, benutzerdefinierte Konfigurationsverbesserung Und andere Funktionen.
// @author       ankvps
// @icon         https://raw.githubusercontent.com/xxxily/h5player/master/logo.png
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
// @grant        GM_openInTab
// @grant        GM_download
// @run-at       document-start
// @require      https://unpkg.com/vue@2.6.11/dist/vue.min.js
// @require      https://unpkg.com/element-ui@2.13.0/lib/index.js
// @resource     elementUiCss https://unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css
// @license      GPL
// ==/UserScript==
(function (w) { if (w) { w.name = 'h5player' } })()
