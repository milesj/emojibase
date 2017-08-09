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

#### Unicode Codepoint Support

#### Unicode Property Support

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
| unicode/text.js | 3.28 KB | 1.04 KB |
| emoji.js | 6.63 KB | 1.79 KB |
| index.js | 6.64 KB | 1.79 KB |
| unicode/emoji.js | 7.71 KB | 1.84 KB |
| unicode/index.js | 7.71 KB | 1.85 KB |




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

### Regex Patterns

To match emojis and shortnames within a string, multiple regex patterns are available for import.
All imports return a `RegExp` object, with no flags, and no outer capture group.

* `regex` - Matches both emoji and text presentation characters.
* `regex/emoji` - Matches emoji presentation characters.
* `regex/text` - Matches text presentation characters.
* `regex/shortname` - Matches emoji shortnames.

```javascript
import EMOJI_REGEX from 'emojibase/regex';
import SHORTNAME_REGEX from 'emojibase/regex/shortname';

'🦍'.match(EMOJI_REGEX); // Matches Harambe!
```

To compose new regex patterns, simply use the `source` property.

```javascript
const EMOJI_SHORTNAME_REGEX = new RegExp(`^${EMOJI_REGEX.source}|${SHORTNAME_REGEX.source}$`, 'g');
```

> The `u` (unicode) and `g` (global) flags are not required when using these patterns.

#### Unicode

By default, regex patterns are generated as UCS-2 surrogate pairs. If desired, ES2015+
unicode aware regex patterns can be used, which can be found in the `regex/es` directory.

```javascript
import UNICODE_EMOJI_REGEX from 'emojibase/regex/es';
import SHORTNAME_REGEX from 'emojibase/regex/shortname';
```

> The unicode aware regex patterns are only supported in Node.js and modern browsers.

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

### Filesizes

The filesizes of all datasets and regex patterns can be found below, in ascending order.

| File | Filesize | Gzipped |
| --- | --- | --- |
| regex/shortname.js | 30 B | 50 B |
| regex/text.js | 1.11 KB | 476 B |
| regex/es/text.js | 1.28 KB | 492 B |
| regex/emoji.js | 5.75 KB | 1.47 KB |
| regex/index.js | 5.77 KB | 1.48 KB |
| regex/es/emoji.js | 6.37 KB | 1.5 KB |
| regex/es/index.js | 6.38 KB | 1.51 KB |
| data/extra/unicode.json | 26.63 KB | 6.4 KB |
| data/extra/hexcodes.json | 28.63 KB | 5.85 KB |
| data/extra/shortnames.json | 38.26 KB | 9.16 KB |
| data/extra/shortname-to-unicode.json | 64.89 KB | 15.72 KB |
| data/extra/hexcode-to-shortname.json | 66.9 KB | 15.55 KB |
| data/compact/map.json | 149.52 KB | 24.29 KB |
| data/compact/list.json | 172.85 KB | 24.02 KB |
| data/compact/by-category.json | 172.95 KB | 24.07 KB |
| data/standard/map.json | 317.57 KB | 45.19 KB |
| data/standard/list.json | 340.9 KB | 45.65 KB |
| data/standard/by-category.json | 341 KB | 45.64 KB |
| data/expanded/by-category.json | 553.12 KB | 73.12 KB |
| data/expanded/map.json | 576.93 KB | 74.43 KB |
| data/expanded/list.json | 600.26 KB | 74.03 KB |

[cdn]: https://cdn.jsdelivr.net/npm/emojibase-data@latest/
[cldr]: http://cldr.unicode.org/index/downloads/cldr-31
[ucd]: http://unicode.org/Public/10.0.0/ucd/UnicodeData.txt
