---
toc_max_heading_level: 4
---

# Web API

共计 124

## 用户界面

### 调试

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console_API) | 调试功能 | Window、WorkerGlobalScope | Web、Worker | `console`

### 界面开发

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[User-Agent Client Hints API 🧪](https://developer.mozilla.org/en-US/docs/Web/API/User-Agent_Client_Hints_API) | 用户代理客户端提示 | Navigator、WorkerNavigator | Web、Worker | NavigatorUAData
[Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) | Web 组件 | - | - | -
[UI Events](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events) | UI 事件 | Window、Element | Web | UIEvent、FocusEvent、InputEvent、MouseEvent、PointerEvent、WheelEvent、KeyboardEvent、CompositionEvent
[Touch events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events) | 触摸事件 | Element | Web | TouchEvent、Touch、TouchList
[Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) | 文档对象模型（DOM） | - | Web | EventTarget、AbortController、AbortSignal、Node、NodeList、NodeIterator、DocumentType、Document、TreeWalker、DocumentFragment、DOMParser、DOMImplementation、Element、Attr、NamedNodeMap、DOMTokenList、CharacterData、Comment、Text、TextEncoder、TextDecoder、DOMException、AbstractRange、Range、StaticRange、DOMPointReadOnly、DOMPoint、DOMRect、Event、CustomEvent、MutationObserver、MutationRecord
[HTML DOM API / BOM](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API) | HTML DOM | - | Web | Window、Navigator、History、Location、Navigation...
[HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) | HTML 拖放 | - | Web | DataTransfer、DataTransferItem、DataTransferItemList、DragEvent
[SVG API](https://developer.mozilla.org/en-US/docs/Web/API/SVG_API) | SVG | - | - | SVGElement、SVGSVGElement、...
[CSS Object Model (CSSOM)](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model) | CSS 对象模型（CSSOM） | - | Web | StyleSheet、StyleSheetList、...
[Houdini APIs](https://developer.mozilla.org/en-US/docs/Web/API/Houdini_APIs) | - | - | Web | Worklet、...
`\-` [CSS Properties and Values API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API) | CSS 属性和值 | - | Web | CSSPropertyRule
`\-` [CSS Typed Object Model API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API) | CSS 类型对象模型 | - | Web | -
`\-` [CSS Painting API 🧪](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API) | - | - | Web | PaintWorkletGlobalScope
[CSS Font Loading API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API) | CSS 字体加载 | - | Web、Worker | FontFace、FontFaceSet、FontFaceSetLoadEvent
[CSS Custom Highlight API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API) | **CSS 自定义高亮** | - | Web | Highlight、HighlightRegistry
[Encoding API](https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API) | 字符编码文本 | - | Web、Worker | TextDecoder、TextEncoder、TextDecoderStream、TextEncoderStream
[Local Font Access API 🧪](https://developer.mozilla.org/en-US/docs/Web/API/Local_Font_Access_API) | 本地字体资源 | Window | Web | FontData
[EditContext API 🧪](https://developer.mozilla.org/en-US/docs/Web/API/EditContext_API) | 富文本编辑器 | - | Web | EditContext
[Attribution Reporting API 🧪](https://developer.mozilla.org/en-US/docs/Web/API/Attribution_Reporting_API) | 广告/归因报告 | `<a>`、`<img>`、`script`、Window | Web | -
[Fenced Frame API 🧪](https://developer.mozilla.org/en-US/docs/Web/API/Fenced_frame_API) | 围栏框架 | `<fencedframe>` | Web | Fence、FencedFrameConfig、HTMLFencedFrameElement
[Invoker Commands API 🧪](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) | - | `<button>`、`<dialog>` | Web | CommandEvent
[Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API) | Web 共享 | Navigator | Web | `navigator.canShare()`、`navigator.share()`

#### 视图

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) | 页面可见性 | Document | Web | -
[View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) | 视图过渡 | Document | Web | ViewTransition
[Visual Viewport API](https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API) | 可视视口 | Window | Web | VisualViewport
[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) | 交叉观察器/视口相交情况变化 | - | Web | IntersectionObserver、IntersectionObserverEntry
[Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API) | 监视元素的大小更改 | Element | Web | ResizeObserver、ResizeObserverEntry
[Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection_API) | 选择 | Window、Document | Web | Selection
[Presentation API 🧪](https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API) | 演示 | - | Web | Presentation、PresentationRequest、PresentationAvailability、PresentationConnectionAvailableEvent、PresentationConnection、PresentationConnectionCloseEvent、PresentationReceiver、PresentationConnectionList；`navigator.presentation`

#### 路由

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[History API](https://developer.allizom.org/en-US/docs/Web/API/History_API) | 历史记录 | Window | Web | History、PopStateEvent；`history`
[Navigation API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Navigation_API) | 导航 | Window | Web | Navigation、NavigationActivation、NavigationDestination、NavigationHistoryEntry、NavigationTransition、NavigationCurrentEntryChangeEvent、NavigateEvent；`navigation`
[URL API](https://developer.allizom.org/en-US/docs/Web/API/URL_API) | URL | - | Web、Worker | URL、URLSearchParams
[URL Fragment Text Directives](https://developer.allizom.org/en-US/docs/Web/API/URL_Fragment_Text_Directives) | URL 片段文本指令 | Document | Web | FragmentDirective
[URL Pattern API 🧪](https://developer.allizom.org/en-US/docs/Web/API/URL_Pattern_API) | URL 模式匹配 | - | Web、Worker | URLPattern Experimental

#### 数据流及通信

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Streams API](https://developer.allizom.org/en-US/docs/Web/API/Streams_API) | 数据流 | `fetch` | Web、Worker | ReadableStream、ReadableStreamDefaultReader、ReadableStreamDefaultController、WritableStream、WritableStreamDefaultWriter、WritableStreamDefaultController、TransformStream、TransformStreamDefaultController、ByteLengthQueuingStrategy、CountQueuingStrategy、ReadableStreamBYOBReader、ReadableByteStreamController、ReadableStreamBYOBRequest
[Compression Streams API](https://developer.allizom.org/en-US/docs/Web/API/Compression_Streams_API) | 压缩流 | - | Web、Worker | CompressionStream、DecompressionStream
[Broadcast Channel API](https://developer.allizom.org/en-US/docs/Web/API/Broadcast_Channel_API) | 广播频道 | - | Web、Worker | BroadcastChannel
[Channel Messaging API](https://developer.allizom.org/en-US/docs/Web/API/Channel_Messaging_API) | 频道消息 | - | Web、Worker | MessageChannel、MessagePort
[Beacon API](https://developer.allizom.org/en-US/docs/Web/API/Beacon_API) | 信标 | `fetch`、`XMLHttpRequest` | Web、Worker | `navigator.sendBeacon()`

#### 网络请求

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Fetch API](https://developer.allizom.org/en-US/docs/Web/API/Fetch_API) | 获取网络资源 | Window、WorkerGlobalScope | Web、Worker | `fetch()`、Request、Headers、Response
[XMLHttpRequest API](https://developer.allizom.org/en-US/docs/Web/API/XMLHttpRequest_API) | 获取网络资源 | - | Web、Worker | FormData、XMLHttpRequest、XMLHttpRequestUpload、ProgressEvent、XMLHttpRequestEventTarget
[Idle Detection API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Idle_Detection_API) | 空闲检测 | - | Web、Worker | IdleDetector
[Speculation Rules API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Speculation_Rules_API) | 推测规则（预取和预渲染） | Document | Web | -
[Background Fetch API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Background_Fetch_API) | 后台获取 | ServiceWorkerGlobalScope | Web、Worker | BackgroundFetchManager、BackgroundFetchRegistration、BackgroundFetchRecord、BackgroundFetchEvent、BackgroundFetchUpdateUIEvent
[Background Synchronization API](https://developer.allizom.org/en-US/docs/Web/API/Background_Synchronization_API) | 后台同步 | ServiceWorkerGlobalScope | Web、Worker | SyncManager、SyncEvent
[Web Periodic Background Synchronization API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API) | Web 定期后台同步 | ServiceWorkerGlobalScope | Web、Worker | PeriodicSyncManager、PeriodicSyncEvent

#### 动画

WebAPI | 中文名称 | 目标对象 |  环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Web Animations API](https://developer.allizom.org/zh-CN/docs/Web/API/Web_Animations_API) | Web 动画 | Document、Element | Web | Animation、AnimationTimeline、DocumentTimeline、AnimationEffectTimingProperties、AnimationEffectReadOnly、KeyframeEffect、KeyframeEffectReadOnly

### 监控与分析

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Reporting API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Reporting_API) | 报告 | - | Web、Worker | Report、ReportingObserver、ReportBody、CSPViolationReportBody、DeprecationReportBody、InterventionReportBody、SecurityPolicyViolationEvent

### 性能

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Performance APIs](https://developer.allizom.org/en-US/docs/Web/API/Performance_API) | 性能 | Window、WorkerGlobalScope | Web、Worker | Performance、PerformanceObserver、PerformanceObserverEntryList、PerformanceEntry、LargestContentfulPaint、LayoutShift、LayoutShiftAttribution、EventCounts、NotRestoredReasons、NotRestoredReasonDetails、PerformanceElementTiming、PerformanceEventTiming、PerformanceLongTaskTiming、PerformanceLongAnimationFrameTiming、PerformanceMark、PerformanceMeasure、PerformancePaintTiming、PerformanceResourceTiming、PerformanceNavigationTiming、PerformanceScriptTiming、PerformanceServerTiming、TaskAttributionTiming、VisibilityStateEntry
[Web Workers API](https://developer.allizom.org/en-US/docs/Web/API/Web_Workers_API) | 后台线程（专用 worker、共享 worker） | - | Worker | Worker、WorkerGlobalScope、WorkerLocation、WorkerNavigator、DedicatedWorkerGlobalScope、SharedWorker、SharedWorkerGlobalScope
[Service Worker API](https://developer.allizom.org/en-US/docs/Web/API/Service_Worker_API) | 离线体验 | Window、WorkerGlobalScope、Navigator、WorkerNavigator | Web、Worker | Cache、CacheStorage、Client、Clients、ExtendableEvent、ExtendableMessageEvent、FetchEvent、NavigationPreloadManager、NotificationEvent、ServiceWorker、ServiceWorkerContainer、ServiceWorkerGlobalScope、MessageEvent、ServiceWorkerRegistration、WindowClient

### 安全

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Credential Management API](https://developer.allizom.org/en-US/docs/Web/API/Credential_Management_API) | 凭证管理 | - | Web | Credential、CredentialsContainer、FederatedCredential、PasswordCredential、PublicKeyCredential、PasswordCredentialInit
[Federated Credential Management (FedCM) API 🧪](https://developer.allizom.org/en-US/docs/Web/API/FedCM_API) | 联合凭据管理（FedCM） | `<iframe>` | Web | IdentityCredential、IdentityProvider、NavigatorLogin；`Navigator`
[WebOTP API](https://developer.allizom.org/en-US/docs/Web/API/WebOTP_API) | 一次性口令（one-time password） | - | Web | OTPCredential
[Web Crypto API](https://developer.allizom.org/en-US/docs/Web/API/Web_Crypto_API) | Web 加密 | Window、WorkerGlobalScope | Web、Worker | Crypto、CryptoKey、CryptoKeyPair、SubtleCrypto...
[Trusted Types API](https://developer.allizom.org/en-US/docs/Web/API/Trusted_Types_API) | 受信任的类型，防止客户端 XSS 攻击 | Window、WorkerGlobalScope | Web、Worker | TrustedHTML、TrustedScript、TrustedScriptURL、TrustedTypePolicy、TrustedTypePolicyFactory

### 场景-图形

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Canvas API](https://developer.allizom.org/en-US/docs/Web/API/Canvas_API) | 画布 | `<canvas>`、Window、WorkerGlobalScope | Web、Worker | CanvasGradient、CanvasPattern、CanvasRenderingContext2D、OffscreenCanvas、OffscreenCanvasRenderingContext2D、ImageBitmap、ImageBitmapRenderingContext、ImageData、Path2D、TextMetrics、HTMLCanvasElement

### 场景-音视频

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Web Audio API](https://developer.allizom.org/en-US/docs/Web/API/Web_Audio_API) | Web 音频 | `<audio>`、`<video>` | Web | AudioBuffer、AudioContext、AudioListener、AudioParam、AudioSinkInfo、AudioWorklet、AudioWorkletGlobalScope、AudioWorkletProcessor、BaseAudioContext、OfflineAudioCompletionEvent、OfflineAudioContext、PeriodicWave
[Audio Output Devices API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Audio_Output_Devices_API) | 音频输出设备 | HTMLMediaElement | Web | `navigator.mediaDevices`
[Web Speech API](https://developer.allizom.org/en-US/docs/Web/API/Web_Speech_API) | 语音合成（文本到语音 TTS）和语音识别（异步语音识别） | - | Web | SpeechRecognition、SpeechRecognitionAlternative、SpeechRecognitionError、SpeechRecognitionEvent、SpeechGrammar、SpeechGrammarList、SpeechRecognitionResult、SpeechRecognitionResultList、SpeechSynthesis、SpeechSynthesisErrorEvent、SpeechSynthesisEvent、SpeechSynthesisUtterance、SpeechSynthesisVoice
[MediaStream Recording API](https://developer.allizom.org/en-US/docs/Web/API/MediaStream_Recording_API) | 媒体录制 | MediaStream、HTMLMediaElement | - | MediaRecorder、BlobEvent
[Media Capabilities API](https://developer.allizom.org/en-US/docs/Web/API/Media_Capabilities_API) | 媒体功能 | Navigator、WorkerNavigator | Web、Worker | MediaCapabilities、`navigator.mediaCapabilities`
[Remote Playback API](https://developer.allizom.org/en-US/docs/Web/API/Remote_Playback_API) | 远程回放 | HTMLMediaElement | Web | RemotePlayback
[Picture-in-Picture API](https://developer.allizom.org/en-US/docs/Web/API/Picture-in-Picture_API) | 画中画 | `<video>` | Web | PictureInPictureWindow、PictureInPictureEvent
[Document Picture-in-Picture API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Document_Picture-in-Picture_API) | 文档画中画 | Window | Web | DocumentPictureInPicture、DocumentPictureInPictureEvent
[Encrypted Media Extensions API](https://developer.allizom.org/en-US/docs/Web/API/Encrypted_Media_Extensions_API) | 加密媒体扩展 | HTMLMediaElement | Web | MediaEncryptedEvent、MediaKeyMessageEvent、MediaKeys、MediaKeySession、MediaKeyStatusMap、MediaKeySystemAccess
[Media Capture and Streams API (Media Stream)](https://developer.allizom.org/en-US/docs/Web/API/Media_Capture_and_Streams_API) | 媒体捕捉与媒体流 | HTMLCanvasElement、HTMLMediaElement | Web | CanvasCaptureMediaStreamTrack、InputDeviceInfo、MediaDeviceInfo、MediaDevices、MediaStream、MediaStreamTrack、MediaStreamTrackEvent、MediaTrackConstraints、MediaTrackSettings、MediaTrackSupportedConstraints、OverconstrainedError
[MediaStream Image Capture API 🧪](https://developer.allizom.org/en-US/docs/Web/API/MediaStream_Image_Capture_API) | 媒体流图片捕获 | - | Web | ImageCapture
[Insertable Streams for MediaStreamTrack API](https://developer.allizom.org/en-US/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) | MediaStreamTrack 的可插入流 | - | Web | MediaStreamTrackGenerator、MediaStreamTrackProcessor
[Media Session API](https://developer.allizom.org/en-US/docs/Web/API/Media_Session_API) | 媒体会话 | - | Web | ChapterInformation、MediaMetadata、MediaSession；`navigator.mediaSession`
[Media Source API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Media_Source_Extensions_API) | 媒体源 | HTMLMediaElement、HTMLVideoElement | Worker | MediaSource、SourceBuffer、SourceBufferList、VideoPlaybackQuality、MediaSourceHandle
[WebVTT API](https://developer.allizom.org/en-US/docs/Web/API/WebVTT_API) | Web 视频文本轨格式 | `<track>` | - | VTTCue、VTTRegion、TextTrack、TextTrackList、TextTrackCue、TextTrackCueList、TrackEvent
[WebCodecs API](https://developer.allizom.org/en-US/docs/Web/API/WebCodecs_API) | 视频或音频编辑、视频会议 | - | Web、Worker | AudioDecoder、AudioEncoder、EncodedAudioChunk、AudioData、VideoDecoder、VideoEncoder、EncodedVideoChunk、VideoFrame、VideoColorSpace、ImageDecoder、ImageTrackList、ImageTrack

### 场景-元宇宙

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[WebGL: 2D and 3D graphics for the web](https://developer.allizom.org/en-US/docs/Web/API/WebGL_API) | Web 图形库 | HTMLCanvasElement | Web、Worker | WebGLRenderingContext、WebGLBuffer、WebGLFramebuffer、WebGLRenderbuffer...
[Geometry interfaces](https://developer.allizom.org/en-US/docs/Web/API/Geometry_interfaces) | 几何界面 | - | Web | DOMMatrix、DOMMatrixReadOnly、DOMPoint、DOMPointReadOnly、DOMQuad、DOMRect、DOMRectReadOnly
[WebXR Device API 🧪](https://developer.allizom.org/en-US/docs/Web/API/WebXR_Device_API) | 虚拟现实设备 | - | Web | `navigator.xr`

## 平台

### 位置

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Geolocation API](https://developer.allizom.org/en-US/docs/Web/API/Geolocation_API) | 地理位置 | - | Web | Geolocation、GeolocationPosition、GeolocationCoordinates、GeolocationPositionError、`navigator.geolocation`

### 支付

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Payment Request API](https://developer.allizom.org/en-US/docs/Web/API/Payment_Request_API) | 支付请求 | - | - | PaymentAddress、PaymentRequest、PaymentRequestEvent、PaymentRequestUpdateEvent、PaymentMethodChangeEvent、PaymentResponse、MerchantValidationEvent
[Payment Handler API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Payment_Handler_API) | 支付处理 | - | Web、Worker | -

### 网络

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[WebSocket API](https://developer.allizom.org/en-US/docs/Web/API/WebSockets_API) | - | - | Web、Worker | -
[WebTransport API](https://developer.allizom.org/en-US/docs/Web/API/WebTransport_API) | - | - | - | -
[WebRTC API](https://developer.allizom.org/en-US/docs/Web/API/WebRTC_API) | - | - | - | -
[Server-sent events](https://developer.allizom.org/en-US/docs/Web/API/Server-sent_events) | - | - | Web、Worker | -

### 本地存储

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Storage API](https://developer.allizom.org/en-US/docs/Web/API/Storage_API) | 存储 | - | - | -
[Storage Access API](https://developer.allizom.org/en-US/docs/Web/API/Storage_Access_API) | 存储访问 | - | - | -
[Web Storage API](https://developer.allizom.org/en-US/docs/Web/API/Web_Storage_API) | Web 存储 | - | - | -
[Cookie Store API](https://developer.allizom.org/en-US/docs/Web/API/Cookie_Store_API) | Cookie 商店 | - | - | -
[Shared Storage API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Shared_Storage_API) | 共享存储 | - | - | -
[IndexedDB API](https://developer.allizom.org/en-US/docs/Web/API/IndexedDB_API) | - | - | Web、Worker | -
[Content Index API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Content_Index_API) | 内容索引 | - | - | -

### 系统-基础

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Web Authentication API](https://developer.allizom.org/en-US/docs/Web/API/Web_Authentication_API) | Web 身份验证 | - | - | -
[Permissions API](https://developer.allizom.org/en-US/docs/Web/API/Permissions_API) | 权限 | - | - | -
[Push API](https://developer.allizom.org/en-US/docs/Web/API/Push_API) | 推送 | - | - | -
[Launch Handler API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Launch_Handler_API) | 启动处理 | - | - | -
[Web Serial API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Web_Serial_API) | Web 序列号 | - | - | -
[Window Management API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Window_Management_API) | 窗口管理 | - | - | -
[Window Controls Overlay API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Window_Controls_Overlay_API) | 窗口控制覆盖 | - |- | -
[File System API](https://developer.allizom.org/en-US/docs/Web/API/File_System_API) | 文件系统 | - | - | -
[File and Directory Entries API](https://developer.allizom.org/en-US/docs/Web/API/File_and_Directory_Entries_API) | 文件和目录条目 | - | - | -
[File API](https://developer.allizom.org/en-US/docs/Web/API/File_API) | 文件 | - | - | -
[Background Tasks API](https://developer.allizom.org/en-US/docs/Web/API/Background_Tasks_API) | 后台任务 的协同调度 | - | - | -
[Prioritized Task Scheduling API](https://developer.allizom.org/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) | 优先任务调度 | - | - | -

### 系统-界面

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Badging API](https://developer.allizom.org/en-US/docs/Web/API/Badging_API) | 应用图标标记 | - | - | -
[Notifications API](https://developer.allizom.org/en-US/docs/Web/API/Notifications_API) | 通知 | - | Web、Worker | -
[Popover API](https://developer.allizom.org/en-US/docs/Web/API/Popover_API) | 气泡 | - | - | -
[EyeDropper API 🧪](https://developer.allizom.org/en-US/docs/Web/API/EyeDropper_API) | 吸管/拾色器 | - | - | -
[Contact Picker API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Contact_Picker_API) | 联系人选择器 | - | - | -

### 设备-物理设备

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Fullscreen API](https://developer.allizom.org/en-US/docs/Web/API/Fullscreen_API) | 🖥 全屏 | - | - | -
[Screen Orientation API](https://developer.allizom.org/en-US/docs/Web/API/Screen_Orientation_API) | 屏幕方向 | - | - | -
[Screen Capture API](https://developer.allizom.org/en-US/docs/Web/API/Screen_Capture_API) | 屏幕捕获 | - | - | -
[Screen Wake Lock API](https://developer.allizom.org/en-US/docs/Web/API/Screen_Wake_Lock_API) | 屏幕唤醒锁 | - | - | -
[Web Locks API](https://developer.allizom.org/en-US/docs/Web/API/Web_Locks_API) | Web 锁 | - | - | -
[Pointer Lock API](https://developer.allizom.org/en-US/docs/Web/API/Pointer_Lock_API) | 🖱️ 鼠标锁 | - | - | -
[Pointer events](https://developer.allizom.org/en-US/docs/Web/API/Pointer_events) | 鼠标事件 | - | - | -
[Gamepad API](https://developer.allizom.org/en-US/docs/Web/API/Gamepad_API) | 🎮 游戏手柄 | - | - | -
[Keyboard API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Keyboard_API) | ⌨️ 键盘 | - | - | -
[VirtualKeyboard API 🧪](https://developer.allizom.org/en-US/docs/Web/API/VirtualKeyboard_API) | ⌨️ 虚拟键盘 | - | - | -
[Ink API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Ink_API) | 🖌️ 墨水笔 | - | - | -
[Barcode Detection API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Barcode_Detection_API) | 扫码/条形码检测 | - | Web、Worker | -
[InputDeviceCapabilities API 🧪](https://developer.allizom.org/en-US/docs/Web/API/InputDeviceCapabilities_API) | 输入设备 | - | - | -
[Battery Status API](https://developer.allizom.org/en-US/docs/Web/API/Battery_Status_API) | 🔋 电池 | - | - | -
[Clipboard API](https://developer.allizom.org/en-US/docs/Web/API/Clipboard_API) | 📋 粘贴板 | - | - | -
[Device Memory API](https://developer.allizom.org/en-US/docs/Web/API/Device_Memory_API) | 内存 | - | - | -
[Network Information API](https://developer.allizom.org/en-US/docs/Web/API/Network_Information_API) | 网络/Wi-Fi | - | Web、Worker | -
[Sensor APIs ](https://developer.allizom.org/en-US/docs/Web/API/Sensor_APIs)| 🧭 传感器（罗盘/加速计/陀螺仪） | - | - | -
[Device orientation events](https://developer.allizom.org/en-US/docs/Web/API/Device_orientation_events) | 设备方向 | - | - | -
[Vibration API](https://developer.allizom.org/en-US/docs/Web/API/Vibration_API) | 📳 震动 | - | - | -
[Web Bluetooth API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Web_Bluetooth_API) | 蓝牙 | - | - | -
[Web NFC API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Web_NFC_API) | NFC | - | - | -
[Compute Pressure API 🧪](https://developer.allizom.org/en-US/docs/Web/API/Compute_Pressure_API) | CPU | - | - | -
[WebGPU API 🧪](https://developer.allizom.org/en-US/docs/Web/API/WebGPU_API) | GPU | - | - | -

### 设备-主板接口

WebAPI | 中文名称 | 目标对象 | 环境支持 | 接口(Interfaces)/对象类型(types of objects)
---|---|---|---|---
[Web MIDI API](https://developer.allizom.org/en-US/docs/Web/API/Web_MIDI_API) | MIDI | - | - | -
[WebUSB API 🧪](https://developer.allizom.org/en-US/docs/Web/API/WebUSB_API) | USB | - | - | -
[WebHID API 🧪](https://developer.allizom.org/en-US/docs/Web/API/WebHID_API) | 人机界面设备(Web Human Interface Devices) | - | - | -
