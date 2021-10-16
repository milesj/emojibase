Guide for updating emojibase to support new Unicode/Emoji major versions.

## Update `emojibase` package

- Update `LATEST_EMOJI_VERSION` constant. Must use 2 version places ("x.x").
- Update `LATEST_UNICODE_VERSION` constant. Must use 3 version places ("x.x.x").
- Update `LATEST_CLDR_VERSION` constant. Is only the major version ("x").
- Update `EMOJI_VERSIONS` and `UNICODE_VERSIONS` constants. Must use 2 version places ("x.x").

## Update `emojibase-generator` package

...

## Update groups and subgroups

> Skip this section if these have not changed since the previous version.

- Run `yarn generate` to generate new data. The generator must be complete before continuing.
- Run `yarn generate:types`. Copy the `GroupKey` and `SubgroupKey` types to
  `packages/core/src/types.ts`.
- Update `GROUP_KEY_*` constants in `packages/core/src/constants.ts`.
- Update `po/messages.pot` with any new entries.
- Apply pot changes to all `po/<locale>/messages.po` files.
  - Localize every entry without a message!

## Update docs

- Update emoji/unicode versions/links in files:
  - `README.md`
  - `packages/core/README.md`
  - `website/docs/index.md`
- Update CLDR versions/links in files:
  - `README.md`
  - `packages/core/README.md`
  - `website/docs/index.md`
  - `website/docs/datasets.mdx`
  - `website/docs/shortcodes.md`
  - `website/sidebars.js`
- Add entries to all `CHANGELOG.md`'s.
