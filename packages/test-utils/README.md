# Emojibase Test Utils

Provides utility functions for testing Emojibase data.

```
npm install emojibase-test-utils --save-dev
// Or
yarn add emojibase-test-utils --dev
```

Use `loadEmojiData` to return an array of English emoji data.

```javascript
import { loadEmojiData } from 'emojibase-test-utils';

loadEmojiData().forEach(emoji => {
  // Do something
});
```

Or use `loadFlatEmojiData` to return a flat array of emoji data (skin modifications are moved to the
root).

```javascript
import { loadFlatEmojiData } from 'emojibase-test-utils';
```
