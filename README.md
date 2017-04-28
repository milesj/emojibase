# emoji-database
[![Build Status](https://travis-ci.org/milesj/emoji-database.svg?branch=master)](https://travis-ci.org/milesj/emoji-database)

A collection of up-to-date, pre-generated, specification compliant, emoji datasets and
regex patterns. Data is generated with [unicode-emoji-data][unicode-emoji-data] and
[emojione][emojione] packages, for increased accuracy and customizability.

## Installation

```
npm install emoji-database --save
// Or
yarn add emoji-database
```

## Usage

Simply import the JSON files and use them!

```javascript
import json from 'emoji-database/data/extra/shortname-to-unicode.json';

const data = JSON.parse(json);
```

> Imports will need to be parsed with JSON unless your build process handles it.

## Documentation

* [Datasets](#datasets)
  * [Structure](#structure)
  * [Formats](#formats)
* [Regex Patterns](#regex-patterns)
* [Filesizes](#filesizes)

### Datasets

Emoji's are generated into files called datasets. Each file is customized to provide
a subset of data in a specific format. This provides multiple options, so choose the best dataset
for your application.

* `data/<format>-list.json` - A list of emoji objects in the specified format.
* `data/<format>-map.json` - A map of `hexcode`s to emoji objects in the specified format.
* `data/<format>-by-category.json` - A list of emoji objects in the specified format, grouped by
  their `category`.

> Replace `<format>` with the format of your choosing.

```javascript
import emoji from 'emoji-database/data/compact-list.json';
```

For more specialized and granular use cases (like reduced filesizes),
the following extra datasets are also available.

* `data/extra/unicode.json` - A list of emoji `unicode` characters.
* `data/extra/hexcodes.json` - A list of emoji `hexcode` characters.
* `data/extra/hexcode-to-shortname.json` - A map of `hexcode`s to `shortname`s.
* `data/extra/shortnames.json` - A list of emoji shortnames.
* `data/extra/shortname-to-unicode.json` - A map of `shortname`s to `unicode` characters.

```javascript
import hexcodes from 'emoji-database/data/extra/hexcodes.json';
```

#### Structure

Emoji object's within a dataset are composed of the following properties.

* `name` (string) - The name of the emoji character as described by the unicode spec.
* `unicode` (string) - The literal unicode character.
* `hexcode` (string) - The hexadecimal representation of the unicode character,
  separated by dashes. *Does not include ZWJ or variation selectors.*
* `hexcodeFull` (string) - Like the previous, but includes ZWJ and variation selectors.
* `codepoint` (number[]) - An array of code points, parsed from the `hexcode` property.

The following are provided by [EmojiOne][emojione] or automatically generated.

* `order` (number) - The order the emoji character appears.
* `category` (string) - The category the emoji character is grouped under.
* `shortnames` (string[]) - Word representations of the emoji character. *Does not include surrounding colons.*
* `tags` (string[]) - Tags relevant to the emoji character.

#### Formats

Datasets are grouped into 3 different formats, with each composed of a subset of properties.

* `compact` - Includes the `unicode`, `hexcode`, and `shortname` properties.
* `standard` - Includes the `unicode`, `hexcode`, `shortname`, `codepoint`, and `name` properties.
* `expanded` - Includes all properties mentioned above.

### Regex Patterns

To match emojis and shortnames within a string, two regex patterns are available for import.
Both imports return a `RegExp` object, with no flags, and no outer capture group.

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

### Filesizes

The filesizes of all datasets and regex patterns can be found below, in ascending order.

| File | Filesize | Gzipped |
| --- | --- | --- |
| regex/shortname.js | 30 B | 50 B |
| regex/index.js | 5.39 KB | 1.34 KB |
| data/extra/unicode.json | 25.87 KB | 6.18 KB |
| data/extra/hexcodes.json | 28.63 KB | 5.86 KB |
| data/extra/shortnames.json | 38.26 KB | 9.39 KB |
| data/extra/shortname-to-unicode.json | 64.13 KB | 15.68 KB |
| data/extra/hexcode-to-shortname.json | 66.89 KB | 15.37 KB |
| data/compact-map.json | 148.76 KB | 23.97 KB |
| data/compact-list.json | 172.09 KB | 23.91 KB |
| data/compact-by-category.json | 172.19 KB | 23.87 KB |
| data/standard-map.json | 208.87 KB | 30.23 KB |
| data/standard-list.json | 232.2 KB | 30.54 KB |
| data/standard-by-category.json | 232.3 KB | 31.11 KB |
| data/expanded-by-category.json | 460.26 KB | 65.07 KB |
| data/expanded-map.json | 484.07 KB | 65.45 KB |
| data/expanded-list.json | 507.4 KB | 65.76 KB |

[emojione]: https://github.com/Ranks/emojione
[unicode-emoji-data]: https://github.com/dematerializer/unicode-emoji-data
