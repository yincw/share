# 发展历程

关键节点：

- v19
  - 支持服务器组件及服务器功能
  - 支持自定义元素
  - 支持HTML 元数据、样式表、脚本及资源预加载
  - 支持表单状态
- v18
  - 停止支持 IE
  - 支持并发 React（Concurrent React）
  - 推荐默认编写 函数式组件
- v16
  - 停止支持 IE9/10，支持 IE11+
  - 支持钩子（Hooks）函数
  - 支持 Fiber 架构
- v15
  - 停止支持 IE8，支持 IE9+
  - 停止支持 混入（mixin）
- v0.13
  - 支持ES6 类（Classes）组件写法
- v0.12
  - 支持 JSX
  - 支持 React Elements

```ansi
┌  Welcome to React
│
◆  React 19: 2024-12-05
│  ○ v19.0：
│     ○ 新增
│       ○ react
│         ○ useActionState()
│         ○ useOptimistic()
│         ○ use()
│         ○ cache()
│         ○ act()
│       ○ react-dom
│         ○ useFormStatus()
│         ○ <form>
│         ○ <title>
│         ○ <meta>
│         ○ <link>
│         ○ <style>
│         ○ <script>
│         ○ ✅ 支持预加载资源：
│           ○ preinit()
│           ○ preload()
│           ○ prefetchDNS()
│           ○ preconnect()
│           ○ preinitModule()
│           ○ preloadModule()
│       ○ react-dom/client
│         ○ onCaughtError()
│         ○ onUncaughtError()
│         ○ onRecoverableError()
│       ○ react-dom/static
│         ○ prerender()
│         ○ prerenderToNodeStream()
│       ○ ✅ Server Components
│         ○ 服务器组件（React Server Components）'use client'
│         ○ 服务器功能（React Server Functions）'use server'
│           ○ 服务器操作（React Server Actions）
│       ○ ✅ 支持自定义元素（Custom Elements）
│     ○ 优化/改进
│       ○ startTransition() 支持异步函数，它将自动管理异步状态、错误、表单和乐观更新。
│       ○ ref 支持函数组件的 prop 进行访问，支持从回调返回清理函数。useRef 需要一个参数。
│       ○ <Context> 作为提供商。
│       ○ useDeferredValue() 支持初始化值。
│     ○ 移除
│       ○ 移除多项之前版本中弃用的功能代码：
│       ○ react：
│         ○ PropTypes
│         ○ propTypes
│         ○ defaultProps
│         ○ static childContextTypes
│         ○ getChildContext()
│         ○ static contextTypes
│         ○ createFactory()
│       ○ react-dom：
│         ○ render()
│         ○ hydrate()
│         ○ unmountComponentAtNode()
│         ○ findDOMNode()
│         ○ unstable_renderSubtreeIntoContainer()
│         ○ unstable_runWithPriority()
│         ○ unstable_createEventHandle()
│         ○ unstable_flushControlled()
│
◆  React 18: 2022-03-29
│  ○ v18.0：2022-03
│     ○ react-dom
│       ○ 🚫 弃用 ReactDOM.render()
│       ○ 🚫 弃用 ReactDOM.hydrate()
│       ○ 🚫 弃用 ReactDOM.unmountComponentAtNode()
│       ○ 🚫 弃用 ReactDOM.renderSubtreeIntoContainer()
│     ○ react-dom/client
│       ○ createRoot()
│       ○ hydrateRoot()
│     ○ react-dom/server
│       ○ renderToPipeableStream() // Node
│       ○ renderToReadableStream() // Deno、Cloudflare Workers
│       ○ 🚫 弃用 ReactDOMServer.renderToNodeStream()
│       ○ 不鼓励使用 renderToString()
│       ○ renderToStaticMarkup()
│     ○ 预取
│       ○ <Suspense>
│     ○ 新的 Hooks
│       ○ useId()
│     ○ 过渡（transition）更新
│       ○ startTransition()
│       ○ useTransition()
│       ○ useDeferredValue()
│     ○ 集成 store
│       ○ useSyncExternalStore()
│     ○ CSS-in-JS
│       ○ useInsertionEffect()
│     ○ 调试
│       ○ useDebugValue()
│     ○ 🚫 停止支持 IE
│       ○ 依赖于 Promise、Symbol、Object.assign
│     ○ ✅ 支持 并发 React（Concurrent React）
│       ○ 并发渲染器
│       ○ 优先队列和多重缓冲技术
│       ○ 自动批处理
│     ○ 流式服务端渲染
│     ○ 更严的严格模式
│     ○ 预渲染 KeepAlive/Offscreen
│     ○ ✅ 推荐默认编写函数式组件
│
◇  React 17: 2020-10-20
│  ○ 将事件委托给 roots 而不是 document。
│  ○ 新的 JSX 转换（Transform）
│
◇  React 16: 2017-09-26
│  ○ v16.13：2020-02
│     ○ 🚫 弃用 createFactory()
│  ○ v16.9：2019-08
│     ○ 性能分析工具：
│       ○ <Profiler>
│     ○ 🚫 弃用模块模式工厂（return { render() { return <div />; } } ）
│  ○ v16.8：
│     ○ 状态/响应：
│       ○ useState()
│       ○ useReducer()
│       ○ useEffect()
│       ○ useLayoutEffect()
│     ○ 性能/缓存：
│       ○ useMemo()
│       ○ useCallback()
│     ○ 上下文：
│       ○ useContext()
│     ○ Ref：
│       ○ useRef()
│       ○ useImperativeHandle()
│     ○ ✅ 支持钩子（Hooks）函数
│   ○ v16.6：2018-10
│     ○ 生命周期：
│       ○ static getDerivedStateFromError()
│     ○ 支持组件缓存：
│       ○ memo()
│     ○ 支持代码拆分/拉加载：
│       ○ lazy()
│       ○ <Suspense>
│     ○ 🚫 弃用 旧版上下文（contextTypes、getChildContext）
│     ○ 🚫 弃用 ReactDOM.findDOMNode()
│  ○ v16.3：2018-03
│     ○ 生命周期：
│       ○ UNSAFE_componentWillMount()
│       ○ UNSAFE_componentWillReceiveProps()
│       ○ UNSAFE_componentWillUpdate()
│       ○ static getDerivedStateFromProps()
│       ○ getSnapshotBeforeUpdate()
│     ○ 上下文：
│       ○ createContext()
│       ○ <Provider>
│       ○ static contextType
│       ○ <SomeContext.Consumer>
│     ○ Ref：
│       ○ createRef()
│       ○ forwardRef()
│       ○ 🚫 弃用字符串 refs
│     ○ 严格模式：
│       ○ <StrictMode>
│  ○ v16.2：
│     ○ 多个元素：
│       ○ <Fragment> / <></>
│  ○ v16.0：
│     ○ 生命周期方法：
│       ○ componentDidCatch()
│     ○ 门户：
│       ○ createPortal()
│     ○ 🚫 停止支持 IE9/10，支持 IE11+
│       ○ 依赖于集合类型 Map 和 Set；也依赖于 requestAnimationFrame
│     ○ 🚫 停止支持 React Addons（插件）
│     ○ ✅ 支持 Fiber 架构（重写了 React）
│       ○ 支持虚拟 DOM 的增量渲染
│       ○ 支持 异步渲染
│       ○ 支持将可中断的工作拆分为块
│       ○ 能够确定优先级、变基和重用正在进行的工作
│       ○ 能够在父级和子级之间来回让步以支持 React 中的布局
│       ○ 能够从 render() 返回多个元素
│       ○ 能够更好地支持错误边界
│
◇  React 15: 2016-04-07
│  ○ v15.5：2017-04
│     ○ 🚫 停止支持混入（mixin）
│     ○ 🚫 弃用 PropTypes
│  ○ v15.3：
│     ○ 类：
│       ○ React.PureComponent
│       ○ 支持 高阶组件
│  ○ v15.0：
│     ○ 🚫 停止支持 IE8，支持 IE9+
│     ○ 错误边界
│       ○ unstable_handleError
│     ○ 门户
│       ○ unstable_renderSubtreeIntoContainer
│
◇  v0.14: 2015-10-07
│  ○ 两个包：react 和 react-dom
│     ○ react-dom
│       ○ createElement()
│       ○ cloneElement()
│       ○ isValidElement()
│       ○ forceUpdate()
│       ○ flushSync()
│       ○ findDOMNode()
│       ○ render()
│       ○ unmountComponentAtNode()
│       ○ hydrate() 
│       ○ renderToNodeStream() 
│       ○ renderToString() 
│       ○ renderToStaticMarkup() 
│  ○ 新的 React Devtools
│  ○ 🚫 弃用 react-tools
│
◇  v0.13: 2015-03-10
│  ○ ✅ 支持 ES6 类（Classes）的组件写法
│     ○ React.Component
│     ○ .displayName / static displayName
│     ○ .defaultProps / static defaultProps 
│     ○ .propTypes / static propTypes
│     ○ constructor()
│     ○ state
│     ○ .childContextTypes / static childContextTypes
│     ○ getChildContext()
│     ○ .contextTypes / static contextTypes
│  ○ 支持 Babel
│  ○ 支持 React Native
│
◇  v0.12: 2014-10-28
│  ○ ✅ 支持 JSX
│  ○ ✅ 支持 React Elements
│     ○ createElement()
│     ○ createFactory()
│     ○ createClass()
│  ○ 支持面向对象（{}）的组件写法
│     ○ getDefaultProps()
│     ○ getInitialState()
│     ○ componentWillMount()
│     ○ render()
│     ○ componentDidMount()
│     ○ componentWillReceiveProps()
│     ○ shouldComponentUpdate()
│     ○ componentWillUpdate()
│     ○ componentDidUpdate()
│     ○ componentWillUnmount()
│  ○ 支持默认自动绑定
│  ○ 支持 prop 验证和默认值
│
◇  ...
│
◇  React 开源: 2013-05-29
│  ○ React 于 2013年5月29日 在 Facebook Seattle 开源
│
└
```

- https://react.dev/versions