/**
 * 公共方法模块，此模块尽可能减少无关依赖
 */

const childProcess = require('child_process')
const utils = {
  /* 获取运行npm命令时候的参数 */
  getNpmConfigArgv: function () {
    let argv = []
    if (process.env.npm_config_argv) {
      const npmArgv = JSON.parse(process.env.npm_config_argv)
      argv = npmArgv.original || []
    }
    return argv
  },
  /**
   * 判断当前是否传了某个npm命令参数
   * @param argv {string} -必选 要判断的参数，可以不加前缀 - 或 -- ，会自动判断是否存在带 - 或 -- 的参数，例如传 fix，则会自动判断是否存在 -fix 或 --fix
   */
  hasNpmArgv: function (argv) {
    const t = this
    const argvStr = argv.replace(/^-+/g, '')
    const npmArgv = t.getNpmConfigArgv()
    return npmArgv.includes('-' + argvStr) || npmArgv.includes('--' + argvStr)
  },
  /**
   * 获取运行参数的运行代码，一般以前缀进行区分
   * @param prefix {string} -必选 前缀特征，默认'tag:'
   * @param origin {array} -必选 可以是任何值为字符串的数组，默认 process.argv
   */
  getArgvCode: function (prefix = 'tag:', origin = process.argv) {
    let result = ''
    for (let i = 0; i < origin.length; i++) {
      if (origin[i].startsWith(prefix)) {
        result = origin[i]
        break
      }
    }
    return result.split(prefix)[1] || ''
  },
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
    function isObj (obj) {
      return Object.prototype.toString.call(obj) === '[object Object]'
    }
    if (!isObj(objA) || !isObj(objB)) return objA
    function deepMerge (objA, objB) {
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

module.exports = utils
