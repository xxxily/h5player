import {
  mediaSource
} from '../libs/utils/index'

function mediaDownload (mediaEl) {
  if (mediaEl && mediaEl.src && !mediaEl.src.startsWith('blob:')) {
    const mediaInfo = {
      type: mediaEl instanceof HTMLVideoElement ? 'video' : 'audio',
      format: mediaEl instanceof HTMLVideoElement ? 'mp4' : 'mp3'
    }
    const mediaTitle = `${document.title || Date.now()}_${mediaInfo.type}.${mediaInfo.format}`
    const downloadEl = document.createElement('a')

    downloadEl.href = mediaEl.src
    downloadEl.target = '_blank'
    downloadEl.download = mediaTitle
    downloadEl.click()
  } else if (mediaSource.hasInit()) {
    /* 下载通过MediaSource管理的媒体文件 */
    mediaSource.downloadMediaSource()
  } else {
    // 无法下载媒体文件
  }
}

export default mediaDownload
