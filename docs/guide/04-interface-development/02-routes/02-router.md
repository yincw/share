# 路由

分类 | Hooks | 组件
---|---|---
`路由类型` | createBrowserHistory() | -
`\-` | createHashHistory() | -
`\-` | createMemoryHistory() | -
`工具函数` | createSearchParams() | -
`\-` | generatePath() | -
`\-` | history | -
`\-` | matchPath() | -
`\-` | matchRoutes() | -
`\-` | resolvePath() | -
`\-` | useAppData() | -
`\-` | useLocation() | -
`\-` | useMatch() | -
`\-` | useResolvedPath() | -
`\-` | useOutlet() | `<Outlet/>`
`\-` | useOutletContext() | -
`\-` | useRouteData() | -
`\-` | useRoutes() | -
`\-` | useRouteProps() | -
`\-` | useSelectedRoutes() | `<NavLink to="" />`
`\-` | useNavigate() | `<Navigate to="" />`
`\-` | useParams() | -
`\-` | useSearchParams() | -
`\-` | withRouter() | -

- 路由
  - 配置
    - useRoutes
    - matchRoutes
    - useAppData
  - 解析
    - useRouteData
    - useResolvedPath
    - useRouteProps
    - useSelectedRoutes
  - 数据
    - history
    - navigate
    - location
    - match
    - params
  - 出口
    - `<Outlet/>`
    - useOutlet
    - useOutletContext
  - SEO
    - `<Helmet />`
  - 其他
    - resolvePath
    - terminal
    - matchPath
    - generatePath
    - createSearchParams

## 路由类型

- createBrowserHistory
- createHashHistory
- createMemoryHistory

https://umijs.org/docs/api/config#history

## 路由配置

## 路由跳转

- history
- useNavigate
- `<Link to="" />`
- `<NavLink to="" />`

## 路由权限

路由守卫

## 动态路由

## 路由传参

- useParams
- useMatch
- useLocation

### 动态路由传参

### 查询字符串传参

### match 对象

### location 对象

## 路由数据加载

- https://umijs.org/docs/guides/routes
- https://umijs.org/docs/max/access
- https://umijs.org/docs/guides/client-loader
- https://umijs.org/docs/api/api
- https://reactrouter.com/en/main