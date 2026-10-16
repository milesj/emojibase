# Change Log

## 18.0.0

### Major Changes

- 8527c93: Update to Emoji v18 and CLDR 49 (beta 1), following UTS #51 revision 31. Adds 9 emoji (🫫 🫹 🫺 🫌 🫝 🛙 🪋
  🪌 🪍), with skin tones for the two thumb signs, and their localized labels and keywords.
- 789b533: Require Node.js 20 or newer. Packages are now built with tsdown instead of Packemon, which targets
  modern syntax and bundles type declarations into a single `index.d.ts` file. Package entry points
  are unchanged.

### Minor Changes

- 06b8716: Align presentation and qualification with UTS #51:
  
  - The `emoji` field is now the fully-qualified form from `emoji-test.txt`. 152 emoji that default to
    emoji presentation, like 👍 and ⌚, no longer have a redundant `FE0F`.
  - `meta/hexcodes.json` now lists statuses exactly as `emoji-test.txt` does. Text presentation
    sequences (`FE0E`) and redundant `FE0F` forms are no longer listed as fully qualified, and the
    skin tone and hair components are listed with the new `COMPONENT` qualifier.
  - The `emojibase-regex/emoji` pattern now matches default-emoji characters without `FE0F`.
- 29b2c8a: Export `SHORTCODE_PRESETS`, the list of every shortcode preset, including the `discord` and `slack`
  aliases.

### Patch Changes

- 06b8716: Resolve CLDR annotations as UTS #35 describes:
  
  - Locales inherit from their real CLDR parents. `en-gb` now uses `en-001` (129 labels, such as "tick
    box with tick"), and `es-mx` uses `es-419` (450 labels, such as "lentes de sol").
  - Labels and keywords inherit separately, so 9 `es-mx` emoji regain their keywords.
  - Flags and keycaps without a CLDR label are named in the locale's own words, which fixes all 262
    Danish flags ("flag: USA") and their `cldr` shortcodes.
  - Keywords keep their CLDR casing in every locale (German nouns, "OK", "DVD"). A keyword identical
    to the label is now reliably left out of `tags`.
  - Fix the Hindi label for regional indicators, which was in Bengali.
- 789b533: Update dependencies to their latest versions, including TypeScript 6.0. The generator now requires
  Node.js 22 or newer.
- 29b2c8a: Fix the types failing to compile without the DOM library, such as in Node.js, because
  `FetchFromCDNOptions` extends `RequestInit`.

## 17.0.0

### Major Changes

- 806c507: Update to Emoji v17 and CLDR 48.

## 16.0.0

### Major Changes

- e9b9a9a: Add `vi` (Vietnamese) language.
- d237386: Update to Emoji v16 and CLDR 46.
- d237386: Drop Node.js v16 support. Requires >= v18.12.

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## <small>15.3.1 (2024-06-03)</small>

- new: Support CLDR 45 (new annotations). (#173)
  ([d2c587f](https://github.com/milesj/emojibase/commit/d2c587f)), closes
  [#173](https://github.com/milesj/emojibase/issues/173)
- deps: Update dev and test dependencies.
  ([57e8f02](https://github.com/milesj/emojibase/commit/57e8f02))
- deps(lerna): Update to v8.1. ([2f3d1fe](https://github.com/milesj/emojibase/commit/2f3d1fe))
- deps(typescript): Update to v5.4. ([8756294](https://github.com/milesj/emojibase/commit/8756294))

## 15.3.0 - 2023-12-03

#### 🚀 Updates

- Support Emoji v15.1. (#164) ([b2e0ec6](https://github.com/milesj/emojibase/commit/b2e0ec6)),
  closes [#164](https://github.com/milesj/emojibase/issues/164)

**Note:** Version bump only for package emojibase

## 15.2.0 - 2023-10-06

#### 🚀 Updates

- Add hi (Hindi) language. (#165) ([ada3784](https://github.com/milesj/emojibase/commit/ada3784)),
  closes [#165](https://github.com/milesj/emojibase/issues/165)

**Note:** Version bump only for package emojibase

## 15.1.0 - 2023-10-03

#### 🚀 Updates

- Add `bn` (Bengali) language. (#161)
  ([84ea37c](https://github.com/milesj/emojibase/commit/84ea37c)), closes
  [#161](https://github.com/milesj/emojibase/issues/161)
- Support CLDR 43. (#163) ([1094148](https://github.com/milesj/emojibase/commit/1094148)), closes
  [#163](https://github.com/milesj/emojibase/issues/163)

**Note:** Version bump only for package emojibase

# 15.0.0 - 2023-06-11

#### 🎉 Release

- Support emoji v15! (#146) ([55286b1](https://github.com/milesj/emojibase/commit/55286b1)), closes
  [#146](https://github.com/milesj/emojibase/issues/146)

#### 💥 Breaking

- Align emojibase version with spec. ([614dda2](https://github.com/milesj/emojibase/commit/614dda2))

#### 📦 Dependencies

- **[beemo-dev]** Update to latest configs.
  ([c54d071](https://github.com/milesj/emojibase/commit/c54d071))
- **[packemon]** Update to v3. ([ecc31da](https://github.com/milesj/emojibase/commit/ecc31da))
- Update dev and test dependencies. ([57b5f18](https://github.com/milesj/emojibase/commit/57b5f18))

#### 🛠 Internals

- Migrate from beemo to moon. (#144)
  ([0607d6e](https://github.com/milesj/emojibase/commit/0607d6e)), closes
  [#144](https://github.com/milesj/emojibase/issues/144)

**Note:** Version bump only for package emojibase

# 15.0.0 - 2023-06-10

#### 🎉 Release

- Emojibase versions will now align with the emoji/unicode versions.
- Updated to [Emoji 15.0](https://emojipedia.org/emoji-15.0/).
- Updated to [CLDR 42](http://cldr.unicode.org/index/downloads/cldr-42).

#### 🛠 Internals

- Migrated to moon configurations.
- Updated `LATEST_EMOJI_VERSION` to `15.0`.
- Updated `LATEST_CLDR_VERSION` to `42`.

### 6.1.0 - 2021-12-19

#### 🚀 Updates

- Add `cdnUrl` option for fetchers.

#### 🐞 Fixes

- Updated `LATEST_CLDR_VERSION` to `40`.

### 6.0.1 - 2021-10-15

#### 🐞 Fixes

- Updated `EMOJI_VERSIONS` and `UNICODE_VERSIONS` to include v14.

### 6.0.1 - 2021-10-15

#### 🐞 Fixes

- Resolved some build and bundler issues.

# 6.0.0 - 2021-10-15

#### 💥 Breaking

- Dropped IE 11 support. Modern browsers now required.
- Renamed the `annotation` field to `label`.
- Renamed `fetchMetadata` to `fetchMessages`.
- Removed the `NON_LATIN_LOCALES` constant.
- Removed UMD build and removed `browser` entry in package.

#### 🚀 Updates

- Updated to [Emoji 14.0](https://emojipedia.org/emoji-14.0/).
- Updated to [CLDR 40](http://cldr.unicode.org/index/downloads/cldr-40).
- Updated `fetchShortcodes` to no longer return an empty response for `cldr-native` and invalid
  locales.
- Added `FULLY_QUALIFIED`, `MINIMALLY_QUALIFIED`, and `UNQUALIFIED` constants.

#### 🛠 Internals

- Migrated to Beemo configurations.
- Updated `LATEST_EMOJI_VERSION` to `14.0`.
- Updated `LATEST_CLDR_VERSION` to `40-beta3`.

## 5.2.0 - 2021-05-13

#### 🚀 Updates

- Updated to [CLDR 39](http://cldr.unicode.org/index/downloads/cldr-39).

### 5.1.1 - 2021-03-07

#### 🐞 Fixes

- Include source folder for source maps to work correctly.

## 5.1.0 - 2020-01-07

#### 🚀 Updates

- Added `fetchMetadata` function to easily fetch emoji translations.
- Updated to [Emoji 13.1](https://emojipedia.org/emoji-13.1/).
- Updated to [CLDR 38.1](http://cldr.unicode.org/index/downloads/cldr-38).

#### 🛠 Internals

- Updated `LATEST_EMOJI_VERSION` to `13.1`.
- Updated `LATEST_CLDR_VERSION` to `38.1`.

# 5.0.0 - 2020-09-11

To better support shortcodes moving forward, we have rewritten their implementation. We now support
translated shortcodes for all languages, and shortcode presets for common platforms like GitHub and
Slack.

#### 💥 Breaking

- Moved version argument in `fetchFromCDN` into the options object.
- Rewrote the shortcodes implementation.
- Removed `name` field from emoji.
- Updated `group`, `subgroup`, and `order` fields to be undefined/missing for certain emoji, which
  denotes no categorization.

#### 🚀 Updates

- Added `fetchEmojis` function to easily fetch emojis + shortcodes from the CDN.
  - Can load compact datasets.
  - Can load and join multiple shortcode presets.
  - Can flatten the dataset (merge skin tones into root).
- Added `fetchShortcodes` function to fetch shortcodes from the CDN.
- Added `joinShortcodes` and `joinShortcodesToEmoji` functions to handle the merging of shortcode
  presets into emojis.
- Added `NON_LATIN_LOCALES` constant, which is a list of non-latin locales.
- Updated `flattenEmojiData` to handle joining of shortcode presets.

#### ⚙️ Types

- Added `Locale` type.
- Added `FlatEmoji` type.
- Added `FlatCompactEmoji` type.
- Added `ShortcodePreset` type.
- [**Emoji,CompactEmoji**] Updated `group`, `subgroup`, and `order` fields to be optional.
- [**Emoji**] Removed `name` field.

### 4.1.1 - 2020-08-05

#### 🐞 Fixes

- Fixed some build issues.

## 4.1.0 - 2020-08-05

#### 🚀 Updates

- Added `UNICODE_VERSIONS` constant.
- Updated to [CLDR 37](http://cldr.unicode.org/index/downloads/cldr-37).

#### 🛠 Internals

- Updated `LATEST_CLDR_VERSION` to `37`.

# 4.0.0 - 2020-03-13

#### 🎉 Release

- Updated to [Emoji 13](https://emojipedia.org/emoji-13.0/) and
  [Unicode 13](http://unicode.org/versions/Unicode13.0.0/).
  - 67 new emoji (117 including skin tones variations).
  - New groups and subgroups.
- Updated to [CLDR 36.1](http://cldr.unicode.org/index/downloads/cldr-36).
- Updated shortcodes.

#### 🛠 Internals

- Updated `LATEST_EMOJI_VERSION` to `13.0`.
- Updated `LATEST_UNICODE_VERSION` to `13.0.0`.
- Updated `LATEST_CLDR_VERSION` to `36.1`.

## 3.2.0 - 2019-12-09

#### 🚀 Updates

- Updated to [Emoji 12.1](https://emojipedia.org/emoji-12.1/) and
  [Unicode 12.1](http://unicode.org/versions/Unicode12.1.0/).
  - 23 new emoji (not including variants).
  - More gender-neutral options.
  - Red, blonde, and bald hair combinations.
- Updated `LATEST_EMOJI_VERSION` to `12.1`.
- Updated `LATEST_UNICODE_VERSION` to `12.1.0`.
- Added `EMOJI_VERSIONS` constant.

#### 🐞 Fixes

- Fixed an issue where emojis that should be text presentation by default were not.

## 3.1.0 - 2019-10-08

#### 🚀 Updates

- Updated to [CLDR 36](http://cldr.unicode.org/index/downloads/cldr-36).

### 3.0.1 - 2019-07-27

#### 🛠 Internals

- **[TS]** Refined types. Replaced `any` with `unknown`.

# 3.0.0 - 2019-05-09

#### 🎉 Release

- Updated to [Emoji 12](https://emojipedia.org/emoji-12.0/) and
  [Unicode 12](http://unicode.org/versions/Unicode12.0.0/).
  - Multi-person support, including multi-gender and multi-skin tone.
  - 72 new emoji (230 including skin tones variations).
  - New groups and subgroups.
- Updated to [CLDR 35.1](http://cldr.unicode.org/index/downloads/cldr-35-1).
- Updated shortcodes.

#### 💥 Breaking

- Updated IE requirement to v11.
- Skin tone and component emojis are now included in the dataset, instead of being omitted.
- `Emoji.tone` is now a number (skin tone) or an array of numbers (multi-person skin tones).
- `Emoji.skins` may now contain more than 5 variations (multi-person is included).
- Renamed `GROUP_KEY_SMILEYS_PEOPLE` to `GROUP_KEY_SMILEYS_EMOTION`.

#### 🚀 Updates

- Added `GROUP_KEY_PEOPLE_BODY` and `GROUP_KEY_COMPONENT` group constants.
- **[TS]** Added `GenderKey`, `PresentationKey`, and `SubgroupKey` types.
- **[TS]** Updated `GroupKey` with the new group names.

#### 🛠 Internals

- Updated `LATEST_EMOJI_VERSION` to `12.0`.
- Updated `LATEST_UNICODE_VERSION` to `12.0.0`.
- Updated `LATEST_CLDR_VERSION` to `35.1`.
- **[TS]** Switched to project references.

## 2.2.0 - 2019-02-08

#### 🚀 Updates

- Added ECMAScript module support via `esm/` built files.
- Removed docblocks from source files to reduce bundle size.

#### 🐞 Fixes

- Fixed a bug where an invalid cache would error trying to parse JSON.

#### 🛠 Internals

- Dependency updates.

## 2.1.0 - 2018-10-20

#### 🚀 Updates

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

#### 🚀 Updates

- Added support for the following locales:
  - `nl` - Dutch
  - `ms` - Malay
  - `sv` - Swedish
- Added `CompactEmoji`, `GroupDataset`, and `VersionDataset` types.
- Updated `Emoji` type with correct optional/required properties.

#### 🛠 Internals

- Updated `LATEST_EMOJI_VERSION` to `11.0`.
- Updated `LATEST_UNICODE_VERSION` to `11.0.0`.
- Updated `LATEST_CLDR_VERSION` to `33.1`.

### 1.7.1 - 2018-05-29

#### 🛠 Internals

- Updated constants to use inferred types instead of explicity types.

## 1.7.0 - 2018-05-28

#### 🚀 Updates

- Added `Group`, `GroupKey`, `SkinToneKey`, and `Subgroup` types.
- Added `GROUP_KEY_*` and `SKIN_KEY_*` constants for the types mentioned previously.
- Updated the index to export all constants.

## 1.6.0 - 2018-05-22

#### 🚀 Updates

- Updated to [CLDR 33](http://cldr.unicode.org/index/downloads/cldr-33).

#### 🛠 Internals

- Converted from Flow to TypeScript.

## 1.5.0 - 2018-01-10

#### 🚀 Updates

- Added support for the following locales:
  - `en-gb` - English (Great Britain)
  - `es-mx` - Spanish (Mexico)
  - `pl` - Polish
  - `pt` - Portuguese
  - `th` - Thai
  - `zh-hant` - Chinese (Traditional)
- Added `local` option to `fetchFromCDN` to cache in local storage instead of session storage.

### 1.4.4 - 2017-12-19

#### 🛠 Internals

- Updated dependencies.

### 1.4.3 - 2017-11-10

#### 🛠 Internals

- Updated `LATEST_CLDR_VERSION` to `32`.

### 1.4.2 - 2017-10-10

#### 🛠 Internals

- Updated `LATEST_CLDR_VERSION` to `32-beta`.

### 1.4.1 - 2017-09-25

#### 🐞 Fixes

- Updated `Emoji.version` Flowtype property to `number`.

#### 🛠 Internals

- Updated `LATEST_CLDR_VERSION` to `32-alpha`.

## 1.4.0 - 2017-09-14

#### 🚀 Updates

- Added optional `unicode` and `version` properties to `Emoji` type.
- Added more constants to `lib/constants` type definition.

### 1.3.2 - 2017-09-10

#### 🐞 Fixes

- Updated `Emoji` type to use less optional properties.
- Added missing `tone` property to `Emoji` type.

#### 🛠 Internals

- Updated to Yarn workspaces.

### 1.3.1 - 2017-09-05

#### 🛠 Internals

- Updated dependencies.

## 1.3.0 - 2017-08-22

#### 🚀 Updates

- Added an options object to `generateEmoticonPermutations`.
  - Pass `isFace` to toggle face specific permutations (mouth, eyes, etc).
  - Pass `withNose` to toggle nose specific permutations.
- Added `EMOTICON_OPTIONS` constant, which defines custom options for specific emoticon
  permutations.

### 1.2.2 - 2017-08-21

#### 🚀 Updates

- Added new ogre emoticon `0)`.
- Updated mage emoticon to `:{>`.

### 1.2.1 - 2017-08-19

#### 🐞 Fixes

- Fixed a bug with session storage caching an invalid dataset.

## 1.2.0 - 2017-08-19

#### 🚀 Updates

- Updated `fetchFromCDN` to cache responses in session storage.

#### 🐞 Fixes

- Removed tests from distribution files.

## 1.1.0 - 2017-08-18

#### 🚀 Updates

- Added new `stripHexcode` function to the `emojibase` package.

#### 🐞 Fixes

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

#### 🚀 Updates

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

#### 🛠 Internals

- Emojibase now generates its data directly from the official Unicode data files.

## 0.12.0 - 2017-07-29

- New release under the new `emojibase` name.
- Updated `fetchFromCDN` to fetch from `emojibase` instead of `emoji-database`.

## 0.11.0 - 2017-07-29

- Renamed to `emojibase`. Please update your dependencies!
- Moved `emoji-database.js.flow` to `emojibase.js.flow`.

## 0.10.0 - 2017-07-21

- Added new function, `fetchFromCDN`, which fetches JSON data from jsdelivr.com.

## 0.9.0 - 2017-07-12

- Updated `emojione` to 3.1.
- Added ECMA2015+ unicode aware regex patterns. Located in the `regex/es` folder.

## 0.8.0 - 2017-06-23

- Fixed IE 10 compiled lib/ issues.
- Updated `tags` to inherit from the new `unicode-emoji-annotations` dependency.

## 0.7.0 - 2017-06-16

- Reverted change that removed ability to import modules.
  - Both `fromHexToCodepoint` and `fromUnicodeToHex` are now importable from the index.
- Removed console warning when importing the index file.

## 0.6.0 - 2017-06-16

- Moved all `dependencies` into `devDependencies`.
- Removed the ability to import `emoji-database` modules and files.
- Removed lib/ and src/ files from the published package.
- Fixed Flowtype definitions.

## 0.5.0 - 2017-06-03

- Fixed a bug in which variation selectors were not included in the regex patterns.
- Updated `regex/index` to match both emoji and text presentation characters.
- Updated the `unicode` property to the default presentation unicode character.
- Added new `regex/emoji` and `regex/text` patterns respectively.
- Added new `emoji` and `text` properties to the expanded format.
- Removed `unicode` from the expanded format.

## 0.4.0 - 2017-05-09

- Updated `unicode-emoji-data` to 3.0.0.
- Updated to include src/ files in the published package.
- Updated Flowtype definitions.
- Moved Flowtype definition to root of project.
- Moved bin/ files to the src/ folder.
- Removed beta support from `packageData`.

## 0.3.0 - 2017-05-07

- Updated default category to `other`.
- Added new regex pattern constants.

## 0.2.0 - 2017-04-29

- Moved format datasets into folders.
- Updated expanded format to no longer merge with `unicode-emoji-data`.
- Updated and sorted all datasets in ascending `order`.
- Added `order`, `display`, `skin`, and `gender` properties to the expanded format.
- Removed `hexcodeZWJ` from the expanded format.
- Renamed `keywords` to `tags`.
- Replaced spaces in tags with dashes.
- Replaced diacritics in tags with alphanumeric characters.

## 0.1.0 - 2017-04-21

- Initial release.
