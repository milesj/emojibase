# Specification Alignment

Emojibase aims to be as specification compliant as possible, but to ensure small datasets, and ease
of use, some liberties are taken.

## v11.0

### Separate genders

Separate genders are represented as 3 unique emoji types (people/person, women/woman, or men/man),
each with their own hexcodes.

```json
{
  "annotation": "person in steamy room",
  "name": "PERSON IN STEAMY ROOM",
  "hexcode": "1F9D6"
  // ...
},
{
  "annotation": "man in steamy room",
  "name": "PERSON IN STEAMY ROOM, MALE SIGN",
  "hexcode": "1F9D6-200D-2642-FE0F"
  // ...
},
{
  "annotation": "woman in steamy room",
  "name": "PERSON IN STEAMY ROOM, FEMALE SIGN",
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
  "annotation": "kiss",
  "name": "KISS",
  "hexcode": "1F48F"
  // ...
},
{
  "annotation": "kiss: woman, man",
  "name": "WOMAN, HEAVY BLACK HEART, KISS MARK, MAN",
  "hexcode": "1F469-200D-2764-FE0F-200D-1F48B-200D-1F468"
  // ...
},
{
  "annotation": "kiss: man, man",
  "name": "MAN, HEAVY BLACK HEART, KISS MARK, MAN",
  "hexcode": "1F468-200D-2764-FE0F-200D-1F48B-200D-1F468",
  // ...
},
{
  "annotation": "kiss: woman, woman",
  "name": "WOMAN, HEAVY BLACK HEART, KISS MARK, WOMAN",
  "hexcode": "1F469-200D-2764-FE0F-200D-1F48B-200D-1F469",
  // ...
},
```

> The men and women variants **do not** share a hexcode with the people emoji.

## v12.0

### Combination skin tones

Some [multi-person](http://www.unicode.org/reports/tr51/#Multi_Person_Groupings) emojis (couple,
holding hands, etc) can now change the skin tones of individual persons in the emoji. This is
problematic because:

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
  "annotation": "people holding hands",
  "name": "ADULT, HANDSHAKE, ADULT",
  "hexcode": "1F9D1-200D-1F91D-200D-1F9D1",
  // ...
  "skins": [
    {
      "annotation": "people holding hands: light skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-1-2",
      "hexcode": "1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FB",
      // ...
      "tone": 1
    },
    {
      "annotation": "people holding hands: medium-light skin tone, light skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-1-2",
      "hexcode": "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FB",
      // ...
      "tone": [2, 1]
    },
    {
      "annotation": "people holding hands: medium-light skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-3",
      "hexcode": "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FC",
      // ...
      "tone": 2
    },
    {
      "annotation": "people holding hands: medium skin tone, light skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-1-2",
      "hexcode": "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FB",
      // ...
      "tone": [3, 1]
    },
    {
      "annotation": "people holding hands: medium skin tone, medium-light skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-3",
      "hexcode": "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FC",
      // ...
      "tone": [3, 2]
    },
    {
      "annotation": "people holding hands: medium skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-4",
      "hexcode": "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FD",
      // ...
      "tone": 3
    },
    {
      "annotation": "people holding hands: medium-dark skin tone, light skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-1-2",
      "hexcode": "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FB",
      // ...
      "tone": [4, 1]
    },
    {
      "annotation": "people holding hands: medium-dark skin tone, medium-light skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-3",
      "hexcode": "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FC",
      // ...
      "tone": [4, 2]
    },
    {
      "annotation": "people holding hands: medium-dark skin tone, medium skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-4",
      "hexcode": "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FD",
      // ...
      "tone": [4, 3]
    },
    {
      "annotation": "people holding hands: medium-dark skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-5",
      "hexcode": "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FE",
      // ...
      "tone": 4
    },
    {
      "annotation": "people holding hands: dark skin tone, light skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-1-2",
      "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FB",
      // ...
      "tone": [5, 1]
    },
    {
      "annotation": "people holding hands: dark skin tone, medium-light skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-3",
      "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FC",
      // ...
      "tone": [5, 2]
    },
    {
      "annotation": "people holding hands: dark skin tone, medium skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-4",
      "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FD",
      // ...
      "tone": [5, 3]
    },
    {
      "annotation": "people holding hands: dark skin tone, medium-dark skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-5",
      "hexcode": "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FE",
      // ...
      "tone": [5, 4]
    },
    {
      "annotation": "people holding hands: dark skin tone",
      "name": "ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-6",
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
([more info here](http://www.unicode.org/reports/tr51/#Presentation_Style)). An example of this raw
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
removed from the final output, and all unique properties are merged into the non-variation selector
sibling. Don't fret though, as the [`emoji` property](./data.md#data-structure) _will always_
include the variation selector, along with the `text` property.

The resulting dataset would include the following structure:

```json
{
  "annotation": "copyright",
  "name": "COPYRIGHT SIGN",
  "hexcode": "00A9",
  "emoji": "©️", // 00A9-FE0F
  "text": "©︎" // 00A9-FE0E
  // ...
}
```
