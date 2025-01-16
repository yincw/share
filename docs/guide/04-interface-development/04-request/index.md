# 网络请求

## 大纲

## 参考

- [useRequest](https://ahooks-v2.surge.sh/zh-CN/hooks/async)
  - https://umijs.org/docs/max/request
  - https://umijs.org/docs/max/react-query
  - [axios](https://axios-http.com/)
  - [react-query](https://tanstack.com/query/v4/)
- [rtk-query](https://redux-toolkit.js.org/rtk-query/overview)
- [Apollo Client](https://www.apollographql.com/docs/react)
- [urql](https://commerce.nearform.com/open-source/urql/docs/)
- 计算机网络&协议
- 网络请求：前后端交互场景分析、机制设计、架构规划

## 需求分析

- 网络请求
  - 配置（全局）
  - 调用
    - 配置（局部）
    - useRequest()
    - request()
- 全局配置
  - 消费数据
  - 请求设定
- 网络请求
  - 请求超时
  - 自定义请求头
  - 自定义请求方式
    - XMLHttpRequest
    - fetch
    - axios
  - 自定义请求类型
    - Restful API
    - GraphQL API
  - 请求拦截
  - 响应拦截
  - 取消请求
  - 自动请求/手动请求
  - 延迟加载（loading delay）
  - 屏幕聚焦重新请求
  - 并行请求
  - 依赖请求（串行请求）
  - 缓存请求
  - 预加载
  - 请求突变
  - 轮询
  - 防抖
  - 节流
  - 分页
  - 加载更多
    - 上拉加载更多
  - 数据恢复
  - 滚动位置恢复
- 错误处理
  - 错误类型
  - 约定的响应数据格式
  - 错误抛出
  - 错误接受和处理
  - 跳过错误处理
  - 获取完整 response 结构
- 集成方案
  - umi@3（~~umi-request~~）
  - umi@4（axios）
  - useRequest / @ahooksjs/useRequest
  - request / @@/plugin-request
  - react-query