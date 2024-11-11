# 组件生命周期方法

分类 | Hooks | Classes
---|---|---
初始化/挂载 | [**useState()**](https://zh-hans.react.dev/reference/react/useState) v16.8 | [**constructor(props)**](https://zh-hans.react.dev/reference/react/Component#constructor) v0.13
`\-` | - | [componentWillMount()](https://zh-hans.react.dev/reference/react/Component#componentwillmount) v0.13 / [UNSAFE_componentWillMount()](https://zh-hans.react.dev/reference/react/Component#unsafe_componentwillmount) v16.3
`\-` | - | [static getDerivedStateFromProps(props, state)](https://zh-hans.react.dev/reference/react/Component#static-getderivedstatefromprops) v16.3
`\-` | - | [**render()**](https://zh-hans.react.dev/reference/react/Component#render) v0.13
`\-` | [**`useEffect(()=>{},[])`**](https://zh-hans.react.dev/reference/react/useEffect) v16.8 | [**componentDidMount()**](https://zh-hans.react.dev/reference/react/Component#componentdidmount) v0.13
更新 | - | [componentWillReceiveProps(nextProps)](https://zh-hans.react.dev/reference/react/Component#componentwillreceiveprops) v0.13 / [UNSAFE_componentWillReceiveProps(nextProps, nextContext)](https://zh-hans.react.dev/reference/react/Component#unsafe_componentwillreceiveprops) v16.3
`\-` | - | static getDerivedStateFromProps(props, state)
`\-` | - | [shouldComponentUpdate(nextProps, nextState, nextContext)](https://zh-hans.react.dev/reference/react/Component#shouldcomponentupdate) v0.13
`\-` | - | [componentWillUpdate(nextProps, nextState)](https://zh-hans.react.dev/reference/react/Component#componentwillupdate) v0.13 / [UNSAFE_componentWillUpdate(nextProps, nextState)](https://zh-hans.react.dev/reference/react/Component#unsafe_componentwillupdate) v16.3
`\-` | - | render()
`\-` | [useLayoutEffect(setup, dependencies?)](https://zh-hans.react.dev/reference/react/useLayoutEffect) v16.8 | [getSnapshotBeforeUpdate(prevProps, prevState)](https://zh-hans.react.dev/reference/react/Component#getsnapshotbeforeupdate) v16.3
`\-` | `useEffect(()=>{}, [''])` | [**componentDidUpdate(prevProps, prevState, snapshot?)**](https://zh-hans.react.dev/reference/react/Component#componentdidupdate) v0.13
卸载 | `useEffect(()=>{return ()=>{}}, [''])` | [**componentWillUnmount()**](https://zh-hans.react.dev/reference/react/Component#componentwillunmount) v0.13
错误边界 | [react-error-boundary](https://github.com/bvaughn/react-error-boundary) | [static getDerivedStateFromError(error)](https://zh-hans.react.dev/reference/react/Component#static-getderivedstatefromerror) v16.6
`\-` | - | [componentDidCatch(error, info)](https://zh-hans.react.dev/reference/react/Component#componentdidcatch) v16.0

- 生命周期钩子函数
- 调用顺序
- 生命周期图示
- 参考

## 生命周期图示

![Image](/lifecycle.png)

- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/