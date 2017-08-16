# Emojibase
[![Build Status](https://travis-ci.org/milesj/emojibase.svg?branch=master)](https://travis-ci.org/milesj/emojibase)

> Emojibase, the ultimate emoji database.

A collection of lightweight, up-to-date, pre-generated, specification compliant,
localized emoji JSON datasets and regex patterns.

* Supports the latest [Emoji 5](https://emojipedia.org/emoji-5.0/),
  [Unicode 10](http://unicode.org/versions/Unicode10.0.0/), and [CLDR 31][cldr] version releases
* Built directly from the [emoji source data files](http://unicode.org/Public/emoji/)
* Based on the official [Unicode Technical Standard #51](http://www.unicode.org/reports/tr51/)
* With localization provided by [Unicode Technical Standard #35](http://unicode.org/reports/tr35/tr35-general.html#Annotations)

## Documentation

* [Datasets](#datasets)
  * [Usage](#usage)
  * [Data Structure](#data-structure)
  * [Compact Format](#compact-format)
  * [Fetching From A CDN](#fetching-from-a-cdn)
* [Regex Patterns](#regex-patterns)
  * [Usage](#usage-1)
  * [Unicode Codepoint Support](#unicode-codepoint-support)
  * [Unicode Property Support](#unicode-property-support)
* [Shortcodes](#shortcodes)
  * [Official List][scodes]
* [Emoticons](#emoticons)
  * [Official List][emos]
* [API](#api)
  * [fetchFromCDN](#fetchfromcdn)
  * [flattenEmojiData](#flattenemojidata)
  * [fromCodepointToUnicode](#fromcodepointtounicode)
  * [fromHexcodeToCodepoint](#fromhexcodetocodepoint)
  * [fromUnicodeToHexcode](#fromunicodetohexcode)
* [Filesizes](#filesizes)

### Datasets

Emoji's are generated into JSON files called datasets, with each dataset being grouped into
one of the following: localized data, versioned data, and metadata. These datasets can be found
within the `emojibase-data` package.

```
npm install emojibase-data --save
// Or
yarn add emojibase-data
```

> JSON files will need to be parsed manually unless handled by a build/bundle process.

#### Usage

As stated previously, there are 3 groups of datasets, each serving a specific purpose.
The first group, localized data, is exactly that, datasets with localization provided by
[CLDR 31][cldr]. The following locales are current supported:

* `emojibase-data/zh/data.json` - Chinese (zh)
* `emojibase-data/da/data.json` - Danish (da)
* `emojibase-data/en/data.json` - English (en)
* `emojibase-data/fr/data.json` - French (fr)
* `emojibase-data/de/data.json` - German (de)
* `emojibase-data/it/data.json` - Italian (it)
* `emojibase-data/ja/data.json` - Japanese (ja)
* `emojibase-data/ko/data.json` - Korean (ko)
* `emojibase-data/ru/data.json` - Russian (ru)
* `emojibase-data/es/data.json` - Spanish (es)

These datasets return an array of emoji objects that adhere to the defined
[data structure](#data-structure).

```javascript
import emojis from 'emojibase-data/en/data.json';
```

The second group, versioned data, provides datasets for emoji and Unicode version releases.
These datasets return a map, with the key being the version, and the value being an array of
emoji hexcodes included in this version release.

* `emojibase-data/versions/emoji.json` - Emoji characters grouped by emoji version.
* `emojibase-data/versions/unicode.json` - Emoji characters grouped by Unicode version.

```javascript
import unicodeVersions from 'emojibase-data/versions/unicode.json';
```

The third and last group, metadata, provides specialized datasets for unique use cases.

* `emojibase-data/meta/groups.json` - A map of non-localized emoji groups (Smileys & People),
  subgroups (Sky & Weather), and hierarchy, according to the official Unicode data files.
* `emojibase-data/meta/hexcodes.json` - An array of all emoji hexcodes (hexadecimal codepoints).
* `emojibase-data/meta/shortcodes.json` - An array of all emoji shortcodes.
* `emojibase-data/meta/unicode.json` - An array of all emoji unicode characters,
  including text and emoji presentation characters.

```javascript
import { groups, subgroups, hierarchy } from 'emojibase-data/meta/groups.json';
```

#### Data Structure

Each emoji character found within the pre-generated datasets are represented by an object
composed of the properties listed below. In an effort to reduce the overall dataset filesize,
most property values have been implemented using integers,
[with associated constants](https://github.com/milesj/emojibase/blob/master/src/constants.js).

* `annotation` (string) - A localized description, provided by [CLDR][cldr], primarily used
  for text-to-speech (TTS) and accessibility.
* `emoji` (string) - The emoji presentation Unicode character.
* `gender` (number) - If applicable, the gender of the emoji character. `0` for female,
  `1` for male.
* `group` (number) - The categorical group the emoji belongs to, ranging from `0` (smileys)
  to `7` (flags).
* `hexcode` (string) - The hexadecimal representation of the emoji Unicode codepoint,
  including zero width joiners and variation selectors.
* `name` (string) - The generated name according to the official [Unicode data][ucd].
* `order` (number) - The order in which emoji should be displayed on a device,
  through a keyboard or picker.
* `shortcodes` (string[]) - An array of community curated shortcodes.
  *Does not include surrounding colons*.
* `skins` (emoji[]) - If applicable, an array of emoji objects for each skin tone modification,
  starting at light skin, and ending with dark skin.
* `subgroup` (number) - The categorical subgroup the emoji belongs to, ranging from `0` to `75`.
* `tags` (string[]) - An array of localized keywords, provided by [CLDR][cldr],
  to use for searching and filtering.
* `text` (string) - The text presentation Unicode character.
* `tone` (number) - If applicable, the skin tone of the emoji character. `1` for light skin,
  `2` for medium-light skin, `3` for medium skin, `4` for medium-dark skin, and `5` for dark skin.
* `type` (number) - The default presentation of the emoji character. `0` for text, `1` for emoji.

> Not all properties will be found in the emoji object, as properties without an applicable
> value are omitted from the emoji object.

```javascript
{
  annotation: 'man lifting weights',
  emoji: '🏋️‍♂️',
  gender: 1,
  group: 0,
  hexcode: '1F3CB-FE0F-200D-2642-FE0F',
  name: 'WEIGHT LIFTER, MALE SIGN',
  order: 1518,
  shortcodes: [
    'man_lifting_weights',
  ],
  subgroup: 0,
  tags: [
    'weight lifter',
    'man',
  ],
  type: 1,
  skins: [
    {
      annotation: 'man lifting weights, light skin tone',
      emoji: '🏋🏻‍♂️',
      gender: 1,
      group: 0,
      hexcode: '1F3CB-1F3FB-200D-2642-FE0F',
      name: 'WEIGHT LIFTER, MALE SIGN, EMOJI MODIFIER FITZPATRICK TYPE-1-2',
      order: 1522,
      shortcodes: [
        'man_lifting_weights_tone1',
      ],
      subgroup: 0,
      type: 1,
      tone: 1,
    },
    // ...
  ],
},
```

#### Compact Format

While the emoji data is pretty thorough, not all of it may be required, and as such,
a compact dataset is supported. This dataset supports the properties mentioned above,
excluding `gender`, `name`, `subgroup`, `text`, `tone`, and `type`.

To use a compact dataset, replace `data.json` with `compact.json` when importing.

```javascript
import data from 'emojibase-data/en/compact.json';
```

```javascript
{
  annotation: 'man lifting weights',
  emoji: '🏋️‍♂️',
  group: 0,
  hexcode: '1F3CB-FE0F-200D-2642-FE0F',
  order: 1518,
  shortcodes: [
    'man_lifting_weights',
  ],
  tags: [
    'weight lifter',
    'man',
  ],
  skins: [
    {
      annotation: 'man lifting weights, light skin tone',
      emoji: '🏋🏻‍♂️',
      group: 0,
      hexcode: '1F3CB-1F3FB-200D-2642-FE0F',
      order: 1522,
      shortcodes: [
        'man_lifting_weights_tone1',
      ],
    },
    // ...
  ],
},
```

#### Fetching From A CDN

If you prefer to not inflate your bundle size with these large JSON datasets,
you can fetch them from our CDN ([provided by jsdelivr.com][cdn]) using `fetchFromCDN`.

```javascript
import { fetchFromCDN } from 'emojibase';

fetchFromCDN('en/data.json').then((emojis) => {
  // Do something with it!
});
```

Learn more about the [`fetchFromCDN` API](#fetchFromCDN).

### Regex Patterns

Matching emoji characters within a string can be difficult, as multiple codepoints,
surrogate pairs, variation selectors, zero width joiners, so on and so forth,
must be taken into account. To make this whole process easier, 4 regex patterns
are available in the `emojibase-regex` package for import.

```
npm install emojibase-regex --save
// Or
yarn add emojibase-regex
```

#### Usage

As stated previously, there are 4 regex patterns. One for matching emoji presentation characters,
one for matching text presentation characters, one for matching both types of characters,
and the last to match shortcodes.

* `emojibase-regex` - Matches both emoji and text presentation characters.
* `emojibase-regex/emoji` - Matches only emoji presentation characters.
* `emojibase-regex/text` - Matches only text presentation characters.
* `emojibase-regex/emoticon` - Matches supported emoticons and their permutations.
* `emojibase-regex/shortcode` - Matches supported shortcodes.

Each of these imports return a `RegExp` instance with no flags defined.

```javascript
import EMOJI_REGEX from 'emojibase-regex';
import EMOTICON_REGEX from 'emojibase-regex/emoticon';
import SHORTCODE_REGEX from 'emojibase-regex/shortcode';

`🏰`.match(EMOJI_REGEX);
':)'.match(EMOTICON_REGEX);
':castle:'.match(SHORTCODE_REGEX);
```

> The `u` (unicode) and `g` (global) flags are not defined on these patterns.

> The emoticon regex does not include word boundaries.

#### Unicode Codepoint Support

By default, regex patterns are generated using hexadecimal Unicode ranges. If desired, ES2015+
Unicode codepoint aware regex patterns can be used, which can be found in the `codepoint` directory.

```javascript
import CODEPOINT_EMOJI_REGEX from 'emojibase-regex/codepoint';
```

> Codepoint regex patterns are only supported in Node.js and modern browsers.

> The `u` (unicode) flag is required (defined by default) when using these patterns.

#### Unicode Property Support

An [ECMAScript proposal](https://github.com/tc39/proposal-regexp-unicode-property-escapes) to
support Unicode property escapes within regex is currently in the works. This proposal,
if passed, would enable regex patterns like the following: `/\p{Emoji}/`. This feature would
greatly reduce the filesize of our regex patterns while being more accurate to the Unicode
standard.

These patterns can be found in the `property` directory, but use at your own risk!

```javascript
import PROPERTY_EMOJI_REGEX from 'emojibase-regex/property';
```

### Shortcodes

Shortcodes are short and succinct words, surrounded by colons, representing emoji (`:cat:`).
They're primarily used within forums, comments, message posts, and basically anywhere with
user-to-user communication. They exist for situations where an emoji keyboard is not present,
but emoji should be supported.

That being said, shortcodes are not officially supported by Unicode or any standard,
and are entirely community driven. Because of this, shortcodes (also known as shortnames),
may differ between implementations, websites, or libraries.

Emojibase aims to solve this problem with a [maintained and curated list of shortcodes][scodes]
that abide the following guidelines:

* Must be short and succinct. Easy to type, easy to remember. This infers a small filesize.
* Must be consistent across locales and languages by utilizing English shortcodes.
  It's a language common amongst supported locales.
* Must use descriptive nouns over verbose phrases. For example, "storm" over "cloud with
  lightning and rain".
* Must use emotions when describing smileys. For example, "happy" over "smiling face with
  open mouth & smiling eyes".
* Must keep backwards compatibility and historical integrity by never removing and
  renaming shortcodes.
* Must support multiple shortcodes per emoji character, for usage within different contexts.
* Must align with or base off [CLDR 31][cldr] annotations.

### Emoticons

TODO

### API

What kind of emoji database would this be without a few helper functions for easily
using and working with emoji characters. These functions can be found in the `emojibase` package.

```
npm install emojibase --save
// Or
yarn add emojibase
```

#### fetchFromCDN

This function will fetch `emojibase-data` JSON files from our [CDN][cdn], parse them,
and return an array of emoji objects. It requires a file path relative to the `emojibase-data`
package as the 1st argument, and the Emojibase release version as the 2nd argument
(defaults to the latest).

```javascript
import { fetchFromCDN, flattenEmojiData } from 'emojibase';

fetchFromCDN('ja/compact.json', '2.1.3').then(flattenEmojiData);
```

> Only JSON datasets can be fetched from the CDN.

#### flattenEmojiData

By default, emoji [skin modifications are nested](#data-structure) under the base neutral skin
tone emoji. To flatten the data into a single dimension array, use the `flattenEmojiData` function.

```javascript
import { flattenEmojiData } from 'emojibase';

flattenEmojiData([
  {
    hexcode: '1F3CB-FE0F-200D-2642-FE0F',
    // ...
    skins: [
      {
        hexcode: '1F3CB-1F3FB-200D-2642-FE0F',
        // ...
      },
      // ...
    ],
  },
]);

/*
[
  {
    hexcode: '1F3CB-FE0F-200D-2642-FE0F',
    // ...
  },
  {
    hexcode: '1F3CB-1F3FB-200D-2642-FE0F',
    // ...
  },
]
*/
```

> Tags from the parent emoji will be passed down to the skin modifications.

#### fromCodepointToUnicode

This function will convert an array of numerical codepoints to a literal emoji Unicode character.

```javascript
import { fromCodepointToUnicode } from 'emojibase';

fromCodepointToUnicode([128104, 8205, 128105, 8205, 128103, 8205, 128102]); // 👨‍👩‍👧‍👦
```

#### fromHexcodeToCodepoint

This function will convert a hexadecimal codepoint to an array of numerical codepoints.
By default, it will split the hexcode using a dash, but can be customized with the 2nd argument.

```javascript
import { fromHexcodeToCodepoint } from 'emojibase';

fromHexcodeToCodepoint('270A-1F3FC'); // [9994, 127996]
fromHexcodeToCodepoint('270A 1F3FC', ' '); // [9994, 127996]
```

#### fromUnicodeToHexcode

This function will convert a literal emoji Unicode character into a dash separated
hexadecimal codepoint. Unless `false` is passed as the 2nd argument, zero width joiner's
and variation selectors are removed.

```javascript
import { fromUnicodeToHexcode } from 'emojibase';

fromUnicodeToHexcode('👨‍👩‍👧‍👦'); // 1F468-1F469-1F467-1F466
fromUnicodeToHexcode('👨‍👩‍👧‍👦', false); // 1F468-200D-1F469-200D-1F467-200D-1F466
```

### Filesizes

| emojibase-data | Filesize | Gzipped |
| --- | --- | --- |
| meta/groups.json | 2.85 KB | 943 B |
| meta/shortcodes.json | 24.2 KB | 7.31 KB |
| meta/unicode.json | 45.08 KB | 8.55 KB |
| versions/emoji.json | 52.29 KB | 7.23 KB |
| versions/unicode.json | 52.41 KB | 7.35 KB |
| meta/hexcodes.json | 56.24 KB | 8.52 KB |
| zh/compact.json | 592.7 KB | 61.12 KB |
| fr/compact.json | 592.81 KB | 57.7 KB |
| da/compact.json | 609.87 KB | 60.4 KB |
| de/compact.json | 615.39 KB | 62.01 KB |
| en/compact.json | 627.64 KB | 60.46 KB |
| ko/compact.json | 629.32 KB | 66.04 KB |
| es/compact.json | 630.3 KB | 63.09 KB |
| it/compact.json | 631.2 KB | 63.47 KB |
| ja/compact.json | 638.56 KB | 60.64 KB |
| ru/compact.json | 680.14 KB | 69.36 KB |
| zh/data.json | 849.6 KB | 82.9 KB |
| fr/data.json | 849.71 KB | 79.47 KB |
| da/data.json | 866.77 KB | 82.1 KB |
| de/data.json | 872.29 KB | 83.6 KB |
| en/data.json | 884.54 KB | 81.69 KB |
| ko/data.json | 886.22 KB | 88.18 KB |
| es/data.json | 887.2 KB | 84.84 KB |
| it/data.json | 888.1 KB | 85.18 KB |
| ja/data.json | 895.46 KB | 82.09 KB |
| ru/data.json | 937.04 KB | 91.52 KB |

| emojibase-regex | Filesize | Gzipped |
| --- | --- | --- |
| shortcode.js | 35 B | 55 B |
| property/text.js | 37 B | 57 B |
| property/emoji.js | 102 B | 92 B |
| property/index.js | 114 B | 101 B |
| emoticon.js | 389 B | 199 B |
| text.js | 2.53 KB | 1006 B |
| codepoint/text.js | 3.28 KB | 1.04 KB |
| emoji.js | 6.63 KB | 1.79 KB |
| index.js | 6.64 KB | 1.79 KB |
| codepoint/emoji.js | 7.71 KB | 1.84 KB |
| codepoint/index.js | 7.71 KB | 1.85 KB |

[cdn]: https://cdn.jsdelivr.net/npm/emojibase-data@latest/
[cldr]: http://cldr.unicode.org/index/downloads/cldr-31
[emos]: https://github.com/milesj/emojibase/blob/master/src/resources/emoticons.js
[scodes]: https://github.com/milesj/emojibase/blob/master/src/resources/shortcodes.js
[ucd]: http://unicode.org/Public/10.0.0/ucd/UnicodeData.txt
