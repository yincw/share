# 应用入口

分类 | Hooks | Classes
---|---|---
客户端渲染 | [createRoot()](https://zh-hans.react.dev/reference/react-dom/client/createRoot) v18.0 | [ReactDOM.render()](https://zh-hans.legacy.reactjs.org/docs/react-dom.html#render) v0.13
`\-` | [root.render(reactNode)](https://zh-hans.react.dev/reference/react-dom/client/createRoot#root-render) v18.0 | 同上
`\-` | [root.unmount()](https://zh-hans.react.dev/reference/react-dom/client/createRoot#root-unmount) v18.0 | [ReactDOM.unmountComponentAtNode()](https://zh-hans.legacy.reactjs.org/docs/react-dom.html#unmountcomponentatnode) v0.13
服务端渲染 | [hydrateRoot()](https://zh-hans.react.dev/reference/react-dom/client/hydrateRoot) v18.0 | [ReactDOM.hydrate()](https://zh-hans.legacy.reactjs.org/docs/react-dom.html#hydrate) v0.13
`\-` | - | ReactDOM.renderToString() v0.13 / [renderToString(reactNode, options?)](https://zh-hans.react.dev/reference/react-dom/server/renderToString) v18.0
`\-` | - | ReactDOM.renderToStaticMarkup() v0.13 / [renderToStaticMarkup(reactNode, options?) ](https://zh-hans.react.dev/reference/react-dom/server/renderToStaticMarkup) v18.0
`\-` | - | ReactDOM.renderToNodeStream() v0.13 / [renderToNodeStream(reactNode, options?)](https://zh-hans.react.dev/reference/react-dom/server/renderToNodeStream) v18.0
`\-` | - | [renderToPipeableStream(reactNode, options?)](https://zh-hans.react.dev/reference/react-dom/server/renderToPipeableStream) v18.0
`\-` | - | [renderToReadableStream(reactNode, options?)](https://zh-hans.react.dev/reference/react-dom/server/renderToReadableStream) v18.0
`\-` | - | [renderToStaticNodeStream(reactNode, options?) ](https://zh-hans.react.dev/reference/react-dom/server/renderToStaticNodeStream) v18.0

- 全局 API
- 入口配置