---
title: TypeScript support
---

Emojibase is written in TypeScript, so feel free to utilize our types! All types are available as
named imports from the index of `emojibase`! [View the available types in the API](/api/emojibase).

```ts
import { Emoji, Emoticon, Shortcode } from 'emojibase';
```

The 2 most important types are `Emoji` and `CompactEmoji`, which represent the `data.json` and
`compact.json` dataset structures.
