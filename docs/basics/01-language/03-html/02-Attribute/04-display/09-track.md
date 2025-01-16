# 💥 track

定时字幕

## 场景用例

```html
<!-- HTML 代码 -->
```

## 属性

属性(Attribute) | 说明(Description) | 值(Value)
---|---|---
`default` | Enable the track if no other text track is more suitable | Boolean attribute
`kind` | The type of text track | "subtitles"; "captions"; "descriptions"; "chapters"; "metadata"
`label` | User-visible label | Text
`src` | Address of the resource | Valid non-empty URL potentially surrounded by spaces
`srclang` | Language of the text track | Valid BCP 47 language tag

## 事件

事件属性(Attribute) | 说明(Description) | 事件(Event) | 目标对象(target) | 接口(Interface)
---|---|---|---|---
`oncuechange` | - | `cuechange` | **`track` elements** | Event
`onload` | - | `load` | `track` elements | Event
`onerror` | - | `error` | `track` elements | Event

## 参考
