# 组件渲染

分类 | Hooks | Classes
---|---|---
JSX | [`<Fragment>` / `<></>`](https://zh-hans.react.dev/reference/react/Fragment) | [React.Children](https://zh-hans.react.dev/reference/react/Children) / [`key`](https://zh-hans.react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
`\-` | - | [`htmlFor`](https://zh-hans.react.dev/reference/react-dom/components/common#common-props)
`\-` | - | [`classname`](https://zh-hans.react.dev/reference/react-dom/components/common#applying-css-styles)
`\-` | - | [`dangerouslySetInnerHTML`](https://zh-hans.react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)
React元素 | - | [React.isValidElement()](https://zh-hans.react.dev/reference/react/isValidElement)


- 条件渲染
- 列表渲染
- 显示隐藏
- 文本渲染
- HTML 渲染
  - `dangerouslySetInnerHTML={{__html: true}}`
- 其他
  - 跳过编译
  - 隐藏未编译的插值
  - 只渲染一次
  - 缓存模板
- 自定义指令
  - 定义指令
  - 指令参数及修饰符
  - 注册指令
- 插槽内容和出口
- 强制重新渲染
  - forceUpdate()
  - useSyncExternalStore()
  - useReducer() + 递增
- JSX
  - createElement()
    - createFactory()
  - cloneElement()
  - isValidElement()
  - React.Children
  - Fragments
- 服务端渲染
  - ReactDOMServer.renderToString
  - ReactDOMServer.renderToStaticMarkup
  - ReactDOMServer.renderToNodeStream
    - renderToPipeableStream
  - ReactDOMServer.renderToStaticNodeStream
  - renderToReadableStream
- 渲染原理