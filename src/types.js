/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */
/* eslint-disable no-use-before-define */

export type Format = 'expanded' | 'standard' | 'compact' | 'custom';

export type EmojiDataMap = {
  [hexcode: string]: {
    description: string, // Found in each source line comment
    hexcode: string,
    property: [Property],
    type: Presentation,
    unicodeVersion: string,
    version: string,
  },
};

export type EmojiGroupMap = {
  [hexcode: string]: {
    group: number,
    order: number,
    subgroup: number,
  },
};

export type EmojiVariationMap = {
  [hexcode: string]: string, // Description
};

export type Gender = 0 | 1;

export type ParsedLine = {
  comment: string,
  fields: string[],
};

export type ParsedTotals = { [property: Property]: number };

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
