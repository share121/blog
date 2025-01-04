import { defineConfig, UserConfig } from "vitepress";
import { withI18n } from "vitepress-i18n";
import { RssPlugin } from "vitepress-plugin-rss";
import { La51Plugin } from "vitepress-plugin-51la";
import { withMermaid } from "vitepress-plugin-mermaid";
import rssOptions from "./rss.mts";
import { i18nOptions } from "./i18n.mts";
import { genSidebar, reg as orderFileNameReg } from "./sidebar.mts";
import path from "path";
import footnote from "markdown-it-footnote";
import sub from "markdown-it-sub";
import sup from "markdown-it-sup";
import deflist from "markdown-it-deflist";
import abbr from "markdown-it-abbr";
import ins from "markdown-it-ins";
import mark from "markdown-it-mark";
import timeline from "vitepress-markdown-timeline";
import { AnnouncementPlugin } from "vitepress-plugin-announcement";
import container from "markdown-it-container";
import { renderSandbox } from "vitepress-plugin-sandpack";
import postcssPresetEnv from "postcss-preset-env";

const vitepressOptions: UserConfig = {
  markdown: {
    image: {
      lazyLoading: true,
    },
    lineNumbers: true,
    math: true,
    config: (md) => {
      md.use(container, "sandbox", {
        render(tokens, idx) {
          return renderSandbox(tokens, idx, "sandbox");
        },
      })
        .use(footnote)
        .use(mark)
        .use(sub)
        .use(sup)
        .use(ins)
        .use(abbr)
        .use(deflist)
        .use(timeline);
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  title: "share121 的博客",
  description: "share121 的博客",
  cleanUrls: true,
  rewrites(id) {
    return id
      .split("/")
      .map((item, index, arr) => {
        if (index === arr.length - 1) {
          // 这是文件
          const ext = path.extname(item);
          if (ext !== ".md") return item;
          const basename = path.basename(item, ext);
          return basename.replace(orderFileNameReg, "") + ".md";
        } else {
          // 这是文件夹
          return item.replace(orderFileNameReg, "");
        }
      })
      .join("/");
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")
                .at(-1)!
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
    css: {
      postcss: {
        plugins: [postcssPresetEnv()],
      },
    },
    plugins: [
      RssPlugin(rssOptions),
      La51Plugin({
        id: "3Kpm8ZvpPuRpN0Xu",
        ck: "3Kpm8ZvpPuRpN0Xu",
        screenRecord: true,
        autoTrack: true,
        importMode: "async",
      }),
      // AnnouncementPlugin({
      //   title: "公告",
      //   duration: -1,
      //   body: [
      //     { type: "text", content: "👇公众号👇 ---👇 赞赏 👇" },
      //     {
      //       type: "image",
      //       src: "https://cdn.upyun.sugarat.top/mdImg/sugar/85c9554d023be2fcc5aab94effeef033",
      //       style: "display: inline-block;width:46%;padding-right:6px",
      //     },
      //     {
      //       type: "image",
      //       src: "https://cdn.upyun.sugarat.top/mdImg/sugar/54eacf3e730af9c1e3542a4800a422ea",
      //       style: "display: inline-block;width:46%;padding-left:6px",
      //     },
      //   ],
      //   footer: [
      //     {
      //       type: "text",
      //       content: "footer content",
      //     },
      //     {
      //       type: "button",
      //       content: "作者博客",
      //       link: "https://sugarat.top",
      //     },
      //     {
      //       type: "button",
      //       content: "博客主题",
      //       link: "https://theme.sugarat.top",
      //       props: {
      //         type: "success",
      //       },
      //     },
      //   ],
      // }),
    ],
  },
  srcDir: "docs",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "学习",
        items: [
          { text: "语文", link: "/chinese" },
          { text: "数学", link: "/math" },
          { text: "英语", link: "/english" },
          { text: "物理", link: "/physics" },
          { text: "化学", link: "/chemistry" },
          { text: "政治", link: "/politics" },
          { text: "历史", link: "/history" },
        ],
      },
      {
        text: "编程",
        items: [
          { text: "HTML", link: "/codeing/html" },
          { text: "JavaScript", link: "/codeing/javascript" },
          { text: "破解", link: "/codeing/crack" },
          { text: "Python", link: "/codeing/python" },
          { text: "Dart", link: "/codeing/dart" },
          { text: "Nuxt.js", link: "/codeing/nuxtjs" },
          { text: "Solid.js", link: "/codeing/solidjs" },
          { text: "C++", link: "/codeing/cpp" },
          { text: "uTools", link: "/codeing/utools" },
          { text: "Dart 教程", link: "/codeing/dart-tutorials" },
        ],
      },
      { text: "科技", link: "/technology" },
    ],
    sidebar: genSidebar(),
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present share121",
    },
    externalLinkIcon: true,
    editLink: {
      pattern: "https://github.com/share121/blog/edit/main/docs/:path",
    },
    socialLinks: [
      { icon: "bilibili", link: "https://space.bilibili.com/626843261" },
      { icon: "gitee", link: "https://gitee.com/share121" },
      { icon: "gitlab", link: "https://gitlab.com/share121" },
      { icon: "github", link: "https://github.com/share121/blog" },
    ],
  },
};

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withI18n(withMermaid(vitepressOptions), i18nOptions)
);
