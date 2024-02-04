import originalMethods from './originalMethods'
import h5playerUIProvider from './h5playerUIProvider'

/**
 * 通过proxy创建个window的沙盒传递给h5playerUiWraper
 * 目的是可以提供一些干净的全局对象给到h5playerUI
 * 另外是避免h5playerUI中的代码污染到实际的window对象
 */

const windowSandbox = new Proxy({}, {
  get: function (target, key) {
    if (key === 'h5playerUIProvider') {
      return h5playerUIProvider
    }

    if (key === 'HTMLElement') {
      return originalMethods.HTMLElement
    }

    return window[key]
  }
})

export default windowSandbox
