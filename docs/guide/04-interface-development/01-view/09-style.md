# 组件样式

分类 | Hooks | Classes
---|---|---
外联样式 | [`classname`](https://zh-hans.react.dev/learn#adding-styles) | -
`\-` | [`<link>`](https://zh-hans.react.dev/reference/react-dom/components/link) | -
行内样式 | [`style`](https://zh-hans.react.dev/learn/javascript-in-jsx-with-curly-braces#using-double-curlies-css-and-other-objects-in-jsx) | -
内联样式 | [`<style>`](https://zh-hans.react.dev/reference/react-dom/components/style) | -
CSS-in-JS | [`useInsertionEffect()`](https://zh-hans.react.dev/reference/react/useInsertionEffect) | -

## 大纲

- 外联样式
  - `classname`
  - `<link>`
  - 预处理
  - 样式隔离
  - CSS 工具库
- 行内样式
  - `style`
- 内联样式
  - `<style>`
- CSS-in-JS
  - styled-components
- CSS 优化
  - UnoCSS
- CSS 特性
  - CSS 动画
  - CSS 主题
  - CSS 响应式设计

## 外联样式

- `classname`
- `<link>`
- 预处理
  - Less
  - PostCSS
- 样式隔离
  - CSS Scope
    - 深度选择器
    - 插槽选择器
    - 全局选择器
  - CSS Modules
- CSS 工具库
  - Tailwind CSS

```tsx
// https://zh-hans.react.dev/learn#adding-styles
// https://zh-hans.react.dev/reference/react-dom/components/common#applying-css-styles
// https://zh-hans.react.dev/reference/react-dom/components/link#linking-to-a-stylesheet
// https://zh-hans.legacy.reactjs.org/docs/faq-styling.html
```

### 预处理

- Less
- PostCSS

### 样式隔离

#### CSS Scope

- `@scope` 块级作用域
- `:global`

#### CSS Modules

```tsx
// https://umijs.org/docs/guides/styling
```

### Tailwind CSS

```tsx
// https://umijs.org/docs/max/tailwindcss
```

## 行内样式

- `style`

```tsx
// https://zh-hans.react.dev/learn/javascript-in-jsx-with-curly-braces#using-double-curlies-css-and-other-objects-in-jsx
// https://zh-hans.react.dev/learn/typescript#typing-style-props
// https://zh-hans.legacy.reactjs.org/docs/dom-elements.html#style
```

## 内联样式

- `<style>`

```tsx
// https://zh-hans.react.dev/reference/react-dom/components/style#rendering-an-inline-css-stylesheet
```

## CSS-in-JS

- useInsertionEffect()

```tsx
// https://zh-hans.react.dev/reference/react/useInsertionEffect#injecting-dynamic-styles-from-css-in-js-libraries
```

### styled-components

- https://umijs.org/docs/max/styled-components

## CSS 优化

### UnoCSS

```tsx
// https://umijs.org/docs/guides/styling
```

## CSS 特性

### CSS 动画

- `transition`
- `transform`
- `animation`
- `@keyframes`
- [React Transition Group](https://reactcommunity.org/react-transition-group/)
- [React Motion](https://github.com/chenglou/react-motion)
- [React Spring](https://github.com/react-spring/react-spring)

```tsx

```

### CSS 主题

- Less 变量
- CSS 变量（自定义属性）
  - `:root`
  - `var()`

```tsx

```

### CSS 响应式设计

- `@media`
- `rem`
- `em`

```css
@media media-type and (media-feature) {
  /* 样式规则 */
}
```

- media-type 媒体类型
  - screen 屏幕设备
  - print 打印机
  - all 所有设备，默认
- media-feature 媒体特性
  - width 宽度
    - min-width
    - max-width
  - height 高度
    - min-height
    - max-height
  - orientation 方向
    - 'landscape' 横向
    - 'portrait' 纵向
  - resolution 分辨率
    - min-resolution 最小分辨率
    - max-resolution 最大分辨率
  - aspect-ratio 设备窗口宽高比
  - device-aspect-ratio 设备屏幕宽高比
  