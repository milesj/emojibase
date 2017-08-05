/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

/* eslint-disable */

export type CLDRAnnotation = {
  annotation: string,
  tags: string[],
};

export type CLDRAnnotationMap = HexcodeMap<CLDRAnnotation>;

export type CLDRDataMap = { [key: string]: string };

export type CLDRLocaleMap = {
  subdivisions: CLDRDataMap,
  territories: CLDRDataMap,
};

export type Emoji = {
  // Data
  description: string,
  gender?: ?Gender,
  hexcode: string,
  property: Property[],
  type: Presentation,
  unicodeVersion: string,
  version: string,
  // Group
  group: number,
  order: number,
  subgroup: number,
  // Metadata
  modifications: { [skin: string]: EmojiModification },
  name: string,
  variations: EmojiVariation,
  shortcodes: string[],
};

export type EmojiMap = HexcodeMap<Emoji>;

export type EmojiData = {
  description: string,
  gender?: ?Gender,
  hexcode: string,
  property: Property[],
  type: Presentation,
  unicodeVersion: string,
  version: string,
};

export type EmojiDataMap = HexcodeMap<EmojiData>;

export type EmojiGroup = {
  group: number,
  order: number,
  subgroup: number,
};

export type EmojiGroupMap = HexcodeMap<EmojiGroup>;

export type EmojiSource = {
  hexcode: string,
  group: number,
  subgroup: number,
};

export type EmojiSourceMap = HexcodeMap<EmojiSource>;

export type EmojiModification = {
  hexcode: string,
  name: string,
  skin: SkinTone,
};

export type EmojiVariation = {
  text: string,
  emoji: string,
  property: Property[],
};

export type EmojiVariationMap = HexcodeMap<EmojiVariation>;

export type Gender = 0 | 1;

export type HexcodeMap<T> = { [hexcode: string]: T };

export type ParsedLine = {
  comment: string,
  fields: string[],
};

export type ParsedTotals = { [property: string]: number };

export type Presentation = 0 | 1;

export type Property = 'Emoji' |
  'Emoji_Presentation' |
  'Emoji_Component' |
  'Emoji_Modifier' |
  'Emoji_Modifier_Base' |
  'Emoji_Modifier_Sequence' |
  'Emoji_Flag_Sequence' |
  'Emoji_Keycap_Sequence' |
  'Emoji_Tag_Sequence' |
  'Emoji_ZWJ_Sequence';

export type ShortcodeMap = { [hexcode: string]: string[] };

export type SkinTone = 1 | 2 | 3 | 4 | 5;

export type UnicodeNamesMap = {
  [hexcode: string]: string,
};
