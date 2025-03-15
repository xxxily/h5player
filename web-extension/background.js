// 检测浏览器环境
const browserAPI = typeof browser !== 'undefined' ? browser : chrome
const isFirefox = typeof browser !== 'undefined'

// 后台脚本，处理扩展的全局状态和消息通信
browserAPI.runtime.onInstalled.addListener(() => {
  console.log('音视频增强工具已安装')

  // 仅在Chrome中使用declarativeNetRequest
  if (!isFirefox) {
    // 使用declarativeNetRequest替代webRequestBlocking
    // 设置修改CSP的规则
    browserAPI.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1], // 先移除可能存在的规则
      addRules: [{
        id: 1,
        priority: 1,
        action: {
          type: 'modifyHeaders',
          responseHeaders: [{
            header: 'content-security-policy',
            operation: 'set',
            value: "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:"
          }]
        },
        condition: {
          urlFilter: '*',
          resourceTypes: ['main_frame', 'sub_frame']
        }
      }]
    })
  }
})

// 处理从内容脚本发来的消息
// 添加处理获取inject.js内容的消息
browserAPI.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'getInjectScript') {
    // 读取inject.js的内容
    fetch(browserAPI.runtime.getURL('inject.js'))
      .then(response => response.text())
      .then(code => {
        sendResponse({ code })
      })
      .catch(error => {
        console.error('获取inject.js内容失败:', error)
        sendResponse({ error: error.toString() })
      })
    return true // 保持消息通道开放，以便异步响应
  }
  if (message.type === 'getClipboard') {
    sendResponse({ success: true })
  }
  return true // 保持消息通道开放，以便异步响应
})

// 仅在Firefox中使用webRequestBlocking
if (isFirefox) {
  // 避免CSP限制脚本的注入
  browserAPI.webRequest.onHeadersReceived.addListener(
    function (details) {
      // 查找并修改CSP头
      const cspHeader = details.responseHeaders.find(header =>
        header.name.toLowerCase() === 'content-security-policy')

      if (cspHeader) {
        // 修改CSP头，允许我们的脚本执行
        cspHeader.value = cspHeader.value
          .replace(/script-src([^;]*);/g, 'script-src$1 \'unsafe-inline\' \'unsafe-eval\';')
          .replace(/script-src([^;]*?)$/g, 'script-src$1 \'unsafe-inline\' \'unsafe-eval\'')

        if (!cspHeader.value.includes('script-src')) {
          cspHeader.value += '; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\''
        }
      }

      return { responseHeaders: details.responseHeaders }
    },
    { urls: ['<all_urls>'] },
    ['blocking', 'responseHeaders']
  )
}
