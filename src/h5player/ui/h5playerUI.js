// https://shoelace.style/getting-started/installation#bundling
import shoelaceCss from './shoelace/themes/light.css'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js'
import '@shoelace-style/shoelace/dist/components/popup/popup.js'
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js'
import '@shoelace-style/shoelace/dist/components/menu/menu.js'
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js'
import '@shoelace-style/shoelace/dist/components/menu-label/menu-label.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'
import '@shoelace-style/shoelace/dist/components/divider/divider.js'
import iconFastForwardBtn from '../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/fast-forward-btn.svg'
import iconImage from '../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/image.svg'
// import iconGear from '../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/gear.svg'
import iconList from '../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/list.svg'
import iconDownload from '../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/download.svg'
// import iconXLg from '../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/x-lg.svg'
import { createMenuTemplate, menuConfig, menuActionHandler } from './js/menu.js'

if (!window.h5playerUIProvider) {
  throw new Error('h5playerUIProvider is not defined, please check if you have imported h5playerUIProvider.js')
}

const { debug, parseHTML, observeVisibility, isOutOfDocument } = window.h5playerUIProvider

const popupWrapObjs = {}

function removePopupWrapById (popupWrapId) {
  const popupWrap = document.querySelector(`#${popupWrapId}`)
  if (popupWrap) {
    popupWrap.remove()
  }

  delete popupWrapObjs[popupWrapId]
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

const h5playerUI = {
  async init () {
    debug.log('h5playerUI init', shoelaceCss)

    document.adoptedStyleSheets = [...document.adoptedStyleSheets, shoelaceCss]
    // const drawer = parseHTML(`
    //   <sl-drawer label="标题" class="drawer-overview">
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //     <sl-button slot="footer" variant="primary">Close</sl-button>
    //   </sl-drawer>
    // `, document.body)[0]

    // document.body.addEventListener('click', (e) => {
    //   /* 判断当前是否按需了ctrl键 */
    //   if (!e.ctrlKey) {
    //     return
    //   }

    //   console.log('[h5playerUI][click]', e.target, drawer)
    //   // drawer.show();
    //   // drawer.hide();

    //   /* 切换drawer的打开关闭状态 */
    //   drawer.updateComplete.then(() => {
    //     drawer.open = !drawer.open
    //   })
    // })
  },

  popup (element, h5Player) {
    if (!element || !element.tagName || element.tagName.toLowerCase() !== 'video' || isOutOfDocument(element)) {
      return false
    }

    let popupWrapId = element.getAttribute('data-popup-wrap-id')
    if (!popupWrapId) {
      popupWrapId = 'h5player-popup-wrap-' + Math.random().toString(36).substr(2)
      element.setAttribute('data-popup-wrap-id', popupWrapId)
    }

    /* 通过data-popup-wrap-id属性，获取element元素 */
    // document.querySelector('video[data-popup-wrap-id="' + popupWrapId + '"]')

    let popupWrap = document.querySelector(`#${popupWrapId}`)

    if (!popupWrapObjs[popupWrapId]) {
      popupWrapObjs[popupWrapId] = element
    }

    if (popupWrap) {
      // debug.log('[h5playerUI][popupWrap] already exists', popupWrap, element)
      const popup = popupWrap.querySelector('sl-popup')
      popup && popup.reposition()
      return
    }

    const menuTemplate = createMenuTemplate(menuConfig)
    debug.log('[h5playerUI][popup][menuTemplate]', menuTemplate)

    popupWrap = parseHTML(`
      <div id="${popupWrapId}" class="h5player-popup-wrap">
        <sl-popup placement="top" sync="width">
        <div class="h5player-popup-content">
          <div>
            <a href="https://github.com/xxxily/h5player" target="_blank">h5player</a>
          </div>
          <div>
            <!-- 广告位 -->
          </div>
          ${menuTemplate}
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
        debug.error('[h5playerUI][popup][updateComplete], 组件初始化异常', popup, element)
        element.removeAttribute('data-popup-wrap-id')
        popupWrap.remove()
        delete popupWrapObjs[popupWrapId]
        return false
      }

      return true
    }

    /* 确保popup已经被渲染 */
    customElements.whenDefined('sl-popup').then(() => {
      // console.log('[h5playerUI][sl-popup][whenDefined]', popup, element)

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

    const activeClass = 'h5player-popup-active'
    const fullActiveClass = 'h5player-popup-full-active'

    /**
     * 鼠标移动到popupWrap上时增加fullActiveClass的样式类，移出一段时间后再移除fullActiveClass的样式类
     * 用于防止鼠标移动到popupWrap上时popupWrap被快速隐藏，以提示操作体验
     */
    let mouseleaveTimer = null
    popupWrap.addEventListener('mouseenter', () => {
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
          popupWrap.classList.remove(fullActiveClass)

          /* 关闭popupWrap中的所有sl-dropdown */
          const dropdowns = popupWrap.querySelectorAll('sl-dropdown')
          dropdowns.forEach(dropdown => { dropdown.open = false })
        }, 500)
      }
    })

    function openDropdown (target) {
      /* 如果event为h5p-action-btn的元素或其子元素，则对其对应的sl-dropdown进行显示，如果没有则隐藏所有的sl-dropdown */
      const actionBtnClass = 'h5p-action-btn'
      if (target.classList.contains(actionBtnClass) || target.parentElement.classList.contains(actionBtnClass)) {
        const dropdowns = popupWrap.querySelectorAll('sl-dropdown')
        const dropdown = target.parentElement.tagName.toLowerCase() === 'sl-dropdown' ? target.parentElement : target.parentElement.parentElement

        dropdowns.forEach(dropdown => { dropdown.open = false })
        if (dropdown && dropdown.tagName.toLowerCase() === 'sl-dropdown') {
          dropdown.open = true
        }
      }
    }

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

      // debug.log('[h5playerUI][popupWrap][mousemove]', event.target.tagName)
      openDropdown(event.target)
    })

    popupWrap.addEventListener('click', (event) => {
      openDropdown(event.target)
      menuActionHandler(event, element, h5Player, popup)

      if (!event.ctrlKey) {
        return false
      }

      /* 打印调试信息 */
      debug.log('[h5playerUI][popupWrap][click]', popupWrap, element, popupWrap.getBoundingClientRect(), element.getBoundingClientRect())
    })

    /* 图标加载失败时，移除图标元素 */
    const slIcons = popupWrap.querySelectorAll('sl-icon')
    slIcons && slIcons.forEach(slIcon => {
      slIcon.addEventListener('sl-error', (event) => {
        event.target.remove()
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
          popupWrap.classList.remove(activeClass)
          popupWrap.classList.remove(fullActiveClass)
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

    popup.addEventListener('sl-reposition', () => {
      if (isOutOfDocument(element)) {
        popup.active = false
        popupWrap.classList.remove(activeClass)
        popupWrap.classList.remove(fullActiveClass)
      }
    })

    /* element切换播放状态时，如果是播放状态，则隐藏popup，否则显示popup */
    element.addEventListener('play', () => {
      popupWrap.classList.remove(activeClass)
      popupWrap.classList.remove(fullActiveClass)
      if (isOutOfDocument(element)) {
        popup.active = false
      } else {
        popup.active = true
      }
      popup.reposition()
      cleanPopupWrap()
    })

    element.addEventListener('pause', () => {
      popupWrap.classList.add(activeClass)
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

    debug.log('[h5playerUI][popup]', popup, popupWrap, element)
  }
}

export default h5playerUI
