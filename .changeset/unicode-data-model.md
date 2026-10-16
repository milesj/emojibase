---
'emojibase-data': minor
'emojibase-generator': patch
---

Align the data model with UTS #51:

- Add `gender` to emoji whose people are gendered, like "man health worker" and "old woman", not
  only those with a gender sign.
- Use CLDR short names for sequences in `meta/unicode-names.json`, which keeps every skin tone (e.g.
  "PEOPLE HOLDING HANDS: LIGHT SKIN TONE, MEDIUM-LIGHT SKIN TONE").
- Fix the Danish and Swedish labels and CLDR shortcodes for #️⃣ and 🔟.
