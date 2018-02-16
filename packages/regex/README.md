# Emojibase Regex

Install the package.

```
yarn add emojibase-regex
```

Import and use the `RegExp` pattern.

```javascript
import EMOJI_REGEX from 'emojibase-regex';
import EMOTICON_REGEX from 'emojibase-regex/emoticon';
import SHORTCODE_REGEX from 'emojibase-regex/shortcode';

`🏰`.match(EMOJI_REGEX);
':)'.match(EMOTICON_REGEX);
':castle:'.match(SHORTCODE_REGEX);
```

Please refer to the [official documentation](https://github.com/milesj/emojibase) for more
information.
