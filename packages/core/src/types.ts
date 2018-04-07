/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

export type CodePoint = number;

export interface Emoji {
  annotation?: string;
  emoji?: string;
  emoticon?: string;
  gender?: Gender;
  group?: number;
  hexcode: Hexcode;
  name?: string;
  order?: number;
  shortcodes?: Shortcode[];
  skins?: Emoji[];
  subgroup?: number;
  tags?: string[];
  text?: string;
  tone?: SkinTone;
  type?: Presentation;
  unicode?: string;
  version?: number;
}

export type Emoticon = string;

export type Gender = 0 | 1;

export type Hexcode = string;

export type Presentation = 0 | 1;

export type Shortcode = string;

export type SkinTone = 1 | 2 | 3 | 4 | 5;

export type Unicode = string;
