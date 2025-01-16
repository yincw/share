# 组件通信

## 大纲

- 组件通信
  - 父子组件通信
  - 兄弟组件通信
  - 跨多层级组件通信

## 父子组件通信

- 父 -> 子
  - [props](/share/docs/guide/interface-development/view/props)
- 子 -> 父
  - [event props](/share/docs/guide/interface-development/view/event)

## 兄弟组件通信

- 子（兄弟A）-> 父 -> 子（兄弟B）
  - [event props](/share/docs/guide/interface-development/view/event)
  - [props](/share/docs/guide/interface-development/view/props)
- 子（兄弟A）->> Store
  - [Redux - dispatch](/share/docs/guide/interface-development/state-management/redux)
  - Store ->> 子（兄弟B）
    - [Context](/share/docs/guide/interface-development/view/context)
    - [Redux - connect](/share/docs/guide/interface-development/state-management/redux)

## 跨多层级组件通信

- 子（A）->> Store
  - [Redux - dispatch](/share/docs/guide/interface-development/state-management/redux)
  - Store ->> 子（B）
    - [Context](/share/docs/guide/interface-development/view/context)
    - [Redux - connect](/share/docs/guide/interface-development/state-management/redux)

## 参考

- https://zh-hans.react.dev/learn/sharing-state-between-components
- https://zh-hans.react.dev/learn/passing-data-deeply-with-context
- https://zh-hans.react.dev/learn/scaling-up-with-reducer-and-context