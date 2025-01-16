import { VitePressSidebarOptions } from "vitepress-sidebar/types";

export const vitePressSidebarOptions: VitePressSidebarOptions = {
  documentRootPath: "docs",
  collapsed: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
};
