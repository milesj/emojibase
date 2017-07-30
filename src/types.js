/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */
/* eslint-disable */

export type Format = 'expanded' | 'standard' | 'compact' | 'custom';

export type HexcodeMap<T> = { [hexcode: string]: T };

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

export type Loader<T> = (version: string) => HexcodeMap<T>;

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

export type SkinTone = 1 | 2 | 3 | 4 | 5;

export type UnicodeNamesMap = {
  [hexcode: string]: string,
};
