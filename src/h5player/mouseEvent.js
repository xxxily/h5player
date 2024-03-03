import {
  isCoordinateInElement
} from '../libs/utils/index'

export function registerMouseEvent (h5player) {
  const t = h5player

  const longPressTime = 600
  let mouseEventTimer = null
  let hasHandleEvent = false
  let isPaused = false
  let oldPlaybackRate = 1

  document.addEventListener('mousedown', function (event) {
    const player = t.player()

    if (!player || !(player instanceof HTMLVideoElement)) { return }

    isPaused = player.paused

    if (!isCoordinateInElement(event.clientX, event.clientY, player)) { return }

    /* 预留出底部80px的区域，避免导致工具栏的操作异常 */
    const rect = player.getBoundingClientRect()
    if (event.clientY > rect.bottom - 80) { return }

    /* 鼠标左键事件 */
    if (event.button === 0) {
      mouseEventTimer = setTimeout(() => {
        hasHandleEvent = true
        oldPlaybackRate = t.getPlaybackRate()
        t.unLockPlaybackRate()
        t.setPlaybackRate(3)
        t.lockPlaybackRate(800)

        event.preventDefault()
        event.stopPropagation()
      }, longPressTime)
    }
  }, true)

  document.addEventListener('mouseup', function (event) {
    mouseEventTimer && clearTimeout(mouseEventTimer)

    if (hasHandleEvent) {
      hasHandleEvent = false
      event.preventDefault()
      event.stopPropagation()

      if (isPaused) {
        t.mediaPlusApi.lockPlay(600)
      } else {
        t.mediaPlusApi.lockPause(600)
      }

      t.unLockPlaybackRate()
      t.setPlaybackRate(oldPlaybackRate)
      t.lockPlaybackRate(800)
    }
  }, true)
}
