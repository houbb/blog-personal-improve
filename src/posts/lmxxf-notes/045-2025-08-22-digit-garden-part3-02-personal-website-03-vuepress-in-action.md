---
title: 如何发布个人网站 vuepress 入门实战
date: 2025-08-22
categories: [DigitGarden]
tags: [digit-garden, note-tool, sh]
published: true
---


# vuepress 实际项目

你可以直接在 [https://github.com/houbb/blog-personal-improve](https://github.com/houbb/blog-personal-improve)

直接下载这个项目，就是 vuepress 的，然后本地启动体验一下。

下一节我们会介绍如何在线部署

> 在线体验，[https://houbb.github.io/blog-personal-improve/](https://houbb.github.io/blog-personal-improve/)

# 本地如何启动

vuepress 是基于 vue，依赖本地的 node 环境，我们需要安装一下

# 一、前提条件

1. Node.js

   * VuePress 依赖 Node.js 环境
   * 建议版本：Node 16+
   * 下载地址：[https://nodejs.org](https://nodejs.org)
   * 安装后可在终端验证：

     ```bash
     node -v
     npm -v
     ```

2. npm 或 pnpm / yarn

   * Node.js 自带 npm
   * 可选择 pnpm 或 yarn 提升包管理效率

---

# 二、全局工具（可选）

* VuePress CLI（可全局安装）

```bash
npm install -g vuepress
```

* 这样可以在任何目录直接使用 `vuepress dev` / `vuepress build`

> 如果不想全局安装，可以在项目里局部安装，也可以用 npx 调用。

---

# 三、项目依赖安装（推荐方式）

1. 初始化项目

```bash
mkdir my-vuepress-site
cd my-vuepress-site
npm init -y
```

2. 安装 VuePress

```bash
npm install -D vuepress
```

* `-D` 表示开发依赖（devDependencies）
* 安装后可以在 package.json 配置脚本：

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

3. 安装常用插件（可选）

```bash
npm install -D @vuepress/plugin-back-to-top @vuepress/plugin-medium-zoom
```

* `plugin-back-to-top`：返回顶部按钮
* `plugin-medium-zoom`：图片缩放

4. 安装主题（可选）

* 默认主题已内置
* 可使用第三方主题：

```bash
npm install -D vuepress-theme-hope
```

---

# 四、启动项目

* 本地开发：

```bash
npm run dev
```

* 构建生产：

```bash
npm run build
```

* 生成静态文件在 `docs/.vuepress/dist/`，可部署到 GitHub Pages 或其他静态托管服务

---

# 五、推荐额外工具（可选）

1. VS Code + Markdown 插件

   * Markdown All in One
   * Vue Language Support
2. Git

   * 版本控制
   * 部署自动化（GitHub Pages、Netlify）
3. Node 版本管理工具（nvm / n）

   * 管理不同 Node 版本
   * 避免版本冲突

---

# 六、总结

如果你用 npm 搭建 VuePress 网站，核心安装列表：

| 工具/依赖               | 作用          |
| ------------------- | ----------- |
| Node.js + npm       | 运行环境与包管理    |
| vuepress            | 核心静态网站生成器   |
| @vuepress/plugin-\* | 功能增强插件（可选）  |
| vuepress-theme-\*   | 主题美化（可选）    |
| Git                 | 版本控制和部署（推荐） |

> 流程总结：安装 Node.js → 初始化项目 → 安装 VuePress → 配置 scripts → 启动开发/构建生产 → 部署。


