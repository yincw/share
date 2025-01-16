# CSS 场景用例

## Flex 布局+正方形+动画
使用 HTML&CSS书写一段样式，实现以下布局&效果：

1. 父元素宽度百分比，高度自适应，上下内边距 20px，内部有三个子元素，三个子元素呈横向排列，每个子元素宽度为父元素宽度的 25%，子元素为正方形，背景颜色为从红色到橙色的直线渐变色，三个子元素之间的外边距为父元素宽度的 5%，所有子元素居中排列
2. 给三个子元素添加渐入动画，从完全透明到完全显示，要求第一个元素在 1s 后渐显，第二个元素在 2s 后渐显，第三个元素在 3s 后渐显，所有动画持续 0.5s，整个过程中，元素位置不能发生变动

```html
<div class="list">
    <div class="list-item list-item-1"></div>
    <div class="list-item list-item-2"></div>
    <div class="list-item list-item-3"></div>
</div>
```

```less
.list {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  // 弹性布局，子元素水平横行排列，并水平居中
  display: flex;
  flex-direction: row;
  // 水平方向居中
  justify-content: center;

  &-item {
    width: 25%;
    // CSS 里 padding 的百分比值是相对父元素宽带来计算的
    padding-top: 25%;

    margin-right: 5%;
    background-image: linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 255, 0, 1));

    opacity: 0;
    animation: fade 0.5s both;
    //   animation-name: fade; // 动画名称
    //   animation-duration: 0.5s; // 动画持续时间
    //   animation-fill-mode: both; // 动画模式，显示后不隐藏

    &:last-child {
      margin-right: 0;
    }

    &-1 {
      animation-delay: 1s; // 动画延迟 1s 执行
    }
    &-2 {
      animation-delay: 2s; // 动画延迟 2s 执行
    }
    &-3 {
      animation-delay: 3s; // 动画延迟 3s 执行
    }
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
``

## 