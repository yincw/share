# 元素（Elements）

HTML 语义化

## 元数据

元素(Element) | 说明(Description) | 接口(Interface)
---|---|---
`html` | 根元素 | HTMLHtmlElement
`\- head` | 文档元数据容器 | HTMLHeadElement
`\-- title` | 文档标题 | HTMLTitleElement
`\-- <base />` | 超链接和表单的基本URL和可导航的默认目标 | HTMLBaseElement
`\-- noscript` | 脚本的回退内容 | HTMLElement
`\-- <meta />` | 文本元数据 | HTMLMetaElement
`\-- <link />` | 链接元数据 | HTMLLinkElement
`\-- style` | 嵌入式样式信息 | HTMLStyleElement
`\-- script` | 嵌入式脚本 | HTMLScriptElement
`\- body` | 文档主体 | HTMLBodyElement

## 容器

元素(Element) | 说明(Description) | 接口(Interface) | 元素分组
---|---|---|---
`div` | 通用流容器，或dl元素中名称值组的容器 | HTMLDivElement | 块元素
`span` | 通用措辞容器 | HTMLSpanElement | 行元素？
`header` | 头部区域 | HTMLElement | 块元素
`section` | 部分/剖面 | HTMLElement | 块元素
`nav` | Navigator 导航区 | HTMLElement | 块元素
`search` | 搜索区 | HTMLElement | 块元素
`main` | 主要内容区域 | HTMLElement | 块元素
`aside` | 侧边栏 | HTMLElement | 块元素
`article` | 文章区 | HTMLElement | 块元素
`footer` | 底部区域 | HTMLElement | 块元素

示例参考：[HTML5元素示例](/share/html5/#layout)

## 导航

元素(Element) | 说明(Description) | 接口(Interface) | 元素分组
---|---|---|---
`menu` | 菜单 | HTMLMenuElement | 块元素
`a` | 超链接 | HTMLAnchorElement | 行元素？
`map` | 图片地图 | HTMLMapElement | 行元素
`\- <area />` | 图片地图上的超链接或死区 | HTMLAreaElement | 行元素
`<hr />` | 分隔线 | HTMLHRElement | 块元素

示例参考：[HTML5元素示例](/share/html5/#nav)

## 排版

元素(Element) | 说明(Description) | 接口(Interface) | 元素分组
---|---|---|---
`hgroup` | Heading container 标题容器 | HTMLElement | 块元素
`h1` | Heading 1 | HTMLHeadingElement | 块元素
`h2` | Heading 2 | HTMLHeadingElement | 块元素
`h3` | Heading 3 | HTMLHeadingElement | 块元素
`h4` | Heading 4 | HTMLHeadingElement | 块元素
`h5` | Heading 5 | HTMLHeadingElement | 块元素
`h6` | Heading 6 | HTMLHeadingElement | 块元素
`p` | Paragraph 段落 | HTMLParagraphElement | 块元素
`address` | 页面或文章元素的联系信息 | HTMLElement | 块元素
`strong` | 强调并粗体 | HTMLElement | 行元素？
`b` | Bold 粗体 | HTMLElement | 行元素？
`em` | Emphasis 强调并斜体 | HTMLElement | 行元素？
`i` | Italic 斜体 | HTMLElement | 行元素？
`small` | 缩写文本/旁注 | HTMLElement | 行元素？
`sup` | Superscript 上标 | HTMLElement | 行元素？
`sub` | Subscript 下标 | HTMLElement | 行元素？
`del` | Delete 从文档中删除 | HTMLModElement | 行元素？
`s` | Strikethrough 文本不准确 | HTMLElement | 行元素？
`ins` | Insert 对文档的补充 | HTMLModElement | 行元素？
`u` | Underlined 不清晰的注释 | HTMLElement | 行元素？
`ruby` | 注释/音标 | HTMLElement | 行元素 ruby
`\- rt` | 注释文本 | HTMLElement | 行元素 ruby-text
`\- rp` | 注释文本的括号，回退显示 | HTMLElement | 行元素 none
`abbr` | Abbreviation 缩写 | HTMLElement | 行元素？
`dfn` | Defining 定义实例 | HTMLElement | 行元素？
`bdo` | Direction of Text 局部文本方向 | HTMLElement | 行元素？
`\- bdi` | 隔离局部文本方向控制 | HTMLElement | 行元素？
`<wbr />` | Word Break 单词换行机会 | HTMLElement | 行元素？
`<br />` | Break 换行符 | HTMLBRElement | 行元素？
`q` | Quotation 引用 | HTMLQuoteElement | 行元素
`blockquote` | 引用另一来源的一节 | HTMLQuoteElement | 块元素
`cite` | Citation 引用作品标题 | HTMLElement | 行元素？
`code` | 计算机代码 | HTMLElement | 行元素？
`samp` | Sample 计算机输出 | HTMLElement | 行元素？
`var` | Variable 变量 | HTMLElement | 行元素？
`kbd` | Keyboard 用户输入 | HTMLElement | 行元素？
`mark` | 高亮 | HTMLElement | 行元素？
`pre` | Preformatted 预格式化文本块 | HTMLPreElement | 块元素
`dl` | Dictionary List 由零个或多个名称值组组成的关联列表 | HTMLDListElement | 块元素
`\- dt` | Dictionary Title | HTMLElement | 块元素
`\- dd` | Dictionary Data | HTMLElement | 块元素
`ol` | Ordered List 有序列表 | HTMLOListElement | 块元素
`ul` | Unordered List 无序列表 | HTMLUListElement | 块元素
`\- li` | List Item 列表项 | HTMLLIElement | 块元素 list-item
`table` | 表格 | HTMLTableElement | 行块元素 table
`\- caption` | 表格标题 | HTMLTableCaptionElement | 行块元素 table-caption
`\- colgroup` | 表格中的列组 | HTMLTableColElement | 行块元素 table-column-group
`\-- <col />` | 表格中的列 | HTMLTableColElement | 行块元素 table-column
`\- thead` | 表中的标题行组 | HTMLTableSectionElement | 行块元素 table-header-group
`\- tbody` | 表中的行组 | HTMLTableSectionElement | 行块元素 table-row-group
`\- tfoot` | 表中的页脚行组 | HTMLTableSectionElement | 行块元素 table-footer-group
`\-- tr` | 表格行 | HTMLTableRowElement | 行块元素 table-row
`\--- th` | 表头中的单元格 | HTMLTableCellElement | 行块元素 table-cell
`\--- td` | 表格单元格 | HTMLTableCellElement | 行块元素 table-cell
`data` | 当前日期的机器可读等效物 | HTMLDataElement | 行元素？
`time` | 指定日期或时间的机器可读等效物 | HTMLTimeElement | 行元素？

示例参考：[HTML5元素示例](/share/html5/#typo)

## 数据展示

### 图片和图形

元素(Element) | 说明(Description) | 接口(Interface) | 元素分组
---|---|---|---
`figure` | 带有可选标题的图 | HTMLElement | 块元素
`\- figcaption` | 分组图的标题 | HTMLElement | 块元素
`picture` | 图片 | HTMLPictureElement | 行元素？
`<img />` | 图片 | HTMLImageElement | 行元素？
`<iframe />` | 内联框架 | HTMLIFrameElement | 行块元素
`<embed />` | 插件 | HTMLEmbedElement | 行块元素
`object` | 图片、内联框架和插件 | HTMLObjectElement | 行块元素
`canvas` | 可脚本化的位图画布 | HTMLCanvasElement | 行块元素

示例参考：[HTML5元素示例](/share/html5/#display)

### 媒体

元素(Element) | 说明(Description) | 接口(Interface) | 元素分组
---|---|---|---
`audio` | 音频播放器 | HTMLAudioElement | 行块元素
`video` | 视频播放器 | HTMLVideoElement | 行块元素
`\- <source />` | 图片源或媒体源 | HTMLSourceElement | -
`\- <track />` | 定时字幕 | HTMLTrackElement | -

示例参考：[HTML5元素示例](/share/html5/#display)

## 数据录入

元素(Element) | 说明(Description) | 接口(Interface) | 元素分组
---|---|---|---
`form` | 表单 | HTMLFormElement | 块元素
`fieldset` | 表单控件组 | HTMLFieldSetElement | 块元素
`\- legend` | 字段集的标题 | HTMLLegendElement | 块元素
`label` | 表单控件的标题 | HTMLLabelElement | 行元素？
`<input />` | 输入框 表单控件 | HTMLInputElement | 行块元素
`textarea` | 多行文本控件 | HTMLTextAreaElement | 行块元素
`select` | 列表框控件 | HTMLSelectElement | 行块元素
`\- optgroup` | 列表框中的选项组 | HTMLOptGroupElement | 块元素
`\- option` | 列表框或组合框控件中的选项 | HTMLOptionElement | 块元素
`datalist` | 用于组合框控件选项的容器 | HTMLDataListElement | 行元素 none
`button` | 按钮控件 | HTMLButtonElement | 行块元素
`output` | 计算输入值 | HTMLOutputElement | 行元素

示例参考：[HTML5元素示例](/share/html5/#form)

## 反馈

元素(Element) | 说明(Description) | 接口(Interface) | 元素分组
---|---|---|---
`progress` | 进度条 | HTMLProgressElement | 行块元素
`meter` | 计量器 | HTMLMeterElement | 行块元素
`dialog` | 对话框 | HTMLDialogElement | 块元素
`details` | 详情 | HTMLDetailsElement | 块元素

示例参考：[HTML5元素示例](/share/html5/#feedback)

## 插槽

元素(Element) | 说明(Description) | 接口(Interface) | 元素分组
---|---|---|---
`template` | 模板 | HTMLTemplateElement | 行元素 none
`slot` | 插槽 | HTMLSlotElement | 行元素 contents

示例参考：[HTML5元素示例](/share/html5/#slot)

## 遗留/废弃 ⚠️

元素(Element) | 说明(Description) | 接口(Interface)
---|---|---
`document.all` | - | HTMLAllCollection
`form` | - | HTMLFormControlsCollection
`option` | - | HTMLOptionsCollection
`param` | object 参数 | HTMLParamElement
`dir` | 目录列表 | HTMLDirectoryElement
`font` | 字体 | HTMLFontElement
`frameset` | 框架集 | HTMLFrameSetElement
`frame` | 框架 | HTMLFrameElement
`marquee` | 跑马灯 | HTMLMarqueeElement
`-` | - | HTMLUnknownElement

## 元素分类

- **Metadata content**
  - Script-supporting elements
- **Flow content**
  - **Sectioning content**
  - **Heading content**
  - **Interactive content**
  - **Phrasing content**
    - **Embedded content**
    - Palpable content
    - Sectioning roots
    - Form-associated elements
    - Listed elements
    - Submittable elements
    - Resettable elements
    - Autocapitalize-inheriting elements
    - Labelable elements

## 参考

- https://html.spec.whatwg.org/multipage/indices.html#elements-3
- https://html.spec.whatwg.org/multipage/indices.html#element-interfaces
- https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content
- https://html.spec.whatwg.org/multipage/indices.html#element-content-categories
