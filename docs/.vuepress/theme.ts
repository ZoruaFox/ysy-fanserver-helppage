import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import notFoundMsg from "./notFoundMsg.js";

export default hopeTheme({
  hostname: "https://help.mc.zorua.top/",

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

  markdown: {
    align: true,
    attrs: true,
    component: true,
    demo: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    tabs: true,
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
    highlighter: {
      type: "shiki",
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff', 'python', 'yaml', 'batch', 'cmd', 'java', 'powershell']

    }
  },
  plugins: {
    icon: {
      assets: "iconify",
    },

    copyCode: true,
    slimsearch: true
  },
});
