---
title: 如何发布个人网站 vuepress 结合 github-pages 免费部署
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

那么这个部署是如何实现的呢？

我们需要用到 github-pages，免费部署。

# github-pages 部署实战

## github actions

我们可以利用 github actions 触发自动把我们的 markdown 博客编译为 html 静态网站。

触发脚本，参考：

> [.github/workflows/deploy-docs.yml](https://github.com/houbb/blog-personal-improve/blob/main/.github/workflows/deploy-docs.yml)

我们只需要在自己的 vuepress 项目，相同目录也放一个 `.github/workflows/deploy-docs.yml`，内容不用改，每次提交 github 就可以触发编译。

## 分支

我们的部署脚本中

```yml
      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          npm run docs:build
          > src/.vuepress/dist/.nojekyll

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 部署文档
          branch: gh-pages
          folder: src/.vuepress/dist
```

会把内容编译好放在 `gh-pages` 分支

## 部署

我们只需要在自己的 github 代码仓库，设置一下即可

【setting】=>【Pages】，选择 `gh-pages` 分支，点击【save】保存即可。

![github-pages-setting](https://houbb.github.io/blog-personal-improve/assets/images/digit-garden/github-pages-setting.png)

稍微等待一会儿，就可以访问了。

## 访问

比如根据页面提示，我的博客地址是：

> [https://houbb.github.io/blog-personal-improve/](https://houbb.github.io/blog-personal-improve/)


# 一、GitHub Pages 是什么？

1. 定义
   GitHub Pages（简称 GH Pages）是 GitHub 提供的 静态网站托管服务，可以直接将 GitHub 仓库中的静态内容（HTML、CSS、JS、Markdown 转 HTML 等）发布为网站。

2. 特点

   * 免费：无需额外服务器和域名（使用 `github.io` 子域名）
   * 静态托管：只支持静态内容（可以配合前端框架生成静态文件）
   * 自动化部署：通过 push 到仓库即可更新网站
   * 支持自定义域名：可以绑定自己的域名

3. 适用场景

   * 个人博客、技术文档、知识库
   * Markdown 写作生成的静态网站（如 VuePress、GitBook、Hexo）
   * 作品展示、项目主页

---

# 二、工作原理

1. GitHub Pages 会监控仓库中的特定分支或目录：

   * 用户/组织网站：使用 `username.github.io` 仓库，部署 `main` 或 `master` 分支
   * 项目网站：在任意仓库中使用 `gh-pages` 分支或 `/docs` 文件夹

2. 当推送静态文件到指定分支后，GitHub 自动生成网页：

   * HTML/CSS/JS 直接渲染
   * Markdown 会先通过生成工具（如 VuePress、GitBook）转换为 HTML

3. 访问方式：

   * 默认 URL：

     ```
     https://用户名.github.io/
     https://用户名.github.io/仓库名/
     ```
   * 可绑定自定义域名

---

# 三、GitHub Pages 类型

| 类型      | 分支              | URL                                                                | 说明            |
| ------- | --------------- | ------------------------------------------------------------------ | ------------- |
| 用户/组织网站 | main/master     | [https://username.github.io](https://username.github.io)           | 一个账号一个站点      |
| 项目网站    | gh-pages / docs | [https://username.github.io/repo](https://username.github.io/repo) | 每个仓库可生成一个项目站点 |

---

# 四、GitHub Pages 使用流程（静态网站）

1. 创建仓库

   * 名称：

     * 用户网站：`username.github.io`
     * 项目网站：任意仓库名

2. 上传静态文件

   * 直接 push HTML、CSS、JS 文件
   * 或使用 VuePress/GitBook 构建的静态文件（`dist` 或 `_book`）

3. 配置分支或目录

   * 用户网站：main/master 分支
   * 项目网站：`gh-pages` 分支或 `docs` 文件夹

4. 启用 GitHub Pages

   * 仓库 → Settings → Pages
   * 选择分支和目录 → 保存

5. 访问网站

   * GitHub 会生成 URL，例如：

     ```
     https://username.github.io/
     ```
   * 等待几分钟即可访问

6. 自定义域名（可选）

   * 添加 `CNAME` 文件或在设置中填写域名
   * 配置 DNS（CNAME / A 记录）

---

# 五、GitHub Pages 与 VuePress / GitBook

1. 部署 VuePress

```bash
# 构建静态文件
npm run build
# 将 dist 文件夹 push 到 gh-pages 分支
```

2. 部署 GitBook

```bash
# 构建静态文件
gitbook build
# push _book 文件夹到 gh-pages 分支
```

> GitHub Pages 只负责托管静态文件，不管生成工具，所以可以结合任何 SSG（静态网站生成器）使用。

---

# 六、优势与注意事项

优势：

* 免费托管，低成本
* 简单易用，直接 push 即可更新
* 支持自定义域名
* 结合 Git 能轻松版本管理

注意事项：

* 仅支持静态内容（前端动态需借助 JS 或外部 API）
* 大量图片或文件可能占用仓库容量
* 需要 HTTPS 配置自定义域名

---

总结一句话：
GitHub Pages 是一个免费的静态网站托管服务，适合把个人博客、知识库、项目文档等生成的静态文件直接发布成网站，并支持自定义域名和版本管理。

