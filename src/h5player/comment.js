// ==UserScript==
// @name         HTML5视频播放器增强脚本
// @name:en      HTML5 video player enhanced script
// @name:zh      HTML5视频播放器增强脚本
// @name:zh-TW   HTML5視頻播放器增強腳本
// @name:ja      HTML5ビデオプレーヤーの拡張スクリプト
// @name:ko      HTML5 비디오 플레이어 고급 스크립트
// @name:ru      HTML5 видео плеер улучшенный скрипт
// @name:de      HTML5 Video Player erweitertes Skript
// @namespace    https://github.com/xxxily/h5player
// @homepage     https://github.com/xxxily/h5player
// @version      3.4.6
// @description  视频增强脚本，支持所有H5视频网站，例如：B站、抖音、腾讯视频、优酷、爱奇艺、西瓜视频、油管（YouTube）、微博视频、知乎视频、搜狐视频、网易公开课、百度网盘、阿里云盘、ted、instagram、twitter等。全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能，为你提供愉悦的在线视频播放体验。还有视频广告快进、在线教程/教育视频倍速快学等能力
// @description:en  Video enhancement script, supports all H5 video websites, such as: Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase Open Course, Baidu network disk, Alibaba cloud disk, ted, instagram, twitter, etc. Full shortcut key control, support: double-speed playback/accelerated playback, video screenshots, picture-in-picture, full-screen web pages, adjusting brightness, saturation, contrast
// @description:zh  视频增强脚本，支持所有H5视频网站，例如：B站、抖音、腾讯视频、优酷、爱奇艺、西瓜视频、油管（YouTube）、微博视频、知乎视频、搜狐视频、网易公开课、百度网盘、阿里云盘、ted、instagram、twitter等。全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能，为你提供愉悦的在线视频播放体验。还有视频广告快进、在线教程/教育视频倍速快学等能力
// @description:zh-TW  視頻增強腳本，支持所有H5視頻網站，例如：B站、抖音、騰訊視頻、優酷、愛奇藝、西瓜視頻、油管（YouTube）、微博視頻、知乎視頻、搜狐視頻、網易公開課、百度網盤、阿里雲盤、ted、instagram、twitter等。全程快捷鍵控制，支持：倍速播放/加速播放、視頻畫面截圖、畫中畫、網頁全屏、調節亮度、飽和度、對比度、自定義配置功能增強等功能，為你提供愉悅的在線視頻播放體驗。還有視頻廣告快進、在線教程/教育視頻倍速快學等能力
// @description:ja  ビデオ拡張スクリプトは、Bilibili、Douyin、Tencent Video、Youku、iQiyi、Xigua Video、YouTube、Weibo Video、Zhihu Video、Sohu Video、NetEase Open Course、Baidu ネットワーク ディスク、Alibaba クラウド ディスクなど、すべての H5 ビデオ Web サイトをサポートします。テッド、インスタグラム、ツイッターなど 完全なショートカット キー コントロール、サポート: 倍速再生/加速再生、ビデオ スクリーンショット、ピクチャー イン ピクチャー、フルスクリーン Web ページ、明るさ、彩度、コントラストの調整、カスタム構成の強化、その他の機能により、快適なオンラインを提供します。ビデオ再生体験。 ビデオ広告、オンライン チュートリアル/教育ビデオなどを早送りする機能もあります。
// @description:ko  비디오 향상 스크립트는 Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase Open Course, Baidu 네트워크 디스크, Alibaba 클라우드 디스크와 같은 모든 H5 비디오 웹사이트를 지원합니다. 테드, 인스타그램, 트위터 등 전체 바로 1가기 키 제어, 지원: 배속 재생/가속 재생, 비디오 스크린샷, PIP(Picture-in-Picture), 전체 화면 웹 페이지, 밝기, 채도, 대비, 사용자 정의 구성 향상 및 기타 기능 조정, 쾌적한 온라인 환경 제공 비디오 재생 경험. 비디오 광고, 온라인 자습서/교육 비디오 등을 빨리 감기하는 기능도 있습니다.
// @description:ru  Сценарий улучшения видео поддерживает все видео-сайты H5, такие как: Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase Open Course, сетевой диск Baidu, облачный диск Alibaba, Тед, инстаграм, твиттер и т.д. Полное управление клавишами быстрого доступа, поддержка: воспроизведение с удвоенной скоростью/ускоренное воспроизведение, скриншоты видео, картинка в картинке, полноэкранные веб-страницы
// @description:de  Videoverbesserungsskript, unterstützt alle H5-Videowebsites, wie z. ted, instagram, twitter usw. Vollständige Tastenkombinationssteuerung, Unterstützung: Wiedergabe mit doppelter Geschwindigkeit/beschleunigte Wiedergabe, Video-Screenshots, Bild-in-Bild, Vollbild-Webseiten, Anpassung von Helligkeit, Sättigung, Kontrast, benutzerdefinierte Konfigurationsverbesserungen und andere Funktionen
// @author       ankvps
// @icon         https://cdn.jsdelivr.net/gh/xxxily/h5player@master/logo.png
// @match        *://*/*
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
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @run-at       document-start
// @require      https://unpkg.com/@popperjs/core@2.6.0/dist/umd/popper.js
// @require      https://unpkg.com/vue@2.6.11/dist/vue.min.js
// @require      https://unpkg.com/element-ui@2.13.0/lib/index.js
// @resource     elementUiCss https://unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css
// @connect      127.0.0.1
// @license      GPL
// ==/UserScript==
(function (w) { if (w) { w.name = 'h5player' } })()
