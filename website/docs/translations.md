---
title: Translations
---

Emojibase aims to provide full translations for all of its supported locales. However, this is a
lofty goal that has not been met yet, so any contributions or localization suggestions are entirely
welcome!

Translations are localized using
[GNU gettext](https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html)
[.po files](https://github.com/milesj/emojibase/tree/master/po) and can be modified using a po
editor like [Poedit](https://poedit.net/) (please do not edit these files manually). Once you have
made your changes, please commit the changes and submit a pull request.

## Messages

The `messages.po` file contains localized strings for emoji groups, sub-groups, keywords, and any
other emoji related messages.

Each message breaks down to the following:

- `#`: When a group/sub-group, is their unique order and key.
- `msgctxt`: Contextul information. Whether an emoji group, sub-group, or annotation.
- `msgid`: English message to translate.
- `msgstr`: Localized translation.

```python
# 1: people-body
msgctxt "EMOJI GROUP: people-body"
msgid "people & body"
msgstr "Menschen & Körper"
```

> At this point in time, most `meta.po` files were automatically translated using a service and may
> not be 100% accurate. Contributions are welcome!

## Shortcodes

The `shortcodes.po` file contains [Emojibase preset](./shortcodes.md#emojibase) shortcodes for every
non-modification emoji character. Seeing as how these messages are shortcodes, the translation
should match the `msgid` as close as possible, including using underscores (no spaces), and in all
lowercase.

Each message breaks down to the following:

- `#`: The emoji hexcode (without zero-width joiners and variation selectors).
- `msgctxt`: Contextul information. The emoji character and official Unicode annotation.
- `msgid`: English message to translate.
- `msgstr`: Localized translation.

```python
# 1F40D
msgctxt "EMOJI: 🐍 snake"
msgid "snake"
msgstr "змея"
```

> Most locales have not translated their shortcodes yet. Contributions are welcome!
