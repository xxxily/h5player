import {
  fakeUA,
  userAgentMap
} from '../libs/utils/index'

/* ua伪装配置 */
export const fakeConfig = {
  // 'tv.cctv.com': userAgentMap.iPhone.chrome,
  // 'v.qq.com': userAgentMap.iPad.chrome,
  'open.163.com': userAgentMap.iPhone.chrome,
  'm.open.163.com': userAgentMap.iPhone.chrome
}

export function setFakeUA (ua) {
  const host = window.location.host
  ua = ua || fakeConfig[host]

  /**
   * 动态判断是否需要进行ua伪装
   * 下面方案暂时不可用
   * 由于部分网站跳转至移动端后域名不一致，形成跨域问题
   * 导致无法同步伪装配置而不断死循环跳转
   * eg. open.163.com
   * */
  // let customUA = window.localStorage.getItem('_h5_player_user_agent_')
  // debug.log(customUA, window.location.href, window.navigator.userAgent, document.referrer)
  // if (customUA) {
  //   fakeUA(customUA)
  //   alert(customUA)
  // } else {
  //   alert('ua false')
  // }

  ua && fakeUA(ua)
}
