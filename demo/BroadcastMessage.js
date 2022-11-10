/*!
 * @name         BroadcastMessage.js
 * @description  基于postMessage+BroadcastChannel+localStorage+互信域名的前端页面数据通信解决方案
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/11/07 09:26
 * @github       https://github.com/xxxily
 */

function parseURL (url) {
  var a = document.createElement('a')
  a.href = url || window.location.href
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
      var ret = {}
      var seg = []
      var paramArr = a.search.replace(/^\?/, '').split('&')

      for (var i = 0; i < paramArr.length; i++) {
        var item = paramArr[i]
        if (item !== '' && item.indexOf('=')) {
          seg.push(item)
        }
      }

      for (var j = 0; j < seg.length; j++) {
        var param = seg[j]
        var idx = param.indexOf('=')
        var key = param.substring(0, idx)
        var val = param.substring(idx + 1)
        if (!key) {
          ret[val] = null
        } else {
          ret[key] = val
        }
      }
      return ret
    })()
  }
}

class BroadcastMessage {
  constructor (opts = {}) {
    this.targetOrigin = opts.targetOrigin || location.origin

    /**
     * 标识当前脚本是否处于可信域的页面上运行
     * 如果是，当前页面作为可信域的中介页嵌入到具体运行环境中
     */
    this.inTrustedDomainPages = opts.inTrustedDomainPages || false

    // this.trustedDomainPages = 'https://h5player.anzz.top/demo/postMessage.html'
    this.trustedDomainPages = opts.trustedDomainPages || ''

    /**
     * 允许既是消息的发送页，也可以是消息的接页，从而做到同源同页收发消息
     * postMessage、BroadcastChannel和storage事件都是必须一个页面发送，另一个页面接收
     */
    this.allowLocalBroadcast = opts.allowLocalBroadcast || false

    this.channelId = String(opts.channelId || '*')

    /**
     * 实例id，当onMessage的handler被重复调用时，很可能是同名的channelId的多个实例导致的
     * 所以加上实例id方便问题排查
     */
    this.instanceId = this.channelId + '_' + window.performance ? performance.now() : Date.now()

    this.debug = opts.debug || false
    this.emitOriginalMessage = opts.emitOriginalMessage || false
    this.messageWindow = window

    this.init(opts)
  }

  init () {
    /* 给trustedDomainPages的URL补充相关参数 */
    if (this.trustedDomainPages) {
      // TODO
    }

    this.__registerMessageWindow__()

    /* 如果标识了脚本处于可信域中运行，且已经被嵌入到iframe中，则注册相关监听器 */
    if (this.inTrustedDomainPages && window !== top.window) {
      this.__registerPostMessageListener__()
      this.__registerBroadcastMessageListener__()
      this.__registerBroadcastChannelListener__()
    }
  }

  getTrustedDomain () {
    if (this.trustedDomainPages) {
      return parseURL(this.trustedDomainPages).origin
    } else {
      return location.origin
    }
  }

  __registerMessageWindow__ () {
    if (this.messageWindow !== window) {
      return false
    }

    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.style.visibility = 'hidden'
    iframe.src = this.trustedDomainPages
    document.body.appendChild(iframe)
    this.messageWindow = iframe.contentWindow

    /**
     * 当存在trustedDomainPages时，trustedDomainPages应该引入该脚本，且执行初始化逻辑，否则将是无效的trustedDomainPages
     * 如果创建的是空白iframe，则需要将
     * __registerPostMessageListener__、__registerBroadcastMessageListener__、__registerBroadcastChannelListener__
     * 的代码逻辑注入到iframe里
     */
    if (!this.inTrustedDomainPages && !this.trustedDomainPages && this.messageWindow.document && this.messageWindow.document.write) {
      const document = this.messageWindow.document
      if (!document.body) {
        const body = document.createElement('body')
        body.innerHTML = '<h1>storage-message-page</h1>'
        document.documentElement.appendChild(body)
      }

      document.open()
      document.write(`
        <script>
        function ${this.__registerPostMessageListener__};
        function ${this.__registerBroadcastMessageListener__};
        function ${this.__registerBroadcastChannelListener__};
        function init () {
          if (window.__hasInit__) { return false; }
          window.__broadcastMessageChannelId__ = "${this.channelId}";
          __registerPostMessageListener__();
          __registerBroadcastMessageListener__();
          __registerBroadcastChannelListener__();
          window.__hasInit__ = true ;
        }

        document.addEventListener("DOMContentLoaded", init);
        window.addEventListener("load", init)
        setTimeout(init, 100)
        </script>
      `)
      document.close()
    }
  }

  __registerPostMessageListener__ () {
    if (this.__hasRegisterPostMessageListener__) { return false }

    /* 一定要处于iframe才会注册PostMessageListener */
    if (window.top === window) {
      return false
    }

    /* 创建个随机的windowID，用于确定消息来源是否同属于一个windwo发出的 */
    window.__windowId__ = String((Date.now() - Math.random() * 100000).toFixed(2))

    if (!window.__broadcastMessageChannelId__) {
      // TODO 对于使用trustedDomainPages，则需要通过url参数来获取ChannelId
    }

    /* 消息中转传输的iframe */
    function messageIframe () {
      let messageIframe = document.querySelector('#message-transport-iframe')

      if (messageIframe) {
        return messageIframe
      }

      messageIframe = document.createElement('iframe')
      messageIframe.id = 'message-transport-iframe'
      messageIframe.style.display = 'none'
      messageIframe.style.visibility = 'hidden'
      document.body.appendChild(messageIframe)
      return messageIframe
    }

    /**
     * 通过当前页的子iframe来执行消息传送逻辑，这样当前页面的window对象才会接收到到storage事件或BroadcastChannel消息
     * 如果直接执行消息传送逻辑，则还需要创建个子iframe来接受storage事件或BroadcastChannel的消息，会导致导致需要更多层级的数据传递
     */
    function transportMessage (messageEvent) {
      /* 给将要中转传输的数据补充相关信息字段 */
      const message = messageEvent.data
      message.windowId = window.__windowId__

      message.debug && console.log(`[transportMessage][iframe][${location.origin}]`, messageEvent)

      const iframeWindow = messageIframe().contentWindow

      /* 优先使用BroadcastChannel进行消息传递 */
      if (iframeWindow.BroadcastChannel && iframeWindow.BroadcastChannel.prototype.postMessage) {
        const bcInstance = iframeWindow.__BroadcastChannelInstance__ || new iframeWindow.BroadcastChannel('__BroadcastChannelMessage__')
        iframeWindow.__BroadcastChannelInstance__ = iframeWindow.__BroadcastChannelInstance__ || bcInstance
        bcInstance.postMessage(message)
      } else {
        iframeWindow.localStorage.setItem('__BroadcastMessage__', JSON.stringify(message))
      }
    }

    messageIframe()

    /* 注册postMessage的侦听事件，并将接收到的数据交给消息中转传输逻辑传送出去 */
    window.addEventListener('message', (event) => {
      transportMessage(event)
    }, true)
    this.__hasRegisterPostMessageListener__ = true
  }

  __registerBroadcastChannelListener__ () {
    if (!window.BroadcastChannel || !BroadcastChannel.prototype.postMessage) {
      console.error(`[BroadcastChannel][${location.origin}]`, '不支持BroadcastChannel')
      return false
    }

    if (this.__BroadcastChannelInstance__) { return true }

    const BroadcastChannelInstance = new BroadcastChannel('__BroadcastChannelMessage__')
    BroadcastChannelInstance.addEventListener('message', (event) => {
      const message = event.data

      /* 校验数据字段 */
      if (!message || !message.windowId || !message.data) {
        return false
      }

      const channelId = window.__broadcastMessageChannelId__
      if (!message.channelId || (channelId && message.channelId !== channelId)) {
        message.debug && console.info('[transportMessage] channelId不存在或不匹配，禁止数据向上传递', channelId, message)
        return false
      }

      if (!message.allowLocalBroadcast && window.__windowId__ && window.__windowId__ === message.windowId) {
        message.debug && console.info('[BroadcastChannel-event] 消息源接收端和消息源的来源端一致，禁止数据向上传递')
        return false
      }

      /* 将接受到的事件数据通过postMessage传递回给上层的window */
      window.parent.postMessage(message)
    })

    this.__BroadcastChannelInstance__ = BroadcastChannelInstance
  }

  __registerBroadcastMessageListener__ () {
    if (this.__hasRegisterStorageListener__) { return false }

    window.addEventListener('storage', (event) => {
      let message = event.newValue

      /**
       * 空的newValue代表数据被删除，此时不应该传递给上层window
       * 如果不是由__BroadcastMessage__引起的事件也不应该传递给上层window
       */
      if (!message || event.key !== '__BroadcastMessage__') {
        return false
      }

      try {
        message = JSON.parse(message)
      } catch (e) {
        // BroadcastMessage的数据必须是可以JSON.parse解析的，否则说明数据格式不对
        // console.error('[storage-event][parse-error]', message, e)
        return false
      }

      /* 再次校验数据字段 */
      if (!message || !message.windowId || !message.data) {
        return false
      }

      const channelId = window.__broadcastMessageChannelId__
      if (!message.channelId || (channelId && message.channelId !== channelId)) {
        message.debug && console.error('[transportMessage] channelId不存在或不匹配，禁止数据向上传递', channelId, message)
        return false
      }

      message.debug && console.log(`[storage-event][iframe][${location.origin}]`, event)

      if (!message.allowLocalBroadcast && window.__windowId__ && window.__windowId__ === message.windowId) {
        message.debug && console.info('[storage-event] 消息源接收端和消息源的来源端一致，禁止数据向上传递')
        return false
      }

      /* 将接受到的事件数据通过postMessage传递回给上层的window */
      window.parent.postMessage(message)
    })

    this.__hasRegisterStorageListener__ = true
  }

  postMessage (message) {
    const data = {
      data: message,
      type: 'BroadcastMessage',
      origin: location.origin || top.location.origin,
      referrer: location.href || top.location.href,
      timeStamp: window.performance ? performance.now() : Date.now(),
      allowLocalBroadcast: this.allowLocalBroadcast,
      channelId: this.channelId,
      instanceId: this.instanceId,
      debug: this.debug
    }

    if (!this.messageWindow || !this.messageWindow.postMessage) {
      this.debug && console.error('[messageWindow error] 无法发送message', this.messageWindow)
      return false
    }

    const trustedDomain = this.getTrustedDomain()
    this.messageWindow.postMessage(data, trustedDomain)
  }

  onMessage (handler) {
    this.__messageListener__ = this.__messageListener__ || []

    if (handler instanceof Function && !this.__messageListener__.includes(handler)) {
      this.__messageListener__.push(handler)
    }

    if (this.__hasMessageListener__) { return false }
    this.__hasMessageListener__ = true

    window.addEventListener('message', (event) => {
      /**
       * 此处是最终的消息出口
       * 属于数据安全的最后一道防线，也是最脆弱的防线
       * 需要对原始数据进行调整或和过滤后才能给handler使用
       * 数据传送上来之前应该尽可能避免无关的数据被传到这里
       **/

      const message = event.data
      const isBroadcastMessage = message && message.type === 'BroadcastMessage' && message.data && message.channelId && message.referrer

      /* 排除其它postMessage逻辑发送过来的无关数据 */
      if (!isBroadcastMessage) {
        return false
      }

      /**
       * 不同频道的数据在传送过来前就应该被取消掉，这里是为了加一道保险
       * 实际上非同源的不同频道的数据来到这里，说明数据已经不安全了，需完善脚本逻辑
       */
      if (this.channelId !== '*' && message.channelId !== this.channelId) {
        if (message.origin !== location.origin) {
          message.debug && console.error('[messageListener] 存在数据安全隐患，请完善脚本逻辑', this.channelId, event)
        }

        return false
      }

      const fakeEvent = {}

      try {
        for (const key in event) {
          let value = event[key]
          if (key === 'data' && !this.emitOriginalMessage) {
            value = message.data
          } else {
            if (key === 'type') {
              value = 'BroadcastMessage'
            }
          }

          Object.defineProperty(fakeEvent, key, {
            enumerable: key === 'data',
            writable: false,
            configurable: true,
            value: value
          })
        }
      } catch (e) {}

      this.__messageListener__.forEach(handler => {
        handler instanceof Function && handler(fakeEvent)
      })
    }, true)
  }

  offMessage (handler) {
    this.__messageListener__ = this.__messageListener__ || []

    const tempStorageListener = []

    this.__messageListener__.forEach(item => {
      if (item !== handler) {
        tempStorageListener.push(item)
      }
    })

    this.__messageListener__ = tempStorageListener
  }

  addEventListener (type, listener) {
    if (type !== 'message') { return false }

    this.onMessage(listener)
  }

  removeEventListener (type, listener) {
    if (type !== 'message') { return false }

    this.offMessage(listener)
  }

  close () {
    if (this.__BroadcastChannelInstance__ && this.__BroadcastChannelInstance__.close) {
      this.__BroadcastChannelInstance__.close()
    }

    if (this.messageWindow) {
      document.body.removeChild(this.messageWindow)
    }
  }
}

const broadcastMessage = new BroadcastMessage({
  inTrustedDomainPages: true,
  allowLocalBroadcast: true,
  emitOriginalMessage: true,
  debug: true
})

// export default BroadcastMessage
