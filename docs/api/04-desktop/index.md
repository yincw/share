---
toc_max_heading_level: 4
---

# 桌面应用

## 用户界面

### 调试

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`Debugtron`](https://gitee.com/mirrors/Debugtron) | 调试管理 | - | - | -
[`electron-debug`](https://www.npmjs.com/package/electron-debug) | 调试 | - | - | -
[`electron-unhandled`](https://www.npmjs.com/package/electron-unhandled) | 错误捕获 | - | - | -

### 界面开发

#### 视图

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`webFrame`](https://www.electronjs.org/zh/docs/latest/api/web-frame) | 当前网页 | - | electron | Renderer
[`webUtils`](https://www.electronjs.org/zh/docs/latest/api/web-utils) | Web API 对象交互的工具层 | - | electron | Renderer

#### 通信

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`contextBridge`](https://www.electronjs.org/zh/docs/latest/api/context-bridge) | 上下文桥梁 | - | electron | Renderer
[`ipcMain`](https://www.electronjs.org/zh/docs/latest/api/ipc-main) | 异步通信（从主进程到渲染进程） | - | electron | Main
[`\- ipcRenderer`](https://www.electronjs.org/zh/docs/latest/api/ipc-renderer) | 异步通信（从渲染进程到主进程） | - | electron | Renderer
[`MessageChannelMain`](https://www.electronjs.org/zh/docs/latest/api/message-channel-main) | 通道消息传递（从渲染进程到渲染进程） | - | electron | Main
[`\- MessagePortMain`](https://www.electronjs.org/zh/docs/latest/api/message-port-main) | 通道消息传递端口 | - | - | Main
[`parentPort`](https://www.electronjs.org/zh/docs/latest/api/parent-port) | 与父进程通信 | - | process | Utility

### 监控与分析

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`crashReporter`](https://www.electronjs.org/zh/docs/latest/api/crash-reporter) | 崩溃日志收集 | - | electron | Main, Renderer

### 性能

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`contentTracing`](https://www.electronjs.org/zh/docs/latest/api/content-tracing) | 性能追踪数据收集 | - | electron | Main

### 安全

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
`-` | - | - | - | -

### 场景-音视频

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`desktopCapturer`](https://www.electronjs.org/zh/docs/latest/api/desktop-capturer) | 从桌面捕获音频和视频的媒体源的信息 | - | electron | Main

## 平台

### 调试日志

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`netLog`](https://www.electronjs.org/zh/docs/latest/api/net-log) | 网络日志 | - | electron | Main
[`electron-log`](https://www.npmjs.com/package/electron-log) | 日志管理 | - | - | -

### 支付

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`inAppPurchase`](https://www.electronjs.org/zh/docs/latest/api/in-app-purchase) | Mac App Store中的应用内购买 | macOS | electron | Main

### 网络

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`protocol`](https://www.electronjs.org/zh/docs/latest/api/protocol) | 注册自定义协议并拦截基于现有协议的请求 | - | electron | Main

### 本地存储

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`safeStorage`](https://www.electronjs.org/zh/docs/latest/api/safe-storage) | 安全存储 | - | electron | Main
[`electron-store`](https://www.npmjs.com/package/electron-store) | 存储管理 | - | - | -

### 系统-基础

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`process`](https://www.electronjs.org/zh/docs/latest/api/process) | 进程对象 | - | - | Main, Renderer
[`utilityProcess`](https://www.electronjs.org/zh/docs/latest/api/utility-process) | 子进程对象 | - | - | Main
[`app`](https://www.electronjs.org/zh/docs/latest/api/app) | 应用程序 | - | electron | Main
[`autoUpdater`](https://www.electronjs.org/zh/docs/latest/api/auto-updater) | 自动更新 | - | - | Main
[`electron-updater`](https://www.npmjs.com/package/electron-updater) | 更新管理 | - | - | -
[`globalShortcut`](https://www.electronjs.org/zh/docs/latest/api/global-shortcut) | 快捷键 | - | electron | Main
[`nativeTheme`](https://www.electronjs.org/zh/docs/latest/api/native-theme) | 主题 | - | electron | Main
[`shell`](https://www.electronjs.org/zh/docs/latest/api/shell) | 使用默认应用程序管理文件和 url | - | electron | Main, Renderer
[`systemPreferences`](https://www.electronjs.org/zh/docs/latest/api/system-preferences) | 系统首选项 | - | electron | Main, Utility
[`pushNotifications`](https://www.electronjs.org/zh/docs/latest/api/push-notifications) | 消息推送 | macOS | electron | Main
[`electron-dl`](https://www.npmjs.com/package/electron-dl) | 下载管理 | - | - | -

### 系统-界面

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`BaseWindow`](https://www.electronjs.org/zh/docs/latest/api/base-window) | 窗口 | - | electron | Main
[`BrowserWindow`](https://www.electronjs.org/zh/docs/latest/api/browser-window) | 浏览器窗口 | - | electron | Main
[`View`](https://www.electronjs.org/zh/docs/latest/api/%E8%A7%86%E5%9B%BE) | 视图 | - | electron | Main
[`WebContentsView`](https://www.electronjs.org/zh/docs/latest/api/web-contents-view) | 显示Web页面的视图 | - | electron | Main
[`webContents`](https://www.electronjs.org/zh/docs/latest/api/web-contents) | Web页面 | - | electron | Main
[`session`](https://www.electronjs.org/zh/docs/latest/api/session) | 会话 | - | electron | Main
[`webFrameMain`](https://www.electronjs.org/zh/docs/latest/api/web-frame-main) | 内联框架 | - | electron | Main
[`dialog`](https://www.electronjs.org/zh/docs/latest/api/dialog) | 对话框 | - | electron | Main
[`Menu`](https://www.electronjs.org/zh/docs/latest/api/menu) | 应用菜单和上下文菜单 | - | electron | Main
[`menubar`](https://www.npmjs.com/package/menubar) | 菜单栏 | - | - | -
[`electron-context-menu`](https://www.npmjs.com/package/electron-context-menu) | 上下文菜单 | - | - | -
[`ShareMenu`](https://www.electronjs.org/zh/docs/latest/api/share-menu) | 共享菜单 | macOS | electron | Main
[`nativeImage`](https://www.electronjs.org/zh/docs/latest/api/native-image) | 图片 | - | electron | Main, Renderer
[`Notification`](https://www.electronjs.org/zh/docs/latest/api/notification) | 通知 | - | electron | Main
[`Tray`](https://www.electronjs.org/zh/docs/latest/api/tray) | 系统托盘 | - | electron | Main
[`TouchBar`](https://www.electronjs.org/zh/docs/latest/api/touch-bar) | 触控板 | macOS | electron | Main
[`app.dock`](https://www.electronjs.org/zh/docs/latest/tutorial/macos-dock) | Dock菜单 | macOS | app | Main
[`app.addRecentDocument()`](https://www.electronjs.org/zh/docs/latest/tutorial/recent-documents) | 最近打开的文档列表 | - | app | Main
[`win.setProgressBar()`](https://www.electronjs.org/zh/docs/latest/tutorial/progress-bar) | 进度条 | - | BrowserWindow | Main
[`app.setUserTasks()`](https://www.electronjs.org/zh/docs/latest/tutorial/windows-taskbar) | 任务栏自定义：弹出列表 | Windows | app | Main
[`win.setThumbarButtons()`](https://www.electronjs.org/zh/docs/latest/tutorial/windows-taskbar) | 任务栏自定义：缩略图工具栏 | Windows | BrowserWindow | Main
[`win.setOverlayIcon()`](https://www.electronjs.org/zh/docs/latest/tutorial/windows-taskbar) | 任务栏自定义：图标叠加 | Windows | BrowserWindow | Main
[`win.flashFrame()`](https://www.electronjs.org/zh/docs/latest/tutorial/windows-taskbar) | 任务栏自定义：闪烁框 | Windows | BrowserWindow | Main

### 设备-物理设备

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`screen`](https://www.electronjs.org/zh/docs/latest/api/screen) | 屏幕 | - | electron | Main
[`powerSaveBlocker`](https://www.electronjs.org/zh/docs/latest/api/power-save-blocker) | 低功耗（休眠）模式 | - | electron | Main
[`clipboard`](https://www.electronjs.org/zh/docs/latest/api/clipboard) | 剪贴板 | - | electron | Main, Renderer
[`net`](https://www.electronjs.org/zh/docs/latest/api/net) | 网络请求 | - | electron | Main, Utility
[`powerMonitor`](https://www.electronjs.org/zh/docs/latest/api/power-monitor) | 电源状态 | - | electron | Main

### 设备-主板接口

模块 | 说明 | 兼容平台 | 来源 | 进程
---|---|---|---|---
[`systeminformation`](https://systeminformation.io/) | 系统信息：USB、系统、内存、电池、磁盘、网络、Wi-Fi、蓝牙、CPU、 打印 | - | - | -

## 参考

- [Electron](https://www.electronjs.org/zh/)
- [Electron Builder](https://www.electron.build/)