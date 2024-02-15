// https://shoelace.style/getting-started/installation#bundling
import shoelaceCss from './shoelace/themes/light.css'
// import '@shoelace-style/shoelace/dist/components/button/button.js'
// import '@shoelace-style/shoelace/dist/components/drawer/drawer.js'
import '@shoelace-style/shoelace/dist/components/popup/popup.js'
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js'
import '@shoelace-style/shoelace/dist/components/menu/menu.js'
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js'
import '@shoelace-style/shoelace/dist/components/menu-label/menu-label.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'
import '@shoelace-style/shoelace/dist/components/divider/divider.js'
import { createMenuTemplate, createLogoModTemplate, createRecommendModTemplate, menuConfig, menuConfigPreprocess, menuActionHandler } from './js/menu.js'

if (!window.h5playerUIProvider) {
  throw new Error('h5playerUIProvider is not defined, please check if you have imported h5playerUIProvider.js')
}

const { debug, parseHTML, observeVisibility, isOutOfDocument, configManager, device } = window.h5playerUIProvider

const popupWrapObjs = {}

function removePopupWrapById (popupWrapId) {
  const popupWrap = document.querySelector(`#${popupWrapId}`)
  if (popupWrap) {
    popupWrap.remove()
  }

  delete popupWrapObjs[popupWrapId]
}

function removePopupWrapByElement (element) {
  if (!element) { return false }
  const popupWrapId = element.getAttribute('data-popup-wrap-id')
  if (popupWrapId) { removePopupWrapById(popupWrapId) }
}

/* 遍历popupWrapObjs，如果popupWrapObjs中的element元素的offsetParent为null，则移除掉 */
function cleanPopupWrap () {
  const popupWrapIds = Object.keys(popupWrapObjs)
  popupWrapIds.forEach(popupWrapId => {
    const element = popupWrapObjs[popupWrapId]
    if (isOutOfDocument(element)) {
      removePopupWrapById(popupWrapId)
    }
  })
}

function getAllPopupWrapElement () {
  return document.querySelectorAll('.h5player-popup-wrap')
}

function findPopupWrapWithElement (videoElement) {
  const result = []
  const popupWrapIds = Object.keys(popupWrapObjs)
  popupWrapIds.forEach(popupWrapId => {
    const element = popupWrapObjs[popupWrapId]
    if (element === videoElement) {
      result.push(popupWrapId)
    }
  })

  return result.map(id => document.querySelector(`#${id}`))
}

const h5playerUI = {
  async init () {
    debug.log('h5playerUI init')

    /* 插入组件相关的样式 */
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, shoelaceCss]
  },

  disableGUITemporarily () {
    this.__disableGUITemporarily__ = true
    const popupWrapIds = Object.keys(popupWrapObjs)
    popupWrapIds.forEach(popupWrapId => {
      removePopupWrapById(popupWrapId)
    })
  },

  getAllPopupWrapElement,
  findPopupWrapWithElement,
  cleanPopupWrap,
  removePopupWrapById,
  removePopupWrapByElement,

  popup (element, h5Player) {
    if (this.__disableGUITemporarily__ || element.__disableGUITemporarily__) { return false }

    /* 如果element元素的宽高比大于2.5，说明可能为视频背景，则也不显示popup */
    if (element.videoWidth / element.videoHeight > 2.5) { return false }

    /* 防止popup渲染过于频繁 */
    if (this.lastRenderedPopupTime && Date.now() - this.lastRenderedPopupTime < 100) {
      return false
    } else {
      this.lastRenderedPopupTime = Date.now()
    }

    if (!element || !element.tagName || element.tagName.toLowerCase() !== 'video' || isOutOfDocument(element)) {
      return false
    }

    let popupWrapId = element.getAttribute('data-popup-wrap-id')
    if (!popupWrapId) {
      popupWrapId = 'h5player-popup-wrap-' + Math.random().toString(36).substr(2)
      element.setAttribute('data-popup-wrap-id', popupWrapId)
    }

    let popupWrap = document.querySelector(`#${popupWrapId}`)

    if (!popupWrapObjs[popupWrapId]) {
      popupWrapObjs[popupWrapId] = element
    }

    if (popupWrap) {
      const popup = popupWrap.querySelector('sl-popup')
      popup && popup.reposition()
      return
    }

    const menuTemplate = createMenuTemplate(menuConfigPreprocess(menuConfig, element))
    popupWrap = parseHTML(`
      <div id="${popupWrapId}" class="h5player-popup-wrap">
        <sl-popup placement="top" sync="width">
        <div class="h5player-popup-content">
          <div class="h5p-logo-wrap">
            ${createLogoModTemplate()}
          </div>
          <div class="h5p-recommend-wrap">
            <div style="overflow:hidden">${createRecommendModTemplate(element)}</div>
          </div>
          <div class="h5p-menu-wrap">
            ${menuTemplate}
          </div>
        </div>
        </sl-popup>
      </div>
    `, document.body)[0]

    const popup = popupWrap.querySelector('sl-popup')

    /**
     * 判断popup初始化是否异常，油管上使用了custom-elements-es5-adapter.js，会导致popup异常，故有此判断
     * 例如：https://www.youtube.com/watch?v=jsb-5H_hy0M
     * 例如：https://www.youtube.com/watch?v=-2xb7rGCi2k
     */
    function checkPopupUpdateComplete () {
      if (!popup || !popup.updateComplete || !popup.updateComplete.then) {
        // debug.error('[h5playerUI][popup][updateComplete], 组件初始化异常', popup, element)
        element.removeAttribute('data-popup-wrap-id')
        popupWrap.remove()
        delete popupWrapObjs[popupWrapId]
        return false
      }

      return true
    }

    /* 确保popup已经被渲染 */
    customElements.whenDefined('sl-popup').then(() => {
      if (!checkPopupUpdateComplete()) {
        return false
      }

      popup.updateComplete.then(() => {
        popup.anchor = element
        popup.distance = -48
        popup.active = true
        setTimeout(() => { popup.reposition() }, 600)
      })
    })

    /* 重新渲染h5p-action-mod对应的菜单，以便更新菜单状态 */
    function reRenderMenuMod () {
      const menuWrap = popupWrap.querySelector('.h5player-popup-content .h5p-menu-wrap')
      const actionMod = popupWrap.querySelector('.h5p-action-mod')
      if (menuWrap && actionMod) {
        menuWrap.removeChild(actionMod)

        const newMenuTemplate = createMenuTemplate(menuConfigPreprocess(menuConfig, element))
        parseHTML(newMenuTemplate, menuWrap)

        /* 图标加载失败时，移除图标元素 */
        const slIcons = popupWrap.querySelectorAll('sl-icon')
        slIcons && slIcons.forEach(slIcon => {
          slIcon.addEventListener('sl-error', (event) => {
            const parent = event.target.parentElement
            event.target.remove()

            /* 改为只显示文字标题 */
            if (parent.getAttribute('data-title')) {
              parent.innerText = parent.getAttribute('data-title')
            }
          }, { once: true })
        })

        // debug.log('[h5playerUI][popup][reRenderMenuMod]')
      }
    }

    /* 油管首次渲染会莫名其妙的出错，所以此处延迟一段时间重新渲染一次菜单 */
    setTimeout(() => { reRenderMenuMod() }, 400)

    /* 重新渲染h5p-recommend-mod对应的推荐模块，如果位置不够则对隐藏改模块 */
    function reRenderRecommendMod () {
      const recommendWrap = popupWrap.querySelector('.h5player-popup-content .h5p-recommend-wrap')
      const recommendMod = popupWrap.querySelector('.h5player-popup-content .h5p-recommend-wrap>div')
      if (recommendWrap && recommendMod) {
        recommendWrap.removeChild(recommendMod)

        const newRecommendModTemplate = `<div style="overflow:hidden">${createRecommendModTemplate(element)}</div>`
        parseHTML(newRecommendModTemplate, recommendWrap)

        // debug.log('[h5playerUI][popup][reRenderRecommendMod]')
      }
    }

    const activeClass = 'h5player-popup-active'
    const fullActiveClass = 'h5player-popup-full-active'
    const alwaysShowUIBar = configManager.getGlobalStorage('ui.alwaysShow')

    /**
     * 鼠标移动到popupWrap上时增加fullActiveClass的样式类，移出一段时间后再移除fullActiveClass的样式类
     * 用于防止鼠标移动到popupWrap上时popupWrap被快速隐藏，以提示操作体验
     */
    let mouseleaveTimer = null
    popupWrap.addEventListener('mouseenter', () => {
      /* 元素比例异常，不显示popup */
      if (element.videoWidth / element.videoHeight > 2.5) {
        element.__disableGUITemporarily__ = true
        removePopupWrapByElement(element)
        return false
      }

      clearTimeout(mouseleaveTimer)
      if (isOutOfDocument(element)) {
        popupWrap.classList.remove(fullActiveClass)
      } else {
        popupWrap.classList.add(fullActiveClass)
      }
      popup.reposition()
    })
    popupWrap.addEventListener('mouseleave', () => {
      clearTimeout(mouseleaveTimer)

      if (isOutOfDocument(element)) {
        popupWrap.classList.remove(fullActiveClass)
      } else {
        mouseleaveTimer = setTimeout(() => {
          !alwaysShowUIBar && popupWrap.classList.remove(activeClass)
          !alwaysShowUIBar && popupWrap.classList.remove(fullActiveClass)

          /* 关闭popupWrap中的所有sl-dropdown */
          const dropdowns = popupWrap.querySelectorAll('sl-dropdown')
          dropdowns.forEach(dropdown => {
            dropdown._open_ = false
            dropdown.open = false
          })

          reRenderMenuMod()
        }, 500)
      }
    })

    // let lastOpenDropdownTime = Date.now()
    async function openDropdown (event) {
      // if (Date.now() - lastOpenDropdownTime < 100) { return false }
      // lastOpenDropdownTime = Date.now()

      const target = event.target

      const actionBtnClass = 'h5p-action-btn'
      if (!(target.classList.contains(actionBtnClass) || target.parentElement.classList.contains(actionBtnClass))) {
        return false
      }

      const dropdowns = popupWrap.querySelectorAll('sl-dropdown')
      const curDropdown = target.parentElement.tagName.toLowerCase() === 'sl-dropdown' ? target.parentElement : target.parentElement.parentElement
      const isDropdownDom = curDropdown && curDropdown.tagName.toLowerCase() === 'sl-dropdown'

      if (!isDropdownDom) {
        dropdowns.forEach(dropdown => {
          dropdown.open = false
          dropdown._open_ = false
        })
        return false
      }

      dropdowns.forEach(async (dropdown) => {
        if (dropdown !== curDropdown) {
          dropdown._open_ = false
          await dropdown.hide()
        }
      })

      if (event.type === 'mousemove') {
        curDropdown._open_ = true
        await curDropdown.show()
        return false
      }

      if (!curDropdown._open_) {
        await curDropdown.show()
        curDropdown._open_ = true

        curDropdown.addEventListener('sl-after-hide', () => {
          curDropdown._open_ = false
        }, { once: true })
      } else {
        await curDropdown.hide()
        curDropdown._open_ = false

        curDropdown.addEventListener('sl-after-show', () => {
          curDropdown._open_ = true
        }, { once: true })
      }
    }

    /* 移动端下如果注册了mousemove会导致click没法触发，或者导致事件相互干扰，没法唤起sl-dropdown */
    if (!device.isMobile()) {
      /* 鼠标在popupWrap上移动时，如果检测到isOutOfDocument(element)也移除fullActiveClass的样式类，注意需加上debounce */
      let lastCheckIsOutOfDocumentTime = Date.now()
      popupWrap.addEventListener('mousemove', (event) => {
        const now = Date.now()
        if (now - lastCheckIsOutOfDocumentTime > 100) {
          lastCheckIsOutOfDocumentTime = now
          if (isOutOfDocument(element)) {
            clearTimeout(mouseleaveTimer)
            popupWrap.classList.remove(fullActiveClass)
          } else {
            popup.reposition()
          }
        }

        openDropdown(event)
      })
    }

    popupWrap.addEventListener('click', (event) => {
      openDropdown(event)
      menuActionHandler({
        event,
        videoElement: element,
        h5Player,
        h5playerUI: this,
        popup,
        actionCallback: (action, args) => {
          reRenderMenuMod()
        }
      })
    })

    observeVisibility((entry, observer) => {
      let activeStatus = false
      if (entry) {
        if (!isOutOfDocument(element)) {
          activeStatus = true
        }

        if (element && element.paused && !isOutOfDocument(element)) {
          popupWrap.classList.add(activeClass)
        } else {
          if (alwaysShowUIBar) {
            popupWrap.classList.add(activeClass)
            popupWrap.classList.add(fullActiveClass)
          } else {
            popupWrap.classList.remove(activeClass)
            popupWrap.classList.remove(fullActiveClass)
          }
        }
      } else {
        activeStatus = false
        popupWrap.classList.remove(activeClass)
        popupWrap.classList.remove(fullActiveClass)
      }

      if (!checkPopupUpdateComplete()) { return false }

      popup.updateComplete.then(() => {
        popup.active = activeStatus
        popup.reposition()
      })
    }, element)

    popup.oldRect = element.getBoundingClientRect()
    popup.addEventListener('sl-reposition', () => {
      if (isOutOfDocument(element)) {
        popup.active = false
        popupWrap.classList.remove(activeClass)
        popupWrap.classList.remove(fullActiveClass)
      } else {
        const newRect = element.getBoundingClientRect()
        if (newRect.width !== popup.oldRect.width) {
          popup.oldRect = newRect
          reRenderMenuMod()
          reRenderRecommendMod()
        }
      }
    })

    /* element切换播放状态时，如果是播放状态，则隐藏popup，否则显示popup */
    element.addEventListener('play', () => {
      if (alwaysShowUIBar) {
        popupWrap.classList.add(activeClass)
        popupWrap.classList.add(fullActiveClass)
      } else {
        popupWrap.classList.remove(activeClass)
        popupWrap.classList.remove(fullActiveClass)
      }

      if (isOutOfDocument(element)) {
        popup.active = false
      } else {
        popup.active = true
      }
      popup.reposition()
      cleanPopupWrap()

      reRenderMenuMod()
    })

    element.addEventListener('pause', () => {
      reRenderMenuMod()

      if (alwaysShowUIBar) {
        popupWrap.classList.add(activeClass)
        popupWrap.classList.add(fullActiveClass)
      } else {
        popupWrap.classList.add(activeClass)
      }

      if (isOutOfDocument(element)) {
        popup.active = false
      } else {
        popup.active = true
      }

      popup.reposition()
      cleanPopupWrap()
    })

    /* element的播放进度发生变化时，执行一次popup.reposition() */
    let lastTimeupdateTime = Date.now()
    element.addEventListener('timeupdate', () => {
      const now = Date.now()
      if (!isOutOfDocument(element) && now - lastTimeupdateTime > 400) {
        lastTimeupdateTime = now
        popup.reposition()
      }
    })

    /* 尝试清除popupWrapObjs中的无效元素 */
    cleanPopupWrap()

    // debug.log('[h5playerUI][popup]', popup, popupWrap, element)
  }
}

export default h5playerUI
