# Change Log

## 18.0.0

### Major Changes

- 8527c93: Update to Emoji v18 and CLDR 49 (beta 1), following UTS #51 revision 31. Adds 9 emoji (🫫 🫹 🫺 🫌 🫝 🛙 🪋
  🪌 🪍), with skin tones for the two thumb signs, and their localized labels and keywords.

### Patch Changes

- 06b8716: Resolve CLDR annotations as UTS #35 describes:
  
  - Locales inherit from their real CLDR parents. `en-gb` now uses `en-001` (129 labels, such as "tick
    box with tick"), and `es-mx` uses `es-419` (450 labels, such as "lentes de sol").
  - Labels and keywords inherit separately, so 9 `es-mx` emoji regain their keywords.
  - Flags and keycaps without a CLDR label are named in the locale's own words, which fixes all 262
    Danish flags ("flag: USA") and their `cldr` shortcodes.
  - Keywords keep their CLDR casing in every locale (German nouns, "OK", "DVD"). A keyword identical
    to the label is now reliably left out of `tags`.
  - Fix the Hindi label for regional indicators, which was in Bengali.
- 29b2c8a: The `cldr-native` and `emojibase-native` presets now include every shortcode, even those that are
  already Latin (such as `cd` and `dvd` in Russian), so they can be used on their own.
- 789b533: Update dependencies to their latest versions, including TypeScript 6.0. The generator now requires
  Node.js 22 or newer.
- 06b8716: Align presentation and qualification with UTS #51:
  
  - The `emoji` field is now the fully-qualified form from `emoji-test.txt`. 152 emoji that default to
    emoji presentation, like 👍 and ⌚, no longer have a redundant `FE0F`.
  - `meta/hexcodes.json` now lists statuses exactly as `emoji-test.txt` does. Text presentation
    sequences (`FE0E`) and redundant `FE0F` forms are no longer listed as fully qualified, and the
    skin tone and hair components are listed with the new `COMPONENT` qualifier.
  - The `emojibase-regex/emoji` pattern now matches default-emoji characters without `FE0F`.
- 06b8716: Match emoji by presentation and qualification, as UTS #51 defines them:
  
  - `emoji-loose` now matches every minimally-qualified and unqualified form, such as 🕵‍♂.
  - `text` now matches emoji that default to text presentation without `FE0E`, such as a bare ©.
  - `text-loose` no longer matches sequences or emoji without a text presentation form, such as 🇺🇸.
  - The emoji and text patterns no longer match a character that a selector or skin tone puts in the
    other presentation, such as the ⚠ in ⚠️.
  - The `property` patterns now define the `u` flag and actually match emoji: possible emoji,
    fully-qualified emoji, and emoji in text presentation.
- 06b8716: Fail the generator when its validation checks report errors, instead of only logging them.
- 789b533: Require Node.js 20 or newer. Packages are now built with tsdown instead of Packemon, which targets
  modern syntax and bundles type declarations into a single `index.d.ts` file. Package entry points
  are unchanged.
- 06b8716: Align the data model with UTS #51:
  
  - Add `gender` to emoji whose people are gendered, like "man health worker" and "old woman", not
    only those with a gender sign.
  - Use CLDR short names for sequences in `meta/unicode-names.json`, which keeps every skin tone (e.g.
    "PEOPLE HOLDING HANDS: LIGHT SKIN TONE, MEDIUM-LIGHT SKIN TONE").
  - Fix the Danish and Swedish labels and CLDR shortcodes for #️⃣ and 🔟.
- 06b8716: Group `versions/unicode.json` by the Emoji Versions table in UTS #51. The Emoji 13.1 sequences moved
  from a "13.1" group (there is no Unicode 13.1) to 13, and components that are not emoji on their
  own, like digits and joiners, are no longer listed.
- Updated dependencies [06b8716]
- Updated dependencies [789b533]
- Updated dependencies [8527c93]
- Updated dependencies [06b8716]
- Updated dependencies [29b2c8a]
- Updated dependencies [29b2c8a]
- Updated dependencies [789b533]
  - emojibase@18.0.0

## 17.0.0

### Major Changes

- 806c507: Update to Emoji v17 and CLDR 48.

### Patch Changes

- Updated dependencies [806c507]
  - emojibase@17.0.0

## 16.0.0

### Major Changes

- e9b9a9a: Add `vi` (Vietnamese) language.
- d237386: Update to Emoji v16 and CLDR 46.
- d237386: Drop Node.js v16 support. Requires >= v18.12.

### Patch Changes

- Updated dependencies [e9b9a9a]
- Updated dependencies [d237386]
- Updated dependencies [d237386]
  - emojibase@16.0.0

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### 15.3.2 - 2024-06-09

#### 🐞 Fixes

- Fix missing group. (#176) ([9f4d2a4](https://github.com/milesj/emojibase/commit/9f4d2a4)), closes
  [#176](https://github.com/milesj/emojibase/issues/176)

**Note:** Version bump only for package emojibase-generator

## <small>15.3.1 (2024-06-03)</small>

- deps: Update dev and test dependencies.
  ([57e8f02](https://github.com/milesj/emojibase/commit/57e8f02))
- deps(lerna): Update to v8.1. ([2f3d1fe](https://github.com/milesj/emojibase/commit/2f3d1fe))
- deps(node-fetch): Removed, using native fetch instead.
  ([c0c6550](https://github.com/milesj/emojibase/commit/c0c6550))
- deps(prettier): Update to v3.3. ([9cb9452](https://github.com/milesj/emojibase/commit/9cb9452))
- deps(typescript): Update to v5.4. ([8756294](https://github.com/milesj/emojibase/commit/8756294))

## 15.3.0 - 2023-12-03

#### 🚀 Updates

- Add shortcodes for v15.1. (#167) ([44afd19](https://github.com/milesj/emojibase/commit/44afd19)),
  closes [#167](https://github.com/milesj/emojibase/issues/167)
- Support Emoji v15.1. (#164) ([b2e0ec6](https://github.com/milesj/emojibase/commit/b2e0ec6)),
  closes [#164](https://github.com/milesj/emojibase/issues/164)
- Use official CLDR JSON packages. (#166)
  ([f6b2dc9](https://github.com/milesj/emojibase/commit/f6b2dc9)), closes
  [#166](https://github.com/milesj/emojibase/issues/166)

**Note:** Version bump only for package emojibase-generator

## 15.2.0 - 2023-10-06

#### 🚀 Updates

- Add hi (Hindi) language. (#165) ([ada3784](https://github.com/milesj/emojibase/commit/ada3784)),
  closes [#165](https://github.com/milesj/emojibase/issues/165)

**Note:** Version bump only for package emojibase-generator

## 15.1.0 - 2023-10-03

#### 🚀 Updates

- Add `bn` (Bengali) language. (#161)
  ([84ea37c](https://github.com/milesj/emojibase/commit/84ea37c)), closes
  [#161](https://github.com/milesj/emojibase/issues/161)
- Support CLDR 43. (#163) ([1094148](https://github.com/milesj/emojibase/commit/1094148)), closes
  [#163](https://github.com/milesj/emojibase/issues/163)

#### 📦 Dependencies

- Update dev and test dependencies. ([90bbe32](https://github.com/milesj/emojibase/commit/90bbe32))
- Update generator dependencies. ([b437b7c](https://github.com/milesj/emojibase/commit/b437b7c))

**Note:** Version bump only for package emojibase-generator

# 15.0.0 - 2023-06-11

#### 🎉 Release

- Support emoji v15! (#146) ([55286b1](https://github.com/milesj/emojibase/commit/55286b1)), closes
  [#146](https://github.com/milesj/emojibase/issues/146)

#### 💥 Breaking

- Align emojibase version with spec. ([614dda2](https://github.com/milesj/emojibase/commit/614dda2))
- Drop Node v14 support. Require v16.12+.
  ([45a889d](https://github.com/milesj/emojibase/commit/45a889d))

#### 📦 Dependencies

- **[beemo-dev]** Update to latest configs.
  ([c54d071](https://github.com/milesj/emojibase/commit/c54d071))
- **[cheerio]** Update to v1.0.0-12. ([29ae455](https://github.com/milesj/emojibase/commit/29ae455))
- **[docusaurus]** Update to v2.4. ([7d05b25](https://github.com/milesj/emojibase/commit/7d05b25))
- **[filesize]** Update to v10. ([f2ee80e](https://github.com/milesj/emojibase/commit/f2ee80e))
- **[fs-extra]** Update to v11. ([0bef172](https://github.com/milesj/emojibase/commit/0bef172))
- **[packemon]** Update to v2.4.1. ([b5bff35](https://github.com/milesj/emojibase/commit/b5bff35))
- **[packemon]** Update to v3. ([ecc31da](https://github.com/milesj/emojibase/commit/ecc31da))
- Update dev and test dependencies. ([57b5f18](https://github.com/milesj/emojibase/commit/57b5f18))
- Update generator ESM deps. ([d3f7233](https://github.com/milesj/emojibase/commit/d3f7233))
- Update minor and patch versions. ([65a5f20](https://github.com/milesj/emojibase/commit/65a5f20))

#### 🛠 Internals

- Fix node-fetch failures. ([79a4e70](https://github.com/milesj/emojibase/commit/79a4e70))
- Get website API build working. ([0cb4284](https://github.com/milesj/emojibase/commit/0cb4284))
- Migrate from beemo to moon. (#144)
  ([0607d6e](https://github.com/milesj/emojibase/commit/0607d6e)), closes
  [#144](https://github.com/milesj/emojibase/issues/144)

**Note:** Version bump only for package emojibase-generator
