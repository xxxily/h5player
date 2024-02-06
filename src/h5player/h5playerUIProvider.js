/**
 * 提供一些跟h5player共享的全局方法，减少重复代码，和共享一些需要提前执行才能获取得到得对象
 */

import originalMethods from './originalMethods'
import { parseHTML } from '../libs/utils/html.js'
import { observeVisibility, isOutOfDocument } from '../libs/utils/dom.js'
import i18n from './i18n'
import debug from './debug'
import configManager from './configManager'
import globalFunctional from './globalFunctional'
import device from '../libs/utils/device.js'
import version from './version'

const h5playerUIProvider = {
  version,
  originalMethods,
  parseHTML,
  observeVisibility,
  isOutOfDocument,
  i18n,
  debug,
  configManager,
  globalFunctional,
  device
}

export default h5playerUIProvider
