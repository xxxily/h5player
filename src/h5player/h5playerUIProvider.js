/**
 * 提供一些跟h5player共享的全局方法，减少重复代码，和共享一些需要提前执行才能获取得到得对象
 */

import originalMethods from './originalMethods'
import { parseHTML } from '../libs/utils/html.js'
import { observeVisibility, isOutOfDocument } from '../libs/utils/dom.js'
import debug from './debug'

const h5playerUIProvider = {
  originalMethods,
  parseHTML,
  observeVisibility,
  isOutOfDocument,
  debug
}

export default h5playerUIProvider
