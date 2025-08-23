// 检测环境
const isExtension = (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id) ||
                    (typeof browser !== 'undefined' && browser.runtime)

// 创建一个兼容层，模拟 GM_* 函数
function initGMFunctions () {
  // 为扩展环境创建GM函数的兼容实现
  window.GM_setValue = function (key, value) {
    window.postMessage({
      type: 'h5player_setValue',
      data: { key, value }
    }, '*')
    // 同时在localStorage中存储一份，以便立即访问
    try {
      localStorage.setItem(`h5player_${key}`, JSON.stringify(value))
    } catch (e) {
      console.error('存储到localStorage失败:', e)
    }
  }

  window.GM_getValue = function (key, defaultValue) {
    // 先从localStorage获取，以便同步返回
    try {
      const value = localStorage.getItem(`h5player_${key}`)
      if (value !== null) {
        return JSON.parse(value)
      }
    } catch (e) {
      console.error('从localStorage获取失败:', e)
    }

    // 异步从storage获取
    const callbackId = Date.now()
    window.postMessage({
      type: 'h5player_getValue',
      data: { key, callbackId }
    }, '*')

    return defaultValue
  }

  window.GM_deleteValue = function (key) {
    window.postMessage({
      type: 'h5player_deleteValue',
      data: { key }
    }, '*')
    // 同时从localStorage中删除
    try {
      localStorage.removeItem(`h5player_${key}`)
    } catch (e) {
      console.error('从localStorage删除失败:', e)
    }
  }

  window.GM_listValues = function () {
    // 从localStorage获取所有键
    const keys = []
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key.startsWith('h5player_')) {
          keys.push(key.substring(9))
        }
      }
    } catch (e) {
      console.error('从localStorage获取键列表失败:', e)
    }
    return keys
  }

  window.GM_addValueChangeListener = function (name, callback) {
    // 简化实现，实际上无法完全模拟
    const listenerId = Date.now()
    return listenerId
  }

  window.GM_removeValueChangeListener = function (listenerId) {
    // 简化实现
  }

  window.GM_setClipboard = function (text) {
    window.postMessage({
      type: 'h5player_setClipboard',
      data: { text }
    }, '*')
  }

  window.GM_addStyle = function (css) {
    const style = document.createElement('style')
    style.textContent = css
    document.head.appendChild(style)
    return style
  }

  // 存储菜单项
  const menuItems = []
  let menuIdCounter = 1

  window.GM_registerMenuCommand = function (name, callback) {
    const menuId = menuIdCounter++

    // 存储菜单项
    menuItems.push({
      id: menuId,
      title: name,
      fn: callback
    })

    // 通知扩展更新面板
    window.postMessage({
      type: 'h5player_updatePanel',
      data: { items: menuItems }
    }, '*')

    return menuId
  }

  window.GM_unregisterMenuCommand = function (menuCmdId) {
    // 查找并移除菜单项
    const index = menuItems.findIndex(item => item.id === menuCmdId)
    if (index !== -1) {
      menuItems.splice(index, 1)

      // 通知扩展更新面板
      window.postMessage({
        type: 'h5player_updatePanel',
        data: { items: menuItems }
      }, '*')
    }
  }

  // 监听来自content.js的菜单执行消息
  window.addEventListener('message', function (event) {
    if (event.source !== window) return
    if (!event.data || !event.data.type) return

    const { type, data } = event.data

    if (type === 'h5player_executeMenuItem') {
    // 执行菜单功能
      const index = data.index
      if (menuItems[index] && typeof menuItems[index].fn === 'function') {
        try {
          menuItems[index].fn()
        } catch (e) {
          console.error('执行菜单功能失败:', e)
        }
      }
    }
  })

  window.GM_openInTab = function (url, options) {
    window.open(url, '_blank')
  }

  window.GM_getTab = function (callback) {
    callback({})
  }

  window.GM_saveTab = function (tab) {
    // 简化实现
  }

  window.GM_getTabs = function (callback) {
    callback({})
  }

  // 设置unsafeWindow为window
  window.unsafeWindow = window
}

if (isExtension) { initGMFunctions() }

// 在这里引入原始的h5player代码
// 这里应该是原始脚本的代码，但为了简化，我们使用import语句
// 实际上，你需要将原始脚本的代码复制到这里
// 或者使用构建工具将它们合并成一个文件
