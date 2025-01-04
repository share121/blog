<template>
  <img
    :src="isDark ? props.darkSrc : props.lightSrc"
    loading="lazy"
    :alt="props.alt"
  />
</template>

<script setup lang="ts">
import { useData } from "vitepress";

const { isDark } = useData();

const props = defineProps<{
  lightSrc: string;
  darkSrc: string;
  alt: string;
}>();
</script>
