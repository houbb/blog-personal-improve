---
title: markdown 入门语法介绍
date: 2025-08-22
categories: [DigitGarden]
tags: [digit-garden, note-tool, sh]
published: true
---


# Markdown 详解

Markdown 本身语法简单，但有扩展语法可以满足复杂文档需求。

## 1️⃣ 基本语法

### 1. 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
```

* 对应 HTML 的 `<h1>` \~ `<h6>`。
* Markdown 不强制缩进对齐，但建议规范使用空格。

---

### 2. 段落和换行

```markdown
这是第一段。

这是第二段，注意空行区分段落。
```

* 换行：末尾加两个空格 `  ` 或 `<br>`。

---

### 3. 文本样式

```markdown
加粗 或 __加粗__
*斜体* 或 _斜体_
~~删除线~~
```

---

### 4. 列表

#### 无序列表

```markdown
- 项目 1
- 项目 2
  - 子项目 2.1
* 项目 3
+ 项目 4
```

#### 有序列表

```markdown
1. 第一项
2. 第二项
3. 第三项
```

* 支持嵌套列表，缩进 2\~4 个空格。

---

### 5. 链接与图片

```markdown
[百度](https://www.baidu.com)   # 链接
![Logo](https://www.baidu.com/img/bd_logo1.png)  # 图片
```

* 图片语法类似链接，但前面加 `!`。

---

### 6. 引用

```markdown
> 这是一段引用
> 可以多行
>> 嵌套引用
```

* 对应 HTML 的 `<blockquote>`。

---

### 7. 代码

#### 行内代码

```markdown
使用 `console.log()` 输出信息。
```

#### 代码块

````markdown
```javascript
function sum(a, b) {
  return a + b;
}
````

````

- 支持指定语言，方便语法高亮。
- Obsidian 和 VuePress 都支持多种语言高亮。

---

### 8. 分割线

```markdown
---
*
___
````

* 三个或更多 `-`、`*` 或 `_` 单独一行即可。

---

## 2️⃣ 表格

```markdown
| 姓名 | 年龄 | 职业 |
| ---- | --- | ---- |
| Alice | 25 | 前端 |
| Bob | 30 | 后端 |
```

* `|` 用于列分隔，`-` 用于表头下划线。
* 可选对齐方式：

```markdown
| 左对齐 | 居中 | 右对齐 |
| :---   | :--: | ---:  |
| 内容1 | 内容2 | 内容3 |
```

---

## 3️⃣ 扩展语法（Markdown Plus）

很多平台（VuePress、Obsidian、GitHub）支持扩展：

### 1. 任务列表

```markdown
- [x] 已完成任务
- [ ] 待完成任务
```

### 2. 脚注

```markdown
这是一个脚注示例[^1]。

[^1]: 这里是脚注内容。
```

### 3. 表情和特殊符号

```markdown
:smile: 😄
```

💡 总结

Markdown 不只是写文档，它在 知识管理、博客、文档系统 中的优势：

* 易写易读
* 可扩展（任务列表、Mermaid、脚注等）
* 可与 VuePress、Obsidian 等平台结合，构建知识网络和动态内容