import iconFastForwardBtn from '../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/fast-forward-btn.svg'
import iconImage from '../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/image.svg'
import iconList from '../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/list.svg'
import iconDownload from '../../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/download.svg'

/**
 * 参考模板，不用删除，只要不引用就不会打包进去
 */
const template = `
<div class="h5p-action-mod">
  <span class="h5p-action-btn">
    <sl-icon src="${iconDownload}" title="下载"></sl-icon>
    <span class="h5p-desc">下载</span>
  </span>
  <span class="h5p-action-btn">
    <sl-icon src="${iconImage}" title="截图"></sl-icon>
    <span class="h5p-desc">截图</span>
  </span>

  <sl-dropdown distance="6">
    <span class="h5p-action-btn" slot="trigger">
      <sl-icon src="${iconFastForwardBtn}" title="倍速"></sl-icon>
      <span class="h5p-desc">倍速</span>
    </span>
    <sl-menu>
      <sl-menu-item value="0.5">0.5x</sl-menu-item>
      <sl-menu-item value="0.75">0.75x</sl-menu-item>
      <sl-menu-item value="1">1.0x</sl-menu-item>
      <sl-menu-item value="1.25">1.25x</sl-menu-item>
      <sl-menu-item value="1.5">1.5x</sl-menu-item>
      <sl-menu-item value="2">2.0x</sl-menu-item>
      <sl-menu-item value="3">3.0x</sl-menu-item>
      <sl-menu-item value="4">4.0x</sl-menu-item>
      <sl-menu-item value="8">8.0x</sl-menu-item>
      <sl-menu-item value="16">16.0x</sl-menu-item>
    </sl-menu>
  </sl-dropdown>

  <sl-dropdown distance="6">
    <span class="h5p-action-btn" slot="trigger">
      <sl-icon src="${iconList}" title="菜单"></sl-icon>
      <span class="h5p-desc">菜单</span>
    </span>
    <sl-menu>
      <sl-menu-item value="cut">
        画面滤镜
        <sl-menu slot="submenu">
          <sl-menu-item value="">图像复位</sl-menu-item>
          <sl-menu-item value="">增加亮度</sl-menu-item>
          <sl-menu-item value="">减少亮度</sl-menu-item>
          <sl-menu-item value="">增加对比度</sl-menu-item>
          <sl-menu-item value="">减少对比度</sl-menu-item>
          <sl-menu-item value="">增加饱和度</sl-menu-item>
          <sl-menu-item value="">减少饱和度</sl-menu-item>
          <sl-menu-item value="">增加色相</sl-menu-item>
          <sl-menu-item value="">减少色相</sl-menu-item>
          <sl-menu-item value="">增加模糊度</sl-menu-item>
          <sl-menu-item value="">减少模糊度</sl-menu-item>
        </sl-menu>
      </sl-menu-item>
      <sl-menu-item value="">
        旋转镜像
        <sl-menu slot="submenu">
          <sl-menu-item value="">画面旋转 90 度</sl-menu-item>
          <sl-menu-item value="">画面水平镜像翻转</sl-menu-item>
          <sl-menu-item value="">画面垂直镜像翻转</sl-menu-item>
        </sl-menu>
      </sl-menu-item>
      <sl-menu-item value="">
        画面移动
        <sl-menu slot="submenu">
          <sl-menu-item value="">画面向右移动10px</sl-menu-item>
          <sl-menu-item value="">画面向左移动10px</sl-menu-item>
          <sl-menu-item value="">画面向上移动10px</sl-menu-item>
          <sl-menu-item value="">画面向下移动10px</sl-menu-item>
        </sl-menu>
      </sl-menu-item>
      <sl-menu-item value="">
        更多操作
        <sl-menu slot="submenu">
          <sl-menu-item value="closeUI">临时移除当前UI栏</sl-menu-item>
          <sl-menu-item value="closeUI">永久关闭UI栏</sl-menu-item>
          <sl-menu-item value="closeUI">禁用脚本</sl-menu-item>
          <sl-menu-item value="closeUI">禁用所有快捷键</sl-menu-item>
          <sl-menu-item value="openConfigEditor">打开配置编辑器</sl-menu-item>
        </sl-menu>
      </sl-menu-item>
      <sl-divider></sl-divider>
      <sl-menu-item value="hotkey">快捷键</sl-menu-item>
      <sl-menu-item>
        设置
        <sl-menu slot="submenu">
          <sl-menu-item value="homepage">还原全局默认配置</sl-menu-item>
          <sl-menu-item value="GitHub">禁用默认播放进度控制逻辑</sl-menu-item>
          <sl-menu-item value="issue">禁用默认音量控制逻辑</sl-menu-item>
          <sl-menu-item value="issue">允许默认速度调节逻辑</sl-menu-item>
          <sl-menu-item value="issue">开启音量增益能力</sl-menu-item>
          <sl-menu-item value="issue">禁用跨域控制能力</sl-menu-item>
          <sl-menu-item value="issue">开启实验性功能</sl-menu-item>
          <sl-menu-item value="issue">开启外部自定义能力</sl-menu-item>
          <sl-menu-item value="issue">开启调试能力</sl-menu-item>
          <sl-menu-item value="openConfigEditor">打开配置编辑器</sl-menu-item>
        </sl-menu>
      </sl-menu-item>
      <sl-menu-item>
        关于
        <sl-menu slot="submenu">
          <sl-menu-item value="homepage">官网</sl-menu-item>
          <sl-menu-item value="GitHub">GitHub</sl-menu-item>
          <sl-menu-item value="issue">问题反馈</sl-menu-item>
          <sl-menu-item value="issue">添加群聊</sl-menu-item>
          <sl-menu-item value="issue">打赏作者</sl-menu-item>
        </sl-menu>
      </sl-menu-item>
      <sl-menu-item>
        更多
        <sl-menu slot="submenu">
          <sl-menu-item value="homepage">音视频合并脚本</sl-menu-item>
          <sl-menu-item value="GitHub">视频转换工具</sl-menu-item>
        </sl-menu>
      </sl-menu-item>
    </sl-menu>
  </sl-dropdown>
</div>
`

export const menuConfig = [
  {
    title: '下载',
    desc: '下载当前视频',
    icon: iconDownload,
    action: 'mediaDownload'
  },
  {
    title: '截图',
    desc: '截取当前视频',
    icon: iconImage,
    action: 'capture'
  },
  {
    title: '倍速',
    desc: '选择播放倍速',
    icon: iconFastForwardBtn,
    action: 'speed',
    dropdownMenu: [
      {
        title: '0.5x',
        desc: '0.5倍速',
        action: 'setPlaybackRate',
        value: 0.5
      },
      {
        title: '0.75x',
        desc: '0.75倍速',
        action: 'setPlaybackRate',
        value: 0.75
      },
      {
        title: '1.0x',
        desc: '1倍速',
        action: 'setPlaybackRate',
        value: 1
      },
      {
        title: '1.25x',
        desc: '1.25倍速',
        action: 'setPlaybackRate',
        value: 1.25
      },
      {
        title: '1.5x',
        desc: '1.5倍速',
        action: 'setPlaybackRate',
        value: 1.5
      },
      {
        title: '2.0x',
        desc: '2倍速',
        action: 'setPlaybackRate',
        value: 2
      },
      {
        title: '3.0x',
        desc: '3倍速',
        action: 'setPlaybackRate',
        value: 3
      },
      {
        title: '4.0x',
        desc: '4倍速',
        action: 'setPlaybackRate',
        value: 4
      },
      {
        title: '8.0x',
        desc: '8倍速',
        action: 'setPlaybackRate',
        value: 8
      },
      {
        title: '16.0x',
        desc: '16倍速',
        action: 'setPlaybackRate',
        value: 16
      }
    ]
  },
  {
    title: '菜单',
    desc: '更多功能',
    icon: iconList,
    action: 'more',
    dropdownMenu: [
      {
        title: '画面滤镜',
        desc: '调整画面效果',
        action: 'filter',
        subMenu: [
          {
            title: '图像复位',
            desc: '图像复位',
            action: 'resetFilterAndTransform',
            value: ''
          },
          {
            title: '增加亮度',
            desc: '增加亮度',
            action: 'setBrightnessUp',
            value: 0.1
          },
          {
            title: '减少亮度',
            desc: '减少亮度',
            action: 'setBrightnessDown',
            value: -0.1
          },
          {
            title: '增加对比度',
            desc: '增加对比度',
            action: 'setContrastUp',
            value: 0.1
          },
          {
            title: '减少对比度',
            desc: '减少对比度',
            action: 'setContrastDown',
            value: -0.1
          },
          {
            title: '增加饱和度',
            desc: '增加饱和度',
            action: 'setSaturationUp',
            value: 0.1
          },
          {
            title: '减少饱和度',
            desc: '减少饱和度',
            action: 'setSaturationDown',
            value: -0.1
          },
          {
            title: '增加色相',
            desc: '增加色相',
            action: 'setHueUp',
            value: 1
          },
          {
            title: '减少色相',
            desc: '减少色相',
            action: 'setHueDown',
            value: -1
          },
          {
            title: '增加模糊度',
            desc: '增加模糊度',
            action: 'setBlurUp',
            value: 1
          },
          {
            title: '减少模糊度',
            desc: '减少模糊度',
            action: 'setBlurDown',
            value: -1
          }
        ]
      },
      {
        title: '旋转镜像',
        desc: '旋转或镜像画面',
        action: 'rotateAndMirror',
        subMenu: [
          {
            title: '画面旋转 90 度',
            desc: '画面旋转 90度',
            action: 'setRotate',
            value: ''
          },
          {
            title: '画面水平镜像翻转',
            desc: '画面水平镜像翻转',
            action: 'setMirror',
            value: ''
          },
          {
            title: '画面垂直镜像翻转',
            desc: '画面垂直镜像翻转',
            action: 'setMirror',
            value: true
          }
        ]
      },
      {
        title: '画面移动',
        desc: '移动画面位置',
        action: 'translate',
        subMenu: [
          {
            title: '画面向右移动10px',
            desc: '画面向右移动10px',
            action: 'setTranslateRight',
            value: ''
          },
          {
            title: '画面向左移动10px',
            desc: '画面向左移动10px',
            action: 'setTranslateLeft',
            value: ''
          },
          {
            title: '画面向上移动10px',
            desc: '画面向上移动10px',
            action: 'setTranslateUp',
            value: ''
          },
          {
            title: '画面向下移动10px',
            desc: '画面向下移动10px',
            action: 'setTranslateDown',
            value: ''
          }
        ]
      },
      {
        title: '更多操作',
        desc: '更多操作',
        action: 'more',
        subMenu: [
          {
            title: '临时移除当前UI栏',
            desc: '临时移除当前UI栏',
            action: 'closeUI',
            value: 'closeUI'
          },
          {
            title: '永久关闭UI栏',
            desc: '永久关闭UI栏',
            action: 'closeUI',
            value: 'closeUI'
          },
          {
            title: '禁用脚本',
            desc: '禁用脚本',
            action: 'disableScript',
            value: ''
          },
          {
            title: '禁用所有快捷键',
            desc: '禁用所有快捷键',
            action: 'disableHotkey',
            value: ''
          },
          {
            title: '打开配置编辑器',
            desc: '打开配置编辑器',
            action: 'openConfigEditor',
            value: 'openConfigEditor'
          }
        ]
      },
      {
        divider: true
      },
      {
        title: '快捷键',
        desc: '快捷键',
        action: 'hotkey'
      },
      {
        title: '设置',
        desc: '设置',
        action: 'setting',
        subMenu: [
          {
            title: '还原全局默认配置',
            desc: '还原全局默认配置',
            action: 'restoreGlobalConfig',
            value: ''
          },
          {
            title: '禁用默认播放进度控制逻辑',
            desc: '禁用默认播放进度控制逻辑',
            action: 'disableDefaultProgressControl',
            value: ''
          },
          {
            title: '禁用默认音量控制逻辑',
            desc: '禁用默认音量控制逻辑',
            action: 'disableDefaultVolumeControl',
            value: ''
          },
          {
            title: '允许默认速度调节逻辑',
            desc: '允许默认速度调节逻辑',
            action: 'allowDefaultSpeedControl',
            value: ''
          },
          {
            title: '开启音量增益能力',
            desc: '开启音量增益能力',
            action: 'addVolumeGain',
            value: ''
          },
          {
            title: '禁用跨域控制能力',
            desc: '禁用跨域控制能力',
            action: 'disableCrossDomainControl',
            value: ''
          },
          {
            title: '开启实验性功能',
            desc: '开启实验性功能',
            action: 'openExperimental',
            value: ''
          },
          {
            title: '开启外部自定义能力',
            desc: '开启外部自定义能力',
            action: 'openCustomAbility',
            value: ''
          },
          {
            title: '开启调试能力',
            desc: '开启调试能力',
            action: 'enableDebug',
            value: ''
          },
          {
            title: '打开配置编辑器',
            desc: '打开配置编辑器',
            action: 'openConfigEditor',
            value: ''
          }
        ]
      },
      {
        title: '关于',
        desc: '关于',
        action: 'about',
        subMenu: [
          {
            title: '官网',
            desc: '官网',
            action: 'openHomepage',
            value: ''
          },
          {
            title: 'GitHub',
            desc: 'GitHub',
            action: 'openGitHub',
            value: ''
          },
          {
            title: '问题反馈',
            desc: '问题反馈',
            action: 'issue',
            value: ''
          },
          {
            title: '添加群聊',
            desc: '添加群聊',
            action: 'addChat',
            value: ''
          },
          {
            title: '打赏作者',
            desc: '打赏作者',
            action: 'reward',
            value: ''
          }
        ]
      },
      {
        title: '更多',
        desc: '更多',
        action: 'more',
        subMenu: [
          {
            title: '音视频合并脚本',
            desc: '音视频合并脚本',
            action: 'mergeMedia',
            value: ''
          },
          {
            title: '视频转换工具',
            desc: '视频转换工具',
            action: 'videoConverter',
            value: ''
          }
        ]
      }
    ]
  }
]

/* 写个函数，支持将menuConfig.dropdownMenu的数据构建成sl-menu组件的template */
export function convertDropdownMenuToTemplate (dropdownMenu, isRootMenu = true) {
  const menuItems = dropdownMenu.map(item => {
    if (item.disabled) return ''

    if (item.subMenu) {
      return `
        <sl-menu-item class="h5p-menu-action" value="${item.id || item.value || item.action}" title="${item.desc || item.title}" data-action="${item.action}" data-args='${JSON.stringify(item.args || item.value || null)}'>
          ${item.title}
          <sl-menu slot="submenu">
            ${convertDropdownMenuToTemplate(item.subMenu, false)}
          </sl-menu>
        </sl-menu-item>
      `
    } else if (item.divider) {
      return '<sl-divider></sl-divider>'
    } else {
      return `<sl-menu-item class="h5p-menu-action" value="${item.id || item.value || item.action}" title="${item.desc || item.title}" data-action="${item.action}" data-args='${JSON.stringify(item.args || item.value || null)}'>
        ${item.title}
      </sl-menu-item>
      `
    }
  }).join('')

  return isRootMenu ? `<sl-menu>${menuItems}</sl-menu>` : menuItems
}

/* 写一个函数可以将menuConfig转换成template进行输出 */
export function convertMenuConfigToTemplate (menuConfig) {
  return `
  <div class="h5p-action-mod">
      ${menuConfig.map(item => {
        if (item.disabled) return ''

        const iconHtml = item.icon ? `<sl-icon src="${item.icon}"></sl-icon>` : ''
        if (item.dropdownMenu) {
          return `
            <sl-dropdown distance="6">
              <span class="h5p-action-btn" slot="trigger" title="${item.desc || item.title}" data-action="${item.action}">
                ${iconHtml}
                <span class="h5p-desc">${item.title}</span>
              </span>
              ${convertDropdownMenuToTemplate(item.dropdownMenu)}
            </sl-dropdown>
          `
        } else {
          return `
            <span class="h5p-action-btn h5p-menu-action" title="${item.desc || item.title}"  data-action="${item.action}" data-args='${JSON.stringify(item.args || item.value || null)}'>
              ${iconHtml}
              <span class="h5p-desc">${item.title}</span>
            </span>
          `
        }
      }).join('')
    } 
  </div>
  `
}

export function createMenuTemplate (config = menuConfig || []) {
  return convertMenuConfigToTemplate(config)
}

/**
 * 通过事件委托的方式处理菜单点击事件，减少事件绑定，提升性能
 * @param { Event } event -必选 事件对象
 */
export function menuActionHandler (event, videoElement, h5Player, popup) {
  const target = event.target

  /* 根据target查找是否包含data-action属性，注意这里可能需要使用closest来向上查找 */
  const actionDOM = target.closest('.h5p-menu-action')
  if (!actionDOM) {
    console.log('[menuActionHandler]', '未找到actionDOM', event.target)
    return
  }

  const action = actionDOM.getAttribute('data-action')
  const args = JSON.parse(actionDOM.getAttribute('data-args') || null)

  h5Player.setPlayerInstance(videoElement)

  if (action && h5Player[action] instanceof Function) {
    console.log('[menuActionHandler]', actionDOM, action, args)

    if (action === 'setPlaybackRate') {
      /* 使用UI操作需强行跳过锁检测逻辑 */
      h5Player.setPlaybackRate(args, false, false, true)
    } else {
      h5Player[action](args)
    }

    popup && popup.reposition()
  }
}
