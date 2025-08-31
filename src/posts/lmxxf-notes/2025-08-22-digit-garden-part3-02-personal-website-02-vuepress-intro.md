---
title: 如何发布个人网站 vuepress 介绍
date: 2025-08-22
categories: [DigitGarden]
tags: [digit-garden, note-tool, sh]
published: true
---


# 一、VuePress 是什么？

1. 定义
   VuePress 是一个 以 Vue 为驱动的静态网站生成器（SSG），主要用于文档、博客或知识库网站的构建。

   * 文档写作使用 Markdown
   * 生成的页面由 Vue 渲染
   * 支持 SPA（单页应用）体验

2. 特点

   * Markdown 原生支持：直接写 Markdown 即可生成网站
   * Vue 驱动：页面可以嵌入 Vue 组件，实现动态交互
   * 高性能：静态站点生成，加载快，SEO 好
   * 可扩展性：支持插件、主题自定义

3. 适用场景

   * 技术文档、知识库、个人博客
   * 数字花园、项目文档
   * 教程网站、学习笔记整理

---

# 二、VuePress 的核心架构

1. Markdown 渲染

   * 内置 Markdown-it，支持扩展语法（表格、脚注、代码高亮、图表等）
   * 可以通过 Frontmatter 自定义页面元信息

2. 主题系统

   * 默认主题（Default Theme）：适合文档网站
   * 可自定义主题（Vue 组件 + CSS）
   * 支持多层布局和自定义导航、侧边栏

3. 插件机制

   * 核心插件：搜索、PWA、SEO 等
   * 自定义插件：可以扩展功能，如图表、统计、自动目录生成

4. 静态资源处理

   * 支持本地资源、图片、视频、SVG
   * 可通过 Webpack 或 Vite 打包

5. SPA 功能

   * 页面切换不刷新全页
   * 保持 Vue 的响应式特性
   * 支持自定义 Vue 组件在 Markdown 内使用

---

# 三、VuePress 核心功能

1. Markdown + Vue

   * 原生 Markdown 写作
   * 可在 Markdown 中使用 Vue 组件：

     ```markdown
     # 我的页面
     <MyComponent :prop="value"/>
     ```

2. Frontmatter

   * 定义页面元信息：

     ```yaml
     ---
     title: 页面标题
     sidebar: auto
     tags: [vue, vuepress]
     ---
     ```

3. 侧边栏与导航

   * 配置文件 `.vuepress/config.js` 控制导航和侧边栏：

     ```js
     module.exports = {
       themeConfig: {
         sidebar: [
           '/',
           '/guide/',
           '/projects/'
         ],
         nav: [
           { text: '主页', link: '/' },
           { text: '项目', link: '/projects/' }
         ]
       }
     }
     ```

4. 搜索功能

   * 内置简单搜索
   * 插件支持全文索引搜索

5. 代码高亮与演示

   * 支持多语言代码高亮
   * 可内嵌 Vue 组件做交互示例

6. 多语言支持

   * 通过 `locales` 配置实现国际化文档

---


# 总结

* VuePress 核心优势：

  1. Markdown 原生写作
  2. Vue 驱动，支持动态交互
  3. SPA 体验，加载快
  4. 易扩展主题和插件

* 应用场景：

  * 技术文档、个人博客
  * 数字花园、知识库网站
  * 学习笔记、项目记录

> 总结一句话：VuePress 是一个结合 Markdown 简单写作和 Vue 动态交互的静态网站生成器，非常适合构建个人知识库和数字花园。

