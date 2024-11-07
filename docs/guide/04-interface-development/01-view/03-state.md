# 组件状态

分类 | Hooks | Classes
---|---|---
声明状态 | [useState()](https://zh-hans.react.dev/reference/react/useState) | [state](https://zh-hans.react.dev/reference/react/Component#state)
`\-` | - | [this.setState(nextState, callback?)](https://zh-hans.react.dev/reference/react/Component#setstate)
读取状态值 | - | [this.state](https://zh-hans.react.dev/reference/react/Component#state)
`\-` | [useReducer()](https://zh-hans.react.dev/reference/react/useReducer) | -
监听状态 | [useEffect()](https://zh-hans.react.dev/reference/react/useEffect) | -
`\-` | [useLayoutEffect()](https://zh-hans.react.dev/reference/react/useLayoutEffect) | -
`\-` | [useInsertionEffect()](https://zh-hans.react.dev/reference/react/useInsertionEffect) | -

- 状态
  - 声明状态
  - 计算
  - 监听并更改状态值
    - 深度监听和立即执行
  - 读取状态值
- 状态变更立即更新 DOM
- 自动收集监听依赖
- 问题
  - 异步更新
  - 同步更新