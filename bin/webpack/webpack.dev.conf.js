const webpack = require('webpack')
const config = require('./config/index')
const merge = require('webpack-merge')
const path = require('path')
const utils = require('./utils')
const rootPath = require('./rootPath')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

/* 跟基础配置信息进行合并，组合出开发环境的配置信息 */
const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,
  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    /* since we use CopyWebpackPlugin. */
    contentBase: false,
    /* 启用Gzip压缩 启用后编译速度会明显变慢 */
    compress: false,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    /* 打开页面 */
    openPage: config.dev.url,
    /* 跨域服务器名单 */
    allowedHosts: [],
    /* 启用https协议 因为测试环境和线上环境都是https协议，必须对应才能进行热更新 */
    https: config.dev.useHttps || false,
    /* 编译错误时在浏览器中显示错误信息 */
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    /* 惰性模式 将不监视文件改动，不想使用自动刷新功能时可设置为true */
    lazy: false,
    /* 代理设置 */
    proxy: config.dev.proxyTable,
    /* 静默模式，减少不必要的信息输出 necessary for FriendlyErrorsPlugin */
    quiet: true,
    watchOptions: {
      poll: config.dev.poll
    },
    before: config.dev.before || function (app) {},
    after: config.dev.after || function (app) {}
  },
  module: {
    rules: [
      ...utils.styleLoaders({
        hotReload: true,
        sourceMap: true,
        useStyleLoader: true,
        extract: false,
        usePostCSS: false
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(rootPath, 'src/h5player/ui/index.html'),
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false
      }
    }),
    /* 使用热替换插件 */
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // console.log(devWebpackConfig.module.rules)
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      const serverConf = devWebpackConfig.devServer
      let host = serverConf.host
      const protocol = serverConf.https ? 'https' : 'http'

      if (host === '0.0.0.0') {
        host = 'localhost'
      }

      const successMessages = [`Your application is running here: ${protocol}://${host}:${port}`]

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: successMessages
        },
        onErrors: config.dev.notifyOnErrors
      }))

      resolve(devWebpackConfig)
    }
  })
})
