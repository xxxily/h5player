/**
 * 简单的i18n库
 */

class I18n {
  constructor (config) {
    console.log(config)
    this._languages = {}
  }

  init (config) {
    this._locale = config.locale
    this._languages = config.languages
  }

  use () {}

  t () {}

  /* 当前语言值 */
  language () {
    return this._locale
  }

  languages () {
    return this._languages
  }

  changeLanguage (locale) {
    if (this._languages[locale]) {
      this._languages = locale
      return locale
    } else {
      return false
    }
  }
}
export default I18n
