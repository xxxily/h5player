import debug from './debug'
/**
 * 禁止对playbackRate进行锁定
 * 部分播放器会阻止修改playbackRate
 * 通过hackDefineProperty来反阻止playbackRate的修改
 * 参考： https://greasyfork.org/zh-CN/scripts/372673
 */

function hackDefineProperty () {
  const originalMethods = {
    Object: Object,
    defineProperty: Object.defineProperty,
    defineProperties: Object.defineProperties
  }

  let definePropertyLogger = []

  function hookDefineDetails (target, key, option) {
    definePropertyLogger.push({
      target,
      key,
      option
    })

    if (definePropertyLogger.length >= 100) {
      debug.log('definePropertyLogger:', definePropertyLogger)
      definePropertyLogger = []
    }

    if (option && target && target instanceof Element && typeof key === 'string' && key.indexOf('on') >= 0) {
      option.configurable = true
    }

    if (target instanceof HTMLVideoElement) {
      const unLockProperties = ['playbackRate', 'currentTime', 'volume', 'muted']
      if (unLockProperties.includes(key)) {
        if (!option.configurable) {
          option.configurable = true
          debug.log(`禁止对${key}进行锁定`)
        }
      }
    }

    return [target, key, option]
  }

  Object.defineProperty = function () {
    const args = arguments

    const option = args[2]
    const ele = args[0]
    const key = args[1]
    const afterArgs = hookDefineDetails(ele, key, option)
    afterArgs.forEach((arg, i) => {
      args[i] = arg
    })

    return originalMethods.defineProperty.apply(originalMethods.Object, args)
  }

  Object.defineProperties = function () {
    const args = arguments

    const option = args[1]
    const ele = args[0]
    if (ele && ele instanceof Element) {
      Object.keys(option).forEach(key => {
        const o = option[key]
        const afterArgs = hookDefineDetails(ele, key, o)
        args[0] = afterArgs[0]
        delete option[key]
        option[afterArgs[1]] = afterArgs[2]
      })
    }

    return originalMethods.defineProperties.apply(originalMethods.Object, args)
  }

  setTimeout(function () {
    if (definePropertyLogger.length) {
      debug.log('definePropertyLogger:', definePropertyLogger)
      definePropertyLogger = []
    }
  }, 1000 * 10)
}

export default hackDefineProperty
