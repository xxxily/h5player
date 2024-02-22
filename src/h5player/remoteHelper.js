/**
 * 跟官网进行互动，以实现以下功能
 * 1、新版本检测 (待实现)
 * 2、脚本安装使用情况统计
 * 3、获取最新的推荐信息
 */

import { isInIframe } from '../libs/utils/index'
import configManager from './configManager'
import { getPageWindow } from './helper'

const remoteHelperUrl = 'https://h5player.anzz.top/h5p-helper/index.html'

const remoteHelper = {
  init () {
    this.remoteHandler()

    /* 减少重复加载和防止循环嵌套 */
    if (isInIframe()) { return false }

    if (!configManager.isGlobalStorageUsable()) { return false }

    const contactRemoteHelperSuccessTime = configManager.getGlobalStorage('contactRemoteHelperSuccessTime')
    let lastContactRemoteHelperTime = configManager.getGlobalStorage('lastContactRemoteHelperTime')
    if (!lastContactRemoteHelperTime) {
      configManager.setGlobalStorage('lastContactRemoteHelperTime', Date.now())
      lastContactRemoteHelperTime = Date.now()
    }

    /**
     * 减少跟远程助手的握手次数
     * 12小时内有成功握手过的话，就不再重复握手
     * 最少间隔1分钟才进行下一次握手
     */
    if (contactRemoteHelperSuccessTime && Date.now() - contactRemoteHelperSuccessTime < 1000 * 60 * 60 * 12) { return false }
    if (Date.now() - lastContactRemoteHelperTime < 1000 * 60) { return false }

    this.establishRemoteConnection()
  },

  establishRemoteConnection () {
    const timeStr = new Date().toISOString().split('T')[0].replace(/-/g, '') + new Date().getHours()
    const iframe = document.createElement('iframe')
    iframe.src = remoteHelperUrl + '?' + timeStr
    iframe.style.cssText = 'width:0; height:0; border:none; visibility:hidden; opacity:0;'
    const insertIframe = () => {
      document.body.appendChild(iframe)
      configManager.setGlobalStorage('lastContactRemoteHelperTime', Date.now())
    }

    if (!document.body || !document.body.appendChild) {
      window.addEventListener('DOMContentLoaded', insertIframe, { once: true })
    } else {
      insertIframe()
    }

    /* 不管握手成功与否，10秒后移除iframe，主动终止跟远程助手的连接 */
    setTimeout(() => { document.body.removeChild(iframe) }, 10000)
  },

  async remoteHandler () {
    if (!location.href.startsWith(remoteHelperUrl) || !configManager.isGlobalStorageUsable()) { return false }

    function syncRemoteData (pageWindow) {
      if (pageWindow.recommendList) {
        configManager.setGlobalStorage('recommendList', pageWindow.recommendList)
      }

      /* 待增加版本对比判断逻辑 */
      if (pageWindow.remoteVersion) {
        configManager.setGlobalStorage('remoteVersion', pageWindow.remoteVersion)
      }

      configManager.setGlobalStorage('contactRemoteHelperSuccessTime', Date.now())
    }

    let checkCount = 0
    function checkRemoteHelperStatus (pageWindow) {
      if (!Array.isArray(pageWindow.recommendList)) {
        if (checkCount < 30) {
          setTimeout(() => {
            checkCount++
            checkRemoteHelperStatus(pageWindow)
          }, 200)
        }

        return
      }

      syncRemoteData(pageWindow)
    }

    const pageWindow = await getPageWindow()
    pageWindow && checkRemoteHelperStatus(pageWindow)
  }
}

export default remoteHelper
