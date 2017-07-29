# 0.11.0
* Renamed to `emojibase`. Please update your dependencies!
* Moved `emoji-database.js.flow` to `emojibase.js.flow`.

# 0.10.0
* Added new function, `fetchFromCDN`, which fetches JSON data from jsdelivr.com.

# 0.9.0
* Updated `emojione` to 3.1.
* Added ECMA2015+ unicode aware regex patterns. Located in the `regex/es` folder.

# 0.8.0
* Fixed IE 10 compiled lib/ issues.
* Updated `tags` to inherit from the new `unicode-emoji-annotations` dependency.

# 0.7.0
* Reverted change that removed ability to import modules.
  * Both `fromHexToCodepoint` and `fromUnicodeToHex` are now importable from the index.
* Removed console warning when importing the index file.

# 0.6.0
* Moved all `dependencies` into `devDependencies`.
* Removed the ability to import `emoji-database` modules and files.
* Removed lib/ and src/ files from the published package.
* Fixed Flowtype definitions.

# 0.5.0
* Fixed a bug in which variation selectors were not included in the regex patterns.
* Updated `regex/index` to match both emoji and text presentation characters.
* Updated the `unicode` property to the default presentation unicode character.
* Added new `regex/emoji` and `regex/text` patterns respectively.
* Added new `emoji` and `text` properties to the expanded format.
* Removed `unicode` from the expanded format.

# 0.4.0
* Updated `unicode-emoji-data` to 3.0.0.
* Updated to include src/ files in the published package.
* Updated Flowtype definitions.
* Moved Flowtype definition to root of project.
* Moved bin/ files to the src/ folder.
* Removed beta support from `packageData`.

# 0.3.0
* Updated default category to `other`.
* Added new regex pattern constants.

# 0.2.0
* Moved format datasets into folders.
* Updated expanded format to no longer merge with `unicode-emoji-data`.
* Updated and sorted all datasets in ascending `order`.
* Added `order`, `display`, `skin`, and `gender` properties to the expanded format.
* Removed `hexcodeZWJ` from the expanded format.
* Renamed `keywords` to `tags`.
* Replaced spaces in tags with dashes.
* Replaced diacritics in tags with alphanumeric characters.

# 0.1.0
* Initial release.
