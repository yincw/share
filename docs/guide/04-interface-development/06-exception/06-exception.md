# 异常处理

分类 | Hooks | Classes
---|---|---
属性类型检查 | TS | [static propTypes](https://zh-hans.react.dev/reference/react/Component#static-proptypes) v0.13/ES7
错误边界 | [react-error-boundary](https://github.com/bvaughn/react-error-boundary) | [static getDerivedStateFromError(error)](https://zh-hans.react.dev/reference/react/Component#static-getderivedstatefromerror) v16.6
`\-` | - | [componentDidCatch(error, info)](https://zh-hans.react.dev/reference/react/Component#componentdidcatch) v16.0
严格模式 | [`<StrictMode>`](https://zh-hans.react.dev/reference/react/StrictMode) v16.3 | -

- 类型检查
  - static propTypes
  - .propTypes
- 严格模式
  - `<StrictMode>`
- 错误边界
  - static getDerivedStateFromError(error)
  - componentDidCatch(error, info)
    - react-error-boundary