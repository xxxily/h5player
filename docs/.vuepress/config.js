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

    smoothScroll: false
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
  ]
}