---
'emojibase': patch
---

Fix the types failing to compile without the DOM library, such as in Node.js, because
`FetchFromCDNOptions` extends `RequestInit`.
