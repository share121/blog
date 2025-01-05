import DefaultTheme from "vitepress/theme";
import MyLayout from "./Layout.vue";
import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";
import { nextTick, onMounted, watch } from "vue";
import "./style/index.css";
import ThemedImage from "../components/ThemedImage.vue";
// @ts-ignore
import vitepressNprogress from "vitepress-plugin-nprogress";
import "vitepress-plugin-nprogress/lib/css/index.css";
import "vitepress-markdown-timeline/dist/theme/index.css";
import { Sandbox } from "vitepress-plugin-sandpack";
import "vitepress-plugin-sandpack/dist/style.css";
import "@shikijs/vitepress-twoslash/style.css";
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";
import "@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css";
import "@nolebase/vitepress-plugin-git-changelog/client/style.css";
import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  setup() {
    const route = useRoute();
    const initRoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLSpanElement).style.animationDuration =
              Math.min(
                Math.max((entry.target.textContent || "").length * 0.05, 0.3),
                2
              ) + "s";
            entry.target.classList.add("highlight");
            observer.unobserve(entry.target);
          }
        });
      });
      document.querySelectorAll(".vp-doc mark, .vp-doc h1").forEach((mark) => {
        observer.observe(mark);
      });
    };
    onMounted(initRoom);
    watch(
      () => route.path,
      () => nextTick(initRoom)
    );
  },
  enhanceApp(ctx: any) {
    ctx.app.component("ThemedImage", ThemedImage);
    ctx.app.component("Sandbox", Sandbox);
    ctx.app.use(TwoslashFloatingVue);
    ctx.app.use(NolebaseGitChangelogPlugin);
    vitepressNprogress(ctx);
  },
};
