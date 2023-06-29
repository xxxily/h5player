import config from './config'
import { parseURL } from '../../../libs/utils/url'
import { getUrlData, saveJSON } from './helper'
// import newEditor from './newEditor'
const urlInfo = parseURL(location.href)

function crateJsonEditorApi (editor) {
  return {
    async getDefaultText () {
      let defaultText = {
        Array: [1, 2, 3],
        Boolean: true,
        Null: null,
        Number: 123,
        Object: { a: 'b', c: 'd' },
        Corlor: '#FF0000',
        String: 'Hello World',
        Hello: '这是JSON示例数据'
      }

      if (urlInfo.params.url) {
        const url = decodeURIComponent(urlInfo.params.url)
        try {
          defaultText = await getUrlData(url)
        } catch (e) {
          console.error('URL获取到的JSON数据异常：', e, url)
          alert(`URL获取到的JSON数据异常：${url}  ${e}`)
        }
      }

      if (urlInfo.params.json) {
        const jsonStr = decodeURIComponent(urlInfo.params.json)
        try {
          defaultText = JSON.parse(jsonStr)
        } catch (e) {
          defaultText = jsonStr
          console.error('JSON parse error:', e, jsonStr)
          alert(`URL参数里的JSON数据格式异常： ${jsonStr}  ${e}`)
        }
      }

      if (typeof defaultText === 'object') {
        defaultText = JSON.stringify(defaultText, null, 2)
      }

      return defaultText
    },

    save () {
      saveJSON(editor, urlInfo.params.saveHandlerName)
    },

    formatter () {
      try {
        const json = editor.get()
        const formattedString = JSON.stringify(json, null, 2)
        editor.setText(formattedString)
      } catch (e) {
        alert(`JSON 格式错误，无法格式化： ${e}`)
        console.error('JSON 格式错误，无法格式化：', e)
      }
    },

    compress () {
      try {
        const json = editor.get()
        const formattedString = JSON.stringify(json)
        editor.setText(formattedString)
      } catch (e) {
        alert(`JSON 格式错误，无法压缩： ${e}`)
        console.error('JSON 格式错误，无法压缩：', e)
      }
    },

    toggleFormatter () {
      try {
        const json = editor.get()
        const formattedString = JSON.stringify(json, null, 2)
        const codeSource = editor.getText().trim()
        if (codeSource.length === formattedString.length) {
          const compressedString = JSON.stringify(json)
          editor.setText(compressedString)
        } else {
          editor.setText(formattedString)
        }
      } catch (e) {
        alert(`JSON 格式错误，无法格式化： ${e}`)
        console.error('JSON 格式错误，无法格式化：', e)
      }
    },

    customHotkeys () {
      editor.set(config.hotkeys)
    },

    openURL () {
      const url = prompt('请输入URL地址')
      if (url) {
        getUrlData(url).then(json => {
          editor.set(json)
        }).catch(e => {
          alert(`URL获取到的JSON数据异常：${url}  ${e}`)
          console.error('URL获取到的JSON数据异常：', e, url)
        })
      }
    },

    openLocalFile () {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = 'application/json'
      input.onchange = function () {
        const file = input.files[0]
        if (file) {
          const reader = new FileReader()
          reader.onload = function (e) {
            const json = JSON.parse(e.target.result)
            editor.set(json)
          }
          reader.readAsText(file)
        }
      }
      input.click()
    },

    openNewEditor () {
      /* 通过下面方式打开的新窗口，快捷键、弹窗或其它功能会各种异常，待解决 */
      // newEditor({
      //   mode: config.editor.mode,
      //   modes: config.editor.modes
      // })

      /* 新开子窗口 */
      window.open(location.href, '_blank', 'width=1024,height=768')
    },

    createSaveButton () {
      if (editor.menu.querySelector('.jsoneditor-save')) return

      /* 增加个保存按钮 */
      const saveBtn = document.createElement('button')
      saveBtn.className = 'jsoneditor-save'
      saveBtn.innerText = '💾'
      saveBtn.style = 'background-image: none; border: 1px dashed #aaa; border-radius: 3px;'
      saveBtn.onclick = () => {
        this.save()
      }

      // editor.menu.appendChild(saveBtn)
      editor.menu.insertBefore(saveBtn, editor.menu.firstChild)
    }
  }
}

export default crateJsonEditorApi
