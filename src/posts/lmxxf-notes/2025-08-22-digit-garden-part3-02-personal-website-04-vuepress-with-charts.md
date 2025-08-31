---
title: 如何发布个人网站 vuepress 升级 charts
date: 2025-08-22
categories: [DigitGarden]
tags: [digit-garden, note-tool, sh]
published: true
---


# 安装方式

## 移除本地旧版本依赖

```
rm -rf node_modules package-lock.json
```

手动删除对应的文件和包也行也行

## 安装新版本

```
npm i -D vuepress@next vuepress-theme-hope@next @vuepress/plugin-markdown-chart@next
```