/*!
 * @name         utils.js
 * @description  数据类型相关的方法
 * @version      0.0.1
 * @author       Blaze
 * @date         22/03/2019 22:46
 * @github       https://github.com/xxxily
 */

/**
 * 准确地获取对象的具体类型 参见：https://www.talkingcoder.com/article/6333557442705696719
 * @param obj { all } -必选 要判断的对象
 * @returns {*} 返回判断的具体类型
 */
function getType (obj) {
  if (obj == null) {
    return String(obj)
  }
  return typeof obj === 'object' || typeof obj === 'function'
    ? (obj.constructor && obj.constructor.name && obj.constructor.name.toLowerCase()) ||
    /function\s(.+?)\(/.exec(obj.constructor)[1].toLowerCase()
    : typeof obj
}

const isType = (obj, typeName) => getType(obj) === typeName
const isObj = obj => isType(obj, 'object')
const isErr = obj => isType(obj, 'error')
const isArr = obj => isType(obj, 'array')
const isRegExp = obj => isType(obj, 'regexp')
const isFunction = obj => obj instanceof Function
const isUndefined = obj => isType(obj, 'undefined')
const isNull = obj => isType(obj, 'null')

export { getType, isType, isObj, isErr, isArr, isRegExp, isFunction, isUndefined, isNull }
