'use strict'
const webpack = require('webpack')
const config = require('./config/index')
const utils = require('./utils')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: config.build.productionSourceMap ? config.build.devtool : false,

  /* webpack4 特有的打包优化选项 */
  /* https://webpack.docschina.org/plugins/split-chunks-plugin/ */
  optimization: {
    /* 环境变量标识 */
    nodeEnv: 'production',
    /* 压缩打包代码 */
    minimize: true
  },
  module: {
    rules: [
      ...utils.styleLoaders({
        useStyleLoader: true,
        hotReload: false,
        extract: false,
        sourceMap: false,
        usePostCSS: false
      })
    ]
  },
  plugins: [
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin()

    // copy custom static assets
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, '../static'),
    //     to: config.build.assetsSubDirectory,
    //     ignore: ['.*']
    //   }
    // ])
  ]
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerPort: 6688
  }))
}

module.exports = webpackConfig
