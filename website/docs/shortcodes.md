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
basically slugified variations of the `annotation` field in the Emojibase emoji object.

```
// 😁 beaming face with smiling eyes
:beaming_face_with_smiling_eyes: // English
:ni_yatto_warau: // Japanese
:svetitsya_ot_schastya: // Russian
```

### `cldr-native`

Like [`cldr`](#cldr) but shortcodes are not transliterated to Latin characters. These presets _do
not_ exist for Latin based languages.

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

Emojibase specific shortcodes that abide the following guidelines
([view the full shortcode list](https://github.com/milesj/emojibase/blob/master/packages/generator/src/resources/shortcodes.ts)).

- Uses emotions when describing smileys. For example, "happy" over "smiling face with open mouth &
  smiling eyes". _Some emotions may not align with the image accurately._
- Uses descriptive nouns over verbose phrases. For example, "storm" over "cloud with lightning and
  rain".

```
// 😁 beaming face with smiling eyes
:blissful:, :grin: // English
```

### `github`

Official emoji shortcodes for the [GitHub](https://github.com) platform, powered by the
[official v3 API](https://api.github.com/emojis).

```
// 😁 beaming face with smiling eyes
:grin: // English
```

> This preset _does not_ define shortcodes for skin tone variations.

### `iamcal`

Emoji shortcodes provided by the [emoji-data](https://github.com/iamcal/emoji-data) library, owned
and maintained by [Cal Henderson](https://github.com/iamcal).

```
// 😁 beaming face with smiling eyes
:grin: // English
```

> This preset _does not_ define shortcodes for skin tone variations, nor does it support the latest
> v13 specification.

### `joypixels`

Emoji shortcodes provided by the [emoji-toolkit](https://github.com/joypixels/emoji-toolkit)
library, owned and maintained by [JoyPixels](https://github.com/joypixels) (formerly EmojiOne).

```
// 😁 beaming face with smiling eyes
:grin: // English
```

### `slack`

An alias for the [`iamcal`](#iamcal) preset.

> This preset may not be accurate as Slack does not provide an official implementation for its
> shortcodes. If you would like to improve this solution, please create an issue!

## Localization

If you would like to help translate in any way possible, please create an issue on GitHub.

| Locale                   | `cldr` | `cldr-native` | `emojibase` | `github` | `iamcal` | `joypixels` |
| ------------------------ | :----: | :-----------: | :---------: | :------: | :------: | :---------: |
| Chinese (zh)             |   ✅   |      ✅       |             |          |          |             |
| Chinese, Trad. (zh-hant) |   ✅   |      ✅       |             |          |          |             |
| Danish (da)              |   ✅   |               |             |          |          |             |
| Dutch (nl)               |   ✅   |               |             |          |          |             |
| English (en)             |   ✅   |               |     ✅      |    ✅    |    ✅    |     ✅      |
| English, GB (en-gb)      |   ✅   |               |             |          |          |             |
| Estonian (et)            |   ✅   |               |             |          |          |             |
| Finnish (fi)             |   ✅   |               |             |          |          |             |
| French (fr)              |   ✅   |               |             |          |          |             |
| German (de)              |   ✅   |               |             |          |          |             |
| Hungarian (hu)           |   ✅   |               |             |          |          |             |
| Italian (it)             |   ✅   |               |             |          |          |             |
| Japanese (ja)            |   ✅   |      ✅       |             |          |          |             |
| Korean (ko)              |   ✅   |      ✅       |             |          |          |             |
| Lithuanian (lt)          |   ✅   |               |             |          |          |             |
| Malay (ms)               |   ✅   |               |             |          |          |             |
| Norwegian (nb)           |   ✅   |               |             |          |          |             |
| Polish (pl)              |   ✅   |               |             |          |          |             |
| Portuguese (pt)          |   ✅   |               |             |          |          |             |
| Russian (ru)             |   ✅   |      ✅       |             |          |          |             |
| Spanish (es)             |   ✅   |               |             |          |          |             |
| Spanish, Mexico (es-mx)  |   ✅   |               |             |          |          |             |
| Swedish (sv)             |   ✅   |               |             |          |          |             |
| Thai (th)                |   ✅   |      ✅       |             |          |          |             |
| Ukrainian (uk)           |   ✅   |      ✅       |             |          |          |             |

## Caveats

Some caveats to be aware of when using shortcodes.

- Shortcodes are non-standard and the names/terminology will differ between presets.
- Some emojis may be missing shortcodes depending on the preset.
- There may be duplicate and/or conflicting shortcodes when using multiple presets.
- Presets may not provide shortcodes for the latest emoji/Unicode specifications.

[cldr]: http://cldr.unicode.org/index/downloads/cldr-37
