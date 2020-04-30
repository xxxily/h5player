const path = require('path')
const utils = require('./utils')
const rootPath = require('./rootPath')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

/* webpack基本配置 */
const webpackConfig = {
  context: path.join(rootPath, 'src/h5player/ui/'),
  entry: path.join(rootPath, 'src/h5player/ui/index.js'),
  output: {
    path: path.join(rootPath, 'dist/'),
    filename: 'h5player-ui.js',
    library: 'h5playerUi',
    /* 移除default字段，见：https://twindy.org/webpackda-bao-umdde-exportwen-ti/ */
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  externals: {
    vue: 'Vue'
  },
  /* 解析模块请求的选项 */
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {}
  },
  module: {
    /* 模块规则（配置 loader、解析器等选项） */
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          transformAssetUrls: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      // {
      //   test: /\.(scss|sass)$/,
      //   loaders: [
      //     'css-hot',
      //     'vue-style-loader',
      //     'style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 30000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

module.exports = webpackConfig
