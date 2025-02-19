# 事件（Events）

## Window 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
**`load`** | - | Event
`blur` | - | Event
`focus` | - | Event
`beforeprint` | - | Event
`afterprint` | - | Event
`pageshow` | - | PageTransitionEvent
`pagehide` | - | PageTransitionEvent
`pageswap` | - | PageSwapEvent
`pagereveal` | - | PageRevealEvent
`popstate` | - | PopStateEvent
`hashchange` | - | HashChangeEvent
`beforeunload` | - | BeforeUnloadEvent
`unload` | - | BeforeUnloadEvent
`storage` | - | StorageEvent
**`message`** | - | MessageEvent
**`messageerror`** | - | MessageEvent

### Global scope objects 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
**`error`** | - | Event/ErrorEvent
`online` | - | Event
`offline` | - | Event
`languagechange` | - | Event
`rejectionhandled` | - | PromiseRejectionEvent
`unhandledrejection` | - | PromiseRejectionEvent

## Document 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`DOMContentLoaded` | - | Event
`readystatechange` | - | Event
`visibilitychange` | - | Event

## Elements 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`input` | - | Event
`beforematch` | - | Event
`beforetoggle` | - | ToggleEvent
`click` | - | PointerEvent

### Elements and Text nodes

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`pointercancel` | - | PointerEvent

### Form controls 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
**`change`** | - | Event
`select` | - | Event
`invalid` | - | Event

### `form` elements 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`reset` | - | Event
`submit` | - | SubmitEvent
`formdata` | - | FormDataEvent

### `input` elements 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
**`cancel`** | - | Event

### `canvas` elements 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
**`contextlost`** | - | Event
**`contextrestored`** | - | Event

#### OffscreenCanvas objects

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`contextlost` | - | Event
`contextrestored` | - | Event

### `dialog` elements 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`cancel` | - | Event
**`close`** | - | Event

#### CloseWatcher

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`cancel` | - | Event
`close` | - | Event

### `details` and `popover` elements 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`toggle` | - | ToggleEvent

### `slot` elements 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`slotchange` | - | Event

## **media** element 🎯

### `audio` and `video` elements 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`loadstart` | - | Event
`loadedmetadata` | - | Event
`loadeddata` | - | Event
`progress` | - | Event
`suspend` | - | Event
`abort` | - | Event
`error` | - | Event
`emptied` | - | Event
`stalled` | - | Event
`canplay` | - | Event
`canplaythrough` | - | Event
`playing` | - | Event
`waiting` | - | Event
`seeking` | - | Event
`seeked` | - | Event
`ended` | - | Event
`durationchange` | - | Event
`timeupdate` | - | Event
`play` | - | Event
`pause` | - | Event
`ratechange` | - | Event
**`resize`** | `video` 元素 | Event
`volumechange` | - | Event

### `source` elements 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`error` | - | Event

### `track` elements 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`cuechange` | - | Event
`load` | - | Event
`error` | - | Event

### AudioTrackList objects

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`change` | - | Event
`addtrack` | - | TrackEvent
`removetrack` | - | TrackEvent

### VideoTrackList objects

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`change` | - | Event
`addtrack` | - | TrackEvent
`removetrack` | - | TrackEvent

### TextTrackList objects

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`change` | - | Event
`addtrack` | - | TrackEvent
`removetrack` | - | TrackEvent

### TextTrack objects

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`cuechange` | - | Event

### TextTrackCue objects

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`enter` | - | Event
`exit` | - | Event

## drag-and-drop 🎯

### Source node 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`dragstart` | - | DragEvent
`drag` | - | DragEvent
`dragend` | - | DragEvent

### `body` element 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`dragenter` | - | DragEvent

### Previous target element 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`dragleave` | - | DragEvent

### Current target element 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`dragover` | - | DragEvent
`drop` | - | DragEvent

## VisualViewport 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`resize` | - | Event
`scroll` | - | Event
`scrollend` | - | Event

## Clipboard 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`copy` | - | ClipboardEvent
`cut` | - | ClipboardEvent
`paste` | - | ClipboardEvent

## Content Security Policy (CSP) 🎯

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`securitypolicyviolation` | - | SecurityPolicyViolationEvent

## BroadcastChannel

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`message` | - | MessageEvent
`messageerror` | - | MessageEvent

## MessagePort

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`close` | - | Event
`message` | - | MessageEvent
`messageerror` | - | MessageEvent

## EventSource

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`open` | - | Event
`message` | - | MessageEvent

## Worker

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`message` | - | MessageEvent
`messageerror` | - | MessageEvent

### Worker objects

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`error` | - | Event/ErrorEvent

### DedicatedWorkerGlobalScope

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`message` | - | MessageEvent
`messageerror` | - | MessageEvent

### SharedWorkerGlobalScope

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`connect` | - | MessageEvent

### ServiceWorkerContainer

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`message` | - | MessageEvent
`messageerror` | - | MessageEvent

## Navigation

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`navigatesuccess` | - | Event
`navigateerror` | - | ErrorEvent
`navigate` | - | NavigateEvent
`currententrychange` | - | NavigationCurrentEntryChangeEvent

### NavigationHistoryEntry

事件(Event) | 说明(Description) | 接口(Interface)
---|---|---
`dispose` | - | Event

## 参考

- https://html.spec.whatwg.org/multipage/indices.html#events-2
- https://html.spec.whatwg.org/multipage/media.html#mediaevents
- https://html.spec.whatwg.org/multipage/dnd.html#dndevents
- https://w3c.github.io/clipboard-apis/#clipboard-event-definitions
- https://www.w3.org/TR/cssom-view-1/
- https://w3c.github.io/webappsec-csp/
- https://developer.mozilla.org/en-US/docs/Web/API