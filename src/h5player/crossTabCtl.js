/*!
 * @name         crossTabCtl.js
 * @description  跨Tab控制脚本逻辑
 * @version      0.0.1
 * @author       Blaze
 * @date         2019/11/21 上午11:56
 * @github       https://github.com/xxxily
 */

import monkeyMsg from './monkeyMsg'
import debug from './debug'
import { isRegisterKey } from './helper'
import { curTabId } from './getId'
import {
  isEditableTarget
} from '../libs/utils/index'

const crossTabCtl = {
  /* 由于没有专门的监控方法，所以只能通过轮询来更新画中画信息 */
  updatePictureInPictureInfo () {
    setInterval(function () {
      if (document.pictureInPictureElement) {
        monkeyMsg.send('globalPictureInPictureInfo', {
          hasGlobalPictureInPictureElement: true
        })
      }
    }, 1000 * 1.5)
  },
  /* 判断当前是否开启了画中画功能 */
  hasOpenPictureInPicture () {
    const data = monkeyMsg.get('globalPictureInPictureInfo')
    /* 画中画的全局信息更新时间差在3s内，才认为当前开启了画中画模式 */
    return data && Math.abs(Date.now() - data.updateTime) < 1000 * 3
  },
  /**
   * 判断是否需要发送跨Tab控制按键信息
   */
  isNeedSendCrossTabCtlEvent () {
    const t = crossTabCtl
    if (t.hasOpenPictureInPicture()) {
      /* 画中画开启后，判断不在同一个Tab才发送事件 */
      const data = monkeyMsg.get('globalPictureInPictureInfo')
      if (data.tabId !== curTabId) {
        return true
      }
    }
  },
  crossTabKeydownEvent (event) {
    const t = crossTabCtl
    /* 处于可编辑元素中不执行任何快捷键 */
    if (isEditableTarget(event.target)) return
    if (t.isNeedSendCrossTabCtlEvent() && isRegisterKey(event)) {
      // 阻止事件冒泡和默认事件
      event.stopPropagation()
      event.preventDefault()

      /* 广播按键消息，进行跨Tab控制 */
      monkeyMsg.send('globalKeydownEvent', event)
      debug.log('已发送跨Tab按键控制信息：', event)
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
