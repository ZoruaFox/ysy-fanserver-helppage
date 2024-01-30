import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

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
    editLinkText: '编辑此页', // edit link text
    docsRepo: 'https://github.com/ZoruaFox/ysy-fanserver-helppage',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    lastUpdated: '最后更新', // last updated text
    notFound: ['页面不存在', '找不到此页面', '404'],
    backToHome: '返回首页', // back to home page text
    contributors: true, // true | false
    contributorsText: '内容贡献者', // contributors text
    tip: '提示', // tip text
    warning: '注意', // warning text
    danger: '警告', // danger text
    
  }), 

  lang: 'zh-CN', // zh-CN | en-US

  public: 'docs/public', // public dir

  title: '有兽焉粉丝服务器帮助页', // title
  description: '阿巴', // description
  head: [
    ['meta', { name: 'favicon', content: '/images/logo.png'}]
  ],
})