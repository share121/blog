import DefaultTheme from "vitepress/theme";
import MyLayout from "./Layout.vue";
import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";
import { nextTick, onMounted, watch } from "vue";
import "./custom.css";
import ThemedImage from "../components/ThemedImage.vue";

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
  enhanceApp({ app }) {
    app.component("ThemedImage", ThemedImage);
  },
};
