import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Enryh Wiki',
  description: '一个基于 VuePress 的文档网站',
  
  // 根据 Amplify 部署环境设置 base URL
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started.md' },
            { text: '配置', link: '/guide/configuration.md' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            { text: '介绍', link: '/api/' },
            { text: '端点', link: '/api/endpoints.md' },
          ],
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  
  bundler: viteBundler(),
})