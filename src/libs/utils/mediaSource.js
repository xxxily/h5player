import original from './original'

const mediaSource = (function () {
  let hasMediaSourceInit = false
  const originMethods = {}
  const originURLMethods = {}
  const mediaSourceMap = new original.Map()
  const objectURLMap = new original.Map()

  function proxyMediaSourceMethod () {
    if (!originMethods.addSourceBuffer || !originMethods.endOfStream) {
      return false
    }

    // TODO 该代理在上层调用生效可能存在延迟，原因待研究
    originURLMethods.createObjectURL = originURLMethods.createObjectURL || URL.prototype.constructor.createObjectURL
    URL.prototype.constructor.createObjectURL = new original.Proxy(originURLMethods.createObjectURL, {
      apply (target, ctx, args) {
        const objectURL = target.apply(ctx, args)

        original.map.set.call(objectURLMap, args[0], objectURL)

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

        original.console.log('[addSourceBuffer]', ctx, args)

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
            sourceBufferItem.bufferData.push(buffer)

            /* 确保mediaUrl的存在和对应 */
            if (original.map.get.call(objectURLMap, ctx)) {
              mediaSourceInfo.mediaUrl = original.map.get.call(objectURLMap, ctx)
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
        }

        return target.apply(ctx, args)
      }
    })
  }

  /**
   * 下载媒体资源，下载代码参考：https://juejin.cn/post/6873267073674379277
   */
  function downloadMediaSource () {
    mediaSourceMap.forEach(mediaSourceInfo => {
      if (mediaSourceInfo.hasDownload) {
        const confirm = original.confirm('该媒体文件已经下载过了，确定需要再次下载？')
        if (!confirm) {
          return false
        }
      }

      if (!mediaSourceInfo.hasDownload && !mediaSourceInfo.endOfStream) {
        const confirm = original.confirm('媒体数据还没完全就绪，确定要执行下载操作？')
        if (!confirm) {
          return false
        }

        original.console.log('[downloadMediaSource] 媒体数据还没完全就绪', mediaSourceInfo)
      }

      mediaSourceInfo.hasDownload = true
      mediaSourceInfo.sourceBuffer.forEach(sourceBufferItem => {
        if (!sourceBufferItem.mimeCodecs || sourceBufferItem.mimeCodecs.toString().indexOf(';') === -1) {
          const msg = '[downloadMediaSource][mimeCodecs][error] mimeCodecs不存在或信息异常，无法下载'
          original.console.error(msg, sourceBufferItem)
          original.alert(msg)
          return false
        }

        try {
          let mediaTitle = sourceBufferItem.mediaInfo.title || `${document.title || Date.now()}_${sourceBufferItem.mediaInfo.type}.${sourceBufferItem.mediaInfo.format}`

          if (!sourceBufferItem.mediaInfo.title) {
            mediaTitle = original.prompt('请确认文件标题：', mediaTitle) || mediaTitle
            sourceBufferItem.mediaInfo.title = mediaTitle
          }

          if (!mediaTitle.endsWith(sourceBufferItem.mediaInfo.format)) {
            mediaTitle = mediaTitle + '.' + sourceBufferItem.mediaInfo.format
          }

          const a = document.createElement('a')
          a.href = URL.createObjectURL(new Blob(sourceBufferItem.bufferData))
          a.download = mediaTitle
          a.click()
          URL.revokeObjectURL(a.href)
        } catch (e) {
          mediaSourceInfo.hasDownload = false
          const msg = '[downloadMediaSource][error]'
          original.console.error(msg, e)
          original.alert(msg)
        }
      })
    })
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
    downloadMediaSource
  }
})()

export default mediaSource
