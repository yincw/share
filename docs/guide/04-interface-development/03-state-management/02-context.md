# 上下文

分类 | Hooks | Classes
---|---|---
声明上下文 | [React.createContext()](https://zh-hans.react.dev/reference/react/createContext) | [React.createContext()](https://zh-hans.react.dev/reference/react/createContext)
提供 | [Context.Provider](https://zh-hans.react.dev/reference/react/createContext#provider) | [getChildContext()](https://zh-hans.react.dev/reference/react/Component#getchildcontext)
读取上下文 | [~~SomeContext.Consumer~~](https://zh-hans.react.dev/reference/react/createContext#consumer) | -
`\-` | - | [~~static childContextTypes~~](https://zh-hans.react.dev/reference/react/Component#static-childcontexttypes)
`\-` | - | [~~static contextTypes~~](https://zh-hans.react.dev/reference/react/Component#static-contexttypes)
`\-` | - | [static contextType](https://zh-hans.react.dev/reference/react/Component#static-contexttype)
`\-` | [useContext()](https://zh-hans.react.dev/reference/react/useContext) | [this.context](https://zh-hans.react.dev/reference/react/Component#context)

- 容器
- React.createContext()
- getChildContext()
  - Context.Provider
- 组件
- static childContextTypes
- static contextTypes
  - static contextType
- this.context
  - useContext()
  - Context.Consumer