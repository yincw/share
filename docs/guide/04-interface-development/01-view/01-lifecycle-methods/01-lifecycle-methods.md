# 组件生命周期方法

分类 | Hooks | Classes
---|---|---
初始化/挂载 | [**useState()**](https://zh-hans.react.dev/reference/react/useState) | [**constructor(props)**](https://zh-hans.react.dev/reference/react/Component#constructor)
`\-` | - | [componentWillMount()](https://zh-hans.react.dev/reference/react/Component#componentwillmount) / [UNSAFE_componentWillMount()](https://zh-hans.react.dev/reference/react/Component#unsafe_componentwillmount)
`\-` | - | [static getDerivedStateFromProps(props, state)](https://zh-hans.react.dev/reference/react/Component#static-getderivedstatefromprops)
`\-` | - | [**render()**](https://zh-hans.react.dev/reference/react/Component#render)
`\-` | [**useEffect()**](https://zh-hans.react.dev/reference/react/useEffect) | [**componentDidMount()**](https://zh-hans.react.dev/reference/react/Component#componentdidmount)
更新 | - | [componentWillReceiveProps(nextProps)](https://zh-hans.react.dev/reference/react/Component#componentwillreceiveprops) / [UNSAFE_componentWillReceiveProps(nextProps, nextContext)](https://zh-hans.react.dev/reference/react/Component#unsafe_componentwillreceiveprops)
`\-` | - | static getDerivedStateFromProps(props, state)
`\-` | - | [shouldComponentUpdate(nextProps, nextState, nextContext)](https://zh-hans.react.dev/reference/react/Component#shouldcomponentupdate)
`\-` | - | React.PureComponent
`\-` | [useMemo()](https://zh-hans.react.dev/reference/react/useMemo) | React.memo()
`\-` | - | [componentWillUpdate(nextProps, nextState)](https://zh-hans.react.dev/reference/react/Component#componentwillupdate) / [UNSAFE_componentWillUpdate(nextProps, nextState)](https://zh-hans.react.dev/reference/react/Component#unsafe_componentwillupdate)
`\-` | - | render()
`\-` | - | [getSnapshotBeforeUpdate(prevProps, prevState)](https://zh-hans.react.dev/reference/react/Component#getsnapshotbeforeupdate)
`\-` | useEffect() | [**componentDidUpdate(prevProps, prevState, snapshot?)**](https://zh-hans.react.dev/reference/react/Component#componentdidupdate)
卸载 | useEffect() | [**componentWillUnmount()**](https://zh-hans.react.dev/reference/react/Component#componentwillunmount)
错误边界 | [react-error-boundary](https://github.com/bvaughn/react-error-boundary) | [static getDerivedStateFromError(error)](https://zh-hans.react.dev/reference/react/Component#static-getderivedstatefromerror)
`\-` | - | [componentDidCatch(error, info)](https://zh-hans.react.dev/reference/react/Component#componentdidcatch)

- 生命周期钩子函数
- 调用顺序
- 生命周期图示
- 参考

## 生命周期图示

![Image](/lifecycle.png)

- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/