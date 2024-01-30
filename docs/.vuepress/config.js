import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',

  base: '/YsServer-HelpPage-New/',

  title: '有兽焉粉丝服务器帮助页',
  description: '阿巴',

  bundler: viteBundler(),
  theme: defaultTheme(),
})