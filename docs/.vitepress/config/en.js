import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'HTML5 video enhancement script',

  themeConfig: {
    nav: [
      { text: 'Docs', link: '/home/quickStart' },
      {
        text: 'Related Links',
        ariaLabel: 'Related Links',
        items: [
          {
            text: 'Install',
            items: [
              { text: 'Greasy Fork', link: 'https://greasyfork.org/zh-CN/scripts/381682', target: '_blank' },
              { text: 'GitHub dist', link: 'https://raw.githubusercontent.com/xxxily/h5player/master/dist/h5player.js', target: '_blank' },
            ]
          },
          {
            text: 'Feedback',
            items: [
              { text: 'GitHub Issues', link: 'https://github.com/xxxily/h5player/issues', target: '_blank' },
              { text: 'Greasy Fork Feedback', link: 'https://greasyfork.org/zh-CN/scripts/381682/feedback', target: '_blank' },
            ]
          },
          {
            text: 'Tampermonkey',
            items: [
              { text: 'Tampermonkey - Chrome', link: 'https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo', target: '_blank' },
              { text: 'Tampermonkey - Edge', link: 'https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd', target: '_blank' },
              { text: 'Tampermonkey', link: 'https://www.tampermonkey.net/index.php?browser=chrome&locale=en', target: '_blank' },
            ]
          },
          {
            text: 'More',
            items: [
              { text: 'GitHub.Dev', link: 'https://github.dev/xxxily/h5player', target: '_blank' },
              { text: 'Donate', link: 'https://h5player.anzz.top/assets/img/donate.png', target: '_blank' },
            ]
          },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Quick Start', link: '/home/quickStart' },
          { text: 'Install', link: '/home/install' },
          { text: 'User Manual', link: '/home/feature' },
          { text: 'Custom Configuration', link: '/home/customConfiguration' },
          { text: 'q&a', link: '/home/q&a' },
          { text: 'AboutDonate', link: '/home/aboutDonate' },
          { text: 'Changelog', link: '/home/changeLog' },
        ]
      }
    ]
  }
})
