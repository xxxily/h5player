import { parseURL } from '../../../libs/utils/url'
const urlInfo = parseURL(location.href)
const editorModes = ['code', 'tree', 'form', 'text', 'view', 'preview']
let editorMode = urlInfo.params.mode || 'code'
if (editorModes.indexOf(editorMode) === -1) {
  editorMode = 'code'
}

const config = {
  editor: {
    mode: editorMode,
    modes: editorModes
  },
  hotkeys: [
    {
      desc: '自定义快捷键',
      key: '$mod+k $mod+s',
      command: 'customHotkeys',
      disabled: false
    },
    {
      desc: '保存文件',
      // key: 'ctrl+c',
      key: '$mod+s',
      command: 'save',
      disabled: false
    },
    {
      desc: '打开本地JSON文件',
      key: '$mod+o $mod+o',
      command: 'openLocalFile',
      disabled: false
    },
    {
      desc: '打开URL下的JSON文件',
      key: '$mod+o $mod+u',
      command: 'openURL',
      disabled: false
    },
    {
      desc: '弹窗新开一个JSON编辑器',
      key: '$mod+o $mod+n',
      command: 'openNewEditor',
      disabled: false
    },
    {
      desc: '弹窗新开一个JSON编辑器',
      key: '$mod+shift+m',
      command: 'openNewEditor',
      disabled: false
    },
    {
      desc: '弹窗新开一个JSON编辑器',
      key: '$mod+n',
      command: 'openNewEditor',
      disabled: false
    },
    {
      desc: '格式化JSON',
      key: 'shift+alt+f',
      command: 'formatter',
      disabled: false
    },
    {
      desc: '压缩JSON',
      key: '$mod+alt+f',
      command: 'compress',
      disabled: false
    },
    {
      desc: '格式化JSON和压缩JSON间来回切换',
      key: 'alt+f',
      command: 'toggleFormatter',
      disabled: false
    }
  ]
}

export default config
