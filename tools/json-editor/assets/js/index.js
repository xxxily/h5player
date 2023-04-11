// create the editor
var container = document.getElementById('jsoneditor')
var editor = new window.JSONEditor(container, {
  // mode: 'view'
  mode: 'tree',
  modes: ['code', 'form', 'text', 'tree', 'view', 'preview'], // allowed modes
  onModeChange: function (newMode, oldMode) {
    console.log('Mode switched from', oldMode, 'to', newMode)
    // editor.set(editor.get())
  }
})

// set json
function setJSON () {
  var json = {
    Array: [1, 2, 3],
    Boolean: true,
    Null: null,
    Number: 123,
    Object: { a: 'b', c: 'd' },
    String: 'Hello World'
  }
  editor.set(json)
}
setJSON()

// get json
function getJSON () {
  var json = editor.get()
  alert(JSON.stringify(json, null, 2))
}

function saveAs (blob, filename) {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename)
  } else {
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
}

function saveJSON () {
  let fname = window.prompt('Save as...')

  // Check json extension in file name
  if (fname.indexOf('.') === -1) {
    fname = fname + '.json'
  } else {
    if (fname.split('.').pop().toLowerCase() === 'json') {
      // Nothing to do
    } else {
      fname = fname.split('.')[0] + '.json'
    }
  }
  const blob = new Blob([editor.getText()], { type: 'application/json;charset=utf-8' })
  saveAs(blob, fname)
}

/* 监听ctrl+s快捷键保存文件 */
document.documentElement.addEventListener('keydown', function (e) {
  if (e.keyCode === 83 && e.ctrlKey) {
    e.preventDefault()
    e.stopPropagation()
    saveJSON()
    alert('saveJSON')
  }
}, true)
