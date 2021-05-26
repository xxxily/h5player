import debug from './debug'
import hookJs from '../libs/hookJs'
/**
 * 禁止对playbackRate进行锁定
 * 部分播放器会阻止修改playbackRate
 * 通过hackDefineProperty来反阻止playbackRate的修改
 * 参考： https://greasyfork.org/zh-CN/scripts/372673
 */

function hookDefineProperCore (target, key, option) {
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

function hackDefinePropertyByhookJs () {
  hookJs.before(Object, 'defineProperty', function (args, parentObj, methodName, originMethod, execInfo, ctx) {
    const option = args[2]
    const ele = args[0]
    const key = args[1]
    const afterArgs = hookDefineProperCore(ele, key, option)
    afterArgs.forEach((arg, i) => {
      args[i] = arg
    })
  })

  hookJs.before(Object, 'defineProperties', function (args, parentObj, methodName, originMethod, execInfo, ctx) {
    const properties = args[1]
    const ele = args[0]
    if (ele && ele instanceof Element) {
      Object.keys(properties).forEach(key => {
        const option = properties[key]
        const afterArgs = hookDefineProperCore(ele, key, option)
        args[0] = afterArgs[0]
        delete properties[key]
        properties[afterArgs[1]] = afterArgs[2]
      })
    }
  })
}

function hackDefineProperty (useHookJs) {
  if (useHookJs) {
    hackDefinePropertyByhookJs()
    return true
  }

  const originalMethods = {
    Object: Object,
    defineProperty: Object.defineProperty,
    defineProperties: Object.defineProperties
  }

  Object.defineProperty = function () {
    const args = arguments

    const option = args[2]
    const ele = args[0]
    const key = args[1]
    const afterArgs = hookDefineProperCore(ele, key, option)
    afterArgs.forEach((arg, i) => {
      args[i] = arg
    })

    return originalMethods.defineProperty.apply(originalMethods.Object, args)
  }

  Object.defineProperties = function () {
    const args = arguments

    const properties = args[1]
    const ele = args[0]
    if (ele && ele instanceof Element) {
      Object.keys(properties).forEach(key => {
        const option = properties[key]
        const afterArgs = hookDefineProperCore(ele, key, option)
        args[0] = afterArgs[0]
        delete properties[key]
        properties[afterArgs[1]] = afterArgs[2]
      })
    }

    return originalMethods.defineProperties.apply(originalMethods.Object, args)
  }
}

export default hackDefineProperty
