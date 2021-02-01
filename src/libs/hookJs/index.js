/*!
 * @name         index.js
 * @description  hookJs JS AOP切面编程辅助库
 * @version      0.0.1
 * @author       Blaze
 * @date         2020/10/22 17:40
 * @github       https://github.com/xxxily
 */

const win = typeof window === 'undefined' ? global : window
const toStr = Function.prototype.call.bind(Object.prototype.toString)
/* 特殊场景，如果把Boolean也hook了，很容易导致调用溢出，所以是需要使用原生Boolean */
const toBoolean = Boolean.originMethod ? Boolean.originMethod : Boolean
const util = {
  toStr,
  isObj: obj => toStr(obj) === '[object Object]',
  /* 判断是否为引用类型，用于更宽泛的场景 */
  isRef: obj => typeof obj === 'object',
  isReg: obj => toStr(obj) === '[object RegExp]',
  isFn: obj => obj instanceof Function,
  isAsyncFn: fn => toStr(fn) === '[object AsyncFunction]',
  isPromise: obj => toStr(obj) === '[object Promise]',
  firstUpperCase: str => str.replace(/^\S/, s => s.toUpperCase()),
  toArr: arg => Array.from(Array.isArray(arg) ? arg : [arg]),

  debug: {
    log () {
      let log = win.console.log
      /* 如果log也被hook了，则使用未被hook前的log函数 */
      if (log.originMethod) { log = log.originMethod }
      if (win._debugMode_) {
        log.apply(win.console, arguments)
      }
    }
  },
  /* 获取包含自身、继承、可枚举、不可枚举的键名 */
  getAllKeys (obj) {
    const tmpArr = []
    for (const key in obj) { tmpArr.push(key) }
    const allKeys = Array.from(new Set(tmpArr.concat(Reflect.ownKeys(obj))))
    return allKeys
  }
}

const hookJs = {
  _addHook (hookMethod, fn, type, classHook) {
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
      if (classHook) { fn.classHook = true }
      hookMethod[hookKeyName].push(fn)
    }
  },
  _runHooks (parentObj, methodName, originMethod, hookMethod, target, ctx, args, classHook) {
    const errorHooks = hookMethod.errorHooks || []
    const hangUpHooks = hookMethod.hangUpHooks || []
    const replaceHooks = hookMethod.replaceHooks || []
    const execInfo = {
      result: null,
      error: null,
      args: args,
      type: ''
    }

    function runHooks (hooks, type) {
      execInfo.type = type || ''
      if (Array.isArray(hooks)) {
        hooks.forEach(fn => {
          if (util.isFn(fn) && classHook === fn.classHook) {
            fn(args, parentObj, methodName, originMethod, execInfo, ctx)
          }
        })
      }
    }

    const runTarget = (function () {
      if (classHook) {
        return function () {
          // eslint-disable-next-line new-cap
          execInfo.result = new target(...args)
        }
      } else {
        return function () {
          execInfo.result = target.apply(ctx, args)
        }
      }
    })()

    runHooks(hookMethod.beforeHooks, 'before')

    if (hangUpHooks.length || replaceHooks.length) {
      /**
       * 当存在hangUpHooks或replaceHooks的时候是不会触发原来函数的
       * 本质上来说hangUpHooks和replaceHooks是一样的，只是外部的定义描述不一致和分类不一致而已
       */
      runHooks(hookMethod.hangUpHooks, 'hangUp')
      runHooks(hookMethod.replaceHooks, 'replace')
    } else {
      if (errorHooks.length) {
        try {
          runTarget()
        } catch (err) {
          execInfo.error = err
          runHooks(errorHooks, 'error')
          throw err
        }
      } else {
        runTarget()
      }
    }

    /* 执行afterHooks，但如果返回的是Promise则需进一步细分处理 */
    if (util.isPromise(execInfo.result)) {
      execInfo.result.then(() => {
        runHooks(hookMethod.afterHooks, 'after')
        return Promise.resolve.apply(Promise, arguments)
      }).catch(err => {
        execInfo.error = err
        runHooks(errorHooks, 'error')
        return Promise.reject(err)
      })
    } else {
      runHooks(hookMethod.afterHooks, 'after')
    }

    return execInfo.result
  },
  /* 使用代理进行hook比直接运行originMethod.apply的错误率更低，但性能也会稍差些 */
  _proxyMethodcGenerator (parentObj, methodName, originMethod, classHook, context, noProxy, proxyHandler) {
    const t = this
    let hookMethod = null

    /* 存在缓存则使用缓存的hookMethod */
    if (t.isHook(originMethod)) {
      hookMethod = originMethod
    } else if (t.isHook(originMethod.hookMethod)) {
      hookMethod = originMethod.hookMethod
    }

    if (hookMethod) {
      if (!hookMethod.isHook) {
        /* 重新标注被hook状态 */
        hookMethod.isHook = true
        util.debug.log(`[hook method] ${util.toStr(parentObj)} ${methodName}`)
      }
      return hookMethod
    }

    /* 不存在代理对象或为了提高性能指定不使用代理方式进行hook时，则使用_hookMethodcGenerator进行hook */
    if (!Proxy || noProxy) {
      context = context || parentObj
      hookMethod = function () {
        return t._runHooks(parentObj, methodName, originMethod, hookMethod, originMethod, context, arguments, classHook)
      }
    } else {
      /* 注意：使用Proxy代理，hookMethod和originMethod将共用同一对象 */
      const handler = { ...proxyHandler }

      /* 下面的写法确定了proxyHandler是无法覆盖construct和apply操作的 */
      if (classHook) {
        handler.construct = function (target, args, newTarget) {
          context = context || parentObj
          return t._runHooks(parentObj, methodName, originMethod, hookMethod, target, context, args, true)
        }
      } else {
        handler.apply = function (target, ctx, args) {
          ctx = context || ctx
          return t._runHooks(parentObj, methodName, originMethod, hookMethod, target, ctx, args)
        }
      }

      hookMethod = new Proxy(originMethod, handler)
    }

    hookMethod.originMethod = originMethod
    originMethod.hookMethod = hookMethod
    hookMethod.isHook = true
    hookMethod.isClassHook = classHook || false

    util.debug.log(`[hook method] ${util.toStr(parentObj)} ${methodName}`)

    return hookMethod
  },
  _getObjKeysByRule (obj, rule) {
    let excludeRule = null
    let result = rule

    if (util.isObj(rule) && rule.include) {
      excludeRule = rule.exclude
      rule = rule.include
      result = rule
    }

    /**
     * for in、Object.keys与Reflect.ownKeys的区别见：
     * https://es6.ruanyifeng.com/#docs/object#%E5%B1%9E%E6%80%A7%E7%9A%84%E9%81%8D%E5%8E%86
     */
    if (rule === '*') {
      result = Object.keys(obj)
    } else if (rule === '**') {
      result = Reflect.ownKeys(obj)
    } else if (rule === '***') {
      result = util.getAllKeys(obj)
    } else if (util.isReg(rule)) {
      result = util.getAllKeys(obj).filter(keyName => rule.test(keyName))
    }

    /* 如果存在排除规则，则需要进行排除 */
    if (excludeRule) {
      result = Array.isArray(result) ? result : [result]
      if (util.isReg(excludeRule)) {
        result = result.filter(keyName => !excludeRule.test(keyName))
      } else if (Array.isArray(excludeRule)) {
        result = result.filter(keyName => !excludeRule.includes(keyName))
      } else {
        result = result.filter(keyName => excludeRule !== keyName)
      }
    }

    return util.toArr(result)
  },
  /**
   * 判断某个函数是否已经被hook
   * @param fn {Function} -必选 要判断的函数
   * @returns {boolean}
   */
  isHook (fn) {
    return Boolean(fn && util.isFn(fn.originMethod) && fn !== fn.originMethod)
  },

  /**
   * 判断对象下的某个值是否具备hook的条件
   * 注意：具备hook条件和能否直接修改值是两回事，
   * 在进行hook的时候还要检查descriptor.writable是否为false
   * 如果为false则要修改成true才能hook成功
   * @param parentObj
   * @param keyName
   * @returns {boolean}
   */
  isAllowHook (parentObj, keyName) {
    /* 有些对象会设置getter，让读取值的时候就抛错，所以需要try catch 判断能否正常读取属性 */
    try { if (!parentObj[keyName]) return false } catch (e) { return false }
    const descriptor = Object.getOwnPropertyDescriptor(parentObj, keyName)
    return !(descriptor && descriptor.configurable === false)
  },

  /**
   * hook 核心函数
   * @param parentObj {Object} -必选 被hook函数依赖的父对象
   * @param hookMethods {Object|Array|RegExp|string} -必选 被hook函数的函数名或函数名的匹配规则
   * @param fn {Function} -必选 hook之后的回调方法
   * @param type {String} -可选 默认before，指定运行hook函数回调的时机，可选字符串：before、after、replace、error、hangUp
   * @param classHook {Boolean} -可选 默认false，指定是否为针对new（class）操作的hook
   * @param context {Object} -可选 指定运行被hook函数时的上下文对象
   * @param proxyHandler {Object} -可选 默认使用的是Proxy的apply handler进行hook，如果你有特殊需求也可以配置自己的handler以实现更复杂的功能
   * @param noProxy {Boolean} -可选 默认false，不使用Proxy进行hook，以获得更高性能，但也意味着通用性更差些，对于要hook HTMLElement.prototype、EventTarget.prototype这些对象里面的非实例的函数往往会失败而导致被hook函数执行出错
   * @returns {boolean}
   */
  hook (parentObj, hookMethods, fn, type, classHook, context, proxyHandler, noProxy) {
    classHook = toBoolean(classHook)
    type = type || 'before'

    if (!util.isRef(parentObj) || !util.isFn(fn) || !hookMethods) {
      return false
    }

    const t = this

    hookMethods = t._getObjKeysByRule(parentObj, hookMethods)
    hookMethods.forEach(methodName => {
      if (!t.isAllowHook(parentObj, methodName)) {
        util.debug.log(`${util.toStr(parentObj)} [${methodName}] does not support modification`)
        return false
      }

      const descriptor = Object.getOwnPropertyDescriptor(parentObj, methodName)
      if (descriptor && descriptor.writable === false) {
        Object.defineProperty(parentObj, methodName, { writable: true })
      }

      const originMethod = parentObj[methodName]
      let hookMethod = null

      /* 非函数无法进行hook操作 */
      if (!util.isFn(originMethod)) {
        return false
      }

      hookMethod = t._proxyMethodcGenerator(parentObj, methodName, originMethod, classHook, context, proxyHandler, noProxy)

      if (hookMethod.isClassHook !== classHook) {
        util.debug.log(`${util.toStr(parentObj)} [${methodName}] Cannot support functions hook and classes hook at the same time `)
        return false
      }

      /* 使用hookMethod接管需要被hook的方法 */
      if (parentObj[methodName] !== hookMethod) {
        parentObj[methodName] = hookMethod
      }

      t._addHook(hookMethod, fn, type, classHook)
    })
  },

  /* 专门针对new操作的hook，本质上是hook函数的别名，可以少传classHook这个参数，并且明确语义 */
  hookClass (parentObj, hookMethods, fn, type, context, proxyHandler, noProxy) {
    return this.hook(parentObj, hookMethods, fn, type, true, context, proxyHandler, noProxy)
  },

  /**
   * 取消对某个函数的hook
   * @param parentObj {Object} -必选 要取消被hook函数依赖的父对象
   * @param hookMethods {Object|Array|RegExp|string} -必选 要取消被hook函数的函数名或函数名的匹配规则
   * @param type {String} -可选 默认before，指定要取消的hook类型，可选字符串：before、after、replace、error、hangUp，如果不指定该选项则取消所有类型下的所有回调
   * @param fn {Function} -必选 取消指定的hook回调函数，如果不指定该选项则取消对应type类型下的所有回调
   * @returns {boolean}
   */
  unHook (parentObj, hookMethods, type, fn) {
    if (!util.isRef(parentObj) || !hookMethods) {
      return false
    }

    const t = this
    hookMethods = t._getObjKeysByRule(parentObj, hookMethods)
    hookMethods.forEach(methodName => {
      if (!t.isAllowHook(parentObj, methodName) || !parentObj[methodName].originMethod) {
        return false
      }

      const hookMethod = parentObj[methodName]
      const originMethod = hookMethod.originMethod

      if (!t.isHook(hookMethod)) {
        return false
      }

      if (type) {
        const hookKeyName = type + 'Hooks'
        const hooks = hookMethod[hookKeyName] || []

        if (fn) {
          /* 删除指定类型下的指定hook函数 */
          for (let i = 0; i < hooks.length; i++) {
            if (fn === hooks[i]) {
              hookMethod[hookKeyName].splice(i, 1)
              util.debug.log(`[unHook ${hookKeyName} func] ${util.toStr(parentObj)} ${methodName}`, fn)
              break
            }
          }
        } else {
          /* 删除指定类型下的所有hook函数 */
          if (Array.isArray(hookMethod[hookKeyName])) {
            hookMethod[hookKeyName] = []
            util.debug.log(`[unHook all ${hookKeyName}] ${util.toStr(parentObj)} ${methodName}`)
          }
        }
      } else {
        /* 彻底还原被hook的函数 */
        if (util.isFn(originMethod)) {
          Object.keys(hookMethod).forEach(keyName => {
            if (/Hooks$/.test(keyName) && Array.isArray(hookMethod[keyName])) {
              hookMethod[keyName] = []
            }
          })

          hookMethod.isHook = false
          parentObj[methodName] = originMethod
          delete parentObj[methodName].originMethod
          delete parentObj[methodName].hookMethod
          delete parentObj[methodName].isHook
          delete parentObj[methodName].isClassHook
          util.debug.log(`[unHook method] ${util.toStr(parentObj)} ${methodName}`)
        }
      }
    })
  },
  /* 源函数运行前的hook */
  before (obj, hookMethods, fn, classHook, context) {
    return this.hook(obj, hookMethods, fn, 'before', classHook, context)
  },
  /* 源函数运行后的hook */
  after (obj, hookMethods, fn, classHook, context) {
    return this.hook(obj, hookMethods, fn, 'after', classHook, context)
  },
  /* 替换掉要hook的函数，不再运行源函数，换成运行其他逻辑 */
  replace (obj, hookMethods, fn, classHook, context) {
    return this.hook(obj, hookMethods, fn, 'replace', classHook, context)
  },
  /* 源函数运行出错时的hook */
  error (obj, hookMethods, fn, classHook, context) {
    return this.hook(obj, hookMethods, fn, 'error', classHook, context)
  },
  /* 底层实现逻辑与replace一样，都是替换掉要hook的函数，不再运行源函数，只不过是为了明确语义，将源函数挂起不再执行，原则上也不再执行其他逻辑，如果要执行其他逻辑请使用replace hook */
  hangUp (obj, hookMethods, fn, classHook, context) {
    return this.hook(obj, hookMethods, fn, 'hangUp', classHook, context)
  }
}

export default hookJs
