import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import notFoundMsg from "./notFoundMsg.js";

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

  contributors: false,
  routeLocales: {
    notFoundMsg: notFoundMsg
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
      update: "force",
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
