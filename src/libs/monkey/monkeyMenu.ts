/*!
 * @name      menuCommand.ts
 * @version   0.0.2
 * @author    Blaze
 * @date      2023/03/01 10:22
 */

export interface MenuInfo {
  title: string | (() => string)
  fn: () => void
  accessKey?: string
  disable?: boolean
}
type MenuId = number | string
export type MenuOptions = MenuInfo[] | (() => MenuInfo[]) | undefined

export interface MonkeyMenu {
  menuIds: Record<MenuId, MenuInfo>
  on(title: string | (() => string), fn: () => void, accessKey?: string): MenuId | undefined
  off(id: MenuId): void
  clear(): void
  build(menuOpts: MenuOptions): void
  _menuBuilder_?: () => MenuInfo[]
}

const monkeyMenu: MonkeyMenu = {
  menuIds: {},
  on(title, fn, accessKey) {
    if (title instanceof Function) {
      title = title()
    }

    if (window.GM_registerMenuCommand) {
      const menuId = window.GM_registerMenuCommand(title, fn, accessKey)

      this.menuIds[menuId] = {
        title,
        fn,
        accessKey,
      }

      return menuId
    }
  },

  off(id) {
    if (window.GM_unregisterMenuCommand) {
      delete this.menuIds[id]

      /**
       * 批量移除已注册的按钮时，在某些性能较差的机子上会留下数字title的菜单残留
       * 应该属于插件自身导致的BUG，暂时无法解决
       * 所以此处暂时不进行菜单移除，tampermonkey会自动对同名菜单进行合并
       */
      // return window.GM_unregisterMenuCommand(id)
    }
  },

  clear() {
    Object.keys(this.menuIds).forEach((id) => {
      this.off(id)
    })
  },

  /**
   * 通过菜单配置进行批量注册，注册前会清空之前注册过的所有菜单
   * @param {array|function} menuOpts 菜单配置，如果是函数则会调用该函数获取菜单配置，并且当菜单被点击后会重新创建菜单，实现菜单的动态更新
   */
  build(menuOpts) {
    this.clear()

    if (Array.isArray(menuOpts)) {
      menuOpts.forEach((menu) => {
        if (menu.disable === true) {
          return
        }
        this.on(menu.title, menu.fn, menu.accessKey)
      })
    } else if (menuOpts instanceof Function) {
      const menuList = menuOpts()
      if (Array.isArray(menuList)) {
        this._menuBuilder_ = menuOpts

        menuList.forEach((menu) => {
          if (menu.disable === true) {
            return
          }

          const menuFn = () => {
            try {
              menu.fn.apply(menu, arguments as any)
            } catch (e) {
              console.error('[monkeyMenu]', menu.title, e)
            }

            // 每次菜单点击后，重新注册菜单，这样可以确保菜单的状态是最新的
            setTimeout(() => {
              // console.log('[monkeyMenu rebuild]', menu.title)
              this.build(this._menuBuilder_)
            }, 100)
          }

          this.on(menu.title, menuFn, menu.accessKey)
        })
      } else {
        console.error('monkeyMenu build error, no menuList return', menuOpts)
      }
    }
  },
}

export default monkeyMenu
