/*!
 * @name         index.js
 * @description  hookJs
 * @version      0.0.1
 * @author       Blaze
 * @date         2020/10/22 17:40
 * @github       https://github.com/xxxily
 */

const util = {
  isObj: obj => Object.prototype.toString.call(obj) === '[object Object]',
  /* 判断是否为引用类型，用于更宽泛的场景 */
  isRef: obj => typeof obj === 'object',
  isFn: obj => obj instanceof Function,
  isAsyncFn: fn => Object.prototype.toString.call(fn) === '[object AsyncFunction]',
  isPromise: obj => Object.prototype.toString.call(obj) === '[object Promise]',
  firstUpperCase: str => str.replace(/^\S/, s => s.toUpperCase())
}

const hookJs = {
  _addHook (hookMethod, fn, type) {
    const hookKeyName = type + 'Hooks'
    if (!hookMethod[hookKeyName]) {
      hookMethod[hookKeyName] = []
    }

    /* 注册（储存）要被调用的hook函数，同时防止重复注册 */
    let hasSameHook = false
    for (let i = 0; i < hookMethod[hookKeyName].length; i++) {
      if (fn === hookMethod[hookKeyName][i]) {
        hasSameHook = true
        break
      }
    }

    if (!hasSameHook) {
      hookMethod[hookKeyName].push(fn)
    }
  },
  _hookMethodcGenerator (parentObj, methodName, originMethod, context) {
    const hookMethod = function () {
      let execResult = null
      const execArgs = arguments
      const errorHooks = hookMethod.errorHooks || []
      const hangUpHooks = hookMethod.hangUpHooks || []
      const replaceHooks = hookMethod.replaceHooks || []

      function runHooks (hooks, info) {
        if (Array.isArray(hooks)) {
          hooks.forEach(fn => {
            if (util.isFn(fn)) {
              fn(execArgs, parentObj, methodName, originMethod, info)
            }
          })
        }
      }

      runHooks(hookMethod.beforeHooks)

      if (hangUpHooks.length || replaceHooks.length) {
        /**
         * 当存在hangUpHooks或replaceHooks的时候是不会触发原来函数的
         * 本质上来说hangUpHooks和replaceHooks是一样的，只是外部的定义描述不一致和分类不一致而已
         */
        runHooks(hookMethod.hangUpHooks)
        runHooks(hookMethod.replaceHooks)
      } else {
        if (errorHooks.length) {
          try {
            execResult = originMethod.apply(context || parentObj, arguments)
          } catch (e) {
            runHooks(errorHooks, e)
            throw e
          }
        } else {
          execResult = originMethod.apply(parentObj, arguments)
        }
      }

      /* 执行afterHooks，但如果返回的是Promise则需进一步细分处理 */
      if (util.isPromise(execResult)) {
        execResult.then(() => {
          runHooks(hookMethod.afterHooks)
          return Promise.resolve.apply(Promise, arguments)
        }).catch(err => {
          runHooks(errorHooks, err)
          return Promise.reject(err)
        })
      } else {
        runHooks(hookMethod.afterHooks)
      }

      return execResult
    }

    hookMethod.originMethod = originMethod
    hookMethod.isHook = true
    return hookMethod
  },
  hook (parentObj, hookMethods, fn, context, type = 'before') {
    if (!util.isRef(parentObj) || !util.isFn(fn) || !hookMethods) {
      return false
    }

    const t = this
    hookMethods = Array.isArray(hookMethods) ? hookMethods : [hookMethods]

    hookMethods.forEach(methodName => {
      const originMethod = parentObj[methodName]
      let hookMethod = null

      /* 非函数无法进行hook操作 */
      if (!util.isFn(originMethod)) {
        return false
      }

      if (originMethod.isHook) {
        hookMethod = originMethod
      } else {
        hookMethod = t._hookMethodcGenerator(parentObj, methodName, originMethod, context)

        /* 使用hookMethod接管需要被hook的方法 */
        parentObj[methodName] = hookMethod
      }

      t._addHook(hookMethod, fn, type)
    })
  },
  unHook (parentObj, hookMethods, type, fn) {
    if (!util.isRef(parentObj) || !hookMethods) {
      return false
    }

    hookMethods = Array.isArray(hookMethods) ? hookMethods : [hookMethods]

    hookMethods.forEach(methodName => {
      const hookMethod = parentObj[methodName]
      const originMethod = hookMethod.originMethod

      if (!util.isFn(hookMethod) || !hookMethod.isHook) {
        return false
      }

      if (type) {
        const hookKeyName = type + 'Hooks'
        const hooks = hookMethod[hookKeyName] || []

        if (fn) {
          /* 删除指定类型下的指定hook函数 */
          for (let i = 0; i < hooks.length; i++) {
            if (fn === hooks[i]) {
              hookMethod[hookKeyName] = hookMethod[hookKeyName].split()
              break
            }
          }
        } else {
          /* 删除指定类型下的所有hook函数 */
          hookMethod[hookKeyName] = []
        }
      } else {
        /* 彻底还原被hook的函数 */
        if (util.isFn(originMethod)) {
          parentObj[methodName] = originMethod
        }
      }
    })
  },
  before (obj, hookMethods, fn, context) {
    return this.hook(obj, hookMethods, fn, context, 'before')
  },
  after (obj, hookMethods, fn, context) {
    return this.hook(obj, hookMethods, fn, context, 'after')
  },
  replace (obj, hookMethods, fn, context) {
    return this.hook(obj, hookMethods, fn, context, 'replace')
  },
  error (obj, hookMethods, fn, context) {
    return this.hook(obj, hookMethods, fn, context, 'error')
  },
  hangUp (obj, hookMethods, fn, context) {
    return this.hook(obj, hookMethods, fn, context, 'hangUp')
  }
}

hookJs.hook(window, 'alert', function () {
  console.log('----------------------------')
})

hookJs.hook(window, 'alert', function () {
  console.log('22222222222222222222')
})

alert(1111)

// 通过遍历扩展hookJs的unHook方法
// const extendEasyJs = ['before', 'after', 'replace']
// extendEasyJs.forEach(name => {
//   hookJs[name] = (obj, hookMethods, fn, context) => hookJs.hook(obj, hookMethods, fn, name, context)
// })

export default hookJs
