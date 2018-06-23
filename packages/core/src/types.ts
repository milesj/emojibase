/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

export type CodePoint = number;

export type Emoticon = string;

export type Gender = 0 | 1;

export type Group = number;

export type GroupKey =
  | 'smileys-people'
  | 'animals-nature'
  | 'food-drink'
  | 'travel-places'
  | 'activities'
  | 'objects'
  | 'symbols'
  | 'flags';

export type Hexcode = string;

export type Presentation = 0 | 1;

export type Shortcode = string;

export type SkinTone = 1 | 2 | 3 | 4 | 5;

export type SkinToneKey = 'light' | 'medium-light' | 'medium' | 'medium-dark' | 'dark';

export type Subgroup = number;

export type Unicode = string;

export interface CompactEmoji {
  annotation: string;
  emoticon?: Emoticon;
  group: Group;
  hexcode: Hexcode;
  order: number;
  shortcodes: Shortcode[];
  skins?: CompactEmoji[];
  tags: string[];
  unicode: Unicode;
}

export interface Emoji {
  annotation: string;
  emoji: Unicode;
  emoticon?: Emoticon;
  gender?: Gender;
  group: Group;
  hexcode: Hexcode;
  name: string;
  order: number;
  shortcodes: Shortcode[];
  skins?: Emoji[];
  subgroup: Subgroup;
  tags: string[];
  text: Unicode;
  tone?: SkinTone;
  type: Presentation;
  version: number;
}
