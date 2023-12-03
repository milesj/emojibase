# Add a new language

## 1) Add locale

Only Unicode CLDR supported locales can be used. See the entire list here:
https://github.com/unicode-org/cldr-json/tree/main/cldr-json/cldr-annotations-full

Once you have a locale, add the locale in kebab-case to the following files:

- `packages/core/src/constants.ts` (to `SUPPORTED_LOCALES` constant)
- `packages/core/src/types.ts` (to `Locale` type)
- `packages/generator/src/constants.ts` (to `LOCALE_COUNTRIES` constant)
- `website/src/components/Filters.tsx` (to `LOCALES` constant)
- `.github/workflows/build.yml` (to `locale` matrix)

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

## 3) Generate data files

Once translations have been made, we can generate the data files. This may take a while, so be sure
to let the command keep running until completion.

```
yarn run generate
```

> A lot of information will be logged to the console, this is normal. However, please scan all logs
> for any warnings and errors. If easily fixable, feel free to fix, otherwise report an issue!

If generation completed successfully, you should see the `packages/data/<locale>` directory with a
handful of files. Once created, create the following files:

- `packages/data/<locale>/compact.json.d.ts`
- `packages/data/<locale>/data.json.d.ts`
- `packages/data/<locale>/messages.json.d.ts`
- `packages/data/<locale>/shortcodes/<preset>.json.d.ts`

> These `.d.ts` files can be copied as-is from another locale, like English (en).

## 4) Verify data files

Although data files were generated, we should manually verify that the data is correct.

- Ensure that there's no empty strings in every `*.raw.json` file.
  - This is as simple as searching for `""` in the file.
  - The `emoji` and `text` fields in `data.raw.json` can be empty.
- Ensure that `label` in `compact.raw.json` and `data.raw.json` align with your locale.
  - These translations are provided by CLDR and cannot be changed.
  - If there are missing labels, then this language/locale _will not be supported_ until CLDR is
    complete.
- Ensure that `message` in `messages.raw.json` align with the translations from
  `po/<locale>/messages.po`.
- Optional: Ensure that shortcodes in `shortcodes/emojibase.raw.json` align with the translations
  from `po/<locale>/shortcodes.po`.

## 5) Update regex patterns

If applicable, when adding a non-Latin locale, you'll most likely need to update our regex pattern
to support the required Unicode range(s).

- `packages/regex/shortcode-native.js` - Add Unicode ranges.

## 6) Create pull request

Once verified, add the following files to git:

- `po/<locale>/*.po`
- `packages/data/<locale>/**/*.raw.json`

And then create a pull request!

> Please limit 1 locale per PR, otherwise we will not accept it.
