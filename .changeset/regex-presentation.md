---
'emojibase-regex': minor
'emojibase-generator': patch
---

Match emoji by presentation and qualification, as UTS #51 defines them:

- `emoji-loose` now matches every minimally-qualified and unqualified form, such as 🕵‍♂.
- `text` now matches emoji that default to text presentation without `FE0E`, such as a bare ©.
- `text-loose` no longer matches sequences or emoji without a text presentation form, such as 🇺🇸.
- The emoji and text patterns no longer match a character that a selector or skin tone puts in the
  other presentation, such as the ⚠ in ⚠️.
- The `property` patterns now define the `u` flag and actually match emoji: possible emoji,
  fully-qualified emoji, and emoji in text presentation.
