# 💥 link

链接元数据

## 场景用例

```html
<!-- HTML 代码 -->
```

## 属性

属性(Attribute) | 说明(Description) | 值(Value)
---|---|---
`href` | Address of the hyperlink | Valid non-empty URL potentially surrounded by spaces
`crossorigin` | How the element handles crossorigin requests | "anonymous"; "use-credentials"
`rel` | Relationship between the document containing the hyperlink and the destination resource | Unordered set of unique space-separated tokens*
`as` | Potential destination for a preload request (for rel="preload" and rel="modulepreload") | Potential destination, for rel="preload"; script-like destination, for rel="modulepreload"
`media` | Applicable media | Valid media query list
`hreflang` | Language of the linked resource | Valid BCP 47 language tag
`type` | Hint for the type of the referenced resource | Valid MIME type string
`sizes` | Sizes of the icons (for rel="icon") | Unordered set of unique space-separated tokens, ASCII case-insensitive, consisting of sizes*
`imagesrcset` | Images to use in different situations, e.g., high-resolution displays, small monitors, etc. (for rel="preload") | Comma-separated list of image candidate strings
`imagesizes` | Image sizes for different page layouts (for rel="preload") | Valid source size list
`referrerpolicy` | Referrer policy for fetches initiated by the element | Referrer policy
`integrity` | Integrity metadata used in Subresource Integrity checks [SRI] | Text
`blocking` | Whether the element is potentially render-blocking | Unordered set of unique space-separated tokens*
`color` | Color to use when customizing a site's icon (for rel="mask-icon") | CSS `<color>`
`disabled` | Whether the link is disabled | Boolean attribute
`fetchpriority` | Sets the priority for fetches initiated by the element | "auto"; "high"; "low"

## 事件

事件(Event) | 说明(Description) | 值(Value) | 接口(Interface)
---|---|---|---
`-` | - | - | -

## 参考
