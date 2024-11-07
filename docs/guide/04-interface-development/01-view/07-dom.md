# DOM 实例

分类 | Hooks | Classes
---|---|---
DOM 引用 | [`ref`](https://zh-hans.react.dev/learn/referencing-values-with-refs) | [`ref`](https://zh-hans.react.dev/learn/referencing-values-with-refs)
`\-` | [useRef()](https://zh-hans.react.dev/reference/react/useRef) | [React.createRef()](https://zh-hans.react.dev/reference/react/createRef)
`\-` | - | [~~this.refs~~](https://zh-hans.legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs)
组件引用 | [useImperativeHandle()](https://zh-hans.react.dev/reference/react/useImperativeHandle) | [React.forwardRef()](https://zh-hans.react.dev/reference/react/forwardRef#forwardref)
查找DOM | - | [~~ReactDOM.findDOMNode()~~](https://zh-hans.react.dev/reference/react-dom/findDOMNode)
立即更新DOM | - | [ReactDOM.flushSync()](https://zh-hans.react.dev/reference/react-dom/flushSync)
入口 | - | [ReactDOM.createPortal()](https://zh-hans.react.dev/reference/react-dom/createPortal)

- DOM 挂载
- DOM 实例
- 组件 DOM 引用
  - ref
  - React.createRef()  Class语法
    - refs
  - useRef()
  - React.forwardRef() 引用组件
- 立即更新 DOM
  - flushSync()
- 公开实例属性
  - useImperativeHandle()
- 传送
  - ReactDOM.createPortal()
- React.isValidElement()
- findDOMNode