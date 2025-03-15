// 检测浏览器环境
const browserAPI = typeof browser !== 'undefined' ? browser : chrome

// 获取当前活动标签页
async function getCurrentTab () {
  const tabs = await browserAPI.tabs.query({ active: true, currentWindow: true })
  return tabs[0]
}

// 渲染菜单项
function renderMenuItems (items) {
  const container = document.getElementById('menuContainer')
  container.innerHTML = ''

  if (!items || items.length === 0) {
    container.innerHTML = '<div class="empty-message">当前页面没有可用菜单</div>'
    return
  }

  items.forEach((item, index) => {
    const menuItem = document.createElement('div')
    menuItem.className = 'menu-item'

    const textSpan = document.createElement('span')
    textSpan.className = 'menu-item-text'
    textSpan.textContent = item.title

    menuItem.appendChild(textSpan)

    if (item.accessKey) {
      const keySpan = document.createElement('span')
      keySpan.className = 'menu-item-key'
      keySpan.textContent = item.accessKey
      menuItem.appendChild(keySpan)
    }

    menuItem.addEventListener('click', () => {
      // 向当前标签页发送消息，触发对应的菜单功能
      getCurrentTab().then(tab => {
        browserAPI.tabs.sendMessage(tab.id, {
          type: 'h5player_triggerMenuItem',
          data: { index }
        })
        window.close() // 点击后关闭弹出窗口
      })
    })

    container.appendChild(menuItem)

    // 添加分隔线（最后一项不添加）
    if (index < items.length - 1) {
      const divider = document.createElement('div')
      divider.className = 'divider'
      container.appendChild(divider)
    }
  })
}

// 初始化
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const tab = await getCurrentTab()

    // 请求当前页面的菜单项
    browserAPI.tabs.sendMessage(tab.id, { type: 'h5player_getMenuItems' }, response => {
      if (browserAPI.runtime.lastError) {
        // 处理错误情况
        document.getElementById('menuContainer').innerHTML =
          '<div class="empty-message">无法连接到当前页面</div>'
        return
      }

      if (response && response.items) {
        renderMenuItems(response.items)
      } else {
        document.getElementById('menuContainer').innerHTML =
          '<div class="empty-message">当前页面没有可用菜单</div>'
      }
    })
  } catch (error) {
    console.error('初始化弹出窗口失败:', error)
    document.getElementById('menuContainer').innerHTML =
      '<div class="empty-message">加载失败</div>'
  }
})
