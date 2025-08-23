import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'

console.log('process.env.BASEPATH:', process.env.BASEPATH || '/')

export const shared = defineConfig({
  title: 'h5player',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['script', { defer: true, src: 'https://msc.anzz.site/script.js', 'data-website-id': '77662e82-199d-42ea-ad10-c02922dd7336' }]
  ],

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  base: process.env.BASEPATH || '/',

  outDir: '../dist/h5player-docs',
  themeConfig: {
    logo: '/assets/img/logo.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xxxily/h5player' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          ...zhSearch,
        }
      }
    },

    footer: {
      message: 'Released under the GPL License.',
      copyright: 'Copyright © 2025-present Blaze'
    },
  }
})
