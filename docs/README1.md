---
containerClass: home
home: true
icon: home
title: 首页
heroImage: images/预合照.png
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: 有兽焉 Minecraft 粉丝服帮助中心
tagline: Minecraft 有兽焉粉丝服务器的帮助文档
actions:
  - text: 阅读帮助文档
    link: /info/aboutdoc.md
    type: primary
  - text: 加入服务器
    link: /join/java.md
    type: secondary

highlights:
  - header: Easy to install
    image: /assets/image/box.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: Run <code>pnpm create vuepress-theme-hope hope-project</code> to create a new project with this theme.
      - title: Run <code>pnpm create vuepress-theme-hope add .</code> in your project root to create a new project with this theme.

  - header: Customizable UI
    description: Customizable outlook with full a11y support.
    image: /assets/image/ui.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/9-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/9-dark.svg
    highlights:
      - title: Dark Mode
        icon: circle-half-stroke
        details: Switch between light and dark modes freely
        link: ./guide/interface/darkmode.html

      - title: Customizable Theme Color
        icon: palette
        details: Set theme color with the brand color and even a picker
        link: ./guide/interface/theme-color.html

      - title: Code Block Themes
        icon: wand-magic-sparkles
        details: Customize code block themes
        link: ./guide/interface/code-theme.html

      - title: More
        icon: ellipsis
        details: RTL layout, print support, fullscreen button, etc.
        link: ./guide/interface/others.html

  - header: Improved layouts
    description: An awesome responsive layout
    image: /assets/image/layout.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    highlights:
      - title: Navbar
        icon: window-maximize
        details: Fully customizable navbar with improved mobile support
        link: ./guide/layout/navbar.html

      - title: Sidebar
        icon: fas fa-window-maximize fa-rotate-270
        details: Generate sidebar based on page headings and file structure
        link: ./guide/layout/sidebar.html

      - title: Slide Page
        icon: person-chalkboard
        details: Adding slide pages to display things you like
        link: ./guide/layout/slides.html

      - title: Other Layout Improvement
        icon: object-group
        details: Improved page nav and new breadcrumb, footer and toc. We also bring you a brand new homepage.
        link: ./guide/layout/

  - header: New features
    image: /assets/image/features.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
    features:
      - title: Catalog Page
        icon: network-wired
        details: Auto generating catalog page and out of box catalog component
        link: ./guide/feature/catalog.html

      - title: Pageviews and Comments
        icon: comment-dots
        details: Pageview statistics and comment support with 4 comment service
        link: ./guide/feature/comment.html

      - title: Article Information
        icon: circle-info
        details: Add author, writing date, reading time, word count and other information to your article
        link: ./guide/feature/page-info.html

      - title: Article Encryption
        icon: lock
        details: Encrypt you articles based on page links, so that only the one you want could see them
        link: ./guide/feature/encrypt.html

      - title: Search
        icon: search
        details: Support docsearch and client search
        link: ./guide/feature/search.html

      - title: Copy Code Blocks
        icon: copy
        details: Copy codes with one click in code blocks
        link: ./guide/feature/copy-code.html

      - title: Image Preview
        icon: image
        details: Support viewing, zooming, sharing your page images like a gallery
        link: ./guide/feature/photo-swipe.html

  - header: Blogging
    description: Create personal blog with theme
    image: /assets/image/blog.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    highlights:
      - title: Blog features
        icon: blog
        details: Listing your articles with their dates, tags and categories
        link: ./guide/blog/intro.html

      - title: Blog homepage
        icon: blog
        details: New blog homepage
        link: ./guide/blog/home.html

      - title: Blogger info
        icon: circle-info
        details: Customize avatar, name, slogan, introduction and social links
        link: ./guide/blog/blogger.html

      - title: Timeline
        icon: clock
        details: Read through blog posts in a timeline
        link: ./guide/blog/timeline.html

  - header: Advanced
    description: Advanced features to improve site SEO and user experience
    image: /assets/image/advanced.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
    highlights:
      - title: SEO Enhancement
        icon: dumbbell
        details: Optimize pages for search engines
        link: ./guide/advanced/seo.html

      - title: Sitemap
        icon: sitemap
        details: Generate a Sitemap for your site
        link: ./guide/advanced/sitemap.html

      - title: Feed
        icon: rss
        details: Generate feed to allow users to subscribe it
        link: ./guide/advanced/feed.html

      - title: PWA
        icon: mobile-screen
        details: Make your site more like an APP
        link: ./guide/advanced/pwa.html


---