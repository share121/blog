<script lang="ts" setup>
import { inBrowser, useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { watch } from "vue";
import Giscus from "@giscus/vue";
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import { NolebaseHighlightTargetedHeading } from "@nolebase/vitepress-plugin-highlight-targeted-heading/client";

const { isDark, page } = useData();
const { Layout } = DefaultTheme;

watch(isDark, (dark) => {
  if (!inBrowser) return;
  document
    .querySelector("giscus-widget")
    ?.shadowRoot?.querySelector("iframe")
    ?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: dark ? "dark" : "light" } } },
      "https://giscus.app"
    );
});
</script>

<template>
  <Layout>
    <template #layout-top>
      <NolebaseHighlightTargetedHeading />
    </template>
    <template #nav-bar-content-after>
      <NolebaseEnhancedReadabilitiesMenu />
    </template>
    <template #nav-screen-content-after>
      <NolebaseEnhancedReadabilitiesScreenMenu />
    </template>
    <template #doc-after>
      <div style="margin-top: 24px">
        <Giscus
          :key="page.filePath"
          :theme="isDark ? 'dark' : 'light'"
          repo="share121/blog"
          repo-id="R_kgDONlmxuQ"
          category="Announcements"
          category-id="DIC_kwDONlmxuc4CltYL"
          mapping="pathname"
          strict="1"
          reactions-enabled="1"
          emit-metadata="0"
          input-position="top"
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    </template>
  </Layout>
</template>
