---
title: 知识库结构设计之 Frontmatter 位于 Markdown 文件开头的一段 YAML、JSON 或 TOML 格式的元数据
date: 2025-08-22
categories: [DigitGarden]
tags: [digit-garden, note-tool, sh]
published: true
---


# 一、Frontmatter 的概念

Frontmatter 是位于 Markdown 文件开头的一段 YAML、JSON 或 TOML 格式的元数据，用于定义笔记或页面的属性信息。

* 作用：

  1. 为 Markdown 文件添加结构化信息（标题、日期、标签、分类等）
  2. 支持自动化处理和插件扩展
  3. 支持可视化（如 Graph View 或导航）
  4. 可用于渲染模板和生成页面

* 基本语法：

```yaml
---
title: "动态规划基础"
date: 2025-08-23
tags: [算法, 面试]
categories: [计算机科学, 算法]
links: [贪心算法, 分治算法]
summary: "本文介绍动态规划的核心概念与应用场景"
---
```

---

# 二、Frontmatter 的常用字段

| 字段           | 作用         | 示例                       |
| ------------ | ---------- | ------------------------ |
| `title`      | 页面/笔记标题    | `"动态规划基础"`               |
| `date`       | 创建或更新时间    | `"2025-08-23"`           |
| `tags`       | 标签，用于分类和筛选 | `[算法, 面试]`               |
| `categories` | 目录分类       | `[计算机科学, 算法]`            |
| `summary`    | 摘要或简介      | `"本文介绍动态规划的核心概念与应用场景"`   |
| `author`     | 作者信息       | `"echo"`                 |
| `links`      | 内部关联笔记     | `[贪心算法, 分治算法]`           |
| `draft`      | 是否为草稿      | `true / false`           |
| `cover`      | 封面图片       | `"/images/dp-cover.png"` |
| `weight`     | 页面排序权重     | `1`                      |

> 不同系统可能支持的字段略有差异，但基本思路相同。

---

# 三、Frontmatter 的高级用法

## 1. 内部链接管理

* 利用 `links` 字段建立笔记关联：

```yaml
links:
  - 贪心算法
  - 分治算法
```

* 作用：

  * 生成 Graph View 节点边
  * 支持自动化引用或推荐笔记

## 2. 标签与分类多维管理

* 分类与标签分离：

```yaml
tags: [算法, 面试]
categories: [计算机科学, 算法]
```

* 作用：

  * 分类用于目录导航
  * 标签用于多维搜索和聚合
* 结合 Graph View 可用不同颜色区分节点类型

## 3. 页面排序与显示控制

* `weight` 字段控制侧边栏排序
* `draft: true` 控制未发布笔记在生成网站中隐藏
* `date` 控制文章列表时间排序

## 4. 自定义字段

* 支持自定义字段满足特定需求：

```yaml
difficulty: "中等"
source: "LeetCode"
related_projects: ["项目A", "项目B"]
```

* 作用：

  * 支持数据驱动页面生成
  * 与自动化脚本结合生成表格、报表或 Graph

## 5. 与自动化和插件结合

* Obsidian Dataview / Templater：

  * 读取 Frontmatter 自动生成列表或表格
  * 动态引用笔记
* VuePress / GitBook：

  * 自动生成导航、标签页、Graph 数据
* Graph View 可视化：

  * 节点属性、颜色、大小都可从 Frontmatter 读取

---

# 四、Frontmatter 的实践策略

1. 保持统一字段命名

   * 便于自动化处理和插件读取
   * 避免标签或分类冲突

2. 原子化信息存储

   * 只在 Frontmatter 中存储元信息
   * 内容正文专注于知识本身

3. 结合模板使用

   * 模板自动生成标准 Frontmatter
   * 确保每条笔记一致性

4. 用于可视化和网络化

   * Graph View 节点属性来源于 Frontmatter
   * 自动化脚本解析 Frontmatter 构建知识网络

---

# 五、Frontmatter 的示意

```yaml
---
title: "二分查找算法"
date: 2025-08-23
tags: [算法, 面试]
categories: [计算机科学, 算法]
difficulty: "中等"
links: [排序算法, 动态规划]
draft: false
summary: "本文讲解二分查找算法及其应用场景"
weight: 10
---
```

* 解析后可用于：

  * 侧边栏导航
  * 标签聚合
  * Graph View 节点和边
  * 自动化生成表格或文章

---

# 六、总结

Frontmatter 是 Markdown 的元数据层，核心作用：

1. 结构化信息：标题、日期、标签、分类、关联笔记等
2. 支持自动化：模板、列表、表格、Graph、导航生成
3. 增强可视化：节点属性、颜色、大小、网络关系
4. 支撑知识复用与输出：文章、报告、博客、项目文档

> 简单理解：Frontmatter 是笔记的“身份证 + 属性标签”，知识内容是“正文”，有了 Frontmatter，你的笔记才能被自动化、可视化和复用。


