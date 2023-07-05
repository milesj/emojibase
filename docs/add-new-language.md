# Add a new language

## 1) Add locale

Only Unicode CLDR supported locales can be used. See the entire list here:
https://github.com/unicode-org/cldr/tree/main/common/annotations

Once you have a locale, add the locale in kebab-case to the following files:

- `packages/core/src/types.ts` (to `Locale` type)
- `packages/core/src/constants.ts` (to `SUPPORTED_LOCALES` constant)

And then re-build packages:

```shell
yarn run build
```

## 2) Create translation files

Translations are powered by `.po` (and `.pot`) files. If you're unfamiliar with PO, view the
official documentation here: https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html

Begin by copying the `po/base` folder to `po/<locale>`.

The `messages.po` file is required, and all messages must be translated before moving onto the next
step. We suggest using [Poedit](https://poedit.net/) for translating `.po` files.

The `shortcodes.po` file is optional and can be skipped. This file can be used to provide custom
shortcodes for the emojibase preset.
