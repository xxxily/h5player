import original from '../libs/utils/original'
import { isOutOfDocument } from '../libs/utils/dom'
import i18n from './i18n'

const mediaSource = (function () {
  let hasMediaSourceInit = false
  const originMethods = {}
  const originURLMethods = {}
  const mediaSourceMap = new original.Map()
  const objectURLMap = new original.Map()

  function connectMediaSourceWithMediaElement (mediaEl) {
    const curSrc = mediaEl.currentSrc || mediaEl.src

    if (!curSrc) { return false }

    mediaSourceMap.forEach(mediaSourceInfo => {
      if (mediaSourceInfo.mediaSource.__objURL__ && curSrc === mediaSourceInfo.mediaSource.__objURL__) {
        mediaSourceInfo.mediaElement = mediaEl
      }
    })
  }

  /* 如果mediaSourceMap中关联的mediaEl检测到不存在了，则清理mediaSourceMap中的数据，减少内存占用 */
  function cleanMediaSourceData () {
    function removeMediaSourceData (mediaSourceInfo) {
      console.log('[cleanMediaSourceData][removeMediaSourceData]', mediaSourceInfo.mediaUrl || mediaSourceInfo.mediaSource.__objURL__)
      original.map.delete.call(mediaSourceMap, mediaSourceInfo.mediaSource)
      original.map.delete.call(objectURLMap, mediaSourceInfo.mediaSource)
    }

    mediaSourceMap.forEach((mediaSourceInfo) => {
      if (!mediaSourceInfo.mediaElement || !(mediaSourceInfo.mediaElement instanceof HTMLMediaElement)) {
        removeMediaSourceData(mediaSourceInfo)
      } else {
        if (isOutOfDocument(mediaSourceInfo.mediaElement)) {
          removeMediaSourceData(mediaSourceInfo)
        }
      }
    })
  }

  function proxyMediaSourceMethod () {
    if (!originMethods.addSourceBuffer || !originMethods.endOfStream) {
      return false
    }

    // TODO 该代理在上层调用生效可能存在延迟，原因待研究
    originURLMethods.createObjectURL = originURLMethods.createObjectURL || URL.prototype.constructor.createObjectURL
    URL.prototype.constructor.createObjectURL = new original.Proxy(originURLMethods.createObjectURL, {
      apply (target, ctx, args) {
        const object = args[0]
        const objectURL = target.apply(ctx, args)

        if (object instanceof MediaSource && !original.map.has.call(objectURLMap, object)) {
          object.__objURL__ = objectURL
          original.map.set.call(objectURLMap, object, objectURL)
        }

        return objectURL
      }
    })

    MediaSource.prototype.addSourceBuffer = new original.Proxy(originMethods.addSourceBuffer, {
      apply (target, ctx, args) {
        if (!original.map.has.call(mediaSourceMap, ctx)) {
          original.map.set.call(mediaSourceMap, ctx, {
            mediaSource: ctx,
            createTime: Date.now(),
            sourceBuffer: [],
            endOfStream: false
          })
        }

        const mediaSourceInfo = original.map.get.call(mediaSourceMap, ctx)
        const mimeCodecs = args[0] || ''
        const sourceBuffer = target.apply(ctx, args)

        const sourceBufferItem = {
          mimeCodecs,
          originAppendBuffer: sourceBuffer.appendBuffer,
          bufferData: [],
          mediaInfo: {}
        }

        try {
          // mimeCodecs字符串示例：'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          const mediaInfo = sourceBufferItem.mediaInfo
          const tmpArr = sourceBufferItem.mimeCodecs.split(';')

          mediaInfo.type = tmpArr[0].split('/')[0]
          mediaInfo.format = tmpArr[0].split('/')[1]
          mediaInfo.codecs = tmpArr[1].trim().replace('codecs=', '').replace(/["']/g, '')
        } catch (e) {
          original.console.error('[addSourceBuffer][mediaInfo] 媒体信息解析出错', sourceBufferItem, e)
        }

        mediaSourceInfo.sourceBuffer.push(sourceBufferItem)

        /* 代理sourceBuffer.appendBuffer函数，并将buffer存一份到mediaSourceInfo里 */
        sourceBuffer.appendBuffer = new original.Proxy(sourceBufferItem.originAppendBuffer, {
          apply (bufTarget, bufCtx, bufArgs) {
            const buffer = bufArgs[0]

            if (!mediaSourceInfo.endOfStream) {
              sourceBufferItem.bufferData.push(buffer)
            }

            /* 确保mediaUrl的存在和对应 */
            if (original.map.get.call(objectURLMap, ctx)) {
              mediaSourceInfo.mediaUrl = original.map.get.call(objectURLMap, ctx)
            }

            /* 如果appendBuffer依然活跃，但对应的mediaSource却被清理了，则尝试重新将数据关联回去 */
            if (!original.map.get.call(mediaSourceMap, ctx)) {
              original.map.set.call(mediaSourceMap, ctx, mediaSourceInfo)
            }

            return bufTarget.apply(bufCtx, bufArgs)
          }
        })

        return sourceBuffer
      }
    })

    MediaSource.prototype.endOfStream = new original.Proxy(originMethods.endOfStream, {
      apply (target, ctx, args) {
        /* 标识当前媒体流已加载完成 */
        const mediaSourceInfo = original.map.get.call(mediaSourceMap, ctx)
        if (mediaSourceInfo) {
          mediaSourceInfo.endOfStream = true

          if (mediaSourceInfo.mediaElement && mediaSourceInfo.autoDownload && !mediaSourceInfo.hasDownload) {
            downloadMediaSource(mediaSourceInfo.mediaElement)
          }
        }

        return target.apply(ctx, args)
      }
    })
  }

  /**
   * 下载媒体资源，下载代码参考：https://juejin.cn/post/6873267073674379277
   */
  function downloadMediaSource (mediaEl, title) {
    // const srcList = mediaEl.srcList || []
    const curSrc = mediaEl.currentSrc || mediaEl.src

    if (!curSrc) {
      original.alert(i18n.t('mediaDownload.notSupport'))
      return false
    }

    let hasFindMediaSource = false
    mediaSourceMap.forEach(mediaSourceInfo => {
      const mediaSource = mediaSourceInfo.mediaSource
      if (!mediaSource.__objURL__) {
        console.error('no objURL', mediaSource, mediaSourceInfo)
        return false
      }

      /* 排除非当前媒体元素的媒体流 */
      // if (srcList.length > 0 && !srcList.includes(mediaSource.__objURL__)) {
      //   return false
      // }
      if (curSrc !== mediaSource.__objURL__) {
        return false
      }

      hasFindMediaSource = true
      mediaSourceInfo.mediaElement = mediaEl

      // original.console.log('[downloadMediaSource][mediaSourceInfo]', mediaSourceInfo)

      if (mediaSourceInfo.hasDownload) {
        const confirm = original.confirm(i18n.t('mediaDownload.hasDownload'))
        if (!confirm) {
          return false
        }
      }

      if (!mediaSourceInfo.hasDownload && !mediaSourceInfo.endOfStream) {
        // original.console.log('[downloadMediaSource] 媒体数据还没完全就绪', mediaSourceInfo)

        const confirm = original.confirm(i18n.t('mediaDownload.notEndOfStream'))
        if (!confirm) {
          if (mediaSourceInfo.autoDownload) {
            const cancelAutoDownload = original.confirm(i18n.t('mediaDownload.cancelAutoDownload'))
            if (cancelAutoDownload) {
              mediaSourceInfo.autoDownload = false
            }
          } else {
            const autoDownload = original.confirm(i18n.t('mediaDownload.autoDownload'))
            if (autoDownload) {
              mediaSourceInfo.autoDownload = true
            }
          }

          return false
        }
      }

      let mediaSourceTitle = null
      mediaSourceInfo.sourceBuffer.forEach(sourceBufferItem => {
        if (!sourceBufferItem.mimeCodecs || sourceBufferItem.mimeCodecs.toString().indexOf(';') === -1) {
          const msg = '[downloadMediaSource][mimeCodecs][error] mimeCodecs不存在或信息异常，无法下载'
          original.console.error(msg, sourceBufferItem)
          original.alert(msg)
          return false
        }

        try {
          let mediaTitle = `${mediaSourceTitle || sourceBufferItem.mediaInfo.title || title || mediaEl.getAttribute('data-title') || document.title || Date.now()}`

          if (!mediaSourceTitle && !sourceBufferItem.mediaInfo.title) {
            mediaTitle = original.prompt(i18n.t('mediaDownload.confirmTitle'), mediaTitle)

            if (!mediaTitle) { return false }

            sourceBufferItem.mediaInfo.title = mediaTitle
          }

          mediaSourceTitle = mediaTitle

          /* 自动补充媒体类型和文件后缀 */
          mediaTitle = `${mediaTitle}_${sourceBufferItem.mediaInfo.type}.${sourceBufferItem.mediaInfo.format}`

          const a = document.createElement('a')
          a.href = URL.createObjectURL(new Blob(sourceBufferItem.bufferData))
          a.download = mediaTitle
          a.click()
          URL.revokeObjectURL(a.href)

          mediaSourceInfo.hasDownload = true
        } catch (e) {
          mediaSourceInfo.hasDownload = false
          const msg = '[downloadMediaSource][error]'
          original.console.error(msg, e)
          original.alert(msg)
        }
      })
    })

    if (!hasFindMediaSource) {
      original.alert(i18n.t('mediaDownload.notFoundMediaSource'))
    }
  }

  function hasInit () {
    return hasMediaSourceInit
  }

  function init () {
    if (hasMediaSourceInit) {
      return false
    }

    if (!window.MediaSource) {
      return false
    }

    Object.keys(MediaSource.prototype).forEach(key => {
      try {
        if (MediaSource.prototype[key] instanceof Function) {
          originMethods[key] = MediaSource.prototype[key]
        }
      } catch (e) {}
    })

    proxyMediaSourceMethod()

    hasMediaSourceInit = true
  }

  return {
    init,
    hasInit,
    originMethods,
    originURLMethods,
    mediaSourceMap,
    objectURLMap,
    downloadMediaSource,
    cleanMediaSourceData,
    connectMediaSourceWithMediaElement
  }
})()

export default mediaSource
