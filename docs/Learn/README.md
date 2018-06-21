---
sidebar: auto
---
# VuePress 基础
## 文档
- 文件夹都应当有一个 README.md 文件，它会被自动编译为 index.html。
    - 确保链接以 `.html` 或 `.md` 结尾；
    - 确保路径大小写正确，因为路径的匹配是大小写敏感的;
    - /config/ 表示的是/config目录下的README.md文件，而 /config指的是/config.md
- YAML Front Matter是什么
    - 用于定义内容快变量，其实就是一种数据格式。VuePress使用Front Matter来定义各自页面的title等属性。

    - 定义方式:
    
    ```
    ---
    layout: demo
    title: YAML头定义的几种方法
    custom_css: |
      这里是块内容的定义
      可以是多行文本
    custom_prop1: {a: 1, b: 2}
    custom_prop2: [1, 2, 3]
    custom_prop3: 
      a: 1
      b: 2
    custom_prop4: #序列的 - 分隔符，类似JS数组的逗号分隔符
      -
        1
      -
        2
      -
        3
    ---
    {{page.custom_prop1.a}}    <!-- 输出 1 -->
    {{page.custom_prop2[0]}}   <!-- 输出 1 -->
    {{page.custom_prop3}}      <!-- 输出 {"a"=>1, "b"=>2} -->
    {{page.custom_prop4}}      <!-- 输出数组项 123 -->
    
    ```
- 通过`fs`读取文件后在通过`front-matter`解析成data。
## 其他

- 目录输出：`[[toc]]`

- Emoji输出：
> 如`:tada: :100:`,输出结果:tada: :100:

- 自定义容器
```
::: tip
This is a tip
:::
```
::: tip
This is a tip
:::

- 代码块中的行高亮

    &#96;&#96;&#96;js{2}

    1

    2

    3

    &#96;&#96;&#96;
``` js{2}
1
2
3
```