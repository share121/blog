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
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/share121.png',
    name: 'share121',
    links: [
      { icon: 'github', link: 'https://github.com/share121' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/626843261' },
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />
