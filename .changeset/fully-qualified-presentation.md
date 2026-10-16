---
'emojibase': minor
'emojibase-data': minor
'emojibase-regex': minor
'emojibase-generator': patch
---

Align presentation and qualification with UTS #51:

- The `emoji` field is now the fully-qualified form from `emoji-test.txt`. 152 emoji that default to
  emoji presentation, like 👍 and ⌚, no longer have a redundant `FE0F`.
- `meta/hexcodes.json` now lists statuses exactly as `emoji-test.txt` does. Text presentation
  sequences (`FE0E`) and redundant `FE0F` forms are no longer listed as fully qualified, and the
  skin tone and hair components are listed with the new `COMPONENT` qualifier.
- The `emojibase-regex/emoji` pattern now matches default-emoji characters without `FE0F`.
