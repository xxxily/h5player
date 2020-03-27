/*!
 * @name         index.js
 * @description  注入到Request和Response对象的公共函数
 * @version      0.0.1
 * @author       Blaze
 * @date         2020/3/23 13:56
 * @github       https://github.com/xxxily
 */
const utils = require('../../../../utils')
const commonMethods = [
  {
    describe: '统一成功状态的json数据格式',
    methodName: 'jsonSuc',
    mountTo: ['res'],
    handler (req, res) {
      return function (json, mergeMode) {
        const result = {
          code: 0,
          result: null,
          error: null
        }

        if (mergeMode) {
          res.json(utils.merge(result, json))
        } else {
          result.result = json
          res.json(result)
        }
      }
    }
  },
  {
    describe: '统一失败状态的json数据格式',
    methodName: 'jsonErr',
    mountTo: ['res'],
    handler (req, res) {
      return function (json, mergeMode) {
        const result = {
          code: -1,
          result: null,
          error: null
        }

        if (mergeMode) {
          res.json(utils.merge(result, json))
        } else {
          result.error = json
          res.json(result)
        }
      }
    }
  }
]

/* 挂载中间件 */
module.exports = function (req, res, next) {
  commonMethods.forEach(methodConf => {
    const mountTo = Array.isArray(methodConf.mountTo) ? methodConf.mountTo : [methodConf.mountTo]

    /* 挂载核心逻辑 */
    function mount (target) {
      if (target[methodConf.methodName]) {
        console.error(methodConf.methodName + '该公共函数已被挂载，不能重复挂载')
        return false
      }

      const method = methodConf.handler(req, res, next)
      if (method instanceof Function) {
        /* 挂载handler返回的函数 */
        target[methodConf.methodName] = method
      } else {
        console.error(methodConf.methodName + '的handler必须返回函数才能挂载')
      }
    }

    /* 判断是否符合挂载条件，然后进行挂载 */
    if (methodConf.handler instanceof Function && methodConf.methodName && typeof methodConf.methodName === 'string') {
      if (mountTo.includes('req')) {
        mount(req)
      }
      if (mountTo.includes('res')) {
        mount(res)
      }
    }
  })
  next()
}
