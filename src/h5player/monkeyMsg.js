/*!
 * @name      monkeyMsg.js
 * @version   0.0.1
 * @author    Blaze
 * @date      2019/9/21 14:22
 */
import { getTabId } from './getId'

/**
 * 将对象数据里面可存储到GM_setValue里面的值提取出来
 * @param obj {objcet} -必选 打算要存储的对象数据
 * @param deep {number} -可选 如果对象层级非常深，则须限定递归的层级，默认最高不能超过3级
 * @returns {{}}
 */
function extractDatafromOb (obj, deep) {
  deep = deep || 1
  if (deep > 3) return {}

  const result = {}
  if (typeof obj === 'object') {
    for (const key in obj) {
      const val = obj[key]
      const valType = typeof val
      if (valType === 'number' || valType === 'string' || valType === 'boolean') {
        Object.defineProperty(result, key, {
          value: val,
          writable: true,
          configurable: true,
          enumerable: true
        })
      } else if (valType === 'object' && Object.prototype.propertyIsEnumerable.call(obj, key)) {
        /* 进行递归提取 */
        result[key] = extractDatafromOb(val, deep + 1)
      } else if (valType === 'array') {
        result[key] = val
      } else {
        /* 其它数据类型直接丢弃，因为无法进行传送 */
      }
    }
  }
  return result
}

const monkeyMsg = {
  async send (name, data) {
    const tabId = await getTabId()
    const msg = {
      /* 发送过来的数据 */
      data,
      /* 补充标签ID，用于判断是否同处一个tab标签下 */
      tabId,
      /* 补充消息的页面来源的标题信息 */
      title: document.title,
      /* 补充消息的页面来源信息 */
      referrer: extractDatafromOb(window.location),
      /* 最近一次更新该数据的时间 */
      updateTime: Date.now()
    }
    if (typeof data === 'object') {
      msg.data = extractDatafromOb(data)
    }
    // console.log('send:', msg)
    window.GM_setValue(name, msg)
  },
  set: (name, data) => monkeyMsg.send(name, data),
  get: (name) => window.GM_getValue(name),
  on: (name, fn) => window.GM_addValueChangeListener(name, fn),
  off: (listenerId) => window.GM_removeValueChangeListener(listenerId)
}

export default monkeyMsg
