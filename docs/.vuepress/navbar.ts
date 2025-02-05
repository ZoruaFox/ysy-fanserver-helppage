import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    "text": "概述",
    "children": [
      {
        "text": "文档概述",
        "link": "/info/aboutdoc.md"
      },
      {
        "text": "服务器信息",
        "link": "/info/basic.md"
      }
    ]
  },
  {
    "text": "加入服务器",
    "children": [
      {
        "text": "Java版",
        "link": "/join/java.md"
      },
      {
        "text": "(Alpha)基岩版（国际）",
        "link": "/join/bedrock.md"
      },
      {
        "text": "基岩版（网易）",
        "link": "/join/bedrock-ne.md"
      }
    ]
  },
  {
    "text": "服务器玩法",
    "children": [
      {
        "text": "注册与登录",
        "link": "/authme.md"
      },
      {
        "text": "皮肤设置",
        "link": "/skin.md"
      },
      {
        "text": "基础指令集",
        "link": "/playercommands.md"
      },
      {
        "text": "经济体系",
        "link": "/economy/basic.md"
      },
      {
        "text": "领地",
        "link": "/feature/dominion.md"
      },
      {
        "text": "QQ群互通",
        "link": "/feature/qq.md"
      }
    ]
  },
  {
    "text": "FAQ",
    "link": "/faq.md"
  },
  {
    "text": "实用链接",
    "children": [
      {
        "text": "封禁记录",
        "link": "https://ban.mc.zorua.top"
      },
      {
        "text": "状态监控",
        "link": "https://jiankong.zorua.top"
      },
      {
        "text": "皮肤站",
        "link": "https://skin.mc.zorua.top"
      },
    ]
  }
]);
