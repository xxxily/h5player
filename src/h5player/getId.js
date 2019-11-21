/* 用于获取全局唯一的id */
function getId () {
  let gID = window.GM_getValue('_global_id_')
  if (!gID) gID = 0
  gID = Number(gID) + 1
  window.GM_setValue('_global_id_', gID)
  return gID
}

let curTabId = null

/**
 * 获取当前TAB标签的Id号，可用于iframe确定自己是否处于同一TAB标签下
 * @returns {Promise<any>}
 */
function getTabId () {
  return new Promise((resolve, reject) => {
    window.GM_getTab(function (obj) {
      if (!obj.tabId) {
        obj.tabId = getId()
        window.GM_saveTab(obj)
      }
      /* 每次获取都更新当前Tab的id号 */
      curTabId = obj.tabId
      resolve(obj.tabId)
    })
  })
}

/* 一开始就初始化好curTabId，这样后续就不需要异步获取Tabid，部分场景下需要用到 */
getTabId()

export { getTabId, getId, curTabId }
