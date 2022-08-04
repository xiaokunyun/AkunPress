# 介绍

## 简介

 
- 本项目基于[Vitepress](https://github.com/vitejs/vite)该项目会持续跟进最新技术.
- 也可参考[Vben Admin文档预览](https://vvbin.cn/doc-next/) 或 [Vben Admin文档源码](https://github.com/vbenjs/vue-vben-admin-doc)本文一部分灵感皆（搬运）来源于此 。


## 文档

- 中文文档地址为 [AkunPress](https://github.com/xiaokunyun/vitepress)，采用 Vitepress 开发。如发现文档有误，欢迎提 pr 帮助我们改进。
- 英文文档暂时没有时间来写（暂不支持国际化）。

### 本地运行文档

- 如需本地运行文档，请拉取代码到本地。
- 拉取代码前请确保，已安装 [Node](http://nodejs.cn/)。 npm管理工具[yarn](https://www.yarnpkg.cn/)。

```bash
# 拉取代码
git clone https://github.com/xiaokunyun/vitepress.git

# 安装依赖
yarn

# 运行项目
yarn dev
```

## 推荐vue开发者需要掌握的基础知识（）

本项目需要一定前端基础知识，请确保掌握 Vue 的基础知识，以便能处理一些常见的问题。
建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:

- [Vue3 文档](https://staging-cn.vuejs.org/) 
- [Vue-RFCS](https://github.com/vuejs/rfcs)
- [Vue2 迁移到 3](https://v3-migration.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue-router](https://router.vuejs.org/)
<!-- - [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/) -->
- [Es6](https://es6.ruanyifeng.com/)
- [Vitejs](https://vitejs.dev/)- 新一代前端构建工具 `Vite`
- [WindiCss](https://windicss.netlify.app/)

<!-- ## 模版 -->
<!-- 
- [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)

该版本主要是提供一些 `Demo` 示例及插件的使用集成方式，主要用于参考。如果对项目不是很熟悉，不建议在此基础上进行开发，请使用下方提供的精简版本。

- [vue-vben-admin-thin](https://github.com/vbenjs/vben-admin-thin-next)

`vue-vben-admin` 精简版本。删除了相关示例、无用文件及功能、依赖。可以根据自身需求安装对应的依赖。因为使用的是 `vite`，依赖删除不会导致相关组件或者 `hook` 发出警告。只在需要的时候**安装对应的库**即可。 -->

## 如果你的前端构建工具是vite 推荐一下插件

如果这些插件对你有帮助，可以给一个 star 支持下

- [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock) - 用于本地及开发环境数据 `mock`
- [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) - 用于 `html` 模版转换，可以在`html`文件内进行书写模版语法
- [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) - 用于组件库样式按需引入
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - Vue 的按需组件自动导入。
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 自动导入 Vite、Webpack、Rollup 和 esbuild 的 API。支持 TypeScript。由unplugin提供支持。 `unplugin-auto-import`
- [vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin) - 用于打包压缩图片资源
- [vite-plugin-theme](https://github.com/vbenjs/vite-plugin-theme) - 用于在线切换主题色/黑暗主题适配等主题相关配置
- [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression) - 用于打包输出`.gz`|`.br`文件
- [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) - 快速生成 `svg sprite`

## 浏览器支持

**本地开发**推荐使用`Chrome 最新版`浏览器，**不支持**`Chrome 80`以下版本。

**生产环境**支持现代浏览器，不支持 IE。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 如何加入我们

- [AkunPress](https://xiaokunyun.github.io/vitepress/) 还在持续更新中，本项目欢迎您的参与，共同维护，逐步完善，将项目做得更强。同时整个项目本着一切免费的原则，原则上不会收取任何费用及版权，可以放心使用。
- 如果你想加入我们，可以多提供一些好的建议或者提交 pr，我们会根据你的活跃度邀请你加入。
