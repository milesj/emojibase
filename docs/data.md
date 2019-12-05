# Datasets

Emoji's are generated into JSON files called datasets, with each dataset being grouped into one of
the following: localized data, versioned data, and metadata. These datasets can be found within the
`emojibase-data` package.

```
yarn add emojibase-data
// Or
npm install emojibase-data
```

> JSON files will need to be parsed manually unless handled by a build/bundle process.

## Usage

As stated, there are 3 groups of datasets, each serving a specific purpose. The first group,
localized data, is exactly that, datasets with localization provided by [CLDR 35.1][cldr]. The
following locales and languages are currently supported:

- `emojibase-data/zh/data.json` - Chinese (zh)
- `emojibase-data/zh-hant/data.json` - Chinese, Traditional (zh-hant)
- `emojibase-data/da/data.json` - Danish (da)
- `emojibase-data/nl/data.json` - Dutch (nl)
- `emojibase-data/en/data.json` - English (en)
- `emojibase-data/en-gb/data.json` - English, Great Britain (en-gb)
- `emojibase-data/fr/data.json` - French (fr)
- `emojibase-data/de/data.json` - German (de)
- `emojibase-data/it/data.json` - Italian (it)
- `emojibase-data/ja/data.json` - Japanese (ja)
- `emojibase-data/ko/data.json` - Korean (ko)
- `emojibase-data/ms/data.json` - Malay (ms)
- `emojibase-data/pl/data.json` - Polish (pl)
- `emojibase-data/pt/data.json` - Portuguese (pt)
- `emojibase-data/ru/data.json` - Russian (ru)
- `emojibase-data/es/data.json` - Spanish (es)
- `emojibase-data/es-mx/data.json` - Spanish, Mexico (es-mx)
- `emojibase-data/sv/data.json` - Swedish (sv)
- `emojibase-data/th/data.json` - Thai (th)

These datasets return an array of emoji objects that adhere to the defined
[data structure](#data-structure).

> Missing localizations will fallback to English.

```ts
import emojis from 'emojibase-data/en/data.json';
```

The second group, versioned data, provides datasets for emoji and Unicode release versions. These
datasets return a map, with the key being the version, and the value being an array of emoji
hexcodes included in the associated release version.

- `emojibase-data/versions/emoji.json` - Emoji characters grouped by emoji version.
- `emojibase-data/versions/unicode.json` - Emoji characters grouped by Unicode version.

```ts
import unicodeVersions from 'emojibase-data/versions/unicode.json';
```

The third and last group, metadata, provides specialized datasets for unique use cases.

- `emojibase-data/meta/groups.json` - A map of non-localized emoji groups (Smileys & People),
  subgroups (Sky & Weather), and hierarchy, according to the official Unicode data files.
- `emojibase-data/meta/hexcodes.json` - An array of all emoji hexcodes (hexadecimal codepoints).
- `emojibase-data/meta/shortcodes.json` - An array of all emoji shortcodes.
- `emojibase-data/meta/unicode.json` - An array of all emoji unicode characters, including text and
  emoji presentation characters.

```ts
import { groups, subgroups, hierarchy } from 'emojibase-data/meta/groups.json';
```

## Data Structure

Each emoji character found within the pre-generated datasets are represented by an object composed
of the properties listed below. In an effort to reduce the overall dataset filesize, most property
values have been implemented using integers,
[with associated constants](https://github.com/milesj/emojibase/blob/master/packages/core/src/constants.ts).

- `annotation` (string) - A localized description, provided by [CLDR 35.1][cldr], primarily used for
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
- `tags` (string[]) - An array of localized keywords, provided by [CLDR 35.1][cldr], to use for
  searching and filtering.
- `text` (string) - The text presentation Unicode character.
- `tone` (number | number[]) - If applicable, the skin tone of the emoji character. `1` for light
  skin, `2` for medium-light skin, `3` for medium skin, `4` for medium-dark skin, and `5` for dark
  skin. Multi-person skin tones will be an array of values.
- `type` (number) - The default presentation of the emoji character. `0` for text, `1` for emoji.
- `unicode` (string) - Either the emoji or text presentation Unicode character. _Only available in
  the compact dataset._
- `version` (number) - The version in which the emoji character was released.

> Not all properties will be found in the emoji object, as properties without an applicable value
> are omitted from the emoji object.

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

```ts
import data from 'emojibase-data/en/compact.json';
```

```js
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

```ts
import { fetchFromCDN } from 'emojibase';

fetchFromCDN('en/data.json').then(emojis => {
  // Do something with it!
});
```

Learn more about the [`fetchFromCDN` API](./api.md#fetchFromCDN).

[cldr]: http://cldr.unicode.org/index/downloads/cldr-35
[ucd]: http://unicode.org/Public/10.0.0/ucd/UnicodeData.txt

## Filesizes

| File                  | Size      | Gzipped   |
| --------------------- | --------- | --------- |
| meta/groups.json      | 3.68 KB   | 1.19 KB   |
| meta/shortcodes.json  | 27.41 KB  | 8.23 KB   |
| meta/unicode.json     | 55.72 KB  | 10.25 KB  |
| meta/hexcodes.json    | 70.28 KB  | 10.25 KB  |
| versions/emoji.json   | 72.13 KB  | 9.76 KB   |
| versions/unicode.json | 72.25 KB  | 9.93 KB   |
| zh-hant/compact.json  | 472.25 KB | 67.64 KB  |
| zh/compact.json       | 495.34 KB | 74.4 KB   |
| sv/compact.json       | 504.88 KB | 71.21 KB  |
| da/compact.json       | 508.36 KB | 71.36 KB  |
| en/compact.json       | 509.83 KB | 68.69 KB  |
| en-gb/compact.json    | 510.04 KB | 68.8 KB   |
| fr/compact.json       | 519.16 KB | 70.49 KB  |
| nl/compact.json       | 521.7 KB  | 71.87 KB  |
| ko/compact.json       | 522.68 KB | 76.14 KB  |
| pt/compact.json       | 524.59 KB | 73.89 KB  |
| ja/compact.json       | 526.6 KB  | 76.56 KB  |
| ms/compact.json       | 529.12 KB | 71.95 KB  |
| es-mx/compact.json    | 537.2 KB  | 74.26 KB  |
| pl/compact.json       | 537.46 KB | 77.53 KB  |
| es/compact.json       | 537.61 KB | 73.79 KB  |
| it/compact.json       | 539.58 KB | 75.51 KB  |
| de/compact.json       | 541.4 KB  | 78.01 KB  |
| ru/compact.json       | 633.73 KB | 85.87 KB  |
| th/compact.json       | 642.29 KB | 77.03 KB  |
| zh-hant/data.json     | 763.37 KB | 94.14 KB  |
| zh/data.json          | 786.45 KB | 100.81 KB |
| sv/data.json          | 796 KB    | 97.36 KB  |
| da/data.json          | 799.47 KB | 97.22 KB  |
| en/data.json          | 800.95 KB | 94.5 KB   |
| en-gb/data.json       | 801.16 KB | 94.61 KB  |
| fr/data.json          | 810.27 KB | 96.6 KB   |
| nl/data.json          | 812.81 KB | 97.66 KB  |
| ko/data.json          | 813.8 KB  | 102.54 KB |
| pt/data.json          | 815.71 KB | 99.89 KB  |
| ja/data.json          | 817.72 KB | 103.03 KB |
| ms/data.json          | 820.24 KB | 97.77 KB  |
| es-mx/data.json       | 828.32 KB | 100.27 KB |
| pl/data.json          | 828.57 KB | 103.63 KB |
| es/data.json          | 828.73 KB | 99.81 KB  |
| it/data.json          | 830.69 KB | 101.61 KB |
| de/data.json          | 832.51 KB | 104.47 KB |
| ru/data.json          | 924.84 KB | 112.32 KB |
| th/data.json          | 933.4 KB  | 103.53 KB |
