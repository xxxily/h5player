/* 用于获取全局唯一的id */
let __globalId__ = 0
function getId () {
  if (window.GM_getValue && window.GM_setValue) {
    let gID = window.GM_getValue('_global_id_')
    if (!gID) gID = 0
    gID = Number(gID) + 1
    window.GM_setValue('_global_id_', gID)
    return gID
  } else {
    /* 如果不处于油猴插件下，则该id为页面自己独享的id */
    __globalId__ = Number(__globalId__) + 1
    return __globalId__
  }
}

let curTabId = null

/**
 * 获取当前TAB标签的Id号，可用于iframe确定自己是否处于同一TAB标签下
 * @returns {Promise<any>}
 */
function getTabId () {
  return new Promise((resolve, reject) => {
    if (window.GM_getTab instanceof Function) {
      window.GM_getTab(function (obj) {
        if (!obj.tabId) {
          obj.tabId = getId()
          window.GM_saveTab(obj)
        }
        /* 每次获取都更新当前Tab的id号 */
        curTabId = obj.tabId
        resolve(obj.tabId)
      })
    } else {
      /* 非油猴插件下，无法确定iframe是否处于同一个tab下 */
      resolve(Date.now())
    }
  })
}

/* 一开始就初始化好curTabId，这样后续就不需要异步获取Tabid，部分场景下需要用到 */
getTabId()

export { getTabId, getId, curTabId }
