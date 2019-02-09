# 2.2.0 - 2019-02-08

#### 🚀 New

- Added ECMAScript module support via `esm/` built files.
- Removed docblocks from source files to reduce bundle size.

#### 🐞 Fixed

- Fixed a bug where an invalid cache would error trying to parse JSON.

#### 🛠 Internal

- Dependency updates.

# 2.1.0 - 2018-10-20

#### 🚀 New

- Updated to [CLDR 34](http://cldr.unicode.org/index/downloads/cldr-34).

# 2.0.0 - 2018-06-23

#### 🎉 Release

- Updated to [Emoji 11](https://emojipedia.org/emoji-11.0/) and
  [Unicode 11](http://unicode.org/versions/Unicode11.0.0/).
  - 77 new emoji (157 including skin tones variations).
  - 4 new components (bald, curly hair, red hair, white hair).
- Updated to [CLDR 33.1](http://cldr.unicode.org/index/downloads/cldr-33-1).
  - Tons of new annotations and keywords.
- Updated shortcodes.

#### 🚀 New

- Added support for the following locales:
  - `nl` - Dutch
  - `ms` - Malay
  - `sv` - Swedish
- Added `CompactEmoji`, `GroupDataset`, and `VersionDataset` types.
- Updated `Emoji` type with correct optional/required properties.

#### 🛠 Internal

- Updated `LATEST_EMOJI_VERSION` to `11.0`.
- Updated `LATEST_UNICODE_VERSION` to `11.0.0`.
- Updated `LATEST_CLDR_VERSION` to `33.1`.

# 1.7.1 - 2018-05-29

#### 🛠 Internal

- Updated constants to use inferred types instead of explicity types.

# 1.7.0 - 2018-05-28

#### 🚀 New

- Added `Group`, `GroupKey`, `SkinToneKey`, and `Subgroup` types.
- Added `GROUP_KEY_*` and `SKIN_KEY_*` constants for the types mentioned previously.
- Updated the index to export all constants.

# 1.6.0 - 2018-05-22

#### 🚀 New

- Updated to [CLDR 33](http://cldr.unicode.org/index/downloads/cldr-33).

#### 🛠 Internal

- Converted from Flow to TypeScript.

# 1.5.0 - 2018-01-10

#### 🚀 New

- Added support for the following locales:
  - `en-gb` - English (Great Britain)
  - `es-mx` - Spanish (Mexico)
  - `pl` - Polish
  - `pt` - Portuguese
  - `th` - Thai
  - `zh-hant` - Chinese (Traditional)
- Added `local` option to `fetchFromCDN` to cache in local storage instead of session storage.

# 1.4.4 - 2017-12-19

#### 🛠 Internal

- Updated dependencies.

# 1.4.3 - 2017-11-10

#### 🛠 Internal

- Updated `LATEST_CLDR_VERSION` to `32`.

# 1.4.2 - 2017-10-10

#### 🛠 Internal

- Updated `LATEST_CLDR_VERSION` to `32-beta`.

# 1.4.1 - 2017-09-25

#### 🐞 Fixed

- Updated `Emoji.version` Flowtype property to `number`.

#### 🛠 Internal

- Updated `LATEST_CLDR_VERSION` to `32-alpha`.

# 1.4.0 - 2017-09-14

#### 🚀 New

- Added optional `unicode` and `version` properties to `Emoji` type.
- Added more constants to `lib/constants` type definition.

# 1.3.2 - 2017-09-10

#### 🐞 Fixed

- Updated `Emoji` type to use less optional properties.
- Added missing `tone` property to `Emoji` type.

#### 🛠 Internal

- Updated to Yarn workspaces.

# 1.3.1 - 2017-09-05

#### 🛠 Internal

- Updated dependencies.

# 1.3.0 - 2017-08-22

#### 🚀 New

- Added an options object to `generateEmoticonPermutations`.
  - Pass `isFace` to toggle face specific permutations (mouth, eyes, etc).
  - Pass `withNose` to toggle nose specific permutations.
- Added `EMOTICON_OPTIONS` constant, which defines custom options for specific emoticon
  permutations.

# 1.2.2 - 2017-08-21

#### 🚀 New

- Added new ogre emoticon `0)`.
- Updated mage emoticon to `:{>`.

# 1.2.1 - 2017-08-19

#### 🐞 Fixed

- Fixed a bug with session storage caching an invalid dataset.

# 1.2.0 - 2017-08-19

#### 🚀 New

- Updated `fetchFromCDN` to cache responses in session storage.

#### 🐞 Fixed

- Removed tests from distribution files.

# 1.1.0 - 2017-08-18

#### 🚀 New

- Added new `stripHexcode` function to the `emojibase` package.

#### 🐞 Fixed

- Fixed Flowtype definitions.

# 1.0.0 - 2017-08-17

#### 🎉 Release

- Much has changed so take a look at the [migration guide](../../MIGRATING_TO_V1.md).

#### 💥 Breaking

- Moved helper functions to the `emojibase` package.
- Moved datasets to the `emojibase-data` package.
- Moved regex patterns to the `emojibase-regex` package.
- Refactored the emoji data structures.
- Removed dataset formats.

#### 🚀 New

- `emojibase`
  - Added new `fromCodepointToUnicode` function.
  - Added new `generateEmoticonPermutations` function.
  - Renamed `fromHexToCodepoint` to `fromHexcodeToCodepoint`.
  - Renamed `fromUnicodeToHex` to `fromUnicodeToHexcode`.
- `emojibase-data`
  - Added localization support.
- `emojibase-regex`
  - Added Unicode property support.
  - Added new emoticon regex pattern.

#### 🛠 Internal

- Emojibase now generates its data directly from the official Unicode data files.

# 0.12.0 - 2017-07-29

- New release under the new `emojibase` name.
- Updated `fetchFromCDN` to fetch from `emojibase` instead of `emoji-database`.

# 0.11.0 - 2017-07-29

- Renamed to `emojibase`. Please update your dependencies!
- Moved `emoji-database.js.flow` to `emojibase.js.flow`.

# 0.10.0 - 2017-07-21

- Added new function, `fetchFromCDN`, which fetches JSON data from jsdelivr.com.

# 0.9.0 - 2017-07-12

- Updated `emojione` to 3.1.
- Added ECMA2015+ unicode aware regex patterns. Located in the `regex/es` folder.

# 0.8.0 - 2017-06-23

- Fixed IE 10 compiled lib/ issues.
- Updated `tags` to inherit from the new `unicode-emoji-annotations` dependency.

# 0.7.0 - 2017-06-16

- Reverted change that removed ability to import modules.
  - Both `fromHexToCodepoint` and `fromUnicodeToHex` are now importable from the index.
- Removed console warning when importing the index file.

# 0.6.0 - 2017-06-16

- Moved all `dependencies` into `devDependencies`.
- Removed the ability to import `emoji-database` modules and files.
- Removed lib/ and src/ files from the published package.
- Fixed Flowtype definitions.

# 0.5.0 - 2017-06-03

- Fixed a bug in which variation selectors were not included in the regex patterns.
- Updated `regex/index` to match both emoji and text presentation characters.
- Updated the `unicode` property to the default presentation unicode character.
- Added new `regex/emoji` and `regex/text` patterns respectively.
- Added new `emoji` and `text` properties to the expanded format.
- Removed `unicode` from the expanded format.

# 0.4.0 - 2017-05-09

- Updated `unicode-emoji-data` to 3.0.0.
- Updated to include src/ files in the published package.
- Updated Flowtype definitions.
- Moved Flowtype definition to root of project.
- Moved bin/ files to the src/ folder.
- Removed beta support from `packageData`.

# 0.3.0 - 2017-05-07

- Updated default category to `other`.
- Added new regex pattern constants.

# 0.2.0 - 2017-04-29

- Moved format datasets into folders.
- Updated expanded format to no longer merge with `unicode-emoji-data`.
- Updated and sorted all datasets in ascending `order`.
- Added `order`, `display`, `skin`, and `gender` properties to the expanded format.
- Removed `hexcodeZWJ` from the expanded format.
- Renamed `keywords` to `tags`.
- Replaced spaces in tags with dashes.
- Replaced diacritics in tags with alphanumeric characters.

# 0.1.0 - 2017-04-21

- Initial release.
