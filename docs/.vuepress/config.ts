import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "有兽焉粉丝服务器帮助中心",
  description: "有兽焉 Minecraft Java 国际版粉丝服务器",

  public: 'docs/public',

  shouldPrefetch: false,
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
