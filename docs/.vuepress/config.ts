import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import path from "path";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { removePwaPlugin } from '@vuepress/plugin-remove-pwa'

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "有兽焉粉丝服务器帮助中心",
  description: "有兽焉 Minecraft Java 国际版粉丝服务器",

  public: 'docs/public',

  shouldPrefetch: false,
  theme,

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),
    removePwaPlugin(
      {
        cachePrefix: 'workbox',

      }
    )
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
