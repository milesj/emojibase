---
title: Emoticons
---

Emoticons, like shortcodes, are
[maintained and curated](https://github.com/milesj/emojibase/blob/master/packages/generator/src/resources/emoticons.ts)
for integrity and accuracy, seeing as how there are so many variations (`:)` vs `=]` vs `:}`). Do we
support `:` or `=` for eyes? What about `)`, `]`, or `}` for mouths? Or maybe a nose with `-`?

Emojibase solves this with a set of naming guidelines and the ability to generate emoticon
permutations. With this in place, a single emoticon can be defined per emoji, reducing the overall
filesize and maintenance overhead.

> Only western styled emoticons are currently supported.
