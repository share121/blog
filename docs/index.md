---
layout: home
hero:
  name: share121
  tagline: "share121 的个人博客"
  actions:
    - theme: brand
      text: 介绍
      link: /introduction
features:
  - title: 记录生活
    details: 记录生活中的点滴，分享自己的感悟和经历
  - title: 技术分享
    details: 分享技术心得，探讨技术问题，共同进步
  - title: 学习笔记
    details: 记录学习过程中的笔记，总结经验，提高自己的技术水平
---

<script setup>
import { VPTeamMembers } from "vitepress/theme";

const members = [
  {
    avatar: "https://gitlab.com/uploads/-/system/user/avatar/18043480/avatar.png",
    name: "share121",
    title: "前端开发",
    org: "三清课堂",
    orgLink: "https://github.com/trpure-class",
    links: [
      { icon: "bilibili", link: "https://space.bilibili.com/626843261" },
      { icon: "gitee", link: "https://gitee.com/share121" },
      { icon: "gitlab", link: "https://gitlab.com/share121" },
      { icon: "github", link: "https://github.com/share121" },
    ]
  },
]
</script>

<VPTeamMembers :members="members" />
