import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'

export const shared = defineConfig({
  title: 'h5player',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

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
      copyright: 'Copyright © 2024-present Blaze'
    },
  }
})
