import h5PlayerInit from './h5player'

function init (retryCount = 0) {
  if (!window.document || !window.document.documentElement) {
    setTimeout(() => {
      if (retryCount < 200) {
        init(retryCount + 1)
      } else {
        console.error('[h5player message:]', 'not documentElement detected!', window)
      }
    }, 10)

    return false
  } else if (retryCount > 0) {
    console.warn('[h5player message:]', 'documentElement detected!', retryCount, window)
  }

  h5PlayerInit()
}

/**
 * 某些极端情况下，直接访问window对象都会导致报错，所以整个init都try起来
 * 例如：www.icourse163.org 就有一定的机率异常
 */
let initTryCount = 0
try {
  init(0)
} catch (e) {
  setTimeout(() => {
    if (initTryCount < 200) {
      initTryCount++
      init(0)
      console.error('[h5player message:]', 'init error', initTryCount, e)
    }
  }, 10)
}
