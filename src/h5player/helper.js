function createDebugMethod (name) {
  name = name || 'info'

  const bgColorMap = {
    info: '#2274A5',
    log: '#95B46A',
    error: '#D33F49'
  }

  return function () {
    const arg = Array.from(arguments)
    arg.unshift(`color: white; background-color: ${bgColorMap[name] || '#95B46A'}`)
    arg.unshift('%c h5player message:')
    console[name].apply(console, arg)
  }
}

var debug = {
  log: createDebugMethod('log'),
  error: createDebugMethod('error'),
  info: createDebugMethod('info')
}

/* 当前用到的快捷键 */
const hasUseKey = {
  keyCodeList: [13, 16, 17, 18, 27, 32, 37, 38, 39, 40, 49, 50, 51, 52, 67, 68, 69, 70, 73, 74, 75, 78, 79, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 97, 98, 99, 100, 220],
  keyList: ['enter', 'shift', 'control', 'alt', 'escape', ' ', 'arrowleft', 'arrowright', 'arrowright', 'arrowup', 'arrowdown', '1', '2', '3', '4', 'c', 'd', 'e', 'f', 'i', 'j', 'k', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', '\\', '|'],
  keyMap: {
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    esc: 27,
    space: 32,
    '←': 37,
    '↑': 38,
    '→': 39,
    '↓': 40,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    i: 73,
    j: 74,
    k: 75,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    pad1: 97,
    pad2: 98,
    pad3: 99,
    pad4: 100,
    '\\': 220
  }
}

/**
 * 判断当前按键是否注册为需要用的按键
 * 用于减少对其它键位的干扰
 */
function isRegisterKey (event) {
  const keyCode = event.keyCode
  const key = event.key.toLowerCase()
  return hasUseKey.keyCodeList.includes(keyCode) ||
    hasUseKey.keyList.includes(key)
}

export {
  debug,
  hasUseKey,
  isRegisterKey
}
