import config from './config'
import crateJsonEditorApi from './crateJsonEditorApi'
import HotkeysRunner from '../../../libs/utils/hotkeysRunner'

async function newEditor (opts = {}) {
  let editor = null
  const child = window.open('', '_blank', 'width=1024,height=768')
  child.document.title = 'JSONEditor | New window'
  child.onunload = function () {
    editor = undefined
  }

  /* 将jsonEditor的样式注入到新窗口 */
  const jsonEditorLinks = document.querySelectorAll('head link')
  jsonEditorLinks.forEach((link) => {
    const styles = child.document.createElement('link')
    styles.setAttribute('href', link.href)
    styles.setAttribute('rel', 'stylesheet')
    child.document.head.append(styles)
  })

  const jsonEditorStyles = document.querySelectorAll('head style')
  jsonEditorStyles.forEach((style) => {
    const styles = style.cloneNode(true)
    child.document.head.append(styles)
  })

  /* 解决出现滚动条的问题 */
  child.document.body.style.overflow = 'hidden'

  // for vanilla-picker
  const colorPickerStyles = window.JSONEditor.VanillaPicker.StyleElement.cloneNode(true)
  child.document.head.append(colorPickerStyles)

  const container = child.document.createElement('div')
  child.document.body.append(container)

  const options = Object.assign(opts, {
    modalAnchor: child.document.body
  })

  editor = new window.JSONEditor(container, options)

  const jsonEditorApi = crateJsonEditorApi(editor)
  editor.setText(await jsonEditorApi.getDefaultText())

  /* 绑定快捷键 */
  const hotkeysRunner = new HotkeysRunner(config.hotkeys, child)

  console.log('newEditor', child)

  hotkeysRunner.setCombinationKeysMonitor(child)
  hotkeysRunner.binding({
    el: child.document.documentElement,
    type: 'keydown',
    hotkeys: config.hotkeys,
    target: jsonEditorApi,
    stopPropagation: true,
    preventDefault: true,
    debug: false
  })

  // child.document.documentElement.addEventListener('click', (event) => {
  //   console.log(event)
  //   // alert('click')
  //   jsonEditorApi.toggleFormatter()
  // }, true)

  // child.document.documentElement.addEventListener('keydown', (event) => {
  //   console.log(event)
  //   // alert('click')
  // }, true)

  return editor
}

export default newEditor
