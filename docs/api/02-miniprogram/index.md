---
toc_max_heading_level: 4
---

# 小程序应用

微信小程序、Taro

## 用户界面

### 调试

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [vConsole](https://github.com/Tencent/vConsole) | - | - | - | -
`-` | `wx.setEnableDebug` | 设置是否打开调试开关 | - | - | -
`-` | `console` | 向调试面板中打印日志 | - | - | -
`-` | `wx.getLogManager` | 获取日志管理器对象 | - | - | -
`-` | `wx.getRealtimeLogManager` | 获取实时日志管理器对象 | - | - | -

### 界面开发

#### 基础

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`selection`](https://developers.weixin.qq.com/miniprogram/dev/component/selection.html) | 局部文本选区 | 3.6.4 | WebView | -
`-` | [`native-component`](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html) | 小程序中的部分组件是由客户端创建的原生组件 | - | - | -
`-` | [`page-meta`](https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html) | 页面属性配置节点，用于指定页面的一些属性、监听页面事件 | 2.9.0 | - | -
`-` | [`tap-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/tap-gesture-handler.html) | 点击时触发手势 | - | Skyline | -
`-` | [`double-tap-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/double-tap-gesture-handler.html) | 双击时触发手势 | - | Skyline | -
`-` | [`long-press-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html) | 长按时触发手势 | - | Skyline | -
`-` | [`force-press-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/force-press-gesture-handler.html) | iPhone 设备重按时触发手势 | - | Skyline | -
`-` | [`horizontal-drag-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html) | 横向滑动时触发手势 | - | Skyline | -
`-` | [`vertical-drag-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html) | 纵向滑动时触发手势 | - | Skyline | -
`-` | [`pan-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html) | 拖动（横向/纵向）时触发手势 | - | Skyline | -
`-` | [`scale-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html) | 多指缩放时触发手势 | - | Skyline | -

#### 视图

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`view`](https://developers.weixin.qq.com/miniprogram/dev/component/view.html) | 视图容器 | 1.0.0 | - | -
`-` | [`scroll-view`](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html) | 可滚动视图区域 | 1.0.0 | - | -
`-` | [`movable-view`](https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html) | 可移动的视图容器，在页面中可以拖拽滑动 | 1.2.0 | WebView | -
`-` | [`movable-area`](https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html) | movable-view的可移动区域 | 1.2.0 | WebView | -
`-` | [~~`cover-view`~~](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html) | 覆盖在原生组件之上的文本视图 | 1.4.0 | - | 目前原生组件均已支持同层渲染，建议使用 view 替代
`-` | [~~`cover-image`~~](https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html) | 覆盖在原生组件之上的图片视图 | 1.4.0 | - | 目前原生组件均已支持同层渲染，建议使用 image 替代
`-` | [`swiper`](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html) | 滑块视图容器 | 1.0.0 | - | -
`-` | [`swiper-item`](https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html) | 仅可放置在swiper组件中，宽高自动设置为100% | 1.0.0 | - | -
`-` | [`page-container`](https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html) | 页面容器 | 2.16.0 | - | -
`-` | [`root-portal`](https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html) | 使整个子树从页面中脱离出来，类似于在 CSS 中使用 fixed position 的效果 | 2.25.2 | - | -
`-` | [`match-media`](https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html) | media query 匹配检测节点 | 2.11.1 | WebView | -
`-` | `wx.env` | 环境变量 | - | - | -
`-` | `wx.canIUse` | 判断小程序的API，回调，参数，组件等是否在当前版本可用 | - | - | -
`-` | `wx.base64ToArrayBuffer` | 将 Base64 字符串转成 ArrayBuffer 对象 | - | - | -
`-` | `wx.arrayBufferToBase64` | 将 ArrayBuffer 对象转成 Base64 字符串 | - | - | -
`-` | `wx.getSkylineInfo` | 获取当前运行环境对于 Skyline 渲染引擎 的支持情况 | - | - | -
`-` | `wx.getSkylineInfoSync` | 获取当前运行环境对于 Skyline 渲染引擎 的支持情况 | - | - | -
`-` | `wx.getApiCategory` | 获取当前 API 类别 | - | - | -
`-` | `wx.onApiCategoryChange` | 监听 API 类别变化事件 | - | - | -
`-` | `wx.offApiCategoryChange` | 移除 API 类别变化事件的监听函数 | - | - | -

#### 路由

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.onBeforePageLoad` | 监听路由事件引起新的页面实例化时，**页面实例化前**的事件监听 | - | - | -
`-` | `wx.offBeforePageLoad` | 移除路由事件的监听函数 | - | - | -
`-` | `wx.onAfterPageLoad` | 监听路由事件引起新的页面实例化时，**页面实例化完成**的事件监听 | - | - | -
`-` | `wx.offAfterPageLoad` | 移除路由事件的监听函数 | - | - | -
`-` | `wx.onBeforeAppRoute` | 监听路由事件下发后，**执行路由逻辑前**的事件监听 | - | - | -
`-` | `wx.offBeforeAppRoute` | 移除路由事件的监听函数 | - | - | -
`-` | `wx.onAppRoute` | 监听路由事件下发后，**执行路由逻辑后**的事件监听 | - | - | -
`-` | `wx.offAppRoute` | 移除路由事件的监听函数 | - | - | -
`-` | `wx.onAppRouteDone` | 监听当前路由**动画执行完成**的事件监听 | - | - | -
`-` | `wx.offAppRouteDone` | 移除当前路由**动画执行完成**的事件的监听函数 | - | - | -
`-` | `wx.onBeforePageUnload` | 监听路由事件引起现有页面实例销毁时，页面**实例销毁前**的事件监听 | - | - | -
`-` | `wx.offBeforePageUnload` | 移除路由事件的监听函数 | - | - | -
`-` | `wx.onAfterPageUnload` | 监听路由事件引起现有页面实例销毁时，页面**实例销毁后**的事件监听 | - | - | -
`-` | `wx.offAfterPageUnload` | 移除路由事件的监听函数 | - | - | -

#### 网络请求

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

#### 动画

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

#### 无障碍

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`aria-component`](https://developers.weixin.qq.com/miniprogram/dev/component/aria-component.html) | 满足视障人士对于小程序的访问需求 | - | - | -

### 监控与分析

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

### 性能

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

### 安全

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

### 场景

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

#### 图形

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`canvas`](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html) | 画布 | 1.0.0 | - | -

#### 音视频

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

#### 元宇宙

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`XR-FRAME`](https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/overview/) | 小程序官方提供的XR/3D应用解决方案 | 2.32.0 | - | -

#### AI

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

### UI 组件库

#### 通用

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`icon`](https://developers.weixin.qq.com/miniprogram/dev/component/icon.html) | 图标组件 | 1.0.0 | WebView | -
`-` | [`button`](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | 按钮 | 1.0.0 | - | -

#### 布局

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`grid-view`](https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html) | Skyline 下网格布局容器 和 瀑布流布局容器 | 2.29.0 | Skyline | -
`-` | [`grid-builder`](https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html) | 网格构造器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点 | 3.4.0 | Skyline | -
`-` | [`list-view`](https://developers.weixin.qq.com/miniprogram/dev/component/list-view.html) | 列表布局容器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点或 sticky-section 组件直接子节点 | 2.29.0 | Skyline | -
`-` | [`list-builder`](https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html) | 列表构造器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点 | 3.3.0 | Skyline | -
`-` | [`sticky-header`](https://developers.weixin.qq.com/miniprogram/dev/component/sticky-header.html) | 吸顶布局容器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点或 sticky-section 组件直接子节点 | 2.29.0 | Skyline | -
`-` | [`sticky-section`](https://developers.weixin.qq.com/miniprogram/dev/component/sticky-section.html) | 吸顶布局容器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点 | 2.29.0 | Skyline | -
`-` | [`nested-scroll-header`](https://developers.weixin.qq.com/miniprogram/dev/component/nested-scroll-header.html) | 嵌套 scroll-view 场景中属于外层 scroll-view 的节点，仅支持作为 `<scroll-view type="nested">` 模式的直接子节点 | 3.2.0 | Skyline | -
`-` | [`nested-scroll-body`](https://developers.weixin.qq.com/miniprogram/dev/component/nested-scroll-body.html) | 嵌套 scroll-view 场景中属于里层 scroll-view 的节点，仅支持作为 `<scroll-view type="nested">` 模式的直接子节点 | 3.2.0 | Skyline | -
`-` | [`draggable-sheet`](https://developers.weixin.qq.com/miniprogram/dev/component/draggable-sheet.html) | 半屏可拖拽组件 | 3.2.0 | Skyline | -
`-` | [`open-container`](https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html) | 容器转场动画组件 | 3.4.0 | Skyline | -
`-` | [`share-element`](https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html) | 共享元素 | 2.16.0 | Skyline | -
`-` | [`snapshot`](https://developers.weixin.qq.com/miniprogram/dev/component/snapshot.html) | 截图组件 | 3.0.1 | Skyline | -
`-` | [`span`](https://developers.weixin.qq.com/miniprogram/dev/component/span.html) | 用于支持内联文本和 image / navigator 的混排 | - | Skyline | -

#### 导航

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`navigator`](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html) | 页面链接 | 1.0.0 | - | -
`-` | [`functional-page-navigator`](https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html) | 仅在插件中有效，用于跳转到插件功能页 | 2.1.0 | WebView | -
`-` | [`navigation-bar`](https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html) | 页面导航条配置节点，用于指定导航栏的一些属性 | 2.9.0 | WebView | -

#### 数据展示

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`text`](https://developers.weixin.qq.com/miniprogram/dev/component/text.html) | 文本 | 1.0.0 | - | -
`-` | [`image`](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) | 图片 | 1.0.0 | - | -
`-` | [~~`audio`~~](https://developers.weixin.qq.com/miniprogram/dev/component/audio.html) | 音频 | 1.0.0 | - | 从基础库 1.6.0 开始，本接口停止维护，请使用 wx.createInnerAudioContext 代替
`-` | [`video`](https://developers.weixin.qq.com/miniprogram/dev/component/video.html) | 视频 | 1.0.0 | - | v2.4.0 起支持同层渲染
`-` | [`voip-room`](https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html) | 多人音视频对话 | 2.11.0 | WebView | -
`-` | [`live-player`](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html) | 实时音视频播放 | 1.7.0 | - | v2.9.1 起支持同层渲染
`-` | [`live-pusher`](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html) | 实时音视频录制 | 1.7.0 | - | v2.9.1 起支持同层渲染

#### 数据录入

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`form`](https://developers.weixin.qq.com/miniprogram/dev/component/form.html) | 表单 | 1.0.0 | - | -
`-` | [`label`](https://developers.weixin.qq.com/miniprogram/dev/component/label.html) | 用来改进表单组件的可用性 | 1.0.0 | - | -
`-` | [`input`](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) | 输入框 | 1.0.0 | - | -
`-` | [`textarea`](https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html) | 多行输入框 | 1.0.0 | - | -
`-` | [`keyboard-accessory`](https://developers.weixin.qq.com/miniprogram/dev/component/keyboard-accessory.html) | 设置 input / textarea 聚焦时键盘上方 cover-view / cover-image 工具栏视图 | 2.15.0 | WebView | -
`-` | [`rich-text`](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html) | 富文本（HTML） | 1.4.0 | - | -
`-` | [`editor`](https://developers.weixin.qq.com/miniprogram/dev/component/editor.html) | 富文本编辑器，可以对图片、文字进行编辑 | 2.7.0 | WebView | -
`-` | [`checkbox`](https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html) | 多选项目 | 1.0.0 | - | -
`-` | [`checkbox-group`](https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html) | 多项选择器，内部由多个checkbox组成 | 1.0.0 | - | -
`-` | [`radio`](https://developers.weixin.qq.com/miniprogram/dev/component/radio.html) | 单选项目 | 1.0.0 | - | -
`-` | [`radio-group`](https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html) | 单项选择器，内部由多个 radio 组成 | 1.0.0 | - | -
`-` | [`picker-view`](https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html) | 嵌入页面的滚动选择器 | 1.0.0 | - | -
`-` | [`picker-view-column`](https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html) | 滚动选择器子项 | 1.0.0 | - | -
`-` | [`picker`](https://developers.weixin.qq.com/miniprogram/dev/component/picker.html) | 从底部弹起的滚动选择器 | 1.0.0 | - | -
`-` | [`switch`](https://developers.weixin.qq.com/miniprogram/dev/component/switch.html) | 开关选择器 | 1.0.0 | - | -
`-` | [`slider`](https://developers.weixin.qq.com/miniprogram/dev/component/slider.html) | 滑动选择器 | 1.0.0 | WebView | -

#### 反馈

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`progress`](https://developers.weixin.qq.com/miniprogram/dev/component/progress.html) | 进度条 | 1.0.0 | WebView | -

#### 杂项

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

## 宿主容器

### 微信

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.getAppBaseInfo` | 获取微信APP基础信息 | - | - | -
`-` | `wx.getAppAuthorizeSetting` | 获取微信APP授权设置 | - | - | -
`-` | `wx.updateWeChatApp` | 更新客户端版本 | - | - | -

### 小程序

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.getLaunchOptionsSync` | 获取小程序启动时的参数 | - | - | -
`-` | `wx.getEnterOptionsSync` | 获取本次小程序启动时的参数 | - | - | -
`-` | `wx.postMessageToReferrerPage` | 向跳转的源页面发送消息 | - | - | -
`-` | `wx.postMessageToReferrerMiniProgram` | 向跳转的源小程序发送消息，源小程序可在 wx.onShow 或 wx.getEnterOptionsSync 中通过 extraData 接收消息 | - | - | -
`-` | `wx.onError` | 监听小程序错误事件 | - | - | -
`-` | `wx.offError` | 移除小程序错误事件的监听函数 | - | - | -
`-` | `wx.onUnhandledRejection` | 监听未处理的 Promise 拒绝事件 | - | - | -
`-` | `wx.offUnhandledRejection` | 移除未处理的 Promise 拒绝事件的监听函数 | - | - | -
`-` | `wx.onLazyLoadError` | 监听小程序异步组件加载失败事件 | - | - | -
`-` | `wx.offLazyLoadError` | 移除小程序异步组件加载失败事件的监听函数 | - | - | -
`-` | `wx.onPageNotFound` | 监听小程序要打开的页面不存在事件 | - | - | -
`-` | `wx.offPageNotFound` | 移除小程序要打开的页面不存在事件的监听函数 | - | - | -
`-` | `wx.onThemeChange` | 监听系统主题改变事件 | - | - | -
`-` | `wx.offThemeChange` | 移除系统主题改变事件的监听函数 | - | - | -
`-` | `wx.onAudioInterruptionBegin` | 监听音频因为受到系统占用而被中断开始事件 | - | - | -
`-` | `wx.offAudioInterruptionBegin` | 移除音频因为受到系统占用而被中断开始事件的监听函数 | - | - | -
`-` | `wx.onAudioInterruptionEnd` | 监听音频中断结束事件 | - | - | -
`-` | `wx.offAudioInterruptionEnd` | 移除音频中断结束事件的监听函数 | - | - | -
`-` | `wx.onAppShow` | 监听小程序切前台事件 | - | - | -
`-` | `wx.offAppShow` | 移除小程序切前台事件的监听函数 | - | - | -
`-` | `wx.onAppHide` | 监听小程序切后台事件 | - | - | -
`-` | `wx.offAppHide` | 移除小程序切后台事件的监听函数 | - | - | -

### 开放平台

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`channel-live`](https://developers.weixin.qq.com/miniprogram/dev/component/channel-live.html) | 小程序内嵌视频号直播组件，展示视频号直播状态和封面，并无弹窗跳转至视频号 | 2.29.0 | - | -
`-` | [`channel-video`](https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html) | 小程序内嵌视频号视频组件，支持在小程序中播放视频号视频，并无弹窗跳转至视频号 | 2.25.1 | - | -
`-` | [`store-home`](https://developers.weixin.qq.com/miniprogram/dev/component/store-home.html) | 小程序内嵌微信小店首页，展示小店首页，并进行跳转交易 | 3.5.5 | WebView | -
`-` | [`store-product`](https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html) | 小程序内嵌微信小店商品，展示小店商品，并进行跳转交易 | 3.5.5 | WebView | -
`-` | [`open-data`](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html) | 用于展示微信开放的数据 | - | WebView | 用户信息相关功能已进行调整
`-` | [`official-account`](https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html) | 公众号关注组件 | 2.3.0 | - | -
`-` | [`ad`](https://developers.weixin.qq.com/miniprogram/dev/component/ad.html) | Banner 广告 | 1.9.94 | - | -
`-` | [`ad-custom`](https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html) | 原生模板 广告 | 2.10.4 | - | -

### WXML

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

### 第三方平台

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

## 平台

### 位置

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

### 支付

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

### 网络协议

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

### 本地存储

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `-` | - | - | - | -

### 系统

#### 基本

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.getSystemInfo` | 获取系统信息 | - | - | -
`-` | `wx.getSystemInfoSync` | wx.getSystemInfo 的同步版本 | - | - | -
`-` | `wx.getSystemInfoAsync` | 异步获取系统信息 | - | - | -
`-` | `wx.getUpdateManager` | 获取全局唯一的版本更新管理器，用于管理小程序更新 | - | - | -
`-` | `UpdateManager.onCheckForUpdate` | 监听向微信后台请求检查更新结果事件 | - | - | -
`-` | `UpdateManager.onUpdateFailed` | 监听小程序更新失败事件 | - | - | -
`-` | `UpdateManager.onUpdateReady` | 监听小程序有版本更新事件 | - | - | -
`-` | `UpdateManager.applyUpdate` | 强制小程序重启并使用新版本 | - | - | -

#### 界面

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`camera`](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html) | 系统相机 | 1.6.0 | - | -
`-` | [`map`](https://developers.weixin.qq.com/miniprogram/dev/component/map.html) | 地图 | 1.0.0 | - | v2.7.0 起支持同层渲染
`-` | [`web-view`](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) | 承载网页的容器 | 1.6.4 | WebView | -
`-` | `wx.getRendererUserAgent` | 获取 Webview 小程序的 UserAgent | - | - | -
`-` | `wx.openSystemBluetoothSetting` | 跳转系统蓝牙设置页 | - | - | -
`-` | `wx.openAppAuthorizeSetting` | 跳转系统微信授权管理页 | - | - | -

### 设备

#### 物理设备

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.getWindowInfo` | 获取窗口信息 | - | - | -
`-` | `wx.getSystemSetting` | 获取设备设置 | - | - | -
`-` | `wx.getDeviceInfo` | 获取设备基础信息 | - | - | -
`-` | `wx.getDeviceBenchmarkInfo` | 获取设备性能得分和机型档位数据 | - | - | -

## 参考

- [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/component/)
- [Taro](https://taro-docs.jd.com/docs/components-desc)
- [Ant Design Mini](https://mini.ant.design/)
- [taro-ui@next](https://taro-ui.jd.com/#/docs/introduction)