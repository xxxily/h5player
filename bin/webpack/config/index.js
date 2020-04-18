const path = require('path')
const config = {
  /* 开发环境配置 */
  dev: {
    assetsSubDirectory: 'dist',
    assetsPublicPath: '/',

    /* 服务器相关配置项 */
    host: 'localhost',
    port: 3036,
    useHttps: false,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: false,

    /* devServer.watchOptions.poll */
    poll: false,

    /* Source Maps devtool */
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    cssSourceMap: true
  },
  /* 生产环境配置 */
  build: {
    /* 发布路径 */
    assetsRoot: path.resolve(__dirname, '../../../dist/'),
    assetsSubDirectory: 'dist',
    assetsPublicPath: '/',
    /* 生产环境下是否生产SourceMap */
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // 是否展示webpack构建打包之后的分析报告
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
module.exports = config
