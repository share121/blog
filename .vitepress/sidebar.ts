import path from "path";
import { generateSidebar } from "vitepress-sidebar";
import { SidebarItem, VitePressSidebarOptions } from "vitepress-sidebar/types";

export const reg = /^\d+\.(?!$)/;

export const vitePressSidebarOptions: VitePressSidebarOptions = {
  documentRootPath: "docs",
  collapsed: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
};

function rewrites(id: string) {
  return id
    .split("/")
    .map((item) => item.replace(reg, ""))
    .join("/");
}

export function rewrites2(id: string) {
  return id
    .split("/")
    .map((item, index, arr) => {
      if (index === arr.length - 1) {
        // 这是文件
        const ext = path.extname(item);
        if (ext !== ".md") return item;
        const basename = path.basename(item, ext);
        return basename.replace(reg, "") + ".md";
      } else {
        // 这是文件夹
        return item.replace(reg, "");
      }
    })
    .join("/");
}

function walk(sidebar: SidebarItem[]) {
  for (const item of sidebar) {
    if (item.link) {
      item.link = rewrites(item.link);
    }
    if (item.items) {
      walk(item.items);
    }
  }
}

export function genSidebar() {
  const sidebar = generateSidebar(vitePressSidebarOptions);
  walk(sidebar as SidebarItem[]);
  return sidebar;
}
