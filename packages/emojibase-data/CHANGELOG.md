# 2.2.0 - 01/10/18

#### 🚀 New

* Added support for the following locales:
  * `en-gb` - English (Great Britain)
  * `es-mx` - Spanish (Mexico)
  * `pl` - Polish
  * `pt` - Portuguese
  * `th` - Thai
  * `zh-hant` - // Chinese (Traditional)

#### 🐞 Fixed

* Fixed some issues with localized annotation resolving.
* Added missing `annotation` and `tags` to 🔟.

# 2.1.2 - 12/19/17

#### 🐞 Fixed

* Fixed invalid `subgroup` indices.

# 2.1.1 - 11/10/17

#### 🚀 New

* Updated to [CLDR 32](http://cldr.unicode.org/index/downloads/cldr-32) official release.

# 2.1.0 - 9/25/17

#### 🚀 New

* Updated to [CLDR 32 Beta](http://cldr.unicode.org/index/downloads/cldr-32) which includes new
  annotations and tags for all locales.
* Updated to use derived annotations, which includes official translations for emoji modifiers and
  sequences.

# 2.0.0 - 9/14/17

#### 💥 Breaking

* Removed `emoji` from compact datasets.

#### 🚀 New

* Added `unicode` to compact datasets, which is the value of `emoji` or `text`, depending on the
  default presentation of `type`.
* Added `version` to full datasets, which is the version in which the emoji was released.

# 1.1.1 - 9/10/17

#### 🛠 Internal

* Updated to Yarn workspaces.

# 1.1.0 - 9/5/17

#### 🚀 New

* Updated ZWJ sequence annotations to more closely follow the CLDR guidelines.
  * Kiss emojis are now prefixed with localized "kiss:" messages.
  * Couple emojis are now prefixed with localized "couple with heart:" messages.
  * Family emojis are now prefixed with localized "family:" messages.
  * Gender emojis are now prefixed with localized "man" or "woman" messages.
* Added annotations for keycap sequences.

#### 🐞 Fixed

* Gender annotations will now use "man" or "woman" instead of "male sign" or "female sign".
* Missing annotations will now fallback to the english annotation if available.

# 1.0.4 - 8/22/17

#### 🛠 Internal

* Updated mage emoticon to `:{>`.
* Moved mage emoticon to 🧙‍♂️ (`1F9D9-200D-2642-FE0F`).

# 1.0.3 - 8/21/17

#### 🛠 Internal

* Updated changelogs.

# 1.0.2 - 8/19/17

#### 🐞 Fixed

* Removed tests from distribution files.

# 1.0.1 - 8/18/17

#### 🐞 Fixed

* Fixed Flowtype definitions.

# 1.0.0 - 8/17/17

#### 🎉 Release

* Initial release!
