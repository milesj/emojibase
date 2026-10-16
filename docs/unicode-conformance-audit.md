# Unicode conformance audit: UTS #51 and UTS #35 annotations

- **Scope:** `packages/generator` (data pipeline), `packages/core` helpers, `packages/regex`, and
  the generated `packages/data/*` outputs.
- **Baseline:** Emoji 17.0 / Unicode 17.0.0 / CLDR 48, commit `a5fc630a` (tag `emojibase@17.0.0`).
- **Specs:**
  - [UTS #51 rev 29](https://www.unicode.org/reports/tr51/tr51-29.html), the Emoji 17.0 revision.
    The current revision is rev 31 (Emoji 18.0, released 2026-09-15). Its changes do not affect
    these findings, apart from the note under U1.
  - [UTS #35 Part 2: General, Annotations](https://unicode.org/reports/tr35/tr35-general.html#Annotations),
    tr35-76 (CLDR 48). The Annotations text is unchanged up to tr35-79.
  - [UTS #35 Part 1: Core](https://unicode.org/reports/tr35/tr35.html#Bundle_vs_Item_Lookup) for
    inheritance.
  - Section and definition numbers below refer to these revisions.
- **Method:** I read the generator source end to end. I then checked each suspected issue against
  the tracked `*.raw.json` outputs, the cached Unicode 17.0 data files in `cache/17.0/`, and the
  `cldr-*-full@48` packages in `node_modules`. Every number below was measured this way.

## Summary

Emoji coverage is correct. All 3,944 fully-qualified entries in `emoji-test.txt` are present in the
data. No sequence outside the RGI sets is emitted. Every multi-skin-tone grouping maps to a parent.
Default `type` matches `Emoji_Presentation` for every single-code-point emoji.

The problems are in four areas:

1. **Presentation and qualification.** For default-emoji-presentation characters, the `emoji` field,
   the strict regex and `meta/hexcodes.json` all assume that any character with a variation sequence
   is text-default.
2. **CLDR locale inheritance.** It does not follow the CLDR parent chain. This produces wrong labels
   and keywords for `en-gb` and `es-mx`.
3. **Name synthesis.** When CLDR derived data is missing, flag and keycap names are not synthesized
   the way UTS #35 describes. Raw text from the Unicode data files, such as `\x{23}` and
   `bookmark..water pistol`, ends up in user-facing labels.
4. **The `property/*` regexes.** They do not work.

| ID  | Severity | Spec   | Finding                                                                                   |
| --- | -------- | ------ | ----------------------------------------------------------------------------------------- |
| U1  | High     | UTS 51 | `emoji` field is a non-RGI `X FE0F` string for 152 default-emoji-presentation characters  |
| U2  | High     | UTS 51 | Strict and loose regex variants ignore default presentation (e.g. `emoji` misses bare 👍) |
| U3  | High     | UTS 51 | `emojibase-regex/property/*` never matches emoji (no `u` flag) and is semantically wrong  |
| C1  | High     | UTS 35 | Locale inheritance skips `en-001` / `es-419` and maps `zh-Hant` → `zh`                    |
| C2  | Medium   | UTS 35 | Keywords and `tts` are not inherited independently, so keywords are dropped               |
| C3  | Medium   | UTS 35 | Flag and keycap names are not synthesized; raw data-file text leaks into labels           |
| U4  | Medium   | UTS 51 | Text presentation sequences (and redundant `FE0F`) are marked fully-qualified             |
| U5  | Medium   | UTS 51 | `emoji-data.txt` properties are overwritten by `emoji-sequences.txt`                      |
| U6  | Medium   | UTS 51 | Unicode-version mapping invents "Unicode 13.1" and maps E0.0 to 6.0                       |
| C4  | Low–Med  | UTS 35 | CLDR keywords are lowercased (German nouns, acronyms, proper nouns altered)               |
| U7  | Low      | UTS 51 | Description parsing: escapes not decoded, range names reused, greedy regex                |
| U8  | Low      | UTS 51 | `meta/unicode-names.json` sequence names are synthetic and drop skin tones                |
| U9  | Low      | UTS 51 | `component` qualification status is discarded; components/RIs are not distinguishable     |
| U10 | Low      | UTS 51 | Gender is detected only from ♀/♂; 85 man/woman ZWJ sequences have no gender             |
| C5  | Low      | UTS 35 | Missing values fall back to English rather than ending at root                            |
| C6  | Low      | UTS 35 | Lookup keys also strip ZWJ (CLDR `cp` omits only VS15/VS16)                               |
| P1  | Medium   | —      | Validation never fails the build; tests cannot catch U1/U2                                |

Severity: **High** means consumers receive incorrect data or behavior today. **Medium** means
incorrect data with narrower impact, or a latent defect one change away from producing wrong output.
**Low** means a fidelity or consistency issue.

---

## UTS #51 findings

### U1 — `emoji` field emits non-RGI `X FE0F` for default-emoji-presentation characters (High)

**Spec.** A character with `Emoji_Presentation=Yes` displays as emoji by default (UTS #51 ED-6,
default emoji presentation character). Its fully-qualified form is the bare code point.
`emoji-test.txt` lists `1F44D ; fully-qualified # 👍`. `Basic_Emoji` in `emoji-sequences.txt`
contains `1F44D` and does not contain `1F44D FE0F`. §2.7.1 says an emoji character should get `FE0F`
when it is default-text (`Emoji_Presentation=No`) and emoji presentation is wanted (ED-7, ED-9a).
Rev 31 (Emoji 18.0) adds that selectors should not be added to existing text without an explicit
user request.

**Implementation.** `emoji-variation-sequences.txt` lists 371 bases. 152 of them have
`Emoji_Presentation=Yes`, for example ⌚ `231A`, ☔ `2614`, ✋ `270B`, 👍 `1F44D`, 👽 `1F47D` and 😐
`1F610`. For any emoji that has `variations`, `createEmoji` sets `emoji` to the `FE0F` form,
whatever its default presentation
([generateData.ts:71-74](packages/generator/src/generators/generateData.ts:71)).

**Impact.** For these 152 emoji, `data.json` / `compact.json` `emoji` and `unicode` hold
`U+1F44D U+FE0F`. That string is not in `emoji-test.txt` or any RGI set. Keyboards and pickers that
insert the `emoji` field emit non-RGI text, and string-equality lookups against other emoji sources
fail. The `website/docs/spec.md` note ("the `emoji` property will always include the variation
selector") was written for text-default characters such as ©. It now covers characters where it is
wrong.

### U2 — Regex presentation variants contradict default presentation (High)

**Spec.** UTS #51 ED-6 and ED-7 define default presentation. ED-17a, ED-18, ED-18a and ED-19 define
qualification, and ED-28 assigns every `emoji-test.txt` form a status. §2.7.1 says flag and modifier
sequences never take a selector and always display as emoji. The regexes are documented as "matches
only emoji presentation characters", "only text presentation characters", and so on.

**Implementation.** [generateRegex.ts:61-99](packages/generator/src/generators/generateRegex.ts:61)
decides presentation only from whether `variations` exists.

Results, run against the published patterns:

| Input                        | `emoji` | `emoji-loose` | `text` | `text-loose` | Expected                    |
| ---------------------------- | :-----: | :-----------: | :----: | :----------: | --------------------------- |
| 👍 `1F44D` (default emoji)   |    ✗    |       ✓       |   ✗    |    **✓**     | emoji ✓; text-loose ✗       |
| ⌚ `231A` (default emoji)    |    ✗    |       ✓       |   ✗    |    **✓**     | emoji ✓; text-loose ✗       |
| © `00A9` (default text)     |    ✗    |       ✓       | **✗**  |      ✓       | text ✓ (default text)       |
| 🇺🇸 flag / 🏴󠁧󠁢󠁳󠁣󠁴󠁿 tag / #️⃣ keycap |    ✓    |       ✓       |   ✗    |    **✓**     | text-loose ✗ (no text form) |
| 🏃‍♀️ ZWJ (fully-qualified)     |    ✓    |       ✓       |   ✗    |    **✓**     | text-loose ✗                |
| 🏃‍♀ ZWJ (unqualified)         |    ✗    |     **✗**     |   ✗    |      ✗       | emoji-loose ✓               |
| #⃣ keycap (unqualified)      |    ✗    |     **✗**     |   ✗    |      ✗       | emoji-loose ✓               |

The strict `emoji` pattern misses all 152 default-emoji characters from U1 in their RGI form.
`text-loose` matches essentially every emoji, including sequences that have no text presentation.
`emoji-loose` does not include the minimally-qualified and unqualified forms that `index` already
includes.

The regex tests build their cases from the dataset's own `emoji` field
([regex.test.ts](packages/regex/tests/regex.test.ts)), so they inherit U1 and cannot detect this.

### U3 — `emojibase-regex/property/*` patterns do not work (High, documented as experimental)

**Spec.** UTS #51 §1.4.9 (EBNF and Regex) gives a sequence-aware grammar for possible emoji, which
are then checked against the RGI sets. Annex A notes that `Emoji` includes the keycap bases `0–9`,
`#` and `*`, so `\p{Emoji}` alone matches too much.

**Implementation.** The three hand-written files in
[packages/regex/property](packages/regex/property/index.js) export literals without the `u` flag. In
JavaScript, `\p{Emoji}` without `u` is the literal text `p{Emoji}`:

- `"xp{Emoji}y".match(PROPERTY_REGEX)` returns `"p{Emoji}"`.
- `"👍".match(PROPERTY_REGEX)` returns `null`.

Even with `u` added:

- `index` matches `"1"` and `"#"`.
- `text` (`\P{Emoji_Presentation}`) matches every non-emoji character, including `"a"`.
- No pattern matches a ZWJ, flag, keycap or tag sequence as a single unit. `👨‍👩‍👧` matches as `👨`, and
  `🇺🇸` as `🇺`.

### U4 — Text presentation sequences are recorded as fully-qualified (Medium)

**Spec.** A qualified emoji character either has default emoji presentation or is followed by `FE0F`
(ED-17a). `X FE0E` is a text presentation sequence (ED-8a), not a fully-qualified emoji (ED-18).
`emoji-test.txt` never lists `FE0E` forms, and its statuses define `RGI_Emoji_Qualification`
(ED-28).

**Implementation.**
[joinMetadataToData.ts:83-89](packages/generator/src/builders/joinMetadataToData.ts:83) sets
`qualifiers[variations.text] = FULLY_QUALIFIED` and `qualifiers[variations.emoji] = FULLY_QUALIFIED`
for every variation base. In `meta/hexcodes.json`:

- `"263A": { "263A-FE0F": 0, "263A": 2, "263A-FE0E": 0 }`. The `FE0E` form is marked as
  fully-qualified (0).
- `"231A": { "231A": 0, "231A-FE0F": 0, "231A-FE0E": 0 }`. This invents two fully-qualified forms
  that are not in `emoji-test.txt`.

### U5 — `emoji-data.txt` properties are overwritten when sequences are joined (Medium, latent)

**Implementation.** [joinData.ts:3-7](packages/generator/src/builders/joinData.ts:3) assigns
`emojis[hexcode] = data[hexcode]`. When `emoji-sequences.txt` lists a code point as `Basic_Emoji`,
its `emoji-data.txt` record is replaced.

**Impact.** 1,193 code points lose `Emoji`, `Emoji_Presentation`, `Emoji_Modifier_Base` (125 of
them), `Emoji_Modifier` and `Emoji_Component`. For example, `1F3FB` goes from
`[Emoji, Emoji_Presentation, Emoji_Modifier, Emoji_Component]` to `[Basic_Emoji]`. Consequences:

- `HIDDEN_EMOJI_PROPERTIES` ([constants.ts:74](packages/generator/src/constants.ts:74)) lists
  `Emoji_Modifier` and `Emoji_Component`, but neither can match the 9 components (skin tones and
  hair) any more. Showing them is an accident, not a decision (see U9).
- `type` is correct only because of the `Basic_Emoji`/`*Sequence` heuristic in
  [joinMetadataToData.ts:24-29](packages/generator/src/builders/joinMetadataToData.ts:24).
- **Latent trap.**
  [joinModifiersToData.ts:141-152](packages/generator/src/builders/joinModifiersToData.ts:141)
  creates five skin-tone variants for every character that still has `Emoji_Modifier_Base`. Today it
  only runs for text-default bases, and those all have RGI modifier sequences. `1F46A` 👪 family is
  `Emoji_Modifier_Base` but has **no** RGI modifier sequences. Fix the property merge alone and the
  generator will emit five non-RGI `👪🏻…👪🏿` emoji. Only `RGI_Emoji_Modifier_Sequence` entries
  (ED-22, part of the RGI set ED-27) should be emitted. §2.6 calls family a special case.

### U6 — Unicode version mapping is not the UTS #51 mapping (Medium)

[extractUnicodeVersion.ts](packages/generator/src/parsers/extractUnicodeVersion.ts) returns the
emoji version unchanged for E11 and later, and returns 6 for anything it does not recognise.

- `versions/unicode.json` has a `"13.1"` bucket (217 hexcodes, counting skin variants). There is no
  Unicode 13.1. The UTS #51 §1.5.2 Emoji Versions table pairs E13.1 with Unicode 13.0. E12.1 and
  E15.1 do pair with the real Unicode versions 12.1 and 15.1.
- `parseSequences` never passes `unicodeVersion`
  ([parseSequences.ts:36](packages/generator/src/parsers/parseSequences.ts:36)), so sequences and
  code points go through different code paths.
- E0.0 entries (digits, `#`, `*`, regional indicators, tags, ZWJ, `FE0F`) fall through to
  `default: 6`. Per §1.5.2, E0.0 labels most components whatever their encoding date, so the label
  does not map to any Unicode version.
- The meaning of the bucket is undefined. © `00A9` is listed under 6, which is the version where it
  became an emoji (E0.6). Its Unicode Age is 1.1. The docs say "grouped by Unicode version". The
  field should be defined as one or the other.

### U7 — Description parsing corrupts names (Low, but feeds C3)

- **Escapes are not decoded.** `emoji-sequences.txt` writes `#` as `\x{23}` in field 3. The parsed
  description is `keycap: \x{23}`. `generateCldr.ts` decodes this for shortcodes
  (`decodeEscapeSequence`), but labels do not.
- **Range lines share one description.** `1F516..1F52B ; Basic_Emoji ; bookmark..water pistol` gives
  all 22 code points the description `bookmark..water pistol`. This affects 1,306 records, including
  🔟 `1F51F`.
- **The comment regex is greedy.** `/\(*.+\)/` in
  [extractLineDescription.ts:11](packages/generator/src/parsers/extractLineDescription.ts:11)
  deletes everything up to the _last_ `)`. 🅰 `1F170` and 🅱 `1F171` ("A button (blood type)") end
  up with an empty description.

### U8 — `meta/unicode-names.json` sequence names are synthetic and lossy (Low)

The docs describe this file as "official Unicode names". Sequences have no `Name` property. The
canonical English name for a sequence is the CLDR short name in field 3 of `emoji-sequences.txt` and
`emoji-zwj-sequences.txt`. The generator instead joins code point names, and keeps only the _last_
skin tone ([joinMetadataToData.ts:46-62](packages/generator/src/builders/joinMetadataToData.ts:46)).
For example, 🧑🏻‍🤝‍🧑🏼 becomes `ADULT, HANDSHAKE, ADULT, EMOJI MODIFIER FITZPATRICK TYPE-3`, and the first
tone (TYPE-1-2) is lost.

### U9 — `component` status discarded; components and RIs are not identifiable (Low)

`emoji-test.txt` uses four statuses. Rev 29 (Emoji 17.0) formalised the fourth as the
`Standalone_Component` value of `RGI_Emoji_Qualification` (ED-28).
[extractQualifier.ts](packages/generator/src/parsers/extractQualifier.ts) maps `component` to
`null`, so the 9 components have `qualifiers: {}` and are missing from `meta/hexcodes.json`.

ED-5 and ED-20 say skin-tone and hair components should display on their own (they are in
`Basic_Emoji`) but are normally not offered as separate keyboard choices. The dataset includes them
as ordinary entries (group 2) and has no flag to mark them.

The dataset also includes the 26 regional indicators, with no `group`/`order` and labels from PO
files. Regional indicators are not in `Basic_Emoji` or `emoji-test.txt`; C3 only allows a lone one
to be shown as a specially styled letter. Including both groups is a reasonable product choice, but
consumers cannot reliably filter them out of a picker.

### U10 — Gender metadata is incomplete (Low)

[extractGender.ts](packages/generator/src/parsers/extractGender.ts) only looks for the substrings
`2640` and `2642`. 👨‍⚕️ / 👩‍⚕️ and 83 other man/woman ZWJ sequences, plus 👨 👩 👴 🕺 and similar code
points, have no `gender`. 🏃‍♂️ does. UTS #51 §2.3.1 defines two equal ways to mark gender: the sign
format (base + ZWJ + ♀/♂) and the object format (MAN/WOMAN + ZWJ + object). §2.3 also lists the
single code points that have explicit gender.

Minor: the `parentBoth` entries for bunny ears and wrestling in
[constants.ts:111,119](packages/generator/src/constants.ts:111) point at sequences that do not exist
in Emoji 17.0. Nothing references them yet.

---

## UTS #35 annotation findings

### C1 — Locale inheritance does not follow the CLDR parent chain (High)

**Spec.** Annotations have no special inheritance rule; they use normal item lookup (UTS #35 Part 1
#Bundle_vs_Item_Lookup and #Parent_Locales). Lookup goes locale → `parentLocale`, or truncation if
there is none → … → root. The default locale is never consulted. In CLDR 48 `supplementalData.xml`,
the relevant chains are:

- `en_GB → en_001 → en → root`
- `es_MX → es_419 → es → root`
- `zh_Hant → root`, through the `nonlikelyScript` rule. It does not go to `zh`, which is Simplified.
- `nb → no`. The code already handles this with an alias.

The CLDR `cldr-json` packages contain each locale's own values only, so this chain has to be
resolved by the consumer.

**Implementation.**
[buildAnnotationData.ts:84-89](packages/generator/src/builders/buildAnnotationData.ts:84) uses
`locale.split('-')[0]` as the parent, then appends English.

Measured against the correct chain:

- **`en-gb`:** 129 of 3,979 labels and 149 of 1,949 keyword sets differ. Examples:

  - "face savoring food" (CLDR: "face savouring food")
  - "zipper-mouth face" (CLDR: "zip-mouth face")
  - "Mrs. Claus" (CLDR: "Mrs Claus")

  CLDR ships 427 + 358 `en-001` entries, and none of them are used.

- **`es-mx`:** 450 of 3,979 labels and 766 of 1,949 keyword sets fall back to European Spanish.
  Examples:

  - 😎 "…con gafas de sol" (CLDR: "…con lentes de sol")
  - 🤐 "…con cremallera" (CLDR: "…con cierre")

  `es-419` has 1,405 + 1,302 entries, and none of them are used.

- **`zh-hant`:** currently correct only because CLDR `zh-Hant` is complete. Any gap would be filled
  with Simplified Chinese from `zh`.

### C2 — `tts` and keywords are not inherited independently (Medium)

**Spec.** Resolution adds each item whose element chain is not already present, comparing only
distinguishing attributes (UTS #35 Part 1 #Resolved_Data_File). For annotations those attributes are
`cp`, `type` and `alt`. So `<annotation cp="…">` (keywords) and `<annotation cp="…" type="tts">`
(short name) are separate items, and each one inherits on its own.

**Implementation.** [loadAnnotations.ts:51-64](packages/generator/src/loaders/loadAnnotations.ts:51)
initialises `tags: []` for every entry. `extractField` then treats `[]` as a value, because an empty
array is truthy
([buildAnnotationData.ts:106](packages/generator/src/builders/buildAnnotationData.ts:106)). A child
locale that overrides only the name blocks keyword inheritance.

In `es-mx`, 9 emoji have no keywords at all: 🙀 `1F640`, 🤎 `1F90E`, 🧒 `1F9D2`, 💏 `1F48F`, 🛹
`1F6F9`, ✖ `2716`, ➗ `2797`, ™ `2122` and ☸ `2638`. `es-419` and `es` both define keywords for
these.

### C3 — Flag and keycap names are not synthesized; raw file text leaks into labels (Medium)

**Spec.** UTS #35 "Synthesizing Sequence Names" applies when neither the explicit annotations nor
`annotationsDerived` has an entry for the string.

- **Keycaps (step 3).** This step explicitly includes 🔟. The name is
  `category-list("keycap" characterLabel, key)`, for example "keycap: #", "Taste: #", "keycap: 10".
  The keyword is the localized "keycap".
- **Flags (step 1).** The step as written returns the territory or subdivision name, and the keyword
  is the localized "flag". CLDR's own derived output instead uses `category-list("flag", name)`, for
  example "flag: United States". So the spec text and the CLDR data disagree on flag names, but both
  require the "flag" keyword.

The step cross-references in the published algorithm are stale: a step was inserted in LDML 44 and
the "go to step N" references were not renumbered. Follow the CLDR data where the text is ambiguous.

**Implementation.**
[loadLocalization.ts:33-35](packages/generator/src/loaders/loadLocalization.ts:33) loads only
`characterLabelPatterns`, never `characterLabels`. The fallbacks in
[buildAnnotationData.ts:164-199](packages/generator/src/builders/buildAnnotationData.ts:164) use the
bare territory name, or the English description from the data file.

Observed output:

- **`da`:** CLDR 48 `da` derived annotations contain no flags. All 262 flags are labelled with the
  bare territory name ("USA", "Kenya", "England"). That matches the spec text, but not CLDR's output
  format or the other 27 emojibase locales, which all read "flag: …". None of these flags has the
  required "flag" keyword: the only tag added is the region code. The CLDR `da` `characterLabel` for
  flag is "flag".
- **`da` and `sv`:**

  - #️⃣ is labelled `keycap: \x{23}`.
  - _️⃣ is labelled `keycap: _`.
  - 🔟 is labelled `bookmark..water pistol`. The same strings also appear in `tags`.

  The root cause is U7 combined with the English-description fallback for keycaps.

- `fr` and `hi`: 🎺 `1FA8A` is labelled "trombone" (English fallback, see C5).

The `cldr` / `cldr-native` shortcode presets are generated from these labels
([generateCldr.ts:103-111](packages/generator/src/generators/shortcodes/generateCldr.ts:103)), so C1
and C3 also ship as shortcodes:

| Locale    | Emoji | Shortcode                         |
| --------- | ----- | --------------------------------- |
| `da`/`sv` | 🔟    | `bookmarkwater_pistol`            |
| `da`      | 🇺🇸    | `usa` (`sv` has `flagga_usa`)     |
| `en-gb`   | 😋    | `face_savoring_food`              |
| `es-mx`   | 😎    | `cara_sonriendo_con_gafas_de_sol` |

### C4 — CLDR keywords are lowercased (Low–Medium)

[loadAnnotations.ts:63](packages/generator/src/loaders/loadAnnotations.ts:63) applies
`toLocaleLowerCase()` with no locale argument to every keyword. UTS #35 says nothing about case. The
CLDR "Short Names and Keywords" guidelines use middle-of-sentence capitalization, which keeps proper
nouns and German nouns capitalized, so the CLDR values are deliberately cased:

- **German:** all 1,597 keyword lists change. Nouns such as "Gesicht", "Augen" and "Taste" become
  "gesicht", "augen" and "taste".
- **English and French:** "OK", "TRUE", "Vulcan", "Bible" and "Munch" are lowercased.
- **Japanese:** "UFO" and "OKの手" are lowercased.

Case-insensitive search should happen when matching, not by rewriting the source data.

Related keyword post-processing (Info):

- UTS #35 says the short name should also act as a keyword. Emojibase removes it from `tags`, but
  only when more than one keyword exists
  ([generateData.ts:93-95](packages/generator/src/generators/generateData.ts:93)). Search has to
  check `label` as well as `tags`.
- Skin-tone variants drop their CLDR-derived keywords entirely.

### C5 — English fallback instead of root (Low)

`extractField` uses `en` as the last resort, so non-English datasets can contain English strings.
CLDR item lookup never uses the default locale; it ends at root. Root's annotations are placeholders
such as `E10-440`, and the root file says missing items must be synthesized. So a missing value
should be synthesized or reported, not filled in from another language, and not taken from root.

### C6 — Lookup keys strip ZWJ (Low)

UTS #35 (#cp_attribute) says `cp` values never contain VS15 or VS16, and both are stripped before
lookup. ZWJ is kept: for example, the CLDR key for 🏳️‍🌈 is `1F3F3 200D 1F308`. `stripHexcode` also
removes `200D` ([core/stripHexcode.ts](packages/core/src/stripHexcode.ts)). No fully-qualified emoji
collide today (checked), but the key does not match CLDR's key, so any future collision would be
silent.

The `↑↑↑` handling in `extractField` is effectively dead code. The CLDR 48 XML contains the marker
(for example 3,539 in `en_AU`), but `cldr-json` drops those values: no file in `node_modules`
contains it. Inheritance therefore has to come from the missing value, which is what C1 is about.

---

## Process finding

### P1 — Validation is advisory only (Medium)

`verifyTotals`, `verifyDataIntegrity`, `validateDataAgainstOfficialList` and the "missing ZWJ
annotation" checks all call `log.error` and carry on. None of them fails the build. The data tests
([packages/data/tests/data.test.ts](packages/data/tests/data.test.ts)) check structure, not
conformance. Nothing compares the output with `emoji-test.txt` or the CLDR-resolved values, so U1,
U2, C1, C2 and C3 all shipped without failing a check.

Separately, the Hindi PO translation of "regional indicator %s" is in Bengali script
(`আঞ্চলিক সূচক`). This is a localisation bug, not a spec finding.

---

## Remediation plan

The plan is ordered so that each step can be one reviewable PR, with tests landing before or
alongside the change they protect. Steps 1, 2, 3 and 4 change published data, so they should ship
together in one clearly flagged release. The `emoji` strings, keyword casing, qualifier maps and
version buckets all change.

### Step 0 — Conformance tests first (guards for everything below) ✅ done

What was built:

- **Fixtures.** The official Unicode 17.0 `emoji-test.txt` and `emoji-variation-sequences.txt` live
  unmodified in `tests/__fixtures__/v17/`, because `cache/` is gitignored.
- **Suite.** [packages/data/tests/conformance.test.ts](../packages/data/tests/conformance.test.ts)
  checks the shipped datasets and regex patterns. Its oracles in `conformance/unicode.ts` and
  `conformance/cldr.ts` share no code with the generator.

| Check id                      | Covers                                                                                                   |
| ----------------------------- | -------------------------------------------------------------------------------------------------------- |
| `uts51/coverage`, `uts51/rgi` | Every RGI emoji appears exactly once; nothing else does (regional indicators exempt)                     |
| `uts51/emoji-field`           | `emoji` equals the fully-qualified string (U1)                                                           |
| `uts51/presentation-type`     | `type` matches default presentation                                                                      |
| `uts51/version`               | `version` equals the `emoji-test.txt` E-version                                                          |
| `uts51/meta-hexcodes`         | `meta/hexcodes.json` statuses equal `emoji-test.txt` (U4, U9)                                            |
| `uts51/versions-*`            | `versions/emoji.json` and `versions/unicode.json` buckets (U6)                                           |
| `uts51/regex`                 | Every pattern against every form, plus non-emoji negatives, per the Step 4 table (U2, U3)                |
| `uts35/<locale>/labels`       | Labels equal the CLDR name along the real parent chain, or the synthesized flag/keycap name (C1, C3, C5) |
| `uts35/<locale>/keywords`     | Tags equal CLDR keywords, inherited separately from names (C1, C2, C3)                                   |
| `uts35/<locale>/keyword-case` | CLDR keyword casing is preserved (C4)                                                                    |

The baseline works like a ratchet:

- **Known violations** are recorded in `tests/conformance-baseline.json`, so the suite passes today.
- **Any new violation** fails the suite.
- **A fixed violation still recorded in the baseline** also fails the suite, until it is removed.
- **Updating the baseline:** each later step runs `yarn test:conformance:update` and commits the
  smaller baseline. That diff shows exactly what the step fixed.

CLDR checks follow `TEST_LOCALE`, as in CI. The update command covers every locale.

The generator now fails instead of only logging. Validation errors go through `reportFailure`
(`packages/generator/src/helpers/validation.ts`). `assertNoFailures` then throws before
`buildVersionedData`, `buildEmojiData` and `buildAnnotationData` write their caches.
`bin/generateEmoji.mjs` and `bin/generateRegex.mjs` now exit non-zero on error.

### Step 1 — Fix the core data model (U5, U7, U8, U10) ✅ done

1. `joinData`: merge `property` arrays instead of replacing records. Keep `description`, `version`
   and so on from the more specific source.
2. `joinModifiersToData`: delete the synthesized `Emoji_Modifier_Base` branch (lines 141-152). Build
   skins only from `RGI_Emoji_Modifier_Sequence` and `RGI_Emoji_ZWJ_Sequence`.
3. `isHidden` / `HIDDEN_EMOJI_PROPERTIES`: once properties are real, make an explicit decision on
   components. The recommendation is to keep them and mark them (Step 2.3).
4. Descriptions:
   - Decode `\x{..}` in `parseSequences`.
   - Fix the greedy regex in `extractLineDescription`.
   - For range lines, take per-code-point CLDR English names from `emoji-test.txt` comments. These
     are already parsed line by line in `parseMetadata` and give the correct name, e.g. "keycap:
     10". Use UnicodeData names as the final fallback, never the range text.
5. Names: build `meta/unicode-names.json` from the code point `Name` for single code points and the
   CLDR short name (field 3) for sequences. If concatenated names are kept, collect every modifier
   rather than only the last.
6. Gender: also derive it from `1F468`/`1F469` (and `1F474`/`1F475` and similar code points), not
   only ♀/♂.

What changed:

- **Components.** They are kept. `isHidden` now applies `HIDDEN_EMOJI_PROPERTIES` only to characters
  outside `Basic_Emoji`. Skin tones and hair stay; keycap bases, ZWJ and tags stay hidden.
- **Skins.** Skin tones come only from RGI sequences, and their tone is read from the modifier in
  the hexcode rather than from the name.
- **Gender.** It comes from gendered people (the §2.3 list) and ZWJ-joined ♀/♂. Sequences that
  combine genders get none. In `en`, gendered entries went from 628 to 1,292.
- **Names.** 2,291 sequence names in `meta/unicode-names.json` are now CLDR short names.
  Single-code-point names are unchanged.
- **Descriptions.** Range lines no longer share one description. `buildAnnotationData` uses the same
  fallback (`helpers/getDescription.ts`). This fixed the `da`/`sv` labels and `cldr` shortcodes for
  #️⃣ and 🔟, and removed 4 baseline entries.
- **Unchanged.** The emoji set, `meta/hexcodes.json`, the versions files, the regex patterns, and
  all `en` labels and tags.
- **Unit tests** are in `packages/generator/tests`.
- **Caches.** Parser output changed, so any
  `cache/17.0/{data,sequences,zwj-sequences,metadata}.json` made before this step must be deleted
  before regenerating.

### Step 2 — Presentation and qualification (U1, U4, U9)

1. Compute each entry's `emoji` field from `emoji-test.txt`, not from `variations`:
   - `emoji` = the fully-qualified string: bare `X` for `Emoji_Presentation=Yes`, `X FE0F` for
     text-default.
   - Keep `variations.emoji` / `variations.text` as the explicit variation sequences, and only use
     them for `text`.
2. `qualifiers` / `meta/hexcodes.json`: copy statuses from `emoji-test.txt` without adding to them.
   Drop the synthetic `FULLY_QUALIFIED` entries for `variations.*`. If the FE0E/FE0F forms need to
   be discoverable, expose them under `variations`, which already exists.
3. Add a `COMPONENT` qualifier constant, mirroring ED-28 `Standalone_Component`, or an `isComponent`
   flag, to `emojibase` core. Give regional indicators a deliberate, documented home, for example a
   `component` group/subgroup or an explicit flag, so pickers can exclude both.
4. Update `website/docs/spec.md` ("Merged variation selectors") to describe the corrected behavior.

### Step 3 — CLDR annotation resolution (C1, C2, C3, C4, C5, C6)

1. Add `cldr-core` (pin 48.x). Resolve each locale's chain from `supplemental/parentLocales.json`,
   including the `nonlikelyScript` rule, and fall back to truncation. Stop _before_ root, whose
   annotations are placeholders. Within each locale, merge `annotations` and `annotationsDerived` as
   one bundle and check explicit entries first. The current code checks derived first, then
   explicit.

   - `en-gb` → `en-GB, en-001, en`
   - `es-mx` → `es-MX, es-419, es`
   - `zh-hant` → `zh-Hant`
   - `nb` → `no` (already aliased in `loadAnnotations`)

   Apply the same chain to `loadLocalization` (territories, subdivisions, labels).

2. Resolve `tts` and keywords **separately**. In `loadAnnotations`, only set `tags` when `default`
   exists. In `extractField`, treat empty arrays and strings as absent.
3. Implement UTS #35 "Synthesizing Sequence Names" for entries missing from `annotationsDerived`:
   - Load `characterLabels` alongside `characterLabelPatterns`, and use the `listPatterns`
     `unit-short` list pattern for joining names.
   - **Keycaps and 🔟 (step 3):** `category-list(characterLabels.keycap, key)`. The key is the
     literal `#`, `*`, digit or "10", never the data-file description. Keyword: `keycap`.
   - **Flags (steps 1–2):** `category-list(characterLabels.flag, territory or subdivision name)`.
     This matches CLDR's derived output and the other locales; record in `spec.md` that the spec
     text returns the bare name. Keyword: `flag`.
   - **Modifier and ZWJ sequences (steps 5–11):** move modifiers to the suffix, handle the
     kiss/heart/family/holding-hands special cases and the ♂/♀ step, and name the remainder by
     longest named subsequence.
   - Remove the English-description fallbacks.
4. Drop the English fallback. When resolution and synthesis both fail, fail the build (via Step 0),
   or emit an empty label with an explicit warning list.
5. Stop lowercasing keywords. If case-insensitive search needs it, add a separate normalised field,
   or document that consumers should fold case with `toLocaleLowerCase(locale)`. This is a visible
   data change for every locale, so call it out in the changeset.
6. Key annotations by the CLDR normalisation (remove `FE0E`/`FE0F`, keep `200D`), not by
   `stripHexcode`.
7. Fix the Hindi PO string for "regional indicator %s".

### Step 4 — Regex package (U2, U3)

1. Regenerate the variant patterns from the corrected model:

   | Pattern       | Contents                                                                                                                                                                               |
   | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | `index`       | every `emoji-test.txt` form plus `X FE0E` text presentation sequences (as today)                                                                                                       |
   | `emoji`       | fully-qualified forms (bare `X` for default-emoji, `X FE0F` for default-text, all RGI sequences), plus `X FE0F` for default-emoji bases so a trailing selector is never left unmatched |
   | `emoji-loose` | `emoji` plus minimally-qualified and unqualified forms                                                                                                                                 |
   | `text`        | `X FE0E` plus bare default-text `X`                                                                                                                                                    |
   | `text-loose`  | `text` plus bare `X` for every base that has a text variation sequence (including default-emoji ones); never multi-code-point sequences                                                |

2. Replace `property/*` with patterns that work. The `engines` field already requires Node ≥ 20,
   which supports the `v` flag. For example:

   - `index`: `/\p{RGI_Emoji}/v`
   - text: `/\p{Emoji}︎/u`
   - optionally, a "possible emoji" scanner taken from the UTS #51 §1.4.9 EBNF.

   `RGI_Emoji` is a property of strings (UTS #51 ED-27, UTS #18 RL2.7). The §1.4.9 regex is meant
   only to find candidates, which must then be checked against the RGI sets. It also misses cases
   its own EBNF allows: a flag followed by ZWJ, `FE0E`, and unqualified keycaps. Document these
   gaps, or build the scanner from the EBNF rather than the published regex.

   Ship them with their flags set, and keep the "experimental" note if the browser baseline requires
   it.

3. Add `generate:regex` to the `generate` script, so regex files cannot drift from the data.

### Step 5 — Versions (U6)

1. Replace `extractUnicodeVersion` with the UTS #51 §1.5.2 table:

   - E0.6 → 6.0 and E0.7 → 7.0
   - E1.0/E2.0 → 8.0, E3.0/E4.0 → 9.0, E5.0 → 10.0
   - E11.0–E13.0 → same version, E13.1 → 13.0, E14.0 onwards → same version
   - E0.0 → none

   Apply it the same way to code points and sequences.

2. Decide and document what `versions/unicode.json` means. The options are:
   - "Unicode version that introduced this as an emoji", which is the table above.
   - "Unicode Age of the character", which applies to code points only. It needs `DerivedAge.txt`;
     the comments in `emoji-variation-sequences.txt` carry the base character's Age, e.g. `(1.1)`,
     but only for variation bases.

### Suggested order and sizing

| Order | Step                       | Size | Breaking data change                                                    |
| ----- | -------------------------- | ---- | ----------------------------------------------------------------------- |
| 1     | Step 0 tests and hard fail | M    | No (done; known violations are in the baseline)                         |
| 2     | Step 1 data model          | M    | Done: `meta/unicode-names.json`, `gender` additions, `da`/`sv` keycaps  |
| 3     | Step 2 presentation        | S–M  | `emoji`/`unicode` for 152 entries; `meta/hexcodes.json`                 |
| 4     | Step 3 CLDR                | M–L  | Labels and tags for `en-gb`, `es-mx`, `da`, `sv`; tag casing everywhere |
| 5     | Step 4 regex               | S–M  | Pattern semantics for `emoji`, `text`, `*-loose`, `property/*`          |
| 6     | Step 5 versions            | S    | `versions/unicode.json` buckets                                         |

Steps 1–3 all touch `generateData.ts` and `buildAnnotationData.ts`, so they should land in sequence.
Step 4 only depends on Step 2's model, and Step 5 is independent.
