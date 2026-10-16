---
title: Shortcodes
---

Shortcodes are short and succinct words, surrounded by colons, representing emoji (`:cat:`). They're
primarily used within forums, comments, message posts, and basically anywhere with user-to-user
communication. They exist for situations where an emoji keyboard is not present, but emoji
characters should be supported.

That being said, shortcodes are not officially supported by Unicode or any standard, and are
entirely community driven. Because of this, shortcodes (also known as shortnames), may differ
between implementations, websites, or libraries.

Emojibase aims to solve this problem by providing shortcode presets. Each preset is a distinct
collection of shortcodes that map to emoji hexcodes. They're entirely platform dependent.

## Presets

### `cldr`

Localized shortcodes derived from the official Unicode [CLDR][cldr] annotations. Non-Latin languages
are transliterated to a Latin character equivalent, but may not be entirely accurate. These are
basically slugified variations of the `label` field in the Emojibase emoji object.

```
// 😁 beaming face with smiling eyes
:beaming_face_with_smiling_eyes: // English
:ni_yatto_warau: // Japanese
:svetitsya_ot_schastya: // Russian
```

### `cldr-native`

Like [`cldr`](#cldr) but shortcodes are not transliterated to Latin characters. It includes every
emoji, so it can be used on its own instead of alongside `cldr`. Locales whose shortcodes are all
Latin already do not have this preset.

```
// 😁 beaming face with smiling eyes
:미소_짓는_눈으로_웃는_얼굴: // Korean
:осяйно_всміхнене_обличчя_й_очі: // Ukrainian
```

### `discord`

An alias for the [`joypixels`](#joypixels) preset.

> This preset may not be accurate as Discord does not provide an official implementation for its
> shortcodes. If you would like to improve this solution, please create an issue!

### `emojibase`

Emojibase shortcodes that are carefully crafted and maintained in an effort to push forward an
"official" shortcode standard. It does this by accomplishing the following:

- All emoji (including skin tones) will have a shortcode based on their annotation or Unicode name.
- Many emoji will provide shorthand and alternative shortcodes (primarily in regards to smileys and
  people).
- Commonly used shortcodes from other presets will be supported for interoperability and backwards
  compatibility. This does not guarantee 100% compatibility across the board.

With this standard in place, we would also like to provide localized versions in the future. For
languages that are localized, all shortcodes are transliterated to Latin characters.

### `emojibase-native`

Like [`emojibase`](#emojibase) but shortcodes are _not_ transliterated to Latin characters. It
includes every shortcode, so it can be used on its own instead of alongside `emojibase`. Locales
whose shortcodes are all Latin already do not have this preset.

### `emojibase-legacy`

Deprecated Emojibase shortcodes that preferred emotions/feelings for smiley faces, instead of
literal terms. This caused discrepencies between other platforms, and often did not align visually.

> This preset is no longer maintained but exists for backwards compatibility. It was deprecated
> based on community feedback.

### `github`

Official emoji shortcodes for the [GitHub](https://github.com) platform, powered by the
[official v3 API](https://api.github.com/emojis).

> This preset _does not_ define shortcodes for skin tone variations.

### `iamcal`

Emoji shortcodes provided by the [emoji-data](https://github.com/iamcal/emoji-data) library, owned
and maintained by [Cal Henderson](https://github.com/iamcal).

> This preset _does not_ define shortcodes for skin tone variations, nor does it support the latest
> v13 specification.

### `joypixels`

Emoji shortcodes provided by the [emoji-toolkit](https://github.com/joypixels/emoji-toolkit)
library, owned and maintained by [JoyPixels](https://github.com/joypixels) (formerly EmojiOne).

### `slack`

An alias for the [`iamcal`](#iamcal) preset.

> This preset may not be accurate as Slack does not provide an official implementation for its
> shortcodes. If you would like to improve this solution, please create an issue!

## Localization

| Locale                   | `cldr` | `cldr-native` | `emojibase` | `emojibase-legacy` | `github` | `iamcal` | `joypixels` |
| ------------------------ | :----: | :-----------: | :---------: | :----------------: | :------: | :------: | :---------: |
| Bengali (bn)             |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Chinese (zh)             |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Chinese, Trad. (zh-hant) |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Danish (da)              |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Dutch (nl)               |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| English (en)             |   ✅   |      ✅       |     ✅      |         ✅         |    ✅    |    ✅    |     ✅      |
| English, GB (en-gb)      |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Estonian (et)            |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Finnish (fi)             |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| French (fr)              |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| German (de)              |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Hindu (hi)               |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Hungarian (hu)           |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Italian (it)             |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Japanese (ja)            |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Korean (ko)              |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Lithuanian (lt)          |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Malay (ms)               |   ✅   |               |     ✴️      |                    |          |          |             |
| Norwegian (nb)           |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Polish (pl)              |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Portuguese (pt)          |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Russian (ru)             |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Spanish (es)             |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Spanish, Mexico (es-mx)  |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Swedish (sv)             |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Thai (th)                |   ✅   |      ✅       |     ✴️      |                    |          |          |             |
| Ukrainian (uk)           |   ✅   |      ✅       |     ✴️      |                    |          |          |             |

- ✅ Fully translated and released
- ✳️ Partially translated and released
- ✴️ In progress but not released

### Submitting translations

## Caveats

Some caveats to be aware of when using shortcodes.

- Shortcodes are non-standard and the names/terminology will differ between presets.
- Some emojis may be missing shortcodes depending on the preset.
- There may be duplicate and/or conflicting shortcodes when using multiple presets.
- Presets may not provide shortcodes for the latest emoji/Unicode specifications.

[cldr]: https://cldr.unicode.org/downloads/cldr-49
