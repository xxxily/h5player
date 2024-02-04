import originalMethods from './originalMethods'
import {
  getPageWindow
} from './helper'

function fixDefine (newDefine) {
  const customElementsDefine = function (name, constructor, options) {
    let result = null

    console.log(`[customElementsDefine][${name}]`)

    try {
      result = newDefine.call(window.customElements, name, constructor, options)
    } catch (e) {
      result = originalMethods.customElementsMethods.define.call(originalMethods.customElements, name, constructor, options)
    }

    return result
  }

  customElementsDefine.prototype._hasFix_ = true

  return customElementsDefine
}

function fixGet (newGet) {
  const customElementsGet = function (name) {
    let result = null
    try {
      result = newGet.call(window.customElements, name)
    } catch (e) {
      result = originalMethods.customElementsMethods.get.call(originalMethods.customElements, name)
    }

    return result
  }

  customElementsGet.prototype._hasFix_ = true

  return customElementsGet
}

export async function fixCustomElementsMethods () {
  const pageWindow = await getPageWindow()

  /* 无需修复或不再修复的情况 */
  // const noNeedFix = !window.customElements || window.customElements.define === originalMethods.customElementsMethods.define
  // if (noNeedFix) {
  //   console.log('[fixCustomElementsMethods][noNeedFix]')
  //   return true
  // }

  /* 尝试修复customElements.define和customElements.get */
  const newDefine = window.customElements.define
  const newGet = window.customElements.get
  const newPageDefine = pageWindow.customElements.define
  const newPageGet = pageWindow.customElements.get

  if (newDefine && !newDefine._hasFix_) {
    window.customElements.define = fixDefine(newDefine)
  }

  if (newPageDefine && !newPageDefine._hasFix_) {
    pageWindow.customElements.define = fixDefine(newPageDefine)
  }

  if (newGet && !newGet._hasFix_) {
    window.customElements.get = fixGet(newGet)
  }

  if (newPageGet && !newPageGet._hasFix_) {
    pageWindow.customElements.get = fixGet(newPageGet)
  }

  // console.log('[fixCustomElementsMethods][end][!!!!!!!!!!!!!!!!!!!]', window.location.href, window, pageWindow)
}

/**
 * 通过proxy代理window.customElements，检测到外部重写了window.customElements.define和window.customElements.get，执行自动修复逻辑
 */
export async function useCustomElementsProxy () {
  // if (!window.customElements || window.customElements.__hasProxy__) {
  //   return true
  // }
  const pageWindow = await getPageWindow()

  // console.log('[useCustomElementsProxy][start]', window.customElements, window.customElements.define, window.customElements.get)

  const customElementsProxy = new Proxy(pageWindow.customElements, {
    get: function (target, key) {
      console.log(`[customElementsProxy][get][${key}]`, target, key)
      if (key === 'define') {
        // return fixDefine(target[key])
        return originalMethods.customElementsMethods.define
      }

      if (key === 'get') {
        // return fixGet(target[key])
        return originalMethods.customElementsMethods.get
      }

      return target[key]
    },

    // set: function (target, key, value) {
    //   console.log(`[customElementsProxy][set][${key}]`, value)

    //   // if (key === 'define') {
    //   //   target[key] = fixDefine(value)
    //   //   console.log(`[customElementsProxy][useFix][${key}]`, value, target[key])
    //   // }

    //   // if (key === 'get') {
    //   //   target[key] = fixGet(value)
    //   //   console.log(`[customElementsProxy][useFix][${key}]`, value, target[key])
    //   // }

    //   target[key] = value
    //   return true
    // },

    defineProperty: function (target, key, descriptor) {
      console.log(`[customElementsProxy][defineProperty][${key}]`, target, descriptor, target === pageWindow.customElements)

      // if (key === 'define') {
      //   descriptor.value = fixDefine(descriptor.value)
      //   console.log(`[customElementsProxy][useFix][${key}]`, descriptor.value)
      // }

      // if (key === 'get') {
      //   descriptor.value = fixGet(descriptor.value)
      //   console.log(`[customElementsProxy][useFix][${key}]`, descriptor.value)
      // }

      // Object.defineProperty(pageWindow.customElements, key, descriptor)
      // Object.defineProperty(target, key, descriptor)

      if (key === 'define' && descriptor.value instanceof Function) {
        descriptor.value = fixDefine(descriptor.value)
      }

      // if (key === 'get' && descriptor.value instanceof Function) {
      //   descriptor.value = fixGet(descriptor.value)
      // }

      Reflect.defineProperty(target, key, descriptor)
      return true
    }
  })

  customElementsProxy.__hasProxy__ = true

  // Object.defineProperty(window, 'customElements', {
  //   value: customElementsProxy,
  //   writable: true,
  //   enumerable: true,
  //   configurable: true
  // })

  const customElementsDescriptor = Object.getOwnPropertyDescriptor(window, 'customElements')

  Object.defineProperty(pageWindow, 'customElements', {
    // ...customElementsDescriptor,
    value: customElementsProxy,
    // writable: true,
    enumerable: true,
    configurable: true
  })

  // window.customElements = customElementsProxy
  // pageWindow.customElements = customElementsProxy

  console.log('[useCustomElementsProxy][end]', customElementsDescriptor)
}

/* 取消customElements的代理 */
export function unUseCustomElementsProxy () {
  if (!window.customElements || !window.customElements.__hasProxy__) {
    return true
  }

  Object.defineProperty(window, 'customElements', {
    value: originalMethods.customElements,
    writable: true,
    enumerable: true,
    configurable: true
  })
}
