# React
 
## 应用入口

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

## 创建组件

分类 | Hooks | Classes
---|---|---
创建 | - | [React.Component](https://zh-hans.react.dev/reference/react/Component#component) v0.13
`\-` | - | [React.PureComponent](https://zh-hans.react.dev/reference/react/PureComponent) v15.3
动态加载组件 | - | [React.lazy()](https://zh-hans.react.dev/reference/react/lazy) v16.6 / import() ES2020
`\-` | [`<Suspense>`](https://zh-hans.react.dev/reference/react/Suspense) v18.0 | [`<React.Suspense>`](https://zh-hans.legacy.reactjs.org/docs/react-api.html#reactsuspense) v16.6
积极反馈 | [useOptimistic()](https://zh-hans.react.dev/reference/react/useOptimistic) | -

## 组件生命周期方法

分类 | Hooks | Classes
---|---|---
挂载 | [**useState()**](https://zh-hans.react.dev/reference/react/useState) v16.8 | [**constructor(props)**](https://zh-hans.react.dev/reference/react/Component#constructor) v0.13
`\-` | - | [componentWillMount()](https://zh-hans.react.dev/reference/react/Component#componentwillmount) v0.13 <br/> [UNSAFE_componentWillMount()](https://zh-hans.react.dev/reference/react/Component#unsafe_componentwillmount) v16.3
`\-` | `useState(stateFromPropsFn)` | static getDerivedStateFromProps(props, state) v16.3
`\-` | `return ()` | [**render()**](https://zh-hans.react.dev/reference/react/Component#render) v0.13
`\-` | [**`useEffect(()=>{},[])`**](https://zh-hans.react.dev/reference/react/useEffect) v16.8 | [**componentDidMount()**](https://zh-hans.react.dev/reference/react/Component#componentdidmount) v0.13
更新 | - | [componentWillReceiveProps(nextProps)](https://zh-hans.react.dev/reference/react/Component#componentwillreceiveprops) v0.13 <br/> [UNSAFE_componentWillReceiveProps(nextProps, nextContext)](https://zh-hans.react.dev/reference/react/Component#unsafe_componentwillreceiveprops) v16.3 <br/> [static getDerivedStateFromProps(props, state)](https://zh-hans.react.dev/reference/react/Component#static-getderivedstatefromprops) v16.3
`\-` | [useMemo(()=>{},[''])](https://zh-hans.react.dev/reference/react/useMemo) v16.8 | [shouldComponentUpdate(nextProps, nextState, nextContext)](https://zh-hans.react.dev/reference/react/Component#shouldcomponentupdate) v0.13
`\-` | - | [componentWillUpdate(nextProps, nextState)](https://zh-hans.react.dev/reference/react/Component#componentwillupdate) v0.13 <br/> [UNSAFE_componentWillUpdate(nextProps, nextState)](https://zh-hans.react.dev/reference/react/Component#unsafe_componentwillupdate) v16.3
`\-` | - | render()
`\-` | [useLayoutEffect(setup, dependencies?)](https://zh-hans.react.dev/reference/react/useLayoutEffect) v16.8 | [getSnapshotBeforeUpdate(prevProps, prevState)](https://zh-hans.react.dev/reference/react/Component#getsnapshotbeforeupdate) v16.3
`\-` | `useEffect(()=>{}, [''])` | [**componentDidUpdate(prevProps, prevState, snapshot?)**](https://zh-hans.react.dev/reference/react/Component#componentdidupdate) v0.13
卸载 | `useEffect(()=>{return ()=>{}}, [])` | [**componentWillUnmount()**](https://zh-hans.react.dev/reference/react/Component#componentwillunmount) v0.13
错误边界 | [react-error-boundary](https://github.com/bvaughn/react-error-boundary) | [static getDerivedStateFromError(error)](https://zh-hans.react.dev/reference/react/Component#static-getderivedstatefromerror) v16.6
`\-` | - | [componentDidCatch(error, info)](https://zh-hans.react.dev/reference/react/Component#componentdidcatch) v16.0

## 组件属性

分类 | Hooks | Classes
---|---|---
属性声明及默认值 | [props=default-value](https://zh-hans.react.dev/learn/passing-props-to-a-component#specifying-a-default-value-for-a-prop) | [static defaultProps](https://zh-hans.react.dev/reference/react/Component#static-defaultprops) v0.13/ES7
读取属性值 | [props](https://zh-hans.react.dev/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component) | [this.props](https://zh-hans.react.dev/reference/react/Component#props) v0.13

## 组件状态

分类 | Hooks | Classes
---|---|---
声明状态 | [useState()](https://zh-hans.react.dev/reference/react/useState) v16.8 | [state](https://zh-hans.react.dev/reference/react/Component#state) ES7
`\-` | - | [this.setState(nextState, callback?)](https://zh-hans.react.dev/reference/react/Component#setstate) v0.13
读取状态值 | - | [this.state](https://zh-hans.react.dev/reference/react/Component#state) v0.13
`\-` | [useReducer()](https://zh-hans.react.dev/reference/react/useReducer) v16.8 | -
监听状态 | [useEffect()](https://zh-hans.react.dev/reference/react/useEffect) v16.8 | -
`\-` | [useLayoutEffect()](https://zh-hans.react.dev/reference/react/useLayoutEffect) v16.8 | -
`\-` | [useInsertionEffect()](https://zh-hans.react.dev/reference/react/useInsertionEffect) v18.0 | -

## 组件渲染

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

## DOM 实例

分类 | Hooks | Classes
---|---|---
DOM 引用 | [`ref`](https://zh-hans.react.dev/learn/referencing-values-with-refs) v0.13 | [`ref`](https://zh-hans.react.dev/learn/referencing-values-with-refs) v0.13
`\-` | [useRef()](https://zh-hans.react.dev/reference/react/useRef) v16.8 | [React.createRef()](https://zh-hans.react.dev/reference/react/createRef) v16.3 <br /> [~~this.refs~~](https://zh-hans.legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs) v0.13
组件引用 | [useImperativeHandle()](https://zh-hans.react.dev/reference/react/useImperativeHandle) v16.8 | [React.forwardRef()](https://zh-hans.react.dev/reference/react/forwardRef#forwardref) v16.3
立即更新DOM | - | [ReactDOM.flushSync()](https://zh-hans.react.dev/reference/react-dom/flushSync) v0.13
查找DOM | - | [~~ReactDOM.findDOMNode()~~](https://zh-hans.react.dev/reference/react-dom/findDOMNode) v0.13
挂载入口 | - | [ReactDOM.createPortal()](https://zh-hans.react.dev/reference/react-dom/createPortal) v16.0

## 上下文

分类 | Hooks | Classes
---|---|---
声明上下文 | - | [React.createContext()](https://zh-hans.react.dev/reference/react/createContext) v16.3
提供上下文 | - | [SomeContext.Provider](https://zh-hans.react.dev/reference/react/createContext#provider) v16.3 / [~~static childContextTypes~~](https://zh-hans.react.dev/reference/react/Component#static-childcontexttypes) v0.12
`\-` | - | [~~getChildContext()~~](https://zh-hans.react.dev/reference/react/Component#getchildcontext) v0.12
读取上下文 | - | [~~static contextTypes~~](https://zh-hans.react.dev/reference/react/Component#static-contexttypes) v0.12
`\-` | - | [static contextType](https://zh-hans.react.dev/reference/react/Component#static-contexttype) v16.3
`\-` | - | [~~SomeContext.Consumer~~](https://zh-hans.react.dev/reference/react/createContext#consumer) v16.3
`\-` | [useContext()](https://zh-hans.react.dev/reference/react/useContext) v16.8 | [this.context](https://zh-hans.react.dev/reference/react/Component#context) v0.12

## 异常处理

分类 | Hooks | Classes
---|---|---
属性类型检查 | TS | [static propTypes](https://zh-hans.react.dev/reference/react/Component#static-proptypes) v0.13/ES7
错误边界 | [react-error-boundary](https://github.com/bvaughn/react-error-boundary) | [static getDerivedStateFromError(error)](https://zh-hans.react.dev/reference/react/Component#static-getderivedstatefromerror) v16.6
`\-` | - | [componentDidCatch(error, info)](https://zh-hans.react.dev/reference/react/Component#componentdidcatch) v16.0
严格模式 | [`<StrictMode>`](https://zh-hans.react.dev/reference/react/StrictMode) v16.3 | -

## 工具集

分类 | Hooks | Classes
---|---|---
`\-` | [useId()](https://zh-hans.react.dev/reference/react/useId) v18.0 | - 
`\-` | [useDebugValue()](https://zh-hans.react.dev/reference/react/useDebugValue) v18.0 | - 
`\-` | [useActionState()](https://zh-hans.react.dev/reference/react/useActionState) | - 

## 性能优化

分类 | Hooks | Classes
---|---|---
性能优化 | [useMemo()](https://zh-hans.react.dev/reference/react/useMemo) v16.8 | [React.memo()](https://zh-hans.react.dev/reference/react/memo#reference) v16.6
`\-` | [useCallback()](https://zh-hans.react.dev/reference/react/useCallback) v16.8 | -
`\-` | [`<Profiler>`](https://zh-hans.react.dev/reference/react/Profiler) v16.9 | -
`\-` | [useTransition()](https://zh-hans.react.dev/reference/react/useTransition) v18.0 | [React.startTransition()](https://zh-hans.react.dev/reference/react/startTransition) v18.0
`\-` | [useDeferredValue()](https://zh-hans.react.dev/reference/react/useDeferredValue) v18.0 | -