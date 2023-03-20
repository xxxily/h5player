/*!
 * @name         crossTabCtl.js
 * @description  跨Tab控制脚本逻辑
 * @version      0.0.1
 * @author       Blaze
 * @date         2019/11/21 上午11:56
 * @github       https://github.com/xxxily
 */

import monkeyMsg from './monkeyMsg'
import { isRegisterKey } from './helper'
import { curTabId } from './getId'
import {
  isEditableTarget
} from '../libs/utils/index'

const crossTabCtl = {
  /* 在进行跨Tab控制时，排除转发的快捷键，以减少对重要快捷键的干扰 */
  excludeShortcuts (event) {
    if (!event || typeof event.keyCode === 'undefined') {
      return false
    }

    const excludeKeyCode = ['c', 'v', 'f', 'd']

    if (event.ctrlKey || event.metaKey) {
      const key = event.key.toLowerCase()
      if (excludeKeyCode.includes(key)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  },
  /* 意外退出的时候leavepictureinpicture事件并不会被调用，所以只能通过轮询来更新画中画信息 */
  updatePictureInPictureInfo () {
    setInterval(function () {
      if (document.pictureInPictureElement) {
        monkeyMsg.send('globalPictureInPictureInfo', {
          usePictureInPicture: true
        })
      }
    }, 1000 * 1.5)

    /**
     * 通过setInterval来更新globalPictureInPictureInfo会受页面可见性和性能策略影响而得不到更新
     * 见： https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API
     * 所以通过增加monkeyMsg广播机制来校准globalPictureInPictureInfo状态
     */
    monkeyMsg.broadcast(function () {
      // console.log('[monkeyMsg][broadcast]', ...arguments)
      if (document.pictureInPictureElement) {
        monkeyMsg.send('globalPictureInPictureInfo', {
          usePictureInPicture: true
        })
      }
    })
  },
  /* 判断当前是否开启了画中画功能 */
  hasOpenPictureInPicture () {
    const data = monkeyMsg.get('globalPictureInPictureInfo')

    /* 画中画的全局信息更新时间差在3s内，才认为当前开启了画中画模式，否则有可能意外退出，而没修改usePictureInPicture的值，造成误判 */
    if (data && data.data) {
      if (data.data.usePictureInPicture) {
        return Math.abs(Date.now() - data.updateTime) < 1000 * 3
      } else {
        /**
         * 检测到画中画已经被关闭，但还没关闭太久的话，允许有个短暂的时间段内让用户跨TAB控制视频
         * 例如：暂停视频播放
         */
        return Math.abs(Date.now() - data.updateTime) < 1000 * 15
      }
    }

    return false
  },
  /**
   * 判断是否需要发送跨Tab控制按键信息
   */
  isNeedSendCrossTabCtlEvent () {
    const t = crossTabCtl

    /* 画中画开启后，判断不在同一个Tab才发送事件 */
    const data = monkeyMsg.get('globalPictureInPictureInfo')
    if (t.hasOpenPictureInPicture() && data.tabId !== curTabId) {
      return true
    } else {
      return false
    }
  },
  crossTabKeydownEvent (event) {
    const t = crossTabCtl
    /* 处于可编辑元素中不执行任何快捷键 */
    if (isEditableTarget(event.target)) return
    if (t.isNeedSendCrossTabCtlEvent() && isRegisterKey(event) && !t.excludeShortcuts(event)) {
      // 阻止事件冒泡和默认事件
      event.stopPropagation()
      event.preventDefault()

      /* 广播按键消息，进行跨Tab控制 */
      // keydownEvent里已经包含了globalKeydownEvent事件
      // monkeyMsg.send('globalKeydownEvent', event)

      return true
    }
  },
  bindCrossTabEvent () {
    const t = crossTabCtl
    if (t._hasBindEvent_) return
    document.removeEventListener('keydown', t.crossTabKeydownEvent)
    document.addEventListener('keydown', t.crossTabKeydownEvent, true)
    t._hasBindEvent_ = true
  },
  init () {
    const t = crossTabCtl
    t.updatePictureInPictureInfo()
    t.bindCrossTabEvent()
  }
}

export default crossTabCtl
