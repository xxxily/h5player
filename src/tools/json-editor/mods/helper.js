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

function getJsonText (editor) {
  return JSON.stringify(editor.get(), null, 2)
}

function saveJSON (editor) {
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
    jsonText = getJsonText(editor)
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

export { getUrlData, saveAs, getJsonText, saveJSON }
