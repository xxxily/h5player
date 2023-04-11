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
