/* 当前用到的快捷键 */
const hasUseKey = {
  keyCodeList: [13, 16, 17, 18, 27, 32, 37, 38, 39, 40, 49, 50, 51, 52, 67, 68, 69, 70, 73, 74, 75, 78, 79, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 97, 98, 99, 100, 220],
  keyList: ['enter', 'shift', 'control', 'alt', 'escape', ' ', 'arrowleft', 'arrowright', 'arrowup', 'arrowdown', '1', '2', '3', '4', 'c', 'd', 'e', 'f', 'i', 'j', 'k', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', '\\', '|'],
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

/**
 * 由于tampermonkey对window对象进行了封装，我们实际访问到的window并非页面真实的window
 * 这就导致了如果我们需要将某些对象挂载到页面的window进行调试的时候就无法挂载了
 * 所以必须使用特殊手段才能访问到页面真实的window对象，于是就有了下面这个函数
 * @returns {Promise<void>}
 */
async function getPageWindow () {
  return new Promise(function (resolve, reject) {
    if (window._pageWindow) {
      return resolve(window._pageWindow)
    }

    const listenEventList = ['load', 'mousemove', 'scroll', 'get-page-window-event']

    function getWin (event) {
      window._pageWindow = this
      // debug.log('getPageWindow succeed', event)
      listenEventList.forEach(eventType => {
        window.removeEventListener(eventType, getWin, true)
      })
      resolve(window._pageWindow)
    }

    listenEventList.forEach(eventType => {
      window.addEventListener(eventType, getWin, true)
    })

    /* 自行派发事件以便用最短的时候获得pageWindow对象 */
    window.dispatchEvent(new window.Event('get-page-window-event'))
  })
}
getPageWindow()

/**
 * 通过同步的方式获取pageWindow
 * 注意同步获取的方式需要将脚本写入head，部分网站由于安全策略会导致写入失败，而无法正常获取
 * @returns {*}
 */
function getPageWindowSync () {
  if (document._win_) return document._win_

  try {
    // eslint-disable-next-line no-new-func
    return Function('return window')()
  } catch (e) {
    console.error('getPageWindowSync error', e)

    const head = document.head || document.querySelector('head')
    const script = document.createElement('script')
    script.appendChild(document.createTextNode('document._win_ = window'))
    head.appendChild(script)

    return document._win_
  }
}

export {
  hasUseKey,
  isRegisterKey,
  getPageWindow,
  getPageWindowSync
}
