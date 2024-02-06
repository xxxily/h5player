import I18n from '../libs/I18n/index'
import langMessage from './locale/core-lang/index'
import configManager from './configManager'
const i18n = new I18n({
  defaultLanguage: 'en',
  /* 指定当前要是使用的语言环境，默认无需指定，会自动读取 */
  // locale: 'zh-TW',
  languages: langMessage
})

const lang = configManager.get('language')
lang && i18n.changeLanguage(lang)

export default i18n
