# Shortcodes

Shortcodes are short and succinct words, surrounded by colons, representing emoji (`:cat:`). They're
primarily used within forums, comments, message posts, and basically anywhere with user-to-user
communication. They exist for situations where an emoji keyboard is not present, but emoji
characters should be supported.

That being said, shortcodes are not officially supported by Unicode or any standard, and are
entirely community driven. Because of this, shortcodes (also known as shortnames), may differ
between implementations, websites, or libraries.

Emojibase aims to solve this problem with a [maintained and curated list of shortcodes][scodes] that
abide the following guidelines:

* Must be short and succinct. Easy to type, easy to remember. This infers a small filesize.
* Must be consistent across locales and languages by utilizing English shortcodes. It's a language
  common amongst supported locales.
* Must use descriptive nouns over verbose phrases. For example, "storm" over "cloud with lightning
  and rain".
* Must use emotions when describing smileys. For example, "happy" over "smiling face with open mouth
  & smiling eyes".
* Must keep backwards compatibility and historical integrity by never removing and renaming
  shortcodes.
* Must support multiple shortcodes per emoji character, for usage within different contexts.
* Must align with or base off [CLDR 32][cldr] annotations.

[cldr]: http://cldr.unicode.org/index/downloads/cldr-32
[scodes]: https://github.com/milesj/emojibase/blob/master/packages/generator/src/resources/shortcodes.ts
