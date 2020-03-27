const path = require('path')
const rootPath = require('./rootPath')

/* 基本配置项 */
const baseConfig = {
  /* 静态服务器配置 */
  staticService: {
    port: 3086,
    appDir: path.join(__dirname, '../app'),
    staticDir: path.join(rootPath, 'dist'),
    staticPath: '/dist',
    debug: false
  }
}
module.exports = baseConfig
