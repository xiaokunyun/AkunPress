/**
 * @type {import('vitepress').UserConfig}
 */
import { defineConfig } from 'vitepress'
export default defineConfig({
    base: '/AkunPress/',
    title: 'AkunPress',
    lang: 'zh-CN',
    description: 'Just playing around.',
    appearance: true,
    themeConfig: {
        logo: '/logo.png',
        // siteTitle: false,
        nav: createNav(),
        sidebar: {
            '/guide/': sidebarGuide(),
            '/components/': sidebarAssembly(),
            '/team/': sidebarTeam(),
            '/imoccAdmin/': imoccAdminList(),
            '/web/': sidebarWeb(),
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/xiaokunyun/vitepress' },
            { icon: 'twitter', link: '...' },
            { icon: 'discord', link: '...' },
        ],
        localeLinks: {
            text: '简体中文',
            items: [
                { text: 'English', link: '#' },
                { text: '日本語', link: '#' },
                { text: 'Español', link: '#' }
            ]
        },
        editLink: {
            pattern: 'https://github.com/xiaokunyun/vitepress/:path',
            text: '在 GitHub 上编辑此页面'
        },
        footer: {
            message: '在 MIT 许可下发布。',
            copyright: '版权所有 © 2022-至今 AKUN'
        },
        algolia: {
            appId: '8J64VVRP8K',
            apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
            indexName: 'vitepress',
            searchParameters: {
                facetFilters: ['tags:en']
            }
        },
        carbonAds: {
            code: 'CEBDT27Y',
            placement: 'vuejsorg'
        }
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
            text: '前端', link: '/web/',
            items: [
                { text: '介绍', link: '/web/index', },
            ]
        },
        {
            text: '团队', link: '/team/',
            items: [
                { text: '介绍', link: '/team/index', },
            ]
        },
        {
            text: 'imocc-Admin', link: '/imoccAdmin/',
            items: [
                { text: '介绍', link: '/imoccAdmin/index', },
            ]
        },
        {
            text: '相关链接',
            items: [
                { text: '文档源码', link: 'https://github.com/xiaokunyun/vitepress' },
                { text: 'web', link: 'http://web.xiaokunyun.cn/' },
                { text: 'admin', link: 'http://admin.xiaokunyun.cn/'},
                { text: '仿网易云api', link: 'http://node.xiaokunyun.cn/' },
                { text: '更新日志', link: 'https://github.com/xiaokunyun/vitepress/blob/master/CHANGELOG.md' },
            ]
        },
        {
            text: '社区',
            items: [
                { text: '排期中', link: '#', },
            ]
        },
    ]
}
function sidebarGuide() {
    return [
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
    ]
}
function sidebarAssembly() {
    return [
        {
            text: '组件',
            collapsible: true,
            items: [
                { text: '前言', link: '/components/introduction' },
            ]
        }
    ]
}
function sidebarWeb() {
    return [
        {
            text: '前端体系',
            collapsible: true,
            items: [
                { text: '前言', link: '/web/index' },
                { text: '开源项目推荐', link: '/web/recommend' },
            ]
        }
    ]
}
function sidebarTeam() {
    return [
        {
            text: '团队',
            collapsible: true,
            items: [
                { text: '前言', link: '/components/introduction' },
            ]
        }
    ]
}
function imoccAdminList() {
    return [
        {
            text: 'imocc-Admin',
            collapsible: true,
            items: [
                { text: '一开篇', link: '/imoccAdmin/index' },
                // { text: '二编程规范', link: '/imoccAdmin/two.md' },
                // { text: '三编程规范', link: '/imoccAdmin/3.md' },
                // { text: '四编程规范', link: '/imoccAdmin/4.md' },
                // { text: '五编程规范', link: '/imoccAdmin/5.md' },
                // { text: '六编程规范', link: '/imoccAdmin/6.md' },
                // { text: '七编程规范', link: '/imoccAdmin/7.md' },
                // { text: '八编程规范', link: '/imoccAdmin/8.md' },
                // { text: '九编程规范', link: '/imoccAdmin/9.md' },
                // { text: '十编程规范', link: '/imoccAdmin/10.md' },
                // { text: '十一编程规范', link: '/imoccAdmin/11.md' },
                // { text: '十二编程规范', link: '/imoccAdmin/12.md' },
            ]
        }
    ]
} 
