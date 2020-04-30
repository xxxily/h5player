const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config/index')

module.exports = {
  assetsPath: function (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory

    return path.posix.join(assetsSubDirectory, _path)
  },
  cssLoaders: function (options) {
    options = options || {}

    const cssLoader = {
      loader: 'css-loader',
      options: {
        sourceMap: options.sourceMap
      }
    }

    const postcssLoader = {
      loader: 'postcss-loader',
      options: {
        sourceMap: options.sourceMap
      }
    }

    const styleLoader = {
      loader: 'style-loader',
      options: {
        insert: (element) => {
          /* 在tampermonkey里无法直接访问页面的window，所以将window挂载到document上 */
          document._win_ = window

          if (!window._h5playerUiCss_) {
            window._h5playerUiCss_ = []
          }
          window._h5playerUiCss_.push(element)
          if (window._h5playerUiCssInsertCallback_ instanceof Function) {
            window._h5playerUiCssInsertCallback_(element)
          }

          document._renderH5playeruiCss_ = function (callback) {
            callback && callback(window._h5playerUiCss_ || [element])
          }
        }
      }
    }

    // generate loader string to be used with extract text plugin
    function generateLoaders (loader, loaderOptions) {
      const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

      if (loader) {
        loaders.push({
          loader: loader + '-loader',
          options: Object.assign({}, loaderOptions, {
            sourceMap: options.sourceMap
          })
        })
      }

      if (options.useStyleLoader) {
        loaders.unshift(styleLoader)
      }

      // Extract CSS when that option is specified
      // (which is the case during production build)
      if (options.extract) {
        loaders.unshift(MiniCssExtractPlugin.loader)
      } else {
        loaders.unshift('vue-style-loader')
      }

      if (options.hotReload) {
        return ['css-hot-loader'].concat(loaders)
      } else {
        return loaders
      }
    }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
      css: generateLoaders(),
      // postcss: generateLoaders(),
      // less: generateLoaders('less'),
      // stylus: generateLoaders('stylus'),
      // styl: generateLoaders('stylus'),
      // sass: generateLoaders('sass', { indentedSyntax: true }),
      scss: generateLoaders('sass')
    }
  },
  // Generate loaders for standalone style files (outside of .vue)
  styleLoaders: function (options) {
    const output = []
    const loaders = module.exports.cssLoaders(options)

    for (const extension in loaders) {
      const loader = loaders[extension]
      output.push({
        test: new RegExp('\\.' + extension + '$'),
        use: loader
      })
    }

    return output
  }
}
