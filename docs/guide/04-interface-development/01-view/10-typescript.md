# TypeScript 支持

分类 | 类型
---|---
子元素 | React.ReactNode
`\-` | React.ReactElement
样式属性 | React.CSSProperties
DOM事件 | React.SyntheticEvent

## 大纲

- 为啥需要“类型检查”
  - TypeScript
- 类型
  - TypeScript 类型
  - React 类型
    - Hooks 类型示例
    - 常用类型
- 类型定义
  - 语法：类型注解
  - 类型：正确性
    - 数据结构的类型
    - 函数参数及返回值的类型
  - 校验：必填规则
- 类型检查（类型检查器）
  - 类型推断
  - 静态类型提示：编辑器中提供内联文档
- UmiJS 与 TypeScript

## 为啥需要“类型检查”

### TypeScript

```tsx

```

- https://zh-hans.react.dev/learn/typescript
- https://zh-hans.legacy.reactjs.org/docs/static-type-checking.html#typescript

## 类型

### TypeScript 类型

- `interface` 接口
- `type` 类型
- `<T>` 范型

```tsx

```

- https://www.typescriptlang.org/zh/docs/handbook/
- https://devblogs.microsoft.com/typescript/
- [TypeScript playground](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wChSB6CxYmAOmXRgDkIATJOdNJMGAZzgwAFpxAR+8YADswAVwGkZMJFEzpOjDKw4AFHGEEBvUnDhphwADZsi0gFw0mDWjqQBuUgF9yaCNMlENzgAXjgACjADfkctFnYkfQhDAEpQgD44AB42YAA3dKMo5P46C2tbJGkvLIpcgt9-QLi3AEEwMFCItJDMrPTTbIQ3dKywdIB5aU4kKyQQKpha8drhhIGzLLWODbNs3b3s8YAxKBQAcwXpAThMaGWDvbH0gFloGbmrgQfBzYpd1YjQZbEYARkB6zMwO2SHSAAlZlYIBCdtCRkZpHIrFYahQYQD8UYYFA5EhcfjyGYqHAXnJAsIUHlOOUbHYhMIIHJzsI0Qk4P9SLUBuRqXEXEwAKKfRZcNA8PiCfxWACecAAUgBlAAacFm80W-CU11U6h4TgwUv11yShjgJjMLMqDnN9Dilq+nh8pD8AXgCHdMrCkWisVoAet0R6fXqhWKhjKllZVVxMcavpd4Zg7U6Qaj+2hmdG4zeRF10uu-Aeq0LBfLMEe-V+T2L7zLVu+FBWLdLeq+lc7DYFf39deFVOotMCACNOCh1dq219a+30uC8YWoZsRyuEdjkevR8uvoVMdjyTWt4WiSSydXD4NqZP4AymeZE072ZzuUeZQKheQgA)

### React 类型

- @types/react
- @types/react-dom
- tsx

```tsx

```

- https://zh-hans.react.dev/learn/typescript

#### Hooks 类型示例

- useState
- useReducer
- useContext
- useMemo
- useCallback

```tsx

```

- https://zh-hans.react.dev/learn/typescript#example-hooks
- https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example

#### 常用类型

- 子元素
  - React.ReactNode
  - React.ReactElement
- 样式属性
  - React.CSSProperties
- DOM 事件
  - React.SyntheticEvent

```tsx

```

- https://zh-hans.react.dev/learn/typescript#useful-types

### @types/react

- https://react-typescript-cheatsheet.netlify.app/docs/advanced/types_react_api#typesreact

### @types/react-dom

- https://react-typescript-cheatsheet.netlify.app/docs/advanced/types_react_api#typesreact-dom

## 类型定义

### 类型注解

- `<Type>` 类型注解

```tsx

```

## 类型检查

### 类型推断

```tsx

```

### 静态类型提示

## UmiJS 与 TypeScript

- @typescript/eslint

```tsx

```

- https://umijs.org/docs/guides/typescript
- https://umijs.org/docs/api/config#forktschecker
- https://umijs.org/docs/api/runtime-config#typescript-%E6%8F%90%E7%A4%BA
