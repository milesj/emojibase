# Regex Patterns

Matching emoji characters within a string can be difficult, as multiple codepoints, surrogate pairs,
variation selectors, zero width joiners, so on and so forth, must be taken into account. To make
this whole process easier, pre-built regex patterns are available in the `emojibase-regex` package.

```
yarn add emojibase-regex
// Or
npm install emojibase-regex --save
```

## Usage

As stated, there are 5 regex patterns. One for matching emoji presentation characters, one for
matching text presentation characters, one for matching both types of characters, and the last for
matching shortcodes or emoticons.

* `emojibase-regex` - Matches both emoji and text presentation characters.
* `emojibase-regex/emoji` - Matches only emoji presentation characters.
* `emojibase-regex/text` - Matches only text presentation characters.
* `emojibase-regex/emoticon` - Matches supported emoticons and their permutations.
* `emojibase-regex/shortcode` - Matches supported shortcodes.

Each of these imports return a `RegExp` instance with no flags defined.

```javascript
import EMOJI_REGEX from 'emojibase-regex';
import EMOTICON_REGEX from 'emojibase-regex/emoticon';
import SHORTCODE_REGEX from 'emojibase-regex/shortcode';

`🙂`.match(EMOJI_REGEX);
':)'.match(EMOTICON_REGEX);
':pleased:'.match(SHORTCODE_REGEX);
```

> The `u` (unicode) and `g` (global) flags are not defined on these patterns.

> The emoticon regex does not include word boundaries.

## Unicode Codepoint Support

By default, regex patterns are generated using hexadecimal Unicode ranges. If desired, ES2015+
Unicode codepoint aware regex patterns can be used, which can be found in the `codepoint` directory.

```javascript
import CODEPOINT_EMOJI_REGEX from 'emojibase-regex/codepoint';
```

> Codepoint regex patterns are only supported in Node.js and modern browsers.

> The `u` (unicode) flag is required (defined by default) when using these patterns.

## Unicode Property Support

An [ECMAScript proposal](https://github.com/tc39/proposal-regexp-unicode-property-escapes) to
support Unicode property escapes within regex is currently in the works. This proposal, if passed,
would enable regex patterns like the following: `/\p{Emoji}/`. This feature would greatly reduce the
filesize of our regex patterns while being more accurate to the Unicode standard.

These patterns can be found in the `property` directory, but use at your own risk!

```javascript
import PROPERTY_EMOJI_REGEX from 'emojibase-regex/property';
```

## Filesizes

| File               | Size    | Gzipped |
| ------------------ | ------- | ------- |
| shortcode.js       | 35 B    | 55 B    |
| property/text.js   | 37 B    | 57 B    |
| property/emoji.js  | 102 B   | 92 B    |
| property/index.js  | 114 B   | 101 B   |
| emoticon.js        | 440 B   | 243 B   |
| text.js            | 2.91 KB | 626 B   |
| codepoint/text.js  | 3.59 KB | 660 B   |
| emoji.js           | 6.83 KB | 1.63 KB |
| index.js           | 6.84 KB | 1.63 KB |
| codepoint/emoji.js | 7.62 KB | 1.65 KB |
| codepoint/index.js | 7.64 KB | 1.65 KB |
