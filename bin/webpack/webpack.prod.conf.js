'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config/bin/index')
const htmlTemplates = require('./html-template-factory')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssTextPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: false
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name][chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[name][chunkhash].js')
  },
  /* webpack4 特有的打包优化选项 */
  /* https://webpack.docschina.org/plugins/split-chunks-plugin/ */

  optimization: {
    splitChunks: {
      chunks: 'async', // all async initial
      name: true,
      cacheGroups: {
        /* node_modules 目录下复用率在 minChunks 次以上的块，全部缓存到 vendor */
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          minChunks: 4,
          priority: 100
        },
        /* 缓存公共组件 */
        components: {
          name: 'components',
          test: /[\\/]src[\\/]components[\\/]/,
          /* 此处不能用all,否则会有问题 后面的所有缓存组也一样 */
          chunks: 'async',
          minChunks: 2,
          priority: 98
        },
        /* 将复用率在 minChunks 次以上的块缓存到 bundles */
        commonAll: {
          name: 'bundles_',
          chunks: 'async',
          minChunks: 10,
          priority: 10
        },
        /* 将复用率在 minChunks 次以上的 initial 块缓存到 common */
        common: {
          name: 'common',
          chunks: 'initial',
          /* 符合以下最小共享值的块才缓存 */
          minChunks: 2
        }
      }
    },
    /* 环境变量标识 */
    nodeEnv: 'production',
    /* 压缩打包代码 */
    minimize: true,
    minimizer: [
      new ParallelUglifyPlugin({ // 多进程压缩
        cacheDir: '.cache/',
        uglifyJS: {
          output: {
            comments: false,
            beautify: false
          },
          compress: {
            // 最新warnings选项已弃用
            // warnings: false,
            drop_console: true,
            collapse_vars: true,
            reduce_vars: true
          }
        }
      })
    ]
  },

  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // extract css into its own file
    new MiniCssTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),

    /*
    // 当前多入口不必包含该一级页面
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    */

    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),

    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
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

/* 统一给HTML模板注入内容 */
if (config.build.setInjectContent instanceof Function) {
  htmlTemplates.setInjectContent = config.build.setInjectContent
}

/* 配置HtmlWebpackPlugin */
let htmlWebpackPluginConf = htmlTemplates.extractHtmlWebpackPluginConf(webpackConfig.entry)
htmlWebpackPluginConf.forEach(function (conf) {
  webpackConfig.plugins.push(new HtmlWebpackPlugin(conf))
})

const HtmlTemplateManager = require('./plugin/html-template-manager')
webpackConfig.plugins.push(new HtmlTemplateManager())

module.exports = webpackConfig
