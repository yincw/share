---
toc_max_heading_level: 4
---

# 小程序应用

微信小程序、Taro

## 用户界面

### 调试

<!-- - 调试 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [vConsole](https://github.com/Tencent/vConsole) | - | - | - | -
`-` | `console` | 向调试面板中打印日志 | - | - | -
`Taro.` | `wx.setEnableDebug` | 设置是否打开调试开关 | - | - | -
`Taro.` | `wx.getLogManager` | 获取日志管理器对象 | - | - | -
`Taro.` | `wx.getRealtimeLogManager` | 获取实时日志管理器对象 | - | - | -

### 界面开发

#### 基础

<!-- - 基础环境
- 背景
- 字体
- Skyline -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`<PageMeta>` | [`<page-meta>`](https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html) | 页面属性配置节点，用于指定页面的一些属性、监听页面事件 | 2.9.0 | - | -
`-` | [`tap-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/tap-gesture-handler.html) | 点击时触发手势 | - | Skyline | -
`-` | [`double-tap-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/double-tap-gesture-handler.html) | 双击时触发手势 | - | Skyline | -
`-` | [`long-press-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html) | 长按时触发手势 | - | Skyline | -
`-` | [`force-press-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/force-press-gesture-handler.html) | iPhone 设备重按时触发手势 | - | Skyline | -
`-` | [`horizontal-drag-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html) | 横向滑动时触发手势 | - | Skyline | -
`-` | [`vertical-drag-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html) | 纵向滑动时触发手势 | - | Skyline | -
`-` | [`pan-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html) | 拖动（横向/纵向）时触发手势 | - | Skyline | -
`-` | [`scale-gesture-handler`](https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html) | 多指缩放时触发手势 | - | Skyline | -
`-` | `wx.env` | 环境变量 | - | - | 基础环境
`Taro.` | `wx.canIUse` | 判断小程序的API，回调，参数，组件等是否在当前版本可用 | - | - | -
`Taro.` | `wx.base64ToArrayBuffer` | 将 Base64 字符串转成 ArrayBuffer 对象 | - | - | -
`Taro.` | `wx.arrayBufferToBase64` | 将 ArrayBuffer 对象转成 Base64 字符串 | - | - | -
`-` | `wx.getSkylineInfo` | 获取当前运行环境对于 Skyline 渲染引擎 的支持情况 | - | - | 系统-渲染引擎
`-` | `wx.getSkylineInfoSync` | 获取当前运行环境对于 Skyline 渲染引擎 的支持情况 | - | - | -
`Taro.` | `wx.setBackgroundTextStyle` | 动态设置下拉背景字体、loading 图的样式 | - | - | 背景
`Taro.` | `wx.setBackgroundColor` | 动态设置窗口的背景色 | - | - | -
`-` | `wx.loadBuiltInFontFace` | 加载内置字体 | - | - | 字体
`Taro.` | `wx.loadFontFace` | 动态加载网络字体 | - | - | -

#### 视图

<!-- - 视图组件
- 生命周期&页面事件
  - https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
  - https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page-life-cycle.html
  - https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`<selection>`](https://developers.weixin.qq.com/miniprogram/dev/component/selection.html) | 局部文本选区 | 3.6.4 | WebView | -
`<View>` | [`<view>`](https://developers.weixin.qq.com/miniprogram/dev/component/view.html) | 视图容器 | 1.0.0 | - | -
`<ScrollView>` | [`<scroll-view>`](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html) | 可滚动视图区域 | 1.0.0 | - | -
`<MovableView>` | [`<movable-view>`](https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html) | 可移动的视图容器，在页面中可以拖拽滑动 | 1.2.0 | WebView | -
`<MovableArea>` | [`<movable-area>`](https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html) | movable-view的可移动区域 | 1.2.0 | WebView | -
`-` | [~~`<cover-view>`~~](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html) | 覆盖在原生组件之上的文本视图 | 1.4.0 | - | 目前原生组件均已支持同层渲染，建议使用 view 替代
`-` | [~~`<cover-image>`~~](https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html) | 覆盖在原生组件之上的图片视图 | 1.4.0 | - | 目前原生组件均已支持同层渲染，建议使用 image 替代
`<Swiper>` | [`<swiper>`](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html) | 滑块视图容器 | 1.0.0 | - | -
`<SwiperItem>` | [`<swiper-item>`](https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html) | 仅可放置在swiper组件中，宽高自动设置为100% | 1.0.0 | - | -
`<PageContainer>` | [`<page-container>`](https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html) | 页面容器 | 2.16.0 | - | -
`<RootPortal>` | [`<root-portal>`](https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html) | 使整个子树从页面中脱离出来，类似于在 CSS 中使用 fixed position 的效果 | 2.25.2 | - | -
`<MatchMedia>` | [`<match-media>`](https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html) | media query 匹配检测节点 | 2.11.1 | WebView | -
`-` | `data` | 页面的初始数据 | - | - | -
`-` | `onLoad(options)` | 生命周期回调—监听页面加载 | - | - | -
`-` | `onShow()` | 生命周期回调—监听页面显示 | - | - | -
`-` | `onReady()` | 生命周期回调—监听页面初次渲染完成 | - | - | -
`-` | `onHide()` | 生命周期回调—监听页面隐藏 | - | - | -
`-` | `onUnload()` | 生命周期回调—监听页面卸载 | - | - | -
`-` | `onRouteDone()` | 生命周期回调—监听路由动画完成 | - | - | -
`-` | `onPullDownRefresh()` | 监听用户下拉动作 | - | - | -
`-` | `wx.startPullDownRefresh` | 开始下拉刷新 | - | - | -
`-` | `wx.stopPullDownRefresh` | 停止当前页面下拉刷新 | - | - | -
`-` | `onReachBottom()` | 页面上拉触底事件的处理函数 | - | - | -
`-` | `onShareAppMessage()` | 用户点击右上角转发 | - | - | -
`-` | `onShareTimeline()` | 用户点击右上角转发到朋友圈 | 2.11.3 | - | 仅 Android 支持
`-` | `onAddToFavorites()` | 用户点击右上角收藏 | - | - | 仅 Android 支持
`-` | `onPageScroll()` | 页面滚动触发事件的处理函数 | - | - | -
`-` | `wx.pageScrollTo` | 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位 | - | - | -
`-` | `onResize()` | 页面尺寸改变时触发，详见 响应显示区域变化 | 2.4.0 | - | -
`-` | `onTabItemTap()` | 当前是 tab 页时，点击 tab 时触发 | 1.9.0 | - | -
`-` | `onSaveExitState()` | 页面销毁前保留状态回调 | 2.7.4 | - | -
`-` | `getCurrentPages()` | 获取当前页面栈。 | - | - | -

#### 路由

<!-- - 路由
- 自定义路由
- 路由事件 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`<navigator>`](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html) | 页面链接 | 1.0.0 | - | -
`-` | `wx.navigateTo` | 保留当前页面，跳转到应用内的某个页面 | - | - | 路由
`-` | `wx.redirectTo` | 关闭当前页面，跳转到应用内的某个页面 | - | - | -
`-` | `wx.navigateBack` | 关闭当前页面，返回上一页面或多级页面 | - | - | -
`-` | `wx.switchTab` | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 | - | - | -
`-` | `wx.reLaunch` | 关闭所有页面，打开到应用内的某个页面 | - | - | -
`-` | `wx.router` | router 对象，可以通过 wx.router 获取 | - | - | 自定义路由
`-` | `wx.onBeforeAppRoute` | 监听路由事件下发后，**执行路由逻辑前**的事件监听 | - | - | -
`-` | `wx.offBeforeAppRoute` | 移除路由事件的监听函数 | - | - | -
`-` | `wx.onAppRoute` | 监听路由事件下发后，**执行路由逻辑后**的事件监听 | - | - | -
`-` | `wx.offAppRoute` | 移除路由事件的监听函数 | - | - | -
`-` | `wx.onAppRouteDone` | 监听当前路由**动画执行完成**的事件监听 | - | - | -
`-` | `wx.offAppRouteDone` | 移除当前路由**动画执行完成**的事件的监听函数 | - | - | -
`-` | `wx.onBeforePageLoad` | 监听路由事件引起新的页面实例化时，**页面实例化前**的事件监听 | - | - | -
`-` | `wx.offBeforePageLoad` | 移除路由事件的监听函数 | - | - | -
`-` | `wx.onAfterPageLoad` | 监听路由事件引起新的页面实例化时，**页面实例化完成**的事件监听 | - | - | -
`-` | `wx.offAfterPageLoad` | 移除路由事件的监听函数 | - | - | -
`-` | `wx.onBeforePageUnload` | 监听路由事件引起现有页面实例销毁时，页面**实例销毁前**的事件监听 | - | - | -
`-` | `wx.offBeforePageUnload` | 移除路由事件的监听函数 | - | - | -
`-` | `wx.onAfterPageUnload` | 监听路由事件引起现有页面实例销毁时，页面**实例销毁后**的事件监听 | - | - | -
`-` | `wx.offAfterPageUnload` | 移除路由事件的监听函数 | - | - | -

#### 网络请求

<!-- - 网络请求
- 数据预拉取和周期性更新 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.request` | 发起 HTTPS 网络请求 | - | - | -
`-` | `wx.downloadFile` | 下载文件资源到本地 | - | - | -
`-` | `wx.uploadFile` | 将本地资源上传到服务器 | - | - | -
`-` | `wx.onBackgroundFetchData` | 监听收到 backgroundFetch 数据事件 | - | - | 数据预拉取和周期性更新
`-` | `wx.getBackgroundFetchData` | 拉取 backgroundFetch 客户端缓存数据 | - | - | -
`-` | `wx.getBackgroundFetchToken` | 获取设置过的自定义登录态 | - | - | -
`-` | `wx.setBackgroundFetchToken` | 设置自定义登录态，在周期性拉取数据时带上，便于第三方服务器验证请求合法性 | - | - | -

#### 动画

<!-- - 动画
- worklet 动画 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.createAnimation` | 创建一个动画实例 animation | - | - | -
`-` | `wx.worklet` | worklet 对象，worklet 动画 | - | - | -

#### 无障碍

<!-- - 无障碍 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.checkIsOpenAccessibility` | 检测是否开启视觉无障碍功能 | - | - | -
`-` | [`aria-component`](https://developers.weixin.qq.com/miniprogram/dev/component/aria-component.html) | 满足视障人士对于小程序的访问需求 | - | - | -

### 监控与分析

<!-- - 数据分析 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.reportMonitor` | 自定义**业务数据监控**上报接口 | - | - | -
`-` | `wx.reportAnalytics` | 自定义**分析数据**上报接口 | - | - | -
`-` | `wx.reportEvent` | 事件上报 | - | - | -
`-` | `wx.getCommonConfig` | 给定实验参数数组，获取对应的实验参数值 | - | - | -
`-` | `wx.getExptInfoSync` | 给定实验参数数组，获取对应的实验参数值 | - | - | -

### 性能

<!-- - 性能
- 分包加载
- Worker -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.getPerformance` | 获取当前小程序性能相关的信息 | - | - | -
`-` | `wx.reportPerformance` | 小程序测速上报 | - | - | -
`-` | `wx.preloadAssets` | 为视图层预加载媒体资源文件, 目前支持：font，image | - | - | -
`-` | `wx.preloadWebview` | 预加载下个页面的 WebView | - | - | -
`-` | `wx.preloadSkylineView` | 预加载下个页面所需要的 Skyline 运行环境 | - | - | -
`-` | `wx.preDownloadSubpackage` | 触发分包预下载 | - | - | -
`-` | `wx.createWorker` | 创建一个 Worker 线程 | - | - | -

### 安全

<!-- - 加密 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.getUserCryptoManager` | 获取用户加密模块 | - | - | -
`-` | `wx.getRandomValues` | 获取密码学安全随机数 | - | - | -

### 场景

#### 图形

<!-- - 画布 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`<canvas>`](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html) | 画布 | 1.0.0 | - | `native-component`
`-` | `wx.createOffscreenCanvas` | 创建离屏 canvas 实例 | - | - | -
`-` | `wx.createCanvasContext` | 创建 canvas 的绘图上下文 CanvasContext 对象 | - | - | -
`-` | `wx.canvasToTempFilePath` | 把当前画布指定区域的内容导出生成指定大小的图片 | - | - | -
`-` | `wx.canvasPutImageData` | 将像素数据绘制到画布 | - | - | -
`-` | `wx.canvasGetImageData` | 获取 canvas 区域隐含的像素数据 | - | - | -

#### 音视频

<!-- - 音频
  - 背景音频
  - 录音
  - 实时语音
- 视频
  - 视频解码器
  - 画面录制器
- 实时音视频
- 音视频合成 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [~~`<audio>`~~](https://developers.weixin.qq.com/miniprogram/dev/component/audio.html) | 音频 | 1.0.0 | - | 从基础库 1.6.0 开始，本接口停止维护，请使用 wx.createInnerAudioContext 代替
`-` | `wx.createInnerAudioContext` | 创建内部 audio 上下文 InnerAudioContext 对象 | - | - | -
`-` | `wx.playVoice` | 开始播放语音 | - | - | -
`-` | `wx.pauseVoice` | 暂停正在播放的语音 | - | - | -
`-` | `wx.stopVoice` | 结束播放语音 | - | - | -
`-` | `wx.getAvailableAudioSources` | 获取当前支持的音频输入源 | - | - | -
`-` | `wx.setInnerAudioOption` | 设置 InnerAudioContext 的播放选项 | - | - | -
`-` | `wx.createAudioContext` | 创建 audio 上下文 AudioContext 对象 | - | - | -
`-` | `wx.createWebAudioContext` | 创建 WebAudio 上下文 | - | - | -
`-` | `wx.createMediaAudioPlayer` | 创建媒体音频播放器对象 MediaAudioPlayer 对象，可用于播放视频解码器 VideoDecoder 输出的音频 | - | - | -
`-` | `wx.playBackgroundAudio` | 使用后台播放器播放音乐 | - | - | 背景音频
`-` | `wx.onBackgroundAudioPlay` | 监听音乐播放事件 | - | - | -
`-` | `wx.pauseBackgroundAudio` | 暂停播放音乐 | - | - | -
`-` | `wx.onBackgroundAudioPause` | 监听音乐暂停事件 | - | - | -
`-` | `wx.stopBackgroundAudio` | 停止播放音乐 | - | - | -
`-` | `wx.onBackgroundAudioStop` | 监听音乐停止事件 | - | - | -
`-` | `wx.seekBackgroundAudio` | 控制音乐播放进度 | - | - | -
`-` | `wx.getBackgroundAudioPlayerState` | 获取后台音乐播放状态 | - | - | -
`-` | `wx.getBackgroundAudioManager` | 获取全局唯一的背景音频管理器 | - | - | -
`-` | [`<voip-room>`](https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html) | 多人音视频对话 | 2.11.0 | WebView | -
`-` | `wx.startRecord` | 开始录音 | - | - | 录音
`-` | `wx.stopRecord` | 停止录音 | - | - | -
`-` | `wx.getRecorderManager` | 获取全局唯一的录音管理器 RecorderManager | - | - | -
`-` | `wx.joinVoIPChat` | 加入 (创建) 实时语音通话 | - | - | 实时语音
`-` | `wx.exitVoIPChat` | 退出（销毁）实时语音通话 | - | - | -
`-` | `wx.updateVoIPChatMuteConfig` | 更新实时语音静音设置 | - | - | -
`-` | `wx.onVoIPChatStateChanged` | 监听**房间状态**变化事件 | - | - | -
`-` | `wx.offVoIPChatStateChanged` | 移除**房间状态**变化事件的监听函数 | - | - | -
`-` | `wx.onVoIPChatInterrupted` | 监听**被动断开**实时语音通话事件 | - | - | -
`-` | `wx.offVoIPChatInterrupted` | 移除**被动断开**实时语音通话事件的监听函数 | - | - | -
`-` | `wx.onVoIPChatMembersChanged` | 监听实时语音通话成员**在线状态**变化事件 | - | - | -
`-` | `wx.offVoIPChatMembersChanged` | 移除实时语音通话成员**在线状态**变化事件的监听函数 | - | - | -
`-` | `wx.onVoIPChatSpeakersChanged` | 监听实时语音通话成员**通话状态**变化事件 | - | - | -
`-` | `wx.offVoIPChatSpeakersChanged` | 移除实时语音通话成员**通话状态**变化事件的监听函数 | - | - | -
`-` | `wx.subscribeVoIPVideoMembers` | 订阅视频画面成员 | - | - | -
`-` | `wx.onVoIPVideoMembersChanged` | 监听实时语音通话成员**视频状态**变化事件 | - | - | -
`-` | `wx.offVoIPVideoMembersChanged` | 移除实时语音通话成员**视频状态**变化事件的监听函数 | - | - | -
`-` | `wx.join1v1Chat` | 加入（创建）双人通话 | - | - | -
`-` | `wx.setEnable1v1Chat` | 开启双人通话 | - | - | -
`-` | [`<video>`](https://developers.weixin.qq.com/miniprogram/dev/component/video.html) | 视频 | 1.0.0 | - | v2.4.0 起支持同层渲染，`native-component`
`-` | `wx.createVideoContext` | 创建 video 上下文 VideoContext 对象 | - | - | -
`-` | `wx.chooseVideo` | 拍摄视频或从手机相册中选视频 | - | - | -
`-` | `wx.chooseMedia` | 拍摄或从手机相册中选择图片或视频 | - | - | -
`-` | `wx.checkDeviceSupportHevc` | 查询设备是否支持 H.265 编码 | - | - | -
`-` | `wx.getVideoInfo` | 获取视频详细信息 | - | - | -
`-` | `wx.openVideoEditor` | 打开视频编辑器 | - | - | -
`-` | `wx.compressVideo` | 压缩视频接口 | - | - | -
`-` | `wx.saveVideoToPhotosAlbum` | 保存视频到系统相册 | - | - | -
`-` | `wx.createVideoDecoder` | 创建视频解码器，可逐帧获取解码后的数据 | - | - | 视频解码器
`-` | `wx.createMediaRecorder` | 创建 WebGL 画面录制器，可逐帧录制在 WebGL 上渲染的画面并导出视频文件 | - | - | 画面录制器
`-` | [`<live-pusher>`](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html) | 实时音视频录制 | 1.7.0 | - | v2.9.1 起支持同层渲染，`native-component`
`-` | `wx.createLivePusherContext` | 创建 live-pusher 上下文 LivePusherContext 对象 | - | - | =
`-` | [`<live-player>`](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html) | 实时音视频播放 | 1.7.0 | - | v2.9.1 起支持同层渲染，`native-component`
`-` | `wx.createLivePlayerContext` | 创建 live-player 上下文 LivePlayerContext 对象 | - | - | -
`-` | `wx.createMediaContainer` | 创建音视频处理容器，最终可将容器中的轨道合成一个视频 | - | - | 音视频合成

#### 元宇宙

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`XR-FRAME`](https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/overview/) | 小程序官方提供的XR/3D应用解决方案 | 2.32.0 | - | -

#### AI

<!-- - AI 推理
- 视觉算法
- 人脸检测 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.createInferenceSession` | 创建 AI 推理 Session | - | - | AI 推理
`-` | `wx.getInferenceEnvInfo` | 获取通用AI推理引擎版本 | - | - | -
`-` | `wx.createVKSession` | 创建 vision kit 会话对象 | - | - | 视觉算法
`-` | `wx.isVKSupport` | 判断支持版本 | - | - | -
`-` | `wx.initFaceDetect` | 初始化人脸检测 | - | - | 人脸检测
`-` | `wx.faceDetect` | 人脸检测，使用前需要通过 wx.initFaceDetect 进行一次初始化，推荐使用相机接口返回的帧数据 | - | - | -
`-` | `wx.stopFaceDetect` | 停止人脸检测 | - | - | -

### UI 组件库

#### 通用

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`<icon>`](https://developers.weixin.qq.com/miniprogram/dev/component/icon.html) | 图标组件 | 1.0.0 | WebView | -
`-` | [`<button>`](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | 按钮 | 1.0.0 | - | -

#### 布局

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`<grid-view>`](https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html) | Skyline 下网格布局容器 和 瀑布流布局容器 | 2.29.0 | Skyline | -
`-` | [`<grid-builder>`](https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html) | 网格构造器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点 | 3.4.0 | Skyline | -
`-` | [`<list-view>`](https://developers.weixin.qq.com/miniprogram/dev/component/list-view.html) | 列表布局容器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点或 sticky-section 组件直接子节点 | 2.29.0 | Skyline | -
`-` | [`<list-builder>`](https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html) | 列表构造器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点 | 3.3.0 | Skyline | -
`-` | [`<sticky-header>`](https://developers.weixin.qq.com/miniprogram/dev/component/sticky-header.html) | 吸顶布局容器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点或 sticky-section 组件直接子节点 | 2.29.0 | Skyline | -
`-` | [`<sticky-section>`](https://developers.weixin.qq.com/miniprogram/dev/component/sticky-section.html) | 吸顶布局容器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点 | 2.29.0 | Skyline | -
`-` | [`<nested-scroll-header>`](https://developers.weixin.qq.com/miniprogram/dev/component/nested-scroll-header.html) | 嵌套 scroll-view 场景中属于外层 scroll-view 的节点，仅支持作为 `<scroll-view type="nested">` 模式的直接子节点 | 3.2.0 | Skyline | -
`-` | [`<nested-scroll-body>`](https://developers.weixin.qq.com/miniprogram/dev/component/nested-scroll-body.html) | 嵌套 scroll-view 场景中属于里层 scroll-view 的节点，仅支持作为 `<scroll-view type="nested">` 模式的直接子节点 | 3.2.0 | Skyline | -
`-` | [`<draggable-sheet>`](https://developers.weixin.qq.com/miniprogram/dev/component/draggable-sheet.html) | 半屏可拖拽组件 | 3.2.0 | Skyline | -
`-` | [`<open-container>`](https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html) | 容器转场动画组件 | 3.4.0 | Skyline | -
`-` | [`<share-element>`](https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html) | 共享元素 | 2.16.0 | Skyline | -
`-` | [`<snapshot>`](https://developers.weixin.qq.com/miniprogram/dev/component/snapshot.html) | 截图组件 | 3.0.1 | Skyline | -
`-` | [`<span>`](https://developers.weixin.qq.com/miniprogram/dev/component/span.html) | 用于支持内联文本和 image / navigator 的混排 | - | Skyline | -

#### 导航

<!-- - 导航栏
- Tab Bar
- 菜单 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`<functional-page-navigator>`](https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html) | 仅在插件中有效，用于跳转到插件功能页 | 2.1.0 | WebView | -
`-` | [`<navigation-bar>`](https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html) | 页面导航条配置节点，用于指定导航栏的一些属性 | 2.9.0 | WebView | 导航栏
`-` | `wx.setNavigationBarTitle` | 动态设置当前页面的标题 | - | - | -
`-` | `wx.setNavigationBarColor` | 设置页面导航条颜色 | - | - | -
`-` | `wx.hideHomeButton` | 隐藏返回首页按钮 | - | - | -
`-` | `wx.showNavigationBarLoading` | 显示在当前页面显示导航条加载动画消息提示框 | - | - | -
`-` | `wx.hideNavigationBarLoading` | 在当前页面隐藏导航条加载动画 | - | - | -
`-` | `wx.showTabBar` | 显示 tabBar | - | - | Tab Bar
`-` | `wx.hideTabBar` | 隐藏 tabBar | - | - | -
`-` | `wx.setTabBarStyle` | 动态设置 tabBar 的整体样式 | - | - | -
`-` | `wx.setTabBarItem` | 动态设置 tabBar 某一项的内容，2.7.0 起图片支持临时文件和网络文件 | - | - | -
`-` | `wx.setTabBarBadge` | 为 tabBar 某一项的右上角添加文本 | - | - | -
`-` | `wx.removeTabBarBadge` | 移除 tabBar 某一项右上角的文本 | - | - | -
`-` | `wx.showTabBarRedDot` | 显示 tabBar 某一项的右上角的红点 | - | - | -
`-` | `wx.hideTabBarRedDot` | 隐藏 tabBar 某一项的右上角的红点 | - | - | -
`-` | `wx.getMenuButtonBoundingClientRect` | 获取菜单按钮（右上角胶囊按钮）的布局位置信息 | - | - | 菜单
`-` | `wx.onMenuButtonBoundingClientRectWeightChange` | 监听菜单按钮（右上角胶囊按钮）的布局位置信息变化事件 | - | - | -
`-` | `wx.offMenuButtonBoundingClientRectWeightChange` | 移除菜单按钮（右上角胶囊按钮）的布局位置信息变化事件的监听函数 | - | - | -
`-` | `wx.onOnUserTriggerTranslation` | 监听用户触发了小程序菜单中的翻译功能（） | - | - | -
`-` | `wx.offOnUserTriggerTranslation` | 移除用户触发了小程序菜单中的翻译功能（）的监听函数 | - | - | -

#### 数据展示

<!-- - 图片 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`<text>`](https://developers.weixin.qq.com/miniprogram/dev/component/text.html) | 文本 | 1.0.0 | - | -
`-` | [`<image>`](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) | 图片 | 1.0.0 | - | -
`-` | `wx.chooseImage` | 从本地相册选择图片或使用相机拍照 | - | - | -
`-` | `wx.chooseMessageFile` | 从客户端会话选择文件 | - | - | -
`-` | `wx.getImageInfo` | 获取图片信息 | - | - | -
`-` | `wx.previewImage` | 在新页面中全屏预览图片 | - | - | -
`-` | `wx.previewMedia` | 预览图片和视频 | - | - | -
`-` | `wx.editImage` | 编辑图片接口 | - | - | -
`-` | `wx.cropImage` | 裁剪图片接口 | - | - | -
`-` | `wx.compressImage` | 压缩图片接口，可选压缩质量 | - | - | -
`-` | `wx.saveImageToPhotosAlbum` | 保存图片到系统相册 | - | - | -

#### 数据录入

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`<form>`](https://developers.weixin.qq.com/miniprogram/dev/component/form.html) | 表单 | 1.0.0 | - | -
`-` | [`<label>`](https://developers.weixin.qq.com/miniprogram/dev/component/label.html) | 用来改进表单组件的可用性 | 1.0.0 | - | -
`-` | [`<input>`](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) | 输入框 | 1.0.0 | - | `native-component`
`-` | [`<textarea>`](https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html) | 多行输入框 | 1.0.0 | - | `native-component`
`-` | [`<keyboard-accessory>`](https://developers.weixin.qq.com/miniprogram/dev/component/keyboard-accessory.html) | 设置 input / textarea 聚焦时键盘上方 cover-view / cover-image 工具栏视图 | 2.15.0 | WebView | -
`-` | [`<editor>`](https://developers.weixin.qq.com/miniprogram/dev/component/editor.html) | 富文本编辑器，可以对图片、文字进行编辑 | 2.7.0 | WebView | -
`-` | [`<rich-text>`](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html) | 富文本（HTML） | 1.4.0 | - | -
`-` | [`<checkbox>`](https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html) | 多选项目 | 1.0.0 | - | -
`-` | [`<checkbox-group>`](https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html) | 多项选择器，内部由多个checkbox组成 | 1.0.0 | - | -
`-` | [`<radio>`](https://developers.weixin.qq.com/miniprogram/dev/component/radio.html) | 单选项目 | 1.0.0 | - | -
`-` | [`<radio-group>`](https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html) | 单项选择器，内部由多个 radio 组成 | 1.0.0 | - | -
`-` | [`<picker-view>`](https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html) | 嵌入页面的滚动选择器 | 1.0.0 | - | -
`-` | [`<picker-view-column>`](https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html) | 滚动选择器子项 | 1.0.0 | - | -
`-` | [`<picker>`](https://developers.weixin.qq.com/miniprogram/dev/component/picker.html) | 从底部弹起的滚动选择器 | 1.0.0 | - | -
`-` | [`<switch>`](https://developers.weixin.qq.com/miniprogram/dev/component/switch.html) | 开关选择器 | 1.0.0 | - | -
`-` | [`<slider>`](https://developers.weixin.qq.com/miniprogram/dev/component/slider.html) | 滑动选择器 | 1.0.0 | WebView | -

#### 反馈

<!-- - 交互 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | [`<progress>`](https://developers.weixin.qq.com/miniprogram/dev/component/progress.html) | 进度条 | 1.0.0 | WebView | -
`-` | `wx.showLoading` | 显示 loading 提示框 | - | - | -
`-` | `wx.hideLoading` | 隐藏 loading 提示框 | - | - | -
`-` | `wx.showToast` | 显示消息提示框 | - | - | -
`-` | `wx.hideToast` | 隐藏消息提示框 | - | - | -
`-` | `wx.showModal` | 显示模态对话框 | - | - | -
`-` | `wx.showActionSheet` | 显示操作菜单 | - | - | -
`-` | `wx.enableAlertBeforeUnload` | 开启小程序页面返回询问对话框 | - | - | -
`-` | `wx.disableAlertBeforeUnload` | 关闭小程序页面返回询问对话框 | - | - | -

#### 杂项

<!-- - 置顶
- 自定义组件 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.setTopBarText` | 动态设置置顶栏文字内容 | - | - | -
`-` | `wx.nextTick` | 延迟一部分操作到下一个时间片再执行 | - | - | -

## 平台

### 位置

<!-- - 位置 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.getLocation` | 获取当前的地理位置、速度 | - | - | -
`-` | `wx.getFuzzyLocation` | 获取当前的模糊地理位置 | - | - | -
`-` | `wx.startLocationUpdate` | 开启小程序进入前台时接收位置消息 | - | - | -
`-` | `wx.startLocationUpdateBackground` | 开启小程序在前后台时均可接收位置消息，后台包括离开小程序后继续使用微信（微信仍在前台）、离开微信（微信在后台）两个场景，需引导用户开启授权 | - | - | -
`-` | `wx.onLocationChange` | 监听实时地理位置变化事件，需结合 wx.startLocationUpdateBackground、wx.startLocationUpdate使用 | - | - | -
`-` | `wx.offLocationChange` | 移除实时地理位置变化事件的监听函数 | - | - | -
`-` | `wx.onLocationChangeError` | 监听持续定位接口返回失败时触发 | - | - | -
`-` | `wx.offLocationChangeError` | 移除持续定位接口返回失败时触发 | - | - | -
`-` | `wx.stopLocationUpdate` | 关闭监听实时位置变化，前后台都停止消息接收 | - | - | -
`-` | `wx.choosePoi` | 打开POI列表选择位置，支持模糊定位（精确到市）和精确定位混选 | - | - | -
`-` | `wx.chooseLocation` | 打开地图选择位置 | - | - | -
`-` | `wx.openLocation` | 使用微信内置地图查看位置 | - | - | -

### 支付

<!-- - 支付 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.requestPayment` | 发起微信支付 | - | - | -
`-` | `wx.requestPluginPayment` | 插件中发起支付 | - | - | -
`-` | `wx.requestVirtualPayment` | 发起米大师虚拟支付 | - | - | -
`-` | `wx.requestCommonPayment` | 发起通用支付 | - | - | -
`-` | `wx.openHKOfflinePayView` | 拉起WeChat Pay HK付款码 | - | - | -
`-` | `wx.requestMerchantTransfer` | 商家转账用户确认模式下，在微信客户端通过小程序拉起页面请求用户确认收款 | - | - | -

### 网络协议

<!-- - WebSocket
- mDNS
- TCP 通信
- UDP 通信 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.connectSocket` | 创建一个 WebSocket 连接 | - | - | WebSocket
`-` | `wx.sendSocketMessage` | 通过 WebSocket 连接发送数据 | - | - | -
`-` | `wx.closeSocket` | 关闭 WebSocket 连接 | - | - | -
`-` | `wx.onSocketOpen` | 监听 WebSocket 连接打开事件 | - | - | -
`-` | `wx.onSocketMessage` | 监听 WebSocket 接收到服务器的消息事件 | - | - | -
`-` | `wx.onSocketError` | 监听 WebSocket 错误事件 | - | - | -
`-` | `wx.onSocketClose` | 监听 WebSocket 连接关闭事件 | - | - | -
`-` | `wx.startLocalServiceDiscovery` | 开始搜索局域网下的 mDNS 服务 | - | - | mDNS
`-` | `wx.stopLocalServiceDiscovery` | 停止搜索 mDNS 服务 | - | - | -
`-` | `wx.onLocalServiceFound` | 监听 mDNS **服务发现**的事件 | - | - | -
`-` | `wx.offLocalServiceFound` | 移除 mDNS 服务发现的事件的监听函数 | - | - | -
`-` | `wx.onLocalServiceResolveFail` | 监听 mDNS **服务解析失败**的事件 | - | - | -
`-` | `wx.offLocalServiceResolveFail` | 移除 mDNS 服务解析失败的事件的监听函数 | - | - | -
`-` | `wx.onLocalServiceLost` | 监听 mDNS **服务离开**的事件 | - | - | -
`-` | `wx.offLocalServiceLost` | 移除 mDNS 服务离开的事件的监听函数 | - | - | -
`-` | `wx.onLocalServiceDiscoveryStop` | 监听 mDNS **服务停止搜索**的事件 | - | - | -
`-` | `wx.offLocalServiceDiscoveryStop` | 移除 mDNS 服务停止搜索的事件的监听函数 | - | - | -
`-` | `wx.createTCPSocket` | 创建一个 TCP Socket 实例 | - | - | TCP
`-` | `wx.createUDPSocket` | 创建一个 UDP Socket 实例 | - | - | UDP

### 本地存储

<!-- - 数据
  - 本地缓存
  - 内存缓存
- 缓存管理器 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.setStorage` | 将数据存储在本地缓存中指定的 key 中 | - | - | 本地缓存
`-` | `wx.setStorageSync` | 将数据存储在本地缓存中指定的 key 中 | - | - | -
`-` | `wx.batchSetStorage` | 将数据批量存储在本地缓存中指定的 key 中 | - | - | -
`-` | `wx.batchSetStorageSync` | 将数据批量存储在本地缓存中指定的 key 中 | - | - | -
`-` | `wx.removeStorage` | 从本地缓存中移除指定 key | - | - | -
`-` | `wx.removeStorageSync` | wx.removeStorage 的同步版本 | - | - | -
`-` | `wx.clearStorage` | 清理本地数据缓存 | - | - | -
`-` | `wx.clearStorageSync` | wx.clearStorage 的同步版本 | - | - | -
`-` | `wx.getStorage` | 从本地缓存中异步获取指定 key 的内容 | - | - | -
`-` | `wx.getStorageSync` | 从本地缓存中同步获取指定 key 的内容 | - | - | -
`-` | `wx.batchGetStorage` | 从本地缓存中异步批量获取指定 key 的内容 | - | - | -
`-` | `wx.batchGetStorageSync` | 从本地缓存中同步批量获取指定 key 的内容 | - | - | -
`-` | `wx.getStorageInfo` | 异步获取当前storage的相关信息 | - | - | -
`-` | `wx.getStorageInfoSync` | wx.getStorageInfo 的同步版本 | - | - | -
`-` | `wx.createBufferURL` | 根据传入的 buffer 创建一个唯一的 URL 存在内存中 | - | - | 内存缓存
`-` | `wx.revokeBufferURL` | 根据 URL 销毁存在内存中的数据 | - | - | -
`-` | `wx.createCacheManager` | 创建缓存管理器 | - | - | 缓存管理器

### 系统

#### 基本

<!-- - 系统
- 更新（小程序应用）
- 文件 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.getSystemInfo` | 获取系统信息 | - | - | -
`-` | `wx.getSystemInfoAsync` | 异步获取系统信息 | - | - | -
`-` | `wx.getSystemInfoSync` | wx.getSystemInfo 的同步版本 | - | - | -
`-` | `wx.getUpdateManager` | 获取全局唯一的版本更新管理器，用于管理小程序更新 | - | - | 更新
`-` | `UpdateManager.onCheckForUpdate` | 监听向微信后台请求检查更新结果事件 | - | - | -
`-` | `UpdateManager.onUpdateFailed` | 监听小程序更新失败事件 | - | - | -
`-` | `UpdateManager.onUpdateReady` | 监听小程序有版本更新事件 | - | - | -
`-` | `UpdateManager.applyUpdate` | 强制小程序重启并使用新版本 | - | - | -
`-` | `wx.openDocument` | 新开页面打开文档 | - | - | 文件
`-` | `wx.saveFileToDisk` | 保存文件系统的文件到用户磁盘，仅在 PC 端支持 | - | - | -
`-` | `wx.getFileSystemManager` | 获取全局唯一的文件管理器 | - | - | -

#### 界面

<!-- - 窗口
- 相机
- 地图
- 日历
- 联系人
- 电话
- 短信 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.openSystemBluetoothSetting` | 跳转系统蓝牙设置页 | - | - | 系统设置
`-` | `wx.getSystemSetting` | 获取设备设置 | - | - | -
`-` | `wx.getWindowInfo` | 获取窗口信息 | - | - | -
`-` | `wx.setWindowSize` | 设置窗口大小，该接口仅适用于 PC 平台，使用细则请参见指南 | - | - | 窗口
`-` | `wx.onWindowResize` | 监听窗口尺寸变化事件 | - | - | -
`-` | `wx.offWindowResize` | 移除窗口尺寸变化事件的监听函数 | - | - | -
`-` | `wx.checkIsPictureInPictureActive` | 返回当前是否存在小窗播放（小窗在 video/live-player/live-pusher 下可用） | - | - | -
`-` | [`<camera>`](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html) | 系统相机 | 1.6.0 | - | `native-component`
`-` | `wx.createCameraContext` | 创建 camera 上下文 CameraContext 对象 | - | - | -
`-` | [`<map>`](https://developers.weixin.qq.com/miniprogram/dev/component/map.html) | 地图 | 1.0.0 | - | v2.7.0 起支持同层渲染，`native-component`
`-` | `wx.createMapContext` | 创建 map 上下文 MapContext 对象 | - | - | -
`-` | `wx.addPhoneCalendar` | 向系统**日历**添加事件 | - | - | -
`-` | `wx.addPhoneRepeatCalendar` | 向系统日历添加重复事件 | - | - | -
`-` | `wx.addPhoneContact` | 添加手机**通讯录**联系人 | - | - | -
`-` | `wx.chooseContact` | 拉起手机通讯录，选择联系人 | - | - | -
`-` | `wx.makePhoneCall` | 拨打**电话** | - | - | -
`-` | `wx.sendSms` | 拉起手机发送**短信**界面 | - | - | -
`-` | [`<web-view>`](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) | 承载网页的容器 | 1.6.4 | WebView | -
`-` | `wx.getRendererUserAgent` | 获取 Webview 小程序的 UserAgent | - | - | -

### 设备

#### 物理设备

<!-- - 系统-设备信息
- 屏幕
- 键盘
- 扫码
- 移动网络
- Wi-Fi
- 蓝牙
  - 通用
  - 低功耗中心设备
  - 低功耗外围设备
  - 信标（Beacon）
- NFC
  - 读写
  - 主机卡模拟
- 剪贴板
- 电量
- 内存
- 传感器
  - 加速计
  - 罗盘
  - 陀螺仪
  - 设备方向
- 振动 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.getDeviceInfo` | 获取设备基础信息 | - | - | -
`-` | `wx.getDeviceBenchmarkInfo` | 获取设备性能得分和机型档位数据 | - | - | -
`-` | `wx.getScreenBrightness` | 获取**屏幕亮度** | - | - | 屏幕
`-` | `wx.setScreenBrightness` | 设置**屏幕亮度** | - | - | -
`-` | `wx.setKeepScreenOn` | 设置是否**保持常亮**状态 | - | - | -
`-` | `wx.onUserCaptureScreen` | 监听用户主动**截屏事件** | - | - | -
`-` | `wx.offUserCaptureScreen` | 移除用户主动**截屏事件** | - | - | -
`-` | `wx.getScreenRecordingState` | 查询用户是否在**录屏** | - | - | -
`-` | `wx.onScreenRecordingStateChanged` | 监听用户**录屏事件** | - | - | -
`-` | `wx.offScreenRecordingStateChanged` | 移除用户**录屏事件**的监听函数 | - | - | -
`-` | `wx.setVisualEffectOnCapture` | 设置**截屏/录屏**时屏幕表现 | - | - | -
`-` | `wx.hideKeyboard` | 在input、textarea等focus拉起键盘之后，手动调用此接口**收起键盘** | - | - | 键盘
`-` | `wx.getSelectedTextRange` | 在input、textarea等focus之后，获取输入框的**光标位置** | - | - | -
`-` | `wx.onKeyDown` | 监听小程序全局键盘按键**按下事件** | - | - | -
`-` | `wx.offKeyDown` | 移除小程序全局键盘按键**按下事件**的监听函数 | - | - | -
`-` | `wx.onKeyUp` | 监听小程序全局键盘按键**弹起事件** | - | - | -
`-` | `wx.offKeyUp` | 移除小程序全局键盘按键**弹起事件**的监听函数 | - | - | -
`-` | `wx.onKeyboardHeightChange` | 监听**键盘高度变化**事件 | - | - | -
`-` | `wx.offKeyboardHeightChange` | 移除**键盘高度变化**事件的监听函数 | - | - | -
`-` | `wx.scanCode` | 调起客户端扫码界面进行扫码 | - | - | 扫码
`-` | `wx.getNetworkType` | 获取网络类型 | - | - | 移动网络
`-` | `wx.getLocalIPAddress` | 获取局域网IP地址 | - | - | -
`-` | `wx.onNetworkStatusChange` | 监听**网络状态**变化事件 | - | - | -
`-` | `wx.offNetworkStatusChange` | 移除**网络状态**变化事件的监听函数 | - | - | -
`-` | `wx.onNetworkWeakChange` | 监听**弱网状态**变化事件 | - | - | -
`-` | `wx.offNetworkWeakChange` | 移除**弱网状态**变化事件的监听函数 | - | - | -
`-` | `wx.startWifi` | 初始化 Wi-Fi 模块 | - | - | Wi-Fi
`-` | `wx.stopWifi` | 关闭 Wi-Fi 模块 | - | - | -
`-` | `wx.setWifiList` | 设置 wifiList 中 AP 的相关信息 | - | - | -
`-` | `wx.getWifiList` | 请求获取 Wi-Fi 列表 | - | - | -
`-` | `wx.connectWifi` | 连接 Wi-Fi | - | - | -
`-` | `wx.getConnectedWifi` | 获取**已连接中的 Wi-Fi** 信息 | - | - | -
`-` | `wx.onGetWifiList` | 监听**获取到 Wi-Fi 列表**数据事件 | - | - | -
`-` | `wx.offGetWifiList` | 移除获取到 Wi-Fi 列表数据事件的监听函数 | - | - | -
`-` | `wx.onWifiConnected` | 监听**连接上 Wi-Fi** 的事件 | - | - | -
`-` | `wx.offWifiConnected` | 移除连接上 Wi-Fi 的事件的监听函数 | - | - | -
`-` | `wx.onWifiConnectedWithPartialInfo` | 监听连接上 Wi-Fi 的事件 | - | - | -
`-` | `wx.offWifiConnectedWithPartialInfo` | 移除连接上 Wi-Fi 的事件的监听函数 | - | - | -
`-` | `wx.openBluetoothAdapter` | 初始化蓝牙模块 | - | - | 蓝牙-通用
`-` | `wx.closeBluetoothAdapter` | 关闭蓝牙模块 | - | - | -
`-` | `wx.startBluetoothDevicesDiscovery` | 开始搜寻附近的蓝牙外围设备 | - | - | -
`-` | `wx.stopBluetoothDevicesDiscovery` | 停止搜寻附近的蓝牙外围设备 | - | - | -
`-` | `wx.getBluetoothAdapterState` | 获取本机蓝牙适配器状态 | - | - | -
`-` | `wx.onBluetoothAdapterStateChange` | 监听蓝牙适配器状态变化事件 | - | - | -
`-` | `wx.offBluetoothAdapterStateChange` | 移除蓝牙适配器状态变化事件的全部监听函数 | - | - | -
`-` | `wx.getBluetoothDevices` | 获取在蓝牙模块生效期间所有搜索到的蓝牙设备 | - | - | -
`-` | `wx.onBluetoothDeviceFound` | 监听搜索到新设备的事件 | - | - | -
`-` | `wx.offBluetoothDeviceFound` | 移除搜索到新设备的事件的全部监听函数 | - | - | -
`-` | `wx.getConnectedBluetoothDevices` | 根据主服务 UUID 获取已连接的蓝牙设备 | - | - | -
`-` | `wx.isBluetoothDevicePaired` | 查询蓝牙设备是否配对，仅安卓支持 | - | - | -
`-` | `wx.makeBluetoothPair` | 蓝牙配对接口，仅安卓支持 | - | - | -
`-` | `wx.createBLEConnection` | 连接蓝牙低功耗设备 | - | - | 蓝牙-低功耗中心设备
`-` | `wx.closeBLEConnection` | 断开与蓝牙低功耗设备的连接 | - | - | -
`-` | `wx.onBLEConnectionStateChange` | 监听蓝牙低功耗连接状态改变事件 | - | - | -
`-` | `wx.getBLEMTU` | 获取蓝牙低功耗的最大传输单元 | - | - | -
`-` | `wx.setBLEMTU` | 协商设置蓝牙低功耗的最大传输单元 (Maximum Transmission Unit, MTU) | - | - | -
`-` | `wx.onBLEMTUChange` | 监听蓝牙低功耗的最大传输单元变化事件（仅安卓触发） | - | - | -
`-` | `wx.getBLEDeviceRSSI` | 获取蓝牙低功耗设备的信号强度 (Received Signal Strength Indication, RSSI) | - | - | -
`-` | `wx.getBLEDeviceServices` | 获取蓝牙低功耗设备所有服务 (service) | - | - | -
`-` | `wx.getBLEDeviceCharacteristics` | 获取蓝牙低功耗设备某个服务中所有特征 (characteristic) | - | - | -
`-` | `wx.readBLECharacteristicValue` | 读取蓝牙低功耗设备特征值的二进制数据 | - | - | -
`-` | `wx.writeBLECharacteristicValue` | 向蓝牙低功耗设备特征值中写入二进制数据 | - | - | -
`-` | `wx.onBLECharacteristicValueChange` | 监听蓝牙低功耗设备的特征值变化事件 | - | - | -
`-` | `wx.notifyBLECharacteristicValueChange` | 启用蓝牙低功耗设备特征值变化时的 notify 功能，订阅特征 | - | - | -
`-` | `wx.createBLEPeripheralServer` | 建立本地作为蓝牙低功耗外围设备的服务端，可创建多个 | - | - | 蓝牙-低功耗外围设备
`-` | `wx.onBLEPeripheralConnectionStateChanged` | 监听当前外围设备被连接或断开连接事件 | - | - | -
`-` | `wx.offBLEPeripheralConnectionStateChanged` | 移除当前外围设备被连接或断开连接事件的监听函数 | - | - | -
`-` | `wx.startBeaconDiscovery` | 开始搜索附近的 Beacon 设备 | - | - | 蓝牙-信标（Beacon）
`-` | `wx.stopBeaconDiscovery` | 停止搜索附近的 Beacon 设备 | - | - | -
`-` | `wx.getBeacons` | 获取所有已搜索到的 Beacon 设备 | - | - | -
`-` | `wx.onBeaconUpdate` | 监听 Beacon 设备更新事件，仅能注册一个监听 | - | - | -
`-` | `wx.offBeaconUpdate` | 移除 Beacon 设备更新事件的全部监听函数 | - | - | -
`-` | `wx.onBeaconServiceChange` | 监听 Beacon 服务状态变化事件，仅能注册一个监听 | - | - | -
`-` | `wx.offBeaconServiceChange` | 移除 Beacon 服务状态变化事件的全部监听函数 | - | - | -
`-` | `wx.getNFCAdapter` | 获取 NFC 实例 | - | - | NFC-读写
`-` | `wx.getHCEState` | 判断当前设备是否支持 HCE 能力 | - | - | NFC-主机卡模拟
`-` | `wx.startHCE` | 初始化 NFC 模块 | - | - | -
`-` | `wx.stopHCE` | 关闭 NFC 模块 | - | - | -
`-` | `wx.sendHCEMessage` | 发送 NFC 消息 | - | - | -
`-` | `wx.onHCEMessage` | 监听接收 NFC 设备消息事件 | - | - | -
`-` | `wx.offHCEMessage` | 移除接收 NFC 设备消息事件的监听函数 | - | - | -
`-` | `wx.getClipboardData` | 获取系统剪贴板的内容 | - | - | 剪贴板
`-` | `wx.setClipboardData` | 设置系统剪贴板的内容 | - | - | -
`-` | `wx.getBatteryInfo` | 获取设备电池信息 | - | - | 电量
`-` | `wx.getBatteryInfoSync` | wx.getBatteryInfo 的同步版本 | - | - | -
`-` | `wx.onBatteryInfoChange` | 监听电池信息变化事件，目前只支持监听省电模式的切换 | - | - | -
`-` | `wx.offBatteryInfoChange` | 移除电池信息变化事件的监听函数 | - | - | -
`-` | `wx.onMemoryWarning` | 监听内存不足告警事件 | - | - | 内存
`-` | `wx.offMemoryWarning` | 移除内存不足告警事件的监听函数 | - | - | -
`-` | `wx.startAccelerometer` | 开始监听加速度数据 | - | - | 传感器-加速计
`-` | `wx.stopAccelerometer` | 停止监听加速度数据 | - | - | -
`-` | `wx.onAccelerometerChange` | 监听加速度数据事件 | - | - | -
`-` | `wx.offAccelerometerChange` | 移除加速度数据事件的监听函数 | - | - | -
`-` | `wx.startCompass` | 开始监听罗盘数据 | - | - | 传感器-罗盘
`-` | `wx.stopCompass` | 停止监听罗盘数据 | - | - | -
`-` | `wx.onCompassChange` | 监听罗盘数据变化事件 | - | - | -
`-` | `wx.offCompassChange` | 移除罗盘数据变化事件的监听函数 | - | - | -
`-` | `wx.startGyroscope` | 开始监听陀螺仪数据 | - | - | 传感器-陀螺仪
`-` | `wx.stopGyroscope` | 停止监听陀螺仪数据 | - | - | -
`-` | `wx.onGyroscopeChange` | 监听陀螺仪数据变化事件 | - | - | -
`-` | `wx.offGyroscopeChange` | 移除陀螺仪数据变化事件的监听函数 | - | - | -
`-` | `wx.startDeviceMotionListening` | 开始监听设备方向的变化 | - | - | 传感器-设备方向
`-` | `wx.stopDeviceMotionListening` | 停止监听设备方向的变化 | - | - | -
`-` | `wx.onDeviceMotionChange` | 监听设备方向变化事件 | - | - | -
`-` | `wx.offDeviceMotionChange` | 移除设备方向变化事件的监听函数 | - | - | -
`-` | `wx.vibrateShort` | 使手机发生较短时间的振动（15 ms） | - | - | 振动
`-` | `wx.vibrateLong` | 使手机发生较长时间的振动（400 ms） | - | - | -

## 宿主容器

### 微信

<!-- - 系统-微信（客户端）
- 更新（客户端） -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.getAppBaseInfo` | 获取微信APP基础信息 | - | - | -
`-` | `wx.getAppAuthorizeSetting` | 获取微信APP授权设置 | - | - | -
`-` | `wx.openAppAuthorizeSetting` | 跳转系统微信授权管理页 | - | - | -
`-` | `wx.updateWeChatApp` | 更新客户端版本 | - | - | -

### 小程序

<!-- - 生命周期-注册小程序
  - https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html
  - https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html
- 应用级事件
- 跳转 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | **`onLaunch(options)`** | 生命周期回调——监听小程序初始化。 | - | - | -
`-` | `wx.getLaunchOptionsSync` | 获取小程序启动时的参数 | - | - | -
`-` | **`onShow(options)`** | 生命周期回调——监听小程序启动或切前台。 | - | - | -
`-` | `wx.onAppShow` | 监听小程序切前台事件 | - | - | -
`-` | `wx.offAppShow` | 移除小程序切前台事件的监听函数 | - | - | -
`-` | **`onHide()`** | 生命周期回调——监听小程序切后台。 | - | - | -
`-` | `wx.onAppHide` | 监听小程序切后台事件 | - | - | -
`-` | `wx.offAppHide` | 移除小程序切后台事件的监听函数 | - | - | -
`-` | **`onError(error)`** | 错误监听函数。 | - | - | -
`-` | `wx.onError` | 监听小程序错误事件 | - | - | -
`-` | `wx.offError` | 移除小程序错误事件的监听函数 | - | - | -
`-` | **`onPageNotFound()`** | 页面不存在监听函数。 | 1.9.90 | - | -
`-` | `wx.onPageNotFound` | 监听小程序要打开的页面不存在事件 | - | - | -
`-` | `wx.offPageNotFound` | 移除小程序要打开的页面不存在事件的监听函数 | - | - | -
`-` | **`onUnhandledRejection()`** | 未处理的 Promise 拒绝事件监听函数。 | 2.10.0 | - | -
`-` | `wx.onUnhandledRejection` | 监听未处理的 Promise 拒绝事件 | - | - | -
`-` | `wx.offUnhandledRejection` | 移除未处理的 Promise 拒绝事件的监听函数 | - | - | -
`-` | **`onThemeChange()`** | 监听系统主题变化。 | 2.11.0 | - | -
`-` | `wx.onThemeChange` | 监听系统主题改变事件 | - | - | -
`-` | `wx.offThemeChange` | 移除系统主题改变事件的监听函数 | - | - | -
`-` | **`getApp()`** | 获取到小程序全局唯一的 App 实例。 | - | - | -
`-` | `wx.getApiCategory` | 获取当前 API 类别 | - | - | -
`-` | `wx.onApiCategoryChange` | 监听 API 类别变化事件 | - | - | -
`-` | `wx.offApiCategoryChange` | 移除 API 类别变化事件的监听函数 | - | - | -
`-` | `wx.onLazyLoadError` | 监听小程序异步组件加载失败事件 | - | - | -
`-` | `wx.offLazyLoadError` | 移除小程序异步组件加载失败事件的监听函数 | - | - | -
`-` | `wx.onAudioInterruptionBegin` | 监听音频因为受到系统占用而被中断开始事件 | - | - | -
`-` | `wx.offAudioInterruptionBegin` | 移除音频因为受到系统占用而被中断开始事件的监听函数 | - | - | -
`-` | `wx.onAudioInterruptionEnd` | 监听音频中断结束事件 | - | - | -
`-` | `wx.offAudioInterruptionEnd` | 移除音频中断结束事件的监听函数 | - | - | -
`-` | `wx.openEmbeddedMiniProgram` | 打开半屏小程序 | - | - | 转发
`-` | `wx.onEmbeddedMiniProgramHeightChange` | 监听半屏小程序可视高度变化事件 | - | - | -
`-` | `wx.offEmbeddedMiniProgramHeightChange` | 移除半屏小程序可视高度变化事件的监听函数 | - | - | -
`-` | `wx.restartMiniProgram` | 重启当前小程序 | - | - | -
`-` | `wx.exitMiniProgram` | 退出当前小程序 | - | - | -
`-` | `wx.navigateToMiniProgram` | 打开另一个小程序 | - | - | -
`-` | `wx.navigateBackMiniProgram` | 返回到上一个小程序 | - | - | -
`-` | `wx.getEnterOptionsSync` | 获取本次小程序启动时的参数 | - | - | -
`-` | `wx.postMessageToReferrerPage` | 向跳转的源页面发送消息 | - | - | -
`-` | `wx.postMessageToReferrerMiniProgram` | 向跳转的源小程序发送消息，源小程序可在 wx.onShow 或 wx.getEnterOptionsSync 中通过 extraData 接收消息 | - | - | -

### 开放平台

<!-- - **通用**
  - 登录
  - 授权
  - 隐私信息授权
  - 生物认证
  - 用户信息
  - 账号信息
- **对话框**
  - 微信表情
  - 音视频通话
  - 微信红包
  - 收藏
  - 卡券
- **我的**
  - 我的小程序
  - 公众号
  - 订阅消息
  - 微信客服
  - 视频号
  - 微信小店
  - 微信群
  - 微信运动
- **设置**
  - 设置
  - 收货地址
  - 发票
  - 车牌
- 聊天工具
- 转发（分享）
- 广告 -->

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.login` | 调用接口获取登录凭证（code） | - | - | 登录
`-` | `wx.pluginLogin` | 该接口仅在小程序插件中可调用，调用接口获得插件用户标志凭证（code） | - | - | -
`-` | `wx.checkSession` | 检查登录态 session_key 是否过期 | - | - | -
`-` | `wx.authorize` | 提前向用户发起授权请求 | - | - | 授权
`-` | `wx.authorizeForMiniProgram` | 仅小程序插件中能调用该接口，用法同 wx.authorize | - | - | -
`-` | `wx.getPrivacySetting` | 查询隐私授权情况 | - | - | 隐私信息授权
`-` | `wx.openPrivacyContract` | 跳转至隐私协议页面 | - | - | -
`-` | `wx.onNeedPrivacyAuthorization` | 监听隐私接口需要用户授权事件 | - | - | -
`-` | `wx.requirePrivacyAuthorize` | 模拟隐私接口调用，并触发隐私弹窗逻辑 | - | - | -
`-` | `wx.checkIsSoterEnrolledInDevice` | 获取设备内是否录入如指纹等生物信息的接口 | - | - | 生物认证
`-` | `wx.checkIsSupportSoterAuthentication` | 获取本机支持的 SOTER 生物认证方式 | - | - | -
`-` | `wx.startSoterAuthentication` | 开始 SOTER 生物认证 | - | - | -
`-` | [`<open-data>`](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html) | 用于展示微信开放的数据 | - | WebView | 用户信息相关功能已进行调整
`-` | `wx.getUserProfile` | 获取用户信息 | - | - | 用户信息
`-` | ~~`wx.getUserInfo`~~ | 获取用户信息 | - | - | -
`-` | `wx.getAccountInfoSync` | 获取当前账号信息 | - | - | 账号信息
`-` | `wx.openStickerSetView` | 打开表情专辑 | - | - | 微信表情
`-` | `wx.openStickerIPView` | 打开表情IP合辑 | - | - | -
`-` | `wx.openSingleStickerView` | 打开单个表情 | - | - | -
`-` | `wx.getDeviceVoIPList` | 查询当前用户授权的音视频通话设备（组）信息 | - | - | 音视频通话
`-` | `wx.requestDeviceVoIP` | 请求用户授权与设备（组）间进行音视频通话 | - | - | -
`-` | `wx.showRedPackage` | 拉取h5领取红包封面页 | - | - | 微信红包
`-` | `wx.addVideoToFavorites` | 收藏视频 | - | - | 收藏
`-` | `wx.addFileToFavorites` | 收藏文件 | - | - | -
`-` | `wx.openCard` | 查看微信卡包中的卡券 | - | - | 卡券
`-` | `wx.addCard` | 批量添加卡券 | - | - | -
`-` | `wx.checkIsAddedToMyMiniProgram` | 检查小程序是否被添加至 「我的小程序」 | - | - | 我的小程序
`-` | [`<official-account>`](https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html) | 公众号关注组件 | 2.3.0 | - | 公众号
`-` | `wx.openOfficialAccountProfile` | 通过小程序打开任意公众号主页 | - | - | -
`-` | `wx.openOfficialAccountArticle` | 通过小程序打开任意公众号文章（不包括临时链接等异常状态下的公众号文章），必须有点击行为才能调用成功 | - | - | -
`-` | `wx.requestSubscribeDeviceMessage` | 订阅设备消息接口，调用后弹出授权框，用户同意后会允许开发者给用户发送订阅模版消息 | - | - | 订阅消息
`-` | `wx.requestSubscribeMessage` | 调起客户端小程序订阅消息界面，返回用户订阅消息的操作结果 | - | - | -
`-` | `wx.openCustomerServiceChat` | 打开微信客服，页面产生点击事件后才可调用 | - | - | 微信客服
`-` | [`<channel-live>`](https://developers.weixin.qq.com/miniprogram/dev/component/channel-live.html) | 小程序内嵌**视频号直播**组件，展示视频号直播状态和封面，并无弹窗跳转至视频号 | 2.29.0 | - | 视频号
`-` | [`<channel-video>`](https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html) | 小程序内嵌**视频号视频**组件，支持在小程序中播放视频号视频，并无弹窗跳转至视频号 | 2.25.1 | - | -
`-` | `wx.getChannelsLiveNoticeInfo` | 获取视频号直播预告信息 | - | - | -
`-` | `wx.getChannelsLiveInfo` | 获取视频号直播信息 | - | - | -
`-` | `wx.getChannelsShareKey` | 获取视频号直播卡片/视频卡片的分享来源 | - | - | -
`-` | `wx.reserveChannelsLive` | 预约视频号直播 | - | - | -
`-` | `wx.openChannelsUserProfile` | 打开视频号主页 | - | - | -
`-` | `wx.openChannelsEvent` | 打开视频号活动页 | - | - | -
`-` | `wx.openChannelsActivity` | 打开视频号视频 | - | - | -
`-` | `wx.openChannelsLive` | 打开视频号直播 | - | - | -
`-` | [`<store-home>`](https://developers.weixin.qq.com/miniprogram/dev/component/store-home.html) | 小程序内嵌**微信小店首页**，展示小店首页，并进行跳转交易 | 3.5.5 | WebView | 微信小店
`-` | [`<store-product>`](https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html) | 小程序内嵌**微信小店商品**，展示小店商品，并进行跳转交易 | 3.5.5 | WebView | -
`-` | `wx.openStoreOrderDetail` | 打开微信小店订单详情页 | - | - | -
`-` | `wx.getGroupEnterInfo` | 获取微信群聊场景下的小程序启动信息 | - | - | 微信群
`-` | `wx.getWeRunData` | 获取用户过去三十一天微信运动步数 | - | - | 微信运动
`-` | `wx.shareToWeRun` | 分享数据到微信运动 | - | - | -
`-` | `wx.openSetting` | 调起客户端小程序设置界面，返回用户设置的操作结果 | - | - | 设置
`-` | `wx.getSetting` | 获取用户的当前设置 | - | - | -
`-` | `wx.chooseAddress` | 获取用户收货地址 | - | - | 收货地址
`-` | `wx.chooseInvoiceTitle` | 选择用户的发票抬头 | - | - | 发票
`-` | `wx.chooseInvoice` | 选择用户已有的发票 | - | - | -
`-` | `wx.chooseLicensePlate` | 选择车牌号 | - | - | 车牌
`-` | `wx.openChatTool` | 进入聊天工具模式 | - | - | 聊天工具-转发
`-` | `wx.shareImageToGroup` | 转发图片到聊天 | - | - | -
`-` | `wx.shareVideoToGroup` | 转发视频到聊天 | - | - | -
`-` | `wx.shareFileToGroup` | 转发文件到聊天 | - | - | -
`-` | `wx.shareEmojiToGroup` | 转发表情到聊天 | - | - | -
`-` | `wx.shareAppMessageToGroup` | 转发小程序卡片到聊天 | - | - | -
`-` | `wx.getChatToolInfo` | 获取聊天工具模式下的群聊信息 | - | - | -
`-` | `wx.selectGroupMembers` | 选择聊天室的成员，并返回选择成员的 group_openid | - | - | -
`-` | `wx.notifyGroupMembers` | 提醒用户完成任务 | - | - | -
`-` | `wx.showShareMenu` | 设置右上角点开的详情界面中的分享按钮是否可用 | - | - | 分享-转发
`-` | `wx.hideShareMenu` | 隐藏当前页面的转发按钮 | - | - | -
`-` | `wx.updateShareMenu` | 更新转发属性 | - | - | -
`-` | `wx.showShareImageMenu` | 打开分享图片弹窗，可以将图片发送给朋友、收藏或下载 | - | - | -
`-` | `wx.shareVideoMessage` | 转发视频到聊天 | - | - | -
`-` | `wx.shareFileMessage` | 转发文件到聊天 | - | - | -
`-` | `wx.onCopyUrl` | 监听用户点击右上角菜单的「复制链接」按钮时触发的事件 | - | - | -
`-` | `wx.offCopyUrl` | 移除用户点击右上角菜单的「复制链接」按钮时触发的事件的全部监听函数 | - | - | -
`-` | `wx.getShareInfo` | 获取转发详细信息（主要是获取群ID） | - | - | -
`-` | `wx.authPrivateMessage` | 验证私密消息 | - | - | -
`-` | [`<ad>`](https://developers.weixin.qq.com/miniprogram/dev/component/ad.html) | Banner 广告 | 1.9.94 | - | 广告
`-` | [`<ad-custom>`](https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html) | 原生模板 广告 | 2.10.4 | - | -
`-` | `wx.createInterstitialAd` | 创建插屏广告组件 | - | - | -
`-` | `wx.createRewardedVideoAd` | 创建激励视频广告组件 | - | - | -
`-` | `wx.getShowSplashAdStatus` | 获取封面广告组件展示状态 | - | - | -

### WXML

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.createSelectorQuery` | 返回一个 SelectorQuery 对象实例 | - | - | -
`-` | `wx.createIntersectionObserver` | 创建并返回一个 IntersectionObserver 对象实例 | - | - | -

### 第三方平台

Taro | 微信 | 说明 | 基础库 | 渲染框架 | 状态说明
---|---|---|---|---|---
`-` | `wx.getExtConfig` | 获取第三方平台自定义的数据字段 | - | - | -
`-` | `wx.getExtConfigSync` | wx.getExtConfig 的同步版本 | - | - | -

## 参考

- [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/component/)
- [Taro](https://taro-docs.jd.com/docs/components-desc)
- [Ant Design Mini](https://mini.ant.design/)
- [taro-ui@next](https://taro-ui.jd.com/#/docs/introduction)
