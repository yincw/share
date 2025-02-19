# Web 安全

分类 | Hooks | Classes
---|---|---
`\-` | - | -

TODO

- 严格模式-安全检查
- dangerouslySetInnerHTML

## 大纲

- Web 安全
  - 分析
    - 客户端安全
    - 服务端安全
  - 优化与预防
    - 逻辑优化
    - 资源安全
    - 资源加载
    - 网络分发
  - 监控与运维
    - 服务器监控
    - 安全漏洞月报

## 分析

### 客户端安全

- XSS：Cross-site scripting 跨站脚本攻击
  - 注入HTML dangerouslySetInnerHTML
    - 内容转义
- 点击欺诈（劫持）
  - 注入URL
  - 注入样式（Style）
  - 注入JavaScript
- CSRF：Cross-Site Request Forgery 跨站请求伪造攻击
  - token
  - [CSP：Content-Security-Policy](https://yr7ywq.smartapps.baidu.com/?_chatQuery=content-security-policy%20%E9%85%8D%E7%BD%AE&searchid=14067256266618756136&_chatParams=%7B%22agent_id%22%3A%22c816%22%2C%22content_build_id%22%3A%225e9d8a1%22%2C%22from%22%3A%22q2c%22%2C%22token%22%3A%22UGlGZHdpN0lzYXNVbS9Gb1JoeVNNWXRmOGI3Q0R2VFNVZlJSWlMzOW9SSXBUc21PWXBoR2VDai85ZmlqSnJpNmo3UUU5Y0IvbHd6dXZaUUszY3NUbGF6N2owRWZwZWJzWDVNbDRrNnJNM0t0MjFlOXRweGpFY3Nkcm5tUHVDQWcyYURmdWhCNExJQnJ1djFWOU9XYXhRPT0%3D%22%2C%22chat_no_login%22%3Atrue%7D&_swebScene=3711000610001000)

### 服务端安全

- https://developer.mozilla.org/en-US/blog/mdn-http-observatory-launch/
- https://developer.mozilla.org/en-US/blog/securing-cdn-using-sri-why-how/

- https://vuejs.org/guide/best-practices/security#security
- https://v2.cn.vuejs.org/v2/guide/security.html
- https://doc.nette.org/en/glossary#toc-cross-site-scripting-xss
  - https://mp.weixin.qq.com/s/DC96hJt9bxd9RAuD3QJjDg
- https://doc.nette.org/en/glossary#toc-cross-site-request-forgery-csrf
- https://owasp.org/Top10/zh_CN/
  - https://owasp.org/www-project-top-ten/2017/Top_10
  - https://wiki.owasp.org/images/d/dc/OWASP_Top_10_2017_%E4%B8%AD%E6%96%87%E7%89%88v1.3.pdf
- https://owasp.org/www-project-top-ten/
- https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
- https://html5sec.org/
- https://www.techug.com/post/javascript-antidebugging/
  
## 策略设计

- 逻辑优化
- 资源安全
- 资源加载
- 网络分发

## 优化与预防

- 逻辑优化
  - 安全扫描
  - 敏感数据加密传输（用户名/密码/角色...）
- 资源安全
  - 防反编译
    - 源码加固（混淆）
  - 反调试
- 资源加载
  - 跨域安全
    - 域名白名单
  - 接口数据安全
    - token
  - iframe 安全（HTTP 安全头）
- 网络分发
  - HTTPS

## 监控与运维

- 服务器监控
- 安全漏洞月报
