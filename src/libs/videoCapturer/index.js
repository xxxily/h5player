/*!
 * @name      videoCapturer.js
 * @version   0.0.1
 * @author    Blaze
 * @date      2019/9/21 12:03
 * @github    https://github.com/xxxily
 */

var videoCapturer = {
  /**
   * 进行截图操作
   * @param video {Dmon} -必选 video dom 标签
   * @returns {boolean}
   */
  capture (video, download, title) {
    if (!video) return false
    const t = this
    const currentTime = `${Math.floor(video.currentTime / 60)}'${(video.currentTime % 60).toFixed(3)}''`
    const captureTitle = title || `${document.title}_${currentTime}`

    /* 截图核心逻辑 */
    video.setAttribute('crossorigin', 'anonymous')
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const context = canvas.getContext('2d')
    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    if (download) {
      t.download(canvas, captureTitle)
    } else {
      t.previe(canvas, captureTitle)
    }

    return canvas
  },
  /**
   * 预览截取到的画面内容
   * @param canvas
   */
  previe (canvas, title) {
    canvas.style = 'max-width:100%'
    const previewPage = window.open('', '_blank')
    previewPage.document.title = `capture previe - ${title || 'Untitled'}`
    previewPage.document.body.style.textAlign = 'center'
    previewPage.document.body.style.background = '#000'
    previewPage.document.body.appendChild(canvas)
  },
  /**
   * canvas 下载截取到的内容
   * @param canvas
   */
  download (canvas, title) {
    title = title || 'videoCapturer_' + Date.now()
    try {
      canvas.toBlob(function (blob) {
        const el = document.createElement('a')
        el.download = `${title}.jpg`
        el.href = URL.createObjectURL(blob)
        el.click()
      }, 'image/jpeg', 0.99)
    } catch (e) {
      window.alert('视频源受CORS标识限制，无法下载截图')
      console.error(e)
    }
  }
}

export default videoCapturer
