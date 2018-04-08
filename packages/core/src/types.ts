/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

export type CodePoint = number;

export type Emoticon = string;

export type Gender = 0 | 1;

export type Hexcode = string;

export type Presentation = 0 | 1;

export type Shortcode = string;

export type SkinTone = 1 | 2 | 3 | 4 | 5;

export type Unicode = string;

export interface Emoji {
  annotation?: string;
  emoji?: Unicode;
  emoticon?: Emoticon;
  gender?: Gender;
  group?: number;
  hexcode: Hexcode;
  name?: string;
  order?: number;
  shortcodes?: Shortcode[];
  skins?: Emoji[];
  subgroup?: number;
  tags?: string[];
  text?: Unicode;
  tone?: SkinTone;
  type?: Presentation;
  unicode?: Unicode;
  version?: number;
}
