import { defineConfig, UserConfig } from "vitepress";
import { withI18n } from "vitepress-i18n";
import { RssPlugin } from "vitepress-plugin-rss";
import { La51Plugin } from "vitepress-plugin-51la";
import { withMermaid } from "vitepress-plugin-mermaid";
import rssOptions from "./rss.ts";
import { i18nOptions } from "./i18n.ts";
import { genSidebar, rewrites2 } from "./sidebar.ts";
import footnote from "markdown-it-footnote";
// @ts-ignore
import sub from "markdown-it-sub";
// @ts-ignore
import sup from "markdown-it-sup";
// @ts-ignore
import deflist from "markdown-it-deflist";
// @ts-ignore
import abbr from "markdown-it-abbr";
// @ts-ignore
import ins from "markdown-it-ins";
// @ts-ignore
import mark from "markdown-it-mark";
import timeline from "vitepress-markdown-timeline";
// import { AnnouncementPlugin } from "vitepress-plugin-announcement";
import container from "markdown-it-container";
import { renderSandbox } from "vitepress-plugin-sandpack";
import postcssPresetEnv from "postcss-preset-env";
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";

const vitepressOptions: UserConfig = {
  markdown: {
    // @ts-ignore
    codeTransformers: [transformerTwoslash()],
    image: {
      lazyLoading: true,
    },
    lineNumbers: true,
    math: true,
    config: (md) => {
      md.use(footnote)
        .use(mark)
        .use(sub)
        .use(sup)
        .use(ins)
        .use(abbr)
        .use(deflist)
        .use(timeline)
        .use(container, "sandbox", {
          render(tokens: any[], idx: number) {
            return renderSandbox(tokens, idx, "sandbox");
          },
        });
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
  rewrites: rewrites2,
  vite: {
    optimizeDeps: {
      exclude: [
        "@nolebase/vitepress-plugin-enhanced-readabilities/client",
        "vitepress",
        "@nolebase/ui",
      ],
    },
    ssr: {
      noExternal: [
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/ui",
        "@nolebase/vitepress-plugin-highlight-targeted-heading",
      ],
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
      GitChangelog({
        // 填写在此处填写您的仓库链接
        repoURL: () => "https://github.com/share121/blog",
      }),
      GitChangelogMarkdownSection(),
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
          { text: "语文", link: "/chinese/" },
          { text: "数学", link: "/math/" },
          { text: "英语", link: "/english/" },
          { text: "物理", link: "/physics/" },
          { text: "化学", link: "/chemistry/" },
          { text: "政治", link: "/politics/" },
          { text: "历史", link: "/history/" },
        ],
      },
      {
        text: "编程",
        items: [
          { text: "HTML", link: "/codeing/html/" },
          { text: "JavaScript", link: "/codeing/javascript/" },
          { text: "破解", link: "/codeing/crack/" },
          { text: "Python", link: "/codeing/python/" },
          { text: "Dart", link: "/codeing/dart/" },
          { text: "Nuxt.js", link: "/codeing/nuxtjs/" },
          { text: "Solid.js", link: "/codeing/solidjs/" },
          { text: "C++", link: "/codeing/cpp/" },
          { text: "uTools", link: "/codeing/utools/" },
          { text: "Dart 教程", link: "/codeing/dart-tutorials/" },
          { text: "Go", link: "/codeing/go/" },
        ],
      },
      { text: "科技", link: "/technology/" },
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
      { icon: "gitlab", link: "https://gitlab.com/share121/blog" },
      { icon: "github", link: "https://github.com/share121/blog" },
    ],
  },
};

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withI18n(withMermaid(vitepressOptions), i18nOptions)
);
