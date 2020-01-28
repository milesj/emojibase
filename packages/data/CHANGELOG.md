### 4.2.1 - 2020-01-27

#### 🐞 Fixes

- Added missing annotations to multi-person skin tones.
- Added `sweat_smile` shortcode.

## 4.2.0 - 2019-12-09

#### 🚀 Updates

- Updated to [Emoji 12.1](https://emojipedia.org/emoji-12.1/) and
  [Unicode 12.1](http://unicode.org/versions/Unicode12.1.0/).
  - 23 new emoji (not including variants).
  - More gender-neutral options.
  - Red, blonde, and bald hair combinations.

#### 🐞 Fixes

- Fixed an issue where emojis that should be text presentation by default were not.

## 4.1.0 - 2019-10-08

#### 🚀 Updates

- Updated to [CLDR 36](http://cldr.unicode.org/index/downloads/cldr-36).

### 4.0.2 - 2019-08-27

#### 🐞 Fixes

- **[TS]** Updated `CompactEmoji.tags` type to be optional.

### 4.0.1 - 2019-07-27

#### 🐞 Fixes

- Updated `:anxious:` shortcode from 😊 to 😰.

# 4.0.0 - 2019-05-09

#### 🎉 Release

- Updated to [Emoji 12](https://emojipedia.org/emoji-12.0/) and
  [Unicode 12](http://unicode.org/versions/Unicode12.0.0/).
  - Multi-person support, including multi-gender and multi-skin tone.
  - 72 new emoji (230 including skin tones variations).
  - New groups and subgroups.
- Updated to [CLDR 35.1](http://cldr.unicode.org/index/downloads/cldr-35-1).
- Updated shortcodes.

#### 💥 Breaking

- Skin tone and component emojis are now included in the dataset, instead of being omitted.
- `Emoji.tone` is now a number (skin tone) or an array of numbers (multi-person skin tones).
- `Emoji.skins` may now contain more than 5 variations, as multi-person is included.

## 3.2.0 - 2018-10-20

#### 🚀 Updates

- Updated to [CLDR 34](http://cldr.unicode.org/index/downloads/cldr-34).

## 3.1.0 - 2018-08-02

#### 🚀 Updates

- Datasets are now minified for a much smaller filesize.

# 3.0.0 - 2018-06-23

#### 🎉 Release

- Updated to [Emoji 11](https://emojipedia.org/emoji-11.0/) and
  [Unicode 11](http://unicode.org/versions/Unicode11.0.0/).
  - 77 new emoji (157 including skin tones variations).
  - 4 new components (bald, curly hair, red hair, white hair).
- Updated to [CLDR 33.1](http://cldr.unicode.org/index/downloads/cldr-33-1).
  - Tons of new annotations and keywords.
- Updated shortcodes.

#### 🚀 Updates

- Added support for the following locales:
  - `nl` - Dutch
  - `ms` - Malay
  - `sv` - Swedish
- Updated `*/compact.json` datasets to use the new `CompactEmoji` type.
- Updated `meta/groups.json` dataset to use the new `GroupDataset` type.
- Updated `versions/*json` datasets to use the new `VersionDataset` type.

## 2.3.0 - 2018-05-22

#### 🚀 Updates

- Updated to [CLDR 33](http://cldr.unicode.org/index/downloads/cldr-33).

#### 🛠 Internals

- Converted from Flow to TypeScript.

## 2.2.0 - 2018-01-10

#### 🚀 Updates

- Added support for the following locales:
  - `en-gb` - English (Great Britain)
  - `es-mx` - Spanish (Mexico)
  - `pl` - Polish
  - `pt` - Portuguese
  - `th` - Thai
  - `zh-hant` - Chinese (Traditional)

#### 🐞 Fixes

- Fixed some issues with localized annotation resolving.
- Added missing `annotation` and `tags` to 🔟.

### 2.1.2 - 2017-12-19

#### 🐞 Fixes

- Fixed invalid `subgroup` indices.

### 2.1.1 - 2017-11-10

#### 🚀 Updates

- Updated to [CLDR 32](http://cldr.unicode.org/index/downloads/cldr-32).

## 2.1.0 - 2017-09-25

#### 🚀 Updates

- Updated to [CLDR 32 Beta](http://cldr.unicode.org/index/downloads/cldr-32) which includes new
  annotations and tags for all locales.
- Updated to use derived annotations, which includes official translations for emoji modifiers and
  sequences.

# 2.0.0 - 2017-09-14

#### 💥 Breaking

- Removed `emoji` from compact datasets.

#### 🚀 Updates

- Added `unicode` to compact datasets, which is the value of `emoji` or `text`, depending on the
  default presentation of `type`.
- Added `version` to full datasets, which is the version in which the emoji was released.

### 1.1.1 - 2017-09-10

#### 🛠 Internals

- Updated to Yarn workspaces.

## 1.1.0 - 2017-09-05

#### 🚀 Updates

- Updated ZWJ sequence annotations to more closely follow the CLDR guidelines.
  - Kiss emojis are now prefixed with localized "kiss:" messages.
  - Couple emojis are now prefixed with localized "couple with heart:" messages.
  - Family emojis are now prefixed with localized "family:" messages.
  - Gender emojis are now prefixed with localized "man" or "woman" messages.
- Added annotations for keycap sequences.

#### 🐞 Fixes

- Gender annotations will now use "man" or "woman" instead of "male sign" or "female sign".
- Missing annotations will now fallback to the english annotation if available.

### 1.0.4 - 2017-08-22

#### 🛠 Internals

- Updated mage emoticon to `:{>`.
- Moved mage emoticon to 🧙‍♂️ (`1F9D9-200D-2642-FE0F`).

### 1.0.3 - 2017-08-21

#### 🛠 Internals

- Updated changelogs.

### 1.0.2 - 2017-08-19

#### 🐞 Fixes

- Removed tests from distribution files.

### 1.0.1 - 2017-08-18

#### 🐞 Fixes

- Fixed Flowtype definitions.

# 1.0.0 - 2017-08-17

#### 🎉 Release

- Initial release!
