import Vue from 'vue'
import axios from 'axios'
import VueI18n from 'vue-i18n'

import messages from '@/locale/lang/zh-CN'

Vue.use(VueI18n)

const defLang = 'zh-CN'

/* 定义当前支持的语言列表 */
const langSupport = [
  defLang,
  'en-US'
]

/* 前缀映射表，后面增加语言的时候要维护这个列表 */
const langMap = {
  zh: defLang,
  en: 'en-US'
}

/**
 * 根据提供的lang信息获取当前所能支持的最佳语言信息
 * @param lang （string） -必选 当前所能提供的语言信息
 */
function getLangSupport (lang) {
  let result = lang || defLang
  if (langSupport.includes(lang)) {
    result = lang
  } else {
    const prefix = lang.split('-')[0]
    result = langMap[prefix] || defLang
  }
  return result
}

const loadedLanguages = [defLang]

/* 整个应用的i18n实例 */
const i18n = new VueI18n({
  locale: defLang,
  fallbackLocale: defLang,
  messages: {
    'zh-CN': messages
  }
})

/* 获取客户端当前的语言环境 */
function getClientLang () {
  return navigator.languages ? navigator.languages[0] : navigator.language
}

/* 设置当前应用的语言标识 */
function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

/**
 * 异步加载语言包并应用加载到的语言包
 * @param lang (string) -必选 语言包文件名
 * @param messages (object) -可选 要进行合并的自定义语言信息数据
 * @returns {Promise<any>|Promise<T | never>}
 */
function loadLanguageAsync (lang, messages) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/locale/lang/${lang}`).then(msgs => {
        i18n.setLocaleMessage(lang, msgs.default)
        messages && i18n.mergeLocaleMessage(lang, messages)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}

/* 增加loadLanguageAsync的别名 */
const use = loadLanguageAsync

export {
  i18n,
  defLang,
  langSupport,
  getLangSupport,
  getClientLang,
  loadedLanguages,
  loadLanguageAsync,
  use
}
