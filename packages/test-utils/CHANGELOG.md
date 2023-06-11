> Versions that only update `test-*.json` are omitted from the changelog.

# 8.0.0 - 2023-06-10

#### 🎉 Release

- Updated to [Emoji 15](https://emojipedia.org/emoji-15.0/) and
  [Unicode 15](http://unicode.org/versions/Unicode15.0.0/).
  - 21 new emoji (31 including skin tones variations).
- Updated to [CLDR 42](http://cldr.unicode.org/index/downloads/cldr-42).
- Updated shortcodes.

# 7.0.0 - 2021-10-15

#### 🎉 Release

- Updated to [Emoji 14](https://emojipedia.org/emoji-14.0/) and
  [Unicode 14](http://unicode.org/versions/Unicode14.0.0/).
  - 37 new emoji (117 including skin tones variations).
  - Handshake now supports mixed skin tones.
- Updated to [CLDR 40](http://cldr.unicode.org/index/downloads/cldr-40).
- Updated shortcodes.

#### 💥 Breaking

- Dropped Node.js v10 support. Requires v12.17 and above.
- Renamed the `annotation` field to `label`.
- Renamed `loadMeta` to `loadMessages`.

#### 🚀 Updates

- Updated to [CLDR 40](http://cldr.unicode.org/index/downloads/cldr-40).

### 6.2.1 - 2021-05-13

#### 🐞 Fixes

- Fixed an issue where certain `test-*.json` files were not published.

## 6.2.0 - 2020-01-17

#### 🚀 Updates

- Added `loadMeta` (and `test-meta.json`) for testing meta translations.
- Added `loadShortcodes` (and `test-shortcodes.json`) for testing shortcodes (using `emojibase`
  preset).
- Updated `loadEmojiData` and `loadEmojiData` to join shortcodes when a dataset is provided.

## 6.1.0 - 2020-01-07

#### 🚀 Updates

- Updated to [Emoji 13.1](https://emojipedia.org/emoji-13.1/).
- Updated to [CLDR 38.1](http://cldr.unicode.org/index/downloads/cldr-38).

# 6.0.0 - 2020-09-11

View `emojibase-data` changelog.

# 5.0.0 - 2020-02-13

#### 🎉 Release

- Updated to [Emoji 13](https://emojipedia.org/emoji-13.0/) and
  [Unicode 13](http://unicode.org/versions/Unicode13.0.0/).
  - 67 new emoji (117 including skin tones variations).
  - New groups and subgroups.
- Updated to [CLDR 36.1](http://cldr.unicode.org/index/downloads/cldr-36).
- Updated shortcodes.

## 4.2.0 - 2019-12-09

#### 🚀 Updates

- Updated to [Emoji 12.1](https://emojipedia.org/emoji-12.1/) and
  [Unicode 12.1](http://unicode.org/versions/Unicode12.1.0/).
  - 23 new emoji (not including variants).
  - More gender-neutral options.
  - Red, blonde, and bald hair combinations.

#### 🐞 Fixes

- Fixed an issue where emojis that should be text presentation by default were marked as emoji.

## 4.1.0 - 2019-10-08

#### 🚀 Updates

- Updated to [CLDR 36](http://cldr.unicode.org/index/downloads/cldr-36).

# 4.0.0 - 2019-05-09

#### 🎉 Release

- Updated to [Emoji 12](https://emojipedia.org/emoji-12.0/) and
  [Unicode 12](http://unicode.org/versions/Unicode12.0.0/).
  - Multi-person support, including multi-gender and multi-skin tone.
  - 72 new emoji (230 including skin tones variations).
  - New groups and subgroups.
- Updated to [CLDR 35.1](http://cldr.unicode.org/index/downloads/cldr-35-1).
- Updated shortcodes.

## 3.2.0 - 2019-02-08

#### 🚀 Updates

- Added ECMAScript module support via `esm/` built files.
- Removed docblocks from source files to reduce bundle size.

## 3.1.0 - 2018-10-20

#### 🚀 Updates

- Updated to [CLDR 34](http://cldr.unicode.org/index/downloads/cldr-34).

# 3.0.0 - 2018-06-23

#### 🎉 Release

- Updated to [Emoji 11](https://emojipedia.org/emoji-11.0/) and
  [Unicode 11](http://unicode.org/versions/Unicode11.0.0/).
  - 77 new emoji (157 including skin tones variations).
  - 4 new components (bald, curly hair, red hair, white hair).
- Updated to [CLDR 33.1](http://cldr.unicode.org/index/downloads/cldr-33-1).
  - Tons of new annotations and keywords.
- Updated shortcodes.

## 2.3.0 - 2018-05-22

#### 🚀 Updates

- Updated to [CLDR 33](http://cldr.unicode.org/index/downloads/cldr-33).

#### 🛠 Internals

- Converted from Flow to TypeScript.

# 2.0.0 - 2017-09-14

#### 🛠 Internals

- Updated test data ([view breaking changes](../data/CHANGELOG.md)).

### 1.0.7 - 2017-09-10

#### 🛠 Internals

- Updated to Yarn workspaces.

### 1.0.2 - 2017-08-19

#### 🐞 Fixes

- Removed tests from distribution files.

### 1.0.1 - 2017-08-18

#### 🐞 Fixes

- Fixed Flowtype definitions.

# 1.0.0 - 2017-08-17

#### 🎉 Release

- Initial release!
