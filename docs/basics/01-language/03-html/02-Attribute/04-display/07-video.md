# 💥 video

视频播放器

## 场景用例

```html
<!-- HTML 代码 -->
```

## 属性

属性(Attribute) | 说明(Description) | 值(Value)
---|---|---
`src` | - | -
`crossorigin` | - | -
`preload` | - | -
`autoplay` | - | -
`loop` | - | -
`muted` | - | -
`controls` | - | -
`poster` | Poster frame to show prior to video playback | Valid non-empty URL potentially surrounded by spaces
`playsinline` | Encourage the user agent to display video content within the element's playback area | Boolean attribute
`width` | - | -
`height` | - | -

## 事件

事件属性(Attribute) | 说明(Description) | 事件(Event) | 目标对象(target) | 接口(Interface)
---|---|---|---|---
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

## 参考
