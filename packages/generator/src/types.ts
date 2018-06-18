/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import {
  Emoticon,
  Gender,
  Group,
  Hexcode,
  Presentation,
  Shortcode,
  SkinTone,
  Subgroup,
  Unicode,
} from 'emojibase';

export { Emoticon, Gender, Group, Hexcode, Presentation, Shortcode, SkinTone, Subgroup, Unicode };

export type HexcodeMap<T> = { [hexcode: string]: T };

export type Property =
  | 'Emoji'
  | 'Emoji_Presentation'
  | 'Emoji_Component'
  | 'Emoji_Modifier'
  | 'Emoji_Modifier_Base'
  | 'Emoji_Modifier_Sequence'
  | 'Emoji_Keycap_Sequence'
  | 'Emoji_Flag_Sequence'
  | 'Emoji_Tag_Sequence'
  | 'Emoji_ZWJ_Sequence'
  | 'Extended_Pictographic'
  | 'Regional_Indicator';

export interface CLDRAnnotation {
  annotation: string;
  tags: string[];
}

export type CLDRAnnotationMap = HexcodeMap<CLDRAnnotation>;

export interface CLDRDataMap {
  [key: string]: string;
}

export interface CLDRLocaleMap {
  subdivisions: CLDRDataMap;
  territories: CLDRDataMap;
}

export interface Emoji {
  // Data
  description: string;
  gender?: Gender | null;
  hexcode: Hexcode;
  property: Property[];
  type: Presentation;
  unicodeVersion: string;
  version: string;
  // Group
  group: Group;
  order: number;
  subgroup: Subgroup;
  // Metadata
  modifications: { [tone: string]: EmojiModification };
  name: string;
  variations: EmojiVariation;
  shortcodes: Shortcode[];
  emoticon: Emoticon;
}

export type EmojiMap = HexcodeMap<Emoji>;

export interface EmojiData {
  description: string;
  gender?: Gender | null;
  hexcode: Hexcode;
  property: Property[];
  type: Presentation;
  unicodeVersion: number | null;
  version: number;
}

export type EmojiDataMap = HexcodeMap<EmojiData>;

export interface EmojiGroup {
  group: Group;
  order: number;
  subgroup: Subgroup;
}

export type EmojiGroupMap = HexcodeMap<EmojiGroup>;

export interface EmojiSource {
  hexcode: Hexcode;
  group: Group;
  subgroup: Subgroup;
}

export type EmojiSourceMap = HexcodeMap<EmojiSource>;

export interface EmojiModification extends Emoji {
  tone: SkinTone;
}

export interface EmojiVariation {
  text: string;
  emoji: string;
  property?: Property[];
}

export type EmojiVariationMap = HexcodeMap<EmojiVariation>;

export interface EmoticonMap {
  [hexcode: string]: string;
}

export interface ParsedLine {
  comment: string;
  fields: string[];
}

export interface ParsedTotals {
  [property: string]: number;
}

export interface ShortcodeMap {
  [hexcode: string]: Shortcode[];
}

export interface UnicodeNamesMap {
  [hexcode: string]: string;
}

export interface VersionMap {
  [version: string]: Hexcode[];
}
