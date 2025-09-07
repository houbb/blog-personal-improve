---
title: 个人知识库的的数据查询和统计之 DataView
date: 2025-08-22
categories: [DigitGarden]
tags: [digit-garden, note-tool, sh]
published: true
---


# 老马公开的知识库

github: [https://github.com/houbb/blog-personal-improve](https://github.com/houbb/blog-personal-improve)

gitHub-pags: [https://houbb.github.io/blog-personal-improve/](https://houbb.github.io/blog-personal-improve/)

gitbook: [https://houbb.gitbook.io/digit-garden/](https://houbb.gitbook.io/digit-garden/)

# 前言

obsidian 是一款非常优秀的产品，希望里面的很多理念都可以整合到 vuepress 等常见的插件中。

Dataview ——它几乎是 Obsidian 知识库里最强大的插件之一，也是让笔记“活起来”的关键。

这样一对比 search 功能就显得比较弱鸡了，这个很接近 SQL 的查询能力。

## 一、什么是 Dataview？

Dataview 是 Obsidian 的一款 查询与展示插件，它允许你把笔记当成“数据库”来处理。

* 普通笔记 = 纯文本
* 加上 Frontmatter（YAML 元数据）+ Dataview = 结构化数据
* Dataview 可以查询、筛选、统计，并以 表格、任务列表、日历、JS 脚本 等方式动态展示结果。

换句话说：
👉 你写的笔记本来只是“文档”，但 Dataview 能让它们变成 数据库 + 知识查询系统。

---

## 二、Dataview 的数据来源

1. Frontmatter 元数据
   每个笔记可以在头部写：

   ```yaml
   ---
   type: book
   author: "余华"
   year: 1993
   tags: [小说, 文学]
   status: "已读"
   ---
   ```

   然后 Dataview 可以直接基于这些字段做查询。

2. 内联字段
   在正文里也能写：

   ```
   status:: 已读
   rating:: 5
   ```

   Dataview 也能识别。

## 三、核心功能

### 1. 查询表格

比如你有一个文件夹 `/Books/`，里面记录了你读过的书：

```
table author, year, status
from "Books"
where status = "已读"
sort year asc
```

会自动生成一个动态表格，列出所有已读书籍。

### 2. 查询任务

如果笔记里有 TODO 任务：

```
- [ ] 写一篇关于 Zettelkasten 的文章
- [x] 整理书单
```

你可以用：

```
task from "Projects"
where !completed
group by file.name
```

自动生成跨文件的任务清单。


### 3. 统计与聚合

比如统计今年读了多少本书：

```
table length(rows) as 已读数量
from "Books"
where status = "已读" and year = 2025
```

### 4. 灵活视图
- Table（表格）  
- List（列表）  
- Task（任务）  
- JS API（脚本，几乎无限扩展能力，比如图表化）

例如日历展示，可以配合 Calendar 插件，把 `date:: 2025-08-24` 的字段直接投影到日历。

---

## 四、实际应用场景
1. 阅读管理：自动生成“我的书单”，按照已读/在读分类。  
2. 学习进度：查询所有课程笔记的完成情况。  
3. 任务追踪：集中展示所有项目任务的 TODO。  
4. 写作管理：展示哪些笔记是“草稿”，哪些是“成稿”。  
5. 知识统计：统计某类标签的笔记数量，形成知识热力图。  

---

## 五、优势
- 不需要数据库知识，直接用 Markdown 就能查询。  
- 和笔记天然融合（不用跳到 Excel/Notion）。  
- 灵活，可扩展（能写简单 DSL，也能写 JS）。  
- 能和 Graph View 配合，形成知识网络 + 数据库的混合体验。  

📌 总结一句：  
Dataview = 让 Obsidian 笔记从“静态文本”进化为“动态数据库”的魔法插件。  
它的本质就是：把笔记当成“数据”，再用查询和统计把隐藏的价值挖掘出来。  


