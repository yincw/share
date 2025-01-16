# Redux

## API

### Redux Toolkit & Redux

分类 | Redux Toolkit | Redux
---|---|---
Store | [**configureStore()**](https://redux-toolkit-cn.netlify.app/api/configureStore) | [createStore()](https://redux.js.org/api/createstore)
Middleware | [getDefaultMiddleware()](https://redux-toolkit-cn.netlify.app/api/getDefaultMiddleware) | [applyMiddleware()](https://redux.js.org/api/applymiddleware)
`\-` | - | [compose()](https://redux.js.org/api/compose)
Reducer | - | [combineReducers()](https://redux.js.org/api/combinereducers)
Action | - | [bindActionCreators()](https://redux.js.org/api/bindactioncreators)
`\-切面` | [**createSlice()**](https://redux-toolkit-cn.netlify.app/api/createSlice) | -
`\-Reducer` | [createReducer()](https://redux-toolkit-cn.netlify.app/api/createReducer) | -
`\-Action` | [createAction()](https://redux-toolkit-cn.netlify.app/api/createAction) | -
`\-Thunk` | [**createAsyncThunk()**](https://redux-toolkit-cn.netlify.app/api/createAsyncThunk) | -
`\-` | [createEntityAdapter()](https://redux-toolkit-cn.netlify.app/api/createEntityAdapter) | -
`immer` | [createNextState()](https://redux-toolkit-cn.netlify.app/api/other-exports#createnextstate) | -
`\-` | [current()](https://redux-toolkit-cn.netlify.app/api/other-exports#current) | -
`nanoid` | [nanoid()](https://redux-toolkit-cn.netlify.app/api/other-exports#nanoid) | -

### React Redux

分类 | Hooks | Classes
---|---|---
连接 | [**`<Provider>`**](https://react-redux.js.org/api/provider) | [connect()](https://react-redux.js.org/api/connect)
`\-context` | [createDispatchHook()](https://react-redux.js.org/api/hooks#custom-context) | -
`\-` | [createSelectorHook()](https://react-redux.js.org/api/hooks#custom-context) | -
`\-` | [createStoreHook()](https://react-redux.js.org/api/hooks#custom-context) | -
触发 | [**useDispatch()**](https://react-redux.js.org/api/hooks#usedispatch) | this.props.dispatch()
读取 | [**useSelector()**](https://react-redux.js.org/api/hooks#useselector) | -
`\-` | [useStore()](https://react-redux.js.org/api/hooks#usestore) | this.props.store

### Reselect

分类 | Hooks | Classes
---|---|---
`-` | [createSelector()](https://react-redux.js.org/api/hooks#using-memoizing-selectors) | -

## 大纲

- Redux
  - 是什么？
  - 单向数据流
  - 数据流图示
  - 集成
    - Dva
    - Redux Toolkit

## Redux 是什么？

JS 应用的**全局状态管理**容器。支持：

- **可预测**：行为稳定可预测、且易于测试
- **集中管理**：集中管理应用的状态和逻辑，支持 “撤销/重做”、状态持久化
- **可调试**：通过 Redux DevTools 让你轻松追踪到应用的状态在何时、何处以及如何改变。支持 “时间旅行调试”
- **跨平台**：可运行在不同环境，支持：客户端应用、服务端应用、原生应用
- **灵活**：可以与任何 UI 层框架搭配使用，且拥有庞大的插件生态

参考

- https://redux.js.org/
  - https://cn.redux.js.org/
  
## 单向数据流

![Image](/redux-article-3-03.svg)

## 数据流图示

<!-- ![Image](/ReduxDataFlowDiagram.gif) -->
<img src="/share/ReduxDataFlowDiagram.gif" alt="ReduxDataFlow" width="700" />

<!-- ![Image](/redux-data-flow.png) -->

- https://cn.redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-%E6%95%B0%E6%8D%AE%E6%B5%81

## Redux 集成

### Dva（UmiJS）

1. 创建并挂载 model
2. 把组件和 model 连接到一起
3. 在组件中 dispatch 事件
4. 修改/读取数据

分类 | 概念 | 说明
--|--|--
模型（Store/Reducer） | `namespace` | 模型命名空间，需全局唯一
`\-状态` | `state` | 初始状态
`\-同步更改` | `reducers` | 同步更改状态数据
`\-异步更改` | `effects` | 异步更改状态数据，用于和后端的异步通讯
`\-` | [call()](https://umijs.org/docs/max/dva#call) | 用于调用异步逻辑，支持 promise
`\-` | [put()](https://umijs.org/docs/max/dva#put) | 用于触发同步 action
`\-` | [select()](https://umijs.org/docs/max/dva#select) | 用于从 state 里获取数据
连接（connect） | `@connect()` | 用来将 model 和组件连接到一起，并将相关数据和 `dispatch` 添加到组件的 props 中。
触发（Dispatch） | `this.props.dispatch(Action/Effect)` | 触发 Action。
`\-同步 Action` | `{type: 'namespace/reducersName', payload: data}` | 触发同步 Action（reducers 内定义的方法），同步方式更新 state。
`\-异步 Effect` | `{type: 'namespace/effectsName', payload: data}` | 触发异步 Action（effects 内定义的方法），异步方式更新 state。
读取 | `this.props[state]` | 读取状态属性
加载状态（loading）| - | 自维护加载状态

### Redux Toolkit

1. 创建并挂载 Slice
   1. 名称
   2. 初始状态
   3. 同步更改
   4. 异步更改
2. 把组件和 Slice 连接到一起
3. 在组件中 dispatch 事件
4. 修改/读取数据

分类 | 概念 | 说明
--|--|--
切面（Store/Reducer/Slice） | `name` | 切面名称，需全局唯一
`\-状态` | `initialState` | 初始状态
`\-同步更改` | `reducers` | 同步更改状态数据
`\-异步更改` | `extraReducers` | 自维护加载状态
`\-` | `createAsyncThunk()` | 异步更改状态数据，用于和后端的异步通讯
连接（Provider） | `<Provider>` | 用来将 切面 和组件连接到一起
触发（Dispatch） | `useDispatch()` | 触发 Action。
`\-同步 Action` | `dispatch(featuresName())` | 触发同步 Action（reducers 内定义的方法），同步方式更新 state。
`\-异步 Action` | `dispatch(asyncFeaturesName())` | 触发异步 Action（createAsyncThunk 定义的方法），异步方式更新 state。
读取 | `useSelector()` | 读取状态属性
加载状态（loading）| extraReducers | 自维护加载状态

## 其他数据流方案

### Valtio

- Proxy
- https://umijs.org/docs/max/valtio
- https://valtio.dev/

### Mobx

- Observable
- https://mobx.js.org/
- https://zh.mobx.js.org/

## 参考

- https://redux.js.org/
  - https://cn.redux.js.org/
- https://github.com/reduxjs/redux-thunk
- https://redux-saga.js.org/
- https://react-redux.js.org/
- https://umijs.org/docs/max/dva
  - https://umijs.org/docs/max/data-flow
- https://redux-toolkit.js.org/
  - https://redux-toolkit-cn.netlify.app/
