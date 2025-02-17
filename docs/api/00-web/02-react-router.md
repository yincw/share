# React Router

UmiJS Router（React Router@6）

## 路由出口&跳转

分类 | 配置 | Hooks | 组件 | 工具函数
--|--|--|--|--
出口 | - | [useOutlet()](https://umijs.org/docs/api/api#useoutlet) | [`<Outlet>`](https://umijs.org/docs/api/api#outlet) | -
`\-` | - | [useOutletContext()](https://umijs.org/docs/api/api#useoutletcontext) | - | -
跳转 | - | - | [`<Link>`](https://umijs.org/docs/api/api#link) | -
`\-` | - | [useSelectedRoutes()](https://umijs.org/docs/api/api#useselectedroutes) | [`<NavLink>`](https://umijs.org/docs/api/api#navlink) | -
`\-` | [`historyWithQuery`](https://umijs.org/docs/api/config#historywithquery) | [useNavigate()](https://umijs.org/docs/api/api#usenavigate) | [`<Navigate>`](https://umijs.org/docs/guides/routes#wrappers) | -
`\-` | - | - | - | [history](https://umijs.org/docs/api/api#history)

## 路由类型

分类 | 配置 | Hooks | 组件 | 工具函数
--|--|--|--|--
类型 | [`history: `](https://umijs.org/docs/api/config#history) <br/> `{ type: 'browser' }` | - | - | [createBrowserHistory()](https://umijs.org/docs/api/api#createbrowserhistory)
`\-` | `history: ` <br/> `{ type: 'hash' }` | - | - | [createHashHistory()](https://umijs.org/docs/api/api#createhashhistory)
`\-` | `history: ` <br/> `{ type: 'memory'` | - | - | [createMemoryHistory()](https://umijs.org/docs/api/api#creatememoryhistory)

## 路由配置

分类 | 配置 | Hooks | 组件 | 工具函数
--|--|--|--|--
配置 | [`routes`](https://umijs.org/docs/guides/routes#%E9%85%8D%E7%BD%AE%E8%B7%AF%E7%94%B1) | - | - | -

### 动态路由配置

分类 | 配置 | Hooks | 组件 | 工具函数
--|--|--|--|--
动态路由配置 | - | [useRoutes()](https://umijs.org/docs/api/api#useroutes) | - | -

## 路由传参

### 路由动态参数

分类 | 配置 | Hooks | 组件 | 工具函数
--|--|--|--|--
`-` | - | [useParams()](https://umijs.org/docs/api/api#useparams) | - | -

### 查询字符串参数

分类 | 配置 | Hooks | 组件 | 工具函数
--|--|--|--|--
`-` | - | [useSearchParams()](https://umijs.org/docs/api/api#usesearchparams) | - | -
`-` | - | - | - | [createSearchParams()](https://umijs.org/docs/api/api#createsearchparams)

### match 对象

分类 | 配置 | Hooks | 组件 | 工具函数
--|--|--|--|--
`-` | - | [useMatch()](https://umijs.org/docs/api/api#usematch) | - | -
`-` | - | - | - | [matchPath()](https://umijs.org/docs/api/api#matchpath)
`-` | - | - | - | [matchRoutes()](https://umijs.org/docs/api/api#matchroutes)

### location 对象

分类 | 配置 | Hooks | 组件 | 工具函数
--|--|--|--|--
`-` | - | [useLocation()](https://umijs.org/docs/api/api#uselocation) | - | -

## 路由权限

分类 | 配置 | Hooks | 组件 | 工具函数
--|--|--|--|--
守卫 | - | [useAccess()](https://umijs.org/docs/max/access#useaccess) | [`<Access>`](https://umijs.org/docs/max/access#access-1) | -

## 其他

### 路由数据加载

分类 | 配置 | Hooks | 组件 | 工具函数
--|--|--|--|--
`-` | - | [useClientLoaderData()](https://umijs.org/docs/guides/client-loader) | - | -

### 工具函数

分类 | 配置 | Hooks | 组件 | 工具函数
--|--|--|--|--
路径 | - | - | - | [generatePath()](https://umijs.org/docs/api/api#generatepath)
`-` | - | [useResolvedPath()](https://umijs.org/docs/api/api#useresolvedpath) | - | [resolvePath()](https://umijs.org/docs/api/api#resolvepath)
属性数据  | - | [useRouteProps()](https://umijs.org/docs/api/api#userouteprops) | - | -
`-` | - | [~~useRouteData()~~](https://umijs.org/docs/api/api#useroutedata) | - | -
`-` | - | [~~useAppData()~~](https://umijs.org/docs/api/api#useappdata) | - | -
`-` | [`reactRouter5Compat`](https://umijs.org/docs/api/config#reactrouter5compat) | - | [withRouter()](https://umijs.org/docs/api/api#withrouter) | -
SEO优化 | - | - | [`<Helmet>`](https://umijs.org/docs/api/api#helmet) | -
调试 | - | - | - | [terminal](https://umijs.org/docs/api/api#terminal)
