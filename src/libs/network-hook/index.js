/*!
 * @name         fetch-proxy.js
 * @description  fetch请求hook，用法保持跟 https://github.com/wendux/Ajax-hook 的xhr-proxy一致，以便支持fetch请求的监听和修改
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/05/20 16:18
 * @github       https://github.com/xxxily
 */

import { proxy, unProxy } from '../ajax-hook/xhr-proxy'
import { fetchProxy, unFetchProxy } from './fetch-proxy'

function networkProxy (proxyConf = {}, win) {
  proxy(proxyConf, win)
  fetchProxy(proxyConf, win)
}

function unNetworkProxy (win) {
  unProxy(win)
  unFetchProxy(win)
}

export { fetchProxy, unFetchProxy, networkProxy, unNetworkProxy }
