/*!
 * @name         rollup.tree.config.js
 * @description  rollup 打包配置列表
 * @version      0.0.1
 * @author       Blaze
 * @date         24/04/2019 14:20
 * @github       https://github.com/xxxily
 */
const uglify = require('rollup-plugin-uglify')
// import { uglify } from 'rollup-plugin-uglify'
const path = require('path')
const resolve = p => {
  return path.resolve(__dirname, '../', p)
}

const confTree = {
  h5player: {
    version: '0.0.1',
    description: 'h5player',
    input: resolve('src/h5player/index.js'),
    output: {
      file: resolve('dist/h5player.js'),
      format: 'es', // 可选值： amd, cjs, es, iife, umd
      name: 'h5player'
    }
  },
  jsonEditor: {
    version: '0.0.1',
    description: 'jsonEditor',
    input: resolve('src/tools/json-editor/index.js'),
    output: {
      file: resolve('src/tools/json-editor/assets/js/main.js'),
      format: 'umd', // 可选值： amd, cjs, es, iife, umd
      name: 'jsonEditorHandler'
    },
    /* 对结果进行压缩 */
    plugins: [
      uglify.uglify()
    ]
  }
}

module.exports = confTree
