---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '../public/xu.jpg',
    name: 'akun',
    title: '作者',
    links: [
      { icon: 'github', link: 'https://github.com/xiaokunyun' },
      { icon: 'twitter', link: '#' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
     我们的队伍
    </template>
    <template #lead>
      AkunPress 的开发由一个团队指导，其中一些人选择在下面进行介绍。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
