---
title: 如何发布个人网站之 gitbook 入门介绍
date: 2025-08-22
categories: [DigitGarden]
tags: [digit-garden, note-tool, sh]
published: true
---

# 从零开始，如何在 gitbooks 发布自己的个人网站？

目标：在 gitbook 发我我们自己的个人网站。

好的，我们来系统讲 如何从零开始用 GitBook 发布自己的个人网站。我会从整体流程、工具准备到具体操作详细说明。

# 一、GitBook 概述

1. GitBook 是什么？

   * 基于 Markdown 的文档平台
   * 支持在线编辑、版本管理、团队协作
   * 可将文档发布为网页（个人知识网站、教程、博客等）

2. 适用场景

   * 个人知识库展示
   * 技术文档、学习笔记整理
   * 公开或私有网站搭建

---

# 二、准备工作

1. 注册账户

   * 访问 [https://www.gitbook.com](https://www.gitbook.com)
   * 使用邮箱、GitHub 或 Google 登录
   * github 注册一个账号

2. 工具准备

   * Git（可选，用于本地版本管理）
   * Markdown 编辑器（VS Code、Obsidian 等）
   * 浏览器（操作 GitBook Web 端即可）

3. 确定内容结构

   * 想清楚网站栏目和层级
   * 例如：

     ```
     首页
     ├─ 学习笔记
     │   ├─ Markdown
     │   └─ Git
     ├─ 项目笔记
     └─ 复盘与总结
     ```


# 老马个人实战

这里老马选择的是 docs-website 方式

1) 创建 Docs-site 

![创建](https://houbb.github.io/blog-personal-improve/assets/images/digit-garden/digit-garden-gitbook-docs-website.png)

2) 创建 github 项目

为了保持项目的本地+云端同步，在 github 上创建一个项目 gitbook-digit-garden

随便放点 markdown 的文章即可。

本地上送到 github 

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:houbb/gitbook-digit-garden.git
git push -u origin main
```

3) 选择从 Sync with Git 同步

选择 github，按照提示，打通二者。

github 授权=》选择账户=》选择仓库=》选择分支(main)

最下边的同步方式我们选择: Github to gitbook，因为老马喜欢在 github 做统一的更新。

说明：这个仓库在【install the github app】 中，必须选择这个仓库，可以跳转到 github 中自己设置。仓库有时候无法刷新，可以再重新打开尝试一次。

4) 发布

我们回到首页，可以选择发布这个文档。

![publish](https://houbb.github.io/blog-personal-improve/assets/images/digit-garden/digit-garden-gitbook-docs-website-02-publish.png)

5) 在线访问

然后我们就可以直接在线访问了

> [https://houbb.gitbook.io/digit-garden/](https://houbb.gitbook.io/digit-garden/)

6) 支撑能力

可以发现已经提供了全文查询+AI咨询的额外能力。

作为入门，是挺好的一种方式。

----------------------------------------------------------------------------


# 三、创建 GitBook 项目

1. 登录 GitBook → 点击 New Space（新空间）
2. 填写信息：

   * Space name：个人网站名称
   * Visibility：Public（公开）或 Private（私密）
3. 创建成功后进入空间管理界面

---

# 四、编辑文档

1. 在线编辑

   * GitBook 提供 Markdown 编辑器
   * 可直接新建页面、写笔记
   * 支持标题、列表、表格、代码块、图片等 Markdown 语法

2. 目录管理

   * 左侧 Sidebar 可以创建目录
   * 拖拽页面调整层级

3. 使用模板

   * GitBook 支持插入常用模板
   * 可快速搭建“项目笔记模板”、“复盘模板”等

4. 本地同步（可选）

   * 使用 GitBook CLI 或 GitBook 与 GitHub/GitLab 集成
   * 本地写好 Markdown 文件 → push 到仓库 → GitBook 自动同步

---

# 五、发布网站

1. 直接发布

   * 在线编辑完成后，GitBook 默认会生成网页
   * 地址形式类似：`https://用户名.gitbook.io/空间名`

2. 自定义域名（可选）

   * GitBook 支持绑定自己的域名
   * 配置步骤：

     1. 在 GitBook 设置里找到 Custom Domain
     2. 在域名提供商处添加 CNAME 或 A 记录
     3. 等待生效，访问自定义域名即可

3. 版本控制与历史

   * GitBook 自动保存修改历史
   * 可回溯、恢复历史版本

---

# 六、优化与增强

1. 使用插件

   * GitBook 支持部分插件，如搜索、表格、图表等
   * 提升文档可读性和交互性

2. 图文排版

   * 配合 Markdown 的标题、列表、图片、代码块
   * 做到整洁、层级清晰

3. 导航优化

   * Sidebar 层级合理，方便访客浏览
   * 首页可放置简介和导航入口

4. 知识网络

   * 使用内部链接 `[[笔记名]]` 或 GitBook 内链
   * 实现笔记互相引用，类似 Obsidian 的知识网络

---

# 七、示例流程总结

1. 注册 GitBook → 创建 Space
2. 规划目录结构 → 新建页面
3. 编辑 Markdown 内容 → 插入图片、代码、表格
4. 调整 Sidebar → 建立内部链接
5. 发布网站 → 获取 GitBook URL 或绑定自定义域名
6. 持续更新 → GitBook 自动生成最新网页

---

# 八、实践建议

1. 先本地写作，再同步到 GitBook

   * 用 VS Code 或 Obsidian 写作更高效
2. 保持目录清晰

   * 页面少而精，层级合理
3. 定期复盘内容

   * 优化笔记质量，保持网站活跃
4. 结合知识库

   * 将项目笔记、复盘笔记、学习笔记同步到 GitBook
   * 实现个人数字花园在线化
