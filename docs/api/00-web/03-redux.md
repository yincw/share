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

## Dva

底层：Redux + Redux Saga + React Redux

分类 | 概念 | 说明
--|--|--
模型（Reducer） | `namespace` | 模型命名空间，需全局唯一
`\-状态` | `state` | 初始状态
`\-同步更改` | `reducers` | 同步更改状态数据
`\-异步更改` | `effects` | 异步更改状态数据，用于和后端的异步通讯
`\-` | [call()](https://umijs.org/docs/max/dva#call) | 用于调用异步逻辑，支持 promise
`\-` | [put()](https://umijs.org/docs/max/dva#put) | 用于触发同步 action
`\-` | [select()](https://umijs.org/docs/max/dva#select) | 用于从 state 里获取数据
连接（Connect） | `@connect()` | 用来将 model 和组件连接到一起，并将相关数据和 `dispatch` 添加到组件的 props 中。
触发（Dispatch） | `this.props.dispatch(Action/Effect)` | 触发 Action。
`\-同步 Action` | `{type: 'namespace/reducersName', payload: data}` | 触发同步 Action（reducers 内定义的方法），同步方式更新 state。
`\-异步 Effect` | `{type: 'namespace/effectsName', payload: data}` | 触发异步 Action（effects 内定义的方法），异步方式更新 state。
读取 | `this.props[state]` | 读取状态属性
加载状态（loading）| - | 自维护加载状态

## Redux Toolkit

底层：Redux + Redux Thunk + React Redux

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
