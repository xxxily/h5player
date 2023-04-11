/*
 * author: wendux
 * email: 824783146@qq.com
 * source code: https://github.com/wendux/Ajax-hook
 */

// Save original XMLHttpRequest as _rxhr
var realXhr = '_rxhr'

export var events = ['load', 'loadend', 'timeout', 'error', 'readystatechange', 'abort']

export function configEvent (event, xhrProxy) {
  var e = {}
  for (var attr in event) e[attr] = event[attr]
  // xhrProxy instead
  e.target = e.currentTarget = xhrProxy
  return e
}

export function hook (proxy, win) {
  win = win || window
  // Avoid double hookAjax
  win[realXhr] = win[realXhr] || win.XMLHttpRequest

  win.XMLHttpRequest = function () {
    // We shouldn't hookAjax XMLHttpRequest.prototype because we can't
    // guarantee that all attributes are on the prototype。
    // Instead, hooking XMLHttpRequest instance can avoid this problem.

    var xhr = new win[realXhr]()

    // Generate all callbacks(eg. onload) are enumerable (not undefined).
    for (var i = 0; i < events.length; ++i) {
      if (xhr[events[i]] === undefined) xhr[events[i]] = null
    }

    for (var attr in xhr) {
      var type = ''
      try {
        type = typeof xhr[attr] // May cause exception on some browser
      } catch (e) {
      }
      if (type === 'function') {
        // hookAjax methods of xhr, such as `open`、`send` ...
        this[attr] = hookFunction(attr)
      } else {
        Object.defineProperty(this, attr, {
          get: getterFactory(attr),
          set: setterFactory(attr),
          enumerable: true
        })
      }
    }
    var that = this
    xhr.getProxy = function () {
      return that
    }
    this.xhr = xhr
  }

  Object.assign(win.XMLHttpRequest, { UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4 })

  // Generate getter for attributes of xhr
  function getterFactory (attr) {
    return function () {
      var v = this.hasOwnProperty(attr + '_') ? this[attr + '_'] : this.xhr[attr]
      var attrGetterHook = (proxy[attr] || {}).getter
      return attrGetterHook && attrGetterHook(v, this) || v
    }
  }

  // Generate setter for attributes of xhr; by this we have an opportunity
  // to hookAjax event callbacks （eg: `onload`） of xhr;
  function setterFactory (attr) {
    return function (v) {
      var xhr = this.xhr
      var that = this
      var hook = proxy[attr]
      // hookAjax  event callbacks such as `onload`、`onreadystatechange`...
      if (attr.substring(0, 2) === 'on') {
        that[attr + '_'] = v
        xhr[attr] = function (e) {
          e = configEvent(e, that)
          var ret = proxy[attr] && proxy[attr].call(that, xhr, e)
          ret || v.call(that, e)
        }
      } else {
        // If the attribute isn't writable, generate proxy attribute
        var attrSetterHook = (hook || {}).setter
        v = attrSetterHook && attrSetterHook(v, that) || v
        this[attr + '_'] = v
        try {
          // Not all attributes of xhr are writable(setter may undefined).
          xhr[attr] = v
        } catch (e) {
        }
      }
    }
  }

  // Hook methods of xhr.
  function hookFunction (fun) {
    return function () {
      var args = [].slice.call(arguments)
      if (proxy[fun]) {
        var ret = proxy[fun].call(this, args, this.xhr)
        // If the proxy return value exists, return it directly,
        // otherwise call the function of xhr.
        if (ret) return ret
      }
      return this.xhr[fun].apply(this.xhr, args)
    }
  }

  // Return the real XMLHttpRequest
  return win[realXhr]
}

export function unHook (win) {
  win = win || window
  if (win[realXhr]) win.XMLHttpRequest = win[realXhr]
  win[realXhr] = undefined
}
