/*!
 * @name      menuCommand.js
 * @version   0.0.1
 * @author    Blaze
 * @date      2019/9/21 14:22
 */

const monkeyMenu = {
  on (title, fn, accessKey) {
    return window.GM_registerMenuCommand && window.GM_registerMenuCommand(title, fn, accessKey)
  },
  off (id) {
    return window.GM_unregisterMenuCommand && window.GM_unregisterMenuCommand(id)
  },
  /* 切换类型的菜单功能 */
  switch (title, fn, defVal) {
    const t = this
    t.on(title, fn)
  }
}
export default monkeyMenu
