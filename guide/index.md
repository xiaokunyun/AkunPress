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




##  Step. 4: 添加更多页面




## 下一步是什么?

