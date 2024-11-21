import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://help.mc.zorua.top/",

  // author: {
  //   name: "Mr.Hope",
  //   url: "https://mister-hope.com",
  // },

  iconAssets: "iconify",

  logo: "/images/logo.png",

  repo: "ZoruaFox/ysy-fanserver-helppage",

  editLink: true,

  license: 'CC-BY-NC-SA-4.0',

  docsRepo: 'https://github.com/ZoruaFox/ysy-fanserver-helppage',
  docsBranch: 'master',
  docsDir: "docs",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: '<a href="https://beian.miit.gov.cn/">晋ICP备2023005192</a>',

  displayFooter: true,

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  routeLocales:{
    notFoundMsg:[
      "某燕子：文档好累不想写",
      "白给：这个Logo的皮皮好可爱（",
      "兄弟，紫灵不错，摸摸",
      "某位的下界合金铲叕找不到了",
      "豆皮可以吃吗？",
      "/nuke",
      "燕子给我一颗核弹谢谢（？）",
      "糟糕！页面被猫猫叼走了！",
      "你收到的每一颗核弹都是燕门降下的神罚",
      "群狂暴啃啃组长竞选中",
      "皮皮吃了你的掉落物 快说谢谢皮皮",
      "猫猫：喵喵喵？",
      "谁给服务器喂点内存条awa",
      "其实文档是可以读的（目移",
      "小白给好香！啃！（一个文档被当做档啃牌啃碎了）",
      "你知道吗，这个界面是一个界面",
      "114514年后建材收购就可以放竹子啦！"
  ]
  },

  plugins: {
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.

    // All features are enabled for demo, only preserve features you need here
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },

    // markdownMath: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    // This features is enabled for demo, only preserve if you need it
    markdownTab: true,

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,
    },
    copyCode: {},
    shiki: {
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff', 'python', 'yaml', 'batch', 'cmd', 'java', 'powershell']
    },

    searchPro: {},
    pwa: {
      showInstall: true,
      favicon: '/images/favicon/favicon.ico',
      manifest: {
        icons: [
          {
            "sizes": "192x192",
            "src": "/images/favicon/android-chrome-192x192.png",
            "type": "image/png"
          },
          {
            "sizes": "512x512",
            "src": "/images/favicon/android-chrome-512x512.png",
            "type": "image/png"
          }
        ]
      },
      apple: {
        icon: '/images/favicon/apple-touch-icon.png',
        statusBarColor: '#46bd87',
      }
    }
  },
});
