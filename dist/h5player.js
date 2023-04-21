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
// @version      3.7.5
// @description  视频增强脚本，支持所有H5视频网站，例如：B站、抖音、腾讯视频、优酷、爱奇艺、西瓜视频、油管（YouTube）、微博视频、知乎视频、搜狐视频、网易公开课、百度网盘、阿里云盘、ted、instagram、twitter等。全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能，为你提供愉悦的在线视频播放体验。还有视频广告快进、在线教程/教育视频倍速快学、视频文件下载等能力
// @description:en  Video enhancement script, supports all H5 video websites, such as: Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase Open Course, Baidu network disk, Alibaba cloud disk, ted, instagram, twitter, etc. Full shortcut key control, support: double-speed playback/accelerated playback, video screenshots, picture-in-picture, full-screen web pages, adjusting brightness, saturation, contrast
// @description:zh  视频增强脚本，支持所有H5视频网站，例如：B站、抖音、腾讯视频、优酷、爱奇艺、西瓜视频、油管（YouTube）、微博视频、知乎视频、搜狐视频、网易公开课、百度网盘、阿里云盘、ted、instagram、twitter等。全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能，为你提供愉悦的在线视频播放体验。还有视频广告快进、在线教程/教育视频倍速快学、视频文件下载等能力
// @description:zh-TW  視頻增強腳本，支持所有H5視頻網站，例如：B站、抖音、騰訊視頻、優酷、愛奇藝、西瓜視頻、油管（YouTube）、微博視頻、知乎視頻、搜狐視頻、網易公開課、百度網盤、阿里雲盤、ted、instagram、twitter等。全程快捷鍵控制，支持：倍速播放/加速播放、視頻畫面截圖、畫中畫、網頁全屏、調節亮度、飽和度、對比度、自定義配置功能增強等功能，為你提供愉悅的在線視頻播放體驗。還有視頻廣告快進、在線教程/教育視頻倍速快學、視頻文件下載等能力
// @description:ja  ビデオ拡張スクリプトは、Bilibili、Douyin、Tencent Video、Youku、iQiyi、Xigua Video、YouTube、Weibo Video、Zhihu Video、Sohu Video、NetEase Open Course、Baidu ネットワーク ディスク、Alibaba クラウド ディスクなど、すべての H5 ビデオ Web サイトをサポートします。テッド、インスタグラム、ツイッターなど 完全なショートカット キー コントロール、サポート: 倍速再生/加速再生、ビデオ スクリーンショット、ピクチャー イン ピクチャー、フルスクリーン Web ページ、明るさ、彩度、コントラストの調整、カスタム構成の強化、その他の機能により、快適なオンラインを提供します。ビデオ再生体験。 ビデオ広告、オンライン チュートリアル/教育ビデオなどを早送りする機能もあります。
// @description:ko  비디오 향상 스크립트는 Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase Open Course, Baidu 네트워크 디스크, Alibaba 클라우드 디스크와 같은 모든 H5 비디오 웹사이트를 지원합니다. 테드, 인스타그램, 트위터 등 전체 바로 1가기 키 제어, 지원: 배속 재생/가속 재생, 비디오 스크린샷, PIP(Picture-in-Picture), 전체 화면 웹 페이지, 밝기, 채도, 대비, 사용자 정의 구성 향상 및 기타 기능 조정, 쾌적한 온라인 환경 제공 비디오 재생 경험. 비디오 광고, 온라인 자습서/교육 비디오 등을 빨리 감기하는 기능도 있습니다.
// @description:ru  Сценарий улучшения видео поддерживает все видео-сайты H5, такие как: Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase Open Course, сетевой диск Baidu, облачный диск Alibaba, Тед, инстаграм, твиттер и т.д. Полное управление клавишами быстрого доступа, поддержка: воспроизведение с удвоенной скоростью/ускоренное воспроизведение, скриншоты видео, картинка в картинке, полноэкранные веб-страницы
// @description:de  Videoverbesserungsskript, unterstützt alle H5-Videowebsites, wie z. ted, instagram, twitter usw. Vollständige Tastenkombinationssteuerung, Unterstützung: Wiedergabe mit doppelter Geschwindigkeit/beschleunigte Wiedergabe, Video-Screenshots, Bild-in-Bild, Vollbild-Webseiten, Anpassung von Helligkeit, Sättigung, Kontrast, benutzerdefinierte Konfigurationsverbesserungen und andere Funktionen
// @author       ankvps
// @icon         data:image/png;base64,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
// @match        *://*/*
// @exclude      *://yiyan.baidu.com/*
// @exclude      *://*.bing.com/search*
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
// @grant        GM_setClipboard
// @run-at       document-start
// @license      GPL
// ==/UserScript==
(function (w) { if (w) { w.name = 'h5player'; } })();

/**
 * 元素监听器
 * @param selector -必选
 * @param fn -必选，元素存在时的回调
 * @param shadowRoot -可选 指定监听某个shadowRoot下面的DOM元素
 * 参考：https://javascript.ruanyifeng.com/dom/mutationobserver.html
 */
function ready (selector, fn, shadowRoot) {
  const win = window;
  const docRoot = shadowRoot || win.document.documentElement;
  if (!docRoot) return false
  const MutationObserver = win.MutationObserver || win.WebKitMutationObserver;
  const listeners = docRoot._MutationListeners || [];

  function $ready (selector, fn) {
    // 储存选择器和回调函数
    listeners.push({
      selector: selector,
      fn: fn
    });

    /* 增加监听对象 */
    if (!docRoot._MutationListeners || !docRoot._MutationObserver) {
      docRoot._MutationListeners = listeners;
      docRoot._MutationObserver = new MutationObserver(() => {
        for (let i = 0; i < docRoot._MutationListeners.length; i++) {
          const item = docRoot._MutationListeners[i];
          check(item.selector, item.fn);
        }
      });

      docRoot._MutationObserver.observe(docRoot, {
        childList: true,
        subtree: true
      });
    }

    // 检查节点是否已经在DOM中
    check(selector, fn);
  }

  function check (selector, fn) {
    const elements = docRoot.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element._MutationReadyList_ = element._MutationReadyList_ || [];
      if (!element._MutationReadyList_.includes(fn)) {
        element._MutationReadyList_.push(fn);
        fn.call(element, element);
      }
    }
  }

  const selectorArr = Array.isArray(selector) ? selector : [selector];
  selectorArr.forEach(selector => $ready(selector, fn));
}

/**
 * 某些网页用了attachShadow closed mode，需要open才能获取video标签，例如百度云盘
 * 解决参考：
 * https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn#closed
 * https://stackoverflow.com/questions/54954383/override-element-prototype-attachshadow-using-chrome-extension
 */
function hackAttachShadow () {
  if (window._hasHackAttachShadow_) return
  try {
    window._shadowDomList_ = [];
    window.Element.prototype._attachShadow = window.Element.prototype.attachShadow;
    window.Element.prototype.attachShadow = function () {
      const arg = arguments;
      if (arg[0] && arg[0].mode) {
        // 强制使用 open mode
        arg[0].mode = 'open';
      }
      const shadowRoot = this._attachShadow.apply(this, arg);
      // 存一份shadowDomList
      window._shadowDomList_.push(shadowRoot);

      /* 让shadowRoot里面的元素有机会访问shadowHost */
      shadowRoot._shadowHost = this;

      // 在document下面添加 addShadowRoot 自定义事件
      const shadowEvent = new window.CustomEvent('addShadowRoot', {
        shadowRoot,
        detail: {
          shadowRoot,
          message: 'addShadowRoot',
          time: new Date()
        },
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(shadowEvent);

      return shadowRoot
    };
    window._hasHackAttachShadow_ = true;
  } catch (e) {
    console.error('hackAttachShadow error by h5player plug-in', e);
  }
}

/*!
 * @name         original.js
 * @description  存储部分重要的原生函数，防止被外部污染，此逻辑应尽可能前置，否则存储的将是污染后的函数
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/10/16 10:32
 * @github       https://github.com/xxxily
 */

const original = {
  // 防止defineProperty和defineProperties被AOP脚本重写
  Object: {
    defineProperty: Object.defineProperty,
    defineProperties: Object.defineProperties
  },

  // 防止此类玩法：https://juejin.cn/post/6865910564817010702
  Proxy,

  Map,
  map: {
    clear: Map.prototype.clear,
    set: Map.prototype.set,
    has: Map.prototype.has,
    get: Map.prototype.get
  },

  console: {
    log: console.log,
    info: console.info,
    error: console.error,
    warn: console.warn,
    table: console.table
  },

  ShadowRoot,
  HTMLMediaElement,
  CustomEvent,
  // appendChild: Node.prototype.appendChild,

  JSON: {
    parse: JSON.parse,
    stringify: JSON.stringify
  },

  alert,
  confirm,
  prompt
};

/**
 * 媒体标签检测，可以检测出viode、audio、以及其它标签名经过改造后的媒体Element
 * @param {Function} handler -必选 检出后要执行的回调函数
 * @returns mediaElementList
 */
const mediaCore = (function () {
  let hasMediaCoreInit = false;
  let hasProxyHTMLMediaElement = false;
  let originDescriptors = {};
  const originMethods = {};
  const mediaElementList = [];
  const mediaElementHandler = [];
  const mediaMap = new original.Map();

  const firstUpperCase = str => str.replace(/^\S/, s => s.toUpperCase());
  function isHTMLMediaElement (el) {
    return el instanceof original.HTMLMediaElement
  }

  /**
   * 根据HTMLMediaElement的实例对象创建增强控制的相关API函数，从而实现锁定播放倍速，锁定暂停和播放等增强功能
   * @param {*} mediaElement - 必选，HTMLMediaElement的具体实例，例如网页上的video标签或new Audio()等
   * @returns mediaPlusApi
   */
  function createMediaPlusApi (mediaElement) {
    if (!isHTMLMediaElement(mediaElement)) { return false }

    let mediaPlusApi = original.map.get.call(mediaMap, mediaElement);
    if (mediaPlusApi) {
      return mediaPlusApi
    }

    /* 创建MediaPlusApi对象 */
    mediaPlusApi = {};
    const mediaPlusBaseApi = {
      /**
       * 创建锁，阻止外部逻辑操作mediaElement相关的属性或函数
       * 这里的锁逻辑只是数据状态标注和切换，具体的锁功能需在
       * proxyPrototypeMethod和hijackPrototypeProperty里实现
       */
      lock (keyName, duration) {
        const infoKey = `__${keyName}_info__`;
        mediaPlusApi[infoKey] = mediaPlusApi[infoKey] || {};
        mediaPlusApi[infoKey].lock = true;

        /* 解锁时间信息 */
        duration = Number(duration);
        if (!Number.isNaN(duration) && duration > 0) {
          mediaPlusApi[infoKey].unLockTime = Date.now() + duration;
        }

        // original.console.log(`[mediaPlusApi][lock][${keyName}] ${duration}`)
      },
      unLock (keyName) {
        const infoKey = `__${keyName}_info__`;
        mediaPlusApi[infoKey] = mediaPlusApi[infoKey] || {};
        mediaPlusApi[infoKey].lock = false;
        mediaPlusApi[infoKey].unLockTime = Date.now() - 100;

        // original.console.log(`[mediaPlusApi][unLock][${keyName}]`)
      },
      isLock (keyName) {
        const info = mediaPlusApi[`__${keyName}_info__`] || {};

        if (info.unLockTime) {
          /* 延时锁根据当前时间计算是否还处于锁状态 */
          return Date.now() < info.unLockTime
        } else {
          return info.lock || false
        }
      },

      /* 注意：调用此处的get和set和apply不受锁的限制 */
      get (keyName) {
        if (originDescriptors[keyName] && originDescriptors[keyName].get && !originMethods[keyName]) {
          return originDescriptors[keyName].get.apply(mediaElement)
        }
      },
      set (keyName, val) {
        if (originDescriptors[keyName] && originDescriptors[keyName].set && !originMethods[keyName] && typeof val !== 'undefined') {
          // original.console.log(`[mediaPlusApi][${keyName}] 执行原生set操作`)
          return originDescriptors[keyName].set.apply(mediaElement, [val])
        }
      },
      apply (keyName) {
        if (originMethods[keyName] instanceof Function) {
          const args = Array.from(arguments);
          args.shift();
          // original.console.log(`[mediaPlusApi][${keyName}] 执行原生apply操作`)
          return originMethods[keyName].apply(mediaElement, args)
        }
      }
    };

    mediaPlusApi = { ...mediaPlusApi, ...mediaPlusBaseApi };

    /**
     * 扩展api列表。实现'playbackRate', 'volume', 'currentTime', 'play', 'pause'的纯api调用效果，具体可用API如下：
     * mediaPlusApi.lockPlaybackRate()
     * mediaPlusApi.unLockPlaybackRate()
     * mediaPlusApi.isLockPlaybackRate()
     * mediaPlusApi.getPlaybackRate()
     * mediaPlusApi.setPlaybackRate(val)
     *
     * mediaPlusApi.lockVolume()
     * mediaPlusApi.unLockVolume()
     * mediaPlusApi.isLockVolume()
     * mediaPlusApi.getVolume()
     * mediaPlusApi.setVolume(val)
     *
     * mediaPlusApi.lockCurrentTime()
     * mediaPlusApi.unLockCurrentTime()
     * mediaPlusApi.isLockCurrentTime()
     * mediaPlusApi.getCurrentTime()
     * mediaPlusApi.setCurrentTime(val)
     *
     * mediaPlusApi.lockPlay()
     * mediaPlusApi.unLockPlay()
     * mediaPlusApi.isLockPlay()
     * mediaPlusApi.applyPlay()
     *
     * mediaPlusApi.lockPause()
     * mediaPlusApi.unLockPause()
     * mediaPlusApi.isLockPause()
     * mediaPlusApi.applyPause()
     */
    const extApiKeys = ['playbackRate', 'volume', 'currentTime', 'play', 'pause'];
    const baseApiKeys = Object.keys(mediaPlusBaseApi);
    extApiKeys.forEach(key => {
      baseApiKeys.forEach(baseKey => {
        /* 当key对应的是函数时，不应该有get、set的api，而应该有apply的api */
        if (originMethods[key] instanceof Function) {
          if (baseKey === 'get' || baseKey === 'set') {
            return true
          }
        } else if (baseKey === 'apply') {
          return true
        }

        mediaPlusApi[`${baseKey}${firstUpperCase(key)}`] = function () {
          return mediaPlusBaseApi[baseKey].apply(null, [key, ...arguments])
        };
      });
    });

    original.map.set.call(mediaMap, mediaElement, mediaPlusApi);

    return mediaPlusApi
  }

  /* 检测到media对象的处理逻辑，依赖Proxy对media函数的代理 */
  function mediaDetectHandler (ctx) {
    if (isHTMLMediaElement(ctx) && !mediaElementList.includes(ctx)) {
      // console.log(`[mediaDetectHandler]`, ctx)
      mediaElementList.push(ctx);
      createMediaPlusApi(ctx);

      try {
        mediaElementHandler.forEach(handler => {
          (handler instanceof Function) && handler(ctx);
        });
      } catch (e) {}
    }
  }

  /* 代理方法play和pause方法，确保能正确暂停和播放 */
  function proxyPrototypeMethod (element, methodName) {
    const originFunc = element && element.prototype[methodName];
    if (!originFunc) return

    element.prototype[methodName] = new original.Proxy(originFunc, {
      apply (target, ctx, args) {
        mediaDetectHandler(ctx);
        // original.console.log(`[mediaElementMethodProxy] 执行代理后的${methodName}函数`)

        /* 对播放暂停逻辑进行增强处理，例如允许通过mediaPlusApi进行锁定 */
        if (['play', 'pause'].includes(methodName)) {
          const mediaPlusApi = createMediaPlusApi(ctx);
          if (mediaPlusApi && mediaPlusApi.isLock(methodName)) {
            // original.console.log(`[mediaElementMethodProxy] ${methodName}已被锁定，无法执行相关操作`)
            return
          }
        }

        const result = target.apply(ctx, args);

        // TODO 对函数执行结果进行观察判断

        return result
      }
    });

    // 不建议对HTMLMediaElement的原型链进行扩展，这样容易让网页检测到mediaCore增强逻辑的存在
    // if (originMethods[methodName]) {
    //   element.prototype[`__${methodName}__`] = originMethods[methodName]
    // }
  }

  /**
   * 劫持 playbackRate、volume、currentTime 属性，并增加锁定的逻辑，从而实现更强的抗干扰能力
   */
  function hijackPrototypeProperty (element, property) {
    if (!element || !element.prototype || !originDescriptors[property]) {
      return false
    }

    original.Object.defineProperty.call(Object, element.prototype, property, {
      configurable: true,
      enumerable: true,
      get: function () {
        const val = originDescriptors[property].get.apply(this, arguments);
        // original.console.log(`[mediaElementPropertyHijack][${property}][get]`, val)

        const mediaPlusApi = createMediaPlusApi(this);
        if (mediaPlusApi && mediaPlusApi.isLock(property)) {
          if (property === 'playbackRate') {
            return +!+[]
          }
        }

        return val
      },
      set: function (value) {
        // original.console.log(`[mediaElementPropertyHijack][${property}][set]`, value)

        if (property === 'src') {
          mediaDetectHandler(this);
        }

        /* 对调速、调音和进度控制逻辑进行增强处理，例如允许通过mediaPlusApi这些功能进行锁定 */
        if (['playbackRate', 'volume', 'currentTime'].includes(property)) {
          const mediaPlusApi = createMediaPlusApi(this);
          if (mediaPlusApi && mediaPlusApi.isLock(property)) {
            // original.console.log(`[mediaElementPropertyHijack] ${property}已被锁定，无法执行相关操作`)
            return
          }
        }

        return originDescriptors[property].set.apply(this, arguments)
      }
    });
  }

  function mediaPlus (mediaElement) {
    return createMediaPlusApi(mediaElement)
  }

  function mediaProxy () {
    if (!hasProxyHTMLMediaElement) {
      const proxyMethods = ['play', 'pause', 'load', 'addEventListener'];
      proxyMethods.forEach(methodName => { proxyPrototypeMethod(HTMLMediaElement, methodName); });

      const hijackProperty = ['playbackRate', 'volume', 'currentTime', 'src'];
      hijackProperty.forEach(property => { hijackPrototypeProperty(HTMLMediaElement, property); });

      hasProxyHTMLMediaElement = true;
    }

    return hasProxyHTMLMediaElement
  }

  /**
   * 媒体标签检测，可以检测出viode、audio、以及其它标签名经过改造后的媒体Element
   * @param {Function} handler -必选 检出后要执行的回调函数
   * @returns mediaElementList
   */
  function mediaChecker (handler) {
    if (!(handler instanceof Function) || mediaElementHandler.includes(handler)) {
      return mediaElementList
    } else {
      mediaElementHandler.push(handler);
    }

    if (!hasProxyHTMLMediaElement) {
      mediaProxy();
    }

    return mediaElementList
  }

  /**
   * 初始化mediaCore相关功能
   */
  function init (mediaCheckerHandler) {
    if (hasMediaCoreInit) { return false }

    originDescriptors = Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype);

    Object.keys(HTMLMediaElement.prototype).forEach(key => {
      try {
        if (HTMLMediaElement.prototype[key] instanceof Function) {
          originMethods[key] = HTMLMediaElement.prototype[key];
        }
      } catch (e) {}
    });

    mediaCheckerHandler = mediaCheckerHandler instanceof Function ? mediaCheckerHandler : function () {};
    mediaChecker(mediaCheckerHandler);

    hasMediaCoreInit = true;
    return true
  }

  return {
    init,
    mediaPlus,
    mediaChecker,
    originDescriptors,
    originMethods,
    mediaElementList
  }
})();

const mediaSource = (function () {
  let hasMediaSourceInit = false;
  const originMethods = {};
  const originURLMethods = {};
  const mediaSourceMap = new original.Map();
  const objectURLMap = new original.Map();

  function proxyMediaSourceMethod () {
    if (!originMethods.addSourceBuffer || !originMethods.endOfStream) {
      return false
    }

    // TODO 该代理在上层调用生效可能存在延迟，原因待研究
    originURLMethods.createObjectURL = originURLMethods.createObjectURL || URL.prototype.constructor.createObjectURL;
    URL.prototype.constructor.createObjectURL = new original.Proxy(originURLMethods.createObjectURL, {
      apply (target, ctx, args) {
        const objectURL = target.apply(ctx, args);

        original.map.set.call(objectURLMap, args[0], objectURL);

        return objectURL
      }
    });

    MediaSource.prototype.addSourceBuffer = new original.Proxy(originMethods.addSourceBuffer, {
      apply (target, ctx, args) {
        if (!original.map.has.call(mediaSourceMap, ctx)) {
          original.map.set.call(mediaSourceMap, ctx, {
            mediaSource: ctx,
            createTime: Date.now(),
            sourceBuffer: [],
            endOfStream: false
          });
        }

        original.console.log('[addSourceBuffer]', ctx, args);

        const mediaSourceInfo = original.map.get.call(mediaSourceMap, ctx);
        const mimeCodecs = args[0] || '';
        const sourceBuffer = target.apply(ctx, args);

        const sourceBufferItem = {
          mimeCodecs,
          originAppendBuffer: sourceBuffer.appendBuffer,
          bufferData: [],
          mediaInfo: {}
        };

        try {
          // mimeCodecs字符串示例：'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          const mediaInfo = sourceBufferItem.mediaInfo;
          const tmpArr = sourceBufferItem.mimeCodecs.split(';');

          mediaInfo.type = tmpArr[0].split('/')[0];
          mediaInfo.format = tmpArr[0].split('/')[1];
          mediaInfo.codecs = tmpArr[1].trim().replace('codecs=', '').replace(/["']/g, '');
        } catch (e) {
          original.console.error('[addSourceBuffer][mediaInfo] 媒体信息解析出错', sourceBufferItem, e);
        }

        mediaSourceInfo.sourceBuffer.push(sourceBufferItem);

        /* 代理sourceBuffer.appendBuffer函数，并将buffer存一份到mediaSourceInfo里 */
        sourceBuffer.appendBuffer = new original.Proxy(sourceBufferItem.originAppendBuffer, {
          apply (bufTarget, bufCtx, bufArgs) {
            const buffer = bufArgs[0];
            sourceBufferItem.bufferData.push(buffer);

            /* 确保mediaUrl的存在和对应 */
            if (original.map.get.call(objectURLMap, ctx)) {
              mediaSourceInfo.mediaUrl = original.map.get.call(objectURLMap, ctx);
            }

            return bufTarget.apply(bufCtx, bufArgs)
          }
        });

        return sourceBuffer
      }
    });

    MediaSource.prototype.endOfStream = new original.Proxy(originMethods.endOfStream, {
      apply (target, ctx, args) {
        /* 标识当前媒体流已加载完成 */
        const mediaSourceInfo = original.map.get.call(mediaSourceMap, ctx);
        if (mediaSourceInfo) {
          mediaSourceInfo.endOfStream = true;
        }

        return target.apply(ctx, args)
      }
    });
  }

  /**
   * 下载媒体资源，下载代码参考：https://juejin.cn/post/6873267073674379277
   */
  function downloadMediaSource () {
    mediaSourceMap.forEach(mediaSourceInfo => {
      if (mediaSourceInfo.hasDownload) {
        const confirm = original.confirm('该媒体文件已经下载过了，确定需要再次下载？');
        if (!confirm) {
          return false
        }
      }

      if (!mediaSourceInfo.hasDownload && !mediaSourceInfo.endOfStream) {
        const confirm = original.confirm('媒体数据还没完全就绪，确定要执行下载操作？');
        if (!confirm) {
          return false
        }

        original.console.log('[downloadMediaSource] 媒体数据还没完全就绪', mediaSourceInfo);
      }

      mediaSourceInfo.hasDownload = true;
      mediaSourceInfo.sourceBuffer.forEach(sourceBufferItem => {
        if (!sourceBufferItem.mimeCodecs || sourceBufferItem.mimeCodecs.toString().indexOf(';') === -1) {
          const msg = '[downloadMediaSource][mimeCodecs][error] mimeCodecs不存在或信息异常，无法下载';
          original.console.error(msg, sourceBufferItem);
          original.alert(msg);
          return false
        }

        try {
          let mediaTitle = sourceBufferItem.mediaInfo.title || `${document.title || Date.now()}_${sourceBufferItem.mediaInfo.type}.${sourceBufferItem.mediaInfo.format}`;

          if (!sourceBufferItem.mediaInfo.title) {
            mediaTitle = original.prompt('请确认文件标题：', mediaTitle) || mediaTitle;
            sourceBufferItem.mediaInfo.title = mediaTitle;
          }

          if (!mediaTitle.endsWith(sourceBufferItem.mediaInfo.format)) {
            mediaTitle = mediaTitle + '.' + sourceBufferItem.mediaInfo.format;
          }

          const a = document.createElement('a');
          a.href = URL.createObjectURL(new Blob(sourceBufferItem.bufferData));
          a.download = mediaTitle;
          a.click();
          URL.revokeObjectURL(a.href);
        } catch (e) {
          mediaSourceInfo.hasDownload = false;
          const msg = '[downloadMediaSource][error]';
          original.console.error(msg, e);
          original.alert(msg);
        }
      });
    });
  }

  function hasInit () {
    return hasMediaSourceInit
  }

  function init () {
    if (hasMediaSourceInit) {
      return false
    }

    if (!window.MediaSource) {
      return false
    }

    Object.keys(MediaSource.prototype).forEach(key => {
      try {
        if (MediaSource.prototype[key] instanceof Function) {
          originMethods[key] = MediaSource.prototype[key];
        }
      } catch (e) {}
    });

    proxyMediaSourceMethod();

    hasMediaSourceInit = true;
  }

  return {
    init,
    hasInit,
    originMethods,
    originURLMethods,
    mediaSourceMap,
    objectURLMap,
    downloadMediaSource
  }
})();

/*!
 * @name         utils.js
 * @description  数据类型相关的方法
 * @version      0.0.1
 * @author       Blaze
 * @date         22/03/2019 22:46
 * @github       https://github.com/xxxily
 */

/**
 * 准确地获取对象的具体类型 参见：https://www.talkingcoder.com/article/6333557442705696719
 * @param obj { all } -必选 要判断的对象
 * @returns {*} 返回判断的具体类型
 */
function getType (obj) {
  if (obj == null) {
    return String(obj)
  }
  return typeof obj === 'object' || typeof obj === 'function'
    ? (obj.constructor && obj.constructor.name && obj.constructor.name.toLowerCase()) ||
    /function\s(.+?)\(/.exec(obj.constructor)[1].toLowerCase()
    : typeof obj
}

const isType = (obj, typeName) => getType(obj) === typeName;
const isObj = obj => isType(obj, 'object');

/*!
 * @name         object.js
 * @description  对象操作的相关方法
 * @version      0.0.1
 * @author       Blaze
 * @date         21/03/2019 23:10
 * @github       https://github.com/xxxily
 */

/**
 * 对一个对象进行深度拷贝
 * @source -必选（Object|Array）需拷贝的对象或数组
 */
function clone (source) {
  var result = {};

  if (typeof source !== 'object') {
    return source
  }
  if (Object.prototype.toString.call(source) === '[object Array]') {
    result = [];
  }
  if (Object.prototype.toString.call(source) === '[object Null]') {
    result = null;
  }
  for (var key in source) {
    result[key] = (typeof source[key] === 'object') ? clone(source[key]) : source[key];
  }
  return result
}

/* 遍历对象，但不包含其原型链上的属性 */
function forIn (obj, fn) {
  fn = fn || function () {};
  for (var key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      fn(key, obj[key]);
    }
  }
}

/**
 * 深度合并两个可枚举的对象
 * @param objA {object} -必选 对象A
 * @param objB {object} -必选 对象B
 * @param concatArr {boolean} -可选 合并数组，默认遇到数组的时候，直接以另外一个数组替换当前数组，将此设置true则，遇到数组的时候一律合并，而不是直接替换
 * @returns {*|void}
 */
function mergeObj (objA, objB, concatArr) {
  function isObj (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }
  function isArr (arr) {
    return Object.prototype.toString.call(arr) === '[object Array]'
  }
  if (!isObj(objA) || !isObj(objB)) return objA
  function deepMerge (objA, objB) {
    forIn(objB, function (key) {
      const subItemA = objA[key];
      const subItemB = objB[key];
      if (typeof subItemA === 'undefined') {
        objA[key] = subItemB;
      } else {
        if (isObj(subItemA) && isObj(subItemB)) {
          /* 进行深层合并 */
          objA[key] = deepMerge(subItemA, subItemB);
        } else {
          if (concatArr && isArr(subItemA) && isArr(subItemB)) {
            objA[key] = subItemA.concat(subItemB);
          } else {
            objA[key] = subItemB;
          }
        }
      }
    });
    return objA
  }
  return deepMerge(objA, objB)
}

/**
 * 根据文本路径获取对象里面的值，如需支持数组请使用lodash的get方法
 * @param obj {Object} -必选 要操作的对象
 * @param path {String} -必选 路径信息
 * @returns {*}
 */
function getValByPath (obj, path) {
  path = path || '';
  const pathArr = path.split('.');
  let result = obj;

  /* 递归提取结果值 */
  for (let i = 0; i < pathArr.length; i++) {
    if (!result) break
    result = result[pathArr[i]];
  }

  return result
}

/**
 * 根据文本路径设置对象里面的值，如需支持数组请使用lodash的set方法
 * @param obj {Object} -必选 要操作的对象
 * @param path {String} -必选 路径信息
 * @param val {Any} -必选 如果不传该参，最终结果会被设置为undefined
 * @returns {Boolean} 返回true表示设置成功，否则设置失败
 */
function setValByPath (obj, path, val) {
  if (!obj || !path || typeof path !== 'string') {
    return false
  }

  let result = obj;
  const pathArr = path.split('.');

  for (let i = 0; i < pathArr.length; i++) {
    if (!result) break

    if (i === pathArr.length - 1) {
      result[pathArr[i]] = val;
      return Number.isNaN(val) ? Number.isNaN(result[pathArr[i]]) : result[pathArr[i]] === val
    }

    result = result[pathArr[i]];
  }

  return false
}

const quickSort = function (arr) {
  if (arr.length <= 1) { return arr }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
};

function hideDom (selector, delay) {
  setTimeout(function () {
    const dom = document.querySelector(selector);
    if (dom) {
      dom.style.opacity = 0;
    }
  }, delay || 1000 * 5);
}

/**
 * 向上查找操作
 * @param dom {Element} -必选 初始dom元素
 * @param fn {function} -必选 每一级ParentNode的回调操作
 * 如果函数返回true则表示停止向上查找动作
 */
function eachParentNode (dom, fn) {
  let parent = dom.parentNode;
  while (parent) {
    const isEnd = fn(parent, dom);
    parent = parent.parentNode;
    if (isEnd) {
      break
    }
  }
}

/**
 * 动态加载css内容
 * @param cssText {String} -必选 样式的文本内容
 * @param id {String} -可选 指定样式文本的id号，如果已存在对应id号则不会再次插入
 * @param insetTo {Dom} -可选 指定插入到哪
 * @returns {HTMLStyleElement}
 */
function loadCSSText (cssText, id, insetTo) {
  if (id && document.getElementById(id)) {
    return false
  }

  const style = document.createElement('style');
  const head = insetTo || document.head || document.getElementsByTagName('head')[0];
  style.appendChild(document.createTextNode(cssText));
  head.appendChild(style);

  if (id) {
    style.setAttribute('id', id);
  }

  return style
}

/**
 * 判断当前元素是否为可编辑元素
 * @param target
 * @returns Boolean
 */
function isEditableTarget (target) {
  const isEditable = target.getAttribute && target.getAttribute('contenteditable') === 'true';
  const isInputDom = /INPUT|TEXTAREA|SELECT|LABEL/.test(target.nodeName);
  return isEditable || isInputDom
}

/**
 * 判断某个元素是否处于shadowDom里面
 * 参考：https://www.coder.work/article/299700
 * @param node
 * @returns {boolean}
 */
function isInShadow (node, returnShadowRoot) {
  for (; node; node = node.parentNode) {
    if (node.toString() === '[object ShadowRoot]') {
      if (returnShadowRoot) {
        return node
      } else {
        return true
      }
    }
  }
  return false
}

/**
 * 判断某个元素是否处于可视区域，适用于被动调用情况，需要高性能，请使用IntersectionObserver
 * 参考：https://github.com/febobo/web-interview/issues/84
 * @param element
 * @returns {boolean}
 */
function isInViewPort (element) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const {
    top,
    right,
    bottom,
    left
  } = element.getBoundingClientRect();

  return (
    top >= 0 &&
    left >= 0 &&
    right <= viewWidth &&
    bottom <= viewHeight
  )
}

/**
 * 将行内样式转换成对象的形式
 * @param {string} inlineStyle -必选，例如： position: relative; opacity: 1; visibility: hidden; transform: scale(0.1) rotate(180deg);
 * @returns {Object}
 */

function inlineStyleToObj (inlineStyle) {
  if (typeof inlineStyle !== 'string') {
    return {}
  }

  const result = {};
  const styArr = inlineStyle.split(';');
  styArr.forEach(item => {
    const tmpArr = item.split(':');
    if (tmpArr.length === 2) {
      result[tmpArr[0].trim()] = tmpArr[1].trim();
    }
  });

  return result
}

function objToInlineStyle (obj) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return ''
  }

  const styleArr = [];
  Object.keys(obj).forEach(key => {
    styleArr.push(`${key}: ${obj[key]}`);
  });

  return styleArr.join('; ')
}

/* ua信息伪装 */
function fakeUA (ua) {
  // Object.defineProperty(navigator, 'userAgent', {
  //   value: ua,
  //   writable: false,
  //   configurable: false,
  //   enumerable: true
  // })

  const desc = Object.getOwnPropertyDescriptor(Navigator.prototype, 'userAgent');
  Object.defineProperty(Navigator.prototype, 'userAgent', { ...desc, get: function () { return ua } });
}

/* ua信息来源：https://developers.whatismybrowser.com */
const userAgentMap = {
  android: {
    chrome: 'Mozilla/5.0 (Linux; Android 9; SM-G960F Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36',
    firefox: 'Mozilla/5.0 (Android 7.0; Mobile; rv:57.0) Gecko/57.0 Firefox/57.0'
  },
  iPhone: {
    safari: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/111.0.0.0 Mobile/15E148 Safari/604.1',
    chrome: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/74.0.3729.121 Mobile/15E148 Safari/605.1'
  },
  iPad: {
    safari: 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1',
    chrome: 'Mozilla/5.0 (iPad; CPU OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/74.0.3729.155 Mobile/15E148 Safari/605.1'
  },
  mac: {
    safari: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15',
    chrome: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Firefox) Chrome/74.0.3729.157 Safari/537.36'
  }
};

/**
 * 判断是否处于Iframe中
 * @returns {boolean}
 */
function isInIframe () {
  return window !== window.top
}

/**
 * 判断是否处于跨域限制的Iframe中
 * @returns {boolean}
 */
function isInCrossOriginFrame () {
  let result = true;
  try {
    if (window.top.localStorage || window.top.location.href) {
      result = false;
    }
  } catch (e) {
    result = true;
  }
  return result
}

/**
 * 简单的节流函数
 * @param fn
 * @param interval
 * @returns {Function}
 */
function throttle (fn, interval = 80) {
  let timeout = null;
  return function () {
    if (timeout) return false
    timeout = setTimeout(() => {
      timeout = null;
    }, interval);
    fn.apply(this, arguments);
  }
}

/*!
 * @name         url.js
 * @description  用于对url进行解析的相关方法
 * @version      0.0.1
 * @author       Blaze
 * @date         27/03/2019 15:52
 * @github       https://github.com/xxxily
 */

/**
 * 参考示例：
 * https://segmentfault.com/a/1190000006215495
 * 注意：该方法必须依赖浏览器的DOM对象
 */

function parseURL (url) {
  var a = document.createElement('a');
  a.href = url || window.location.href;
  return {
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    port: a.port,
    origin: a.origin,
    search: a.search,
    query: a.search,
    file: (a.pathname.match(/\/([^/?#]+)$/i) || ['', ''])[1],
    hash: a.hash.replace('#', ''),
    path: a.pathname.replace(/^([^/])/, '/$1'),
    relative: (a.href.match(/tps?:\/\/[^/]+(.+)/) || ['', ''])[1],
    params: (function () {
      var ret = {};
      var seg = [];
      var paramArr = a.search.replace(/^\?/, '').split('&');

      for (var i = 0; i < paramArr.length; i++) {
        var item = paramArr[i];
        if (item !== '' && item.indexOf('=')) {
          seg.push(item);
        }
      }

      for (var j = 0; j < seg.length; j++) {
        var param = seg[j];
        var idx = param.indexOf('=');
        var key = param.substring(0, idx);
        var val = param.substring(idx + 1);
        if (!key) {
          ret[val] = null;
        } else {
          ret[key] = val;
        }
      }
      return ret
    })()
  }
}

/**
 * 将params对象转换成字符串模式
 * @param params {Object} - 必选 params对象
 * @returns {string}
 */
function stringifyParams (params) {
  var strArr = [];

  if (!Object.prototype.toString.call(params) === '[object Object]') {
    return ''
  }

  for (var key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      var val = params[key];
      var valType = Object.prototype.toString.call(val);

      if (val === '' || valType === '[object Undefined]') continue

      if (val === null) {
        strArr.push(key);
      } else if (valType === '[object Array]') {
        strArr.push(key + '=' + val.join(','));
      } else {
        val = (JSON.stringify(val) || '' + val).replace(/(^"|"$)/g, '');
        strArr.push(key + '=' + val);
      }
    }
  }
  return strArr.join('&')
}

/**
 * 将通过parseURL解析出来url对象重新还原成url地址
 * 主要用于查询参数被动态修改后，再重组url链接
 * @param obj {Object} -必选 parseURL解析出来url对象
 */
function stringifyToUrl (urlObj) {
  var query = stringifyParams(urlObj.params) || '';
  if (query) { query = '?' + query; }
  var hash = urlObj.hash ? '#' + urlObj.hash : '';
  return urlObj.origin + urlObj.path + query + hash
}

/*!
configManager parse localStorage error * @name         configManager.js
 * @description  配置统一管理脚本
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/09/20 16:10
 * @github       https://github.com/xxxily
 */

/**
 * 判断localStorage是否可用
 * localStorage并不能保证100%可用，所以使用前必须进行判断，否则会导致部分网站下脚本出现异常
 * https://stackoverflow.com/questions/30481516/iframe-in-chrome-error-failed-to-read-localstorage-from-window-access-deni
 * https://cloud.tencent.com/developer/article/1803097 (当localStorage不能用时，window.localStorage为null，而不是文中的undefined)
 */
function isLocalStorageUsable () {
  return window.localStorage && window.localStorage.getItem && window.localStorage.setItem
}

/**
 * 判断GlobalStorage是否可用，目前使用的GlobalStorage是基于tampermonkey提供的相关api
 * https://www.tampermonkey.net/documentation.php?ext=dhdg#GM_setValue
 */
function isGlobalStorageUsable () {
  return window.GM_setValue && window.GM_getValue && window.GM_deleteValue && window.GM_listValues
}

/**
 * 存储干净的localStorage相关方法
 * 防止localStorage对象下的方法被改写而导致读取和写入规则不一样的问题
 */
const rawLocalStorage = (function getRawLocalStorage () {
  const localStorageApis = [
    'getItem',
    'setItem',
    'removeItem',
    'clear',
    'key'
  ];

  const rawLocalStorage = {};

  localStorageApis.forEach(apiKey => {
    if (isLocalStorageUsable()) {
      rawLocalStorage[`_${apiKey}_`] = localStorage[apiKey];
      rawLocalStorage[apiKey] = function () {
        return rawLocalStorage[`_${apiKey}_`].apply(localStorage, arguments)
      };
    } else {
      rawLocalStorage[apiKey] = function () {
        console.error('localStorage unavailable');
      };
    }
  });

  return rawLocalStorage
})();

const configPrefix = '_h5player_';
const defConfig = {
  enable: true,
  media: {
    autoPlay: false,
    playbackRate: 1,
    volume: 1,

    /* 是否允许存储播放进度 */
    allowRestorePlayProgress: {

    },
    /* 视频播放进度映射表 */
    progress: {}
  },
  hotkeys: [
    {
      desc: '网页全屏',
      key: 'shift+enter',
      command: 'setWebFullScreen',
      /* 如需禁用快捷键，将disabled设为true */
      disabled: false
    },
    {
      desc: '全屏',
      key: 'enter',
      command: 'setFullScreen'
    },
    {
      desc: '切换画中画模式',
      key: 'shift+p',
      command: 'togglePictureInPicture'
    },
    {
      desc: '视频截图',
      key: 'shift+s',
      command: 'capture'
    },
    {
      desc: '启用或禁止自动恢复播放进度功能',
      key: 'shift+r',
      command: 'capture'
    },
    {
      desc: '垂直镜像翻转',
      key: 'shift+m',
      command: 'setMirror',
      args: [true]
    },
    {
      desc: '水平镜像翻转',
      key: 'm',
      command: 'setMirror'
    },
    {
      desc: '下载音视频文件（实验性功能）',
      key: 'shift+d',
      command: 'mediaDownload'
    },
    {
      desc: '缩小视频画面 -0.05',
      key: 'shift+x',
      command: 'setScaleDown'
    },
    {
      desc: '放大视频画面 +0.05',
      key: 'shift+c',
      command: 'setScaleUp'
    },
    {
      desc: '恢复视频画面',
      key: 'shift+z',
      command: 'resetTransform'
    },
    {
      desc: '画面向右移动10px',
      key: 'shift+arrowright',
      command: 'setTranslateRight'
    },
    {
      desc: '画面向左移动10px',
      key: 'shift+arrowleft',
      command: 'setTranslateLeft'
    },
    {
      desc: '画面向上移动10px',
      key: 'shift+arrowup',
      command: 'setTranslateUp'
    },
    {
      desc: '画面向下移动10px',
      key: 'shift+arrowdown',
      command: 'setTranslateDown'
    },
    {
      desc: '前进5秒',
      key: 'arrowright',
      command: 'setCurrentTimeUp'
    },
    {
      desc: '后退5秒',
      key: 'arrowleft',
      command: 'setCurrentTimeDown'
    },
    {
      desc: '前进30秒',
      key: 'ctrl+arrowright',
      command: 'setCurrentTimeUp',
      args: [30]
    },
    {
      desc: '后退30秒',
      key: 'ctrl+arrowleft',
      command: 'setCurrentTimeDown',
      args: [-30]
    },
    {
      desc: '音量升高 5%',
      key: 'arrowup',
      command: 'setVolumeUp',
      args: [0.05]
    },
    {
      desc: '音量降低 5%',
      key: 'arrowdown',
      command: 'setVolumeDown',
      args: [-0.05]
    },
    {
      desc: '音量升高 20%',
      key: 'ctrl+arrowup',
      command: 'setVolumeUp',
      args: [0.2]
    },
    {
      desc: '音量降低 20%',
      key: 'ctrl+arrowdown',
      command: 'setVolumeDown',
      args: [-0.2]
    },
    {
      desc: '切换暂停/播放',
      key: 'space',
      command: 'switchPlayStatus'
    },
    {
      desc: '减速播放 -0.1',
      key: 'x',
      command: 'setPlaybackRateDown'
    },
    {
      desc: '加速播放 +0.1',
      key: 'c',
      command: 'setPlaybackRateUp'
    },
    {
      desc: '正常速度播放',
      key: 'z',
      command: 'resetPlaybackRate'
    },
    {
      desc: '设置1x的播放速度',
      key: 'Digit1',
      command: 'setPlaybackRatePlus',
      args: 1
    },
    {
      desc: '设置1x的播放速度',
      key: 'Numpad1',
      command: 'setPlaybackRatePlus',
      args: 1
    },
    {
      desc: '设置2x的播放速度',
      key: 'Digit2',
      command: 'setPlaybackRatePlus',
      args: 2
    },
    {
      desc: '设置2x的播放速度',
      key: 'Numpad2',
      command: 'setPlaybackRatePlus',
      args: 2
    },
    {
      desc: '设置3x的播放速度',
      key: 'Digit3',
      command: 'setPlaybackRatePlus',
      args: 3
    },
    {
      desc: '设置3x的播放速度',
      key: 'Numpad3',
      command: 'setPlaybackRatePlus',
      args: 3
    },
    {
      desc: '设置4x的播放速度',
      key: 'Digit4',
      command: 'setPlaybackRatePlus',
      args: 4
    },
    {
      desc: '设置4x的播放速度',
      key: 'Numpad4',
      command: 'setPlaybackRatePlus',
      args: 4
    },
    {
      desc: '下一帧',
      key: 'F',
      command: 'freezeFrame',
      args: 1
    },
    {
      desc: '上一帧',
      key: 'D',
      command: 'freezeFrame',
      args: -1
    },
    {
      desc: '增加亮度',
      key: 'E',
      command: 'setBrightnessUp'
    },
    {
      desc: '减少亮度',
      key: 'W',
      command: 'setBrightnessDown'
    },
    {
      desc: '增加对比度',
      key: 'T',
      command: 'setContrastUp'
    },
    {
      desc: '减少对比度',
      key: 'R',
      command: 'setContrastDown'
    },
    {
      desc: '增加饱和度',
      key: 'U',
      command: 'setSaturationUp'
    },
    {
      desc: '减少饱和度',
      key: 'Y',
      command: 'setSaturationDown'
    },
    {
      desc: '增加色相',
      key: 'O',
      command: 'setHueUp'
    },
    {
      desc: '减少色相',
      key: 'I',
      command: 'setHueDown'
    },
    {
      desc: '模糊增加 1 px',
      key: 'K',
      command: 'setBlurUp'
    },
    {
      desc: '模糊减少 1 px',
      key: 'J',
      command: 'setBlurDown'
    },
    {
      desc: '图像复位',
      key: 'Q',
      command: 'resetFilterAndTransform'
    },
    {
      desc: '画面旋转 90 度',
      key: 'S',
      command: 'setRotate'
    },
    {
      desc: '播放下一集',
      key: 'N',
      command: 'setNextVideo'
    },
    {
      desc: '执行JS脚本',
      key: 'ctrl+j ctrl+s',
      command: () => {
        alert('自定义JS脚本');
      },
      when: ''
    }
  ],
  enhance: {
    /* 不禁用默认的调速逻辑，则在多个视频切换时，速度很容易被重置，所以该选项默认开启 */
    blockSetPlaybackRate: true,

    blockSetCurrentTime: false,
    blockSetVolume: false,
    allowExperimentFeatures: false,
    allowExternalCustomConfiguration: false,
    /* 是否开启音量增益功能 */
    allowAcousticGain: false,
    /* 是否开启跨域控制 */
    allowCrossOriginControl: true,
    unfoldMenu: false
  },
  debug: false
};

const configManager = {
  /**
   * 将confPath转换称最终存储到localStorage或globalStorage里的键名
   * @param {String} confPath -必选，配置路径信息：例如：'enhance.blockSetPlaybackRate'
   * @returns {keyName}
   */
  getConfKeyName (confPath = '') {
    return configPrefix + confPath.replace(/\./g, '_')
  },

  /**
   * 将存储到localStorage或globalStorage里的键名转换成实际调用时候的confPath
   * @param {String} keyName -必选 存储到localStorage或globalStorage里的键名，例如：'_h5player_enhance_blockSetPlaybackRate'
   * @returns {confPath}
   */
  getConfPath (keyName = '') {
    return keyName.replace(configPrefix, '').replace(/_/g, '.')
  },

  /**
   * 根据给定的配置路径，获取相关配置信息
   * 获取顺序：LocalStorage > GlobalStorage > defConfig > null
   * @param {String} confPath -必选，配置路径信息：例如：'enhance.blockSetPlaybackRate'
   * @returns {*} 如果返回null，则表示没获取到相关配置信息
   */
  get (confPath) {
    if (typeof confPath !== 'string') {
      return null
    }

    /* 默认优先使用本地的localStorage配置 */
    const localConf = configManager.getLocalStorage(confPath);
    if (localConf !== null && localConf !== undefined) {
      return localConf
    }

    /* 如果localStorage没相关配置，则尝试使用GlobalStorage的配置 */
    const globalConf = configManager.getGlobalStorage(confPath);
    if (globalConf !== null && globalConf !== undefined) {
      return globalConf
    }

    /* 如果localStorage和GlobalStorage配置都没找到，则尝试在默认配置表里拿相关配置信息 */
    const defConfVal = getValByPath(defConfig, confPath);
    if (typeof defConfVal !== 'undefined' && defConfVal !== null) {
      return defConfVal
    }

    return null
  },

  /**
   * 将配置结果写入到localStorage或GlobalStorage
   * 写入顺序：LocalStorage > GlobalStorage
   * 无论是否写入成功都会将结果更新到defConfig里对应的配置项上
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  set (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    // setValByPath(defConfig, confPath, val)

    let sucStatus = false;

    sucStatus = configManager.setLocalStorage(confPath, val);

    if (!sucStatus) {
      sucStatus = configManager.setGlobalStorage(confPath, val);
    }

    return sucStatus
  },

  /* 获取并列出当前所有已设定的配置项 */
  list () {
    const result = {
      localConf: configManager.listLocalStorage(),
      globalConf: configManager.listGlobalStorage(),
      defConfig
    };
    return result
  },

  /* 清除已经写入到本地存储里的配置项 */
  clear () {
    configManager.clearLocalStorage();
    configManager.clearGlobalStorage();
  },

  /**
   * 根据给定的配置路径，获取LocalStorage下定义的配置信息
   * @param {String} confPath -必选，配置路径信息
   * @returns
   */
  getLocalStorage (confPath) {
    if (typeof confPath !== 'string') {
      return null
    }

    const key = configManager.getConfKeyName(confPath);

    if (isLocalStorageUsable()) {
      let localConf = rawLocalStorage.getItem(key);
      if (localConf !== null && localConf !== undefined) {
        try {
          localConf = JSON.parse(localConf);
        } catch (e) {
          console.error('configManager parse localStorage error:', key, localConf);
        }

        return localConf
      }
    }

    return null
  },

  /**
   * 根据给定的配置路径，获取GlobalStorage下定义的配置信息
   * @param {String} confPath -必选，配置路径信息
   * @returns
   */
  getGlobalStorage (confPath) {
    if (typeof confPath !== 'string') {
      return null
    }

    const key = configManager.getConfKeyName(confPath);

    if (isGlobalStorageUsable()) {
      const globalConf = window.GM_getValue(key);
      if (globalConf !== null && globalConf !== undefined) {
        return globalConf
      }
    }

    return null
  },

  /**
   * 将配置结果写入到localStorage里
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  setLocalStorage (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    setValByPath(defConfig, confPath, val);

    const key = configManager.getConfKeyName(confPath);

    if (isLocalStorageUsable()) {
      try {
        if (Object.prototype.toString.call(val) === '[object Object]' || Array.isArray(val)) {
          val = JSON.stringify(val);
        }

        rawLocalStorage.setItem(key, val);

        return true
      } catch (e) {
        console.error('configManager set localStorage error:', key, val, e);
        return false
      }
    } else {
      return false
    }
  },

  /**
   * 将配置结果写入到globalStorage里
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  setGlobalStorage (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    setValByPath(defConfig, confPath, val);

    const key = configManager.getConfKeyName(confPath);

    if (isGlobalStorageUsable()) {
      try {
        window.GM_setValue(key, val);
        return true
      } catch (e) {
        console.error('configManager set globalStorage error:', key, val, e);
        return false
      }
    } else {
      return false
    }
  },

  listLocalStorage () {
    if (isLocalStorageUsable()) {
      const result = {};
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(configPrefix)) {
          const confPath = configManager.getConfPath(key);
          result[confPath] = configManager.getLocalStorage(confPath);
        }
      });
      return result
    } else {
      return {}
    }
  },

  listGlobalStorage () {
    if (isGlobalStorageUsable()) {
      const result = {};
      const globalStorage = window.GM_listValues();
      globalStorage.forEach(key => {
        if (key.startsWith(configPrefix)) {
          const confPath = configManager.getConfPath(key);
          result[confPath] = configManager.getGlobalStorage(confPath);
        }
      });
      return result
    } else {
      return {}
    }
  },

  clearLocalStorage () {
    if (isLocalStorageUsable()) {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(configPrefix)) {
          rawLocalStorage.removeItem(key);
        }
      });
    }
  },

  clearGlobalStorage () {
    if (isGlobalStorageUsable()) {
      const globalStorage = window.GM_listValues();
      globalStorage.forEach(key => {
        if (key.startsWith(configPrefix)) {
          window.GM_deleteValue(key);
        }
      });
    }
  },

  mergeDefConf (conf) { return mergeObj(defConfig, conf) }
};

/* 保存重要的原始函数，防止被外部脚本污染 */
const originalMethods = {
  Object: {
    defineProperty: Object.defineProperty,
    defineProperties: Object.defineProperties
  },
  setInterval: window.setInterval,
  setTimeout: window.setTimeout
};

/**
 * 任务配置中心 Task Control Center
 * 用于配置所有无法进行通用处理的任务，如不同网站的全屏方式不一样，必须调用网站本身的全屏逻辑，才能确保字幕、弹幕等正常工作
 **/

class TCC {
  constructor (taskConf, doTaskFunc) {
    this.conf = taskConf || {
      /**
       * 配置示例
       * 父级键名对应的是一级域名，
       * 子级键名对应的相关功能名称，键值对应的该功能要触发的点击选择器或者要调用的相关函数
       * 所有子级的键值都支持使用选择器触发或函数调用
       * 配置了子级的则使用子级配置逻辑进行操作，否则使用默认逻辑
       * 注意：include，exclude这两个子级键名除外，这两个是用来进行url范围匹配的
       * */
      'demo.demo': {
        fullScreen: '.fullscreen-btn',
        exitFullScreen: '.exit-fullscreen-btn',
        webFullScreen: function () {},
        exitWebFullScreen: '.exit-fullscreen-btn',
        autoPlay: '.player-start-btn',
        pause: '.player-pause',
        play: '.player-play',
        switchPlayStatus: '.player-play',
        playbackRate: function () {},
        currentTime: function () {},
        addCurrentTime: '.add-currenttime',
        subtractCurrentTime: '.subtract-currenttime',
        // 自定义快捷键的执行方式，如果是组合键，必须是 ctrl-->shift-->alt 这样的顺序，没有可以忽略，键名必须全小写
        shortcuts: {
          /* 注册要执行自定义回调操作的快捷键 */
          register: [
            'ctrl+shift+alt+c',
            'ctrl+shift+c',
            'ctrl+alt+c',
            'ctrl+c',
            'c'
          ],
          /* 自定义快捷键的回调操作 */
          callback: function (h5Player, taskConf, data) {
            const { event, player } = data;
            console.log(event, player);
          }
        },
        /* 当前域名下需包含的路径信息，默认整个域名下所有路径可用 必须是正则 */
        include: /^.*/,
        /* 当前域名下需排除的路径信息，默认不排除任何路径 必须是正则 */
        exclude: /\t/
      }
    };

    // 通过doTaskFunc回调定义配置该如何执行任务
    this.doTaskFunc = doTaskFunc instanceof Function ? doTaskFunc : function () {};
  }

  setTaskConf (taskConf) { this.conf = taskConf; }

  /**
   * 获取域名 , 目前实现方式不好，需改造，对地区性域名（如com.cn）、三级及以上域名支持不好
   * */
  getDomain () {
    const host = window.location.host;
    let domain = host;
    const tmpArr = host.split('.');
    if (tmpArr.length > 2) {
      tmpArr.shift();
      domain = tmpArr.join('.');
    }
    return domain
  }

  /**
   * 格式化配置任务
   * @param isAll { boolean } -可选 默认只格式当前域名或host下的配置任务，传入true则将所有域名下的任务配置都进行格式化
   */
  formatTCC (isAll) {
    const t = this;
    const keys = Object.keys(t.conf);
    const domain = t.getDomain();
    const host = window.location.host;

    function formatter (item) {
      const defObj = {
        include: /^.*/,
        exclude: /\t/
      };
      item.include = item.include || defObj.include;
      item.exclude = item.exclude || defObj.exclude;
      return item
    }

    const result = {};
    keys.forEach(function (key) {
      let item = t[key];
      if (isObj(item)) {
        if (isAll) {
          item = formatter(item);
          result[key] = item;
        } else {
          if (key === host || key === domain) {
            item = formatter(item);
            result[key] = item;
          }
        }
      }
    });
    return result
  }

  /* 判断所提供的配置任务是否适用于当前URL */
  isMatch (taskConf) {
    const url = window.location.href;
    let isMatch = false;
    if (!taskConf.include && !taskConf.exclude) {
      isMatch = true;
    } else {
      if (taskConf.include && taskConf.include.test(url)) {
        isMatch = true;
      }
      if (taskConf.exclude && taskConf.exclude.test(url)) {
        isMatch = false;
      }
    }
    return isMatch
  }

  /**
   * 获取任务配置，只能获取到当前域名下的任务配置信息
   * @param taskName {string} -可选 指定具体任务，默认返回所有类型的任务配置
   */
  getTaskConfig () {
    const t = this;
    if (!t._hasFormatTCC_) {
      t.formatTCC();
      t._hasFormatTCC_ = true;
    }
    const domain = t.getDomain();
    const taskConf = t.conf[window.location.host] || t.conf[domain];

    if (taskConf && t.isMatch(taskConf)) {
      return taskConf
    }

    return {}
  }

  /**
   * 执行当前页面下的相应任务
   * @param taskName {object|string} -必选，可直接传入任务配置对象，也可用是任务名称的字符串信息，自己去查找是否有任务需要执行
   * @param data {object} -可选，传给回调函数的数据
   */
  doTask (taskName, data) {
    const t = this;
    let isDo = false;
    if (!taskName) return isDo
    const taskConf = isObj(taskName) ? taskName : t.getTaskConfig();

    if (!isObj(taskConf) || !taskConf[taskName]) return isDo

    const task = taskConf[taskName];

    if (task) {
      isDo = t.doTaskFunc(taskName, taskConf, data);
    }

    return isDo
  }
}

class Debug {
  constructor (msg, printTime = false) {
    const t = this;
    msg = msg || 'debug message:';
    t.log = t.createDebugMethod('log', null, msg);
    t.error = t.createDebugMethod('error', null, msg);
    t.info = t.createDebugMethod('info', null, msg);
    t.warn = t.createDebugMethod('warn', null, msg);
  }

  create (msg) {
    return new Debug(msg)
  }

  createDebugMethod (name, color, tipsMsg) {
    name = name || 'info';

    const bgColorMap = {
      info: '#2274A5',
      log: '#95B46A',
      warn: '#F5A623',
      error: '#D33F49'
    };

    const printTime = this.printTime;

    return function () {
      if (!window._debugMode_) {
        return false
      }

      const msg = tipsMsg || 'debug message:';

      const arg = Array.from(arguments);
      arg.unshift(`color: white; background-color: ${color || bgColorMap[name] || '#95B46A'}`);

      if (printTime) {
        const curTime = new Date();
        const H = curTime.getHours();
        const M = curTime.getMinutes();
        const S = curTime.getSeconds();
        arg.unshift(`%c [${H}:${M}:${S}] ${msg} `);
      } else {
        arg.unshift(`%c ${msg} `);
      }

      window.console[name].apply(window.console, arg);
    }
  }

  isDebugMode () {
    return Boolean(window._debugMode_)
  }
}

var Debug$1 = new Debug();

var debug = Debug$1.create('h5player message:');

const $q = function (str) { return document.querySelector(str) };

/**
 * 任务配置中心 Task Control Center
 * 用于配置所有无法进行通用处理的任务，如不同网站的全屏方式不一样，必须调用网站本身的全屏逻辑，才能确保字幕、弹幕等正常工作
 * */

const taskConf = {
  /**
   * 配置示例
   * 父级键名对应的是一级域名，
   * 子级键名对应的相关功能名称，键值对应的该功能要触发的点击选择器或者要调用的相关函数
   * 所有子级的键值都支持使用选择器触发或函数调用
   * 配置了子级的则使用子级配置逻辑进行操作，否则使用默认逻辑
   * 注意：include，exclude这两个子级键名除外，这两个是用来进行url范围匹配的
   * */
  'demo.demo': {
    // disable: true, // 在该域名下禁止插件的所有功能
    fullScreen: '.fullscreen-btn',
    exitFullScreen: '.exit-fullscreen-btn',
    webFullScreen: function () {},
    exitWebFullScreen: '.exit-fullscreen-btn',
    autoPlay: '.player-start-btn',
    // pause: ['.player-pause', '.player-pause02'], //多种情况对应不同的选择器时，可使用数组，插件会对选择器进行遍历，知道找到可用的为止
    pause: '.player-pause',
    play: '.player-play',
    switchPlayStatus: '.player-play',
    playbackRate: function () {},
    // playbackRate: true, // 当给某个功能设置true时，表示使用网站自身的能力控制视频，而忽略插件的能力
    currentTime: function () {},
    addCurrentTime: '.add-currenttime',
    subtractCurrentTime: '.subtract-currenttime',
    // 自定义快捷键的执行方式，如果是组合键，必须是 ctrl-->shift-->alt 这样的顺序，没有可以忽略，键名必须全小写
    shortcuts: {
      /* 注册要执行自定义回调操作的快捷键 */
      register: [
        'ctrl+shift+alt+c',
        'ctrl+shift+c',
        'ctrl+alt+c',
        'ctrl+c',
        'c'
      ],
      /* 自定义快捷键的回调操作 */
      callback: function (h5Player, taskConf, data) {
        const { event, player } = data;
        console.log(event, player);
      }
    },

    /* 阻止网站自身的调速行为，增强突破调速限制的能力 */
    blockSetPlaybackRate: true,
    /* 阻止网站自身的播放进度控制逻辑，增强突破进度调控限制的能力 */
    blockSetCurrentTime: true,
    /* 阻止网站自身的音量控制逻辑，排除网站自身的调音干扰 */
    blockSetVolume: true,

    /* 当前域名下需包含的路径信息，默认整个域名下所有路径可用 必须是正则 */
    include: /^.*/,
    /* 当前域名下需排除的路径信息，默认不排除任何路径 必须是正则 */
    exclude: /\t/
  },
  'youtube.com': {
    webFullScreen: 'button.ytp-size-button',
    fullScreen: 'button.ytp-fullscreen-button',
    next: '.ytp-next-button',
    shortcuts: {
      register: [
        'escape'
      ],
      callback: function (h5Player, taskConf, data) {
        const { event } = data;
        if (event.keyCode === 27) {
          /* 取消播放下一个推荐的视频 */
          if (document.querySelector('.ytp-upnext').style.display !== 'none') {
            document.querySelector('.ytp-upnext-cancel-button').click();
          }
        }
      }
    }
  },
  'netflix.com': {
    // 停止在netflix下使用插件的所有功能
    // disable: true,
    fullScreen: 'button.button-nfplayerFullscreen',
    addCurrentTime: 'button.button-nfplayerFastForward',
    subtractCurrentTime: 'button.button-nfplayerBackTen',
    /**
     * 使用netflix自身的调速，因为目前插件没法解决调速导致的服务中断问题
     * https://github.com/xxxily/h5player/issues/234
     * https://github.com/xxxily/h5player/issues/317
     * https://github.com/xxxily/h5player/issues/381
     * https://github.com/xxxily/h5player/issues/179
     * https://github.com/xxxily/h5player/issues/147
     */
    playbackRate: true,
    shortcuts: {
      /**
       * TODO
       * netflix 一些用户习惯使用F键进行全屏，所以此处屏蔽掉f键的下一帧功能
       * 后续开放自定义配置能力后，让用户自行决定是否屏蔽
       */
      register: [
        'f'
      ],
      callback: function (h5Player, taskConf, data) {
        return true
      }
    }
  },
  'bilibili.com': {
    fullScreen: function () {
      const fullScreen = $q('.bpx-player-ctrl-full') || $q('.squirtle-video-fullscreen') || $q('.bilibili-player-video-btn-fullscreen');
      if (fullScreen) {
        fullScreen.click();
        return true
      }
    },
    webFullScreen: function () {
      const oldWebFullscreen = $q('.bilibili-player-video-web-fullscreen');
      const webFullscreenEnter = $q('.bpx-player-ctrl-web-enter') || $q('.squirtle-pagefullscreen-inactive');
      const webFullscreenLeave = $q('.bpx-player-ctrl-web-leave') || $q('.squirtle-pagefullscreen-active');
      if (oldWebFullscreen || (webFullscreenEnter && webFullscreenLeave)) {
        const webFullscreen = oldWebFullscreen || (getComputedStyle(webFullscreenLeave).display === 'none' ? webFullscreenEnter : webFullscreenLeave);
        webFullscreen.click();

        /* 取消弹幕框聚焦，干扰了快捷键的操作 */
        setTimeout(function () {
          const danmaku = $q('.bpx-player-dm-input') || $q('.bilibili-player-video-danmaku-input');
          danmaku && danmaku.blur();
        }, 1000 * 0.1);

        return true
      }
    },
    autoPlay: ['.bpx-player-ctrl-play', '.squirtle-video-start', '.bilibili-player-video-btn-start'],
    switchPlayStatus: ['.bpx-player-ctrl-play', '.squirtle-video-start', '.bilibili-player-video-btn-start'],
    next: ['.bpx-player-ctrl-next', '.squirtle-video-next', '.bilibili-player-video-btn-next', '.bpx-player-ctrl-btn[aria-label="下一个"]'],
    init: function (h5Player, taskConf) {},
    shortcuts: {
      register: [
        'escape'
      ],
      callback: function (h5Player, taskConf, data) {
        const { event } = data;
        if (event.keyCode === 27) {
          /* 退出网页全屏 */
          const oldWebFullscreen = $q('.bilibili-player-video-web-fullscreen');
          if (oldWebFullscreen && oldWebFullscreen.classList.contains('closed')) {
            oldWebFullscreen.click();
          } else {
            const webFullscreenLeave = $q('.bpx-player-ctrl-web-leave') || $q('.squirtle-pagefullscreen-active');
            if (getComputedStyle(webFullscreenLeave).display !== 'none') {
              webFullscreenLeave.click();
            }
          }
        }
      }
    }
  },
  't.bilibili.com': {
    fullScreen: 'button[name="fullscreen-button"]'
  },
  'live.bilibili.com': {
    init: function () {
      if (!JSON._stringifySource_) {
        JSON._stringifySource_ = JSON.stringify;

        JSON.stringify = function (arg1) {
          try {
            return JSON._stringifySource_.apply(this, arguments)
          } catch (e) {
            console.error('JSON.stringify 解释出错：', e, arg1);
          }
        };
      }
    },
    fullScreen: '.bilibili-live-player-video-controller-fullscreen-btn button',
    webFullScreen: '.bilibili-live-player-video-controller-web-fullscreen-btn button',
    switchPlayStatus: '.bilibili-live-player-video-controller-start-btn button'
  },
  'acfun.cn': {
    fullScreen: '[data-bind-key="screenTip"]',
    webFullScreen: '[data-bind-key="webTip"]',
    switchPlayStatus: function (h5player) {
      /* 无法抢得控制权，只好延迟判断要不要干预 */
      const player = h5player.player();
      const status = player.paused;
      setTimeout(function () {
        if (status === player.paused) {
          if (player.paused) {
            player.play();
          } else {
            player.pause();
          }
        }
      }, 200);
    }
  },
  'ixigua.com': {
    fullScreen: ['xg-fullscreen.xgplayer-fullscreen', '.xgplayer-control-item__entry[aria-label="全屏"]', '.xgplayer-control-item__entry[aria-label="退出全屏"]'],
    webFullScreen: ['xg-cssfullscreen.xgplayer-cssfullscreen', '.xgplayer-control-item__entry[aria-label="剧场模式"]', '.xgplayer-control-item__entry[aria-label="退出剧场模式"]']
  },
  'tv.sohu.com': {
    fullScreen: 'button[data-title="网页全屏"]',
    webFullScreen: 'button[data-title="全屏"]'
  },
  'iqiyi.com': {
    fullScreen: '.iqp-btn-fullscreen',
    webFullScreen: '.iqp-btn-webscreen',
    next: '.iqp-btn-next',
    init: function (h5Player, taskConf) {
      // 隐藏水印
      hideDom('.iqp-logo-box');
      // 移除暂停广告
      window.GM_addStyle(`
          div[templatetype="common_pause"]{ display:none }
          .iqp-logo-box{ display:none !important }
      `);
    }
  },
  'youku.com': {
    fullScreen: '.control-fullscreen-icon',
    next: '.control-next-video',
    init: function (h5Player, taskConf) {
      // 隐藏水印
      hideDom('.youku-layer-logo');
    }
  },
  'ted.com': {
    fullScreen: 'button.Fullscreen'
  },
  'qq.com': {
    pause: '.container_inner .txp-shadow-mod',
    play: '.container_inner .txp-shadow-mod',
    shortcuts: {
      register: ['c', 'x', 'z', '1', '2', '3', '4'],
      callback: function (h5Player, taskConf, data) {
        const { event } = data;
        const key = event.key.toLowerCase();
        const keyName = 'customShortcuts_' + key;

        if (!h5Player[keyName]) {
          /* 第一次按下快捷键使用默认逻辑进行调速 */
          h5Player[keyName] = {
            time: Date.now(),
            playbackRate: h5Player.playbackRate
          };
          return false
        } else {
          /* 第一次操作后的200ms内的操作都是由默认逻辑进行调速 */
          if (Date.now() - h5Player[keyName].time < 200) {
            return false
          }

          /* 判断是否需进行降级处理，利用sessionStorage进行调速 */
          if (h5Player[keyName] === h5Player.playbackRate || h5Player[keyName] === true) {
            if (window.sessionStorage.playbackRate && /(c|x|z|1|2|3|4)/.test(key)) {
              const curSpeed = Number(window.sessionStorage.playbackRate);
              const perSpeed = curSpeed - 0.1 >= 0 ? curSpeed - 0.1 : 0.1;
              const nextSpeed = curSpeed + 0.1 <= 4 ? curSpeed + 0.1 : 4;
              let targetSpeed = curSpeed;
              switch (key) {
                case 'z' :
                  targetSpeed = 1;
                  break
                case 'c' :
                  targetSpeed = nextSpeed;
                  break
                case 'x' :
                  targetSpeed = perSpeed;
                  break
                default :
                  targetSpeed = Number(key);
                  break
              }

              window.sessionStorage.playbackRate = targetSpeed;
              h5Player.setCurrentTime(0.01, true);
              h5Player.setPlaybackRate(targetSpeed, true);
              return true
            }

            /* 标识默认调速方案失效，需启用sessionStorage调速方案 */
            h5Player[keyName] = true;
          } else {
            /* 标识默认调速方案生效 */
            h5Player[keyName] = false;
          }
        }
      }
    },
    fullScreen: 'txpdiv[data-report="window-fullscreen"]',
    webFullScreen: 'txpdiv[data-report="browser-fullscreen"]',
    next: 'txpdiv[data-report="play-next"]',
    init: function (h5Player, taskConf) {
      // 隐藏水印
      hideDom('.txp-watermark');
      hideDom('.txp-watermark-action');
    },
    include: /(v.qq|sports.qq)/
  },
  'pan.baidu.com': {
    fullScreen: function (h5Player, taskConf) {
      h5Player.player().parentNode.querySelector('.vjs-fullscreen-control').click();
    }
  },
  // 'pornhub.com': {
  //   fullScreen: 'div[class*="icon-fullscreen"]',
  //   webFullScreen: 'div[class*="icon-size-large"]'
  // },
  'facebook.com': {
    fullScreen: function (h5Player, taskConf) {
      const actionBtn = h5Player.player().parentNode.querySelectorAll('button');
      if (actionBtn && actionBtn.length > 3) {
        /* 模拟点击倒数第二个按钮 */
        actionBtn[actionBtn.length - 2].click();
        return true
      }
    },
    webFullScreen: function (h5Player, taskConf) {
      const actionBtn = h5Player.player().parentNode.querySelectorAll('button');
      if (actionBtn && actionBtn.length > 3) {
        /* 模拟点击倒数第二个按钮 */
        actionBtn[actionBtn.length - 2].click();
        return true
      }
    },
    shortcuts: {
      /* 在视频模式下按esc键，自动返回上一层界面 */
      register: [
        'escape'
      ],
      /* 自定义快捷键的回调操作 */
      callback: function (h5Player, taskConf, data) {
        eachParentNode(h5Player.player(), function (parentNode) {
          if (parentNode.getAttribute('data-fullscreen-container') === 'true') {
            const goBackBtn = parentNode.parentNode.querySelector('div>a>i>u');
            if (goBackBtn) {
              goBackBtn.parentNode.parentNode.click();
            }
            return true
          }
        });
      }
    }
  },
  'douyu.com': {
    fullScreen: function (h5Player, taskConf) {
      const player = h5Player.player();
      const container = player._fullScreen_.getContainer();
      if (player._isFullScreen_) {
        container.querySelector('div[title="退出窗口全屏"]').click();
      } else {
        container.querySelector('div[title="窗口全屏"]').click();
      }
      player._isFullScreen_ = !player._isFullScreen_;
      return true
    },
    webFullScreen: function (h5Player, taskConf) {
      const player = h5Player.player();
      const container = player._fullScreen_.getContainer();
      if (player._isWebFullScreen_) {
        container.querySelector('div[title="退出网页全屏"]').click();
      } else {
        container.querySelector('div[title="网页全屏"]').click();
      }
      player._isWebFullScreen_ = !player._isWebFullScreen_;
      return true
    }
  },
  'open.163.com': {
    init: function (h5Player, taskConf) {
      const player = h5Player.player();
      /**
       * 不设置CORS标识，这样才能跨域截图
       * https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_enabled_image
       * https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes
       */
      player.setAttribute('crossOrigin', 'anonymous');
    }
  },
  'agefans.tv': {
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');
    }
  },
  'chaoxing.com': {
    fullScreen: '.vjs-fullscreen-control'
  },
  'yixi.tv': {
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');
    }
  },
  'douyin.com': {
    fullScreen: '.xgplayer-fullscreen',
    webFullScreen: '.xgplayer-page-full-screen',
    next: ['.xgplayer-playswitch-next'],
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');
    }
  },
  'live.douyin.com': {
    fullScreen: '.xgplayer-fullscreen',
    webFullScreen: '.xgplayer-page-full-screen',
    next: ['.xgplayer-playswitch-next'],
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');
    }
  },
  'zhihu.com': {
    fullScreen: ['button[aria-label="全屏"]', 'button[aria-label="退出全屏"]'],
    play: function (h5Player, taskConf, data) {
      const player = h5Player.player();
      if (player && player.parentNode && player.parentNode.parentNode) {
        const maskWrap = player.parentNode.parentNode.querySelector('div~div:nth-child(3)');
        if (maskWrap) {
          const mask = maskWrap.querySelector('div');
          if (mask && mask.innerText === '') {
            mask.click();
          }
        }
      }
    },
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');
    }
  },
  'weibo.com': {
    fullScreen: ['button.wbpv-fullscreen-control'],
    // webFullScreen: ['div[title="关闭弹层"]', 'div.wbpv-open-layer-button']
    webFullScreen: ['div.wbpv-open-layer-button']
  }
};

function h5PlayerTccInit (h5Player) {
  return new TCC(taskConf, function (taskName, taskConf, data) {
    try {
      const task = taskConf[taskName];
      const wrapDom = h5Player.getPlayerWrapDom();

      if (!task) { return }

      if (taskName === 'shortcuts') {
        if (isObj(task) && task.callback instanceof Function) {
          return task.callback(h5Player, taskConf, data)
        }
      } else if (task instanceof Function) {
        try {
          return task(h5Player, taskConf, data)
        } catch (e) {
          debug.error('任务配置中心的自定义函数执行失败：', taskName, taskConf, data, e);
          return false
        }
      } else if (typeof task === 'boolean') {
        return task
      } else {
        const selectorList = Array.isArray(task) ? task : [task];
        for (let i = 0; i < selectorList.length; i++) {
          const selector = selectorList[i];

          /* 触发选择器上的点击事件 */
          if (wrapDom && wrapDom.querySelector(selector)) {
          // 在video的父元素里查找，是为了尽可能兼容多实例下的逻辑
            wrapDom.querySelector(selector).click();
            return true
          } else if (document.querySelector(selector)) {
            document.querySelector(selector).click();
            return true
          }
        }
      }
    } catch (e) {
      debug.error('任务配置中心的自定义任务执行失败：', taskName, taskConf, data, e);
      return false
    }
  })
}

function mergeTaskConf (config) {
  return mergeObj(taskConf, config)
}

/* ua伪装配置 */
const fakeConfig = {
  // 'tv.cctv.com': userAgentMap.iPhone.chrome,
  // 'v.qq.com': userAgentMap.iPad.chrome,
  'open.163.com': userAgentMap.iPhone.chrome,
  'm.open.163.com': userAgentMap.iPhone.chrome,
  /* 百度盘的非会员会使用自身的专用播放器，导致没法使用h5player，所以需要通过伪装ua来解决该问题 */
  'pan.baidu.com': userAgentMap.iPhone.safari
};

function setFakeUA (ua) {
  const host = window.location.host;
  ua = ua || fakeConfig[host];

  /**
   * 动态判断是否需要进行ua伪装
   * 下面方案暂时不可用
   * 由于部分网站跳转至移动端后域名不一致，形成跨域问题
   * 导致无法同步伪装配置而不断死循环跳转
   * eg. open.163.com
   * */
  // let customUA = window.localStorage.getItem('_h5_player_user_agent_')
  // debug.log(customUA, window.location.href, window.navigator.userAgent, document.referrer)
  // if (customUA) {
  //   fakeUA(customUA)
  //   alert(customUA)
  // } else {
  //   alert('ua false')
  // }

  ua && fakeUA(ua);
}

/**
 * 元素全屏API，同时兼容网页全屏
 */

hackAttachShadow();
class FullScreen {
  constructor (dom, pageMode) {
    this.dom = dom;
    this.shadowRoot = null;
    this.fullStatus = false;
    // 默认全屏模式，如果传入pageMode则表示进行的是页面全屏操作
    this.pageMode = pageMode || false;
    const fullPageStyle = `
      ._webfullscreen_box_size_ {
				width: 100% !important;
				height: 100% !important;
			}
      ._webfullscreen_ {
        display: block !important;
				position: fixed !important;
				width: 100% !important;
				height: 100% !important;
				top: 0 !important;
				left: 0 !important;
				background: #000 !important;
				z-index: 999999 !important;
			}
			._webfullscreen_zindex_ {
				z-index: 999999 !important;
			}
		`;
    /* 将样式插入到全局页面中 */
    if (!window._hasInitFullPageStyle_ && window.GM_addStyle) {
      window.GM_addStyle(fullPageStyle);
      window._hasInitFullPageStyle_ = true;
    }

    /* 将样式插入到shadowRoot中 */
    const shadowRoot = isInShadow(dom, true);
    if (shadowRoot) {
      this.shadowRoot = shadowRoot;
      loadCSSText(fullPageStyle, 'fullPageStyle', shadowRoot);
    }

    const t = this;
    window.addEventListener('keyup', (event) => {
      const key = event.key.toLowerCase();
      if (key === 'escape') {
        if (t.isFull()) {
          t.exit();
        } else if (t.isFullScreen()) {
          t.exitFullScreen();
        }
      }
    }, true);

    this.getContainer();
  }

  eachParentNode (dom, fn) {
    let parent = dom.parentNode;
    while (parent && parent.classList) {
      const isEnd = fn(parent, dom);
      parent = parent.parentNode;
      if (isEnd) {
        break
      }
    }
  }

  getContainer () {
    const t = this;
    if (t._container_) return t._container_

    const d = t.dom;
    const domBox = d.getBoundingClientRect();
    let container = d;
    t.eachParentNode(d, function (parentNode) {
      const noParentNode = !parentNode || !parentNode.getBoundingClientRect;
      if (noParentNode || parentNode.getAttribute('data-fullscreen-container')) {
        container = parentNode;
        return true
      }

      const parentBox = parentNode.getBoundingClientRect();
      const isInsideTheBox = parentBox.width <= domBox.width && parentBox.height <= domBox.height;
      if (isInsideTheBox) {
        container = parentNode;
      } else {
        return true
      }
    });

    container.setAttribute('data-fullscreen-container', 'true');
    t._container_ = container;
    return container
  }

  isFull () {
    return this.dom.classList.contains('_webfullscreen_') || this.fullStatus
  }

  isFullScreen () {
    const d = document;
    return !!(d.fullscreen || d.webkitIsFullScreen || d.mozFullScreen ||
      d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement)
  }

  enterFullScreen () {
    const c = this.getContainer();
    const enterFn = c.requestFullscreen || c.webkitRequestFullScreen || c.mozRequestFullScreen || c.msRequestFullScreen;
    enterFn && enterFn.call(c);
  }

  enter () {
    const t = this;
    if (t.isFull()) return
    const container = t.getContainer();
    let needSetIndex = false;
    if (t.dom === container) {
      needSetIndex = true;
    }

    function addFullscreenStyleToParentNode (node) {
      t.eachParentNode(node, function (parentNode) {
        parentNode.classList.add('_webfullscreen_');
        if (container === parentNode || needSetIndex) {
          needSetIndex = true;
          parentNode.classList.add('_webfullscreen_zindex_');
        }
      });
    }
    addFullscreenStyleToParentNode(t.dom);

    /* 判断dom自身是否需要加上webfullscreen样式 */
    if (t.dom.parentNode) {
      const domBox = t.dom.getBoundingClientRect();
      const domParentBox = t.dom.parentNode.getBoundingClientRect();
      if (domParentBox.width - domBox.width >= 5) {
        t.dom.classList.add('_webfullscreen_');
      }

      if (t.shadowRoot && t.shadowRoot._shadowHost) {
        const shadowHost = t.shadowRoot._shadowHost;
        const shadowHostBox = shadowHost.getBoundingClientRect();
        if (shadowHostBox.width <= domBox.width) {
          shadowHost.classList.add('_webfullscreen_');
          addFullscreenStyleToParentNode(shadowHost);
        }
      }
    }

    const fullScreenMode = !t.pageMode;
    if (fullScreenMode) {
      t.enterFullScreen();
    }

    this.fullStatus = true;
  }

  exitFullScreen () {
    const d = document;
    const exitFn = d.exitFullscreen || d.webkitExitFullscreen || d.mozCancelFullScreen || d.msExitFullscreen;
    exitFn && exitFn.call(d);
  }

  exit () {
    const t = this;

    function removeFullscreenStyleToParentNode (node) {
      t.eachParentNode(node, function (parentNode) {
        parentNode.classList.remove('_webfullscreen_');
        parentNode.classList.remove('_webfullscreen_zindex_');
      });
    }
    removeFullscreenStyleToParentNode(t.dom);

    t.dom.classList.remove('_webfullscreen_');

    if (t.shadowRoot && t.shadowRoot._shadowHost) {
      const shadowHost = t.shadowRoot._shadowHost;
      shadowHost.classList.remove('_webfullscreen_');
      removeFullscreenStyleToParentNode(shadowHost);
    }

    const fullScreenMode = !t.pageMode;
    if (fullScreenMode || t.isFullScreen()) {
      t.exitFullScreen();
    }
    this.fullStatus = false;
  }

  toggle () {
    this.isFull() ? this.exit() : this.enter();
  }
}

/*!
 * @name      videoCapturer.js
 * @version   0.0.1
 * @author    Blaze
 * @date      2019/9/21 12:03
 * @github    https://github.com/xxxily
 */

async function setClipboard (blob) {
  if (navigator.clipboard) {
    navigator.clipboard.write([
      // eslint-disable-next-line no-undef
      new ClipboardItem({
        [blob.type]: blob
      })
    ]).then(() => {
      console.info('[setClipboard] clipboard suc');
    }).catch((e) => {
      console.error('[setClipboard] clipboard err', e);
    });
  } else {
    console.error('当前网站不支持将数据写入到剪贴板里，见：\n https://developer.mozilla.org/en-US/docs/Web/API/Clipboard');
  }
}

var videoCapturer = {
  /**
   * 进行截图操作
   * @param video {dom} -必选 video dom 标签
   * @returns {boolean}
   */
  capture (video, download, title) {
    if (!video) return false
    const t = this;
    const currentTime = `${Math.floor(video.currentTime / 60)}'${(video.currentTime % 60).toFixed(3)}''`;
    const captureTitle = title || `${document.title}_${currentTime}`;

    /* 截图核心逻辑 */
    video.setAttribute('crossorigin', 'anonymous');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    if (download) {
      t.download(canvas, captureTitle, video);
    } else {
      t.previe(canvas, captureTitle);
    }

    return canvas
  },
  /**
   * 预览截取到的画面内容
   * @param canvas
   */
  previe (canvas, title) {
    canvas.style = 'max-width:100%';
    const previewPage = window.open('', '_blank');
    previewPage.document.title = `capture previe - ${title || 'Untitled'}`;
    previewPage.document.body.style.textAlign = 'center';
    previewPage.document.body.style.background = '#000';
    previewPage.document.body.appendChild(canvas);
  },
  /**
   * canvas 下载截取到的内容
   * @param canvas
   */
  download (canvas, title, video) {
    title = title || 'videoCapturer_' + Date.now();

    try {
      canvas.toBlob(function (blob) {
        const el = document.createElement('a');
        el.download = `${title}.jpg`;
        el.href = URL.createObjectURL(blob);
        el.click();

        /* 尝试复制到剪贴板 */
        setClipboard(blob);
      }, 'image/jpg', 0.99);
    } catch (e) {
      videoCapturer.previe(canvas, title);
      console.error('视频源受CORS标识限制，无法直接下载截图，见：\n https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS');
      console.error(video, e);
    }
  }
};

/**
 * 鼠标事件观测对象
 * 用于实现鼠标事件的穿透响应，有别于pointer-events:none
 * pointer-events:none是设置当前层允许穿透
 * 而MouseObserver是：即使不知道target上面存在多少层遮挡，一样可以响应鼠标事件
 */

class MouseObserver {
  constructor (observeOpt) {
    // eslint-disable-next-line no-undef
    this.observer = new IntersectionObserver((infoList) => {
      infoList.forEach((info) => {
        info.target.IntersectionObserverEntry = info;
      });
    }, observeOpt || {});

    this.observeList = [];
  }

  _observe (target) {
    let hasObserve = false;
    for (let i = 0; i < this.observeList.length; i++) {
      const el = this.observeList[i];
      if (target === el) {
        hasObserve = true;
        break
      }
    }

    if (!hasObserve) {
      this.observer.observe(target);
      this.observeList.push(target);
    }
  }

  _unobserve (target) {
    this.observer.unobserve(target);
    const newObserveList = [];
    this.observeList.forEach((el) => {
      if (el !== target) {
        newObserveList.push(el);
      }
    });
    this.observeList = newObserveList;
  }

  /**
   * 增加事件绑定
   * @param target {element} -必选 要绑定事件的dom对象
   * @param type {string} -必选 要绑定的事件，只支持鼠标事件
   * @param listener {function} -必选 符合触发条件时的响应函数
   */
  on (target, type, listener, options) {
    const t = this;
    t._observe(target);

    if (!target.MouseObserverEvent) {
      target.MouseObserverEvent = {};
    }
    target.MouseObserverEvent[type] = true;

    if (!t._mouseObserver_) {
      t._mouseObserver_ = {};
    }

    if (!t._mouseObserver_[type]) {
      t._mouseObserver_[type] = [];

      window.addEventListener(type, (event) => {
        t.observeList.forEach((target) => {
          const isVisibility = target.IntersectionObserverEntry && target.IntersectionObserverEntry.intersectionRatio > 0;
          const isReg = target.MouseObserverEvent[event.type] === true;
          if (isVisibility && isReg) {
            /* 判断是否符合触发侦听器事件条件 */
            const bound = target.getBoundingClientRect();
            const offsetX = event.x - bound.x;
            const offsetY = event.y - bound.y;
            const isNeedTap = offsetX <= bound.width && offsetX >= 0 && offsetY <= bound.height && offsetY >= 0;

            if (isNeedTap) {
              /* 执行监听回调 */
              const listenerList = t._mouseObserver_[type];
              listenerList.forEach((listener) => {
                if (listener instanceof Function) {
                  listener.call(t, event, {
                    x: offsetX,
                    y: offsetY
                  }, target);
                }
              });
            }
          }
        });
      }, options);
    }

    /* 将监听回调加入到事件队列 */
    if (listener instanceof Function) {
      t._mouseObserver_[type].push(listener);
    }
  }

  /**
   * 解除事件绑定
   * @param target {element} -必选 要解除事件的dom对象
   * @param type {string} -必选 要解除的事件，只支持鼠标事件
   * @param listener {function} -必选 绑定事件时的响应函数
   * @returns {boolean}
   */
  off (target, type, listener) {
    const t = this;
    if (!target || !type || !listener || !t._mouseObserver_ || !t._mouseObserver_[type] || !target.MouseObserverEvent || !target.MouseObserverEvent[type]) return false

    const newListenerList = [];
    const listenerList = t._mouseObserver_[type];
    let isMatch = false;
    listenerList.forEach((listenerItem) => {
      if (listenerItem === listener) {
        isMatch = true;
      } else {
        newListenerList.push(listenerItem);
      }
    });

    if (isMatch) {
      t._mouseObserver_[type] = newListenerList;

      /* 侦听器已被完全移除 */
      if (newListenerList.length === 0) {
        delete target.MouseObserverEvent[type];
      }

      /* 当MouseObserverEvent为空对象时移除观测对象 */
      if (JSON.stringify(target.MouseObserverEvent[type]) === '{}') {
        t._unobserve(target);
      }
    }
  }
}

/**
 * 简单的i18n库
 */

class I18n {
  constructor (config) {
    this._languages = {};
    this._locale = this.getClientLang();
    this._defaultLanguage = '';
    this.init(config);
  }

  init (config) {
    if (!config) return false

    const t = this;
    t._locale = config.locale || t._locale;
    /* 指定当前要是使用的语言环境，默认无需指定，会自动读取 */
    t._languages = config.languages || t._languages;
    t._defaultLanguage = config.defaultLanguage || t._defaultLanguage;
  }

  use () {}

  t (path) {
    const t = this;
    let result = t.getValByPath(t._languages[t._locale] || {}, path);

    /* 版本回退 */
    if (!result && t._locale !== t._defaultLanguage) {
      result = t.getValByPath(t._languages[t._defaultLanguage] || {}, path);
    }

    return result || ''
  }

  /* 当前语言值 */
  language () {
    return this._locale
  }

  languages () {
    return this._languages
  }

  changeLanguage (locale) {
    if (this._languages[locale]) {
      this._locale = locale;
      return locale
    } else {
      return false
    }
  }

  /**
   * 根据文本路径获取对象里面的值
   * @param obj {Object} -必选 要操作的对象
   * @param path {String} -必选 路径信息
   * @returns {*}
   */
  getValByPath (obj, path) {
    path = path || '';
    const pathArr = path.split('.');
    let result = obj;

    /* 递归提取结果值 */
    for (let i = 0; i < pathArr.length; i++) {
      if (!result) break
      result = result[pathArr[i]];
    }

    return result
  }

  /* 获取客户端当前的语言环境 */
  getClientLang () {
    return navigator.languages ? navigator.languages[0] : navigator.language
  }
}

var zhCN = {
  website: '脚本官网',
  about: '关于',
  issues: '问题反馈',
  setting: '设置',
  hotkeys: '快捷键',
  donate: '请作者喝杯咖啡👍',
  recommend: '❤️ 免费ChatGPT ❤️',
  enableScript: '启用脚本',
  disableScript: '禁用脚本',
  openCrossOriginFramePage: '单独打开跨域的页面',
  disableInitAutoPlay: '禁止在此网站自动播放视频',
  enableInitAutoPlay: '允许在此网站自动播放视频',
  restoreConfiguration: '还原全局的默认配置',
  blockSetPlaybackRate: '禁用默认速度调节逻辑',
  blockSetCurrentTime: '禁用默认播放进度控制逻辑',
  blockSetVolume: '禁用默认音量控制逻辑',
  unblockSetPlaybackRate: '允许默认速度调节逻辑',
  unblockSetCurrentTime: '允许默认播放进度控制逻辑',
  unblockSetVolume: '允许默认音量控制逻辑',
  allowAcousticGain: '开启音量增益能力',
  notAllowAcousticGain: '禁用音量增益能力',
  allowCrossOriginControl: '开启跨域控制能力',
  notAllowCrossOriginControl: '禁用跨域控制能力',
  allowExperimentFeatures: '开启实验性功能',
  notAllowExperimentFeatures: '禁用实验性功能',
  experimentFeaturesWarning: '实验性功能容易造成一些不确定的问题，请谨慎开启',
  allowExternalCustomConfiguration: '开启外部自定义能力',
  notAllowExternalCustomConfiguration: '关闭外部自定义能力',
  configFail: '配置失败',
  globalSetting: '全局设置',
  localSetting: '仅用于此网站',
  openDebugMode: '开启调试模式',
  closeDebugMode: '关闭调试模式',
  unfoldMenu: '展开菜单',
  foldMenu: '折叠菜单',
  tipsMsg: {
    playspeed: '播放速度：',
    forward: '前进：',
    backward: '后退：',
    seconds: '秒',
    volume: '音量：',
    nextframe: '定位：下一帧',
    previousframe: '定位：上一帧',
    stopframe: '定格帧画面：',
    play: '播放',
    pause: '暂停',
    arpl: '允许自动恢复播放进度',
    drpl: '禁止自动恢复播放进度',
    brightness: '图像亮度：',
    contrast: '图像对比度：',
    saturation: '图像饱和度：',
    hue: '图像色相：',
    blur: '图像模糊度：',
    imgattrreset: '图像属性：复位',
    imgrotate: '画面旋转：',
    onplugin: '启用h5Player插件',
    offplugin: '禁用h5Player插件',
    globalmode: '全局模式：',
    playbackrestored: '为你恢复上次播放进度',
    playbackrestoreoff: '恢复播放进度功能已禁用，按 SHIFT+R 可开启该功能',
    horizontal: '水平位移：',
    vertical: '垂直位移：',
    horizontalMirror: '水平镜像',
    verticalMirror: '垂直镜像',
    videozoom: '视频缩放率：'
  }
};

var enUS = {
  website: 'Script website',
  about: 'About',
  issues: 'Issues',
  setting: 'Setting',
  hotkeys: 'Hotkeys',
  donate: 'Donate',
  enableScript: 'enable script',
  disableScript: 'disable script',
  openCrossOriginFramePage: 'Open cross-domain pages alone',
  disableInitAutoPlay: 'Prohibit autoplay of videos on this site',
  enableInitAutoPlay: 'Allow autoplay videos on this site',
  restoreConfiguration: 'Restore the global default configuration',
  blockSetPlaybackRate: 'Disable default speed regulation logic',
  blockSetCurrentTime: 'Disable default playback progress control logic',
  blockSetVolume: 'Disable default volume control logic',
  unblockSetPlaybackRate: 'Allow default speed adjustment logic',
  unblockSetCurrentTime: 'Allow default playback progress control logic',
  unblockSetVolume: 'Allow default volume control logic',
  allowAcousticGain: 'Turn on volume boost',
  notAllowAcousticGain: 'Disable volume boost ability',
  allowCrossOriginControl: 'Enable cross-domain control capability',
  notAllowCrossOriginControl: 'Disable cross-domain control capabilities',
  allowExperimentFeatures: 'Turn on experimental features',
  notAllowExperimentFeatures: 'Disable experimental features',
  experimentFeaturesWarning: 'Experimental features are likely to cause some uncertain problems, please turn on with caution',
  allowExternalCustomConfiguration: 'Enable external customization capabilities',
  notAllowExternalCustomConfiguration: 'Turn off external customization capabilities',
  configFail: 'Configuration failed',
  globalSetting: 'Global Settings',
  localSetting: 'For this site only',
  openDebugMode: 'Enable debug mode',
  closeDebugMode: 'Turn off debug mode',
  unfoldMenu: 'Expand menu',
  foldMenu: 'Collapse menu',
  tipsMsg: {
    playspeed: 'Speed: ',
    forward: 'Forward: ',
    backward: 'Backward: ',
    seconds: 'sec',
    volume: 'Volume: ',
    nextframe: 'Next frame',
    previousframe: 'Previous frame',
    stopframe: 'Stopframe: ',
    play: 'Play',
    pause: 'Pause',
    arpl: 'Allow auto resume playback progress',
    drpl: 'Disable auto resume playback progress',
    brightness: 'Brightness: ',
    contrast: 'Contrast: ',
    saturation: 'Saturation: ',
    hue: 'HUE: ',
    blur: 'Blur: ',
    imgattrreset: 'Attributes: reset',
    imgrotate: 'Picture rotation: ',
    onplugin: 'ON h5Player plugin',
    offplugin: 'OFF h5Player plugin',
    globalmode: 'Global mode: ',
    playbackrestored: 'Restored the last playback progress for you',
    playbackrestoreoff: 'The function of restoring the playback progress is disabled. Press SHIFT+R to turn on the function',
    horizontal: 'Horizontal displacement: ',
    vertical: 'Vertical displacement: ',
    horizontalMirror: 'Horizontal mirror',
    verticalMirror: 'vertical mirror',
    videozoom: 'Video zoom: '
  },
  demo: 'demo-test'
};

var ru = {
  website: 'официальный сайт скрипта',
  about: 'около',
  issues: 'обратная связь',
  setting: 'установка',
  hotkeys: 'горячие клавиши',
  donate: 'пожертвовать',
  enableScript: 'включить скрипт',
  disableScript: 'отключить скрипт',
  openCrossOriginFramePage: 'Открывать только междоменные страницы',
  disableInitAutoPlay: 'Запретить автовоспроизведение видео на этом сайте',
  enableInitAutoPlay: 'Разрешить автоматическое воспроизведение видео на этом сайте',
  restoreConfiguration: 'Восстановить глобальную конфигурацию по умолчанию',
  blockSetPlaybackRate: 'Отключить логику регулирования скорости по умолчанию',
  blockSetCurrentTime: 'Отключить логику управления ходом воспроизведения по умолчанию',
  blockSetVolume: 'Отключить логику управления громкостью по умолчанию',
  unblockSetPlaybackRate: 'Разрешить логику регулировки скорости по умолчанию',
  unblockSetCurrentTime: 'Разрешить логику управления ходом воспроизведения по умолчанию',
  unblockSetVolume: 'Разрешить логику управления громкостью по умолчанию',
  allowAcousticGain: 'Включите усиление громкости',
  notAllowAcousticGain: 'Отключить возможность увеличения громкости',
  allowCrossOriginControl: 'Включить возможность междоменного контроля',
  notAllowCrossOriginControl: 'Отключить возможности междоменного контроля',
  allowExperimentFeatures: 'Включить экспериментальные функции',
  notAllowExperimentFeatures: 'Отключить экспериментальные функции',
  experimentFeaturesWarning: 'Экспериментальные функции могут вызвать определенные проблемы, включайте их с осторожностью.',
  allowExternalCustomConfiguration: 'Включить возможности внешней настройки',
  notAllowExternalCustomConfiguration: 'Отключить возможности внешней настройки',
  configFail: 'Ошибка конфигурации',
  globalSetting: 'Глобальные настройки',
  localSetting: 'только для этого сайта',
  openDebugMode: 'Включить режим отладки',
  closeDebugMode: 'отключить режим отладки',
  unfoldMenu: 'развернуть меню',
  foldMenu: 'свернуть меню',
  tipsMsg: {
    playspeed: 'Скорость: ',
    forward: 'Вперёд: ',
    backward: 'Назад: ',
    seconds: ' сек',
    volume: 'Громкость: ',
    nextframe: 'Следующий кадр',
    previousframe: 'Предыдущий кадр',
    stopframe: 'Стоп-кадр: ',
    play: 'Запуск',
    pause: 'Пауза',
    arpl: 'Разрешить автоматическое возобновление прогресса воспроизведения',
    drpl: 'Запретить автоматическое возобновление прогресса воспроизведения',
    brightness: 'Яркость: ',
    contrast: 'Контраст: ',
    saturation: 'Насыщенность: ',
    hue: 'Оттенок: ',
    blur: 'Размытие: ',
    imgattrreset: 'Атрибуты: сброс',
    imgrotate: 'Поворот изображения: ',
    onplugin: 'ВКЛ: плагин воспроизведения',
    offplugin: 'ВЫКЛ: плагин воспроизведения',
    globalmode: 'Глобальный режим:',
    playbackrestored: 'Восстановлен последний прогресс воспроизведения',
    playbackrestoreoff: 'Функция восстановления прогресса воспроизведения отключена. Нажмите SHIFT + R, чтобы включить функцию',
    horizontal: 'Горизонтальное смещение: ',
    vertical: 'Вертикальное смещение: ',
    horizontalMirror: 'Горизонтальное зеркало',
    verticalMirror: 'вертикальное зеркало',
    videozoom: 'Увеличить видео: '
  }
};

var zhTW = {
  website: '腳本官網',
  about: '關於',
  issues: '反饋',
  setting: '設置',
  hotkeys: '快捷鍵',
  donate: '讚賞',
  enableScript: '啟用腳本',
  disableScript: '禁用腳本',
  openCrossOriginFramePage: '單獨打開跨域的頁面',
  disableInitAutoPlay: '禁止在此網站自動播放視頻',
  enableInitAutoPlay: '允許在此網站自動播放視頻',
  restoreConfiguration: '還原全局的默認配置',
  blockSetPlaybackRate: '禁用默認速度調節邏輯',
  blockSetCurrentTime: '禁用默認播放進度控制邏輯',
  blockSetVolume: '禁用默認音量控制邏輯',
  unblockSetPlaybackRate: '允許默認速度調節邏輯',
  unblockSetCurrentTime: '允許默認播放進度控制邏輯',
  unblockSetVolume: '允許默認音量控制邏輯',
  allowAcousticGain: '開啟音量增益能力',
  notAllowAcousticGain: '禁用音量增益能力',
  allowCrossOriginControl: '開啟跨域控制能力',
  notAllowCrossOriginControl: '禁用跨域控制能力',
  allowExperimentFeatures: '開啟實驗性功能',
  notAllowExperimentFeatures: '禁用實驗性功能',
  experimentFeaturesWarning: '實驗性功能容易造成一些不確定的問題，請謹慎開啟',
  allowExternalCustomConfiguration: '開啟外部自定義能力',
  notAllowExternalCustomConfiguration: '關閉外部自定義能力',
  configFail: '配置失敗',
  globalSetting: '全局設置',
  localSetting: '僅用於此網站',
  openDebugMode: '開啟調試模式',
  closeDebugMode: '關閉調試模式',
  unfoldMenu: '展開菜單',
  foldMenu: '折疊菜單',
  tipsMsg: {
    playspeed: '播放速度：',
    forward: '向前：',
    backward: '向後：',
    seconds: '秒',
    volume: '音量：',
    nextframe: '定位：下一幀',
    previousframe: '定位：上一幀',
    stopframe: '定格幀畫面：',
    play: '播放',
    pause: '暫停',
    arpl: '允許自動恢復播放進度',
    drpl: '禁止自動恢復播放進度',
    brightness: '圖像亮度：',
    contrast: '圖像對比度：',
    saturation: '圖像飽和度：',
    hue: '圖像色相：',
    blur: '圖像模糊度：',
    imgattrreset: '圖像屬性：復位',
    imgrotate: '畫面旋轉：',
    onplugin: '啟用h5Player插件',
    offplugin: '禁用h5Player插件',
    globalmode: '全局模式：',
    playbackrestored: '為你恢復上次播放進度',
    playbackrestoreoff: '恢復播放進度功能已禁用，按 SHIFT+R 可開啟該功能',
    horizontal: '水平位移：',
    vertical: '垂直位移：',
    horizontalMirror: '水平鏡像',
    verticalMirror: '垂直鏡像',
    videozoom: '視頻縮放率：'
  }
};

const messages = {
  'zh-CN': zhCN,
  zh: zhCN,
  'zh-HK': zhTW,
  'zh-TW': zhTW,
  'en-US': enUS,
  en: enUS,
  ru: ru
};

const i18n = new I18n({
  defaultLanguage: 'en',
  /* 指定当前要是使用的语言环境，默认无需指定，会自动读取 */
  // locale: 'zh-TW',
  languages: messages
});

/* 用于获取全局唯一的id */
let __globalId__ = 0;
function getId () {
  if (window.GM_getValue && window.GM_setValue) {
    let gID = window.GM_getValue('_global_id_');
    if (!gID) gID = 0;
    gID = Number(gID) + 1;
    window.GM_setValue('_global_id_', gID);
    return gID
  } else {
    /* 如果不处于油猴插件下，则该id为页面自己独享的id */
    __globalId__ = Number(__globalId__) + 1;
    return __globalId__
  }
}

let curTabId = null;

/**
 * 获取当前TAB标签的Id号，可用于iframe确定自己是否处于同一TAB标签下
 * @returns {Promise<any>}
 */
function getTabId () {
  return new Promise((resolve, reject) => {
    if (window.GM_getTab instanceof Function) {
      window.GM_getTab(function (obj) {
        if (!obj.tabId) {
          obj.tabId = getId();
          window.GM_saveTab(obj);
        }
        /* 每次获取都更新当前Tab的id号 */
        curTabId = obj.tabId;
        resolve(obj.tabId);
      });
    } else {
      /* 非油猴插件下，无法确定iframe是否处于同一个tab下 */
      resolve(Date.now());
    }
  })
}

/* 一开始就初始化好curTabId，这样后续就不需要异步获取Tabid，部分场景下需要用到 */
getTabId();

/*!
 * @name      monkeyMsg.js
 * @version   0.0.1
 * @author    Blaze
 * @date      2019/9/21 14:22
 */
// import debug from './debug'

/**
 * 将对象数据里面可存储到GM_setValue里面的值提取出来
 * @param obj {objcet} -必选 打算要存储的对象数据
 * @param deep {number} -可选 如果对象层级非常深，则须限定递归的层级，默认最高不能超过3级
 * @returns {{}}
 */
function extractDatafromOb (obj, deep) {
  deep = deep || 1;
  if (deep > 3) return {}

  const result = {};
  if (typeof obj === 'object') {
    for (const key in obj) {
      const val = obj[key];
      const valType = typeof val;
      if (valType === 'number' || valType === 'string' || valType === 'boolean') {
        Object.defineProperty(result, key, {
          value: val,
          writable: true,
          configurable: true,
          enumerable: true
        });
      } else if (valType === 'object' && Object.prototype.propertyIsEnumerable.call(obj, key)) {
        /* 进行递归提取 */
        result[key] = extractDatafromOb(val, deep + 1);
      } else if (valType === 'array') {
        result[key] = val;
      }
    }
  }
  return result
}

const monkeyMsg = {
  /**
   * 发送消息，除了正常发送信息外，还会补充各类必要的信息
   * @param name {string} -必选 要发送给那个字段，接收时要一致才能监听的正确
   * @param data {Any} -必选 要发送的数据
   * @param throttleInterval -可选，因为会出现莫名奇妙的重复发送情况，为了消除重复发送带来的副作用，所以引入节流限制逻辑，即限制某个时间间隔内只能发送一次，多余的次数自动抛弃掉，默认80ms
   * @returns {Promise<void>}
   */
  send (name, data, throttleInterval = 80) {
    if (!window.GM_getValue || !window.GM_setValue) {
      return false
    }

    /* 阻止频繁发送修改事件 */
    const oldMsg = window.GM_getValue(name);
    if (oldMsg && oldMsg.updateTime) {
      const interval = Math.abs(Date.now() - oldMsg.updateTime);
      if (interval < throttleInterval) {
        return false
      }
    }

    const msg = {
      /* 发送过来的数据 */
      data,
      /* 补充标签ID，用于判断是否同处一个tab标签下 */
      tabId: curTabId || 'undefined',
      /* 补充消息的页面来源的标题信息 */
      title: document.title,
      /* 补充消息的页面来源信息 */
      referrer: extractDatafromOb(window.location),
      /* 最近一次更新该数据的时间 */
      updateTime: Date.now()
    };
    if (typeof data === 'object') {
      msg.data = extractDatafromOb(data);
    }
    window.GM_setValue(name, msg);

    // debug.info(`[monkeyMsg-send][${name}]`, msg)
  },
  set: (name, data) => monkeyMsg.send(name, data),
  get: (name) => window.GM_getValue && window.GM_getValue(name),
  on: (name, fn) => window.GM_addValueChangeListener && window.GM_addValueChangeListener(name, function (name, oldVal, newVal, remote) {
    // debug.info(`[monkeyMsg-on][${name}]`, oldVal, newVal, remote)

    /* 补充消息来源是否出自同一个Tab的判断字段 */
    newVal.originTab = newVal.tabId === curTabId;

    fn instanceof Function && fn.apply(null, arguments);
  }),
  off: (listenerId) => window.GM_removeValueChangeListener && window.GM_removeValueChangeListener(listenerId),

  /**
   * 进行monkeyMsg的消息广播，该广播每两秒钟发送一次，其它任意页面可通接收到的广播信息来更新一些变量信息
   * 主要用以解决通过setInterval或setTimeout因页面可视状态和性能策略导致的不运行或执行频率异常而不能正确更新变量状态的问题
   * 见： https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API
   * 广播也不能100%保证不受性能策略的影响，但只要有一个网页处于前台运行，则就能正常工作
   * @param handler {Function} -必选 接收到广播信息时的回调函数
   * @returns
   */
  broadcast (handler) {
    const broadcastName = '__monkeyMsgBroadcast__';
    monkeyMsg._monkeyMsgBroadcastHandler_ = monkeyMsg._monkeyMsgBroadcastHandler_ || [];
    handler instanceof Function && monkeyMsg._monkeyMsgBroadcastHandler_.push(handler);

    if (monkeyMsg._hasMonkeyMsgBroadcast_) {
      return broadcastName
    }

    monkeyMsg.on(broadcastName, function () {
      monkeyMsg._monkeyMsgBroadcastHandler_.forEach(handler => {
        handler.apply(null, arguments);
      });
    });

    setInterval(function () {
      /* 通过限定时间间隔来防止多个页面批量发起广播信息 */
      const data = monkeyMsg.get(broadcastName);
      if (data && Date.now() - data.updateTime < 1000 * 2) {
        return false
      }

      monkeyMsg.send(broadcastName, {});
    }, 1000 * 2);

    return broadcastName
  }
};

/* 当前用到的快捷键 */
const hasUseKey = {
  keyCodeList: [13, 16, 17, 18, 27, 32, 37, 38, 39, 40, 49, 50, 51, 52, 67, 68, 69, 70, 73, 74, 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 97, 98, 99, 100, 220],
  keyList: ['enter', 'shift', 'control', 'alt', 'escape', ' ', 'arrowleft', 'arrowright', 'arrowup', 'arrowdown', '1', '2', '3', '4', 'c', 'd', 'e', 'f', 'i', 'j', 'k', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', '\\', '|'],
  keyMap: {
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    esc: 27,
    space: 32,
    '←': 37,
    '↑': 38,
    '→': 39,
    '↓': 40,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    i: 73,
    j: 74,
    k: 75,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    pad1: 97,
    pad2: 98,
    pad3: 99,
    pad4: 100,
    '\\': 220
  }
};

/**
 * 判断当前按键是否注册为需要用的按键
 * 用于减少对其它键位的干扰
 */
function isRegisterKey (event) {
  const keyCode = event.keyCode;
  const key = event.key.toLowerCase();
  return hasUseKey.keyCodeList.includes(keyCode) ||
    hasUseKey.keyList.includes(key)
}

/**
 * 由于tampermonkey对window对象进行了封装，我们实际访问到的window并非页面真实的window
 * 这就导致了如果我们需要将某些对象挂载到页面的window进行调试的时候就无法挂载了
 * 所以必须使用特殊手段才能访问到页面真实的window对象，于是就有了下面这个函数
 * @returns {Promise<void>}
 */
async function getPageWindow () {
  return new Promise(function (resolve, reject) {
    if (window._pageWindow) {
      return resolve(window._pageWindow)
    }

    /* 尝试通过同步的方式获取pageWindow */
    try {
      const pageWin = getPageWindowSync();
      if (pageWin && pageWin.document && pageWin.XMLHttpRequest) {
        window._pageWindow = pageWin;
        resolve(pageWin);
        return pageWin
      }
    } catch (e) {}

    /* 下面异步获取pagewindow的方法在最新的chrome浏览器里已失效 */

    const listenEventList = ['load', 'mousemove', 'scroll', 'get-page-window-event'];

    function getWin (event) {
      window._pageWindow = this;
      // debug.log('getPageWindow succeed', event)
      listenEventList.forEach(eventType => {
        window.removeEventListener(eventType, getWin, true);
      });
      resolve(window._pageWindow);
    }

    listenEventList.forEach(eventType => {
      window.addEventListener(eventType, getWin, true);
    });

    /* 自行派发事件以便用最短的时间获得pageWindow对象 */
    window.dispatchEvent(new window.Event('get-page-window-event'));
  })
}
getPageWindow();

/**
 * 通过同步的方式获取pageWindow
 * 注意同步获取的方式需要将脚本写入head，部分网站由于安全策略会导致写入失败，而无法正常获取
 * @returns {*}
 */
function getPageWindowSync (rawFunction) {
  if (window.unsafeWindow) return window.unsafeWindow
  if (document._win_) return document._win_

  try {
    rawFunction = rawFunction || window.__rawFunction__ || Function.prototype.constructor;
    // return rawFunction('return window')()
    // Function('return (function(){}.constructor("return this")());')
    return rawFunction('return (function(){}.constructor("var getPageWindowSync=1; return this")());')()
  } catch (e) {
    console.error('getPageWindowSync error', e);

    const head = document.head || document.querySelector('head');
    const script = document.createElement('script');
    script.appendChild(document.createTextNode('document._win_ = window'));
    head.appendChild(script);

    return document._win_
  }
}

function openInTab (url, opts, referer) {
  if (referer) {
    const urlObj = parseURL(url);
    if (!urlObj.params.referer) {
      urlObj.params.referer = encodeURIComponent(window.location.href);
      url = stringifyToUrl(urlObj);
    }
  }

  if (window.GM_openInTab) {
    window.GM_openInTab(url, opts || {
      active: true,
      insert: true,
      setParent: true
    });
  }
}

/* 确保数字为正数 */
function numUp (num) {
  if (typeof num === 'number' && num < 0) {
    num = Math.abs(num);
  }
  return num
}

/* 确保数字为负数 */
function numDown (num) {
  if (typeof num === 'number' && num > 0) {
    num = -num;
  }
  return num
}

function isMediaElement (element) {
  return element && (element instanceof HTMLMediaElement || element.HTMLMediaElement || element.HTMLVideoElement || element.HTMLAudioElement)
}

function isVideoElement (element) {
  return element && (element instanceof HTMLVideoElement || element.HTMLVideoElement)
}

function isAudioElement (element) {
  return element && (element instanceof HTMLAudioElement || element.HTMLAudioElement)
}

/*!
 * @name         crossTabCtl.js
 * @description  跨Tab控制脚本逻辑
 * @version      0.0.1
 * @author       Blaze
 * @date         2019/11/21 上午11:56
 * @github       https://github.com/xxxily
 */

const crossTabCtl = {
  /* 在进行跨Tab控制时，排除转发的快捷键，以减少对重要快捷键的干扰 */
  excludeShortcuts (event) {
    if (!event || typeof event.keyCode === 'undefined') {
      return false
    }

    const excludeKeyCode = ['c', 'v', 'f', 'd'];

    if (event.ctrlKey || event.metaKey) {
      const key = event.key.toLowerCase();
      if (excludeKeyCode.includes(key)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  },
  /* 意外退出的时候leavepictureinpicture事件并不会被调用，所以只能通过轮询来更新画中画信息 */
  updatePictureInPictureInfo () {
    setInterval(function () {
      if (document.pictureInPictureElement) {
        monkeyMsg.send('globalPictureInPictureInfo', {
          usePictureInPicture: true
        });
      }
    }, 1000 * 1.5);

    /**
     * 通过setInterval来更新globalPictureInPictureInfo会受页面可见性和性能策略影响而得不到更新
     * 见： https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API
     * 所以通过增加monkeyMsg广播机制来校准globalPictureInPictureInfo状态
     */
    monkeyMsg.broadcast(function () {
      // console.log('[monkeyMsg][broadcast]', ...arguments)
      if (document.pictureInPictureElement) {
        monkeyMsg.send('globalPictureInPictureInfo', {
          usePictureInPicture: true
        });
      }
    });
  },
  /* 判断当前是否开启了画中画功能 */
  hasOpenPictureInPicture () {
    const data = monkeyMsg.get('globalPictureInPictureInfo');

    /* 画中画的全局信息更新时间差在3s内，才认为当前开启了画中画模式，否则有可能意外退出，而没修改usePictureInPicture的值，造成误判 */
    if (data && data.data) {
      if (data.data.usePictureInPicture) {
        return Math.abs(Date.now() - data.updateTime) < 1000 * 3
      } else {
        /**
         * 检测到画中画已经被关闭，但还没关闭太久的话，允许有个短暂的时间段内让用户跨TAB控制视频
         * 例如：暂停视频播放
         */
        return Math.abs(Date.now() - data.updateTime) < 1000 * 15
      }
    }

    return false
  },
  /**
   * 判断是否需要发送跨Tab控制按键信息
   */
  isNeedSendCrossTabCtlEvent () {
    const t = crossTabCtl;

    /* 画中画开启后，判断不在同一个Tab才发送事件 */
    const data = monkeyMsg.get('globalPictureInPictureInfo');
    if (t.hasOpenPictureInPicture() && data.tabId !== curTabId) {
      return true
    } else {
      return false
    }
  },
  crossTabKeydownEvent (event) {
    const t = crossTabCtl;
    /* 处于可编辑元素中不执行任何快捷键 */
    if (isEditableTarget(event.target)) return
    if (t.isNeedSendCrossTabCtlEvent() && isRegisterKey(event) && !t.excludeShortcuts(event)) {
      // 阻止事件冒泡和默认事件
      event.stopPropagation();
      event.preventDefault();

      /* 广播按键消息，进行跨Tab控制 */
      // keydownEvent里已经包含了globalKeydownEvent事件
      // monkeyMsg.send('globalKeydownEvent', event)

      return true
    }
  },
  bindCrossTabEvent () {
    const t = crossTabCtl;
    if (t._hasBindEvent_) return
    document.removeEventListener('keydown', t.crossTabKeydownEvent);
    document.addEventListener('keydown', t.crossTabKeydownEvent, true);
    t._hasBindEvent_ = true;
  },
  init () {
    const t = crossTabCtl;
    t.updatePictureInPictureInfo();
    t.bindCrossTabEvent();
  }
};

/*!
 * @name         index.js
 * @description  hookJs JS AOP切面编程辅助库
 * @version      0.0.1
 * @author       Blaze
 * @date         2020/10/22 17:40
 * @github       https://github.com/xxxily
 */

const win = typeof window === 'undefined' ? global : window;
const toStr = Function.prototype.call.bind(Object.prototype.toString);
/* 特殊场景，如果把Boolean也hook了，很容易导致调用溢出，所以是需要使用原生Boolean */
const toBoolean = Boolean.originMethod ? Boolean.originMethod : Boolean;
const util = {
  toStr,
  isObj: obj => toStr(obj) === '[object Object]',
  /* 判断是否为引用类型，用于更宽泛的场景 */
  isRef: obj => typeof obj === 'object',
  isReg: obj => toStr(obj) === '[object RegExp]',
  isFn: obj => obj instanceof Function,
  isAsyncFn: fn => toStr(fn) === '[object AsyncFunction]',
  isPromise: obj => toStr(obj) === '[object Promise]',
  firstUpperCase: str => str.replace(/^\S/, s => s.toUpperCase()),
  toArr: arg => Array.from(Array.isArray(arg) ? arg : [arg]),

  debug: {
    log () {
      let log = win.console.log;
      /* 如果log也被hook了，则使用未被hook前的log函数 */
      if (log.originMethod) { log = log.originMethod; }
      if (win._debugMode_) {
        log.apply(win.console, arguments);
      }
    }
  },
  /* 获取包含自身、继承、可枚举、不可枚举的键名 */
  getAllKeys (obj) {
    const tmpArr = [];
    for (const key in obj) { tmpArr.push(key); }
    const allKeys = Array.from(new Set(tmpArr.concat(Reflect.ownKeys(obj))));
    return allKeys
  }
};

class HookJs {
  constructor (useProxy) {
    this.useProxy = useProxy || false;
    this.hookPropertiesKeyName = '_hookProperties' + Date.now();
  }

  hookJsPro () {
    return new HookJs(true)
  }

  _addHook (hookMethod, fn, type, classHook) {
    const hookKeyName = type + 'Hooks';
    const hookMethodProperties = hookMethod[this.hookPropertiesKeyName];
    if (!hookMethodProperties[hookKeyName]) {
      hookMethodProperties[hookKeyName] = [];
    }

    /* 注册（储存）要被调用的hook函数，同时防止重复注册 */
    let hasSameHook = false;
    for (let i = 0; i < hookMethodProperties[hookKeyName].length; i++) {
      if (fn === hookMethodProperties[hookKeyName][i]) {
        hasSameHook = true;
        break
      }
    }

    if (!hasSameHook) {
      fn.classHook = classHook || false;
      hookMethodProperties[hookKeyName].push(fn);
    }
  }

  _runHooks (parentObj, methodName, originMethod, hookMethod, target, ctx, args, classHook, hookPropertiesKeyName) {
    const hookMethodProperties = hookMethod[hookPropertiesKeyName];
    const beforeHooks = hookMethodProperties.beforeHooks || [];
    const afterHooks = hookMethodProperties.afterHooks || [];
    const errorHooks = hookMethodProperties.errorHooks || [];
    const hangUpHooks = hookMethodProperties.hangUpHooks || [];
    const replaceHooks = hookMethodProperties.replaceHooks || [];
    const execInfo = {
      result: null,
      error: null,
      args: args,
      type: ''
    };

    function runHooks (hooks, type) {
      let hookResult = null;
      execInfo.type = type || '';
      if (Array.isArray(hooks)) {
        hooks.forEach(fn => {
          if (util.isFn(fn) && classHook === fn.classHook) {
            hookResult = fn(args, parentObj, methodName, originMethod, execInfo, ctx);
          }
        });
      }
      return hookResult
    }

    const runTarget = (function () {
      if (classHook) {
        return function () {
          // eslint-disable-next-line new-cap
          return new target(...args)
        }
      } else {
        return function () {
          return target.apply(ctx, args)
        }
      }
    })();

    const beforeHooksResult = runHooks(beforeHooks, 'before');
    /* 支持终止后续调用的指令 */
    if (beforeHooksResult && beforeHooksResult === 'STOP-INVOKE') {
      return beforeHooksResult
    }

    if (hangUpHooks.length || replaceHooks.length) {
      /**
       * 当存在hangUpHooks或replaceHooks的时候是不会触发原来函数的
       * 本质上来说hangUpHooks和replaceHooks是一样的，只是外部的定义描述不一致和分类不一致而已
       */
      runHooks(hangUpHooks, 'hangUp');
      runHooks(replaceHooks, 'replace');
    } else {
      if (errorHooks.length) {
        try {
          execInfo.result = runTarget();
        } catch (err) {
          execInfo.error = err;
          const errorHooksResult = runHooks(errorHooks, 'error');
          /* 支持执行错误后不抛出异常的指令 */
          if (errorHooksResult && errorHooksResult === 'SKIP-ERROR') ; else {
            throw err
          }
        }
      } else {
        execInfo.result = runTarget();
      }
    }

    /**
     * 执行afterHooks，如果返回的是Promise，理论上应该进行进一步的细分处理
     * 但添加细分处理逻辑后发现性能下降得比较厉害，且容易出现各种异常，所以决定不在hook里处理Promise情况
     * 下面是原Promise处理逻辑，添加后会导致以下网站卡死或无法访问：
     * wenku.baidu.com
     * https://pubs.rsc.org/en/content/articlelanding/2021/sc/d1sc01881g#!divAbstract
     * https://www.elsevier.com/connect/coronavirus-information-center
     */
    // if (execInfo.result && execInfo.result.then && util.isPromise(execInfo.result)) {
    //   execInfo.result.then(function (data) {
    //     execInfo.result = data
    //     runHooks(afterHooks, 'after')
    //     return Promise.resolve.apply(ctx, arguments)
    //   }).catch(function (err) {
    //     execInfo.error = err
    //     runHooks(errorHooks, 'error')
    //     return Promise.reject.apply(ctx, arguments)
    //   })
    // }

    runHooks(afterHooks, 'after');

    return execInfo.result
  }

  _proxyMethodcGenerator (parentObj, methodName, originMethod, classHook, context, proxyHandler) {
    const t = this;
    const useProxy = t.useProxy;
    let hookMethod = null;

    /* 存在缓存则使用缓存的hookMethod */
    if (t.isHook(originMethod)) {
      hookMethod = originMethod;
    } else if (originMethod[t.hookPropertiesKeyName] && t.isHook(originMethod[t.hookPropertiesKeyName].hookMethod)) {
      hookMethod = originMethod[t.hookPropertiesKeyName].hookMethod;
    }

    if (hookMethod) {
      if (!hookMethod[t.hookPropertiesKeyName].isHook) {
        /* 重新标注被hook状态 */
        hookMethod[t.hookPropertiesKeyName].isHook = true;
        util.debug.log(`[hook method] ${util.toStr(parentObj)} ${methodName}`);
      }
      return hookMethod
    }

    /* 使用Proxy模式进行hook可以获得更多特性，但性能也会稍差一些 */
    if (useProxy && Proxy) {
      /* 注意：使用Proxy代理，hookMethod和originMethod将共用同一对象 */
      const handler = { ...proxyHandler };

      /* 下面的写法确定了proxyHandler是无法覆盖construct和apply操作的 */
      if (classHook) {
        handler.construct = function (target, args, newTarget) {
          context = context || this;
          return t._runHooks(parentObj, methodName, originMethod, hookMethod, target, context, args, true, t.hookPropertiesKeyName)
        };
      } else {
        handler.apply = function (target, ctx, args) {
          ctx = context || ctx;
          return t._runHooks(parentObj, methodName, originMethod, hookMethod, target, ctx, args, false, t.hookPropertiesKeyName)
        };
      }

      hookMethod = new Proxy(originMethod, handler);
    } else {
      hookMethod = function () {
        /**
         * 注意此处不能通过 context = context || this
         * 然后通过把context当ctx传递过去
         * 这将导致ctx引用错误
         */
        const ctx = context || this;
        return t._runHooks(parentObj, methodName, originMethod, hookMethod, originMethod, ctx, arguments, classHook, t.hookPropertiesKeyName)
      };

      /* 确保子对象和原型链跟originMethod保持一致 */
      const keys = Reflect.ownKeys(originMethod);
      keys.forEach(keyName => {
        try {
          Object.defineProperty(hookMethod, keyName, {
            get: function () {
              return originMethod[keyName]
            },
            set: function (val) {
              originMethod[keyName] = val;
            }
          });
        } catch (err) {
          // 设置defineProperty的时候出现异常，可能导致hookMethod部分功能缺失，也可能不受影响
          util.debug.log(`[proxyMethodcGenerator] hookMethod defineProperty abnormal.  hookMethod:${methodName}, definePropertyName:${keyName}`, err);
        }
      });
      hookMethod.prototype = originMethod.prototype;
    }

    const hookMethodProperties = hookMethod[t.hookPropertiesKeyName] = {};

    hookMethodProperties.originMethod = originMethod;
    hookMethodProperties.hookMethod = hookMethod;
    hookMethodProperties.isHook = true;
    hookMethodProperties.classHook = classHook;

    util.debug.log(`[hook method] ${util.toStr(parentObj)} ${methodName}`);

    return hookMethod
  }

  _getObjKeysByRule (obj, rule) {
    let excludeRule = null;
    let result = rule;

    if (util.isObj(rule) && rule.include) {
      excludeRule = rule.exclude;
      rule = rule.include;
      result = rule;
    }

    /**
     * for in、Object.keys与Reflect.ownKeys的区别见：
     * https://es6.ruanyifeng.com/#docs/object#%E5%B1%9E%E6%80%A7%E7%9A%84%E9%81%8D%E5%8E%86
     */
    if (rule === '*') {
      result = Object.keys(obj);
    } else if (rule === '**') {
      result = Reflect.ownKeys(obj);
    } else if (rule === '***') {
      result = util.getAllKeys(obj);
    } else if (util.isReg(rule)) {
      result = util.getAllKeys(obj).filter(keyName => rule.test(keyName));
    }

    /* 如果存在排除规则，则需要进行排除 */
    if (excludeRule) {
      result = Array.isArray(result) ? result : [result];
      if (util.isReg(excludeRule)) {
        result = result.filter(keyName => !excludeRule.test(keyName));
      } else if (Array.isArray(excludeRule)) {
        result = result.filter(keyName => !excludeRule.includes(keyName));
      } else {
        result = result.filter(keyName => excludeRule !== keyName);
      }
    }

    return util.toArr(result)
  }

  /**
   * 判断某个函数是否已经被hook
   * @param fn {Function} -必选 要判断的函数
   * @returns {boolean}
   */
  isHook (fn) {
    if (!fn || !fn[this.hookPropertiesKeyName]) {
      return false
    }
    const hookMethodProperties = fn[this.hookPropertiesKeyName];
    return util.isFn(hookMethodProperties.originMethod) && fn !== hookMethodProperties.originMethod
  }

  /**
   * 判断对象下的某个值是否具备hook的条件
   * 注意：具备hook条件和能否直接修改值是两回事，
   * 在进行hook的时候还要检查descriptor.writable是否为false
   * 如果为false则要修改成true才能hook成功
   * @param parentObj
   * @param keyName
   * @returns {boolean}
   */
  isAllowHook (parentObj, keyName) {
    /* 有些对象会设置getter，让读取值的时候就抛错，所以需要try catch 判断能否正常读取属性 */
    try { if (!parentObj[keyName]) return false } catch (e) { return false }
    const descriptor = Object.getOwnPropertyDescriptor(parentObj, keyName);
    return !(descriptor && descriptor.configurable === false)
  }

  /**
   * hook 核心函数
   * @param parentObj {Object} -必选 被hook函数依赖的父对象
   * @param hookMethods {Object|Array|RegExp|string} -必选 被hook函数的函数名或函数名的匹配规则
   * @param fn {Function} -必选 hook之后的回调方法
   * @param type {String} -可选 默认before，指定运行hook函数回调的时机，可选字符串：before、after、replace、error、hangUp
   * @param classHook {Boolean} -可选 默认false，指定是否为针对new（class）操作的hook
   * @param context {Object} -可选 指定运行被hook函数时的上下文对象
   * @param proxyHandler {Object} -可选 仅当用Proxy进行hook时有效，默认使用的是Proxy的apply handler进行hook，如果你有特殊需求也可以配置自己的handler以实现更复杂的功能
   * 附注：不使用Proxy进行hook，可以获得更高性能，但也意味着通用性更差些，对于要hook HTMLElement.prototype、EventTarget.prototype这些对象里面的非实例的函数往往会失败而导致被hook函数执行出错
   * @returns {boolean}
   */
  hook (parentObj, hookMethods, fn, type, classHook, context, proxyHandler) {
    /* 支持对象形式的传参 */
    const opts = arguments[0];
    if (util.isObj(opts) && opts.parentObj && opts.hookMethods) {
      parentObj = opts.parentObj;
      hookMethods = opts.hookMethods;
      fn = opts.fn;
      type = opts.type;
      classHook = opts.classHook;
      context = opts.context;
      proxyHandler = opts.proxyHandler;
    }

    classHook = toBoolean(classHook);
    type = type || 'before';

    if ((!util.isRef(parentObj) && !util.isFn(parentObj)) || !util.isFn(fn) || !hookMethods) {
      return false
    }

    const t = this;

    hookMethods = t._getObjKeysByRule(parentObj, hookMethods);
    hookMethods.forEach(methodName => {
      if (!t.isAllowHook(parentObj, methodName)) {
        util.debug.log(`${util.toStr(parentObj)} [${methodName}] does not support modification`);
        return false
      }

      const descriptor = Object.getOwnPropertyDescriptor(parentObj, methodName);
      if (descriptor && descriptor.writable === false) {
        Object.defineProperty(parentObj, methodName, { writable: true });
      }

      const originMethod = parentObj[methodName];
      let hookMethod = null;

      /* 非函数无法进行hook操作 */
      if (!util.isFn(originMethod)) {
        return false
      }

      hookMethod = t._proxyMethodcGenerator(parentObj, methodName, originMethod, classHook, context, proxyHandler);

      const hookMethodProperties = hookMethod[t.hookPropertiesKeyName];
      if (hookMethodProperties.classHook !== classHook) {
        util.debug.log(`${util.toStr(parentObj)} [${methodName}] Cannot support functions hook and classes hook at the same time `);
        return false
      }

      /* 使用hookMethod接管需要被hook的方法 */
      if (parentObj[methodName] !== hookMethod) {
        parentObj[methodName] = hookMethod;
      }

      t._addHook(hookMethod, fn, type, classHook);
    });
  }

  /* 专门针对new操作的hook，本质上是hook函数的别名，可以少传classHook这个参数，并且明确语义 */
  hookClass (parentObj, hookMethods, fn, type, context, proxyHandler) {
    return this.hook(parentObj, hookMethods, fn, type, true, context, proxyHandler)
  }

  /**
   * 取消对某个函数的hook
   * @param parentObj {Object} -必选 要取消被hook函数依赖的父对象
   * @param hookMethods {Object|Array|RegExp|string} -必选 要取消被hook函数的函数名或函数名的匹配规则
   * @param type {String} -可选 默认before，指定要取消的hook类型，可选字符串：before、after、replace、error、hangUp，如果不指定该选项则取消所有类型下的所有回调
   * @param fn {Function} -必选 取消指定的hook回调函数，如果不指定该选项则取消对应type类型下的所有回调
   * @returns {boolean}
   */
  unHook (parentObj, hookMethods, type, fn) {
    if (!util.isRef(parentObj) || !hookMethods) {
      return false
    }

    const t = this;
    hookMethods = t._getObjKeysByRule(parentObj, hookMethods);
    hookMethods.forEach(methodName => {
      if (!t.isAllowHook(parentObj, methodName)) {
        return false
      }

      const hookMethod = parentObj[methodName];

      if (!t.isHook(hookMethod)) {
        return false
      }

      const hookMethodProperties = hookMethod[t.hookPropertiesKeyName];
      const originMethod = hookMethodProperties.originMethod;

      if (type) {
        const hookKeyName = type + 'Hooks';
        const hooks = hookMethodProperties[hookKeyName] || [];

        if (fn) {
          /* 删除指定类型下的指定hook函数 */
          for (let i = 0; i < hooks.length; i++) {
            if (fn === hooks[i]) {
              hookMethodProperties[hookKeyName].splice(i, 1);
              util.debug.log(`[unHook ${hookKeyName} func] ${util.toStr(parentObj)} ${methodName}`, fn);
              break
            }
          }
        } else {
          /* 删除指定类型下的所有hook函数 */
          if (Array.isArray(hookMethodProperties[hookKeyName])) {
            hookMethodProperties[hookKeyName] = [];
            util.debug.log(`[unHook all ${hookKeyName}] ${util.toStr(parentObj)} ${methodName}`);
          }
        }
      } else {
        /* 彻底还原被hook的函数 */
        if (util.isFn(originMethod)) {
          parentObj[methodName] = originMethod;
          delete parentObj[methodName][t.hookPropertiesKeyName];

          // Object.keys(hookMethod).forEach(keyName => {
          //   if (/Hooks$/.test(keyName) && Array.isArray(hookMethod[keyName])) {
          //     hookMethod[keyName] = []
          //   }
          // })
          //
          // hookMethod.isHook = false
          // parentObj[methodName] = originMethod
          // delete parentObj[methodName].originMethod
          // delete parentObj[methodName].hookMethod
          // delete parentObj[methodName].isHook
          // delete parentObj[methodName].isClassHook

          util.debug.log(`[unHook method] ${util.toStr(parentObj)} ${methodName}`);
        }
      }
    });
  }

  _hook (args, type) {
    const t = this;
    return function (obj, hookMethods, fn, classHook, context, proxyHandler) {
      const opts = args[0];
      if (util.isObj(opts) && opts.parentObj && opts.hookMethods) {
        opts.type = type;
      }
      return t.hook.apply(t, args)
    }
  }

  /* 源函数运行前的hook */
  before (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'before', classHook, context, proxyHandler)
  }

  /* 源函数运行后的hook */
  after (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'after', classHook, context, proxyHandler)
  }

  /* 替换掉要hook的函数，不再运行源函数，换成运行其他逻辑 */
  replace (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'replace', classHook, context, proxyHandler)
  }

  /* 源函数运行出错时的hook */
  error (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'error', classHook, context, proxyHandler)
  }

  /* 底层实现逻辑与replace一样，都是替换掉要hook的函数，不再运行源函数，只不过是为了明确语义，将源函数挂起不再执行，原则上也不再执行其他逻辑，如果要执行其他逻辑请使用replace hook */
  hangUp (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'hangUp', classHook, context, proxyHandler)
  }
}

var hookJs = new HookJs();

/**
 * 禁止对playbackRate进行锁定
 * 部分播放器会阻止修改playbackRate
 * 通过hackDefineProperty来反阻止playbackRate的修改
 * 参考： https://greasyfork.org/zh-CN/scripts/372673
 */

function hackDefineProperCore (target, key, option) {
  if (option && target && target instanceof Element && typeof key === 'string' && key.indexOf('on') >= 0) {
    option.configurable = true;
  }

  if (target instanceof HTMLVideoElement) {
    const unLockProperties = ['playbackRate', 'currentTime', 'volume', 'muted'];
    if (unLockProperties.includes(key)) {
      try {
        debug.log(`禁止对${key}进行锁定`);
        option.configurable = true;
        key = key + '_hack';
      } catch (e) {
        debug.error(`禁止锁定${key}失败！`, e);
      }
    }
  }

  return [target, key, option]
}

function hackDefineProperOnError (args, parentObj, methodName, originMethod, execInfo, ctx) {
  debug.error(`${methodName} error:`, execInfo.error);

  /* 忽略执行异常 */
  return 'SKIP-ERROR'
}

function hackDefineProperty () {
  hookJs.before(Object, 'defineProperty', function (args, parentObj, methodName, originMethod, execInfo, ctx) {
    const option = args[2];
    const ele = args[0];
    const key = args[1];
    const afterArgs = hackDefineProperCore(ele, key, option);
    afterArgs.forEach((arg, i) => {
      args[i] = arg;
    });
  });

  hookJs.before(Object, 'defineProperties', function (args, parentObj, methodName, originMethod, execInfo, ctx) {
    const properties = args[1];
    const ele = args[0];
    if (ele && ele instanceof Element) {
      Object.keys(properties).forEach(key => {
        const option = properties[key];
        const afterArgs = hackDefineProperCore(ele, key, option);
        args[0] = afterArgs[0];
        delete properties[key];
        properties[afterArgs[1]] = afterArgs[2];
      });
    }
  });

  hookJs.error(Object, 'defineProperty', hackDefineProperOnError);
  hookJs.error(Object, 'defineProperties', hackDefineProperOnError);
}

/*!
 * @name      menuCommand.js
 * @version   0.0.1
 * @author    Blaze
 * @date      2019/9/21 14:22
 */

const monkeyMenu = {
  menuIds: {},
  on (title, fn, accessKey) {
    if (title instanceof Function) {
      title = title();
    }

    if (window.GM_registerMenuCommand) {
      const menuId = window.GM_registerMenuCommand(title, fn, accessKey);

      this.menuIds[menuId] = {
        title,
        fn,
        accessKey
      };

      return menuId
    }
  },

  off (id) {
    if (window.GM_unregisterMenuCommand) {
      delete this.menuIds[id];

      /**
       * 批量移除已注册的按钮时，在某些性能较差的机子上会留下数字title的菜单残留
       * 应该属于插件自身导致的BUG，暂时无法解决
       * 所以此处暂时不进行菜单移除，tampermonkey会自动对同名菜单进行合并
       */
      // return window.GM_unregisterMenuCommand(id)
    }
  },

  clear () {
    Object.keys(this.menuIds).forEach(id => {
      this.off(id);
    });
  },

  /**
   * 通过菜单配置进行批量注册，注册前会清空之前注册过的所有菜单
   * @param {array|function} menuOpts 菜单配置，如果是函数则会调用该函数获取菜单配置，并且当菜单被点击后会重新创建菜单，实现菜单的动态更新
   */
  build (menuOpts) {
    this.clear();

    if (Array.isArray(menuOpts)) {
      menuOpts.forEach(menu => {
        if (menu.disable === true) { return }
        this.on(menu.title, menu.fn, menu.accessKey);
      });
    } else if (menuOpts instanceof Function) {
      const menuList = menuOpts();
      if (Array.isArray(menuList)) {
        this._menuBuilder_ = menuOpts;

        menuList.forEach(menu => {
          if (menu.disable === true) { return }

          const menuFn = () => {
            try {
              menu.fn.apply(menu, arguments);
            } catch (e) {
              console.error('[monkeyMenu]', menu.title, e);
            }

            // 每次菜单点击后，重新注册菜单，这样可以确保菜单的状态是最新的
            setTimeout(() => {
              // console.log('[monkeyMenu rebuild]', menu.title)
              this.build(this._menuBuilder_);
            }, 100);
          };

          this.on(menu.title, menuFn, menu.accessKey);
        });
      } else {
        console.error('monkeyMenu build error, no menuList return', menuOpts);
      }
    }
  }
};

/*!
 * @name         menuManager.js
 * @description  菜单管理器
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/08/11 10:05
 * @github       https://github.com/xxxily
 */

function refreshPage (msg) {
  msg = msg || '配置已更改，马上刷新页面让配置生效？';
  const status = confirm(msg);
  if (status) {
    window.location.reload();
  }
}

let monkeyMenuList = [
  {
    title: i18n.t('website'),
    fn: () => {
      openInTab('https://h5player.anzz.top/');
    }
  },
  {
    title: i18n.t('hotkeys'),
    fn: () => {
      openInTab('https://h5player.anzz.top/home/Introduction.html#%E5%BF%AB%E6%8D%B7%E9%94%AE%E5%88%97%E8%A1%A8');
    }
  },
  {
    title: i18n.t('issues'),
    disable: !configManager.get('enhance.unfoldMenu'),
    fn: () => {
      openInTab('https://github.com/xxxily/h5player/issues');
    }
  },
  {
    title: i18n.t('donate'),
    fn: () => {
      openInTab('https://h5player.anzz.top/#%E8%B5%9E');
    }
  },
  /* 推广位，只允许推荐有用的东西 */
  {
    title: i18n.t('recommend'),
    disable: !i18n.language().includes('zh'),
    fn: () => {
      openInTab('https://hello-ai.anzz.top/');
    }
  },
  {
    title: `${configManager.get('enhance.unfoldMenu') ? i18n.t('foldMenu') : i18n.t('unfoldMenu')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.unfoldMenu') ? i18n.t('foldMenu') : i18n.t('unfoldMenu'));
      if (confirm) {
        configManager.setGlobalStorage('enhance.unfoldMenu', !configManager.get('enhance.unfoldMenu'));
        window.location.reload();
      }
    }
  },
  {
    title: i18n.t('setting'),
    disable: true,
    fn: () => {
      openInTab('https://h5player.anzz.top/configure/', null, true);
      window.alert('功能开发中，敬请期待...');
    }
  },
  {
    title: `${configManager.get('enable') ? i18n.t('disableScript') : i18n.t('enableScript')} 「${i18n.t('localSetting')}」`,
    disable: !configManager.get('enhance.unfoldMenu'),
    fn: () => {
      const confirm = window.confirm(configManager.get('enable') ? i18n.t('disableScript') : i18n.t('enableScript'));
      if (confirm) {
        configManager.setLocalStorage('enable', !configManager.get('enable'));
        window.location.reload();
      }
    }
  },
  {
    title: i18n.t('restoreConfiguration'),
    disable: !configManager.get('enhance.unfoldMenu'),
    fn: () => {
      configManager.clear();
      refreshPage();
    }
  }
];

/* 菜单构造函数（必须是函数才能在点击后动态更新菜单状态） */
function menuBuilder () {
  return monkeyMenuList
}

/* 注册动态菜单 */
function menuRegister () {
  monkeyMenu.build(menuBuilder);
}

/**
 * 增加菜单项
 * @param {Object|Array} menuOpts 菜单的配置项目，多个配置项目用数组表示
 */
function addMenu (menuOpts, before) {
  menuOpts = Array.isArray(menuOpts) ? menuOpts : [menuOpts];
  menuOpts = menuOpts.filter(item => item.title && !item.disabled);

  if (before) {
    /* 将菜单追加到其它菜单的前面 */
    monkeyMenuList = menuOpts.concat(monkeyMenuList);
  } else {
    monkeyMenuList = monkeyMenuList.concat(menuOpts);
  }

  /* 重新注册菜单 */
  menuRegister();
}

/**
 * 注册跟h5player相关的菜单，只有检测到存在媒体标签了才会注册
 */
function registerH5playerMenus (h5player) {
  const t = h5player;
  const player = t.player();
  const foldMenu = !configManager.get('enhance.unfoldMenu');

  if (player && !t._hasRegisterH5playerMenus_) {
    const menus = [
      {
        title: () => i18n.t('openCrossOriginFramePage'),
        disable: foldMenu || !isInCrossOriginFrame(),
        fn: () => {
          openInTab(location.href);
        }
      },
      {
        title: () => `${configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime')} 「${i18n.t('localSetting')}」`,
        type: 'local',
        disable: foldMenu,
        fn: () => {
          const confirm = window.confirm(configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime'));
          if (confirm) {
            configManager.setLocalStorage('enhance.blockSetCurrentTime', !configManager.get('enhance.blockSetCurrentTime'));
            window.location.reload();
          }
        }
      },
      {
        title: () => `${configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume')} 「${i18n.t('localSetting')}」`,
        type: 'local',
        disable: foldMenu,
        fn: () => {
          const confirm = window.confirm(configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume'));
          if (confirm) {
            configManager.setLocalStorage('enhance.blockSetVolume', !configManager.get('enhance.blockSetVolume'));
            window.location.reload();
          }
        }
      },
      {
        title: () => `${configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate')} 「${i18n.t('globalSetting')}」`,
        type: 'global',
        disable: foldMenu,
        fn: () => {
          const confirm = window.confirm(configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate'));
          if (confirm) {
            /* 倍速参数，只能全局设置 */
            configManager.setGlobalStorage('enhance.blockSetPlaybackRate', !configManager.get('enhance.blockSetPlaybackRate'));
            window.location.reload();
          }
        }
      },
      {
        title: () => `${configManager.get('enhance.allowAcousticGain') ? i18n.t('notAllowAcousticGain') : i18n.t('allowAcousticGain')} 「${i18n.t('globalSetting')}」`,
        type: 'global',
        disable: foldMenu,
        fn: () => {
          const confirm = window.confirm(configManager.get('enhance.allowAcousticGain') ? i18n.t('notAllowAcousticGain') : i18n.t('allowAcousticGain'));
          if (confirm) {
            configManager.setGlobalStorage('enhance.allowAcousticGain', !configManager.getGlobalStorage('enhance.allowAcousticGain'));
            window.location.reload();
          }
        }
      },
      {
        title: () => `${configManager.get('enhance.allowCrossOriginControl') ? i18n.t('notAllowCrossOriginControl') : i18n.t('allowCrossOriginControl')} 「${i18n.t('globalSetting')}」`,
        type: 'global',
        disable: foldMenu,
        fn: () => {
          const confirm = window.confirm(configManager.get('enhance.allowCrossOriginControl') ? i18n.t('notAllowCrossOriginControl') : i18n.t('allowCrossOriginControl'));
          if (confirm) {
            configManager.setGlobalStorage('enhance.allowCrossOriginControl', !configManager.getGlobalStorage('enhance.allowCrossOriginControl'));
            window.location.reload();
          }
        }
      },
      {
        title: () => `${configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('allowExperimentFeatures')} 「${i18n.t('globalSetting')}」`,
        type: 'global',
        disable: foldMenu,
        fn: () => {
          const confirm = window.confirm(configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('experimentFeaturesWarning'));
          if (confirm) {
            configManager.setGlobalStorage('enhance.allowExperimentFeatures', !configManager.get('enhance.allowExperimentFeatures'));
            window.location.reload();
          }
        }
      },
      {
        title: () => `${configManager.get('enhance.allowExternalCustomConfiguration') ? i18n.t('notAllowExternalCustomConfiguration') : i18n.t('allowExternalCustomConfiguration')} 「${i18n.t('globalSetting')}」`,
        type: 'global',
        disable: foldMenu,
        fn: () => {
          const confirm = window.confirm(configManager.get('enhance.allowExternalCustomConfiguration') ? i18n.t('notAllowExternalCustomConfiguration') : i18n.t('allowExternalCustomConfiguration'));
          if (confirm) {
            configManager.setGlobalStorage('enhance.allowExternalCustomConfiguration', !configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration'));
            window.location.reload();
          }
        }
      },
      {
        title: () => `${configManager.getGlobalStorage('debug') ? i18n.t('closeDebugMode') : i18n.t('openDebugMode')} 「${i18n.t('globalSetting')}」`,
        disable: foldMenu,
        fn: () => {
          const confirm = window.confirm(configManager.getGlobalStorage('debug') ? i18n.t('closeDebugMode') : i18n.t('openDebugMode'));
          if (confirm) {
            configManager.setGlobalStorage('debug', !configManager.getGlobalStorage('debug'));
            window.location.reload();
          }
        }
      }
    ];

    let titlePrefix = '';
    if (isInIframe()) {
      titlePrefix = `[${location.hostname}]`;

      /* 补充title前缀 */
      menus.forEach(menu => {
        const titleFn = menu.title;
        if (titleFn instanceof Function && menu.type === 'local') {
          menu.title = () => titlePrefix + titleFn();
        }
      });
    }

    addMenu(menus);

    t._hasRegisterH5playerMenus_ = true;
  }
}

/**
   * 代理视频播放器的事件注册和取消注册的函数，以对注册事件进行调试或阻断
   * @param {*} player
   * @returns
   */
function proxyHTMLMediaElementEvent () {
  if (HTMLMediaElement.prototype._rawAddEventListener_) {
    return false
  }

  HTMLMediaElement.prototype._rawAddEventListener_ = HTMLMediaElement.prototype.addEventListener;
  HTMLMediaElement.prototype._rawRemoveEventListener_ = HTMLMediaElement.prototype.removeEventListener;

  HTMLMediaElement.prototype.addEventListener = new Proxy(HTMLMediaElement.prototype.addEventListener, {
    apply (target, ctx, args) {
      const eventName = args[0];
      const listener = args[1];
      if (listener instanceof Function && eventName === 'ratechange') {
        /* 对注册了ratechange事件进行检测，如果存在异常行为，则尝试挂起事件 */

        args[1] = new Proxy(listener, {
          apply (target, ctx, args) {
            if (ctx) {
              /* 阻止调速检测，并进行反阻止 */
              if (ctx.playbackRate && eventName === 'ratechange') {
                if (ctx._hasBlockRatechangeEvent_) {
                  return true
                }

                const oldRate = ctx.playbackRate;
                const startTime = Date.now();

                const result = target.apply(ctx, args);

                /**
                 * 通过判断执行ratechange前后的速率是否被改变，
                 * 以及是否出现了超长的执行时间（可能出现了alert弹窗）来检测是否可能存在阻止调速的行为
                 * 其他检测手段待补充
                 */
                const blockRatechangeBehave1 = oldRate !== ctx.playbackRate || Date.now() - startTime > 1000;
                const blockRatechangeBehave2 = ctx._setPlaybackRate_ && ctx._setPlaybackRate_.value !== ctx.playbackRate;
                if (blockRatechangeBehave1 || blockRatechangeBehave2) {
                  debug.info(`[execVideoEvent][${eventName}]检测到可能存在阻止调速的行为，已禁止${eventName}事件的执行`, listener);
                  ctx._hasBlockRatechangeEvent_ = true;
                  return true
                } else {
                  return result
                }
              }
            }

            try {
              return target.apply(ctx, args)
            } catch (e) {
              debug.error(`[proxyPlayerEvent][${eventName}]`, listener, e);
            }
          }
        });
      }

      return target.apply(ctx, args)
    }
  });
}

/*!
 * @name         hotkeysRunner.js
 * @description  热键运行器，实现类似vscode的热键配置方式
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/11/23 18:22
 * @github       https://github.com/xxxily
 */

const Map$1 = window.Map;
const WeakMap = window.WeakMap;
function isObj$1 (obj) { return Object.prototype.toString.call(obj) === '[object Object]' }

function getValByPath$1 (obj, path) {
  path = path || '';
  const pathArr = path.split('.');
  let result = obj;

  /* 递归提取结果值 */
  for (let i = 0; i < pathArr.length; i++) {
    if (!result) break
    result = result[pathArr[i]];
  }

  return result
}

function toArrArgs (args) {
  return Array.isArray(args) ? args : (typeof args === 'undefined' ? [] : [args])
}

function isModifierKey (key) {
  return [
    'ctrl', 'controlleft', 'controlright',
    'shift', 'shiftleft', 'shiftright',
    'alt', 'altleft', 'altright',
    'meta', 'metaleft', 'metaright',
    'capsLock'].includes(key.toLowerCase())
}

const keyAlias = {
  ControlLeft: 'ctrl',
  ControlRight: 'ctrl',
  ShiftLeft: 'shift',
  ShiftRight: 'shift',
  AltLeft: 'alt',
  AltRight: 'alt',
  MetaLeft: 'meta',
  MetaRight: 'meta'
};

const combinationKeysMonitor = (function () {
  const combinationKeysState = new Map$1();

  const hasInit = new WeakMap();

  function init (win = window) {
    if (!win || win !== win.self || !win.addEventListener || hasInit.get(win)) {
      return false
    }

    const timers = {};

    function activeCombinationKeysState (event) {
      isModifierKey(event.code) && combinationKeysState.set(event.code, true);
    }

    function inactivateCombinationKeysState (event) {
      if (!(event instanceof KeyboardEvent)) {
        combinationKeysState.forEach((val, key) => {
          combinationKeysState.set(key, false);
        });
        return true
      }

      /**
       * combinationKeysState状态必须保留一段时间，否则当外部定义的是keyup事件时候，由于这个先注册也先执行，
       * 马上更改combinationKeysState状态，会导致后面定义的事件拿到的是未激活组合键的状态
       */
      if (isModifierKey(event.code)) {
        clearTimeout(timers[event.code]);
        timers[event.code] = setTimeout(() => { combinationKeysState.set(event.code, false); }, 50);
      }
    }

    win.addEventListener('keydown', activeCombinationKeysState, true);
    win.addEventListener('keypress', activeCombinationKeysState, true);
    win.addEventListener('keyup', inactivateCombinationKeysState, true);
    win.addEventListener('blur', inactivateCombinationKeysState, true);

    hasInit.set(win, true);
  }

  function getCombinationKeys () {
    const result = new Map$1();
    combinationKeysState.forEach((val, key) => {
      if (val === true) {
        result.set(key, val);
      }
    });
    return result
  }

  return {
    combinationKeysState,
    getCombinationKeys,
    init
  }
})();

class HotkeysRunner {
  constructor (hotkeys, win = window) {
    this.window = win;
    /* Mac和window使用的修饰符是不一样的 */
    this.MOD = typeof navigator === 'object' && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'Meta' : 'Ctrl';
    // 'Control', 'Shift', 'Alt', 'Meta'

    this.prevPress = null;
    this._prevTimer_ = null;

    this.setHotkeys(hotkeys);
    combinationKeysMonitor.init(win);
  }

  /* 设置其它window对象的组合键监控逻辑 */
  setCombinationKeysMonitor (win) {
    this.window = win;
    combinationKeysMonitor.init(win);
  }

  /* 数据预处理 */
  hotkeysPreprocess (hotkeys) {
    if (!Array.isArray(hotkeys)) {
      return false
    }

    hotkeys.forEach((config) => {
      if (!isObj$1(config) || !config.key || typeof config.key !== 'string') {
        return false
      }

      const keyName = config.key.trim().toLowerCase();
      const mod = this.MOD.toLowerCase();

      /* 增加格式化后的hotkeys数组 */
      config.keyBindings = keyName.split(' ').map(press => {
        const keys = press.split(/\b\+/);
        const mods = [];
        let key = '';

        keys.forEach((k) => {
          k = k === '$mod' ? mod : k;

          if (isModifierKey(k)) {
            mods.push(k);
          } else {
            key = k;
          }
        });

        return [mods, key]
      });
    });

    return hotkeys
  }

  setHotkeys (hotkeys) {
    this.hotkeys = this.hotkeysPreprocess(hotkeys) || [];
  }

  /**
   * 判断当前提供的键盘事件和预期的热键配置是否匹配
   * @param {KeyboardEvent} event
   * @param {Array} press 例如：[['alt', 'shift'], 's']
   * @param {Object} prevCombinationKeys
   * @returns
   */
  isMatch (event, press) {
    if (!event || !Array.isArray(press)) { return false }

    const combinationKeys = event.combinationKeys || combinationKeysMonitor.getCombinationKeys();
    const mods = press[0];
    const key = press[1];

    /* 修饰符个数不匹配 */
    if (mods.length !== combinationKeys.size) {
      return false
    }

    /* 当前按下的键位和预期的键位不匹配 */
    if (key && event.key.toLowerCase() !== key && event.code.toLowerCase() !== key) {
      return false
    }

    /* 当前按下的修饰符和预期的修饰符不匹配 */
    let result = true;
    const modsKey = new Map$1();
    combinationKeys.forEach((val, key) => {
      /* 补充各种可能情况的标识 */
      modsKey.set(key, val);
      modsKey.set(key.toLowerCase(), val);
      keyAlias[key] && modsKey.set(keyAlias[key], val);
    });

    mods.forEach((key) => {
      if (!modsKey.has(key)) {
        result = false;
      }
    });

    return result
  }

  isMatchPrevPress (press) { return this.isMatch(this.prevPress, press) }

  run (opts = {}) {
    const KeyboardEvent = this.window.KeyboardEvent;
    if (!(opts.event instanceof KeyboardEvent)) { return false }

    const event = opts.event;
    const target = opts.target || null;
    const conditionHandler = opts.conditionHandler || opts.whenHandler;

    let matchResult = null;

    this.hotkeys.forEach(hotkeyConf => {
      if (hotkeyConf.disabled || !hotkeyConf.keyBindings) {
        return false
      }

      let press = hotkeyConf.keyBindings[0];

      /* 当存在prevPress，则不再响应与prevPress不匹配的其它快捷键 */
      if (this.prevPress && (hotkeyConf.keyBindings.length <= 1 || !this.isMatchPrevPress(press))) {
        return false
      }

      /* 如果存在上一轮的操作快捷键记录，且之前的快捷键与第一个keyBindings定义的快捷键匹配，则去匹配第二个keyBindings */
      if (this.prevPress && hotkeyConf.keyBindings.length > 1 && this.isMatchPrevPress(press)) {
        press = hotkeyConf.keyBindings[1];
      }

      const isMatch = this.isMatch(event, press);
      if (!isMatch) { return false }

      matchResult = hotkeyConf;

      /* 是否阻止事件冒泡和阻止默认事件 */
      const stopPropagation = opts.stopPropagation || hotkeyConf.stopPropagation;
      const preventDefault = opts.preventDefault || hotkeyConf.preventDefault;
      stopPropagation && event.stopPropagation();
      preventDefault && event.preventDefault();

      /* 记录上一次操作的快捷键，且一段时间后清空该操作的记录 */
      if (press === hotkeyConf.keyBindings[0] && hotkeyConf.keyBindings.length > 1) {
        /* 将prevPress变成一个具有event相关字段的对象 */
        this.prevPress = {
          combinationKeys: combinationKeysMonitor.getCombinationKeys(),
          code: event.code,
          key: event.key,
          keyCode: event.keyCode,
          altKey: event.altKey,
          shiftKey: event.shiftKey,
          ctrlKey: event.ctrlKey,
          metaKey: event.metaKey
        };

        clearTimeout(this._prevTimer_);
        this._prevTimer_ = setTimeout(() => { this.prevPress = null; }, 1000);

        return true
      }

      /* 如果当前匹配到了第二个快捷键，则当forEach循环结束后，马上注销prevPress，给其它快捷键让行 */
      if (hotkeyConf.keyBindings.length > 1 && press !== hotkeyConf.keyBindings[0]) {
        setTimeout(() => { this.prevPress = null; }, 0);
      }

      /* 执行hotkeyConf.command对应的函数或命令 */
      const args = toArrArgs(hotkeyConf.args);
      let commandFunc = hotkeyConf.command;
      if (target && typeof hotkeyConf.command === 'string') {
        commandFunc = getValByPath$1(target, hotkeyConf.command);
      }

      if (!(commandFunc instanceof Function) && target) {
        throw new Error(`[hotkeysRunner] 未找到command: ${hotkeyConf.command} 对应的函数`)
      }

      if (hotkeyConf.when && conditionHandler instanceof Function) {
        const isMatchCondition = conditionHandler.apply(target, toArrArgs(hotkeyConf.when));
        if (isMatchCondition === true) {
          commandFunc.apply(target, args);
        }
      } else {
        commandFunc.apply(target, args);
      }
    });

    return matchResult
  }

  binding (opts = {}) {
    if (!isObj$1(opts) || !Array.isArray(opts.hotkeys)) {
      throw new Error('[hotkeysRunner] 提供给binding的参数不正确')
    }

    opts.el = opts.el || this.window;
    opts.type = opts.type || 'keydown';
    opts.debug && (this.debug = true);

    this.setHotkeys(opts.hotkeys);

    if (typeof opts.el === 'string') {
      opts.el = document.querySelector(opts.el);
    }

    opts.el.addEventListener(opts.type, (event) => {
      opts.event = event;
      this.run(opts);
    }, true);
  }
}

/* eslint-disable camelcase */

/**
 * @license Copyright 2017 - Chris West - MIT Licensed
 * Prototype to easily set the volume (actual and perceived), loudness,
 * decibels, and gain value.
 * https://cwestblog.com/2017/08/22/web-audio-api-controlling-audio-video-loudness/
 */
function MediaElementAmplifier (mediaElem) {
  this._context = new (window.AudioContext || window.webkitAudioContext)();
  this._source = this._context.createMediaElementSource(this._element = mediaElem);
  this._source.connect(this._gain = this._context.createGain());
  this._gain.connect(this._context.destination);
}
[
  'getContext',
  'getSource',
  'getGain',
  'getElement',
  [
    'getVolume',
    function (opt_getPerceived) {
      return (opt_getPerceived ? this.getLoudness() : 1) * this._element.volume
    }
  ],
  [
    'setVolume',
    function (value, opt_setPerceived) {
      var volume = value / (opt_setPerceived ? this.getLoudness() : 1);
      if (volume > 1) {
        this.setLoudness(this.getLoudness() * volume);
        volume = 1;
      }
      this._element.volume = volume;
    }
  ],
  ['getGainValue', function () { return this._gain.gain.value }],
  ['setGainValue', function (value) { this._gain.gain.value = value; }],
  ['getDecibels', function () { return 20 * Math.log10(this.getGainValue()) }],
  ['setDecibels', function (value) { this.setGainValue(Math.pow(10, value / 20)); }],
  ['getLoudness', function () { return Math.pow(2, this.getDecibels() / 10) }],
  ['setLoudness', function (value) { this.setDecibels(10 * Math.log2(value)); }]
].forEach(function (name, fn) {
  if (typeof name === 'string') {
    fn = function () { return this[name.replace('get', '').toLowerCase()] };
  } else {
    fn = name[1];
    name = name[0];
  }
  MediaElementAmplifier.prototype[name] = fn;
});

function download (url, title) {
  const downloadEl = document.createElement('a');
  downloadEl.href = url;
  downloadEl.target = '_blank';
  downloadEl.download = title;
  downloadEl.click();
}

function mediaDownload (mediaEl, title, downloadType) {
  if (mediaEl && (mediaEl.src || mediaEl.currentSrc) && !mediaEl.src.startsWith('blob:')) {
    const mediaInfo = {
      type: mediaEl instanceof HTMLVideoElement ? 'video' : 'audio',
      format: mediaEl instanceof HTMLVideoElement ? 'mp4' : 'mp3'
    };
    let mediaTitle = `${title || mediaEl.title || document.title || Date.now()}_${mediaInfo.type}.${mediaInfo.format}`;

    /**
     * 当媒体包含source标签时，媒体标签的真实地址将会是currentSrc
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentSrc
     */
    const mediaUrl = mediaEl.src || mediaEl.currentSrc;

    /* 小于5分钟的媒体文件，尝试通过fetch下载 */
    if (downloadType === 'blob' || mediaEl.duration < 60 * 5) {
      if (mediaEl.downloading) {
        /* 距上次点下载小于1s的情况直接不响应任何操作 */
        if (Date.now() - mediaEl.downloading < 1000 * 1) {
          return false
        } else {
          const confirm = original.confirm('文件正在下载中，确定重复执行此操作？');
          if (!confirm) {
            return false
          }
        }
      }

      if (mediaEl.hasDownload) {
        const confirm = original.confirm('该媒体文件已经下载过了，确定需要再次下载？');
        if (!confirm) {
          return false
        }
      }

      mediaTitle = original.prompt('请确认文件标题：', mediaTitle) || mediaTitle;

      if (!mediaTitle.endsWith(mediaInfo.format)) {
        mediaTitle = mediaTitle + '.' + mediaInfo.format;
      }

      let fetchUrl = mediaUrl;
      if (mediaUrl.startsWith('http://') && location.href.startsWith('https://')) {
        /* 在https里fetch http资源会导致 block:mixed-content 错误，所以尝试将地址统一成https开头 */
        fetchUrl = mediaUrl.replace('http://', 'https://');
      }

      mediaEl.downloading = Date.now();
      fetch(fetchUrl).then(res => {
        res.blob().then(blob => {
          const blobUrl = window.URL.createObjectURL(blob);
          download(blobUrl, mediaTitle);

          mediaEl.hasDownload = true;
          delete mediaEl.downloading;
          window.URL.revokeObjectURL(blobUrl);
        });
      }).catch(err => {
        original.console.error('fetch下载操作失败:', err);

        /* 下载兜底 */
        download(mediaUrl, mediaTitle);
      });
    } else {
      download(mediaUrl, mediaTitle);
    }
  } else if (mediaSource.hasInit()) {
    /* 下载通过MediaSource管理的媒体文件 */
    mediaSource.downloadMediaSource();
  } else {
    original.alert('当前媒体文件无法下载，下载功能待优化完善');
  }
}

/* 定义支持哪些媒体标签 */
// const supportMediaTags = ['video', 'bwp-video', 'audio']
const supportMediaTags = ['video', 'bwp-video'];

let TCC$1 = null;
const h5Player = {
  mediaCore,
  mediaPlusApi: null,
  mediaSource,
  configManager,
  /* 提示文本的字号 */
  fontSize: 12,
  enable: true,
  globalMode: true,
  playerInstance: null,
  scale: 1,
  translate: {
    x: 0,
    y: 0
  },
  rotate: 0,

  /* 水平镜像翻转, 0 或 180 */
  rotateY: 0,
  /* 垂直镜像翻转, 0 或 180 */
  rotateX: 0,

  defaultTransform: {
    scale: 1,
    translate: {
      x: 0,
      y: 0
    },
    rotate: 0,
    rotateY: 0,
    rotateX: 0
  },

  /* 存储旧的Transform值 */
  historyTransform: {},

  playbackRate: configManager.get('media.playbackRate'),
  volume: configManager.get('media.volume'),
  lastPlaybackRate: 1,
  /* 快进快退步长 */
  skipStep: 5,

  /* 监听鼠标活动的观察对象 */
  mouseObserver: new MouseObserver(),

  /* 获取当前播放器的实例 */
  player: function () {
    const t = this;
    let playerInstance = t.playerInstance;

    if (!playerInstance) {
      const mediaList = t.getPlayerList();
      if (mediaList.length) {
        playerInstance = mediaList[mediaList.length - 1];
        t.playerInstance = playerInstance;
        t.initPlayerInstance(mediaList.length === 1);
      }
    }

    if (playerInstance && !t.mediaPlusApi) {
      t.mediaPlusApi = mediaCore.mediaPlus(playerInstance);
    }

    return playerInstance
  },

  isAudioInstance () {
    return isAudioElement(this.player())
  },

  /* 每个网页可能存在的多个video播放器 */
  getPlayerList: function () {
    const list = mediaCore.mediaElementList || [];

    function findPlayer (context) {
      supportMediaTags.forEach(tagName => {
        context.querySelectorAll(tagName).forEach(function (player) {
          if (player.tagName.toLowerCase() === 'bwp-video') {
            /* 将B站的BWP-VIDEO标识为HTMLVideoElement */
            player.HTMLVideoElement = true;
          }

          if (isMediaElement(player) && !list.includes(player)) {
            list.push(player);
          }
        });
      });
    }

    findPlayer(document);

    // 被封装在 shadow dom 里面的video
    if (window._shadowDomList_) {
      window._shadowDomList_.forEach(function (shadowRoot) {
        findPlayer(shadowRoot);
      });
    }

    return list
  },

  getPlayerWrapDom: function () {
    const t = this;
    const player = t.player();
    if (!player) return

    let wrapDom = null;
    const playerBox = player.getBoundingClientRect();
    eachParentNode(player, function (parent) {
      if (parent === document || !parent.getBoundingClientRect) return
      const parentBox = parent.getBoundingClientRect();
      if (parentBox.width && parentBox.height) {
        if (parentBox.width === playerBox.width && parentBox.height === playerBox.height) {
          wrapDom = parent;
        }
      }
    });
    return wrapDom
  },

  /* 挂载到页面上的window对象，用于调试 */
  async mountToGlobal () {
    try {
      const pageWindow = await getPageWindow();
      if (pageWindow) {
        pageWindow._h5Player = h5Player || 'null';
        if (window.top !== window) {
          pageWindow._h5PlayerInFrame = h5Player || 'null';
        }
        pageWindow._window = window || '';
        debug.log('h5Player对象已成功挂载到全局');
      }
    } catch (e) {
      debug.error(e);
    }
  },

  /**
   * 初始化播放器实例
   * @param isSingle 是否为单实例video标签
   */
  initPlayerInstance (isSingle) {
    const t = this;
    if (!t.playerInstance) return

    const player = t.playerInstance;

    t.mediaPlusApi = mediaCore.mediaPlus(player);

    t.initPlaybackRate();
    t.isFoucs();
    t.proxyPlayerInstance(player);

    t.unLockPlaybackRate();
    t.setPlaybackRate();
    t.lockPlaybackRate(1000);

    /* 增加通用全屏，网页全屏api */
    player._fullScreen_ = new FullScreen(player);
    player._fullPageScreen_ = new FullScreen(player, true);

    /* 注册热键运行器 */
    t.registerHotkeysRunner();

    if (!player._hasCanplayEvent_) {
      player.addEventListener('canplay', function (event) {
        t.initAutoPlay(player);
      });
      player._hasCanplayEvent_ = true;
    }

    /* 播放的时候进行相关同步操作 */
    if (!player._hasPlayerInitEvent_) {
      let setPlaybackRateOnPlayingCount = 0;
      player.addEventListener('playing', function (event) {
        t.unLockPlaybackRate();
        t.setPlaybackRate(null, true);
        t.lockPlaybackRate(1000);

        /* 同步播放音量 */
        if (configManager.get('enhance.blockSetVolume') === true && event.target.muted === false) {
          t.setVolume(configManager.getGlobalStorage('media.volume'), true);
        }

        /* 禁止默认的进度控制 */
        if (configManager.get('enhance.blockSetCurrentTime') === true) {
          t.lockCurrentTime();
        }

        /* 恢复播放进度 */
        t.setPlayProgress(player);

        if (setPlaybackRateOnPlayingCount === 0) {
          /* 同步之前设定的播放速度，音量等 */
          t.unLockPlaybackRate();
          t.setPlaybackRate();
          t.lockPlaybackRate(1000);

          /* 启动播放进度记录 */
          setTimeout(() => {
            t.playProgressRecorder(player);
          }, 2000);
        } else {
          t.unLockPlaybackRate();
          t.setPlaybackRate(null, true);
          t.lockPlaybackRate(1000);
        }
        setPlaybackRateOnPlayingCount += 1;
      });

      player._hasPlayerInitEvent_ = true;
    }

    /* 进行自定义初始化操作 */
    const taskConf = TCC$1.getTaskConfig();
    if (taskConf.init) {
      TCC$1.doTask('init', player);
    }

    /* 注册鼠标响应事件 */
    t.mouseObserver.on(player, 'click', function (event, offset, target) {
      // debug.log('捕捉到鼠标点击事件：', event, offset, target)
    });

    /* 画中画事件监听 */
    player.addEventListener('enterpictureinpicture', () => {
      monkeyMsg.send('globalPictureInPictureInfo', {
        usePictureInPicture: true
      });
      debug.log('enterpictureinpicture', player);
    });
    player.addEventListener('leavepictureinpicture', () => {
      t.leavepictureinpictureTime = Date.now();

      monkeyMsg.send('globalPictureInPictureInfo', {
        usePictureInPicture: false
      });
      debug.log('leavepictureinpicture', player);
    });

    if (debug.isDebugMode()) {
      player.addEventListener('loadeddata', function () {
        debug.log(`video url: ${player.src} video duration: ${player.duration} video dom:`, player);
      });

      player.addEventListener('durationchange', function () {
        debug.log(`video durationchange: ${player.duration}`);
      });
    }
  },

  registerHotkeysRunner () {
    if (!this.hotkeysRunner) {
      this.hotkeysRunner = new HotkeysRunner(configManager.get('hotkeys'));

      if (isInIframe() && !isInCrossOriginFrame()) {
        /* 让顶层页面也可以监听组合键的触发 */
        this.hotkeysRunner.setCombinationKeysMonitor(window.top);
      }
    }
  },

  /* 刚关闭画中画不久，此段时间内允许跨TAB控制 */
  isLeavepictureinpictureAwhile () {
    const t = this;
    return t.leavepictureinpictureTime && (Date.now() - t.leavepictureinpictureTime < 1000 * 10)
  },

  /**
   * 对播放器实例的方法或属性进行代理
   * @param player
   */
  proxyPlayerInstance (player) {
    if (!player) return

    /* 要代理的方法或属性列表 */
    const proxyList = [
      'play',
      'pause'
    ];

    proxyList.forEach(key => {
      const originKey = 'origin_' + key;
      if (Reflect.has(player, key) && !Reflect.has(player, originKey)) {
        player[originKey] = player[key];
        const proxy = new Proxy(player[key], {
          apply (target, ctx, args) {
            // debug.log(key + '被调用')

            /* 处理挂起逻辑 */
            const hangUpInfo = player._hangUpInfo_ || {};
            const hangUpDetail = hangUpInfo[key] || hangUpInfo['hangUp_' + key];
            const needHangUp = hangUpDetail && hangUpDetail.timeout >= Date.now();
            if (needHangUp) {
              debug.log(key + '已被挂起，本次调用将被忽略');
              return false
            }

            return target.apply(ctx || player, args)
          }
        });

        player[key] = proxy;
      }
    });

    if (!player._hangUp_) {
      player._hangUpInfo_ = {};
      /**
       * 挂起player某个函数的调用
       * @param name {String} -必选 player方法或属性名，名字写对外，还须要该方法或属性被代理了才能进行挂起，否则这将是个无效的调用
       * @param timeout {Number} -可选 挂起多长时间，默认200ms
       * @private
       */
      player._hangUp_ = function (name, timeout) {
        timeout = Number(timeout) || 200;
        // debug.log('_hangUp_', name, timeout)
        player._hangUpInfo_[name] = {
          timeout: Date.now() + timeout
        };
      };

      /* 取消挂起 */
      player._unHangUp_ = function (name) {
        if (player._hangUpInfo_ && player._hangUpInfo_[name]) {
          player._hangUpInfo_[name].timeout = Date.now() - 1;
        }
      };
    }
  },

  /**
   * 初始化自动播放逻辑
   * 必须是配置了自动播放按钮选择器得的才会进行自动播放
   */
  initAutoPlay: function (p) {
    const t = this;
    const player = p || t.player();
    const taskConf = TCC$1.getTaskConfig();

    /* 注册开启禁止自动播放的控制菜单 */
    if (taskConf.autoPlay) {
      if (configManager.getLocalStorage('media.autoPlay') === null) {
        configManager.setLocalStorage('media.autoPlay', true);
      }

      addMenu({
        title: () => configManager.getLocalStorage('media.autoPlay') ? i18n.t('disableInitAutoPlay') : i18n.t('enableInitAutoPlay'),
        fn: () => {
          const confirm = window.confirm(configManager.getLocalStorage('media.autoPlay') ? i18n.t('disableInitAutoPlay') : i18n.t('enableInitAutoPlay'));
          if (confirm) {
            const autoPlay = configManager.getLocalStorage('media.autoPlay');
            if (autoPlay === null) {
              alert(i18n.t('configFail'));
            } else {
              configManager.setLocalStorage('media.autoPlay', !autoPlay);
            }
          }
        }
      });
    }

    // 在轮询重试的时候，如果实例变了，或处于隐藏页面中则不进行自动播放操作
    if (!configManager.get('media.autoPlay') || (!p && t.hasInitAutoPlay) || !player || (p && p !== t.player()) || document.hidden) {
      return false
    }

    /**
     * 元素不在可视范围，不允许进行初始化自动播放逻辑
     * 由于iframe下元素的可视范围判断不准确，所以iframe下也禁止初始化自动播放逻辑
     * TODO 待优化
     */
    if (!isInViewPort(player) || isInIframe()) {
      return false
    }

    if (!taskConf.autoPlay) {
      return false
    }

    t.hasInitAutoPlay = true;

    if (player && taskConf.autoPlay && player.paused) {
      TCC$1.doTask('autoPlay');
      if (player.paused) {
        // 轮询重试
        if (!player._initAutoPlayCount_) {
          player._initAutoPlayCount_ = 1;
        }
        player._initAutoPlayCount_ += 1;
        if (player._initAutoPlayCount_ >= 10) {
          return false
        }
        setTimeout(function () {
          t.initAutoPlay(player);
        }, 200);
      }
    }
  },

  /* 设置视频全屏 */
  setFullScreen () {
    const player = this.player();
    const isDo = TCC$1.doTask('fullScreen');
    if (!isDo && player && player._fullScreen_) {
      player._fullScreen_.toggle();
    }
  },

  /* 设置页面全屏 */
  setWebFullScreen: function () {
    const t = this;
    const player = t.player();
    const isDo = TCC$1.doTask('webFullScreen');
    if (!isDo && player && player._fullPageScreen_) {
      player._fullPageScreen_.toggle();
    }
  },

  initPlaybackRate () {
    const t = this;
    t.playbackRate = t.getPlaybackRate();
  },

  playbackRateInfo: {
    lockTimeout: Date.now() - 1,
    time: Date.now(),
    /* 未初始化播放实列前，不知道倍速是多少，所以设置为-1 */
    value: -1
  },

  getPlaybackRate () {
    let playbackRate = configManager.get('media.playbackRate') || this.playbackRate;
    if (isInIframe()) {
      const globalPlaybackRate = configManager.getGlobalStorage('media.playbackRate');
      if (globalPlaybackRate) {
        playbackRate = globalPlaybackRate;
      }
    }
    return Number(Number(playbackRate).toFixed(1))
  },

  /* 锁定playbackRate，禁止调速 */
  lockPlaybackRate: function (timeout = 200) {
    if (this.mediaPlusApi) {
      if (configManager.get('enhance.blockSetPlaybackRate') === true) {
        // 如果配置了要锁死外部对playbackRate的操作，则直接给一个超大的值
        timeout = 1000 * 60 * 60 * 24 * 365;
      }

      this.mediaPlusApi.lockPlaybackRate(timeout);
      return true
    }

    this.playbackRateInfo.lockTimeout = Date.now() + timeout;
  },

  unLockPlaybackRate: function () {
    if (this.mediaPlusApi) {
      this.mediaPlusApi.unLockPlaybackRate();
      return true
    }

    this.playbackRateInfo.lockTimeout = Date.now() - 1;
  },

  isLockPlaybackRate: function () {
    if (this.mediaPlusApi) {
      return this.mediaPlusApi.isLockPlaybackRate()
    }

    return Date.now() - this.playbackRateInfo.lockTimeout < 0
  },

  /* 设置播放速度 */
  setPlaybackRate: function (num, notips, duplicate) {
    const t = this;
    const player = t.player();

    if (t.isLockPlaybackRate()) {
      debug.info('调速能力已被锁定');
      return false
    }

    if (TCC$1.doTask('playbackRate')) {
      // debug.log('[TCC][playbackRate]', 'suc')
      return
    }

    if (!player) return

    let curPlaybackRate;
    if (num) {
      num = Number(num);
      if (Number.isNaN(num)) {
        debug.error('h5player: 播放速度转换出错');
        return false
      }

      if (num <= 0) {
        num = 0.1;
      } else if (num > 16) {
        num = 16;
      }

      num = Number(num.toFixed(1));
      curPlaybackRate = num;
    } else {
      curPlaybackRate = t.getPlaybackRate();
    }

    /* 记录播放速度的信息 */
    t.playbackRate = curPlaybackRate;
    if (isInIframe()) {
      configManager.setGlobalStorage('media.playbackRate', curPlaybackRate);
    } else {
      configManager.set('media.playbackRate', curPlaybackRate);
    }

    if (t.mediaPlusApi) {
      t.mediaPlusApi.setPlaybackRate(curPlaybackRate);

      if (!(!num && curPlaybackRate === 1) && !notips) {
        t.tips(i18n.t('tipsMsg.playspeed') + player.playbackRate);
      }

      /* 将播放倍速同步到全部媒体元素 */
      const mediaList = t.getPlayerList();
      mediaList.forEach(media => {
        if (media !== player) {
          const mediaPlusApi = mediaCore.mediaPlus(media);
          mediaPlusApi && mediaPlusApi.setPlaybackRate(curPlaybackRate);
        }
      });

      return true
    }

    delete player.playbackRate;
    player.playbackRate = curPlaybackRate;

    t.playbackRateInfo.time = Date.now();
    t.playbackRateInfo.value = curPlaybackRate;
    player._setPlaybackRate_ = {
      time: Date.now(),
      value: curPlaybackRate
    };

    try {
      const playbackRateDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate');
      originalMethods.Object.defineProperty.call(Object, player, 'playbackRate', {
        configurable: true,
        get: function () {
          /**
           * 在油管，如果返回的是playbackRateDescriptor.get.apply(player, arguments)，调速会出现波动和异常
           * 暂时不知是什么原因，所以还是先返回curPlaybackRate
           */
          return curPlaybackRate || playbackRateDescriptor.get.apply(player, arguments)
        },
        set: function (val) {
          if (typeof val !== 'number') {
            return false
          }

          /* 有些网站是通过定时器不断刷playbackRate的，所以通过计时器减少不必要的信息输出 */
          !Number.isInteger(player._blockSetPlaybackRateTips_) && (player._blockSetPlaybackRateTips_ = 0);

          if (TCC$1.doTask('blockSetPlaybackRate')) {
            player._blockSetPlaybackRateTips_++;
            player._blockSetPlaybackRateTips_ < 3 && debug.info('调速能力已被自定义的调速任务进行处理');
            return false
          }

          if (configManager.get('enhance.blockSetPlaybackRate') === true) {
            player._blockSetPlaybackRateTips_++;
            player._blockSetPlaybackRateTips_ < 3 && debug.info('调速能力已被blockSetPlaybackRate锁定');
            return false
          } else {
            t.setPlaybackRate(val);
          }
        }
      });
    } catch (e) {
      debug.error('解锁playbackRate失败', e);
    }

    /* 本身处于1倍播放速度的时候不再提示 */
    if (!num && curPlaybackRate === 1) {
      return true
    } else {
      !notips && t.tips(i18n.t('tipsMsg.playspeed') + player.playbackRate);
    }

    /**
     * 重复触发最后一次倍速的设定
     * 解决YouTube快速调速时并不生效，要停顿下来再调节一下才能生效的问题
     */
    if (!duplicate && configManager.get('enhance.blockSetPlaybackRate') === true) {
      clearTimeout(t._setPlaybackRateDuplicate_);
      clearTimeout(t._setPlaybackRateDuplicate2_);
      const duplicatePlaybackRate = () => {
        t.unLockPlaybackRate();
        t.setPlaybackRate(curPlaybackRate, true, true);
        t.lockPlaybackRate(1000);
      };
      t._setPlaybackRateDuplicate_ = setTimeout(duplicatePlaybackRate, 600);
      /* 600ms时重新触发无效的话，再来个1200ms后触发，如果是1200ms才生效，则调速生效的延迟已经非常明显了 */
      t._setPlaybackRateDuplicate2_ = setTimeout(duplicatePlaybackRate, 1200);
    }
  },

  /**
   * 加强版的倍速调节，当短时间内设置同一个值时，会认为需更快的跳速能力
   * 则会对调速的数值进行叠加放大，从而达到快速跳跃地进行倍速调节的目的
   * 可用于视频广告的高速快进，片头片尾的速看等场景
   * @param {*} num
   */
  setPlaybackRatePlus: function (num) {
    num = Number(num);
    if (!num || !Number.isInteger(num)) {
      return false
    }

    const t = this;
    t.playbackRatePlusInfo = t.playbackRatePlusInfo || {};
    t.playbackRatePlusInfo[num] = t.playbackRatePlusInfo[num] || {
      time: Date.now() - 1000,
      value: num
    };

    if (Date.now() - t.playbackRatePlusInfo[num].time < 300) {
      t.playbackRatePlusInfo[num].value = t.playbackRatePlusInfo[num].value + num;
    } else {
      t.playbackRatePlusInfo[num].value = num;
    }

    t.playbackRatePlusInfo[num].time = Date.now();

    t.unLockPlaybackRate();
    t.setPlaybackRate(t.playbackRatePlusInfo[num].value);
    t.lockPlaybackRate(1000);
  },

  /* 恢复播放速度，还原到1倍速度、或恢复到上次的倍速 */
  resetPlaybackRate: function (player) {
    const t = this;
    player = player || t.player();

    t.unLockPlaybackRate();

    const oldPlaybackRate = Number(player.playbackRate);
    const playbackRate = oldPlaybackRate === 1 ? t.lastPlaybackRate : 1;
    if (oldPlaybackRate !== 1) {
      t.lastPlaybackRate = oldPlaybackRate;
    }

    t.setPlaybackRate(playbackRate);

    /* 防止外部调速逻辑的干扰，所以锁定一段时间 */
    t.lockPlaybackRate(1000);
  },

  /* 提升播放速率 */
  setPlaybackRateUp (num) {
    num = numUp(num) || 0.1;
    if (this.player()) {
      this.unLockPlaybackRate();
      this.setPlaybackRate(this.player().playbackRate + num);

      /* 防止外部调速逻辑的干扰，所以锁定一段时间 */
      this.lockPlaybackRate(1000);
    }
  },

  /* 降低播放速率 */
  setPlaybackRateDown (num) {
    num = numDown(num) || -0.1;
    if (this.player()) {
      this.unLockPlaybackRate();
      this.setPlaybackRate(this.player().playbackRate + num);

      /* 防止外部调速逻辑的干扰，所以锁定一段时间 */
      this.lockPlaybackRate(1000);
    }
  },

  /**
   * 锁定播放进度的控制逻辑
   * 跟锁定音量和倍速不一样，播放进度是跟视频实例有密切相关的，所以其锁定信息必须依附于播放实例
   */
  lockCurrentTime: function (timeout = 200) {
    if (this.mediaPlusApi) {
      if (configManager.get('enhance.blockSetCurrentTime') === true) {
        // 如果配置了要锁死外部对currentTime的操作，则直接给一个超大的值
        timeout = 1000 * 60 * 60 * 24 * 365;
      }

      this.mediaPlusApi.lockCurrentTime(timeout);
      return true
    }

    const player = this.player();
    if (player) {
      player.currentTimeInfo = player.currentTimeInfo || {};
      player.currentTimeInfo.lockTimeout = Date.now() + timeout;
    }
  },

  unLockCurrentTime: function () {
    if (this.mediaPlusApi) {
      this.mediaPlusApi.unLockCurrentTime();
      return true
    }

    const player = this.player();
    if (player) {
      player.currentTimeInfo = player.currentTimeInfo || {};
      player.currentTimeInfo.lockTimeout = Date.now() - 1;
    }
  },

  isLockCurrentTime: function () {
    if (this.mediaPlusApi) {
      return this.mediaPlusApi.isLockCurrentTime()
    }

    const player = this.player();
    if (player && player.currentTimeInfo && player.currentTimeInfo.lockTimeout) {
      return Date.now() - player.currentTimeInfo.lockTimeout < 0
    } else {
      return false
    }
  },

  /* 设置播放进度 */
  setCurrentTime: function (num) {
    if (!num && num !== 0) return
    num = Number(num);
    const _num = Math.abs(Number(num.toFixed(1)));

    const t = this;
    const player = t.player();

    if (t.isLockCurrentTime()) {
      return false
    }

    if (TCC$1.doTask('currentTime')) {
      // debug.log('[TCC][currentTime]', 'suc')
      return
    }

    if (this.mediaPlusApi) {
      this.mediaPlusApi.setCurrentTime(_num);
      return true
    }

    delete player.currentTime;
    player.currentTime = _num;
    player.currentTimeInfo = player.currentTimeInfo || {};
    player.currentTimeInfo.time = Date.now();
    player.currentTimeInfo.value = _num;

    try {
      const currentTimeDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime');
      originalMethods.Object.defineProperty.call(Object, player, 'currentTime', {
        configurable: true,
        enumerable: true,
        get: function () {
          return currentTimeDescriptor.get.apply(player, arguments)
        },
        set: function (val) {
          if (typeof val !== 'number' || TCC$1.doTask('blockSetCurrentTime') || configManager.get('enhance.blockSetCurrentTime') === true) {
            return false
          }

          if (t.isLockCurrentTime()) {
            return false
          }

          player.currentTimeInfo.time = Date.now();
          player.currentTimeInfo.value = val;

          return currentTimeDescriptor.set.apply(player, arguments)
        }
      });
    } catch (e) {
      debug.error('解锁currentTime失败', e);
    }
  },

  setCurrentTimeUp (num) {
    num = Number(numUp(num) || this.skipStep);

    if (TCC$1.doTask('addCurrentTime')) ; else {
      if (this.player()) {
        this.unLockCurrentTime();
        this.setCurrentTime(this.player().currentTime + num);

        /* 防止外部进度控制逻辑的干扰，所以锁定一段时间 */
        this.lockCurrentTime(500);

        this.tips(i18n.t('tipsMsg.forward') + num + i18n.t('tipsMsg.seconds'));
      }
    }
  },

  setCurrentTimeDown (num) {
    num = Number(numDown(num) || -this.skipStep);

    if (TCC$1.doTask('subtractCurrentTime')) ; else {
      if (this.player()) {
        let currentTime = this.player().currentTime + num;
        if (currentTime < 1) {
          currentTime = 0;
        }

        this.unLockCurrentTime();
        this.setCurrentTime(currentTime);

        /* 防止外部进度控制逻辑的干扰，所以锁定一段时间 */
        this.lockCurrentTime(500);

        this.tips(i18n.t('tipsMsg.backward') + Math.abs(num) + i18n.t('tipsMsg.seconds'));
      }
    }
  },

  volumeInfo: {
    lockTimeout: Date.now() - 1,
    time: Date.now(),
    /* 未初始化播放实列前，不知道音量是多少，所以设置为-1 */
    value: -1
  },

  getVolume: function () {
    let volume = configManager.get('media.volume');
    if (isInIframe() || configManager.get('enhance.blockSetVolume') === true) {
      const globalVolume = configManager.getGlobalStorage('media.volume');
      if (globalVolume !== null) {
        volume = globalVolume;
      }
    }
    return Number(Number(volume).toFixed(2))
  },

  /* 锁定音量，禁止调音 */
  lockVolume: function (timeout = 200) {
    if (this.mediaPlusApi) {
      if (configManager.get('enhance.blockSetVolume') === true) {
        // 如果配置了要锁死外部对voluem的操作，则直接给一个超大的值
        timeout = 1000 * 60 * 60 * 24 * 365;
      }

      this.mediaPlusApi.lockVolume(timeout);
      return true
    }

    this.volumeInfo.lockTimeout = Date.now() + timeout;
  },

  unLockVolume: function () {
    if (this.mediaPlusApi) {
      this.mediaPlusApi.unLockVolume();
      return true
    }

    this.volumeInfo.lockTimeout = Date.now() - 1;
  },

  isLockVolume: function () {
    if (this.mediaPlusApi) {
      return this.mediaPlusApi.isLockVolume()
    }

    return Date.now() - this.volumeInfo.lockTimeout < 0
  },

  /* 设置声音大小 */
  setVolume: function (num, notips, outerCall) {
    const t = this;
    const player = t.player();

    if (t.isLockVolume()) {
      return false
    }

    if (!num && num !== 0) {
      num = t.getVolume();
    }

    num = Number(num).toFixed(2);
    if (num < 0) {
      num = 0;
    }

    if (num > 1 && configManager.get('enhance.allowAcousticGain')) {
      num = Math.ceil(num);

      try {
        player._amp_ = player._amp_ || new MediaElementAmplifier(player);
      } catch (e) {
        num = 1;
        debug.error('媒体声音响度增益逻辑异常', e);
      }

      /* 限定增益的最大值 */
      if (num > 6) {
        num = 6;
      }

      if (!player._amp_ || !player._amp_.setLoudness) {
        num = 1;
      }
    } else if (num > 1) {
      num = 1;
    }

    /* 记录播放音量信息 */
    t.volume = num;

    /* 使用音量增益逻辑，增益音量不进行本地存储记录 */
    if (num > 1 && player._amp_ && player._amp_.setLoudness) {
      player._amp_.setLoudness(num);

      if (!outerCall) { player.muted = false; }

      !notips && t.tips(i18n.t('tipsMsg.volume') + parseInt(num * 100) + '%');
      return true
    }

    if (isInIframe() || configManager.get('enhance.blockSetVolume') === true) {
      configManager.setGlobalStorage('media.volume', num);
    } else {
      configManager.setLocalStorage('media.volume', num);
    }

    if (t.mediaPlusApi) {
      t.mediaPlusApi.setVolume(num);

      /* 将播放音量同步到全部媒体元素 */
      const mediaList = t.getPlayerList();
      mediaList.forEach(media => {
        if (media !== player) {
          const mediaPlusApi = mediaCore.mediaPlus(media);
          mediaPlusApi && mediaPlusApi.setVolume(num);
        }
      });
    } else {
      delete player.volume;
      player.volume = num;
      t.volumeInfo.time = Date.now();
      t.volumeInfo.value = num;

      try {
        const volumeDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'volume');
        originalMethods.Object.defineProperty.call(Object, player, 'volume', {
          configurable: true,
          get: function () {
            return volumeDescriptor.get.apply(player, arguments)
          },
          set: function (val) {
            if (typeof val !== 'number' || val < 0) {
              return false
            }

            if (TCC$1.doTask('blockSetVolume') || configManager.get('enhance.blockSetVolume') === true) {
              return false
            } else {
              t.setVolume(val, false, true);
            }
          }
        });
      } catch (e) {
        debug.error('解锁volume失败', e);
      }
    }

    /* 调节音量的时候顺便把静音模式关闭 */
    if (!outerCall) { player.muted = false; }

    !notips && t.tips(i18n.t('tipsMsg.volume') + parseInt(player.volume * 100) + '%');
  },

  setVolumeUp (num) {
    num = numUp(num) || 0.2;
    const player = this.player();
    if (player) {
      this.unLockVolume();

      if (this.volume > 1 && player._amp_) {
        this.setVolume(this.volume + num);
      } else {
        this.setVolume(player.volume + num);
      }

      /* 防止外部调音逻辑的干扰，所以锁定一段时间 */
      this.lockVolume(500);
    }
  },

  setVolumeDown (num) {
    num = numDown(num) || -0.2;
    const player = this.player();
    if (player) {
      this.unLockVolume();

      if (this.volume > 1 && player._amp_) {
        this.setVolume(Math.floor(this.volume + num));
      } else {
        this.setVolume(player.volume + num);
      }

      /* 防止外部调音逻辑的干扰，所以锁定一段时间 */
      this.lockVolume(500);
    }
  },

  /* 采集Transform值的历史变更记录，以便后续进行还原 */
  collectTransformHistoryInfo () {
    const t = this;
    Object.keys(t.defaultTransform).forEach(key => {
      if (key === 'translate') {
        const translate = t.defaultTransform.translate;
        t.historyTransform.translate = t.historyTransform.translate || {};
        Object.keys(translate).forEach(subKey => {
          if (Number(t.translate[subKey]) !== t.defaultTransform.translate[subKey]) {
            t.historyTransform.translate[subKey] = t.translate[subKey];
          }
        });
      } else {
        if (Number(t[key]) !== t.defaultTransform[key]) {
          t.historyTransform[key] = t[key];
        }
      }
    });
  },

  /* 判断h5Player下的Transform值是否跟默认的Transform值一致 */
  isSameAsDefaultTransform () {
    let result = true;
    const t = this;
    Object.keys(t.defaultTransform).forEach(key => {
      if (isObj(t.defaultTransform[key])) {
        Object.keys(t.defaultTransform[key]).forEach(subKey => {
          if (Number(t[key][subKey]) !== t.defaultTransform[key][subKey]) {
            result = false;
          }
        });
      } else {
        if (Number(t[key]) !== t.defaultTransform[key]) {
          result = false;
        }
      }
    });
    return result
  },

  /* 设置视频画面的缩放与位移 */
  setTransform (notTips) {
    const t = this;
    const player = t.player();
    const scale = t.scale = Number(t.scale).toFixed(2);
    const translate = t.translate;

    const mirror = t.rotateX === 180 ? `rotateX(${t.rotateX}deg)` : (t.rotateY === 180 ? `rotateY(${t.rotateY}deg)` : '');
    player.style.transform = `scale(${scale}) translate(${translate.x}px, ${translate.y}px) rotate(${t.rotate}deg) ${mirror}`;

    let tipsMsg = i18n.t('tipsMsg.videozoom') + `${(scale * 100).toFixed(0)}%`;
    if (translate.x) {
      tipsMsg += ` ${i18n.t('tipsMsg.horizontal')}${t.translate.x}px`;
    }
    if (translate.y) {
      tipsMsg += ` ${i18n.t('tipsMsg.vertical')}${t.translate.y}px`;
    }

    if (notTips === true) ; else {
      t.collectTransformHistoryInfo();
      t.tips(tipsMsg);
    }

    /* 始终保持transform样式的正常 */
    if (!t._transformStateGuard_) {
      t._transformStateGuard_ = setInterval(() => {
        t.setTransform(true);
      }, 300);
    }
  },

  /* 视频画面旋转 90 度 */
  setRotate () {
    const t = this;
    t.rotate += 90;
    if (t.rotate % 360 === 0) t.rotate = 0;
    t.setTransform(true);
    t.tips(i18n.t('tipsMsg.imgrotate') + t.rotate + '°');
  },

  /* 设置镜像翻转 */
  setMirror (vertical = false) {
    const t = this;
    let tipsMsg = '';
    if (vertical) {
      t.rotateX = t.rotateX === 0 ? 180 : 0;
      tipsMsg += ` ${i18n.t('tipsMsg.verticalMirror')} ${t.rotateX}deg`;
    } else {
      t.rotateY = t.rotateY === 0 ? 180 : 0;
      tipsMsg += ` ${i18n.t('tipsMsg.horizontalMirror')} ${t.rotateY}deg`;
    }

    t.setTransform(true);
    t.tips(tipsMsg);
  },

  /* 缩放视频画面 */
  setScale (num) {
    if (Number.isNaN(this.scale) || Number.isNaN(num)) {
      this.scale = 1;
    } else {
      this.scale = num;
    }

    this.setTransform();
  },

  /* 视频放大 +0.1 */
  setScaleUp (num) {
    num = numUp(num) || 0.05;
    this.setScale(Number(this.scale) + num);
  },

  /* 视频缩小 -0.1 */
  setScaleDown (num) {
    num = numDown(num) || -0.05;
    this.setScale(Number(this.scale) + num);
  },

  /* 设置视频画面的位移属性 */
  setTranslate (x, y) {
    if (typeof x === 'number') {
      this.translate.x = x;
    }

    if (typeof y === 'number') {
      this.translate.y = y;
    }

    this.setTransform();
  },

  /* 视频画面向右平移 */
  setTranslateRight (num) {
    num = numUp(num) || 10;
    this.setTranslate(this.translate.x + num);
  },

  /* 视频画面向左平移 */
  setTranslateLeft (num) {
    num = numDown(num) || -10;
    this.setTranslate(this.translate.x + num);
  },

  /* 视频画面向上平移 */
  setTranslateUp (num) {
    num = numUp(num) || 10;
    this.setTranslate(null, this.translate.y - num);
  },

  /* 视频画面向下平移 */
  setTranslateDown (num) {
    num = numDown(num) || -10;
    this.setTranslate(null, this.translate.y - num);
  },

  resetTransform (notTips) {
    const t = this;

    if (t.isSameAsDefaultTransform() && Object.keys(t.historyTransform).length) {
      /* 还原成历史记录中的Transform值 */
      Object.keys(t.historyTransform).forEach(key => {
        if (isObj(t.historyTransform[key])) {
          Object.keys(t.historyTransform[key]).forEach(subKey => {
            t[key][subKey] = t.historyTransform[key][subKey];
          });
        } else {
          t[key] = t.historyTransform[key];
        }
      });
    } else {
      /* 还原成默认的Transform值 */
      const defaultTransform = clone(t.defaultTransform);
      Object.keys(defaultTransform).forEach(key => {
        t[key] = defaultTransform[key];
      });
    }

    t.setTransform(notTips);
  },

  /**
   * 定格帧画面
   * @param perFps {Number} -可选 默认 1，即定格到下一帧，如果是-1则为定格到上一帧
   */
  freezeFrame (perFps) {
    perFps = perFps || 1;
    const t = this;
    const player = t.player();

    /* 跳帧 */
    player.currentTime += Number(perFps / t.fps);

    /* 定格画面 */
    if (!player.paused) player.pause();

    /* 有些播放器发现画面所在位置变了会自动进行播放，所以此时需要对播放操作进行挂起 */
    player._hangUp_ && player._hangUp_('play', 400);

    if (perFps === 1) {
      t.tips(i18n.t('tipsMsg.nextframe'));
    } else if (perFps === -1) {
      t.tips(i18n.t('tipsMsg.previousframe'));
    } else {
      t.tips(i18n.t('tipsMsg.stopframe') + perFps);
    }
  },

  /**
   * 切换画中画功能
   */
  togglePictureInPicture () {
    const player = this.player();
    if (window._isPictureInPicture_ && document.pictureInPictureElement) {
      document.exitPictureInPicture().then(() => {
        window._isPictureInPicture_ = null;
      }).catch((e) => {
        window._isPictureInPicture_ = null;
        debug.error('[togglePictureInPicture]', e);
      });
    } else {
      player.requestPictureInPicture && player.requestPictureInPicture().then(() => {
        window._isPictureInPicture_ = true;
      }).catch((e) => {
        window._isPictureInPicture_ = null;
        debug.error('[togglePictureInPicture]', e);
      });
    }
  },

  /* 播放下一个视频，默认是没有这个功能的，只有在TCC里配置了next字段才会有该功能 */
  setNextVideo () {
    const isDo = TCC$1.doTask('next');
    if (!isDo) {
      debug.log('当前网页不支持一键播放下个视频功能~');
    }
  },

  /* 切换播放状态 */
  switchPlayStatus () {
    const t = this;
    const player = t.player();
    if (TCC$1.doTask('switchPlayStatus')) {
      // debug.log('[TCC][switchPlayStatus]', 'suc')
      return
    }

    if (player.paused) {
      if (TCC$1.doTask('play')) ; else {
        if (t.mediaPlusApi) {
          t.mediaPlusApi.lockPause(400);
          t.mediaPlusApi.applyPlay();
        } else {
          /* 挂起其它逻辑的暂停操作，确保播放状态生效 */
          if (player._hangUp_ instanceof Function) {
            player._hangUp_('pause', 400);
            player._unHangUp_('play');
          }

          player.play();
        }

        t.tips(i18n.t('tipsMsg.play'));
      }
    } else {
      if (TCC$1.doTask('pause')) ; else {
        if (t.mediaPlusApi) {
          t.mediaPlusApi.lockPlay(400);
          t.mediaPlusApi.applyPause();
        } else {
          /* 挂起其它逻辑的播放操作，确保暂停状态生效 */
          if (player._hangUp_ instanceof Function) {
            player._hangUp_('play', 400);
            player._unHangUp_('pause');
          }

          player.pause();
        }

        t.tips(i18n.t('tipsMsg.pause'));
      }
    }
  },

  isAllowRestorePlayProgress: function () {
    const allowRestoreVal = configManager.get(`media.allowRestorePlayProgress.${window.location.host}`);
    return allowRestoreVal === null || allowRestoreVal
  },
  /* 切换自动恢复播放进度的状态 */
  switchRestorePlayProgressStatus: function () {
    const t = h5Player;
    let isAllowRestorePlayProgress = t.isAllowRestorePlayProgress();

    if (isInCrossOriginFrame()) {
      isAllowRestorePlayProgress = false;
    } else {
      /* 进行值反转 */
      isAllowRestorePlayProgress = !isAllowRestorePlayProgress;
    }

    configManager.set(`media.allowRestorePlayProgress.${window.location.host}`, isAllowRestorePlayProgress);

    /* 操作提示 */
    if (isAllowRestorePlayProgress) {
      t.tips(i18n.t('tipsMsg.arpl'));
      t.setPlayProgress(t.player());
    } else {
      t.tips(i18n.t('tipsMsg.drpl'));
    }
  },
  tipsClassName: 'html_player_enhance_tips',

  getTipsContainer: function (videoEl) {
    const t = h5Player;
    const player = videoEl || t.player();
    // 使用getContainer获取到的父节点弊端太多，暂时弃用
    // const _tispContainer_ = player._tispContainer_  ||  getContainer(player);

    let tispContainer = player.parentNode || player;

    /* 如果父节点为无长宽的元素，则再往上查找一级 */
    const containerBox = tispContainer.getBoundingClientRect();
    if ((!containerBox.width || !containerBox.height) && tispContainer.parentNode) {
      tispContainer = tispContainer.parentNode;
    }

    return tispContainer
  },
  tips: function (str) {
    const t = h5Player;
    const player = t.player();
    if (!player) {
      debug.log('h5Player Tips:', str);
      return true
    }

    const isAudio = t.isAudioInstance();
    const parentNode = isAudio ? document.body : t.getTipsContainer();

    if (parentNode === player) {
      debug.info('获取tips的包裹容器异常：', player, str);
      return false
    }

    let backupStyle = '';
    if (!isAudio) {
      // 修复部分提示按钮位置异常问题
      const defStyle = parentNode.getAttribute('style') || '';

      backupStyle = parentNode.getAttribute('style-backup') || '';
      if (!backupStyle) {
        let backupSty = defStyle || 'style-backup:none';
        const backupStyObj = inlineStyleToObj(backupSty);

        /**
       * 修复因为缓存时机获取到错误样式的问题
       * 例如在：https://www.xuetangx.com/
       */
        if (backupStyObj.opacity === '0') {
          backupStyObj.opacity = '1';
        }
        if (backupStyObj.visibility === 'hidden') {
          backupStyObj.visibility = 'visible';
        }

        backupSty = objToInlineStyle(backupStyObj);

        parentNode.setAttribute('style-backup', backupSty);
        backupStyle = defStyle;
      }

      const newStyleArr = backupStyle.split(';');

      const oldPosition = parentNode.getAttribute('def-position') || window.getComputedStyle(parentNode).position;
      if (parentNode.getAttribute('def-position') === null) {
        parentNode.setAttribute('def-position', oldPosition || '');
      }
      if (['static', 'inherit', 'initial', 'unset', ''].includes(oldPosition)) {
        newStyleArr.push('position: relative');
      }

      const playerBox = player.getBoundingClientRect();
      const parentNodeBox = parentNode.getBoundingClientRect();
      /* 不存在高宽时，给包裹节点一个最小高宽，才能保证提示能正常显示 */
      if (!parentNodeBox.width || !parentNodeBox.height) {
        newStyleArr.push('min-width:' + playerBox.width + 'px');
        newStyleArr.push('min-height:' + playerBox.height + 'px');
      }

      parentNode.setAttribute('style', newStyleArr.join(';'));

      const newPlayerBox = player.getBoundingClientRect();
      if (Math.abs(newPlayerBox.height - playerBox.height) > 50) {
        parentNode.setAttribute('style', backupStyle);
        // debug.info('应用新样式后给播放器高宽造成了严重的偏差，样式已被还原：', player, playerBox, newPlayerBox)
      }
    }

    const tipsSelector = '.' + t.tipsClassName;

    /* 当出现多个tips元素时，将这些tips元素全部移除 */
    const tipsList = document.querySelectorAll(tipsSelector);
    if (tipsList.length > 1) {
      tipsList.forEach(tipsItem => {
        tipsItem.remove();
      });
    }

    let tipsDom = parentNode.querySelector(tipsSelector);

    /* 提示dom未初始化的，则进行初始化 */
    if (!tipsDom) {
      t.initTips();
      tipsDom = parentNode.querySelector(tipsSelector);
      if (!tipsDom) {
        debug.log('init h5player tips dom error...');
        return false
      }
    }

    const style = tipsDom.style;
    tipsDom.innerText = str;

    for (var i = 0; i < 3; i++) {
      if (this.on_off[i]) clearTimeout(this.on_off[i]);
    }

    function showTips () {
      style.display = 'block';
      t.on_off[0] = setTimeout(function () {
        style.opacity = 1;
      }, 50);
      t.on_off[1] = setTimeout(function () {
        // 隐藏提示框和还原样式
        style.opacity = 0;
        style.display = 'none';
        if (backupStyle) {
          parentNode.setAttribute('style', backupStyle);
        }
      }, 2000);
    }

    if (style.display === 'block') {
      style.display = 'none';
      clearTimeout(this.on_off[3]);
      t.on_off[2] = setTimeout(function () {
        showTips();
      }, 100);
    } else {
      showTips();
    }
  },

  /* 设置提示DOM的样式 */
  initTips: function () {
    const t = h5Player;
    const isAudio = t.isAudioInstance();
    const parentNode = isAudio ? document.body : t.getTipsContainer();
    if (parentNode.querySelector('.' + t.tipsClassName)) return

    // top: 50%;
    // left: 50%;
    // transform: translate(-50%,-50%);
    let tipsStyle = `
      position: absolute;
      z-index: 999999;
      font-size: ${t.fontSize || 16}px;
      padding: 5px 10px;
      background: rgba(0,0,0,0.4);
      color:white;
      top: 0;
      left: 0;
      transition: all 500ms ease;
      opacity: 0;
      border-bottom-right-radius: 5px;
      display: none;
      -webkit-font-smoothing: subpixel-antialiased;
      font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;
      -webkit-user-select: none;
    `;

    if (isAudio) {
      tipsStyle = `
        position: fixed;
        z-index: 999999;
        font-size: ${t.fontSize || 16}px;
        padding: 5px 10px;
        background: rgba(0,0,0,0.4);
        color:white;
        bottom: 0;
        right: 0;
        transition: all 500ms ease;
        opacity: 0;
        border-top-left-radius: 5px;
        display: none;
        -webkit-font-smoothing: subpixel-antialiased;
        font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;
        -webkit-user-select: none;
      `;
    }

    const tips = document.createElement('div');
    tips.setAttribute('style', tipsStyle);
    tips.setAttribute('class', t.tipsClassName);
    parentNode.appendChild(tips);
  },
  on_off: new Array(3),
  fps: 30,
  /* 滤镜效果 */
  filter: {
    key: [1, 1, 1, 0, 0],
    setup: function () {
      var view = 'brightness({0}) contrast({1}) saturate({2}) hue-rotate({3}deg) blur({4}px)';
      for (var i = 0; i < 5; i++) {
        view = view.replace('{' + i + '}', String(this.key[i]));
        this.key[i] = Number(this.key[i]);
      }
      h5Player.player().style.filter = view;
    },
    reset: function () {
      this.key[0] = 1;
      this.key[1] = 1;
      this.key[2] = 1;
      this.key[3] = 0;
      this.key[4] = 0;
      this.setup();
    }
  },

  setFilter (item, num, isDown) {
    if (![0, 1, 2, 3, 4].includes(item) || typeof num !== 'number') {
      debug.error('[setFilter]', '参数有误', item, num);
      return false
    }

    /* 如果标识为down，则自动取负数值 */
    if (isDown === true) {
      if (num && num > 0) { num = -num; }
    }

    const nameMap = {
      0: 'brightness',
      1: 'contrast',
      2: 'saturation',
      3: 'hue',
      4: 'blur'
    };

    const t = this;
    t.filter.key[item] += num || 0.1;
    t.filter.key[item] = t.filter.key[item].toFixed(2);

    if (t.filter.key[item] < 0 && nameMap[item] !== 'hue') {
      t.filter.key[item] = 0;
    }

    t.filter.setup();
    t.tips(i18n.t(`tipsMsg.${nameMap[item]}`) + parseInt(t.filter.key[item] * 100) + '%');
  },

  /* 设置视频的亮度 */
  setBrightness (num) {
    this.setFilter(0, num);
  },

  /* 提升视频的亮度 */
  setBrightnessUp (num) {
    this.setFilter(0, num || 0.1);
  },

  /* 降低视频的亮度 */
  setBrightnessDown (num) {
    this.setFilter(0, num || -0.1, true);
  },

  /* 设置视频的对比度 */
  setContrast (num) {
    this.setFilter(1, num);
  },

  /* 提升视频的对比度 */
  setContrastUp (num) {
    this.setFilter(1, num || 0.1);
  },

  /* 降低视频的对比度 */
  setContrastDown (num) {
    this.setFilter(1, num || -0.1, true);
  },

  /* 设置饱和度 */
  setSaturation (num) {
    this.setFilter(2, num);
  },

  /* 提升饱和度 */
  setSaturationUp (num) {
    this.setFilter(2, num || 0.1);
  },

  /* 降低饱和度 */
  setSaturationDown (num) {
    this.setFilter(2, num || -0.1, true);
  },

  /* 设置色相 */
  setHue (num) {
    this.setFilter(3, num);
  },

  /* 增加色相 */
  setHueUp (num) {
    this.setFilter(3, num || 1);
  },

  /* 降低色相 */
  setHueDown (num) {
    this.setFilter(3, num || -1, true);
  },

  /* 设置模糊度 */
  setBlur (num) {
    this.setFilter(4, num);
  },

  /* 增加模糊度 */
  setBlurUp (num) {
    this.setFilter(4, num || 1);
  },

  /* 降低模糊度 */
  setBlurDown (num) {
    this.setFilter(4, num || -1, true);
  },

  resetFilterAndTransform () {
    const t = this;

    t.resetTransform(true);
    t.filter.reset();
    t.tips(i18n.t('tipsMsg.imgattrreset'));
  },

  mediaDownload () {
    if (configManager.get('enhance.allowExperimentFeatures')) {
      debug.warn('[experimentFeatures][mediaDownload]');
      mediaDownload(this.player());
    }
  },

  capture () {
    const player = this.player();
    videoCapturer.capture(player, true);

    /* 暂停画面 */
    if (!player.paused && !document.pictureInPictureElement && document.visibilityState !== 'visible') {
      this.freezeFrame();
    }
  },

  _isFoucs: false,

  /* 播放器的聚焦事件 */
  isFoucs: function () {
    const t = h5Player;
    const player = t.player();
    if (!player) return

    player.onmouseenter = function (e) {
      h5Player._isFoucs = true;
    };
    player.onmouseleave = function (e) {
      h5Player._isFoucs = false;
    };
  },
  /* 播放器事件响应器 */
  palyerTrigger: function (player, event) {
    if (!player || !event) return
    const t = h5Player;
    const keyCode = event.keyCode;
    const key = event.key.toLowerCase();

    if (event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {
      // 网页全屏
      if (key === 'enter') {
        t.setWebFullScreen();
      }

      // 进入或退出画中画模式
      if (key === 'p') {
        t.togglePictureInPicture();
      }

      // 截图并下载保存
      if (key === 's') {
        t.capture();
      }

      if (key === 'r') {
        t.switchRestorePlayProgressStatus();
      }

      if (key === 'm') {
        /* 垂直镜像翻转 */
        t.setMirror(true);
      }

      if (key === 'd') {
        t.mediaDownload();
      }

      // 视频画面缩放相关事件
      const allowKeys = ['x', 'c', 'z', 'arrowright', 'arrowleft', 'arrowup', 'arrowdown'];
      if (!allowKeys.includes(key)) return

      t.scale = Number(t.scale);
      switch (key) {
        // shift+X：视频缩小 -0.1
        case 'x':
          t.setScaleDown();
          break
        // shift+C：视频放大 +0.1
        case 'c':
          t.setScaleUp();
          break
        // shift+Z：视频恢复正常大小
        case 'z':
          t.resetTransform();
          break
        case 'arrowright':
          t.setTranslateRight();
          break
        case 'arrowleft':
          t.setTranslateLeft();
          break
        case 'arrowup':
          t.setTranslateUp();
          break
        case 'arrowdown':
          t.setTranslateDown();
          break
      }

      // 阻止事件冒泡
      event.stopPropagation();
      event.preventDefault();
      return true
    }

    // ctrl+方向键右→：快进30秒
    if (event.ctrlKey && keyCode === 39) {
      t.setCurrentTimeUp(t.skipStep * 6);
    }
    // ctrl+方向键左←：后退30秒
    if (event.ctrlKey && keyCode === 37) {
      t.setCurrentTimeDown(-t.skipStep * 6);
    }

    // ctrl+方向键上↑：音量升高 20%
    if (event.ctrlKey && keyCode === 38) {
      t.setVolumeUp(0.2);
    }
    // 方向键下↓：音量降低 20%
    if (event.ctrlKey && keyCode === 40) {
      t.setVolumeDown(-0.2);
    }

    // 防止其它无关组合键冲突
    if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) return

    // 方向键右→：快进5秒
    if (keyCode === 39) {
      t.setCurrentTimeUp();
    }
    // 方向键左←：后退5秒
    if (keyCode === 37) {
      t.setCurrentTimeDown();
    }

    // 方向键上↑：音量升高 10%
    if (keyCode === 38) {
      t.setVolumeUp(0.05);
    }
    // 方向键下↓：音量降低 10%
    if (keyCode === 40) {
      t.setVolumeDown(-0.05);
    }

    // 空格键：暂停/播放
    if (keyCode === 32) {
      t.switchPlayStatus();
    }

    // 按键X：减速播放 -0.1
    if (keyCode === 88) {
      t.setPlaybackRateDown();
    }
    // 按键C：加速播放 +0.1
    if (keyCode === 67) {
      t.setPlaybackRateUp();
    }
    // 按键Z：正常速度播放
    if (keyCode === 90) {
      t.resetPlaybackRate();
    }

    // 按1-4设置播放速度 49-52;97-100
    if ((keyCode >= 49 && keyCode <= 52) || (keyCode >= 97 && keyCode <= 100)) {
      t.setPlaybackRatePlus(event.key);
    }

    // 按键F：下一帧
    if (keyCode === 70) {
      t.freezeFrame(1);
    }
    // 按键D：上一帧
    if (keyCode === 68) {
      t.freezeFrame(-1);
    }

    // 按键E：亮度增加%
    if (keyCode === 69) {
      t.setBrightnessUp();
    }
    // 按键W：亮度减少%
    if (keyCode === 87) {
      t.setBrightnessDown();
    }

    // 按键T：对比度增加%
    if (keyCode === 84) {
      t.setContrastUp();
    }
    // 按键R：对比度减少%
    if (keyCode === 82) {
      t.setContrastDown();
    }

    // 按键U：饱和度增加%
    if (keyCode === 85) {
      t.setSaturationUp();
    }
    // 按键Y：饱和度减少%
    if (keyCode === 89) {
      t.setSaturationDown();
    }

    // 按键O：色相增加 1 度
    if (keyCode === 79) {
      t.setHueUp();
    }
    // 按键I：色相减少 1 度
    if (keyCode === 73) {
      t.setHueDown();
    }

    // 按键K：模糊增加 1 px
    if (keyCode === 75) {
      t.setBlurUp();
    }
    // 按键J：模糊减少 1 px
    if (keyCode === 74) {
      t.setBlurDown();
    }

    // 按键Q：图像复位
    if (keyCode === 81) {
      t.resetFilterAndTransform();
    }

    // 按键S：画面旋转 90 度
    if (keyCode === 83) {
      t.setRotate();
    }

    /* 水平镜像翻转 */
    if (keyCode === 77) {
      t.setMirror();
    }

    // 按键回车，进入全屏
    if (keyCode === 13) {
      t.setFullScreen();
    }

    if (key === 'n') {
      t.setNextVideo();
    }

    // 阻止事件冒泡
    event.stopPropagation();
    event.preventDefault();
    return true
  },

  /* 运行自定义的快捷键操作，如果运行了会返回true */
  runCustomShortcuts: function (player, event) {
    if (!player || !event) return
    const key = event.key.toLowerCase();
    const taskConf = TCC$1.getTaskConfig();
    const confIsCorrect = isObj(taskConf.shortcuts) &&
      Array.isArray(taskConf.shortcuts.register) &&
      taskConf.shortcuts.callback instanceof Function;

    /* 判断当前触发的快捷键是否已被注册 */
    function isRegister () {
      const list = taskConf.shortcuts.register;

      /* 当前触发的组合键 */
      const combineKey = [];
      if (event.ctrlKey) {
        combineKey.push('ctrl');
      }
      if (event.shiftKey) {
        combineKey.push('shift');
      }
      if (event.altKey) {
        combineKey.push('alt');
      }
      if (event.metaKey) {
        combineKey.push('command');
      }

      combineKey.push(key);

      /* 通过循环判断当前触发的组合键和已注册的组合键是否完全一致 */
      let hasReg = false;
      list.forEach((shortcut) => {
        const regKey = shortcut.split('+');
        if (combineKey.length === regKey.length) {
          let allMatch = true;
          regKey.forEach((key) => {
            if (!combineKey.includes(key)) {
              allMatch = false;
            }
          });
          if (allMatch) {
            hasReg = true;
          }
        }
      });

      return hasReg
    }

    if (confIsCorrect && isRegister()) {
      // 执行自定义快捷键操作
      const isDo = TCC$1.doTask('shortcuts', {
        event,
        player,
        h5Player
      });

      if (isDo) {
        event.stopPropagation();
        event.preventDefault();
      }

      return isDo
    } else {
      return false
    }
  },

  /* 按键响应方法 */
  keydownEvent: function (event) {
    const t = h5Player;
    const keyCode = event.keyCode;
    // const key = event.key.toLowerCase()
    const player = t.player();

    /* 处于可编辑元素中不执行任何快捷键 */
    if (isEditableTarget(event.target)) return

    /* 广播按键消息，进行跨域控制 */
    monkeyMsg.send('globalKeydownEvent', event, 0);

    if (!player) {
      if (t.hasCrossOriginVideoDetected) {
        if (!configManager.get('enhance.allowCrossOriginControl')) {
          return false
        }

        /**
         * 利用热键运行器的匹配能力来决定要不要禁止事件冒泡和阻止默认事件
         * 解决处于跨TAB、跨域控制时造成其它默认快捷键响应异常的问题
         */
        if (t.hotkeysRunner && t.hotkeysRunner.run) {
          t.hotkeysRunner.run({
            event,
            stopPropagation: true,
            preventDefault: true
          });
        } else {
          t.registerHotkeysRunner();
          event.stopPropagation();
          event.preventDefault();
        }

        // debug.log('当前页面检出了跨域受限的视频，仍需阻止默认事件和事件冒泡')
      }

      // debug.log('无可用的媒体元素，不执行相关操作')
      return false
    }

    /* 切换插件的可用状态 */
    if (event.ctrlKey && keyCode === 32) {
      t.enable = !t.enable;
      if (t.enable) {
        t.tips(i18n.t('tipsMsg.onplugin'));
      } else {
        t.tips(i18n.t('tipsMsg.offplugin'));
      }
    }

    if (!t.enable) {
      debug.log('h5Player 已禁用~');
      return false
    }

    // 按ctrl+\ 键进入聚焦或取消聚焦状态，用于视频标签被遮挡的场景
    if (event.ctrlKey && keyCode === 220) {
      t.globalMode = !t.globalMode;
      if (t.globalMode) {
        t.tips(i18n.t('tipsMsg.globalmode') + ' ON');
      } else {
        t.tips(i18n.t('tipsMsg.globalmode') + ' OFF');
      }
    }

    /* 非全局模式下，不聚焦则不执行快捷键的操作 */
    if (!t.globalMode && !t._isFoucs) return

    /* 判断是否执行了自定义快捷键操作，如果是则不再响应后面默认定义操作 */
    if (t.runCustomShortcuts(player, event) === true) return

    /* 热键运行器匹配到相关执行任务便不在执行后续的palyerTrigger */
    if (t.hotkeysRunner && t.hotkeysRunner.run) {
      const matchResult = t.hotkeysRunner.run({
        event,
        target: t,
        stopPropagation: true,
        preventDefault: true,
        conditionHandler (condition) {
          // TODO 完善条件限定回调逻辑
          if (condition) {
            return true
          }
        }
      });

      if (matchResult) {
        debug.info('[hotkeysRunner][matchResult]', matchResult);
        return true
      }
    } else {
      /* 未用到的按键不进行任何事件监听 */
      if (!isRegisterKey(event)) { return false }

      /* 响应播放器相关操作 */
      t.palyerTrigger(player, event);
    }
  },

  /**
   * 获取播放进度
   * @param player -可选 对应的h5 播放器对象， 如果不传，则获取到的是整个播放进度表，传则获取当前播放器的播放进度
   */
  getPlayProgress: function (player) {
    const progressMap = configManager.get('media.progress') || {};

    if (!player) {
      return progressMap
    } else {
      const keyName = window.location.href + player.duration;
      if (progressMap[keyName]) {
        /* 对于直播的视频流，会出现记录的duration和当前视频duration不一致的情况，这时候通过返回currentTime来忽略恢复播放进度 */
        if (Number.isNaN(Number(player.duration)) || Number(progressMap[keyName].duration) !== Number(player.duration)) {
          return player.currentTime
        } else {
          return progressMap[keyName].progress
        }
      } else {
        return player.currentTime
      }
    }
  },
  /* 播放进度记录器 */
  playProgressRecorder: function (player) {
    const t = h5Player;
    clearTimeout(player._playProgressTimer_);
    function recorder (player) {
      player._playProgressTimer_ = setTimeout(function () {
        /* 时长小于两分钟的视频不记录播放进度 */
        const isToShort = !player.duration || Number.isNaN(Number(player.duration)) || player.duration < 120;
        const isLeave = document.visibilityState !== 'visible' && player.paused;

        if (!t.isAllowRestorePlayProgress() || isToShort || isLeave) {
          recorder(player);
          return true
        }

        const progressMap = t.getPlayProgress() || {};
        const list = Object.keys(progressMap);
        const keyName = window.location.href + player.duration;

        /**
         * 对首次记录到progressMap的值进行标记
         * 用于防止手动切换播放进度时，执行到错误的恢复逻辑
         */
        if (!progressMap[keyName]) {
          t._firstProgressRecord_ = keyName;
          t._hasRestorePlayProgress_ = keyName;
        }

        /* 只保存最近10个视频的播放进度 */
        if (list.length > 10) {
          /* 根据更新的时间戳，取出最早添加播放进度的记录项 */
          let timeList = [];
          list.forEach(function (keyName) {
            progressMap[keyName] && progressMap[keyName].t && timeList.push(progressMap[keyName].t);
          });
          timeList = quickSort(timeList);
          const timestamp = timeList[0];

          /* 删除最早添加的记录项 */
          list.forEach(function (keyName) {
            if (progressMap[keyName].t === timestamp) {
              delete progressMap[keyName];
            }
          });
        }

        /* 记录当前播放进度 */
        progressMap[keyName] = {
          progress: player.currentTime,
          duration: player.duration,
          t: new Date().getTime()
        };

        /* 存储播放进度表 */
        configManager.setLocalStorage('media.progress', progressMap);

        /* 循环侦听 */
        recorder(player);
      }, 1000 * 2);
    }
    recorder(player);
  },

  /* 设置播放进度 */
  setPlayProgress: function (player) {
    const t = h5Player;
    if (!player || !player.duration || Number.isNaN(player.duration)) return

    const curTime = Number(t.getPlayProgress(player));

    /* 要恢复进度的时间过小或大于player.duration都不符合规范，不进行进度恢复操作 */
    if (!curTime || Number.isNaN(curTime) || curTime < 10 || curTime >= player.duration) return

    /* 忽略恢复进度时间与当前播放进度时间相差不大的情况 */
    if (Math.abs(curTime - player.currentTime) < 2) {
      return false
    }

    const progressKey = window.location.href + player.duration;
    t._hasRestorePlayProgress_ = t._hasRestorePlayProgress_ || '';

    if (t._hasRestorePlayProgress_ === progressKey || t._firstProgressRecord_ === progressKey) {
      if (t._hasRestorePlayProgress_ === progressKey) {
        t._firstProgressRecord_ = '';
      }
      return false
    }

    if (t.isAllowRestorePlayProgress()) {
      // 比curTime少1.5s可以让用户知道是前面的画面，从而有个衔接上了的感觉
      player.currentTime = curTime - 1.5;
      t._hasRestorePlayProgress_ = progressKey;
      t.tips(i18n.t('tipsMsg.playbackrestored'));
    } else {
      t.tips(i18n.t('tipsMsg.playbackrestoreoff'));
    }
  },

  setPlayerInstance (el) {
    if (!el && !el.getBoundingClientRect) {
      return false
    }

    const t = h5Player;

    if (t.player() === el) {
      return false
    }

    if (!t.playerInstance && isMediaElement(el)) {
      t.playerInstance = el;
      t.initPlayerInstance(false);
      return true
    }

    if (isVideoElement(el)) {
      const elParentNode = t.getTipsContainer(el);
      const elInfo = el.getBoundingClientRect();
      const parentElInfo = elParentNode && elParentNode.getBoundingClientRect();
      if (elInfo && elInfo.width > 200 && parentElInfo && parentElInfo.width > 200) {
        t.playerInstance = el;
        t.initPlayerInstance(false);
      }
    } else if (isAudioElement(el)) {
      if (isAudioElement(t.playerInstance) || (isVideoElement(t.playerInstance) && !t.playerInstance.isConnected)) {
        t.playerInstance = el;
        t.initPlayerInstance(false);
      }
    }
  },

  /**
   * 视频元素是否出现在视口里的观察对象，用于优化多视频实例的实例切换
   * https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
   */
  intersectionObserver: new IntersectionObserver(function (entries, observer) {
    const t = h5Player;
    // debug.log('[intersectionObserver]', entries)

    let tmpIntersectionRatio = 0;
    entries.forEach(entrie => {
      entrie.target._intersectionInfo_ = entrie;

      if (entrie.intersectionRatio > tmpIntersectionRatio && entrie.intersectionRatio > 0.4) {
        tmpIntersectionRatio = entrie.intersectionRatio;

        const oldPlayer = t.player();
        if (oldPlayer && oldPlayer._intersectionInfo_ && tmpIntersectionRatio < oldPlayer._intersectionInfo_.intersectionRatio) {
          /* 新实例的视图范围比旧的小，则不切换实例 */
          return
        }

        /* 切换视频实例 */
        const toggleResult = t.setPlayerInstance(entrie.target);
        toggleResult && debug.log('[intersectionObserver] 切换视频实例', entrie);
      }
    });
  }, {
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
  }),

  /**
   * 检测h5播放器是否存在
   * @param callback
   */
  detecH5Player: function () {
    const t = this;
    const playerList = t.getPlayerList();

    if (playerList.length) {
      // debug.log('检测到HTML5视频！', location.href, h5Player, playerList)

      /* 单video实例标签的情况 */
      if (playerList.length === 1) {
        t.playerInstance = playerList[0];
        t.initPlayerInstance(true);
      }

      /* 多video实例标签的情况 */
      playerList.forEach(function (player) {
        /* 鼠标移到其上面的时候重新指定实例 */
        if (!player._hasMouseRedirectEvent_) {
          player.addEventListener('mouseenter', function (event) {
            t.setPlayerInstance(event.target);
          });
          player._hasMouseRedirectEvent_ = true;
        }

        /* 播放器开始播放的时候重新指向实例 */
        if (!player._hasPlayingRedirectEvent_) {
          player.addEventListener('playing', function (event) {
            const media = event.target;

            /* 对于超短的音视频可能是某些操作反馈的特效，可忽略对其进行播放实例切换 */
            if (media.duration && media.duration < 8) {
              return false
            }

            t.setPlayerInstance(media);
          });
          player._hasPlayingRedirectEvent_ = true;
        }

        /* 当被观察到出现在浏览器视口里时，切换视频实例 */
        if (!player._hasIntersectionObserver_) {
          t.intersectionObserver.observe(player);
          player._hasIntersectionObserver_ = true;
        }
      });

      if (isInCrossOriginFrame()) {
        /* 广播检测到H5Player的消息 */
        monkeyMsg.send('videoDetected', {
          src: t.playerInstance.src
        });
      }

      registerH5playerMenus(h5Player);
    }
  },

  /* 响应来自按键消息的广播 */
  bindFakeEvent () {
    const t = this;
    if (t._hasBindFakeEvent_) return

    /* 触发来自消息广播的模拟事件，实现跨域、跨Tab控制视频播放 */
    let triggerFakeEvent = function (name, oldVal, newVal, remote) {
      const player = t.player();
      if (player) {
        const fakeEvent = newVal.data;
        fakeEvent.stopPropagation = () => { };
        fakeEvent.preventDefault = () => { };
        t.palyerTrigger(player, fakeEvent);

        debug.log('已响应跨Tab/跨域按键控制信息：', newVal);
      }
    };

    /**
     * 操作节流控制，减少按键消息频率，
     * 注意，开启节流控制后导致复合按键（如：shift+s）没法生效
     */
    if (!crossTabCtl.hasOpenPictureInPicture() && !t.hasCrossOriginVideoDetected) {
      triggerFakeEvent = throttle(triggerFakeEvent, 80);
    }

    /* 注册响应来自按键消息的广播的事件 */
    monkeyMsg.on('globalKeydownEvent', async (name, oldVal, newVal, remote) => {
      if (remote) {
        if (isInCrossOriginFrame()) {
          /**
           * 同处跨域受限页面，且都处于可见状态，大概率处于同一个Tab标签里，但不是100%
           * tabId一致则100%为同一标签下
           */
          if (document.visibilityState === 'visible' && newVal.originTab) {
            triggerFakeEvent(name, oldVal, newVal, remote);
          }
        } else if (crossTabCtl.hasOpenPictureInPicture()) {
          /* 跨Tab控制画中画里面的视频播放 */
          if (!newVal.originTab && (document.pictureInPictureElement || t.isLeavepictureinpictureAwhile())) {
            triggerFakeEvent(name, oldVal, newVal, remote);
          }
        }
      }
    });

    t._hasBindFakeEvent_ = true;
  },

  /* 绑定相关事件 */
  bindEvent: function () {
    const t = this;
    if (t._hasBindEvent_) return

    document.removeEventListener('keydown', t.keydownEvent);
    document.addEventListener('keydown', t.keydownEvent, true);

    /* 兼容iframe操作 */
    if (isInIframe() && !isInCrossOriginFrame()) {
      window.top.document.removeEventListener('keydown', t.keydownEvent);
      window.top.document.addEventListener('keydown', t.keydownEvent, true);
    }

    t._hasBindEvent_ = true;
  },

  setCustomConfiguration (config, tag = 'Default') {
    if (!config) return false

    const configuration = configManager.mergeDefConf(config.customConfiguration);
    const taskConf = mergeTaskConf(config.customTaskControlCenter);
    if (TCC$1 && TCC$1.setTaskConf) {
      TCC$1.setTaskConf(taskConf);
    }

    h5Player.hasSetCustomConfiguration = tag;
    debug.info(`[CustomConfiguration][${tag}]`, configuration, taskConf);
  },

  mergeExternalConfiguration (config, tag = 'Default') {
    if (!config || !configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration')) return false
    h5Player.setCustomConfiguration(config, 'External');
    h5Player.hasExternalCustomConfiguration = tag;
  },

  init: function (global) {
    var t = this;

    if (window.unsafeWindow && window.unsafeWindow.__h5PlayerCustomConfiguration__) {
      !t.hasExternalCustomConfiguration && t.mergeExternalConfiguration(window.unsafeWindow.__h5PlayerCustomConfiguration__);
    }

    if (TCC$1 && TCC$1.doTask('disable') === true) {
      debug.info(`[TCC][disable][${location.host}] 已禁止在该网站运行视频检测逻辑，您可查看任务配置中心的相关配置了解详情`);
      return true
    }

    if (!configManager.get('enable')) {
      debug.info(`[config][disable][${location.host}] 当前网站已禁用脚本，如要启用脚本，请在菜单里开启`);
      return true
    }

    if (!global) {
      /* 检测是否存在H5播放器 */
      t.detecH5Player();
      return true
    }

    if (configManager.get('debug') === true) {
      window._debugMode_ = true;
      t.mountToGlobal();
    }

    setFakeUA();

    /* 初始化任务配置中心 */
    TCC$1 = h5PlayerTccInit(t);

    /* 绑定键盘事件 */
    t.bindEvent();
    t.bindFakeEvent();

    /* 响应来自跨域受限的视频检出事件 */
    monkeyMsg.on('videoDetected', async (name, oldVal, newVal, remote) => {
      if (newVal.originTab) {
        t.hasCrossOriginVideoDetected = true;
      }

      debug.log('[hasCrossOriginVideoDetected]', t, name, oldVal, newVal, remote);
    });

    /* 当页面处于可视化状态时，初始化自定义播放逻辑 */
    document.addEventListener('visibilitychange', function () {
      h5Player.initAutoPlay();
    });

    if (window.unsafeWindow && configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration')) {
      window.unsafeWindow.__setH5PlayerCustomConfiguration__ = t.mergeExternalConfiguration;
    }
  }
};

async function h5PlayerInit () {
  try {
    mediaCore.init(function (mediaElement) {
      // debug.log('[mediaCore][mediaChecker]', mediaElement)
      h5Player.init();
    });

    if (configManager.get('enhance.allowExperimentFeatures')) {
      mediaSource.init();
      debug.warn(`[experimentFeatures][warning] ${i18n.t('experimentFeaturesWarning')}`);
      debug.warn('[experimentFeatures][mediaSource][activated]');
    }

    /* 禁止对playbackRate等属性进行锁定 */
    hackDefineProperty();

    /* 禁止对shadowdom使用close模式 */
    hackAttachShadow();

    /* 对所有事件进行接管 */
    proxyHTMLMediaElementEvent();
    // hackEventListener()
  } catch (e) {
    console.error('h5player hack error', e);
  }

  menuRegister();

  try {
    /* 初始化全局所需的相关方法 */
    h5Player.init(true);

    /* 检测到有视频标签就进行初始化 */
    supportMediaTags.forEach(tagName => {
      ready(tagName, function () {
        h5Player.init();
      });
    });

    /* 检测shadow dom 下面的video */
    document.addEventListener('addShadowRoot', function (e) {
      const shadowRoot = e.detail.shadowRoot;
      supportMediaTags.forEach(tagName => {
        ready(tagName, function (element) {
          h5Player.init();
        }, shadowRoot);
      });
    });

    /* 初始化跨Tab控制逻辑 */
    crossTabCtl.init();

    if (isInIframe()) {
      debug.log('h5Player init suc, in iframe:', window, window.location.href);
    } else {
      debug.log('h5Player init suc', window, h5Player);
    }

    if (isInCrossOriginFrame()) {
      debug.log('当前处于跨域受限的iframe中，h5Player部分功能可能无法正常开启', window.location.href);
    }
  } catch (e) {
    debug.error('h5Player init fail', e);
  }
}

function init (retryCount = 0) {
  if (!window.document || !window.document.documentElement) {
    setTimeout(() => {
      if (retryCount < 200) {
        init(retryCount + 1);
      } else {
        console.error('[h5player message:]', 'not documentElement detected!', window);
      }
    }, 10);

    return false
  } else if (retryCount > 0) {
    console.warn('[h5player message:]', 'documentElement detected!', retryCount, window);
  }

  h5PlayerInit();
}

/**
 * 某些极端情况下，直接访问window对象都会导致报错，所以整个init都try起来
 * 例如：www.icourse163.org 就有一定的机率异常
 */
let initTryCount = 0;
try {
  init(0);
} catch (e) {
  setTimeout(() => {
    if (initTryCount < 200) {
      initTryCount++;
      init(0);
      console.error('[h5player message:]', 'init error', initTryCount, e);
    }
  }, 10);
}
