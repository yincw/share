# 💥 input

输入框 表单控件

## 场景用例

```html
<!-- HTML 代码 -->
```

## 属性

属性(Attribute) | 说明(Description) | 值(Value)
---|---|---
`alpha` | Allow the color's alpha component to be set | Boolean attribute
`formnovalidate` | Bypass form control validation for form submission | Boolean attribute
`required` | Whether the control is required for form submission | Boolean attribute
`multiple` | Whether to allow multiple values | Boolean attribute
`checked` | Whether the control is checked | Boolean attribute
`disabled` | Whether the form control is disabled | Boolean attribute
`readonly` | Whether to allow the value to be edited by the user | Boolean attribute
`accept` | Hint for expected file type in file upload controls | Set of comma-separated tokens* consisting of valid MIME type strings with no parameters or audio/*, video/*, or image/*
`autocomplete` | Hint for form autofill feature | Autofill field name and related tokens*
`list` | List of autocomplete options | ID*
`colorspace` | The color space of the serialized color | "limited-srgb"; "display-p3"
`dirname` | Name of form control to use for sending the element's directionality in form submission | Text*
`form` | - | -
`formaction` | - | -
`formenctype` | Entry list encoding type to use for form submission | "application/x-www-form-urlencoded"; "multipart/form-data"; "text/plain"
`formmethod` | - | -
`formtarget` | - | -
`src` | - | -
`width` | - | -
`height` | - | -
`type` | Type of form control | input type keyword
`name` | - | -
`value` | Value of the form control | Varies*
`max` | Maximum value | Varies*
`min` | Minimum value | Varies*
`maxlength` | Maximum length of value | Valid non-negative integer
`minlength` | Minimum length of value | Valid non-negative integer
`size` | Size of the control | Valid non-negative integer greater than zero
`step` | Granularity to be matched by the form control's value | Valid floating-point number greater than zero, or "any"
`pattern` | Pattern to be matched by the form control's value | Regular expression matching the JavaScript Pattern production
`placeholder` | User-visible label to be placed within the form control | Text*
`alt` | Replacement text for use when images are not available | Text*
`popovertarget` | Targets a popover element to toggle, show, or hide | ID*
`popovertargetaction` | Indicates whether a targeted popover element is to be toggled, shown, or hidden | "toggle"; "show"; "hide"

## 事件

事件属性(Attribute) | 说明(Description) | 事件(Event) | 目标对象(target) | 接口(Interface)
---|---|---|---|---
**`oncancel`** | - | `cancel` | **`input` elements** | Event
`onchange` | - | `change` | **Form controls** | Event
`onselect` | - | `select` | Form controls | Event
`oninvalid` | - | `invalid` | Form controls | Event
`onbeforeinput` | - | `beforeinput` | input  | InputEvent
`oninput` | - | `input` | input | InputEvent
`onblur` | - | `blur` | input | FocusEvent
`onfocus` | - | `focus` | input | FocusEvent
`-` | - | `focusin` | input | FocusEvent
`-` | - | `focusout` | input | FocusEvent

## 参考
