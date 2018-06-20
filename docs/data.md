# Datasets

Emoji's are generated into JSON files called datasets, with each dataset being grouped into one of
the following: localized data, versioned data, and metadata. These datasets can be found within the
`emojibase-data` package.

```
yarn add emojibase-data
// Or
npm install emojibase-data --save
```

> JSON files will need to be parsed manually unless handled by a build/bundle process.

## Usage

As stated, there are 3 groups of datasets, each serving a specific purpose. The first group,
localized data, is exactly that, datasets with localization provided by [CLDR 33][cldr]. The
following locales and languages are currently supported:

- `emojibase-data/zh/data.json` - Chinese (zh)
- `emojibase-data/zh-hant/data.json` - Chinese, Traditional (zh-hant)
- `emojibase-data/da/data.json` - Danish (da)
- `emojibase-data/en/data.json` - English (en)
- `emojibase-data/en-gb/data.json` - English, Great Britain (en-gb)
- `emojibase-data/fr/data.json` - French (fr)
- `emojibase-data/de/data.json` - German (de)
- `emojibase-data/it/data.json` - Italian (it)
- `emojibase-data/ja/data.json` - Japanese (ja)
- `emojibase-data/ko/data.json` - Korean (ko)
- `emojibase-data/pl/data.json` - Polish (pl)
- `emojibase-data/pt/data.json` - Portuguese (pt)
- `emojibase-data/ru/data.json` - Russian (ru)
- `emojibase-data/es/data.json` - Spanish (es)
- `emojibase-data/es-mx/data.json` - Spanish, Mexico (es-mx)
- `emojibase-data/th/data.json` - Thai (th)

These datasets return an array of emoji objects that adhere to the defined
[data structure](#data-structure).

> Missing localizations will fallback to English.

```javascript
import emojis from 'emojibase-data/en/data.json';
```

The second group, versioned data, provides datasets for emoji and Unicode release versions. These
datasets return a map, with the key being the version, and the value being an array of emoji
hexcodes included in the associated release version.

- `emojibase-data/versions/emoji.json` - Emoji characters grouped by emoji version.
- `emojibase-data/versions/unicode.json` - Emoji characters grouped by Unicode version.

```javascript
import unicodeVersions from 'emojibase-data/versions/unicode.json';
```

The third and last group, metadata, provides specialized datasets for unique use cases.

- `emojibase-data/meta/groups.json` - A map of non-localized emoji groups (Smileys & People),
  subgroups (Sky & Weather), and hierarchy, according to the official Unicode data files.
- `emojibase-data/meta/hexcodes.json` - An array of all emoji hexcodes (hexadecimal codepoints).
- `emojibase-data/meta/shortcodes.json` - An array of all emoji shortcodes.
- `emojibase-data/meta/unicode.json` - An array of all emoji unicode characters, including text and
  emoji presentation characters.

```javascript
import { groups, subgroups, hierarchy } from 'emojibase-data/meta/groups.json';
```

## Data Structure

Each emoji character found within the pre-generated datasets are represented by an object composed
of the properties listed below. In an effort to reduce the overall dataset filesize, most property
values have been implemented using integers,
[with associated constants](https://github.com/milesj/emojibase/blob/master/packages/core/src/constants.ts).

- `annotation` (string) - A localized description, provided by [CLDR 33][cldr], primarily used for
  text-to-speech (TTS) and accessibility.
- `emoji` (string) - The emoji presentation Unicode character.
- `emoticon` (string) - If applicable, an emoticon representing the emoji character.
- `gender` (number) - If applicable, the gender of the emoji character. `0` for female, `1` for
  male.
- `group` (number) - The categorical group the emoji belongs to, ranging from `0` (smileys) to `7`
  (flags).
- `hexcode` (string) - The hexadecimal representation of the emoji Unicode codepoint, including zero
  width joiners and variation selectors.
- `name` (string) - The generated name according to the official [Unicode data][ucd].
- `order` (number) - The order in which emoji should be displayed on a device, through a keyboard or
  emoji picker.
- `shortcodes` (string[]) - An array of community curated shortcodes. _Does not include surrounding
  colons_.
- `skins` (emoji[]) - If applicable, an array of emoji objects for each skin tone modification,
  starting at light skin, and ending with dark skin.
- `subgroup` (number) - The categorical subgroup the emoji belongs to, ranging from `0` to `75`.
- `tags` (string[]) - An array of localized keywords, provided by [CLDR 33][cldr], to use for
  searching and filtering.
- `text` (string) - The text presentation Unicode character.
- `tone` (number) - If applicable, the skin tone of the emoji character. `1` for light skin, `2` for
  medium-light skin, `3` for medium skin, `4` for medium-dark skin, and `5` for dark skin.
- `type` (number) - The default presentation of the emoji character. `0` for text, `1` for emoji.
- `unicode` (string) - Either the emoji or text presentation Unicode character. _Only available in
  the compact dataset._
- `version` (number) - The version in which the emoji character was released.

> Not all properties will be found in the emoji object, as properties without an applicable value
> are omitted from the emoji object.

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
  version: 4,
  skins: [
    {
      annotation: 'man lifting weights: light skin tone',
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
      version: 4,
    },
    // ...
  ],
},
```

## Compact Format

While the emoji data is pretty thorough, not all of it may be required, and as such, a compact
dataset is supported. This dataset supports the following properties: `annotation`, `emoticon`,
`group`, `hexcode`, `order`, `shortcodes`, `skins`, `tags`, and `unicode`.

To use a compact dataset, replace `data.json` with `compact.json`.

```javascript
import data from 'emojibase-data/en/compact.json';
```

```javascript
{
  annotation: 'man lifting weights',
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
  unicode: '🏋️‍♂️',
  skins: [
    {
      annotation: 'man lifting weights: light skin tone',
      group: 0,
      hexcode: '1F3CB-1F3FB-200D-2642-FE0F',
      order: 1522,
      shortcodes: [
        'man_lifting_weights_tone1',
      ],
      unicode: '🏋🏻‍♂️',
    },
    // ...
  ],
},
```

## Fetching From A CDN

If you prefer to not inflate your bundle size with these large JSON datasets, you can fetch them
from our CDN ([provided by jsdelivr.com](https://cdn.jsdelivr.net/npm/emojibase-data@latest/)) using
`fetchFromCDN`.

```javascript
import { fetchFromCDN } from 'emojibase';

fetchFromCDN('en/data.json').then(emojis => {
  // Do something with it!
});
```

Learn more about the [`fetchFromCDN` API](./api.md#fetchFromCDN).

[cldr]: http://cldr.unicode.org/index/downloads/cldr-33
[ucd]: http://unicode.org/Public/10.0.0/ucd/UnicodeData.txt

## Filesizes

| File                  | Size       | Gzipped   |
| --------------------- | ---------- | --------- |
| meta/groups.json      | 2.95 KB    | 988 B     |
| meta/shortcodes.json  | 25.4 KB    | 7.7 KB    |
| meta/unicode.json     | 47.52 KB   | 9.02 KB   |
| versions/emoji.json   | 56.96 KB   | 7.94 KB   |
| versions/unicode.json | 57.08 KB   | 8.06 KB   |
| meta/hexcodes.json    | 59.33 KB   | 8.98 KB   |
| zh-hant/compact.json  | 624.12 KB  | 61.21 KB  |
| zh/compact.json       | 642.16 KB  | 65.66 KB  |
| fr/compact.json       | 646.84 KB  | 62.23 KB  |
| da/compact.json       | 664.28 KB  | 64.98 KB  |
| en-gb/compact.json    | 670.8 KB   | 63.37 KB  |
| en/compact.json       | 670.93 KB  | 63.37 KB  |
| it/compact.json       | 674.88 KB  | 67.63 KB  |
| ja/compact.json       | 677.73 KB  | 69.03 KB  |
| ko/compact.json       | 678.74 KB  | 70.12 KB  |
| pt/compact.json       | 678.83 KB  | 67.92 KB  |
| pl/compact.json       | 687.44 KB  | 71.45 KB  |
| es-mx/compact.json    | 692.93 KB  | 67.89 KB  |
| es/compact.json       | 694.87 KB  | 68.16 KB  |
| de/compact.json       | 701.3 KB   | 72.14 KB  |
| th/compact.json       | 746.57 KB  | 68.64 KB  |
| ru/compact.json       | 777.32 KB  | 80.57 KB  |
| zh-hant/data.json     | 946.64 KB  | 85.63 KB  |
| zh/data.json          | 964.67 KB  | 89.94 KB  |
| fr/data.json          | 969.35 KB  | 86.44 KB  |
| da/data.json          | 986.79 KB  | 89.03 KB  |
| en-gb/data.json       | 993.31 KB  | 87.39 KB  |
| en/data.json          | 993.44 KB  | 87.39 KB  |
| it/data.json          | 997.39 KB  | 91.62 KB  |
| ja/data.json          | 1000.25 KB | 93.33 KB  |
| ko/data.json          | 1001.25 KB | 94.56 KB  |
| pt/data.json          | 1001.34 KB | 92.32 KB  |
| pl/data.json          | 1009.95 KB | 95.54 KB  |
| es-mx/data.json       | 1015.44 KB | 92.34 KB  |
| es/data.json          | 1017.38 KB | 92.59 KB  |
| de/data.json          | 1023.81 KB | 96.96 KB  |
| th/data.json          | 1.04 MB    | 93.01 KB  |
| ru/data.json          | 1.07 MB    | 105.25 KB |
