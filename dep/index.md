# 开始

本节将帮助您从头开始制作一个基本的 VitePress 文档站点。如果您已经有一个现有项目并希望将文档保留在项目中，请从第 2 步开始。

::: 警告
VitePress目前正在使用状态配置`alpha`。它已经适合开箱即用的文档，和API可能会在次要使用状态发生变化。
:::

## Step. 1:新建项目

创建并更改为新目录。.

```bash
$ mkdir vitepress-starter && cd vitepress-starter
```

然后，使用您喜欢的包管理器进行初始化。.

```bash
$ yarn init
```

## Step. 2: 安装VitePress

Add VitePress and Vue as dev dependencies for the project.

```bash
$ yarn add --dev vitepress vue
```

::: details Getting missing peer deps warnings?
`@docsearch/js` has certain issues with its peer dependencies. If you see some commands failing due to them, you can try this workaround for now:

On Yarn v2/v3, add this inside your rc file (`.yarnrc.yml` by default):

```yaml
packageExtensions:
  '@docsearch/react@*':
    peerDependenciesMeta:
      '@types/react':
        optional: true
      'react':
        optional: true
      'react-dom':
        optional: true
```

On PNPM, add this in your `package.json`:

```json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@types/react",
      "react",
      "react-dom"
    ]
  }
}
```

:::

创建您的第一个文档.

```bash
$ mkdir docs && echo '# Hello VitePress' > docs/index.md
```

## Step. 3: 启动开发环境

Add some scripts to `package.json`.

```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```

Serve the documentation site in the local server.

```bash
$ yarn docs:dev
```

VitePress will start a hot-reloading development server at `http://localhost:3000`.

## Step. 4: 添加更多页面

Let's add another page to the site. Create a file name `getting-started.md` along with `index.md` you've created in Step. 2. Now your directory structure should look like this.

```
.
├─ docs
│  ├─ getting-started.md
│  └─ index.md
└─ package.json
```

Then, try to access `http://localhost:3000/getting-started` and you should see the content of `getting-started` is shown.

This is how VitePress works basically. The directory structure corresponds with the URL path. You add files, and just try to access it.

## 下一步是什么?

By now, you should have a basic but functional VitePress documentation site. But currently, the user has no way to navigate around the site because it's missing for example sidebar menu we have on this site.

To enable those navigations, we must add some configurations to the site. Head to [configuration guide](./configuration) to learn how to configure VitePress.

If you would like to know more about what you can do within the page, for example, writing markdown contents, or using Vue Component, check out the "Writing" section of the docs. [Markdown guide](./markdown) would be a greate starting point.

If you want to know how to customize how the site looks (Theme), and find out the features VitePress's default theme provides, visit [Theme: Introduction](./theme-introduction).

When your documentation site starts to take shape, be sure to read the [deployment guide](./deploying).
