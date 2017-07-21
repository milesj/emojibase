# Emojibase v0.10.0
[![Build Status](https://travis-ci.org/milesj/emoji-database.svg?branch=master)](https://travis-ci.org/milesj/emoji-database)

A collection of up-to-date, pre-generated, specification compliant, emoji datasets and
regex patterns. Data is generated with [unicode-emoji-data][unicode-emoji-data],
[unicode-emoji-annotations][unicode-emoji-annotations], and [emojione][emojione] packages,
for increased accuracy, interoperability, and customizability.

## Installation

```
npm install emoji-database --save
// Or
yarn add emoji-database
```

## Documentation

* [Datasets](#datasets)
  * [Formats](#formats)
  * [Properties](#properties)
  * [CDN Support](#cdn-support)
* [Regex Patterns](#regex-patterns)
  * [Unicode](#unicode)
* [Helpers](#helpers)
* [Filesizes](#filesizes)

### Datasets

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
import json from 'emoji-database/data/compact/list.json';

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
import hexcodes from 'emoji-database/data/extra/hexcodes.json';
```

#### Formats

Datasets are grouped into 3 different formats, with each composed of a subset of properties.

* `compact` - Includes the `unicode`, `hexcode`, and `shortname` properties.
* `standard` - Includes the `unicode`, `hexcode`, `shortname`, `codepoint`, and `name` properties.
* `expanded` - Includes all properties mentioned above.

#### Properties

Emoji object's within a dataset are composed of the following properties.

* `category` (string) - The category the emoji character is grouped under.
* `codepoint` (number[]) - An array of code points, parsed from the `hexcode` property.
* `display` (string) - The default presentation of the emoji character, either "emoji" or "text".
* `emoji` (string) - The emoji presentation unicode character.
* `gender` (string) - If applicable, the gender of the emoji, either "male" or "female".
*Only exists for emojis that support genders.*
* `hexcode` (string) - The hexadecimal representation of the unicode character,
separated by dashes. *Does not include zero-width-joiner or variation selectors.*
* `name` (string) - The name of the emoji character.
* `order` (number) - The sort order of all emoji characters.
* `shortnames` (string[]) - Short word representations of the emoji character.
*Does not include surrounding colons.*
* `skin` (number) - If applicable, the skin tone, between 1 and 5.
*Only exists for emojis that support skin tones.*
* `tags` (string[]) - Tags and keywords relevant to the emoji character.
* `text` (string) - The text presentation unicode character.
* `unicode` (string) - The emoji or text unicode character depending on `display`.
  *Only available in non-expanded formats.*

> Properties with null or undefined values are omitted from the generated dataset.

#### CDN Support

If you prefer to not inflate your bundle size with these large JSON dumps,
you can fetch them from our CDN ([provided by jsdelivr.com][cdn]) using `fetchFromCDN`.
This function returns a promise, with the JSON data already parsed.

```javascript
import { fetchFromCDN } from 'emoji-database';

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
import EMOJI_REGEX from 'emoji-database/regex';
import SHORTNAME_REGEX from 'emoji-database/regex/shortname';

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
import UNICODE_EMOJI_REGEX from 'emoji-database/regex/es';
import SHORTNAME_REGEX from 'emoji-database/regex/shortname';
```

> The unicode aware regex patterns are only supported in Node.js and modern browsers.

### Helpers

Two helper functions are available for converting between emoji data representations.

The first, `fromHexToCodepoint`, can be used to convert a dash separated hexcode into an
array of numerical codepoints.

```javascript
import { fromHexToCodepoint } from 'emoji-database';

fromHexToCodepoint('270A-1F3FC'); // [9994, 127996]
```

While the second, `fromUnicodeToHex`, converts a literal unicode character into a dash
separated hexcode. Unless `false` is passed as the 2nd argument, zero-width-joiner's
and variation selectors are removed.

```javascript
import { fromUnicodeToHex } from 'emoji-database';

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

[cdn]: https://cdn.jsdelivr.net/npm/emoji-database@latest/data/
[emojione]: https://github.com/Ranks/emojione
[unicode-emoji-data]: https://github.com/dematerializer/unicode-emoji-data
[unicode-emoji-annotations]: https://github.com/dematerializer/unicode-emoji-annotations
