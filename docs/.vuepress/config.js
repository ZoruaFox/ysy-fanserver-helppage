import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default defineUserConfig({
  bundler: viteBundler(), // vite
  theme: defaultTheme({ // @vuepress/theme-default
    colorMode: 'auto', // auto | light | dark
    colorModeSwitch: true, // true | false
    toggleColorMode: '切换主题', 
    sidebar: 'auto',
    toggleSidebar: '切换侧边栏', // toggle sidebar text
    home: '/', // home page
    repo: 'ZoruaFox/ysy-fanserver-helppage',
    editLink: true, // true | false
    editLinkText: '在Github编辑此页', // edit link text
    docsRepo: 'https://github.com/ZoruaFox/ysy-fanserver-helppage',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    lastUpdatedText: '最后更新', // last updated text
    notFound: ['你来到了啥也没有的地方'],
    backToHome: '返回首页', // back to home page text
    contributors: true, // true | false
    contributorsText: '内容贡献者', // contributors text
    tip: '提示', // tip text
    warning: '注意', // warning text
    danger: '警告', // danger text
    openInNewWindow: '在新窗口打开', // open in new window text
  }), 

  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin(),
    nprogressPlugin(),
    shikiPlugin({
      // 配置项
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff', 'python'],
    }),
  ],

  lang: 'zh-CN', // zh-CN | en-US

  public: 'docs/public', // public dir

  title: '有兽焉粉丝服务器帮助页', // title
  description: '阿巴', // description
  head: [
    ['meta', { name: 'favicon', content: '/images/logo.png'}]
  ],


})
