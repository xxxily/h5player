/**
  * 检测当前页面是否为 Cloudflare 的 challenge 页面
  * @returns {boolean} 如果是 Cloudflare challenge 页面则返回 true，否则返回 false
  */
export function isCloudflareChallengePage () {
  // 特征1: 检查页面标题是否包含特定文本
  const titleCheck = document.title.includes('Just a moment') ||
                     document.title.includes('Cloudflare') ||
                     document.title.includes('challenge')

  // 特征2: 检查是否存在特定的 meta 标签
  const metaRefreshExists = !!document.querySelector('meta[http-equiv="refresh"]')
  const robotsNoindexExists = !!document.querySelector('meta[name="robots"][content*="noindex"]')

  // 特征3: 检查页面上是否有特定的 DOM 元素或类名
  const mainWrapperExists = !!document.querySelector('.main-wrapper[role="main"]')
  const challengeErrorExists = !!document.querySelector('#challenge-error-text')
  const bodyNoJsClass = document.body && document.body.classList ? document.body.classList.contains('no-js') : false

  // 特征4: 检查页面样式中是否包含特定的 Cloudflare 相关样式
  const hasCloudflareStyling = document.styleSheets.length > 0 &&
                              (document.documentElement.innerHTML.includes('background-image: url(data:image/svg+xml;base64,') ||
                               document.documentElement.innerHTML.includes('challenge'))

  // 至少满足以下条件组合之一才判定为 Cloudflare challenge 页面:
  // 1. 标题特征 + 至少一个 meta 特征
  // 2. 标题特征 + 至少一个 DOM 特征
  // 3. 至少两个 DOM 特征 + 至少一个 meta 特征
  // 4. 样式特征 + 至少一个其他类型的特征

  const metaFeatures = metaRefreshExists || robotsNoindexExists
  const domFeatures = mainWrapperExists || challengeErrorExists || bodyNoJsClass

  return (titleCheck && metaFeatures) ||
         (titleCheck && domFeatures) ||
         ((domFeatures && (mainWrapperExists + challengeErrorExists + (bodyNoJsClass ? 1 : 0) >= 2)) && metaFeatures) ||
         (hasCloudflareStyling && (titleCheck || metaFeatures || domFeatures))
}
