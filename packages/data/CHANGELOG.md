# Change Log

## 18.0.0

### Major Changes

- 8527c93: Update to Emoji v18 and CLDR 49 (beta 1), following UTS #51 revision 31. Adds 9 emoji (🫫 🫹 🫺 🫌 🫝 🛙 🪋
  🪌 🪍), with skin tones for the two thumb signs, and their localized labels and keywords.

### Minor Changes

- 06b8716: Resolve CLDR annotations as UTS #35 describes:
  
  - Locales inherit from their real CLDR parents. `en-gb` now uses `en-001` (129 labels, such as "tick
    box with tick"), and `es-mx` uses `es-419` (450 labels, such as "lentes de sol").
  - Labels and keywords inherit separately, so 9 `es-mx` emoji regain their keywords.
  - Flags and keycaps without a CLDR label are named in the locale's own words, which fixes all 262
    Danish flags ("flag: USA") and their `cldr` shortcodes.
  - Keywords keep their CLDR casing in every locale (German nouns, "OK", "DVD"). A keyword identical
    to the label is now reliably left out of `tags`.
  - Fix the Hindi label for regional indicators, which was in Bengali.
- 29b2c8a: The `cldr-native` and `emojibase-native` presets now include every shortcode, even those that are
  already Latin (such as `cd` and `dvd` in Russian), so they can be used on their own.
- 06b8716: Align presentation and qualification with UTS #51:
  
  - The `emoji` field is now the fully-qualified form from `emoji-test.txt`. 152 emoji that default to
    emoji presentation, like 👍 and ⌚, no longer have a redundant `FE0F`.
  - `meta/hexcodes.json` now lists statuses exactly as `emoji-test.txt` does. Text presentation
    sequences (`FE0E`) and redundant `FE0F` forms are no longer listed as fully qualified, and the
    skin tone and hair components are listed with the new `COMPONENT` qualifier.
  - The `emojibase-regex/emoji` pattern now matches default-emoji characters without `FE0F`.
- 06b8716: Align the data model with UTS #51:
  
  - Add `gender` to emoji whose people are gendered, like "man health worker" and "old woman", not
    only those with a gender sign.
  - Use CLDR short names for sequences in `meta/unicode-names.json`, which keeps every skin tone (e.g.
    "PEOPLE HOLDING HANDS: LIGHT SKIN TONE, MEDIUM-LIGHT SKIN TONE").
  - Fix the Danish and Swedish labels and CLDR shortcodes for #️⃣ and 🔟.
- 06b8716: Group `versions/unicode.json` by the Emoji Versions table in UTS #51. The Emoji 13.1 sequences moved
  from a "13.1" group (there is no Unicode 13.1) to 13, and components that are not emoji on their
  own, like digits and joiners, are no longer listed.

### Patch Changes

- 29b2c8a: Fix the "animal-bug" subgroup being translated as a software bug or error in 17 locales, such as
  "Fehler" in German. It now reads as insects or small creatures.
- 8527c93: Update to CLDR 48.2, which adds the French label for 🎺 ("trombone à coulisse") and updates 13
  Vietnamese labels, such as "cung Bạch Dương" for ♈.
- 29b2c8a: Fix mistranslated group, subgroup and skin tone messages in 26 locales. Most were machine
  translations of the wrong sense, such as "Leichtathletik" (track and field) for German
  "person-sport". Others were in the wrong grammatical case, mixed Latin letters into Cyrillic words,
  were Traditional Chinese in Simplified Chinese, or split Thai words with spaces.
  
  - Skin tone names now follow CLDR, except in Korean, Thai and Traditional Chinese, which keep their
    neutral light and dark wording.
  - "number sign" now follows CLDR, which changes the `cldr` shortcodes for #️⃣ in 20 locales, such as
    `taste_doppelkreuz` in German.
  - The Thai regional indicator labels and shortcodes lose a stray "ก".
- 364956a: Add missing Emoji v17 shortcodes for iamcal and JoyPixels
- Updated dependencies [06b8716]
- Updated dependencies [789b533]
- Updated dependencies [8527c93]
- Updated dependencies [06b8716]
- Updated dependencies [29b2c8a]
- Updated dependencies [29b2c8a]
- Updated dependencies [789b533]
  - emojibase@18.0.0

## 17.0.0

### Major Changes

- 806c507: Update to Emoji v17 and CLDR 48.

### Patch Changes

- Updated dependencies [806c507]
  - emojibase@17.0.0

## 16.0.3

### Patch Changes

- 53fcdc1: Updated Chinese Traditional translations.

## 16.0.2

### Patch Changes

- d0e4bcc: Fixed a broken publish.

## 16.0.1

### Patch Changes

- 3faf950: Add missing files and types for `vi` data.

## 16.0.0

### Major Changes

- e9b9a9a: Add `vi` (Vietnamese) language.
- d237386: Update to Emoji v16 and CLDR 46.
- d237386: Drop Node.js v16 support. Requires >= v18.12.

### Patch Changes

- Updated dependencies [e9b9a9a]
- Updated dependencies [d237386]
- Updated dependencies [d237386]
  - emojibase@16.0.0

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### 15.3.2 - 2024-06-09

#### 🐞 Fixes

- Fix missing group. (#176) ([9f4d2a4](https://github.com/milesj/emojibase/commit/9f4d2a4)), closes
  [#176](https://github.com/milesj/emojibase/issues/176)

**Note:** Version bump only for package emojibase-data

## <small>15.3.1 (2024-06-03)</small>

- new: Support CLDR 45 (new annotations). (#173)
  ([d2c587f](https://github.com/milesj/emojibase/commit/d2c587f)), closes
  [#173](https://github.com/milesj/emojibase/issues/173)
- deps(typescript): Update to v5.4. ([8756294](https://github.com/milesj/emojibase/commit/8756294))

## 15.3.0 - 2023-12-03

#### 🚀 Updates

- Add shortcodes for v15.1. (#167) ([44afd19](https://github.com/milesj/emojibase/commit/44afd19)),
  closes [#167](https://github.com/milesj/emojibase/issues/167)
- Support Emoji v15.1. (#164) ([b2e0ec6](https://github.com/milesj/emojibase/commit/b2e0ec6)),
  closes [#164](https://github.com/milesj/emojibase/issues/164)
- Use official CLDR JSON packages. (#166)
  ([f6b2dc9](https://github.com/milesj/emojibase/commit/f6b2dc9)), closes
  [#166](https://github.com/milesj/emojibase/issues/166)

**Note:** Version bump only for package emojibase-data

## 15.2.0 - 2023-10-06

#### 🚀 Updates

- Add hi (Hindi) language. (#165) ([ada3784](https://github.com/milesj/emojibase/commit/ada3784)),
  closes [#165](https://github.com/milesj/emojibase/issues/165)

#### 📘 Docs

- Update file sizes. ([bb8b93a](https://github.com/milesj/emojibase/commit/bb8b93a))

**Note:** Version bump only for package emojibase-data

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

#### 🛠 Internals

- Get website API build working. ([0cb4284](https://github.com/milesj/emojibase/commit/0cb4284))

**Note:** Version bump only for package emojibase-data

# 15.0.0 - 2023-06-10

#### 🎉 Release

- Emojibase versions will now align with the emoji/unicode versions.
- Updated to [Emoji 15](https://emojipedia.org/emoji-15.0/) and
  [Unicode 15](http://unicode.org/versions/Unicode15.0.0/).
  - 21 new emoji (31 including skin tones variations).
- Updated to [CLDR 42](http://cldr.unicode.org/index/downloads/cldr-42).
- Updated shortcodes.

### 7.0.1 - 2021-12-19

#### 🛠 Internals

- Fixed spurious build issues.

# 7.0.0 - 2021-10-15

#### 🎉 Release

- Updated to [Emoji 14](https://emojipedia.org/emoji-14.0/) and
  [Unicode 14](http://unicode.org/versions/Unicode14.0.0/).
  - 37 new emoji (117 including skin tones variations).
  - Handshake now supports mixed skin tones.
- Updated to [CLDR 40](http://cldr.unicode.org/index/downloads/cldr-40).
- Updated shortcodes.

#### 💥 Breaking

- Updated `emojibase` shortcode preset to transliterate for all languages.
- Updated the `emoticon` property to also support an array of strings.
- Updated `meta/hexcodes.json` to be a mapping of hexcodes based on qualified status, instead of a
  list of hexcodes.
- Renamed the `annotation` field to `label`.
- Renamed `meta.json` datasets to `messages.json`.

#### 🚀 Updates

- Added uppercased versions of emoticons when applicable.
- Added `emojibase-native` shortcodes that do _not_ transliterate. Only applicable to languages that
  have been translated so far.
- Added Swedish shortcodes (`sv/shortcodes/emojibase.json`).
- Added `skinTones` translations to `messages.json`.
- Updated to [CLDR 40](http://cldr.unicode.org/index/downloads/cldr-40).
- Improved TypeScript declarations.

## 6.2.0 - 2021-05-13

#### 🚀 Updates

- Updated to [CLDR 39](http://cldr.unicode.org/index/downloads/cldr-39).
- Updated `joypixels` shortcode preset to the latest.

## 6.1.0 - 2020-01-07

#### 🚀 Updates

- Added new `meta.json` dataset to each locale that provides localized messages for groups and
  sub-groups.
- Added partially translated `emojibase` shortcodes for Russian and Chinese.
- Updated to [Emoji 13.1](https://emojipedia.org/emoji-13.1/).
- Updated to [CLDR 38.1](http://cldr.unicode.org/index/downloads/cldr-38).

# 6.0.0 - 2020-09-11

To better support shortcodes moving forward, we have rewritten their implementation. We now support
translated shortcodes for all languages, and shortcode presets for common platforms like GitHub and
Slack.

#### 💥 Breaking

- Rewrote the shortcodes implementation.
  - Removed `shortcodes` field from all emoji objects. Shortcodes must now be loaded separately.
  - Removed `meta/shortcodes.json` dataset.
- Removed `name` field from all datasets.
  - This change reduced the `data.json` filesizes by 15-20%.
  - Use new `unicode-names.json` dataset if you require this data.
- Updated datasets to now include regional indicators.
  - This goes against the official Unicode specifiation as they should remain hidden, but these
    indicators are used widely in the community, so their inclusion is acceptable.
- Updated `group`, `subgroup`, and `order` fields to be undefined/missing for certain emoji, which
  denotes no categorization.

#### 🚀 Updates

- Added support for the following locales:
  - `et` - Estonian
  - `fi` - Finnish
  - `hu` - Hungarian
  - `lt` - Lithuanian
  - `nb` - Norwegian
  - `uk` - Ukrainian
- Added `meta/unicode-names.json` dataset.
- Added `shortcodes/cldr.json` datasets for each locale. Shortcodes are now localized!
- Added `shortcodes/cldr-native.json` datasets for each non-latin locale.
- Added `shortcodes/emojibase.json` dataset (English only).
- Added `shortcodes/emojibase-legacy.json` dataset (English only).
- Added `shortcodes/github.json` dataset (English only).
- Added `shortcodes/iamcal.json` dataset (English only).
- Added `shortcodes/joypixels.json` dataset (English only).
- Added `discord` shortcode alias (to `joypixels`).
- Added `slack` shortcode alias (to `iamcal`).
- [**emojibase-legacy**] Added `y` and `n` shortcodes.
- [**emojibase-legacy**] Renamed `hopeful` to `gloomy`.

#### ⚙️ Types

- Updated all `*.d.ts` datasets to use wildstar paths.

### 5.1.1 - 2020-08-05

#### 🐞 Fixes

- Fixed some build issues.

## 5.1.0 - 2020-08-05

#### 🚀 Updates

- Updated to [CLDR 37](http://cldr.unicode.org/index/downloads/cldr-37).

## 5.0.1 - 2020-03-21

#### 🐞 Fixes

- Fixed `:)` and `<3` emoticons not rendering correctly.
- Updated `:D` emoticon to 😀.

# 5.0.0 - 2020-03-13

#### 🎉 Release

- Updated to [Emoji 13](https://emojipedia.org/emoji-13.0/) and
  [Unicode 13](http://unicode.org/versions/Unicode13.0.0/).
  - 67 new emoji (117 including skin tones variations).
  - New groups and subgroups.
- Updated to [CLDR 36.1](http://cldr.unicode.org/index/downloads/cldr-36).
- Updated shortcodes.

#### 💥 Breaking

- Compact dataset will now always use the emoji character, regardless of the presentation `type`.

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
