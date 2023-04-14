import config from './config'
import crateJsonEditorApi from './crateJsonEditorApi'
import HotkeysRunner from '../../../libs/utils/hotkeysRunner'

const jsonEditor = (async function () {
  let editor = null
  let jsonEditorApi = {}

  async function init () {
    const container = document.getElementById('jsoneditor')
    // https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
    editor = new window.JSONEditor(container, {
      mode: config.editor.mode,
      modes: config.editor.modes,
      search: true,
      mainMenuBar: true,
      navigationBar: true,
      statusBar: true,
      onModeChange: function (newMode, oldMode) {
        console.log('Mode switched from', oldMode, 'to', newMode)
      }
    })
    window.jsonEditor = editor

    jsonEditorApi = crateJsonEditorApi(editor)
    editor.setText(await jsonEditorApi.getDefaultText())
  }

  await init()

  /* 绑定快捷键 */
  const hotkeysRunner = new HotkeysRunner()
  hotkeysRunner.binding({
    el: document.documentElement,
    type: 'keydown',
    hotkeys: config.hotkeys,
    target: jsonEditorApi,
    stopPropagation: true,
    preventDefault: true,
    debug: true,
    // 自定义条件限定回调逻辑
    conditionHandler (condition) {
      if (condition) {
        return true
      }
    }
  })

  // alert('jsonEditor init success!')

  return jsonEditorApi
})()

export default jsonEditor
