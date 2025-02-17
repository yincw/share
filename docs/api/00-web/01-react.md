# React
 
## 应用入口

分类 | v18+ | v18-
---|---|---
CSR/客户端渲染 | [createRoot()](https://zh-hans.react.dev/reference/react-dom/client/createRoot) v18.0 | [ReactDOM.render()](https://zh-hans.legacy.reactjs.org/docs/react-dom.html#render) v0.13
`\-` | [root.render(reactNode)](https://zh-hans.react.dev/reference/react-dom/client/createRoot#root-render) v18.0 | 同上
`\-` | [root.unmount()](https://zh-hans.react.dev/reference/react-dom/client/createRoot#root-unmount) v18.0 | [ReactDOM.unmountComponentAtNode()](https://zh-hans.legacy.reactjs.org/docs/react-dom.html#unmountcomponentatnode) v0.13
`\-` | [hydrateRoot()](https://zh-hans.react.dev/reference/react-dom/client/hydrateRoot) v18.0 | [ReactDOM.hydrate()](https://zh-hans.legacy.reactjs.org/docs/react-dom.html#hydrate) v0.13

## 创建组件

分类 | Hooks | Classes
---|---|---
创建 | [函数组件](https://zh-hans.react.dev/learn/your-first-component#defining-a-component) | [React.Component](https://zh-hans.react.dev/reference/react/Component#component) v0.13
懒加载 | - | [React.lazy()](https://zh-hans.react.dev/reference/react/lazy) v16.6 <br/> [import()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/import) ES2020
异步读取值 | [use()](https://react.dev/reference/react/use) v19.0 | -
`\-加载状态` | [`<Suspense>`](https://zh-hans.react.dev/reference/react/Suspense) v18.0 | [`<React.Suspense>`](https://zh-hans.legacy.reactjs.org/docs/react-api.html#reactsuspense) v16.6
`\-Transition` | [useTransition()](https://zh-hans.react.dev/reference/react/useTransition) v18.0 | [React.startTransition()](https://zh-hans.react.dev/reference/react/startTransition) v18.0
`\-延迟更新` | [useDeferredValue()](https://zh-hans.react.dev/reference/react/useDeferredValue) v18.0 | -
性能优化 | - | [React.PureComponent](https://zh-hans.react.dev/reference/react/PureComponent) v15.3
`\-记忆渲染结果` | [useMemo()](https://zh-hans.react.dev/reference/react/useMemo) v16.8 | [React.memo()](https://zh-hans.react.dev/reference/react/memo#reference) v16.6
`\-缓存函数` | [useCallback()](https://zh-hans.react.dev/reference/react/useCallback) v16.8 | -
调试 | [useDebugValue()](https://zh-hans.react.dev/reference/react/useDebugValue) v18.0 | [static displayName](https://zh-hans.legacy.reactjs.org/docs/react-component.html#displayname)

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
属性声明及默认值 | [props=default-value](https://zh-hans.react.dev/learn/passing-props-to-a-component#specifying-a-default-value-for-a-prop) | [static defaultProps](https://zh-hans.react.dev/reference/react/Component#static-defaultprops) v0.13/ES2022
属性类型及校验 | TypeScript | [static propTypes](https://zh-hans.react.dev/reference/react/Component#static-proptypes) v0.13/ES2022
读取属性值 | [props](https://zh-hans.react.dev/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component) | [this.props](https://zh-hans.react.dev/reference/react/Component#props) v0.13

## 组件状态

分类 | Hooks | Classes
---|---|---
声明 | [useState()](https://zh-hans.react.dev/reference/react/useState) v16.8 | [state](https://zh-hans.react.dev/reference/react/Component#state) ES2022
读取 | - | [this.state](https://zh-hans.react.dev/reference/react/Component#state) v0.13
更新 | [set](https://zh-hans.react.dev/reference/react/useState#setstate) v16.8 | [this.setState(nextState, callback?)](https://zh-hans.react.dev/reference/react/Component#setstate) v0.13
`\-` | [useReducer()](https://zh-hans.react.dev/reference/react/useReducer) v16.8 | -
监听 | [useEffect()](https://zh-hans.react.dev/reference/react/useEffect) v16.8 | -
`\-` | [useLayoutEffect()](https://zh-hans.react.dev/reference/react/useLayoutEffect) v16.8 | -
`\-` | [useEffectEvent()](https://zh-hans.react.dev/learn/escape-hatches#separating-events-from-effects) | -
`\-CSS-in-JS` | [useInsertionEffect()](https://zh-hans.react.dev/reference/react/useInsertionEffect) v18.0 | -

## 表单输入

分类 | Hooks | Classes
---|---|---
表单 | [`<form>`](https://zh-hans.react.dev/reference/react-dom/components/form) v19.0 | - 
`\-表单动作` | [useActionState()](https://zh-hans.react.dev/reference/react/useActionState) v19.0 | - 
`\-乐观更新表单` | [useOptimistic()](https://zh-hans.react.dev/reference/react/useOptimistic) v19.0 | -
`\-表单状态` | [useFormStatus()](https://zh-hans.react.dev/reference/react-dom/hooks/useFormStatus) v19.0 | -
`\-` | [`<input>`](https://zh-hans.react.dev/reference/react-dom/components/input) | - 
`\-` | [`<textarea>`](https://zh-hans.react.dev/reference/react-dom/components/textarea) | - 
`\-` | [`<select>`](https://zh-hans.react.dev/reference/react-dom/components/select) | - 
`\-` | [`<option>`](https://zh-hans.react.dev/reference/react-dom/components/option) | - 
`\-` | [`<progress>`](https://zh-hans.react.dev/reference/react-dom/components/progress) | - 

## 组件渲染

分类 | Hooks | Classes
---|---|---
JSX | [`<Fragment>` / `<></>`](https://zh-hans.react.dev/reference/react/Fragment) v16.2 | [React.Children](https://zh-hans.react.dev/reference/react/Children) v0.13 <br/> [`key`](https://zh-hans.react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) v0.13
`\-` | - | [`htmlFor`](https://zh-hans.react.dev/reference/react-dom/components/common#common-props) v0.13
`\-` | - | [`classname`](https://zh-hans.react.dev/reference/react-dom/components/common#applying-css-styles) v0.13
`\-` | - | [`dangerouslySetInnerHTML`](https://zh-hans.react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) v0.13
渲染函数 | - | [createElement(type, props, ...children)](https://zh-hans.react.dev/reference/react/createElement) v0.13
`\-` | - | [~~createFactory(type)~~](https://zh-hans.react.dev/reference/react/createFactory) v0.13
`\-` | - | [cloneElement(element, props, ...children)](https://zh-hans.react.dev/reference/react/cloneElement) v0.13
`\-` | - | [isValidElement()](https://zh-hans.react.dev/reference/react/isValidElement) v0.13
SSR/服务端渲染 | - | ReactDOM.renderToString() v0.13 <br/> [renderToString(reactNode, options?)](https://zh-hans.react.dev/reference/react-dom/server/renderToString) v18.0
`\-` | - | ReactDOM.renderToStaticMarkup() v0.13 <br/> [renderToStaticMarkup(reactNode, options?) ](https://zh-hans.react.dev/reference/react-dom/server/renderToStaticMarkup) v18.0
`\-Web Streams` | - | [renderToReadableStream(reactNode, options?)](https://zh-hans.react.dev/reference/react-dom/server/renderToReadableStream) v18.0
`\-Node.js Streams` | - | [renderToPipeableStream(reactNode, options?)](https://zh-hans.react.dev/reference/react-dom/server/renderToPipeableStream) v18.0
`\-` | - | [renderToStaticNodeStream(reactNode, options?) ](https://zh-hans.react.dev/reference/react-dom/server/renderToStaticNodeStream) v18.0
`\-` | - | ~~ReactDOM.renderToNodeStream()~~ v0.13 <br/> [~~renderToNodeStream(reactNode, options?)~~](https://zh-hans.react.dev/reference/react-dom/server/renderToNodeStream) v18.0
SSG/静态站点生成 | [prerender()](https://react.dev/reference/react-dom/static/prerender) v19.0 | - 
`\-` | [prerenderToNodeStream()](https://react.dev/reference/react-dom/static/prerenderToNodeStream) v19.0 | - 
HTML元数据 | [`<meta>`](https://zh-hans.react.dev/reference/react-dom/components/meta) v19.0 | - 
`\-` | [`<title>`](https://zh-hans.react.dev/reference/react-dom/components/title) v19.0 | - 
`\-` | [`<script>`](https://zh-hans.react.dev/reference/react-dom/components/script) v19.0 | - 
预加载资源 | [preinit()](https://react.dev/reference/react-dom/preinit) v19.0 | - 
`\-` | [preload()](https://react.dev/reference/react-dom/preload) v19.0 | - 
`\-` | [prefetchDNS()](https://react.dev/reference/react-dom/prefetchDNS) v19.0 | - 
`\-` | [preconnect()](https://react.dev/reference/react-dom/preconnect) v19.0 | - 
`\-` | [preinitModule()](https://react.dev/reference/react-dom/preinitModule) v19.0 | - 
`\-` | [preloadModule()](https://react.dev/reference/react-dom/preloadModule) v19.0 | - 
服务器组件 | [cache()](https://react.dev/reference/react/cache) v19.0 | - 

## 组件上下文

分类 | Hooks | Classes
---|---|---
创建 | [React.createContext()](https://zh-hans.react.dev/reference/react/createContext) v16.3 | [~~static childContextTypes~~](https://zh-hans.react.dev/reference/react/Component#static-childcontexttypes) v0.12/ES2022 <br/> [~~getChildContext()~~](https://zh-hans.react.dev/reference/react/Component#getchildcontext) v0.12
提供 | [`<SomeContext.Provider>`](https://zh-hans.react.dev/reference/react/createContext#provider) v16.3 | [static contextType](https://zh-hans.react.dev/reference/react/Component#static-contexttype) v16.3/ES2022 <br/> [~~static contextTypes~~](https://zh-hans.react.dev/reference/react/Component#static-contexttypes) v0.12/ES2022 
读取和订阅 | [useContext()](https://zh-hans.react.dev/reference/react/useContext) v16.8 <br/> [`<SomeContext.Consumer>`](https://zh-hans.react.dev/reference/react/createContext#consumer) v16.3 | [this.context](https://zh-hans.react.dev/reference/react/Component#context) v0.12
调试 | - | [Context.displayName](https://zh-hans.legacy.reactjs.org/docs/context.html#contextdisplayname)

## DOM 实例

分类 | Hooks | Classes
---|---|---
DOM 实例 | [`ref`](https://zh-hans.react.dev/learn/referencing-values-with-refs) v0.13 | [`ref`](https://zh-hans.react.dev/learn/referencing-values-with-refs) v0.13
`\-获取` | [useRef()](https://zh-hans.react.dev/reference/react/useRef) v16.8 | [React.createRef()](https://zh-hans.react.dev/reference/react/createRef) v16.3 <br /> [~~this.refs~~](https://zh-hans.legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs) v0.13
`\-立即更新` | - | [ReactDOM.flushSync()](https://zh-hans.react.dev/reference/react-dom/flushSync) v0.13
`\-强制重新渲染` | [useSyncExternalStore()](https://zh-hans.react.dev/reference/react/useSyncExternalStore) v18.0 | [forceUpdate()](https://zh-hans.react.dev/reference/react/Component#forceupdate) v0.13
`\-查找` | - | [~~ReactDOM.findDOMNode()~~](https://zh-hans.react.dev/reference/react-dom/findDOMNode) v0.13
组件实例 | [useImperativeHandle()](https://zh-hans.react.dev/reference/react/useImperativeHandle) v16.8 | [React.forwardRef()](https://zh-hans.react.dev/reference/react/forwardRef#forwardref) v16.3
`\-挂载` | - | [ReactDOM.createPortal()](https://zh-hans.react.dev/reference/react-dom/createPortal) v16.0

## 组件样式

分类 | Hooks | Classes
---|---|---
外联样式 | [`classname`](https://zh-hans.react.dev/learn#adding-styles) | -
`\-` | [`<link>`](https://zh-hans.react.dev/reference/react-dom/components/link) v19.0 | -
行内样式 | [`style`](https://zh-hans.react.dev/learn/javascript-in-jsx-with-curly-braces#using-double-curlies-css-and-other-objects-in-jsx) | -
内联样式 | [`<style>`](https://zh-hans.react.dev/reference/react-dom/components/style) v19.0 | -
CSS-in-JS | [`useInsertionEffect()`](https://zh-hans.react.dev/reference/react/useInsertionEffect) | -

## 异常处理

分类 | Hooks | Classes
---|---|---
属性类型检查 | TypeScript | [static propTypes](https://zh-hans.react.dev/reference/react/Component#static-proptypes) v0.13/ES2022
错误边界 | [react-error-boundary](https://github.com/bvaughn/react-error-boundary) | [static getDerivedStateFromError(error)](https://zh-hans.react.dev/reference/react/Component#static-getderivedstatefromerror) v16.6
`\-` | - | [componentDidCatch(error, info)](https://zh-hans.react.dev/reference/react/Component#componentdidcatch) v16.0
`\-` | - | [onCaughtError()](https://react.dev/reference/react-dom/client/createRoot#parameters) v19.0
`\-` | - | [onUncaughtError()](https://react.dev/reference/react-dom/client/createRoot#parameters) v19.0
`\-` | - | [onRecoverableError()](https://react.dev/reference/react-dom/client/createRoot#parameters) v19.0
严格模式 | [`<StrictMode>`](https://zh-hans.react.dev/reference/react/StrictMode) v16.3 | -

## 性能优化

分类 | Hooks | Classes
---|---|---
性能分析 | [`<Profiler>`](https://zh-hans.react.dev/reference/react/Profiler) v16.9 | -
懒加载 | - | [React.lazy()](https://zh-hans.react.dev/reference/react/lazy) v16.6 <br/> [import()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/import) ES2020
记忆和缓存 | - | [React.PureComponent](https://zh-hans.react.dev/reference/react/PureComponent) v15.3
`\-记忆渲染结果` | [useMemo()](https://zh-hans.react.dev/reference/react/useMemo) v16.8 | [React.memo()](https://zh-hans.react.dev/reference/react/memo#reference) v16.6
`\-缓存函数` | [useCallback()](https://zh-hans.react.dev/reference/react/useCallback) v16.8 | -
`\-` | - | [`key`](https://zh-hans.react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) v0.13
延迟更新 | [useTransition()](https://zh-hans.react.dev/reference/react/useTransition) v18.0 | [React.startTransition()](https://zh-hans.react.dev/reference/react/startTransition) v18.0
`\-` | [useDeferredValue()](https://zh-hans.react.dev/reference/react/useDeferredValue) v18.0 | -
Effect 事件分离 | [useEffectEvent()](https://zh-hans.react.dev/learn/escape-hatches#separating-events-from-effects) | -
React 编译器 | [React Compiler](https://zh-hans.react.dev/learn/react-compiler) | -
