# 组件渲染

分类 | Hooks | Classes
---|---|---
`强制重新渲染` | [useSyncExternalStore()](https://zh-hans.react.dev/reference/react/useSyncExternalStore) v18 | [forceUpdate()](https://zh-hans.react.dev/reference/react/Component#forceupdate) v0.13
JSX | [`<Fragment>` / `<></>`](https://zh-hans.react.dev/reference/react/Fragment) v16.2 | [React.Children](https://zh-hans.react.dev/reference/react/Children) v0.13 / [`key`](https://zh-hans.react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) v0.13
`\-` | - | [`htmlFor`](https://zh-hans.react.dev/reference/react-dom/components/common#common-props) v0.13
`\-` | - | [`classname`](https://zh-hans.react.dev/reference/react-dom/components/common#applying-css-styles) v0.13
`\-` | - | [`dangerouslySetInnerHTML`](https://zh-hans.react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) v0.13
React元素 | - | [React.isValidElement()](https://zh-hans.react.dev/reference/react/isValidElement) v0.13
`\-` | - | [~~createFactory(type)~~](https://zh-hans.react.dev/reference/react/createFactory) v0.13
`\-` | - | [createElement(type, props, ...children)](https://zh-hans.react.dev/reference/react/createElement) v0.13
`\-` | - | [cloneElement(element, props, ...children)](https://zh-hans.react.dev/reference/react/cloneElement) v0.13


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