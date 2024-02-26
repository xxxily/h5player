import original from '../libs/utils/original'
import mediaSource from './mediaSource'
import i18n from './i18n'

const downloadState = new Map()

function download (url, title) {
  const downloadEl = document.createElement('a')
  downloadEl.href = url
  downloadEl.target = '_blank'
  downloadEl.download = title
  downloadEl.click()
}

function mediaDownload (mediaEl, title, downloadType) {
  /**
   * 当媒体包含source标签时，媒体标签的真实地址将会是currentSrc
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentSrc
   */
  const mediaUrl = mediaEl.src || mediaEl.currentSrc
  const mediaState = downloadState.get(mediaUrl) || {}

  if (mediaEl && mediaUrl && !mediaUrl.startsWith('blob:')) {
    const mediaInfo = {
      type: mediaEl instanceof HTMLVideoElement ? 'video' : 'audio',
      format: mediaEl instanceof HTMLVideoElement ? 'mp4' : 'mp3'
    }
    let mediaTitle = `${title || mediaEl.getAttribute('data-title') || document.title || Date.now()}_${mediaInfo.type}.${mediaInfo.format}`

    /* 小于5分钟的媒体文件，尝试通过fetch下载 */
    if (downloadType === 'blob' || mediaEl.duration < 60 * 5) {
      if (mediaState.downloading) {
        /* 距上次点下载小于1s的情况直接不响应任何操作 */
        if (Date.now() - mediaState.downloading < 1000 * 1) {
          return false
        } else {
          const confirm = original.confirm(i18n.t('mediaDownload.downloading'))
          if (!confirm) {
            return false
          }
        }
      }

      if (mediaState.hasDownload) {
        const confirm = original.confirm(i18n.t('mediaDownload.hasDownload'))
        if (!confirm) {
          return false
        }
      }

      mediaTitle = original.prompt(i18n.t('mediaDownload.confirmTitle'), mediaTitle)
      if (!mediaTitle) { return false }

      if (!mediaTitle.endsWith(mediaInfo.format)) {
        mediaTitle = mediaTitle + '.' + mediaInfo.format
      }

      let fetchUrl = mediaUrl
      if (mediaUrl.startsWith('http://') && location.href.startsWith('https://')) {
        /* 在https里fetch http资源会导致 block:mixed-content 错误，所以尝试将地址统一成https开头 */
        fetchUrl = mediaUrl.replace('http://', 'https://')
      }

      mediaState.downloading = Date.now()
      downloadState.set(mediaUrl, mediaState)
      fetch(fetchUrl).then(res => {
        res.blob().then(blob => {
          const blobUrl = window.URL.createObjectURL(blob)
          download(blobUrl, mediaTitle)

          mediaState.hasDownload = true
          delete mediaState.downloading
          downloadState.set(mediaUrl, mediaState)
          window.URL.revokeObjectURL(blobUrl)
        })
      }).catch(err => {
        original.console.error('fetch下载操作失败:', err)

        /* 下载兜底 */
        download(mediaUrl, mediaTitle)

        delete mediaState.downloading
        mediaState.hasDownload = true
        downloadState.set(mediaUrl, mediaState)
      })
    } else {
      download(mediaUrl, mediaTitle)
    }
  } else if (mediaSource.hasInit()) {
    /* 下载通过MediaSource管理的媒体文件 */
    mediaSource.downloadMediaSource(mediaEl, title)
  } else {
    original.alert(i18n.t('mediaDownload.notSupport'))
  }
}

export default mediaDownload
