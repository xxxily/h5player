/*!
 * @name         crossTabCtl.js
 * @description  跨Tab控制脚本逻辑
 * @version      0.0.1
 * @author       Blaze
 * @date         2019/11/21 上午11:56
 * @github       https://github.com/xxxily
 */

import monkeyMsg from './monkeyMsg'
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
    console.log(data)
  },
  /**
   * 判断是否需要发送跨Tab控制按键信息
   */
  isNeedSendCrossTabCtlEvent () {
    const t = this
    if (t.hasOpenPictureInPicture()) {
      return true
    }
  },
  crossTabKeydownEvent (event) {
    const t = this
    /* 处于可编辑元素中不执行任何快捷键 */
    if (isEditableTarget(event.target)) return
    if (t.isNeedSendCrossTabCtlEvent()) {
      /* 广播按键消息，进行跨Tab控制 */
      monkeyMsg.send('globalKeydownEvent', event)
    }
  },
  bindCrossTabEvent () {
    const t = this
    if (t._hasBindEvent_) return
    document.removeEventListener('keydown', t.crossTabKeydownEvent)
    document.addEventListener('keydown', t.crossTabKeydownEvent, true)
    t._hasBindEvent_ = true
  },
  init () {
    const t = this
    t.updatePictureInPictureInfo()
    t.bindCrossTabEvent()
  }
}

export default crossTabCtl
