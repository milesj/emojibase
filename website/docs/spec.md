---
title: Specification alignment
---

Emojibase aims to be as specification compliant as possible, but to ensure small datasets, and ease
of use, some liberties are taken. It follows
[UTS #51 revision 31](https://www.unicode.org/reports/tr51/tr51-31.html) (Emoji 18.0), and the
annotations section of
[UTS #35](https://www.unicode.org/reports/tr35/tr35-79/tr35-general.html#Annotations) for CLDR 49.

## Annotations

Labels (`label`) and keywords (`tags`) come from CLDR annotations, resolved the way
[UTS #35](https://unicode.org/reports/tr35/tr35-general.html#Annotations) describes:

- Each locale inherits from its CLDR parents, so `en-gb` falls back to `en-001` then `en`, `es-mx`
  to `es-419` then `es`, and `zh-hant` never falls back to Simplified Chinese. Labels and keywords
  inherit separately.
- When CLDR has no label for a flag or keycap, one is built from the locale's own words, like "flag:
  USA" or "keycap: #". UTS #35 describes bare territory names for flags, but CLDR's own data uses
  this "flag: …" form, so emojibase matches it.
- Keywords keep their CLDR casing, such as German nouns and "OK", so fold the case when searching
  (for example with `toLocaleLowerCase(locale)`). A keyword identical to the label is left out of
  `tags`, so search both.
- A character CLDR has not translated yet uses its English label, and the generator lists each one.

## v12.0

### Combination skin tones

Some [multi-person](http://unicode.org/reports/tr51/#Multi_Person_Groupings) emojis (couple, holding
hands, etc) can now change the skin tones of individual persons in the emoji. This is problematic
because:

- The number of combinations may grow over time.
- The number of skin tones for an emoji may be greater than 5.
  - Where should the extra skin tone data reside?
  - How will emoji pickers handle this large number of skin tones?
- Multiple skin tone emojis have hexcodes that no longer match the parent.

For example, the "women holding hands" emoji with dark & light skin tones applied is
`1F469-1F3FF-200D-1F91D-200D-1F469-1F3FB`, while the theoretical parent "women holding hands" emoji
is `1F46D`. Notice that `1F46D` is not found in the skin tone variant hexcode.

For the time being, these multiple skin tone variants are manually mapped to a parent emoji, and are
placed within the `skins` array. Because of this, the `skins` array may contain more than 5 variants
(up to 15 in some cases), and the `tone` property may now be an array of all skin tones.

```json
{
  "label": "people holding hands",
  "hexcode": "1F9D1-200D-1F91D-200D-1F9D1",
  // ...
  "skins": [
    {
      "label": "people holding hands: light skin tone",
      "hexcode": "1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FB",
      // ...
      "tone": 1
    },
    {
      "label": "people holding hands: medium-light skin tone, light skin tone",
      "hexcode": "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FB",
      // ...
      "tone": [2, 1]
    },
    {
      "label": "people holding hands: medium-light skin tone",
      "hexcode": "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FC",
      // ...
      "tone": 2
    },
    {
      "label": "people holding hands: medium skin tone, light skin tone",
      "hexcode": "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FB",
      // ...
      "tone": [3, 1]
    },
    {
      "label": "people holding hands: medium skin tone, medium-light skin tone",
      "hexcode": "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FC",
      // ...
      "tone": [3, 2]
    },
    {
      "label": "people holding hands: medium skin tone",
      "hexcode": "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FD",
      // ...
      "tone": 3
    },
    {
      "label": "people holding hands: medium-dark skin tone, light skin tone",
      "hexcode": "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FB",
      // ...
      "tone": [4, 1]
    },
    {
      "label": "people holding hands: medium-dark skin tone, medium-light skin tone",
      "hexcode": "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FC",
      // ...
      "tone": [4, 2]
    },
    {
      "label": "people holding hands: medium-dark skin tone, medium skin tone",
      "hexcode": "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FD",
      // ...
      "tone": [4, 3]
    },
    {
      "label": "people holding hands: medium-dark skin tone",
      "hexcode": "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FE",
      // ...
      "tone": 4
    },
    {
      "label": "people holding hands: dark skin tone, light skin tone",
      "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FB",
      // ...
      "tone": [5, 1]
    },
    {
      "label": "people holding hands: dark skin tone, medium-light skin tone",
      "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FC",
      // ...
      "tone": [5, 2]
    },
    {
      "label": "people holding hands: dark skin tone, medium skin tone",
      "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FD",
      // ...
      "tone": [5, 3]
    },
    {
      "label": "people holding hands: dark skin tone, medium-dark skin tone",
      "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FE",
      // ...
      "tone": [5, 4]
    },
    {
      "label": "people holding hands: dark skin tone",
      "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FF",
      // ...
      "tone": 5
    }
  ]
}
```

### Merged variation selectors

Before v12, and even pre-emoji, many emoji characters were represented as a single Unicode hexcode.
Overtime, emoji (`FE0F`) and text (`FE0E`) variation selector characters (additional hexcodes) were
appended to emoji characters to differentiate their presentation.

In v12, many existing emoji have been duplicated to always include the emoji variation selector
([more info here](http://unicode.org/reports/tr51/#Presentation_Style)). An example of this raw
dataset looked like the following:

```json
{
  "00A9": {
    "description": "copyright",
    "hexcode": "00A9"
    // ...
  },
  "00A9-FE0F": {
    "description": "copyright",
    "hexcode": "00A9-FE0F"
    // ...
  }
}
```

To avoid duplication across our datasets, the emoji _with_ variation selector (ending in `FE0F`) is
removed from the final output and merged into the sibling without a variation selector, whose
`hexcode` stays variationless.

The [`emoji` property](./datasets.mdx#data-structure) is the fully-qualified form from Unicode's
`emoji-test.txt`. It includes `FE0F` for characters that default to text presentation, like ©, and
leaves it out for characters that already default to emoji presentation, like 👍. The `text`
property is the text presentation sequence, ending in `FE0E`.

The resulting dataset would include the following structure:

```json
[
  {
    "label": "copyright",
    "hexcode": "00A9",
    "emoji": "©️", // 00A9-FE0F
    "text": "©︎" // 00A9-FE0E
    // ...
  },
  {
    "label": "thumbs up",
    "hexcode": "1F44D",
    "emoji": "👍", // 1F44D
    "text": "👍︎" // 1F44D-FE0E
    // ...
  }
]
```

`meta/hexcodes.json` lists the qualification status of each form exactly as `emoji-test.txt` does,
so text presentation sequences are not listed there.

### Components and regional indicators

Skin tone and hair components (🏻 … 🏿, 🦰 … 🦲) are included because they display on their own, but
like Unicode recommends, they are not meant to be offered for input on their own. They are in the
`component` group, and are listed with the `COMPONENT` status in `meta/hexcodes.json`.

Regional indicators (🇦 … 🇿) are not emoji on their own, but are included for convenience. They are
uncategorized, so they have no `group`, `subgroup`, or `order`.

To build a picker of emoji that can be input, skip entries without a group and entries in the
`component` group.

## v11.0

### Separate genders

Separate genders are represented as 3 unique emoji types (people/person, women/woman, or men/man),
each with their own hexcodes.

```json
{
  "label": "person in steamy room",
  "hexcode": "1F9D6"
  // ...
},
{
  "label": "man in steamy room",
  "hexcode": "1F9D6-200D-2642-FE0F"
  // ...
},
{
  "label": "woman in steamy room",
  "hexcode": "1F9D6-200D-2640-FE0F"
  // ...
},
```

> The men and women variants **always** refer back to the people variant through a shared hexcode
> (`1F9D6` in the example above).

### Combination genders

Single emojis that support multiple genders are also represented as unique emojis with their own
hexcodes.

```json
{
  "label": "kiss",
  "hexcode": "1F48F"
  // ...
},
{
  "label": "kiss: woman, man",
  "hexcode": "1F469-200D-2764-FE0F-200D-1F48B-200D-1F468"
  // ...
},
{
  "label": "kiss: man, man",
  "hexcode": "1F468-200D-2764-FE0F-200D-1F48B-200D-1F468",
  // ...
},
{
  "label": "kiss: woman, woman",
  "hexcode": "1F469-200D-2764-FE0F-200D-1F48B-200D-1F469",
  // ...
},
```

> The men and women variants **do not** share a hexcode with the people emoji.
