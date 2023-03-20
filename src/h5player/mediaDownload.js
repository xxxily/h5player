import original from '../libs/utils/original'
import {
  mediaSource
} from '../libs/utils/index'

function download (url, title) {
  const downloadEl = document.createElement('a')
  downloadEl.href = url
  downloadEl.target = '_blank'
  downloadEl.download = title
  downloadEl.click()
}

function mediaDownload (mediaEl, title, downloadType) {
  if (mediaEl && (mediaEl.src || mediaEl.currentSrc) && !mediaEl.src.startsWith('blob:')) {
    const mediaInfo = {
      type: mediaEl instanceof HTMLVideoElement ? 'video' : 'audio',
      format: mediaEl instanceof HTMLVideoElement ? 'mp4' : 'mp3'
    }
    let mediaTitle = `${title || mediaEl.title || document.title || Date.now()}_${mediaInfo.type}.${mediaInfo.format}`

    /**
     * 当媒体包含source标签时，媒体标签的真实地址将会是currentSrc
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentSrc
     */
    const mediaUrl = mediaEl.src || mediaEl.currentSrc

    /* 小于5分钟的媒体文件，尝试通过fetch下载 */
    if (downloadType === 'blob' || mediaEl.duration < 60 * 5) {
      if (mediaEl.downloading) {
        /* 距上次点下载小于1s的情况直接不响应任何操作 */
        if (Date.now() - mediaEl.downloading < 1000 * 1) {
          return false
        } else {
          const confirm = original.confirm('文件正在下载中，确定重复执行此操作？')
          if (!confirm) {
            return false
          }
        }
      }

      if (mediaEl.hasDownload) {
        const confirm = original.confirm('该媒体文件已经下载过了，确定需要再次下载？')
        if (!confirm) {
          return false
        }
      }

      mediaTitle = original.prompt('请确认文件标题：', mediaTitle) || mediaTitle

      if (!mediaTitle.endsWith(mediaInfo.format)) {
        mediaTitle = mediaTitle + '.' + mediaInfo.format
      }

      let fetchUrl = mediaUrl
      if (mediaUrl.startsWith('http://') && location.href.startsWith('https://')) {
        /* 在https里fetch http资源会导致 block:mixed-content 错误，所以尝试将地址统一成https开头 */
        fetchUrl = mediaUrl.replace('http://', 'https://')
      }

      mediaEl.downloading = Date.now()
      fetch(fetchUrl).then(res => {
        res.blob().then(blob => {
          const blobUrl = window.URL.createObjectURL(blob)
          download(blobUrl, mediaTitle)

          mediaEl.hasDownload = true
          delete mediaEl.downloading
          window.URL.revokeObjectURL(blobUrl)
        })
      }).catch(err => {
        original.console.error('fetch下载操作失败:', err)

        /* 下载兜底 */
        download(mediaUrl, mediaTitle)
      })
    } else {
      download(mediaUrl, mediaTitle)
    }
  } else if (mediaSource.hasInit()) {
    /* 下载通过MediaSource管理的媒体文件 */
    mediaSource.downloadMediaSource()
  } else {
    original.alert('当前媒体文件无法下载，下载功能待优化完善')
  }
}

export default mediaDownload
