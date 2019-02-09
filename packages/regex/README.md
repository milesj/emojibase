# Emojibase Regex

[![Build Status](https://travis-ci.org/milesj/emojibase.svg?branch=master)](https://travis-ci.org/milesj/emojibase)
[![npm version](https://badge.fury.io/js/emojibase-regex.svg)](https://www.npmjs.com/package/emojibase-regex)
[![npm deps](https://david-dm.org/milesj/emojibase.svg?path=packages/regex)](https://www.npmjs.com/package/emojibase-regex)

Install the package.

```
yarn add emojibase-regex
```

Import and use the `RegExp` pattern.

```ts
import EMOJI_REGEX from 'emojibase-regex';
import EMOTICON_REGEX from 'emojibase-regex/emoticon';
import SHORTCODE_REGEX from 'emojibase-regex/shortcode';

`🏰`.match(EMOJI_REGEX);
':)'.match(EMOTICON_REGEX);
':castle:'.match(SHORTCODE_REGEX);
```

Please refer to the [official documentation](https://github.com/milesj/emojibase) for more
information.
