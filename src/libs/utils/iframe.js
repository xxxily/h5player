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
  let result = true
  try {
    if (window.top.localStorage || window.top.location.href) {
      result = false
    }
  } catch (e) {
    result = true
  }
  return result
}

export { isInIframe, isInCrossOriginFrame }
