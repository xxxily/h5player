/*!
 * @name         rollup.config.js
 * @description  rollup 打包配置文件
 * @version      0.0.1
 * @author       Blaze
 * @date         15/03/2019 11:54
 * @github       https://github.com/xxxily
 */
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
const alias = require('rollup-plugin-alias')
const path = require('path')
const utils = require('../bin/utils')
const confTree = require('./rollup.tree.config')

/* 日志记录 */
const log = require('../bin/log')
const msgLog = log.create({
  fileNamePrefix: 'rollup_log',
  path: path.resolve(__dirname, '../log')
})

const npmArgv = utils.getNpmConfigArgv()
/* 运行模式，只有开发(dev)或发布(prod)两种模式 */
let runMode = utils.getArgvCode('--mode-', npmArgv) || 'dev'
let projectName = utils.getArgvCode('--proj-', npmArgv) || 'utils'

/* 修正yarn运行模式下的参数获取 */
if (npmArgv.length === 2 && npmArgv[1].includes(':')) {
  const arg = npmArgv[1].split(':')
  runMode = arg[1] || 'dev'
  projectName = arg[0] || 'utils'
}

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
    alias({
      libs: resolve('src/libs')
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ]
}

let rollupConfig = merge(baseConf, projectConf)
if (runMode === 'prod') {
  // 发布模式下，会对脚本进行babel转换
  rollupConfig = merge(rollupConfig, {
    plugins: [
      babel({
        externalHelpers: false,
        runtimeHelpers: true,
        exclude: 'node_modules/**'
      })
    ]
  })
}

export default rollupConfig
