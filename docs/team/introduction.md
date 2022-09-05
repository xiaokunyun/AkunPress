# 团队还在规划中
<pre>{{ page }}</pre>
<script setup>
import { useData } from 'vitepress'
import { VPTeamMembers } from 'vitepress/theme'
const { page } = useData()
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
const members2 = [
  {
    avatar: '../public/xu.jpg',
    name: '等待加入',
    title: '协作者',
    links: [
      { icon: 'github', link: 'https://github.com/xiaokunyun' },
      { icon: 'twitter', link: '#' }
    ]
  },
]
</script>
# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
<!-- <VPTeamMembers size="small" :members="members2" /> -->
