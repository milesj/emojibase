# Emojibase v1.0.0
[![Build Status](https://travis-ci.org/milesj/emojibase.svg?branch=master)](https://travis-ci.org/milesj/emojibase)

> Emojibase, the ultimate emoji database.

A collection of lightweight, up-to-date, pre-generated, specification compliant,
emoji JSON datasets and regex patterns.

* Supports the latest [Emoji 5](https://emojipedia.org/emoji-5.0/),
  [Unicode 10](http://unicode.org/versions/Unicode10.0.0/), and [CLDR 31][cldr] version releases
* Built directly from the [Emoji source data files](http://unicode.org/Public/emoji/)
* Based on the official [Unicode Technical Standard #51](http://www.unicode.org/reports/tr51/)
* With localization provided by [Unicode Technical Standard #35](http://unicode.org/reports/tr35/tr35-general.html#Annotations)

## Documentation

* [Datasets](#datasets)
  * [Installing Locally](#installing-locally)
  * [Fetching From A CDN](#fetching-from-a-cdn)
  * [Data Structure](#data-structure)
  * [Compact Format](#compact-format)
* [Regex Patterns](#regex-patterns)
  * [Unicode Codepoint Support](#unicode-codepoint-support)
  * [Unicode Property Support](#unicode-property-support)
* [Shortcodes](#shortcodes)
* [Filesizes](#filesizes)
* [API](#helpers)
  * [fetchFromCDN](#fetchFromCDN)
  * [flattenEmojiData](#flattenEmojiData)
  * [fromCodepointToUnicode](#fromCodepointToUnicode)
  * [fromHexcodeToCodepoint](#fromHexcodeToCodepoint)
  * [fromUnicodeToHexcode](#fromUnicodeToHexcode)

### Datasets

#### Installing Locally

#### Fetching From A CDN

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
* `shortcodes` (string[]) - An array of community curated shortcodes for use within forums,
  comments, and messages. *Does not include surrounding colons*.
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

```js
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

```js
import data from 'emojibase-data/en/compact.json';
```

```js
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

### Regex Patterns

Matching emoji characters within a string can be difficult, as multiple codepoints,
surrogate pairs, variation selectors, zero width joiners, so on and so forth,
must be taken into account.

To make this whole process easier, four regex patterns are available for import.
One for matching  emoji presentation characters, one for matching text presentation characters,
one for matching both types of characters, and the last to match shortcodes.

* `emojibase-regex` - Matches both emoji and text presentation characters.
* `emojibase-regex/emoji` - Matches only emoji presentation characters.
* `emojibase-regex/text` - Matches only text presentation characters.
* `emojibase-regex/shortcode` - Matches only emoji shortcodes.

Each of these imports return a `RegExp` instance with no flags defined.

```js
import EMOJI_REGEX from 'emojibase-regex';
import SHORTCODE_REGEX from 'emojibase-regex/shortcode';

`🏰`.match(EMOJI_REGEX);
':castle:'.match(SHORTCODE_REGEX);
```

> The `u` (unicode) and `g` (global) flags are not defined on these patterns.

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

### Filesizes

| Dataset | Filesize | Gzipped |
| --- | --- | --- |
| meta/groups.json | 2.85 KB | 943 B |
| meta/shortcodes.json | 23.87 KB | 7.17 KB |
| meta/unicode.json | 45.08 KB | 8.55 KB |
| versions/emoji.json | 52.29 KB | 7.23 KB |
| versions/unicode.json | 52.41 KB | 7.35 KB |
| meta/hexcodes.json | 56.24 KB | 8.52 KB |
| zh/compact.json | 592.23 KB | 60.89 KB |
| fr/compact.json | 592.34 KB | 57.51 KB |
| da/compact.json | 609.4 KB | 60.21 KB |
| de/compact.json | 614.92 KB | 61.81 KB |
| en/compact.json | 627.17 KB | 60.28 KB |
| ko/compact.json | 628.85 KB | 65.8 KB |
| es/compact.json | 629.83 KB | 62.9 KB |
| it/compact.json | 630.73 KB | 63.26 KB |
| ja/compact.json | 638.09 KB | 60.43 KB |
| ru/compact.json | 679.67 KB | 69.11 KB |
| zh/data.json | 848.37 KB | 82.44 KB |
| fr/data.json | 848.48 KB | 79.04 KB |
| da/data.json | 865.54 KB | 81.67 KB |
| de/data.json | 871.06 KB | 83.17 KB |
| en/data.json | 883.31 KB | 81.31 KB |
| ko/data.json | 884.99 KB | 87.72 KB |
| es/data.json | 885.97 KB | 84.45 KB |
| it/data.json | 886.87 KB | 84.78 KB |
| ja/data.json | 894.23 KB | 81.63 KB |
| ru/data.json | 935.82 KB | 91.09 KB |

| Pattern | Filesize | Gzipped |
| --- | --- | --- |
| shortcode.js | 35 B | 55 B |
| property/text.js | 37 B | 57 B |
| property/emoji.js | 102 B | 92 B |
| property/index.js | 114 B | 101 B |
| text.js | 2.53 KB | 1006 B |
| codepoint/text.js | 3.28 KB | 1.04 KB |
| emoji.js | 6.63 KB | 1.79 KB |
| index.js | 6.64 KB | 1.79 KB |
| codepoint/emoji.js | 7.71 KB | 1.84 KB |
| codepoint/index.js | 7.71 KB | 1.85 KB |




-------

Emoji's are generated into JSON files called datasets. Each file is customized to provide
a subset of data in a specific format (below). This provides multiple options,
so choose the best dataset for your application.

* `data/<format>/list.json` - A list of emoji objects in the specified format.
* `data/<format>/map.json` - A mapping of `hexcode`s to emoji objects in the specified format.
* `data/<format>/by-category.json` - A list of emoji objects in the specified format, grouped by
  their `category`.

> Replace `<format>` with the format of your choosing.

Datasets can be used by simply importing their JSON file, and parsing it,
unless otherwise configured by a build process.

```javascript
import json from 'emojibase/data/compact/list.json';

const data = JSON.parse(json);
```

For more specialized and granular use cases (like reduced filesizes),
the following extra datasets are also available.

* `data/extra/unicode.json` - A list of emoji `unicode` characters.
* `data/extra/hexcodes.json` - A list of emoji `hexcode` characters.
* `data/extra/hexcode-to-shortname.json` - A mapping of `hexcode`s to `shortname`s.
* `data/extra/shortnames.json` - A list of emoji shortnames.
* `data/extra/shortname-to-unicode.json` - A mapping of `shortname`s to `unicode` characters.

```javascript
import hexcodes from 'emojibase/data/extra/hexcodes.json';
```

#### Formats

Datasets are grouped into 3 different formats, with each composed of a subset of properties.

* `compact` - Includes the `unicode`, `hexcode`, and `shortname` properties.
* `standard` - Includes the `unicode`, `hexcode`, `shortname`, `codepoint`, and `name` properties.
* `expanded` - Includes all properties mentioned above.

#### CDN Support

If you prefer to not inflate your bundle size with these large JSON dumps,
you can fetch them from our CDN ([provided by jsdelivr.com][cdn]) using `fetchFromCDN`.
This function returns a promise, with the JSON data already parsed.

```javascript
import { fetchFromCDN } from 'emojibase';

fetchFromCDN('extra/hexcodes.json').then((data) => {
  // Do something with it!
});
```

The 1st argument requires a JSON file path, relative to the `data` folder,
while the 2nd argument is the specified release version (defaults to the latest).

> Only JSON datasets can be fetched from our CDN.

### Helpers

Two helper functions are available for converting between emoji data representations.

The first, `fromHexToCodepoint`, can be used to convert a dash separated hexcode into an
array of numerical codepoints.

```javascript
import { fromHexToCodepoint } from 'emojibase';

fromHexToCodepoint('270A-1F3FC'); // [9994, 127996]
```

While the second, `fromUnicodeToHex`, converts a literal unicode character into a dash
separated hexcode. Unless `false` is passed as the 2nd argument, zero-width-joiner's
and variation selectors are removed.

```javascript
import { fromUnicodeToHex } from 'emojibase';

fromUnicodeToHex('👨‍👩‍👧‍👦'); // 1F468-1F469-1F467-1F466
fromUnicodeToHex('👨‍👩‍👧‍👦', false); // 1F468-200D-1F469-200D-1F467-200D-1F466
```

[cdn]: https://cdn.jsdelivr.net/npm/emojibase-data@latest/
[cldr]: http://cldr.unicode.org/index/downloads/cldr-31
[ucd]: http://unicode.org/Public/10.0.0/ucd/UnicodeData.txt
