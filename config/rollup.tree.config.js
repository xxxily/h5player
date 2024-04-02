/*!
 * @name         rollup.tree.config.js
 * @description  rollup 打包配置列表
 * @version      0.0.1
 * @author       Blaze
 * @date         24/04/2019 14:20
 * @github       https://github.com/xxxily
 */

// import { uglify } from 'rollup-plugin-uglify'
import terser from '@rollup/plugin-terser'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import codeWraper from './rollup.codeWraper.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const resolve = p => {
  return path.resolve(__dirname, '../', p)
}

// https://rollupjs.org/configuration-options
const confTree = {
  h5player: {
    input: resolve('src/h5player/index.js'),
    output: {
      file: resolve('dist/h5player.user.js'),
      format: 'es', // 可选值： amd, cjs, es, iife, umd
      name: 'h5player',
      /* 使用内联动态导入，让打包文件始终保持只有一个文件 */
      inlineDynamicImports: true
    }
  },
  h5playerUI: {
    input: resolve('src/h5player/ui/h5playerUI.js'),
    output: {
      file: resolve('src/h5player/ui/h5playerUI.es.js'),
      format: 'iife',
      name: 'h5playerUI',
      /* 使用内联动态导入，让打包文件始终保持只有一个文件 */
      inlineDynamicImports: true
    },
    plugins: [
      /**
       * 对输出的代码进行二次包裹，防止直接执行代码
       * 此处将输出的iife代码包裹成一个函数，然后转化成es模块，以便在其他地方引用
       */
      codeWraper({
        before: 'const h5playerUI = function (window) {',
        after: 'return h5playerUI};\nexport default h5playerUI'
      })
    ]
  },
  jsonEditor: {
    input: resolve('src/tools/json-editor/index.js'),
    output: {
      file: resolve('src/tools/json-editor/assets/js/main.js'),
      format: 'umd', // 可选值： amd, cjs, es, iife, umd
      name: 'jsonEditorHandler'
    },
    /* 对结果进行压缩 */
    plugins: [
      // uglify(),
      // rollup官方推荐使用terser进行代码压缩，支持多进程压缩，且支持对es6代码进行压缩
      // https://github.com/rollup/plugins/tree/master/packages/terser
      // https://github.com/terser/terser#minify-options
      terser()
    ]
  }
}

// module.exports = confTree
export default confTree
