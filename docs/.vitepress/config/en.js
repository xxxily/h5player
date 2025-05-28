import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'HTML5 video enhancement script',

  themeConfig: {
    nav: [
      { text: 'Docs', link: '/home/quickStart' },
      { text: 'Reward the Author', link: '/home/rewardTheAuthor' },
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
      },
      {
        text: 'anzz.top',
        items: [
          {
            text: 'anzz',
            items: [
              { text: 'anzz.top', link: 'https://anzz.top', target: '_blank' },
              { text: 'ai.anzz.top', link: 'https://ai.anzz.top', target: '_blank' },
              { text: 'code-flux.anzz.top', link: 'https://code-flux.anzz.top', target: '_blank' },
              { text: 'h5player.anzz.top', link: 'https://h5player.anzz.top', target: '_blank' },
              { text: 'broadcast-message.anzz.top', link: 'https://broadcast-message.anzz.top', target: '_blank' },
            ]
          }
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
        ]
      },
      {
        text: 'More',
        items: [
          { text: 'q&a', link: '/home/q&a' },
          { text: 'About Donate', link: '/home/aboutDonate' },
          { text: 'Reward the Author', link: '/home/rewardTheAuthor' },
          { text: 'Changelog', link: '/home/changeLog' },
        ]
      },
      {
        text: 'Other Projects',
        items: [
          { text: 'code-flux', link: 'https://github.com/xxxily/code-flux' },
          { text: 'Hello-AI', link: 'https://github.com/xxxily/hello-ai' },
          { text: 'ffmpeg-script', link: 'https://github.com/xxxily/ffmpeg-script' },
          { text: 'local-appstore-for-1Panel', link: 'https://github.com/xxxily/local-appstore-for-1Panel' },
          { text: 'broadcast-message', link: 'https://github.com/xxxily/broadcast-message' },
        ]
      },
      {
        text: 'anzz',
        items: [
          { text: 'anzz.top', link: 'https://anzz.top', target: '_blank' },
          { text: 'ai.anzz.top', link: 'https://ai.anzz.top', target: '_blank' },
          { text: 'code-flux.anzz.top', link: 'https://code-flux.anzz.top', target: '_blank' },
          { text: 'h5player.anzz.top', link: 'https://h5player.anzz.top', target: '_blank' },
          { text: 'broadcast-message', link: 'https://broadcast-message.anzz.top', target: '_blank' },
        ]
      },
      {
        text: 'Recommendation',
        items: [
          { text: 'AnakinAI', link: 'https://u.anzz.top/anakinai', target: '_blank' },
        ]
      }
    ]
  }
})
