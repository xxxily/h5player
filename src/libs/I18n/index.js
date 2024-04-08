/**
 * 简单的i18n库
 */

class I18n {
  constructor (config) {
    this._languages = {}
    this._locale = this.getClientLang()
    this._defaultLanguage = ''
    this.init(config)
  }

  init (config) {
    if (!config) return false

    const t = this
    t._locale = config.locale || t._locale
    /* 指定当前要是使用的语言环境，默认无需指定，会自动读取 */
    t._languages = config.languages || t._languages
    t._defaultLanguage = config.defaultLanguage || t._defaultLanguage
  }

  use () {}

  t (path) {
    const t = this
    let result = t.getValByPath(t._languages[t._locale] || {}, path)

    /* 版本回退 */
    if (!result && t._locale !== t._defaultLanguage) {
      result = t.getValByPath(t._languages[t._defaultLanguage] || {}, path)
    }

    return result || ''
  }

  /* 当前语言值 */
  language () {
    return this._locale
  }

  languages () {
    return this._languages
  }

  changeLanguage (locale) {
    if (this._languages[locale]) {
      this._locale = locale
      return locale
    } else {
      return false
    }
  }

  /**
   * 给出特定的语言环境，判断是否匹配当前设定的语言环境
   * @param {String | Array} lang -必选 语言环境
   */
  isMatchCurLang (lang) {
    const curLang = this.language() || ''

    /* 兼容各种可能的语言配置写法，假如当前设定为：zh-CN，则给定的lang中包含zh-CN、zhCN、zh_CN、zh，都认为是匹配的 */
    const curLang2 = curLang.replace('-', '')
    const curLang3 = curLang.replace('-', '_')
    const curLang4 = curLang.split('-')[0]

    if (lang && !Array.isArray(lang)) { lang = [lang] }
    return lang.includes(curLang) || lang.includes(curLang2) || lang.includes(curLang3) || lang.includes(curLang4)
  }

  /**
   * 根据文本路径获取对象里面的值
   * @param obj {Object} -必选 要操作的对象
   * @param path {String} -必选 路径信息
   * @returns {*}
   */
  getValByPath (obj, path) {
    path = path || ''
    const pathArr = path.split('.')
    let result = obj

    /* 递归提取结果值 */
    for (let i = 0; i < pathArr.length; i++) {
      if (!result) break
      result = result[pathArr[i]]
    }

    return result
  }

  /* 获取客户端当前的语言环境 */
  getClientLang () {
    return navigator.languages ? navigator.languages[0] : navigator.language
  }
}

/* 使用demo */
// const i18n = new I18n({
//   defaultLanguage: 'zh',
//   locale: 'en',
//   languages: {
//     zh: {
//       demo: '11111',
//       test: '111112'
//     },
//     en: {
//       demo: '2222222222',
//       aaa: {
//         bbb: '111111'
//       }
//     }
//   }
// })
// console.log(i18n.t('test'))

export default I18n
