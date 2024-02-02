import { viteBundler } from '@vuepress/bundler-vite'
// import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { shikiPlugin } from '@vuepress/plugin-shiki'
// import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"
import { copyCodePlugin } from '@vuepress/plugin-copy-code'

import { hopeTheme } from "vuepress-theme-hope";
export default defineUserConfig({
  bundler: viteBundler(), // vite
  lang: 'zh-CN', // zh-CN | en-US
  public: 'docs/public', // public dir
  title: '有兽焉粉丝服务器帮助中心', // title
  description: '有兽焉 Minecraft Java 国际版粉丝服务器', // description
  theme: hopeTheme({
    license: 'CC-BY-NC-SA-4.0',
    favicon: '/images/logo.png',
    footer: '<a href="https://beian.miit.gov.cn/">晋ICP备2023005192</a>',
    displayFooter: true,
    home: '/', // home page
    repo: 'ZoruaFox/ysy-fanserver-helppage',
    editLink: true, // true | false
    editLinkText: '在Github编辑此页', // edit link text
    docsRepo: 'https://github.com/ZoruaFox/ysy-fanserver-helppage',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    backToHome: '返回首页', // back to home page text
    contributors: true, // true | false
    openInNewWindow: '在新窗口打开', // open in new window text
    logo: '/images/logo.png', //这个皮皮好可爱（
    // smoothScroll: true,
    hotReload: true,  //DEBUG ONLY!!!!!
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      {
        text: '概述',
        link: '/info/aboutdoc.md',
        collapsible: true,
        prefix: "/info/",
        children: [
          'aboutdoc.md', 
          'basic.md'
        ],
      },
      {
        text: '加入服务器',
        link: '/join/java.md',
        prefix: "/join/",
        collapsible: true,
        children: ['java.md', 'bedrock-ne.md'],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示2级
    navbar: [
      // NavbarItem
      {
        text: '概述',
        children: [
          {
            text: '文档概述',
            link: '/info/aboutdoc.md',
          },
          {
            text: '服务器信息',
            link: '/info/basic.md',
          },
        ],
      },
      {
        text: '加入服务器',
        children: [
          {
            text: 'Java版',
            link: '/join/java.md',
          },
          {
            text: '（尚未支持）基岩版（国际）',
            link: '。',
          },
          {
            text: '基岩版（网易）',
            link: '/join/bedrock-ne.md',
          },
        ],
      },
    ],
    plugins: {
      searchPro: true,
      // searchPro: {
      //   插件选项
      // },
      mdEnhance: {
        // 添加选项卡支持
        tabs: true,
        codetabs: true,
        // 启用下角标功能
        sub: true,
        // 启用上角标
        sup: true,
        tasklist: true,
        figure: true,
        // 启用图片懒加载
        imgLazyload: true,
        // 启用图片标记
        imgMark: true,
        // 启用图片大小
        imgSize: true,
        footnote: true,
      },
      copyCode: {}, // 复制代码插件
    },
  }),

  plugins: [
    shikiPlugin({
      // 配置项
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff', 'python', 'yaml', 'batch', 'cmd', 'java', 'powershell'],
    }),
    // mdEnhancePlugin({
    //   tasklist: true,
    //   // Enable figure
    //   figure: true,
    //   // Enable image lazyload
    //   imgLazyload: true,
    //   // Enable image mark
    //   imgMark: true,
    //   // Enable image size
    //   imgSize: true,
    //   // Enable Footnote
    //   footnote: true,
    // }),
    // docsearchPlugin({
    //   // 配置项
    //   placeholder: '搜索',
    // }),
  ],
})
