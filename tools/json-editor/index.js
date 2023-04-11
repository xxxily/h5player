import { parseURL } from '../../libs/utils/url'

const urlInfo = parseURL(location.href)

const editorModes = ['code', 'tree', 'form', 'text', 'view', 'preview']
let editorMode = urlInfo.params.mode || 'code'
if (editorModes.indexOf(editorMode) === -1) {
  editorMode = 'code'
}

const container = document.getElementById('jsoneditor')
// https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
const editor = new window.JSONEditor(container, {
  mode: editorMode,
  modes: editorModes,
  search: true,
  mainMenuBar: true,
  navigationBar: true,
  statusBar: true,
  onModeChange: function (newMode, oldMode) {
    console.log('Mode switched from', oldMode, 'to', newMode)
  }
})
window.jsonEditor = editor

function getUrlData (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        resolve(jsonData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

async function setJSON () {
  if (urlInfo.params.url) {
    const url = decodeURIComponent(urlInfo.params.url)
    try {
      const json = await getUrlData(url)
      editor.set(json)
      return
    } catch (e) {
      console.error('URL获取到的JSON数据异常：', e, url)
      alert(`URL获取到的JSON数据异常：${url}  ${e}`)
    }
  }

  if (urlInfo.params.json) {
    const jsonStr = decodeURIComponent(urlInfo.params.json)
    try {
      const json = JSON.parse(jsonStr)
      editor.set(json)
      return
    } catch (e) {
      console.error('JSON parse error:', e, jsonStr)
      editor.setText(jsonStr)
      alert(`URL参数里的JSON数据格式异常： ${jsonStr}  ${e}`)
    }
  }

  const demoJson = {
    Array: [1, 2, 3],
    Boolean: true,
    Null: null,
    Number: 123,
    Object: { a: 'b', c: 'd' },
    Corlor: '#FF0000',
    String: 'Hello World',
    Hello: '这是JSON示例数据'
  }
  editor.set(demoJson)
}
setJSON()

function getJsonText () {
  return JSON.stringify(editor.get(), null, 2)
}

function saveAs (blob, filename) {
  var el = document.createElement('a')
  document.body.appendChild(el)
  el.style = 'display: none'
  var url = window.URL.createObjectURL(blob)
  el.href = url
  el.download = filename
  el.click()

  window.URL.revokeObjectURL(url)
  document.body.removeChild(el)
}

function saveJSON () {
  /* 允许外部自定义保存方法 */
  if (window.jsonEditorSaveHandler instanceof Function) {
    window.jsonEditorSaveHandler(editor)
    return
  }

  let fname = window.prompt('要保存的文件名：')

  if (fname.indexOf('.') === -1) {
    fname = fname + '.json'
  } else {
    if (fname.split('.').pop().toLowerCase() === 'json') {
      // Nothing to do
    } else {
      fname = fname.split('.')[0] + '.json'
    }
  }

  let jsonText = editor.getText()
  try {
    jsonText = getJsonText()
  } catch (e) {
    if (confirm('JSON 格式错误，继续保存？')) {
      jsonText = editor.getText()
    } else {
      return
    }
  }

  const blob = new Blob([jsonText], { type: 'application/json;charset=utf-8' })
  saveAs(blob, fname)
}

/* 监听ctrl+s快捷键保存文件 */
document.documentElement.addEventListener('keydown', function (e) {
  if (e.keyCode === 83 && e.ctrlKey) {
    e.preventDefault()
    e.stopPropagation()
    saveJSON()
  }
}, true)
