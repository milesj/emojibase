# 1.4.1 - 9/25/17
#### 🐞 Fixed
* Updated `Emoji.version` Flowtype property to `number`.

#### 🛠 Internal
* Updated `LATEST_CLDR_VERSION` to `32-alpha`.

# 1.4.0 - 9/14/17
#### 🚀 New
* Added optional `unicode` and `version` properties to `Emoji` type.
* Added more constants to `lib/constants` type definition.

# 1.3.2 - 9/10/17
#### 🐞 Fixed
* Updated `Emoji` type to use less optional properties.
* Added missing `tone` property to `Emoji` type.

#### 🛠 Internal
* Updated to Yarn workspaces.

# 1.3.1 - 9/5/17
#### 🛠 Internal
* Updated dependencies.

# 1.3.0 - 8/22/17
#### 🚀 New
* Added an options object to `generateEmoticonPermutations`.
  * Pass `isFace` to toggle face specific permutations (mouth, eyes, etc).
  * Pass `withNose` to toggle nose specific permutations.
* Added `EMOTICON_OPTIONS` constant, which defines custom options for specific
  emoticon permutations.

# 1.2.2 - 8/21/17
#### 🚀 New
* Added new ogre emoticon `0)`.
* Updated mage emoticon to `:{>`.

# 1.2.1 - 8/19/17
#### 🐞 Fixed
* Fixed a bug with session storage caching an invalid dataset.

# 1.2.0 - 8/19/17
#### 🚀 New
* Updated `fetchFromCDN` to cache responses in session storage.

#### 🐞 Fixed
* Removed tests from distribution files.

# 1.1.0 - 8/18/17
#### 🚀 New
* Added new `stripHexcode` function to the `emojibase` package.

#### 🐞 Fixed
* Fixed Flowtype definitions.

# 1.0.0 - 8/17/17
#### 🎉 Release
* Much has changed so take a look at the [migration guide](../../MIGRATING_TO_V1.md).

#### 💥 Breaking
* Moved helper functions to the `emojibase` package.
* Moved datasets to the `emojibase-data` package.
* Moved regex patterns to the `emojibase-regex` package.
* Refactored the emoji data structures.
* Removed dataset formats.

#### 🚀 New
* `emojibase`
  * Added new `fromCodepointToUnicode` function.
  * Added new `generateEmoticonPermutations` function.
  * Renamed `fromHexToCodepoint` to `fromHexcodeToCodepoint`.
  * Renamed `fromUnicodeToHex` to `fromUnicodeToHexcode`.
* `emojibase-data`
  * Added localization support.
* `emojibase-regex`
  * Added Unicode property support.
  * Added new emoticon regex pattern.

#### 🛠 Internal
* Emojibase now generates its data directly from the official Unicode data files.

# 0.12.0 - 7/29/17
* New release under the new `emojibase` name.
* Updated `fetchFromCDN` to fetch from `emojibase` instead of `emoji-database`.

# 0.11.0 - 7/29/17
* Renamed to `emojibase`. Please update your dependencies!
* Moved `emoji-database.js.flow` to `emojibase.js.flow`.

# 0.10.0 - 7/21/17
* Added new function, `fetchFromCDN`, which fetches JSON data from jsdelivr.com.

# 0.9.0 - 7/12/17
* Updated `emojione` to 3.1.
* Added ECMA2015+ unicode aware regex patterns. Located in the `regex/es` folder.

# 0.8.0 - 6/23/17
* Fixed IE 10 compiled lib/ issues.
* Updated `tags` to inherit from the new `unicode-emoji-annotations` dependency.

# 0.7.0 - 6/16/17
* Reverted change that removed ability to import modules.
  * Both `fromHexToCodepoint` and `fromUnicodeToHex` are now importable from the index.
* Removed console warning when importing the index file.

# 0.6.0 - 6/16/17
* Moved all `dependencies` into `devDependencies`.
* Removed the ability to import `emoji-database` modules and files.
* Removed lib/ and src/ files from the published package.
* Fixed Flowtype definitions.

# 0.5.0 - 6/3/17
* Fixed a bug in which variation selectors were not included in the regex patterns.
* Updated `regex/index` to match both emoji and text presentation characters.
* Updated the `unicode` property to the default presentation unicode character.
* Added new `regex/emoji` and `regex/text` patterns respectively.
* Added new `emoji` and `text` properties to the expanded format.
* Removed `unicode` from the expanded format.

# 0.4.0 - 5/9/17
* Updated `unicode-emoji-data` to 3.0.0.
* Updated to include src/ files in the published package.
* Updated Flowtype definitions.
* Moved Flowtype definition to root of project.
* Moved bin/ files to the src/ folder.
* Removed beta support from `packageData`.

# 0.3.0 - 5/7/17
* Updated default category to `other`.
* Added new regex pattern constants.

# 0.2.0 - 4/29/17
* Moved format datasets into folders.
* Updated expanded format to no longer merge with `unicode-emoji-data`.
* Updated and sorted all datasets in ascending `order`.
* Added `order`, `display`, `skin`, and `gender` properties to the expanded format.
* Removed `hexcodeZWJ` from the expanded format.
* Renamed `keywords` to `tags`.
* Replaced spaces in tags with dashes.
* Replaced diacritics in tags with alphanumeric characters.

# 0.1.0 - 4/21/17
* Initial release.
