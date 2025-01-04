import { RSSOptions } from "vitepress-plugin-rss";

const RssOptions: RSSOptions = {
  title: "share121 的博客",
  baseUrl: "https://s121.top",
  copyright: "Copyright © 2025-present share121",
  description: "share121 的博客",
  language: "zh-CN",
  icon: true,
  authors: [
    {
      name: "share121",
      email: "2854631158@qq.com",
      link: "https://github.com/share121",
    },
  ],
  filename: "feed.rss",
  log: true,
  ignoreHome: true,
};

export default RssOptions;
