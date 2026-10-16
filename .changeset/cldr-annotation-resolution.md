---
'emojibase': patch
'emojibase-data': minor
'emojibase-generator': patch
---

Resolve CLDR annotations as UTS #35 describes:

- Locales inherit from their real CLDR parents. `en-gb` now uses `en-001` (129 labels, such as "tick
  box with tick"), and `es-mx` uses `es-419` (450 labels, such as "lentes de sol").
- Labels and keywords inherit separately, so 9 `es-mx` emoji regain their keywords.
- Flags and keycaps without a CLDR label are named in the locale's own words, which fixes all 262
  Danish flags ("flag: USA") and their `cldr` shortcodes.
- Keywords keep their CLDR casing in every locale (German nouns, "OK", "DVD"). A keyword identical
  to the label is now reliably left out of `tags`.
- Fix the Hindi label for regional indicators, which was in Bengali.
