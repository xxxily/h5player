/**
 * 媒体标签检测，可以检测出viode、audio、以及其它标签名经过改造后的媒体Element
 * @param {Function} handler -必选 检出后要执行的回调函数
 * @returns mediaElementList
 */
const mediaElementChecker = (function () {
  let hasProxyHTMLMediaElementMethod = false
  const mediaElementHandler = []
  const mediaElementList = []

  function proxyPrototypeMethod (element, methodName) {
    const originFunc = element && element.prototype[methodName]
    if (!originFunc) return

    element.prototype[methodName] = new Proxy(originFunc, {
      apply (target, ctx, args) {
        const result = target.apply(ctx, args)

        if (ctx instanceof window.HTMLMediaElement && !mediaElementList.includes(ctx)) {
          // console.log(`[mediaElementChecker][${methodName}]`, ctx)
          mediaElementList.push(ctx)

          try {
            mediaElementHandler.forEach(handler => {
              (handler instanceof Function) && handler(ctx, mediaElementList)
            })
          } catch (e) {}
        }

        return result
      }
    })
  }

  return function (handler) {
    if (!(handler instanceof Function) || mediaElementHandler.includes(handler)) {
      return mediaElementList
    } else {
      mediaElementHandler.push(handler)
    }

    if (!hasProxyHTMLMediaElementMethod) {
      const proxyMethods = ['play', 'pause', 'load', 'addEventListener']
      proxyMethods.forEach(methodName => { proxyPrototypeMethod(HTMLMediaElement, methodName) })
      hasProxyHTMLMediaElementMethod = true
    }

    return mediaElementList
  }
})()

export default mediaElementChecker
