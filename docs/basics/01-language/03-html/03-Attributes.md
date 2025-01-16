# 事件属性（Events Attributes）

共计 88 个事件属性（on*）

- **Event**
  - UIEvent
    - FocusEvent
    - InputEvent
    - MouseEvent
      - PointerEvent
      - WheelEvent
    - KeyboardEvent
    - CompositionEvent
  - **CustomEvent**
- **EventTarget**
- **EventListener**

## UIEvent

事件属性(Attribute) | 说明(Description) | 事件(Event) | 接口(Interface)
---|---|---|---
`onload` | - | `load` | UIEvent
`onunload` | - | `unload` | UIEvent
`-` | - | `abort` | UIEvent
`onerror` | - | `error` | UIEvent
`onselect` | - | `select` | UIEvent

### FocusEvent

事件属性(Attribute) | 说明(Description) | 事件(Event) | 接口(Interface)
---|---|---|---
`onblur` | - | `blur` | FocusEvent
`onfocus` | - | `focus` | FocusEvent
`-` | - | `focusin` | FocusEvent
`-` | - | `focusout` | FocusEvent

### InputEvent

事件属性(Attribute) | 说明(Description) | 事件(Event) | 接口(Interface)
---|---|---|---
`onbeforeinput` | - | `beforeinput` | InputEvent
`oninput` | - | `input` | InputEvent

### MouseEvent

事件属性(Attribute) | 说明(Description) | 事件(Event) | 接口(Interface)
---|---|---|---
`ondblclick` | - | `dblclick` | MouseEvent
`onmousedown` | - | `mousedown` | MouseEvent
`onmouseenter` | - | `mouseenter` | MouseEvent
`onmouseleave` | - | `mouseleave` | MouseEvent
`onmousemove` | - | `mousemove` | MouseEvent
`onmouseout` | - | `mouseout` | MouseEvent
`onmouseover` | - | `mouseover` | MouseEvent
`onmouseup` | - | `mouseup` | MouseEvent

#### PointerEvent

事件属性(Attribute) | 说明(Description) | 事件(Event) | 接口(Interface)
---|---|---|---
`onauxclick` | - | `auxclick` | PointerEvent
`onclick` | - | `click` | PointerEvent
`oncontextmenu` | - | `contextmenu` | PointerEvent

#### WheelEvent

事件属性(Attribute) | 说明(Description) | 事件(Event) | 接口(Interface)
---|---|---|---
`onwheel` | - | `wheel` | WheelEvent

### KeyboardEvent

事件属性(Attribute) | 说明(Description) | 事件(Event) | 接口(Interface)
---|---|---|---
`onkeydown` | - | `keydown` | KeyboardEvent
`onkeypress` | - | ~~`keypress`~~ | KeyboardEvent
`onkeyup` | - | `keyup` | KeyboardEvent

### CompositionEvent

事件属性(Attribute) | 说明(Description) | 事件(Event) | 接口(Interface)
---|---|---|---
`-` | - | `compositionstart` | CompositionEvent
`-` | - | `compositionupdate` | CompositionEvent
`-` | - | `compositionend` | CompositionEvent

## `body` elements

事件属性(Attribute) | 说明(Description) | 事件(Event) | 目标对象(target) | 接口(Interface)
---|---|---|---|---
`-` | - | `load` | Window | Event
`-` | - | `blur` | Window | Event
`-` | - | `focus` | Window | Event
`onbeforeprint` | - | `beforeprint` | Window | Event
`onafterprint` | - | `afterprint` | Window | Event
`onmessage` | - | `message` | Window | MessageEvent
`onmessageerror` | - | `messageerror` | Window | MessageEvent
`onpageshow` | - | `pageshow` | Window | PageTransitionEvent
`onpagehide` | - | `pagehide` | Window | PageTransitionEvent
`onpageswap` | - | `pageswap` | Window | PageSwapEvent
`onpagereveal` | - | `pagereveal` | Window | PageRevealEvent
`onbeforeunload` | - | `beforeunload` | Window | BeforeUnloadEvent
`onunload` | - | ~~`unload`~~ | Window | BeforeUnloadEvent
`onstorage` | - | `storage` | Window | StorageEvent
`onpopstate` | - | `popstate` | Window | PopStateEvent
`onhashchange` | - | `hashchange` | Window | HashChangeEvent
**`onerror`**  | - | `error` | Global scope objects | Event/ErrorEvent
`ononline` | - | `online` | Global scope objects | Event
`onoffline` | - | `offline` | Global scope objects | Event
`onlanguagechange` | - | `languagechange` | Global scope objects | Event
`onrejectionhandled` | - | `rejectionhandled` | Global scope objects | PromiseRejectionEvent
`onunhandledrejection` | - | `unhandledrejection` | Global scope objects | PromiseRejectionEvent

## HTML elements
 
事件属性(Attribute) | 说明(Description) | 事件(Event) | 目标对象(target) | 接口(Interface)
---|---|---|---|---
`onbeforematch` | - | `beforematch` | **Elements** | Event
`onbeforetoggle` | - | `beforetoggle` | Elements | ToggleEvent
`onchange` | - | `change` | **Form controls** | Event
`onselect` | - | `select` | Form controls | Event
`oninvalid` | - | `invalid` | Form controls | Event
`onreset` | - | `reset` | **`form` elements** | Event
`onsubmit` | - | `submit` | `form` elements | SubmitEvent
`onformdata` | - | `formdata` | `form` elements | FormDataEvent
**`oncancel`** | - | `cancel` | **`input` elements** | Event
`oncontextlost` | - | `contextlost` | **`canvas` elements** | Event
`oncontextrestored` | - | `contextrestored` | `canvas` elements | Event
`oncancel` | - | `cancel` | **`dialog` elements** | Event
`onclose` | - | `close` | `dialog` elements | Event
`ontoggle` | - | `toggle` | **`details` and `popover` elements** | ToggleEvent
`onloadstart` | - | `loadstart` | **`audio` and `video` elements** | Event
`onloadedmetadata` | - | `loadedmetadata` | `audio` and `video` elements | Event
`onloadeddata` | - | `loadeddata` | `audio` and `video` elements | Event
`onprogress` | - | `progress` | `audio` and `video` elements | Event
`onsuspend` | - | `suspend` | `audio` and `video` elements | Event
`-` | - | `abort` | `audio` and `video` elements | Event
`onerror` | - | `error` | `audio` and `video` elements | Event
`onemptied` | - | `emptied` | `audio` and `video` elements | Event
`onstalled` | - | `stalled` | `audio` and `video` elements | Event
`oncanplay` | - | `canplay` | `audio` and `video` elements | Event
`oncanplaythrough` | - | `canplay` | `audio` and `video` elements | Event
`onplaying` | - | `canplay` | `audio` and `video` elements | Event
`onwaiting` | - | `canplay` | `audio` and `video` elements | Event
`onseeking` | - | `canplay` | `audio` and `video` elements | Event
`onseeked` | - | `canplay` | `audio` and `video` elements | Event
`onended` | - | `canplay` | `audio` and `video` elements | Event
`ondurationchange` | - | `canplay` | `audio` and `video` elements | Event
`ontimeupdate` | - | `canplay` | `audio` and `video` elements | Event
`onplay` | - | `canplay` | `audio` and `video` elements | Event
`onpause` | - | `canplay` | `audio` and `video` elements | Event
`onratechange` | - | `canplay` | `audio` and `video` elements | Event
**`onresize`** | - | `canplay` | `audio` and `video` elements | Event
`onvolumechange` | - | `canplay` | `audio` and `video` elements | Event
`onerror` | - | `error` | **`source` elements** | Event
`oncuechange` | - | `cuechange` | **`track` elements** | Event
`onload` | - | `load` | `track` elements | Event
`onerror` | - | `error` | `track` elements | Event
`onslotchange` | - | `slotchange` | **`slot` elements** / ShadowRoot | Event
`ondragstart` | - | `dragstart` | **drag-and-drop** | DragEvent
`ondrag` | - | `drag` | drag-and-drop | DragEvent
`ondragenter` | - | `dragenter` | drag-and-drop | DragEvent
`ondragleave` | - | `dragleave` | drag-and-drop | DragEvent
`ondragover` | - | `dragover` | drag-and-drop | DragEvent
`ondrop` | - | `drop` | drag-and-drop | DragEvent
`ondragend` | - | `dragend` | drag-and-drop | DragEvent
`oncopy` | - | `copy` | **Clipboard API** | ClipboardEvent
`oncut` | - | `cut` | Clipboard API | ClipboardEvent
`onpaste` | - | `paste` | Clipboard API | ClipboardEvent
`onresize` | - | `resize` | **VisualViewport** | Event
`onscroll` | - | `scroll` | VisualViewport | Event
`onscrollend` | - | `scrollend` | VisualViewport | Event
`onsecuritypolicyviolation` | - | `securitypolicyviolation` | **Content Security Policy (CSP)** | SecurityPolicy<br/>ViolationEvent
  
## 参考

- https://w3c.github.io/uievents/
- https://w3c.github.io/clipboard-apis/#clipboard-event-definitions
- https://www.w3.org/TR/cssom-view-1/
- https://w3c.github.io/webappsec-csp/