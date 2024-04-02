/*!
 * @name         rollup.config.js
 * @description  rollup 打包配置文件
 * @version      0.0.1
 * @author       Blaze
 * @date         15/03/2019 11:54
 * @github       https://github.com/xxxily
 */
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import css from 'rollup-plugin-import-css'
import image from '@rollup/plugin-image'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'
import { babel } from '@rollup/plugin-babel'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import utils from '../bin/utils.js'
import confTree from './rollup.tree.config.js'
import log from '../bin/log.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/* 日志记录 */
const msgLog = log.create({
  fileNamePrefix: 'rollup_log',
  path: path.resolve(__dirname, '../log')
})

/* 运行模式，只有开发(dev)或发布(prod)两种模式 */
const runMode = process.env.MODE || 'prod'
const projectName = process.env.PROJECT_NAME || 'h5player'

const projectConf = confTree[projectName]

if (projectConf) {
  // 补充部分默认输出项
  projectConf.output.format = projectConf.output.format || 'umd'
  projectConf.output.name = projectConf.output.name || projectName
} else {
  msgLog.error('无法正常运行脚本，不存在对应的项目配置')
}

const resolve = p => {
  return path.resolve(__dirname, '../', p)
}

const merge = function (objA, objB) {
  const source = utils.clone(objA)
  const target = utils.clone(objB)
  return utils.mergeObj(source, target, true)
}

/* rollup 打包的公共配置 */
const baseConf = {
  plugins: [
    json(),
    // https://github.com/jleeson/rollup-plugin-import-css
    css({
      /* modules为true时，会将css文件转换成js文件，作为模块引入 */
      modules: true,
      minify: false
    }),
    image(),
    alias({
      entries: {
        utils: resolve('src/libs')
      }
    }),
    // https://github.com/rollup/plugins/tree/master/packages/node-resolve
    nodeResolve(),
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    commonjs({
      // include: 'node_modules/**'
    }),
    // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars
    dynamicImportVars()
  ]
}

let rollupConfig = merge(baseConf, projectConf)

if (!projectName.includes('h5player') && runMode === 'prod') {
  // 发布模式下，会对脚本进行babel转换
  rollupConfig = merge(rollupConfig, {
    plugins: [
      // 注意：babel插件必须放在commonjs插件之后
      // https://github.com/rollup/plugins/tree/master/packages/babel
      babel({
        exclude: 'node_modules/**'
      })
    ]
  })
}

// console.log('当前运行配置：', rollupConfig)
msgLog.log('当前运行配置：')
msgLog.log(rollupConfig)

export default rollupConfig
