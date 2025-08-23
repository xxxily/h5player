// 检测浏览器环境
const browserAPI = typeof browser !== 'undefined' ? browser : chrome

// 多种注入方式尝试
function injectScript () {
  // 尝试方法1: 使用script标签src方式
  try {
    const script = document.createElement('script')
    script.src = browserAPI.runtime.getURL('inject.js')
    script.onload = function () {
      this.remove()
      window.postMessage({ type: 'h5player_injected', success: true }, '*')
    }
    script.onerror = function (error) {
      console.error('注入脚本加载失败:', error)
      // 失败后尝试内联方式
      injectInlineScript()
    };
    (document.head || document.documentElement).appendChild(script)
  } catch (error) {
    console.error('注入脚本过程出错:', error)
    injectInlineScript()
  }
}

// 备用方案：内联方式注入脚本
function injectInlineScript () {
  try {
    // 获取inject.js的内容并直接内联注入
    browserAPI.runtime.sendMessage({ type: 'getInjectScript' }, function (response) {
      if (response && response.code) {
        try {
          // 方法2: 使用内联script标签
          const script = document.createElement('script')
          script.textContent = response.code
          document.head.appendChild(script)
          script.remove()
        } catch (e) {
          console.error('内联script注入失败:', e)
          // 方法3: 使用data URI
          try {
            const dataUri = 'data:text/javascript;base64,' + btoa(response.code)
            const scriptDataUri = document.createElement('script')
            scriptDataUri.src = dataUri
            document.head.appendChild(scriptDataUri)
          } catch (e2) {
            console.error('data URI注入失败:', e2)
            // 方法4: 使用Function构造函数
            try {
              const funcScript = new Function(response.code)
              funcScript()
            } catch (e3) {
              console.error('Function构造函数注入失败:', e3)
            }
          }
        }
      }
    })
  } catch (error) {
    console.error('内联注入失败:', error)
  }
}

// 在文档开始时注入脚本
injectScript()

// 监听页面变化，处理单页应用
// const observer = new MutationObserver(function (mutations) {
//   // 检测重要DOM变化，可能需要重新注入
//   // 这里需要根据具体应用场景定制检测逻辑
// })

// 创建一个桥接对象，用于处理GM_*函数的调用
window.addEventListener('message', function (event) {
  // 只接受来自当前窗口的消息
  if (event.source !== window) return
  if (!event.data || !event.data.type || !event.data.type.startsWith('h5player_')) return

  const { type, data } = event.data

  switch (type) {
    case 'h5player_setValue':
      browserAPI.storage.local.set({ [data.key]: data.value })
      break
    case 'h5player_getValue':
      browserAPI.storage.local.get(data.key).then((result) => {
        window.postMessage({
          type: 'h5player_getValueResponse',
          data: {
            key: data.key,
            value: result[data.key],
            callbackId: data.callbackId
          }
        }, '*')
      }).catch(error => {
        console.error('获取存储值失败:', error)
      })
      break
    case 'h5player_deleteValue':
      browserAPI.storage.local.remove(data.key)
      break
    case 'h5player_listValues':
      browserAPI.storage.local.get(null).then((result) => {
        window.postMessage({
          type: 'h5player_listValuesResponse',
          data: {
            keys: Object.keys(result),
            callbackId: data.callbackId
          }
        }, '*')
      }).catch(error => {
        console.error('获取存储键列表失败:', error)
      })
      break
    case 'h5player_setClipboard':
      navigator.clipboard.writeText(data.text).catch(err => {
        console.error('无法写入剪贴板:', err)
      })
      break
    case 'h5player_updatePanel':
      // 存储菜单项，以便popup请求时使用
      browserAPI.storage.local.set({ h5player_menuItems: data.items })
      break
  }
})

// 处理来自popup的消息
browserAPI.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'h5player_getMenuItems') {
    // 从存储中获取菜单项并返回给popup
    browserAPI.storage.local.get('h5player_menuItems').then((result) => {
      sendResponse({ items: result.h5player_menuItems || [] })
    }).catch(error => {
      console.error('获取菜单项失败:', error)
      sendResponse({ items: [] })
    })
    return true // 保持消息通道开放，以便异步响应
  }

  if (message.type === 'h5player_triggerMenuItem') {
    // 触发对应的菜单功能
    window.postMessage({
      type: 'h5player_executeMenuItem',
      data: { index: message.data.index }
    }, '*')
    sendResponse({ success: true })
    return true
  }

  return true // 保持消息通道开放
})
