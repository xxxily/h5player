/*!
 * @name         monkeyStorageProxy.js
 * @description  类似local-storage-proxy的monkey-storage-proxy
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/08/29 17:13
 * @github       https://github.com/xxxily
 */

export default (name, opts = {}) => {
  const {
    defaults = {},
    lspReset = false,
    storageEventListener = true
  } = opts

  const state = new EventTarget()
  try {
    const restoredState = window.GM_getValue(name) || {}
    if (restoredState.lspReset !== lspReset) {
      window.GM_deleteValue(name)
      for (const [k, v] of Object.entries({
        ...defaults
      })) {
        state[k] = v
      }
    } else {
      for (const [k, v] of Object.entries({
        ...defaults,
        ...restoredState
      })) {
        state[k] = v
      }
    }
  } catch (e) {
    console.error('[monkeyStorageProxy]', e)
    window.GM_deleteValue(name)
  }

  state.lspReset = lspReset

  if (storageEventListener && typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    window.GM_addValueChangeListener(name, (name, oldVal, newVal, remote) => {
      // Replace state with whats stored on localStorage... it is newer.
      for (const k of Object.keys(state)) {
        delete state[k]
      }
      const restoredState = window.GM_getValue(name) || {}
      for (const [k, v] of Object.entries({
        ...defaults,
        ...restoredState
      })) {
        state[k] = v
      }
      opts.lspReset = restoredState.lspReset
      state.dispatchEvent(new Event('update'))
    })
  }

  function boundHandler (rootRef) {
    return {
      get (obj, prop) {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
          return new Proxy(obj[prop], boundHandler(rootRef))
        } else if (typeof obj[prop] === 'function' && obj === rootRef && prop !== 'constructor') {
          // this returns bound EventTarget functions
          return obj[prop].bind(obj)
        } else {
          return obj[prop]
        }
      },
      set (obj, prop, value) {
        obj[prop] = value
        try {
          window.GM_setValue(name, rootRef)
          rootRef.dispatchEvent(new Event('update'))
          return true
        } catch (e) {
          console.error('[monkeyStorageProxy]', e)
          return false
        }
      }
    }
  }

  return new Proxy(state, boundHandler(state))
}
