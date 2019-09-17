/*!
 * @name         rollup.tree.config.js
 * @description  rollup 打包配置列表
 * @version      0.0.1
 * @author       Blaze
 * @date         24/04/2019 14:20
 * @github       https://github.com/xxxily
 */
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
  }
}

module.exports = confTree
