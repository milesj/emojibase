/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { Gender, Hexcode, Presentation, Shortcode, SkinTone } from 'emojibase';

export { Gender, Hexcode, Presentation, Shortcode, SkinTone };

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
  group: number;
  order: number;
  subgroup: number;
  // Metadata
  modifications: { [tone: string]: EmojiModification };
  name: string;
  variations: EmojiVariation;
  shortcodes: Shortcode[];
  emoticon: string;
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
  group: number;
  order: number;
  subgroup: number;
}

export type EmojiGroupMap = HexcodeMap<EmojiGroup>;

export interface EmojiSource {
  hexcode: Hexcode;
  group: number;
  subgroup: number;
}

export type EmojiSourceMap = HexcodeMap<EmojiSource>;

export interface EmojiModification extends Emoji {
  tone: SkinTone | null;
}

export interface EmojiVariation {
  text: string;
  emoji: string;
  property: Property[];
}

export type EmojiVariationMap = HexcodeMap<EmojiVariation>;

export interface EmoticonMap {
  [hexcode: string]: string;
}

export type HexcodeMap<T> = { [hexcode: string]: T };

export interface ParsedLine {
  comment: string;
  fields: string[];
}

export interface ParsedTotals {
  [property: string]: number;
}

export type Property =
  | 'Emoji'
  | 'Emoji_Presentation'
  | 'Emoji_Component'
  | 'Emoji_Modifier'
  | 'Emoji_Modifier_Base'
  | 'Emoji_Modifier_Sequence'
  | 'Emoji_Flag_Sequence'
  | 'Emoji_Keycap_Sequence'
  | 'Emoji_Tag_Sequence'
  | 'Emoji_ZWJ_Sequence';

export interface ShortcodeMap {
  [hexcode: string]: Shortcode[];
}

export interface UnicodeNamesMap {
  [hexcode: string]: string;
}

export interface VersionMap {
  [version: string]: Hexcode[];
}
