---
title: 个人知识库的插件系统 gitbook plugins
date: 2025-08-22
categories: [DigitGarden]
tags: [digit-garden, note-tool, sh]
published: true
---


# 老马公开的知识库

github: [https://github.com/houbb/blog-personal-improve](https://github.com/houbb/blog-personal-improve)

gitHub-pags: [https://houbb.github.io/blog-personal-improve/](https://houbb.github.io/blog-personal-improve/)

gitbook: [https://houbb.gitbook.io/digit-garden/](https://houbb.gitbook.io/digit-garden/)

# GitBook 插件系统

老马觉得 gitbook 默认的就挺好用的，下面梳理方便我们使用。

Obsidian 偏向 个人知识库/第二大脑，插件多是提高笔记体验；

而 GitBook 的插件系统，主要服务于 知识库/文档网站的展示与扩展。

详细拆解：

# 1. GitBook 插件系统是什么？

* GitBook 最初是一个基于 Node.js 的 静态文档生成工具（有点像 VuePress / Docusaurus）。
* 它支持通过 插件（Plugins） 来扩展文档编译与渲染功能。
* 插件可以修改：

  * 文档内容（Markdown 解析前/后处理）
  * 文档样式（CSS/主题扩展）
  * 文档交互（搜索、评论、目录增强）
  * 输出形式（导出 PDF、EPUB、静态 HTML）

⚠️ 注意：

* GitBook 开源版 (Legacy CLI 2.x) 有完善的插件系统。
* GitBook SaaS（现在官网的云服务） 已经不再对外开放自定义插件，更多是内置功能。
  所以如果你要玩插件生态，要用开源版 GitBook。

---

# 2. 插件的分类

在 GitBook (开源版) 里，插件分为几类：

## 📄 内容增强类

* gitbook-plugin-highlight：代码高亮（语法颜色）
* gitbook-plugin-mermaid：支持 Mermaid 图表（流程图/时序图）
* gitbook-plugin-uml：支持 PlantUML 图
* gitbook-plugin-mathjax：LaTeX 数学公式

## 🎨 界面与导航类

* gitbook-plugin-theme-default：默认主题（可自定义）
* gitbook-plugin-toc：增强目录导航
* gitbook-plugin-sectionx：支持章节折叠/展开
* gitbook-plugin-anchor：为标题添加锚点链接

## 🔍 搜索与交互

* gitbook-plugin-search：内置搜索
* gitbook-plugin-search-plus：改进搜索体验
* gitbook-plugin-disqus：嵌入 Disqus 评论系统
* gitbook-plugin-lunr：本地全文搜索（离线可用）

## 📦 输出与集成

* gitbook-plugin-pdf：导出 PDF
* gitbook-plugin-epub：导出 EPUB
* gitbook-plugin-ga：集成 Google Analytics
* gitbook-plugin-mixpanel：用户访问统计

---

# 3. 插件的安装与使用

GitBook 插件需要在 `book.json` 配置文件里声明：

```json
{
  "plugins": [
    "highlight",
    "search-plus",
    "mermaid",
    "disqus"
  ],
  "pluginsConfig": {
    "disqus": {
      "shortName": "your-disqus-shortname"
    }
  }
}
```

然后执行：

```bash
gitbook install
gitbook build
```

插件会自动下载并生效。

---

# 4. 插件的运行机制

GitBook 插件是一个 Node.js 模块，它通过几个“钩子（hooks）”影响构建过程：

* `hooks.beforePage(page)` → 在渲染页面前处理 Markdown
* `hooks.page(page)` → 处理页面 HTML
* `hooks.finish()` → 构建完成后执行一些操作（比如生成索引）

所以插件既能改写 Markdown，也能控制最终 HTML 输出。

---

# 5. 插件生态的价值

* 让 GitBook 变得更专业：支持公式、图表、代码高亮等
* 提升用户体验：折叠目录、全文搜索、评论互动
* 多种发布形态：支持在线文档 + PDF/EPUB 导出
* 方便定制化：比如公司内部知识库，可以接入统计、单点登录、评论区

---

# 6. 常见的插件组合（新手推荐 🚀）

* `highlight` → 代码高亮
* `search-plus` → 增强搜索
* `mermaid` + `mathjax` → 图表 & 数学公式
* `sectionx` → 折叠章节
* `disqus` → 评论系统
* `ga` → 流量统计

---

# 7. 对比 Obsidian 插件系统

| 维度  | Obsidian Plugins | GitBook Plugins      |
| --- | ---------------- | -------------------- |
| 目标  | 个人知识库 / 第二大脑     | 文档/知识库发布             |
| 类型  | AI、任务管理、自动化、思维导图 | 内容增强、主题、搜索、导出        |
| 开发者 | 社区 JS/TS 插件      | Node.js 插件（NPM 包）    |
| 安装  | 内置市场（GUI）        | 配置 `book.json` + CLI |
| 现状  | 活跃，持续发展          | 开源版停更，SaaS 不支持自定义    |

---

📌 总结

* GitBook 插件系统的核心作用是：扩展文档渲染和展示能力。
* 如果你要做 知识分享网站/技术书籍/开源文档，插件能帮你轻松支持代码高亮、数学公式、流程图、评论、搜索等功能。
* 但如果你想要 个人知识管理，更推荐 Obsidian 插件生态。
