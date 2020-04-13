const path = require('path')
const config = {
  /* 开发环境配置 */
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/vp/',
    url: 'vp/module/dynamic.html',

    /* 是否压缩HTML模板页 */
    minifyHtmlTemplate: false,

    /* 服务器相关配置项 */
    host: 'localhost',
    port: 8089,
    useHttps: true,
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
    /* 默认html模板，我们是多应用配置，此配置对我们项目无效 */
    index: path.resolve(__dirname, '../index.html'),
    /* 发布路径 */
    assetsRoot: path.resolve(__dirname, '../dist/publish'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '../',
    /* 生产环境下是否生产SourceMap */
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // 是否展示webpack构建打包之后的分析报告
    bundleAnalyzerReport: process.env.npm_config_report,

    /* 是否压缩HTML模板页 */
    minifyHtmlTemplate: true
  }
}
module.exports = config
