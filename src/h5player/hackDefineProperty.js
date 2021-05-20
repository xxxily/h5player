import debug from './debug'
/**
 * 禁止对playbackRate进行锁定
 * 部分播放器会阻止修改playbackRate
 * 通过hackDefineProperty来反阻止playbackRate的修改
 * 参考： https://greasyfork.org/zh-CN/scripts/372673
 */

import hookJs from '../libs/hookJs'

function hackDefineProperty () {
  function hookDefineDetails (target, key, option) {
    if (option && target && target instanceof Element && typeof key === 'string' && key.indexOf('on') >= 0) {
      option.configurable = true
    }

    if (target instanceof HTMLVideoElement && key === 'playbackRate') {
      if (!option.configurable) {
        option.configurable = true
        debug.log('禁止对playbackRate进行锁定')
      }
    }

    return [target, key, option]
  }

  hookJs.before(Object, 'defineProperty', function (args, parentObj, methodName, originMethod) {
    const option = args[2]
    const ele = args[0]
    const key = args[1]
    const afterArgs = hookDefineDetails(ele, key, option)
    afterArgs.forEach((arg, i) => {
      args[i] = arg
    })
  })

  hookJs.before(Object, 'defineProperties', function (args, parentObj, methodName, originMethod) {
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
  })
}

export default hackDefineProperty
