# 应用入口

分类 | Hooks | Classes
---|---|---
客户端渲染 | [createRoot()](https://zh-hans.react.dev/reference/react-dom/client/createRoot) | [ReactDOM.render()](https://zh-hans.legacy.reactjs.org/docs/react-dom.html#render)
`\-` | [root.render(reactNode)](https://zh-hans.react.dev/reference/react-dom/client/createRoot#root-render) | 同上
`\-` | [root.unmount()](https://zh-hans.react.dev/reference/react-dom/client/createRoot#root-unmount) | [ReactDOM.unmountComponentAtNode()](https://zh-hans.legacy.reactjs.org/docs/react-dom.html#unmountcomponentatnode)
服务端渲染 | [hydrateRoot()](https://zh-hans.react.dev/reference/react-dom/client/hydrateRoot) | [ReactDOM.hydrate()](https://zh-hans.legacy.reactjs.org/docs/react-dom.html#hydrate)
`\-` | - | [renderToNodeStream(reactNode, options?)](https://zh-hans.react.dev/reference/react-dom/server/renderToNodeStream)
`\-` | - | [renderToPipeableStream(reactNode, options?)](https://zh-hans.react.dev/reference/react-dom/server/renderToPipeableStream)
`\-` | - | [renderToReadableStream(reactNode, options?)](https://zh-hans.react.dev/reference/react-dom/server/renderToReadableStream)
`\-` | - | [renderToStaticMarkup(reactNode, options?) ](https://zh-hans.react.dev/reference/react-dom/server/renderToStaticMarkup)
`\-` | - | [renderToStaticNodeStream(reactNode, options?) ](https://zh-hans.react.dev/reference/react-dom/server/renderToStaticNodeStream)
`\-` | - | [renderToString(reactNode, options?)](https://zh-hans.react.dev/reference/react-dom/server/renderToString)

- 全局 API
- 入口配置