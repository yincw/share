# DOM 实例

分类 | Hooks | Classes
---|---|---
DOM 引用 | [`ref`](https://zh-hans.react.dev/learn/referencing-values-with-refs) v0.13 | [`ref`](https://zh-hans.react.dev/learn/referencing-values-with-refs) v0.13
`\-` | [useRef()](https://zh-hans.react.dev/reference/react/useRef) v16.8 | [React.createRef()](https://zh-hans.react.dev/reference/react/createRef) v16.3
`\-` | - | [~~this.refs~~](https://zh-hans.legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs) v0.13
组件引用 | [useImperativeHandle()](https://zh-hans.react.dev/reference/react/useImperativeHandle) v16.8 | [React.forwardRef()](https://zh-hans.react.dev/reference/react/forwardRef#forwardref) v16.3
立即更新DOM | - | [ReactDOM.flushSync()](https://zh-hans.react.dev/reference/react-dom/flushSync) v0.13
查找DOM | - | [~~ReactDOM.findDOMNode()~~](https://zh-hans.react.dev/reference/react-dom/findDOMNode) v0.13
挂载入口 | - | [ReactDOM.createPortal()](https://zh-hans.react.dev/reference/react-dom/createPortal) v16.0

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