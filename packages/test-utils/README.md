# Emojibase Test Utils

[![Build Status](https://github.com/milesj/emojibase/workflows/Build/badge.svg)](https://github.com/milesj/emojibase/actions?query=branch%3Amaster)
[![npm version](https://badge.fury.io/js/emojibase-test-utils.svg)](https://www.npmjs.com/package/emojibase-test-utils)
[![npm deps](https://david-dm.org/milesj/emojibase.svg?path=packages/test-utils)](https://www.npmjs.com/package/emojibase-test-utils)

Provides utility functions for testing Emojibase data.

```
yarn add emojibase-test-utils --dev
// Or
npm install emojibase-test-utils --save-dev
```

Use `loadEmojiData` to return an array of English emoji data.

```ts
import { loadEmojiData } from 'emojibase-test-utils';

loadEmojiData().forEach(emoji => {
  // Do something
});
```

Or use `loadFlatEmojiData` to return a flat array of emoji data (skin modifications are moved to the
root).

```ts
import { loadFlatEmojiData } from 'emojibase-test-utils';
```
