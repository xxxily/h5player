/*!
 * @name         hotkeysRunner.js
 * @description  热键运行器，实现类似vscode的热键配置方式
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/11/23 18:22
 * @github       https://github.com/xxxily
 */

const Map = window.Map
const WeakMap = window.WeakMap
function isObj (obj) { return Object.prototype.toString.call(obj) === '[object Object]' }

function getValByPath (obj, path) {
  path = path || ''
  const pathArr = path.split('.')
  let result = obj

  /* 递归提取结果值 */
  for (let i = 0; i < pathArr.length; i++) {
    if (!result) break
    result = result[pathArr[i]]
  }

  return result
}

function toArrArgs (args) {
  return Array.isArray(args) ? args : (typeof args === 'undefined' ? [] : [args])
}

function isModifierKey (key) {
  return [
    'ctrl', 'controlleft', 'controlright',
    'shift', 'shiftleft', 'shiftright',
    'alt', 'altleft', 'altright',
    'meta', 'metaleft', 'metaright',
    'capsLock'].includes(key.toLowerCase())
}

const keyAlias = {
  ControlLeft: 'ctrl',
  ControlRight: 'ctrl',
  ShiftLeft: 'shift',
  ShiftRight: 'shift',
  AltLeft: 'alt',
  AltRight: 'alt',
  MetaLeft: 'meta',
  MetaRight: 'meta'
}

const combinationKeysMonitor = (function () {
  const combinationKeysState = new Map()

  const hasInit = new WeakMap()

  function init (win = window) {
    if (!win || win !== win.self || !win.addEventListener || hasInit.get(win)) {
      return false
    }

    const timers = {}

    function activeCombinationKeysState (event) {
      isModifierKey(event.code) && combinationKeysState.set(event.code, true)
    }

    function inactivateCombinationKeysState (event) {
      if (!(event instanceof KeyboardEvent)) {
        combinationKeysState.forEach((val, key) => {
          combinationKeysState.set(key, false)
        })
        return true
      }

      /**
       * combinationKeysState状态必须保留一段时间，否则当外部定义的是keyup事件时候，由于这个先注册也先执行，
       * 马上更改combinationKeysState状态，会导致后面定义的事件拿到的是未激活组合键的状态
       */
      if (isModifierKey(event.code)) {
        clearTimeout(timers[event.code])
        timers[event.code] = setTimeout(() => { combinationKeysState.set(event.code, false) }, 50)
      }
    }

    win.addEventListener('keydown', activeCombinationKeysState, true)
    win.addEventListener('keypress', activeCombinationKeysState, true)
    win.addEventListener('keyup', inactivateCombinationKeysState, true)
    win.addEventListener('blur', inactivateCombinationKeysState, true)

    hasInit.set(win, true)
  }

  function getCombinationKeys () {
    const result = new Map()
    combinationKeysState.forEach((val, key) => {
      if (val === true) {
        result.set(key, val)
      }
    })
    return result
  }

  return {
    combinationKeysState,
    getCombinationKeys,
    init
  }
})()

class HotkeysRunner {
  constructor (hotkeys, win = window) {
    this.window = win
    this.windowList = [win]
    /* Mac和window使用的修饰符是不一样的 */
    this.MOD = typeof navigator === 'object' && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'Meta' : 'Ctrl'
    // 'Control', 'Shift', 'Alt', 'Meta'

    this.prevPress = null
    this._prevTimer_ = null

    this.setHotkeys(hotkeys)
    combinationKeysMonitor.init(win)
  }

  /* 设置其它window对象的组合键监控逻辑 */
  setCombinationKeysMonitor (win) {
    this.window = win

    if (!this.windowList.includes(win)) {
      this.windowList.push(win)
    }

    combinationKeysMonitor.init(win)
  }

  /* 数据预处理 */
  hotkeysPreprocess (hotkeys) {
    if (!Array.isArray(hotkeys)) {
      return false
    }

    hotkeys.forEach((config) => {
      if (!isObj(config) || !config.key || typeof config.key !== 'string') {
        return false
      }

      const keyName = config.key.trim().toLowerCase()
      const mod = this.MOD.toLowerCase()

      /* 增加格式化后的hotkeys数组 */
      config.keyBindings = keyName.split(' ').map(press => {
        const keys = press.split(/\b\+/)
        const mods = []
        let key = ''

        keys.forEach((k) => {
          k = k === '$mod' ? mod : k

          if (isModifierKey(k)) {
            mods.push(k)
          } else {
            key = k
          }
        })

        return [mods, key]
      })
    })

    return hotkeys
  }

  setHotkeys (hotkeys) {
    this.hotkeys = this.hotkeysPreprocess(hotkeys) || []
  }

  /**
   * 判断当前提供的键盘事件和预期的热键配置是否匹配
   * @param {KeyboardEvent} event
   * @param {Array} press 例如：[['alt', 'shift'], 's']
   * @param {Object} prevCombinationKeys
   * @returns
   */
  isMatch (event, press) {
    if (!event || !Array.isArray(press)) { return false }

    const combinationKeys = event.combinationKeys || combinationKeysMonitor.getCombinationKeys()
    const mods = press[0]
    const key = press[1]

    /* 修饰符个数不匹配 */
    if (mods.length !== combinationKeys.size) {
      return false
    }

    /* 当前按下的键位和预期的键位不匹配 */
    if (key && event.key.toLowerCase() !== key && event.code.toLowerCase() !== key) {
      return false
    }

    /* 当前按下的修饰符和预期的修饰符不匹配 */
    let result = true
    const modsKey = new Map()
    combinationKeys.forEach((val, key) => {
      /* 补充各种可能情况的标识 */
      modsKey.set(key, val)
      modsKey.set(key.toLowerCase(), val)
      keyAlias[key] && modsKey.set(keyAlias[key], val)
    })

    mods.forEach((key) => {
      if (!modsKey.has(key)) {
        result = false
      }
    })

    return result
  }

  isMatchPrevPress (press) { return this.isMatch(this.prevPress, press) }

  run (opts = {}) {
    // 这里只对单个window有效
    // const KeyboardEvent = this.window.KeyboardEvent
    // if (!(opts.event instanceof KeyboardEvent)) { return false }

    const KeyboardEventList = this.windowList.map(win => win.KeyboardEvent)
    if (!KeyboardEventList.includes(opts.event.constructor)) {
      return false
    }

    const event = opts.event
    const target = opts.target || null
    const conditionHandler = opts.conditionHandler || opts.whenHandler

    const selection = window.getSelection();
    const isTextSelected = selection && selection.toString().trim() !== '';

    if (isTextSelected) {
      return;
    }

    let matchResult = null

    this.hotkeys.forEach(hotkeyConf => {
      if (hotkeyConf.disabled || !hotkeyConf.keyBindings) {
        return false
      }

      let press = hotkeyConf.keyBindings[0]

      /* 当存在prevPress，则不再响应与prevPress不匹配的其它快捷键 */
      if (this.prevPress && (hotkeyConf.keyBindings.length <= 1 || !this.isMatchPrevPress(press))) {
        return false
      }

      /* 如果存在上一轮的操作快捷键记录，且之前的快捷键与第一个keyBindings定义的快捷键匹配，则去匹配第二个keyBindings */
      if (this.prevPress && hotkeyConf.keyBindings.length > 1 && this.isMatchPrevPress(press)) {
        press = hotkeyConf.keyBindings[1]
      }

      const isMatch = this.isMatch(event, press)
      if (!isMatch) { return false }

      matchResult = hotkeyConf

      /* 是否阻止事件冒泡和阻止默认事件 */
      const stopPropagation = opts.stopPropagation || hotkeyConf.stopPropagation
      const preventDefault = opts.preventDefault || hotkeyConf.preventDefault
      stopPropagation && event.stopPropagation()
      preventDefault && event.preventDefault()

      /* 记录上一次操作的快捷键，且一段时间后清空该操作的记录 */
      if (press === hotkeyConf.keyBindings[0] && hotkeyConf.keyBindings.length > 1) {
        /* 将prevPress变成一个具有event相关字段的对象 */
        this.prevPress = {
          combinationKeys: combinationKeysMonitor.getCombinationKeys(),
          code: event.code,
          key: event.key,
          keyCode: event.keyCode,
          altKey: event.altKey,
          shiftKey: event.shiftKey,
          ctrlKey: event.ctrlKey,
          metaKey: event.metaKey
        }

        clearTimeout(this._prevTimer_)
        this._prevTimer_ = setTimeout(() => { this.prevPress = null }, 1000)

        return true
      }

      /* 如果当前匹配到了第二个快捷键，则当forEach循环结束后，马上注销prevPress，给其它快捷键让行 */
      if (hotkeyConf.keyBindings.length > 1 && press !== hotkeyConf.keyBindings[0]) {
        setTimeout(() => { this.prevPress = null }, 0)
      }

      /* 执行hotkeyConf.command对应的函数或命令 */
      const args = toArrArgs(hotkeyConf.args)
      let commandFunc = hotkeyConf.command
      if (target && typeof hotkeyConf.command === 'string') {
        commandFunc = getValByPath(target, hotkeyConf.command)
      }

      if (!(commandFunc instanceof Function) && target) {
        throw new Error(`[hotkeysRunner] 未找到command: ${hotkeyConf.command} 对应的函数`)
      }

      if (hotkeyConf.when && conditionHandler instanceof Function) {
        const isMatchCondition = conditionHandler.apply(target, toArrArgs(hotkeyConf.when))
        if (isMatchCondition === true) {
          commandFunc.apply(target, args)
        }
      } else {
        commandFunc.apply(target, args)
      }
    })

    return matchResult
  }

  binding (opts = {}) {
    if (!isObj(opts) || !Array.isArray(opts.hotkeys)) {
      throw new Error('[hotkeysRunner] 提供给binding的参数不正确')
    }

    opts.el = opts.el || this.window
    opts.type = opts.type || 'keydown'
    opts.debug && (this.debug = true)

    this.setHotkeys(opts.hotkeys)

    if (typeof opts.el === 'string') {
      opts.el = document.querySelector(opts.el)
    }

    opts.el.addEventListener(opts.type, (event) => {
      opts.event = event
      this.run(opts)
    }, true)
  }
}

// function test () {
//   const hotkeys = [
//     {
//       key: 'Q',
//       command: 'resetFilterAndTransform'
//     },
//     {
//       key: 'shift+d',
//       command: 'resetFilterAndTransform'
//     },
//     {
//       key: 'S S',
//       command: 'setRotate'
//     },
//     {
//       key: 'alt+n shift+a',
//       command: 'setNextVideo'
//     },
//     {
//       key: 'ctrl ctrl',
//       command: 'runScript',
//       args: 'alert("test")',
//       when: ''
//     },
//     {
//       key: 'shift+g shift+a',
//       command: 'emitClick',
//       args: '#test a.emit-click-test',
//       when: ''
//     }
//   ]

//   const testObj = {}
//   hotkeys.forEach(hotkeyConf => {
//     if (typeof hotkeyConf.command === 'string') {
//       testObj[hotkeyConf.command] = function (event) {
//         console.log(hotkeyConf, arguments)
//       }
//     }
//   })

//   const hotkeysRunner = new HotkeysRunner()
//   hotkeysRunner.binding({
//     el: window,
//     // type: 'keydown',
//     type: 'keyup',
//     hotkeys: hotkeys,
//     target: testObj,
//     stopPropagation: true,
//     preventDefault: true,
//     debug: true,
//     // 自定义条件限定回调逻辑
//     conditionHandler (condition) {
//       if (condition) {
//         return true
//       }
//     }
//   })
//   console.log(hotkeysRunner.hotkeys)
// }
// test()

export default HotkeysRunner
