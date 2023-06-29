/*
 * author: wendux
 * email: 824783146@qq.com
 * source code: https://github.com/wendux/Ajax-hook
 */

import { hook, unHook, configEvent, events } from './xhr-hook'

var eventLoad = events[0]
var eventLoadEnd = events[1]
var eventTimeout = events[2]
var eventError = events[3]
var eventReadyStateChange = events[4]
var eventAbort = events[5]

var singleton
var prototype = 'prototype'

export function proxy (proxy, win) {
  if (singleton) {
    throw new Error('Proxy already exists')
  }

  singleton = new Proxy(proxy, win)
  return singleton
}

export function unProxy (win) {
  singleton = null
  unHook(win)
}

function trim (str) {
  return str.replace(/^\s+|\s+$/g, '')
}

function getEventTarget (xhr) {
  return xhr.watcher || (xhr.watcher = document.createElement('a'))
}

function triggerListener (xhr, name) {
  var xhrProxy = xhr.getProxy()
  var callback = 'on' + name + '_'
  var event = configEvent({ type: name }, xhrProxy)
  xhrProxy[callback] && xhrProxy[callback](event)
  var evt
  if (typeof (Event) === 'function') {
    evt = new Event(name, { bubbles: false })
  } else {
    // https://stackoverflow.com/questions/27176983/dispatchevent-not-working-in-ie11
    evt = document.createEvent('Event')
    evt.initEvent(name, false, true)
  }
  getEventTarget(xhr).dispatchEvent(evt)
}

function Handler (xhr) {
  this.xhr = xhr
  this.xhrProxy = xhr.getProxy()
}

Handler[prototype] = Object.create({
  resolve: function resolve (response) {
    var xhrProxy = this.xhrProxy
    var xhr = this.xhr
    xhrProxy.readyState = 4
    xhr.resHeader = response.headers
    xhrProxy.response = xhrProxy.responseText = response.response
    xhrProxy.statusText = response.statusText
    xhrProxy.status = response.status
    triggerListener(xhr, eventReadyStateChange)
    triggerListener(xhr, eventLoad)
    triggerListener(xhr, eventLoadEnd)
  },
  reject: function reject (error) {
    this.xhrProxy.status = 0
    triggerListener(this.xhr, error.type)
    triggerListener(this.xhr, eventLoadEnd)
  }
})

function makeHandler (next) {
  function sub (xhr) {
    Handler.call(this, xhr)
  }

  sub[prototype] = Object.create(Handler[prototype])
  sub[prototype].next = next
  return sub
}

var RequestHandler = makeHandler(function (rq) {
  var xhr = this.xhr
  rq = rq || xhr.config
  xhr.withCredentials = rq.withCredentials
  xhr.open(rq.method, rq.url, rq.async !== false, rq.user, rq.password)
  for (var key in rq.headers) {
    xhr.setRequestHeader(key, rq.headers[key])
  }
  xhr.send(rq.body)
})

var ResponseHandler = makeHandler(function (response) {
  this.resolve(response)
})

var ErrorHandler = makeHandler(function (error) {
  this.reject(error)
})

function Proxy (proxy, win) {
  var onRequest = proxy.onRequest
  var onResponse = proxy.onResponse
  var onError = proxy.onError

  function handleResponse (xhr, xhrProxy) {
    var handler = new ResponseHandler(xhr)
    var ret = {
      response: xhrProxy.response,
      status: xhrProxy.status,
      statusText: xhrProxy.statusText,
      config: xhr.config,
      headers: xhr.resHeader || xhr.getAllResponseHeaders().split('\r\n').reduce(function (ob, str) {
        if (str === '') return ob
        var m = str.split(':')
        ob[m.shift()] = trim(m.join(':'))
        return ob
      }, {})
    }
    if (!onResponse) return handler.resolve(ret)
    onResponse(ret, handler)
  }

  function onerror (xhr, xhrProxy, error, errorType) {
    var handler = new ErrorHandler(xhr)
    error = { config: xhr.config, error: error, type: errorType }
    if (onError) {
      onError(error, handler)
    } else {
      handler.next(error)
    }
  }

  function preventXhrProxyCallback () {
    return true
  }

  function errorCallback (errorType) {
    return function (xhr, e) {
      onerror(xhr, this, e, errorType)
      return true
    }
  }

  function stateChangeCallback (xhr, xhrProxy) {
    if (xhr.readyState === 4 && xhr.status !== 0) {
      handleResponse(xhr, xhrProxy)
    } else if (xhr.readyState !== 4) {
      triggerListener(xhr, eventReadyStateChange)
    }
    return true
  }

  return hook({
    onload: preventXhrProxyCallback,
    onloadend: preventXhrProxyCallback,
    onerror: errorCallback(eventError),
    ontimeout: errorCallback(eventTimeout),
    onabort: errorCallback(eventAbort),
    onreadystatechange: function (xhr) {
      return stateChangeCallback(xhr, this)
    },
    open: function open (args, xhr) {
      var _this = this
      var config = xhr.config = { headers: {} }
      config.method = args[0]
      config.url = args[1]
      config.async = args[2]
      config.user = args[3]
      config.password = args[4]
      config.xhr = xhr
      var evName = 'on' + eventReadyStateChange
      if (!xhr[evName]) {
        xhr[evName] = function () {
          return stateChangeCallback(xhr, _this)
        }
      }

      // 如果有请求拦截器，则在调用onRequest后再打开链接。因为onRequest最佳调用时机是在send前，
      // 所以我们在send拦截函数中再手动调用open，因此返回true阻止xhr.open调用。
      //
      // 如果没有请求拦截器，则不用阻断xhr.open调用
      if (onRequest) return true
    },
    send: function (args, xhr) {
      var config = xhr.config
      config.withCredentials = xhr.withCredentials
      config.body = args[0]
      if (onRequest) {
        // In 'onRequest', we may call XHR's event handler, such as `xhr.onload`.
        // However, XHR's event handler may not be set until xhr.send is called in
        // the user's code, so we use `setTimeout` to avoid this situation
        var req = function () {
          onRequest(config, new RequestHandler(xhr))
        }
        config.async === false ? req() : setTimeout(req)
        return true
      }
    },
    setRequestHeader: function (args, xhr) {
      // Collect request headers
      xhr.config.headers[args[0].toLowerCase()] = args[1]
      return true
    },
    addEventListener: function (args, xhr) {
      var _this = this
      if (events.indexOf(args[0]) !== -1) {
        var handler = args[1]
        getEventTarget(xhr).addEventListener(args[0], function (e) {
          var event = configEvent(e, _this)
          event.type = args[0]
          event.isTrusted = true
          handler.call(_this, event)
        })
        return true
      }
    },
    getAllResponseHeaders: function (_, xhr) {
      var headers = xhr.resHeader
      if (headers) {
        var header = ''
        for (var key in headers) {
          header += key + ': ' + headers[key] + '\r\n'
        }
        return header
      }
    },
    getResponseHeader: function (args, xhr) {
      var headers = xhr.resHeader
      if (headers) {
        return headers[(args[0] || '').toLowerCase()]
      }
    }
  }, win)
}
