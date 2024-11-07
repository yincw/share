# React

## 应用入口

分类 | Hooks | Classes
---|---|---
客户端渲染 | [createRoot()](https://zh-hans.react.dev/reference/react-dom/client/createRoot) | [ReactDOM.render()](https://zh-hans.legacy.reactjs.org/docs/react-dom.html#render)
`\-` | [root.render(reactNode)](https://zh-hans.react.dev/reference/react-dom/client/createRoot#root-render) | 同上
`\-` | [root.unmount()](https://zh-hans.react.dev/reference/react-dom/client/createRoot#root-unmount) | [ReactDOM.unmountComponentAtNode()](https://zh-hans.legacy.reactjs.org/docs/react-dom.html#unmountcomponentatnode)
服务端渲染 | [hydrateRoot()](https://zh-hans.react.dev/reference/react-dom/client/hydrateRoot) | [ReactDOM.hydrate()](https://zh-hans.legacy.reactjs.org/docs/react-dom.html#hydrate)

## 创建组件

分类 | Hooks | Classes
---|---|---
创建 | - | [React.Component](https://zh-hans.react.dev/reference/react/Component#component)
`\-` | - | [React.PureComponent](https://zh-hans.react.dev/reference/react/PureComponent)
动态加载组件 | - | [React.lazy()](https://zh-hans.react.dev/reference/react/lazy) / import()
`\-` | - | [`<Suspense>`](https://zh-hans.react.dev/reference/react/Suspense)
积极反馈 | [useOptimistic()](https://zh-hans.react.dev/reference/react/useOptimistic) | -

## 组件生命周期方法

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
`\-` | - | [componentWillUpdate(nextProps, nextState)](https://zh-hans.react.dev/reference/react/Component#componentwillupdate) / [UNSAFE_componentWillUpdate(nextProps, nextState)](https://zh-hans.react.dev/reference/react/Component#unsafe_componentwillupdate)
`\-` | - | render()
`\-` | - | [getSnapshotBeforeUpdate(prevProps, prevState)](https://zh-hans.react.dev/reference/react/Component#getsnapshotbeforeupdate)
`\-` | useEffect() | [**componentDidUpdate(prevProps, prevState, snapshot?)**](https://zh-hans.react.dev/reference/react/Component#componentdidupdate)
卸载 | useEffect() | [**componentWillUnmount()**](https://zh-hans.react.dev/reference/react/Component#componentwillunmount)
错误边界 | [react-error-boundary](https://github.com/bvaughn/react-error-boundary) | [static getDerivedStateFromError(error)](https://zh-hans.react.dev/reference/react/Component#static-getderivedstatefromerror)
`\-` | - | [componentDidCatch(error, info)](https://zh-hans.react.dev/reference/react/Component#componentdidcatch)

## 组件属性

分类 | Hooks | Classes
---|---|---
属性声明及默认值 | [props=default-value](https://zh-hans.react.dev/learn/passing-props-to-a-component#specifying-a-default-value-for-a-prop) | [static defaultProps](https://zh-hans.react.dev/reference/react/Component#static-defaultprops)
读取属性值 | [props](https://zh-hans.react.dev/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component) | [this.props](https://zh-hans.react.dev/reference/react/Component#props)

## 组件状态

分类 | Hooks | Classes
---|---|---
声明状态 | [useState()](https://zh-hans.react.dev/reference/react/useState) | [state](https://zh-hans.react.dev/reference/react/Component#state)
`\-` | - | [this.setState(nextState, callback?)](https://zh-hans.react.dev/reference/react/Component#setstate)
读取状态值 | - | [this.state](https://zh-hans.react.dev/reference/react/Component#state)
`\-` | [useReducer()](https://zh-hans.react.dev/reference/react/useReducer) | -
监听状态 | [useEffect()](https://zh-hans.react.dev/reference/react/useEffect) | -
`\-` | [useLayoutEffect()](https://zh-hans.react.dev/reference/react/useLayoutEffect) | -
`\-` | [useInsertionEffect()](https://zh-hans.react.dev/reference/react/useInsertionEffect) | -

## 组件渲染

分类 | Hooks | Classes
---|---|---
JSX | [`<Fragment>` / `<></>`](https://zh-hans.react.dev/reference/react/Fragment) | [React.Children](https://zh-hans.react.dev/reference/react/Children) / [`key`](https://zh-hans.react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
`\-` | - | [`htmlFor`](https://zh-hans.react.dev/reference/react-dom/components/common#common-props)
`\-` | - | [`classname`](https://zh-hans.react.dev/reference/react-dom/components/common#applying-css-styles)
`\-` | - | [`dangerouslySetInnerHTML`](https://zh-hans.react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)
React元素 | - | [React.isValidElement()](https://zh-hans.react.dev/reference/react/isValidElement)

## DOM 实例

分类 | Hooks | Classes
---|---|---
DOM 引用 | [`ref`](https://zh-hans.react.dev/learn/referencing-values-with-refs) | [`ref`](https://zh-hans.react.dev/learn/referencing-values-with-refs)
`\-` | [useRef()](https://zh-hans.react.dev/reference/react/useRef) | [React.createRef()](https://zh-hans.react.dev/reference/react/createRef)
`\-` | - | [~~this.refs~~](https://zh-hans.legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs)
组件引用 | [useImperativeHandle()](https://zh-hans.react.dev/reference/react/useImperativeHandle) | [React.forwardRef()](https://zh-hans.react.dev/reference/react/forwardRef#forwardref)
查找DOM | - | [~~ReactDOM.findDOMNode()~~](https://zh-hans.react.dev/reference/react-dom/findDOMNode)
立即更新DOM | - | [ReactDOM.flushSync()](https://zh-hans.react.dev/reference/react-dom/flushSync)
入口 | - | [ReactDOM.createPortal()](https://zh-hans.react.dev/reference/react-dom/createPortal)

## 上下文

分类 | Hooks | Classes
---|---|---
声明上下文 | [React.createContext()](https://zh-hans.react.dev/reference/react/createContext) | [React.createContext()](https://zh-hans.react.dev/reference/react/createContext)
提供 | [Context.Provider](https://zh-hans.react.dev/reference/react/createContext#provider) | [getChildContext()](https://zh-hans.react.dev/reference/react/Component#getchildcontext)
读取上下文 | [~~SomeContext.Consumer~~](https://zh-hans.react.dev/reference/react/createContext#consumer) | -
`\-` | - | [~~static childContextTypes~~](https://zh-hans.react.dev/reference/react/Component#static-childcontexttypes)
`\-` | - | [~~static contextTypes~~](https://zh-hans.react.dev/reference/react/Component#static-contexttypes)
`\-` | - | [static contextType](https://zh-hans.react.dev/reference/react/Component#static-contexttype)
`\-` | [useContext()](https://zh-hans.react.dev/reference/react/useContext) | [this.context](https://zh-hans.react.dev/reference/react/Component#context)

## 异常处理

分类 | Hooks | Classes
---|---|---
属性类型检查 | TS | [static propTypes](https://zh-hans.react.dev/reference/react/Component#static-proptypes)
错误边界 | [react-error-boundary](https://github.com/bvaughn/react-error-boundary) | [static getDerivedStateFromError(error)](https://zh-hans.react.dev/reference/react/Component#static-getderivedstatefromerror)
`\-` | - | [componentDidCatch(error, info)](https://zh-hans.react.dev/reference/react/Component#componentdidcatch)
严格模式 | [`<StrictMode>`](https://zh-hans.react.dev/reference/react/StrictMode) | -

## 工具集

分类 | Hooks | Classes
---|---|---
`-` | [useId()](https://zh-hans.react.dev/reference/react/useId) | - 
`-` | [useDebugValue()](https://zh-hans.react.dev/reference/react/useDebugValue) | - 
`-` | [useActionState()](https://zh-hans.react.dev/reference/react/useActionState) | - 

## 性能优化

分类 | Hooks | Classes
---|---|---
性能优化 | [useTransition()](https://zh-hans.react.dev/reference/react/useTransition) | [React.startTransition()](https://zh-hans.react.dev/reference/react/startTransition)
`\-` | [useDeferredValue()](https://zh-hans.react.dev/reference/react/useDeferredValue) | -
`\-` | [useMemo()](https://zh-hans.react.dev/reference/react/useMemo) | [React.memo()](https://zh-hans.react.dev/reference/react/memo#reference)
`\-` | [useCallback()](https://zh-hans.react.dev/reference/react/useCallback) | -
`\-` | [`<Profiler>`](https://zh-hans.react.dev/reference/react/Profiler) | -
