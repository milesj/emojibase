---
'emojibase-data': patch
---

Fix mistranslated group, subgroup and skin tone messages in 26 locales. Most were machine
translations of the wrong sense, such as "Leichtathletik" (track and field) for German
"person-sport". Others were in the wrong grammatical case, mixed Latin letters into Cyrillic words,
were Traditional Chinese in Simplified Chinese, or split Thai words with spaces.

- Skin tone names now follow CLDR, except in Korean, Thai and Traditional Chinese, which keep their
  neutral light and dark wording.
- "number sign" now follows CLDR, which changes the `cldr` shortcodes for #️⃣ in 20 locales, such as
  `taste_doppelkreuz` in German.
- The Thai regional indicator labels and shortcodes lose a stray "ก".
