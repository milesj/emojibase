# 2.0.0 - 06/23/18

#### 🎉 Release

- Updated to [Emoji 11](https://emojipedia.org/emoji-11.0/) and
  [Unicode 11](http://unicode.org/versions/Unicode11.0.0/).
  - 77 new emoji (157 including skin tones variations).
  - 4 new components (bald, curly hair, red hair, white hair).
- Updated to [CLDR 33.1](http://cldr.unicode.org/index/downloads/cldr-33-1).
  - Tons of new annotations and keywords.
- Updated shortcodes.

#### 💥 Breaking

- Changed the Ogre emoticon from `O)` to `>O)`.

# 1.1.1 - 05/24/18

#### 🐞 Fixed

- Fixed invalid `index.d.ts` declaration.

# 1.1.0 - 05/22/18

#### 🚀 New

- Updated to [CLDR 33](http://cldr.unicode.org/index/downloads/cldr-33).

#### 🛠 Internal

- Converted from Flow to TypeScript.

# 1.0.9 - 11/10/17

#### 🚀 New

- Updated to [CLDR 32](http://cldr.unicode.org/index/downloads/cldr-32).

# 1.0.8 - 10/11/17

#### 🐞 Fixed

- Improved the accuracy of `emoji` and `text` presentation specific patterns.

# 1.0.7 - 10/10/17

#### 🐞 Fixed

- Emojis with newly added variation selectors will now properly match hexcodes without trailing
  `FE0E`/`FE0F` (their legacy variant).

# 1.0.6 - 9/10/17

#### 🛠 Internal

- Updated to Yarn workspaces.

# 1.0.5 - 9/5/17

#### 🛠 Internal

- Updated regex patterns.

# 1.0.4 - 8/22/17

#### 🐞 Fixed

- Added missing emoticons to `emoticon` regex.
- Removed unwanted emoticon permutations from `emoticon` regex.

# 1.0.3 - 8/21/17

#### 🛠 Internal

- Updated changelogs.

# 1.0.2 - 8/19/17

#### 🐞 Fixed

- Removed tests from distribution files.

# 1.0.1 - 8/18/17

#### 🐞 Fixed

- Fixed Flowtype definitions.

# 1.0.0 - 8/17/17

#### 🎉 Release

- Initial release!
