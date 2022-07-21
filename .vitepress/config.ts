/**
 * @type {import('vitepress').UserConfig}
 */
import { defineConfig } from 'vitepress'
export default defineConfig({
    base: '/vitepress/',
    title: 'AkunPress',
    lang: 'zh-CN',
    description: 'Just playing around.',
    appearance: true,
    themeConfig: {
        // siteTitle: 'My Custom Title',
        logo: '/logo.png',
        // siteTitle: false,
        nav: createNav(),// 头部导航栏
        sidebar: createSidebar(),//侧边栏
        socialLinks: [
            { icon: 'github', link: 'https://github.com/xiaokunyun/vitepress' },
            { icon: 'twitter', link: '...' },
            { icon: 'discord', link: '...' }
        ],
        //页脚
        footer: {
            message: '在 MIT 许可下发布。',
            copyright: '版权所有 © 2022-至今 Evan You'
        }
    }
})
function createNav() {
    return [
        {
            text: '指南', link: '/guide/',
            items: [
                {
                    text: '指南',
                    link: '/guide/introduction',
                },
                {
                    text: 'test',
                    link: '/guide/test',
                },
            ]
        },
        // { text: '团队', link: '/team/' },
        { text: '相关', link: '/relevant/' },
        {
            text: '相关链接',
            items: [
                { text: 'press', link: 'http://press.xiaokunyun.cn/' },
                { text: 'web', link: 'http://web.xiaokunyun.cn/' },
                { text: '仿网易云api', link: 'http://node.xiaokunyun.cn/' }
            ]
        },
    ]
}
function createSidebar() {
    return {
        '/guide/': [
            {
                text: '指南',
                collapsible: true,
                items: [
                    { text: 'index', link: '/guide/index.md' },
                    { text: 'git提交', link: '/guide/git.md' },
                    { text: 'Introduction', link: '/guide/introduction.md' },
                    { text: 'one', link: '/guide/one.md' },
                    { text: 'two', link: '/guide/two.md' },
                    { text: 'test', link: '/guide/test.md' },
                ]
            }
        ],
        // '/team/': [
        //     {
        //         text: '团队',
        //         collapsible: true,
        //         items: [
        //             { text: 'index', link: '/team/index.md' },
        //         ]
        //     }
        // ],
        '/relevant/': [
            {
                text: 'relevant',
                collapsible: true,
                items: [
                    { text: 'index', link: '/relevant/index.md' },
                    { text: 'one', link: '/relevant/one.md' },
                    { text: 'two ', link: '/relevant/two.md' },
                ]
            }
        ]
    }
}
