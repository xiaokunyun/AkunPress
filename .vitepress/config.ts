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
        logo: '/logo.png',
        siteTitle: false,
        nav: createNav(),
        sidebar: createSidebar(),
        socialLinks: [
            { icon: 'github', link: 'https://xiaokunyun.github.io/vitepress/' },
            { icon: 'twitter', link: '...' },
            { icon: 'discord', link: '...' }
        ],
        footer: {
            message: '在 MIT 许可下发布。',
            copyright: '版权所有 © 2022-至今 AKUN'
        },
       
    }
})
function createNav() {
    return [
        {
            text: '指南',
            items: [
                { text: '指南', link: '/guide/introduction', },
                { text: '深入', link: '/guide/dep/cors.md', },
                { text: '其他', link: '/guide/other/index.md', },
            ]
        },
        {
            text: '组件', link: '/components/',
            items: [
                { text: '介绍', link: '/components/introduction', },
            ]
        },
        {
            text: '相关链接',
            items: [
                { text: '文档源码', link: 'https://github.com/xiaokunyun/vitepress' },
                { text: 'web', link: 'http://web.xiaokunyun.cn/' },
                { text: '仿网易云api', link: 'http://node.xiaokunyun.cn/' },
                { text: '更新日志', link: 'https://github.com/xiaokunyun/vitepress/blob/master/CHANGELOG.md' },
            ]
        },
        { text: '社区',
        items: [
            { text: '排期中', link: '#', },
        ]
    }
    ]
}
function createSidebar() {
    return {
        '/guide/': [
            {
                text: '指南',
                collapsible: true,
                items: [
                    { text: '前言', link: '/guide/introduction' },
                    { text: '开始', link: '/guide/index' },

                ]
            },
            {
                text: '深入',
                collapsible: true,
                items: [
                    { text: '跨域处理', link: '/guide/dep/cors.md' },
                    { text: '图标', link: '/guide/dep/icon.md' },
                    { text: '国际化', link: '/guide/dep/i18n.md' },
                    { text: '项目规范', link: '/guide/dep/lint.md' },
                    // { text: '黑暗主题', link: '/guide/dep/icon.md' },
                ]
            },
            {
                text: '其他',
                collapsible: true,
                items: [
                    { text: '常见问题', link: '/guide/other/faq', },
                    { text: '常见疑点', link: '/guide/other/doubt', },
                    { text: '测试服务', link: '/guide/other/server', },
                    { text: '相关项目', link: '/guide/other/project', },
                ]
            }
        ],
        '/components/': [
            {
                text: '组件',
                collapsible: true,
                items: [
                    { text: '前言', link: '/components/introduction' },
                ]
            }
        ],
    }
}
