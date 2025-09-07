---
title: markdown 高级用法
date: 2025-08-22
categories: [DigitGarden]
tags: [digit-garden, note-tool, sh]
published: true
---


我们来详细梳理 Markdown 的高级/进阶用法，不仅覆盖语法，还涉及实践技巧、扩展功能以及在个人知识库中的应用。

# 一、Markdown 高级语法

Markdown 的基础语法包括标题、列表、粗体/斜体、代码块等，高级用法主要体现在扩展功能和格式控制上。

## 1️⃣ 表格（Tables）

Markdown 支持简单表格，也可以控制对齐：

```markdown
| 名称     | 类型   | 说明       |
|----------|-------|-----------|
| username | 字符串 | 用户名    |
| age      | 数字   | 年龄      |
| active   | 布尔   | 是否激活  |

| 左对齐 | 居中对齐 | 右对齐 |
|:-------|:--------:|-------:|
| A      | B        | C      |
```

---

## 2️⃣ 脚注（Footnotes）

* 支持引用额外说明或参考文献。

```markdown
这是一个例子[^1]。

[^1]: 这是脚注内容
```

* 应用场景：写作、科研笔记、引用说明。

---

## 3️⃣ 任务列表（Task Lists）

* 常用于 TODO、项目管理、学习笔记。

```markdown
- [x] 已完成任务
- [ ] 待办任务
- [ ] 进行中任务
```

---

## 4️⃣ 行内和块级代码高亮

* 行内代码：使用反引号 `` ` ``

```markdown
在 JavaScript 中使用 `const` 声明常量。
```

* 块级代码：支持语言标注，实现语法高亮

````markdown
```python
def hello():
    print("Hello, World!")
````

````

- 应用场景：技术文档、代码笔记。

---

## 5️⃣ 引用与多级引用
```markdown
> 这是引用
>> 嵌套引用
````

* 可用于总结、摘录或引用他人观点。
* 在知识库中，引用块可结合笔记引用，形成关联内容。

---

## 6️⃣ 水平分割线

```markdown
---
```

* 用于分隔内容，使笔记更清晰。

---

# 二、Markdown 扩展语法

现代 Markdown 工具（如 Obsidian、GitBook、Typora）支持许多扩展语法。

## 1️⃣ Mermaid 流程图与图表

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

* 可绘制流程图、序列图、甘特图。
* 应用场景：可视化笔记、知识网络、项目流程。

## 2️⃣ Math / LaTeX 数学公式

* 行内公式：

```markdown
E = mc^2
```

* 块级公式：

```markdown
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

* 应用场景：学术笔记、技术文档。

## 3️⃣ 高级链接与嵌入

* 内部链接（Wiki 风格）：

```markdown
[[笔记标题]]
```

* 外部链接：

```markdown
[百度](https://www.baidu.com)
```

* 嵌入图片、音视频或其他笔记：

```markdown
![[image.png]]
```

* 应用场景：个人知识库、数字花园。

---

## 4️⃣ 标签（Tags）

* 用于主题分类和检索：

```markdown
#学习 #JavaScript #前端
```

* 在 Obsidian、Notion 中可直接按标签筛选。

---

## 5️⃣ 交互与可折叠区域

* 折叠内容（details/summary）：

```markdown
<details>
<summary>点击展开</summary>
这里是隐藏内容
</details>
```

* 应用场景：笔记中隐藏引用、解答、示例等。

---

# 三、Markdown 实践技巧

1. 原子笔记原则

   * 每条笔记记录单一概念或想法。
   * 易于链接、组合和迭代。

2. 双向链接

   * 利用 `[[笔记名]]` 或 `[[标签]]` 创建关联。
   * 支持知识网络可视化。

3. 模板与复用

   * 创建常用模板（读书笔记、会议纪要、项目笔记）。
   * 提高效率，保证格式统一。

4. 结合可视化工具

   * Mermaid、Graph View、ECharts 可让 Markdown 不只是文本，而是可视化知识网络。

5. 多平台同步

   * Markdown 文件可跨工具（Obsidian、Joplin、Typora、GitBook）使用，支持 Git 管理，便于版本控制和备份。

---

# 四、总结

Markdown 不只是简单文本，它在高级用法和扩展功能下可以实现：

* 结构化笔记（表格、引用、任务列表）
* 可视化表达（Mermaid、公式）
* 知识网络构建（内部链接、标签、嵌入）
* 高效管理与复用（模板、折叠内容、多平台同步）

> 高级 Markdown + 知识库工具 = 强大的数字花园，让知识可以长期积累、可视化、可复用。