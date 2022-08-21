import h5PlayerInit from './h5player'

function init (retryCount = 0) {
  if (!window.document.documentElement) {
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

init(0)
