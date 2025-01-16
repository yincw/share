# 💥 form

表单

## 场景用例

```html
<!-- HTML 代码 -->
```

## 属性

属性(Attribute) | 说明(Description) | 值(Value)
---|---|---
`accept-charset` | Character encodings to use for form submission | ASCII case-insensitive match for "UTF-8"
`action` | URL to use for form submission | Valid non-empty URL potentially surrounded by spaces
`autocomplete` | Default setting for autofill feature for controls in the form | "on"; "off"
`enctype` | Entry list encoding type to use for form submission | "application/x-www-form-urlencoded"; "multipart/form-data"; "text/plain"
`method` | Variant to use for form submission | "GET"; "POST"; "dialog"
`name` | - | -
`novalidate` | Bypass form control validation for form submission | Boolean attribute
`target` | Navigable for form submission | Valid navigable target name or keyword

## 事件

事件属性(Attribute) | 说明(Description) | 事件(Event) | 目标对象(target) | 接口(Interface)
---|---|---|---|---
`onreset` | - | `reset` | **`form` elements** | Event
`onsubmit` | - | `submit` | `form` elements | SubmitEvent
`onformdata` | - | `formdata` | `form` elements | FormDataEvent

## 参考
