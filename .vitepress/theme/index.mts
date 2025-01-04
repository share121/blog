import DefaultTheme from "vitepress/theme";
import MyLayout from "./Layout.vue";
import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";
import { nextTick, onMounted, watch } from "vue";
import "./index.css";
import ThemedImage from "../components/ThemedImage.vue";
import vitepressNprogress from "vitepress-plugin-nprogress";
import "vitepress-plugin-nprogress/lib/css/index.css";
import "vitepress-markdown-timeline/dist/theme/index.css";
import { Sandbox } from "vitepress-plugin-sandpack";
import "vitepress-plugin-sandpack/dist/style.css";
import "@shikijs/vitepress-twoslash/style.css";
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";

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
      document.querySelectorAll("mark").forEach((mark) => {
        observer.observe(mark);
      });
    };
    onMounted(initRoom);
    watch(
      () => route.path,
      () => nextTick(initRoom)
    );
  },
  enhanceApp(ctx) {
    ctx.app.component("ThemedImage", ThemedImage);
    ctx.app.component("Sandbox", Sandbox);
    ctx.app.use(TwoslashFloatingVue);
    vitepressNprogress(ctx);
  },
};
