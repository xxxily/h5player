module.exports = {
  title: 'h5player',
  description: 'HTML5视频增强脚本',
  base: '/',
  dest: './dist/h5player-docs',
  head: [
    [
      'script',
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?21c0aa8c6cb74a03025b3c254f1c99cf";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: require('./nav/zh'),
    navbar: true,
    // sidebar: 'auto',
    sidebar: require('./sidebar/zh'),
    displayAllHeaders: true,
    sidebarDepth: 5,
    lastUpdated: 'Last Updated',

    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    prevLinks: true,

    smoothScroll: true
  },
  /* 显示代码的行号 */
  markdown: {
    lineNumbers: true
  },
  /* 只需兼容现代浏览器 */
  evergreen: true,
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }],
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github',
      owner: 'xxxily',
      repo: 'h5player',
      clientId: 'b2787c5555a91423a313',
      clientSecret: 'b1d7a9f103ea218f0ba31d5eeb1b1598d0b0c7a6'
    }]
  ]
}