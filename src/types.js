/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */
/* eslint-disable */

export type Format = 'expanded' | 'standard' | 'compact' | 'custom';

export type HexcodeMap<T> = { [hexcode: string]: T };

export type Emoji = {
  ...EmojiData,
  ...EmojiGroup,
  modifications?: {
    ...EmojiData,
    skin: SkinTone,
  }[],
};

export type EmojiMap = HexcodeMap<Emoji>;

export type EmojiData = {
  description: string, // Found in each source line comment
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

export type EmojiVariationMap = {
  [hexcode: string]: string, // Description
};

export type Gender = 0 | 1;

export type ParsedLine = {
  comment: string,
  fields: string[],
};

export type ParsedTotals = { [property: string]: number };

export type Presentation = 0 | 1;

export type Property = 'Emoji' |
  'Emoji_Presentation' |
  'Emoji_Modifier' |
  'Emoji_Modifier_Base' |
  'Emoji_Component' |
  'Text'; // Not a real property, but we use it to invalidate emojis

export type SkinTone = 1 | 2 | 3 | 4 | 5;

export type UnicodeNamesMap = {
  [hexcode: string]: string,
};
