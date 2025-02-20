---
toc_max_heading_level: 4
---

# 移动应用

## 用户界面

### 调试

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`DevSettings`](https://reactnative.dev/docs/devsettings) | - | 开发设置 | - | `react-native`
[`DevClient`](https://docs.expo.dev/versions/latest/sdk/dev-client/) | - | 开发工具客户端 | - | `expo-dev-client`
[`Flipper`](https://fbflipper.com/) | - | 调试工具客户端 | - | -
[`React Native Debugger`](https://github.com/jhen0409/react-native-debugger) | - | 调试工具客户端 | - | -

### 界面开发

#### 基础

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`StyleSheet`](https://reactnative.dev/docs/stylesheet) | - | 样式 | - | `react-native`
[`PanResponder`](https://reactnative.dev/docs/panresponder) | - | 响应器 | - | `react-native`
[`Pressable`](https://reactnative.dev/docs/pressable) | - | 可按下的 | - | `react-native`
[`TouchableHighlight`](https://reactnative.dev/docs/touchablehighlight) | - | 可触摸的高亮 | - | `react-native`
[`TouchableOpacity`](https://reactnative.dev/docs/touchableopacity) | - | 可触摸的透明度 | - | `react-native`
[`TouchableWithoutFeedback`](https://reactnative.dev/docs/touchablewithoutfeedback) | - | 可触摸的反馈 | - | `react-native`
[`TouchableNativeFeedback`](https://reactnative.dev/docs/touchablenativefeedback) | - | 可触摸的原生反馈 | Android | `react-native`
`-` | - | 触摸和手势处理 | - | [`react-native-gesture-handler`](https://docs.expo.dev/versions/latest/sdk/gesture-handler/)
[`Svg`](https://docs.expo.dev/versions/latest/sdk/svg/) | - | SVG | - | `react-native-svg`
[`Font`](https://docs.expo.dev/versions/latest/sdk/font/) | `useFonts()` | 字体 | - | `expo-font`

#### 视图

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`Dimensions`](https://reactnative.dev/docs/dimensions) | [`useWindowDimensions()`](https://reactnative.dev/docs/usewindowdimensions) | 尺寸 | - | `react-native`
[`PixelRatio`](https://reactnative.dev/docs/pixelratio) | - | 像素比 | - | `react-native`
[`View`](https://reactnative.dev/docs/view) | - | 视图 | - | `react-native`
[`ScrollView`](https://reactnative.dev/docs/scrollview) | - | 滚动视图 | - | `react-native`
[`KeyboardAvoidingView`](https://reactnative.dev/docs/keyboardavoidingview) | - | 键盘回避视图 | - | `react-native`
[`InputAccessoryView`](https://reactnative.dev/docs/inputaccessoryview) | - | 输入视图 | iOS | `react-native`
[`SafeAreaView`](https://reactnative.dev/docs/safeareaview) | - | 安全区域视图 | iOS | `react-native`
[`SafeAreaView、SafeAreaProvider`](https://docs.expo.dev/versions/latest/sdk/safe-area-context/) | useSafeAreaInsets() | 安全区域上下文 | - | `react-native-safe-area-context`
[`BlurView`](https://docs.expo.dev/versions/latest/sdk/blur-view/) | - | 模糊视图 | - | `expo-blur`
[`LinearGradient`](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) | - | 渐变视图 | - | `expo-linear-gradient`
[`MaskedView`](https://docs.expo.dev/versions/latest/sdk/masked-view/) | - | 遮罩视图 | - | `@react-native-masked-view/masked-view`

#### 路由

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`Stack、Slot、Link、Redirect、ErrorBoundary`](https://docs.expo.dev/versions/latest/sdk/router/) | - | 路由器，构建在 React Navigation 之上 | - | `expo-router`
[`URL、URLSearchParams`](https://docs.expo.dev/versions/latest/sdk/url/) | - | 网址 | - | `react-native`

#### 网络请求

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`fetch`](https://docs.expo.dev/versions/latest/sdk/expo/) | - | 网络请求 | - | `expo`
[`BackgroundFetch`](https://docs.expo.dev/versions/latest/sdk/background-fetch/) | - | 后台获取 | - | `expo-background-fetch`

#### 国际化

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`getLocales、getCalendars`](https://docs.expo.dev/versions/latest/sdk/localization/) | `useCalendars()`、`useLocales()` | 本地化 | - | `expo-localization`

#### 动画

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`InteractionManager`](https://reactnative.dev/docs/interactionmanager) | - | 交互管理 | - | `react-native`
[`Transforms`](https://reactnative.dev/docs/transforms) | - | 变换 | - | `react-native`
[`Animated`](https://reactnative.dev/docs/animated) | - | 动画 | - | `react-native`
[`Easing`](https://reactnative.dev/docs/easing) | - | easing 函数 | - | `react-native`
[`LayoutAnimation`](https://reactnative.dev/docs/layoutanimation) | - | 布局动画 | - | `react-native`
`-` | - | 创建流畅、强大且可维护的动画的过程 | - | [`react-native-reanimated`](https://docs.expo.dev/versions/latest/sdk/reanimated/)
[`LottieView`](https://docs.expo.dev/versions/latest/sdk/lottie/) | - | 实时渲染 After Effects 动画 | - | `lottie-react-native`

#### 无障碍

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`AccessibilityInfo`](https://reactnative.dev/docs/accessibilityinfo) | - | 无障碍信息 | - | `react-native`

### 安全

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`TextEncoder、TextDecoder`](https://docs.expo.dev/versions/latest/sdk/encoding/) | - | 编码 | - | -
[`AccessTokenRequest`、`RefreshTokenRequest`、`RevokeTokenRequest`、`TokenRequest`](https://docs.expo.dev/versions/latest/sdk/auth-session/) | - | 基于浏览器的身份验证 | - | `expo-auth-session`
[`AppleAuthenticationButton`](https://docs.expo.dev/versions/latest/sdk/apple-authentication/) | - | Apple 认证 | iOS | `expo-apple-authentication`
[`Crypto`](https://docs.expo.dev/versions/latest/sdk/crypto/) | - | 加密 | - | `expo-crypto`

### 场景

#### 图形

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`Skia`](https://docs.expo.dev/versions/latest/sdk/skia/) | - | Skia 图形引擎 | - | `@shopify/react-native-skia`

#### 音视频

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`Recording`、`Sound`](https://docs.expo.dev/versions/latest/sdk/audio-av/)、[`AV`、`Playback`](https://docs.expo.dev/versions/latest/sdk/av/)、[`Video`](https://docs.expo.dev/versions/latest/sdk/video-av/) | `usePermissions()` | 音频和视频 | - | `expo-av`
[`AudioPlayer/AudioRecorder`](https://docs.expo.dev/versions/latest/sdk/audio/) | `useAudioPlayer()`、`useAudioPlayerStatus()`、`useAudioRecorder()`、`useAudioRecorderState()`、`useAudioSampleListener()` | 音频 | - | `expo-audio`
[`VideoView`](https://docs.expo.dev/versions/latest/sdk/video/) | `useVideoPlayer()` | 视频 | - | `expo-video`
[`Speech`](https://docs.expo.dev/versions/latest/sdk/speech/) | - | 文本到语音转换 | - | `expo-speech`
[`VideoThumbnails`](https://docs.expo.dev/versions/latest/sdk/video-thumbnails/) | - | 视频缩略图 | - | `expo-video-thumbnails`

#### 元宇宙

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`GLView`](https://docs.expo.dev/versions/latest/sdk/gl-view/) | - | WebGL 库 | - | `expo-gl`

#### AI

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`LocalAuthentication`](https://docs.expo.dev/versions/latest/sdk/local-authentication/) | - | 本地身份验证（人脸或指纹扫描） | - | `expo-local-authentication`
[`Fingerprint`](https://docs.expo.dev/versions/latest/sdk/fingerprint/) | - | 指纹 | - | `@expo/fingerprint`

### UI 组件库

#### 通用

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`Button`](https://reactnative.dev/docs/button) | - | 按钮 | - | `react-native`
[`SymbolView`](https://docs.expo.dev/versions/latest/sdk/symbols/) | - | 图标 | - | `expo-symbols`
`-` | - | 图标 | - | [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons)

#### 布局

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`StatusBar`](https://reactnative.dev/docs/statusbar) | - | 状态栏 | - | `react-native`
[`StatusBar`](https://docs.expo.dev/versions/latest/sdk/status-bar/) | - | 状态栏 | - | `expo-status-bar`

#### 导航

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`BackHandler`](https://reactnative.dev/docs/backhandler) | - | 后退处理 | Android | `react-native`
[`NavigationBar`](https://docs.expo.dev/versions/latest/sdk/navigation-bar/) | `useVisibility()` | 导航栏 | Android | `expo-navigation-bar`
[`TabList、Tabs、TabSlot、TabTrigger`](https://docs.expo.dev/versions/latest/sdk/router-ui/) | - | Tabs 选项卡 | - | `expo-router/ui`
[`SegmentedControl`](https://docs.expo.dev/versions/latest/sdk/segmented-control/) | - | 分段控制 | - | `@react-native-segmented-control/segmented-control`

#### 数据展示

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`Text`](https://reactnative.dev/docs/text) | - | 文本 | - | `react-native`
[`Image`](https://reactnative.dev/docs/image) | - | 图片 | - | `react-native`
[`ImageBackground`](https://reactnative.dev/docs/imagebackground) | - | 背景图片 | - | `react-native`
[`FlatList`](https://reactnative.dev/docs/flatlist) | - | 列表 | - | `react-native`
[`SectionList`](https://reactnative.dev/docs/sectionlist) | - | 分组列表 | - | `react-native`
[`VirtualizedList`](https://reactnative.dev/docs/virtualizedlist) | - | 虚拟列表 | - | `react-native`
[`FlashList`](https://docs.expo.dev/versions/latest/sdk/flash-list/) | - | 快速列表 | - | `@shopify/flash-list`
[`Image、ImageBackground`](https://docs.expo.dev/versions/latest/sdk/image/) | - | 图片 | - | `expo-image`
[`PagerView`](https://docs.expo.dev/versions/latest/sdk/view-pager/) | - | 轮播图 | - | `react-native-pager-view`
`-` | - | 轮播图 | - | `react-native-swiper`
[`WebView`](https://docs.expo.dev/versions/latest/sdk/webview/) | - | WebView | - | `react-native-webview`

#### 数据录入

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`TextInput`](https://reactnative.dev/docs/textinput) | - | 文本输入框 | - | `react-native`
[`Switch`](https://reactnative.dev/docs/switch) | - | 开关 | - | `react-native`
[`Checkbox`](https://docs.expo.dev/versions/latest/sdk/checkbox/) | - | 复选框 | - | `expo-checkbox`
`-` | - | 选择器 | - | [`@react-native-picker/picker`](https://docs.expo.dev/versions/latest/sdk/picker/)
[`DateTimePicker`](https://docs.expo.dev/versions/latest/sdk/date-time-picker/) | - | 日期时间选择器 | - | `@react-native-community/datetimepicker`
[`Slider`](https://docs.expo.dev/versions/latest/sdk/slider/) | - | 滑块 | - | `@react-native-community/slider`

#### 反馈

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`Alert`](https://reactnative.dev/docs/alert) | - | Alert 对话框 | - | `react-native`
[`Modal`](https://reactnative.dev/docs/modal) | - | 模态框 | - | `react-native`
[`ActivityIndicator`](https://reactnative.dev/docs/activityindicator) | - | 圆形加载器 | - | `react-native`
[`RefreshControl`](https://reactnative.dev/docs/refreshcontrol) | - | 刷新控制 | - | `react-native`
[`ToastAndroid`](https://reactnative.dev/docs/toastandroid) | - | 提示 | Android | `react-native`
[`DrawerLayoutAndroid`](https://reactnative.dev/docs/drawerlayoutandroid) | - | 抽屉布局 | Android | `react-native`
[`ActionSheetIOS`](https://reactnative.dev/docs/actionsheetios) | - | 操作表 | iOS | `react-native`

## 平台

### 位置

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`Location`](https://docs.expo.dev/versions/latest/sdk/location/) | `useBackgroundPermissions()`、`useForegroundPermissions()` | 地理位置 | - | `expo-location`

### 支付

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`stripe`](https://docs.expo.dev/versions/latest/sdk/stripe/#usage) | - | Stripe 支付 | - | `@stripe/stripe-react-native`
`-` | - | 微信支付 | - | [`react-native-wechat`](https://github.com/yorkie/react-native-wechat)
`-` | - | 支付宝支付 | - | [`react-native-puti-pay`](https://github.com/puti94/react-native-puti-pay)

### 本地存储

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`SecureStore`](https://docs.expo.dev/versions/latest/sdk/securestore/) | - | 安全存储 | - | `expo-secure-store`
[`AsyncStorage`](https://docs.expo.dev/versions/latest/sdk/async-storage/) | - | 异步存储 | - | `@react-native-async-storage/async-storage`
[`SQLiteProvider`](https://docs.expo.dev/versions/latest/sdk/sqlite/) | - | SQLite 数据库 | - | `expo-sqlite`

### 系统

#### 基本

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`EventEmitter`](https://docs.expo.dev/versions/latest/sdk/expo/)、`registerRootComponent()` | `useEvent()`、`useEventListener()` | 应用&请求&事件 | - | `expo`
[`Application`](https://docs.expo.dev/versions/latest/sdk/application/) | - | 应用 | - | `expo-application`
[`Asset`](https://docs.expo.dev/versions/latest/sdk/asset/) | `useAssets()` | 资产 | - | `expo-asset`
[`Manifests`](https://docs.expo.dev/versions/latest/sdk/manifests/) | - | 清单 | - | `expo-manifests`
[`BuildProperties`](https://docs.expo.dev/versions/latest/sdk/build-properties/) | - | 构建配置 | - | `expo-build-properties`
[`AppRegistry`](https://reactnative.dev/docs/appregistry) | - | 应用注册 | - | `react-native`
[`AppState`](https://reactnative.dev/docs/appstate) | - | 应用状态 | - | `react-native`
[`PermissionsAndroid`](https://reactnative.dev/docs/permissionsandroid) | - | Android 权限 | Android | `react-native`
[`ExpoTrackingTransparency`](https://docs.expo.dev/versions/latest/sdk/tracking-transparency/) | `useTrackingPermissions()` | 权限 | - | `expo-tracking-transparency`
[`Constants`](https://docs.expo.dev/versions/latest/sdk/constants/) | - | 常量 | - | `expo-constants`
[`Updates`](https://docs.expo.dev/versions/latest/sdk/updates/) | `useUpdates()` | 自动更新 | - | `expo-updates`
[`IntentLauncher`](https://docs.expo.dev/versions/latest/sdk/intent-launcher/) | - | 启动 | Android | `expo-intent-launcher`
[`Linking`](https://reactnative.dev/docs/linking) | - | 链接 | - | `react-native`
[`Linking`](https://docs.expo.dev/versions/latest/sdk/linking/) | `useLinkingURL()`、`useURL()` | 链接 | - | `expo-linking`
[`FileSystem`](https://docs.expo.dev/versions/latest/sdk/filesystem/) | - | 文件系统 | - | `expo-file-system`
[`Directory、File、Paths`](https://docs.expo.dev/versions/latest/sdk/filesystem-next/) | - | 文件系统（next） | - | `expo-file-system/next`
[`SplashScreen`](https://docs.expo.dev/versions/latest/sdk/splash-screen/) | - | 初始屏幕 | - | `expo-splash-screen`
[`ImageManipulator`](https://docs.expo.dev/versions/latest/sdk/imagemanipulator/) | `useImageManipulator()` | 图像处理 | - | `expo-image-manipulator`
[`SystemUI`](https://docs.expo.dev/versions/latest/sdk/system-ui/) | - | 系统UI | - | `expo-system-ui`
[`Appearance`](https://reactnative.dev/docs/appearance) | [`useColorScheme()`](https://reactnative.dev/docs/usecolorscheme) | 外观 | - | `react-native`
[`TaskManager`](https://docs.expo.dev/versions/latest/sdk/task-manager/) | - | 后台任务 | - | `expo-task-manager`
[`Systrace`](https://reactnative.dev/docs/systrace) | - | 系统跟踪 | - | `react-native`
[`Platform`](https://reactnative.dev/docs/platform) | - | 平台环境 | - | `react-native`
[`PlatformColor`](https://reactnative.dev/docs/platformcolor) | - | 平台颜色 | - | `react-native`
[`Settings`](https://reactnative.dev/docs/settings) | - | iOS 设置 | iOS | `react-native`
[`DynamicColorIOS`](https://reactnative.dev/docs/dynamiccolorios) | - | 动态色彩 | iOS | `react-native`

#### 界面

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`DocumentPicker`](https://docs.expo.dev/versions/latest/sdk/document-picker/) | - | 文档选择器 | - | `expo-document-picker`
[`ImagePicker`](https://docs.expo.dev/versions/latest/sdk/imagepicker/) | `useCameraPermissions()`、`useMediaLibraryPermissions()` | 图片选择器 | - | `expo-image-picker`
[`LivePhotoView`](https://docs.expo.dev/versions/latest/sdk/live-photo/) | - | 实时照片库 | iOS | `expo-live-photo`
[`MediaLibrary`](https://docs.expo.dev/versions/latest/sdk/media-library/) | `usePermissions()` | 媒体库 | - | `expo-media-library`
[`CameraView`](https://docs.expo.dev/versions/latest/sdk/camera/) | `useCameraPermissions()`、`useMicrophonePermissions()` | 相机 | - | `expo-camera`
[`Contacts`](https://docs.expo.dev/versions/latest/sdk/contacts/) | - | 通讯录 | - | `expo-contacts`
[`Calendar`](https://docs.expo.dev/versions/latest/sdk/calendar/) | `useCalendarPermissions()`、`useRemindersPermissions()` | 日历 | - | `expo-calendar`
[`AppleMaps、GoogleMaps`](https://docs.expo.dev/versions/latest/sdk/maps/) | `useLocationPermissions()` | 地图 | - | `expo-maps`
`-` | - | 地图 | - | [`react-native-maps`](https://docs.expo.dev/versions/latest/sdk/map-view/)
`-` | - | 高德地图 | - | [`react-native-amap3d`](https://qiuxiang.github.io/react-native-amap3d/api/index.html)
`-` | - | 百度地图 | - | [`react-native-baidu-map`](https://github.com/lovebing/react-native-baidu-map)
[`MailComposer`](https://docs.expo.dev/versions/latest/sdk/mail-composer/) | - | 邮件 | - | `expo-mail-composer`
[`SMS`](https://docs.expo.dev/versions/latest/sdk/sms/) | - | 短信 | - | `expo-sms`
[`WebBrowser`](https://docs.expo.dev/versions/latest/sdk/webbrowser/) | - | 网页浏览器 | - | `expo-web-browser`
[`Notifications`](https://docs.expo.dev/versions/latest/sdk/notifications/) | - | 应用程序内通知 | - | `expo-notifications`
[`Print`](https://docs.expo.dev/versions/latest/sdk/print/) | - | 打印 | - | `expo-print`
[`Share`](https://reactnative.dev/docs/share) | - | 共享 | - | `react-native`
[`Sharing`](https://docs.expo.dev/versions/latest/sdk/sharing/) | - | 共享文件 | - | `expo-sharing`
[`StoreReview`](https://docs.expo.dev/versions/latest/sdk/storereview/) | - | 应用内评分 | - | `expo-store-review`

### 设备

#### 物理设备

类 | Hooks | 说明 | 兼容平台 | 来源
---|---|---|---|---
[`Screens`](https://docs.expo.dev/versions/latest/sdk/screens/) | - | 屏幕 | - | `react-native-screens`
[`ScreenCapture`](https://docs.expo.dev/versions/latest/sdk/screen-capture/) | `usePermissions()`、`usePreventScreenCapture()` | 屏幕截图 | - | `expo-screen-capture`
[`ScreenOrientation`](https://docs.expo.dev/versions/latest/sdk/screen-orientation/) | - | 屏幕方向 | - | `expo-screen-orientation`
[`PermissionResponse`](https://docs.expo.dev/versions/latest/sdk/brightness/) | `usePermissions()` | 屏幕亮度 | - | `expo-brightness`
[`KeepAwake`](https://docs.expo.dev/versions/latest/sdk/keep-awake/) | `useKeepAwake()` | 唤醒（休眠）模式 | - | `expo-keep-awake`
[`captureRef`](https://docs.expo.dev/versions/latest/sdk/captureRef/) | - | 视图捕获 | - | `react-native-view-shot`
[`Keyboard`](https://reactnative.dev/docs/keyboard) | - | 键盘 | - | `react-native`
[`Battery`](https://docs.expo.dev/versions/latest/sdk/battery/) | `useBatteryLevel()`、`useBatteryState()`、`useLowPowerMode()`、`usePowerState()` | 电池 | - | `expo-battery`
[`NetInfo`](https://docs.expo.dev/versions/latest/sdk/netinfo/) | - | 网络信息（Wi-Fi） | - | `@react-native-community/netinfo`
[`Cellular`](https://docs.expo.dev/versions/latest/sdk/cellular/) | `usePermissions()` | 移动网络 | - | `expo-cellular`
[`Network`](https://docs.expo.dev/versions/latest/sdk/network/) | `useNetworkState()` | 设备网络（IP、MAC、飞行模式） | - | `expo-network`
[`Clipboard`、`ClipboardPasteButton`](https://docs.expo.dev/versions/latest/sdk/clipboard/) | - | 剪贴板 | - | `expo-clipboard`
[`Sensors`](https://docs.expo.dev/versions/latest/sdk/sensors/) | - | 传感器 | - | `expo-sensors`
[`Accelerometer`](https://docs.expo.dev/versions/latest/sdk/accelerometer/) | - | 加速度计 | - | `expo-sensors`
[`Barometer`](https://docs.expo.dev/versions/latest/sdk/barometer/) | - | 气压计 | - | `expo-sensors`
[`Magnetometer`](https://docs.expo.dev/versions/latest/sdk/magnetometer/) | - | 磁力计 | - | `expo-sensors`
[`Pedometer`](https://docs.expo.dev/versions/latest/sdk/pedometer/) | - | 计步器 | - | `expo-sensors`
[`Gyroscope`](https://docs.expo.dev/versions/latest/sdk/gyroscope/) | - | 陀螺仪 | - | `expo-sensors`
[`LightSensor`](https://docs.expo.dev/versions/latest/sdk/light-sensor/) | - | 光 | Android | `expo-sensors`
[`DeviceMotion`](https://docs.expo.dev/versions/latest/sdk/devicemotion/) | - | 设备方向 | - | `expo-sensors`
[`Vibration`](https://reactnative.dev/docs/vibration) | - | 震动 | - | `react-native`
[`Haptics`](https://docs.expo.dev/versions/latest/sdk/haptics/) | - | 震动 | - | `expo-haptics`
[`Device`](https://docs.expo.dev/versions/latest/sdk/device/) | - | 设备系统信息相关 | - | `expo-device`

## 参考

- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/versions/latest/)
- [Ant Design Mobile RN](https://rn.mobile.ant.design/docs/react/introduce-cn)
- [React Native Elements](https://reactnativeelements.com/)
