# Emojibase Regex

Install the package.

```
yarn add emojibase-regex
```

Import and use the `RegExp` pattern.

```js
import EMOJI_REGEX from 'emojibase-regex';
import SHORTCODE_REGEX from 'emojibase-regex/shortcode';

`🏰`.match(EMOJI_REGEX);
':castle:'.match(SHORTCODE_REGEX);
```

Please refer to the [official documentation](https://github.com/milesj/emojibase) for more information.
