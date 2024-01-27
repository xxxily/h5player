/**
 * rollup的代码包裹插件，支持自定义代码包裹模板，可以在打包时，对代码进行包裹，比如在代码前后加上一些自定义的代码
 * @param {*} options
 * @param {string} options.before - 在代码前加上的代码
 * @param {string} options.after - 在代码后加上的代码 
 * @returns 
 */

function codeWraper (options = {}) {
  const {
    before = '',
    after = '',
    formatFilter = ['iife', 'umd']
  } = options
  return {
    name: 'codeWraper',
    renderChunk (code, chunk, options) {
      /* 如果为iife或者umd格式的代码，需要在代码前后加上自定义的代码 */
      if (formatFilter.includes(options.format)) {
        return before + code + after
      } else {
        return code
      }
    }
  }
}

export default codeWraper