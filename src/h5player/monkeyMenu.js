/*!
 * @name      menuCommand.js
 * @version   0.0.1
 * @author    Blaze
 * @date      2019/9/21 14:22
 */

const monkeyMenu = {
  menuIds: new Map(),
  on (menu, menuKey) {
    const title = menu.title instanceof Function ? menu.title() : menu.title
    const registeredMenu = this.menuIds.get(menuKey)

    /* 标题和快捷键没有变化时复用原命令，只更新实际执行的菜单配置 */
    if (registeredMenu && registeredMenu.title === title && registeredMenu.accessKey === menu.accessKey) {
      registeredMenu.menu = menu
      return registeredMenu.id
    }

    if (registeredMenu) {
      const hasUnregistered = this.off(menuKey)
      if (!hasUnregistered) {
        /* 注销失败时继续复用旧命令，避免再次注册造成回调叠加 */
        registeredMenu.menu = menu
        return registeredMenu.id
      }
    }

    if (window.GM_registerMenuCommand) {
      const menuInfo = {
        id: null,
        title,
        accessKey: menu.accessKey,
        menu
      }
      const menuFn = (...args) => {
        try {
          menuInfo.menu.fn.apply(menuInfo.menu, args)
        } catch (e) {
          console.error('[monkeyMenu]', menuInfo.title, e)
        }
      }
      const menuId = window.GM_registerMenuCommand(title, menuFn, menu.accessKey)

      menuInfo.id = menuId
      this.menuIds.set(menuKey, menuInfo)

      return menuId
    }
  },

  off (menuKey) {
    const menuInfo = this.menuIds.get(menuKey)
    if (!menuInfo) return true

    /* 无法确认命令ID或缺少注销API时保留旧命令，防止重复注册 */
    if (menuInfo.id === null || menuInfo.id === undefined || !window.GM_unregisterMenuCommand) {
      return false
    }

    try {
      window.GM_unregisterMenuCommand(menuInfo.id)
    } catch (e) {
      console.error('[monkeyMenu][unregister]', menuInfo.title, e)
      return false
    }

    this.menuIds.delete(menuKey)
    return true
  },

  clear () {
    Array.from(this.menuIds.keys()).forEach(menuKey => {
      this.off(menuKey)
    })
  },

  /**
   * 通过菜单配置同步注册结果，仅新增、移除或更新发生变化的命令
   * @param {array|function} menuOpts 菜单配置，如果是函数则会调用该函数获取菜单配置
   */
  build (menuOpts) {
    const menuList = menuOpts instanceof Function ? menuOpts() : menuOpts
    if (!Array.isArray(menuList)) {
      console.error('monkeyMenu build error, no menuList return', menuOpts)
      return
    }

    const activeMenuKeys = new Set()
    menuList.forEach(menu => {
      if (menu.disable === true || !(menu.fn instanceof Function)) return

      /* 显式key可处理重复创建的函数，默认使用稳定的fn引用作为菜单标识 */
      const menuKey = menu.key || menu.fn
      activeMenuKeys.add(menuKey)
      this.on(menu, menuKey)
    })

    Array.from(this.menuIds.keys()).forEach(menuKey => {
      if (!activeMenuKeys.has(menuKey)) {
        this.off(menuKey)
      }
    })
  }
}

export default monkeyMenu
