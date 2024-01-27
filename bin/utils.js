/**
 *  公共方法模块，此模块尽可能减少无关依赖
 */

import childProcess from 'child_process'

const utils = {
  /**
   * 同步运行连续的cli命令，例如 cmds(['git add','git commit -m "test"'])
   * @param commands {string|array} -必选 可以是单个命令，也可以是多个命令
   * @param options {object} -可选 child_process.exec 所有可用参数
   */
  cmds: function (commands, options) {
    const commandList = typeof commands === 'string' ? [commands] : commands
    commandList.forEach(function (cmd) {
      childProcess.execSync(cmd, options)
    })
  },

  /**
   * 对一个对象进行深度拷贝
   * @source -必选（Object|Array）需拷贝的对象或数组
   */
  clone: function (source) {
    const me = this
    let result = {}

    if (typeof source !== 'object') {
      return source
    }
    if (Object.prototype.toString.call(source) === '[object Array]') {
      result = []
    }
    if (Object.prototype.toString.call(source) === '[object Null]') {
      result = null
    }
    for (const key in source) {
      result[key] = (typeof source[key] === 'object') ? me.clone(source[key]) : source[key]
    }
    return result
  },

  /**
   * 深度合并两个可枚举的对象
   * @param objA {object} -必选 对象A
   * @param objB {object} -必选 对象B
   * @param concatArr {boolean} -可选 合并数组，默认遇到数组的时候，直接以另外一个数组替换当前数组，将此设置true则，遇到数组的时候一律合并，而不是直接替换
   * @returns {*|void}
   */
  mergeObj: function (objA, objB, concatArr) {
    function isObj(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]'
    }
    if (!isObj(objA) || !isObj(objB)) return objA
    function deepMerge(objA, objB) {
      const keysB = Object.keys(objB)
      keysB.forEach(function (key) {
        const subItemA = objA[key]
        const subItemB = objB[key]
        if (typeof subItemA === 'undefined') {
          objA[key] = subItemB
        } else {
          if (isObj(subItemA) && isObj(subItemB)) {
            /* 进行深层合并 */
            objA[key] = deepMerge(subItemA, subItemB)
          } else {
            if (concatArr && Array.isArray(subItemA) && Array.isArray(subItemB)) {
              objA[key] = subItemA.concat(subItemB)
            } else {
              objA[key] = subItemB
            }
          }
        }
      })
      return objA
    }
    return deepMerge(objA, objB)
  },

  /**
   * 多对象深度合并，合并规则基于mergeObj，但不存在concatArr选项
   * @param objs
   * @returns {*}
   */
  merge: function (...objs) {
    const t = utils
    let result = objs[0]
    objs.forEach(function (obj, index) {
      if (index) {
        result = t.mergeObj(result, obj)
      }
    })
    return result
  }
}

export default utils
