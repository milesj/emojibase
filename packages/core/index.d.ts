declare module 'emojibase/lib/types' {
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

}
declare module 'emojibase/lib/generateEmoticonPermutations' {
  import { Emoticon } from 'emojibase/lib/types';
  export interface PermutationOptions {
      isFace?: boolean;
      withNose?: boolean;
  }
  export default function generateEmoticonPermutations(emoticon: Emoticon, options?: PermutationOptions): Emoticon[];

}
declare module 'emojibase/lib/constants' {
  import { PermutationOptions } from 'emojibase/lib/generateEmoticonPermutations';
  import { Gender, Presentation, SkinTone } from 'emojibase/lib/types';
  export const SEQUENCE_REMOVAL_PATTERN: RegExp;
  export const TEXT: Presentation;
  export const EMOJI: Presentation;
  export const FEMALE: Gender;
  export const MALE: Gender;
  export const LIGHT_SKIN: SkinTone;
  export const MEDIUM_LIGHT_SKIN: SkinTone;
  export const MEDIUM_SKIN: SkinTone;
  export const MEDIUM_DARK_SKIN: SkinTone;
  export const DARK_SKIN: SkinTone;
  export const LATEST_EMOJI_VERSION: string;
  export const LATEST_UNICODE_VERSION: string;
  export const LATEST_CLDR_VERSION: string;
  export const FIRST_UNICODE_EMOJI_VERSION: string;
  export const SUPPORTED_LOCALES: string[];
  export const EMOTICON_OPTIONS: {
      [emoticon: string]: PermutationOptions;
  };

}
declare module 'emojibase/lib/fetchFromCDN' {
  import { Emoji } from 'emojibase/lib/types';
  export interface FetchCDNOptions extends RequestInit {
      local?: boolean;
  }
  export default function fetchFromCDN(path: string, version?: string, options?: FetchCDNOptions): Promise<Emoji[]>;

}
declare module 'emojibase/lib/flattenEmojiData' {
  import { Emoji } from 'emojibase/lib/types';
  export default function flattenEmojiData(data: Emoji[]): Emoji[];

}
declare module 'emojibase/lib/fromCodepointToUnicode' {
  import { CodePoint, Unicode } from 'emojibase/lib/types';
  export default function fromCodepointToUnicode(codepoint: CodePoint[]): Unicode;

}
declare module 'emojibase/lib/fromHexcodeToCodepoint' {
  import { CodePoint, Hexcode } from 'emojibase/lib/types';
  export default function fromHexcodeToCodepoint(code: Hexcode, joiner?: string): CodePoint[];

}
declare module 'emojibase/lib/fromUnicodeToHexcode' {
  import { Hexcode, Unicode } from 'emojibase/lib/types';
  export default function fromUnicodeToHexcode(unicode: Unicode, strip?: boolean): Hexcode;

}
declare module 'emojibase/lib/stripHexcode' {
  import { Hexcode } from 'emojibase/lib/types';
  export default function stripHexcode(hexcode: Hexcode): Hexcode;

}
declare module 'emojibase' {
  import fetchFromCDN from 'emojibase/lib/fetchFromCDN';
  import flattenEmojiData from 'emojibase/lib/flattenEmojiData';
  import fromCodepointToUnicode from 'emojibase/lib/fromCodepointToUnicode';
  import fromHexcodeToCodepoint from 'emojibase/lib/fromHexcodeToCodepoint';
  import fromUnicodeToHexcode from 'emojibase/lib/fromUnicodeToHexcode';
  import generateEmoticonPermutations from 'emojibase/lib/generateEmoticonPermutations';
  import stripHexcode from 'emojibase/lib/stripHexcode';
  export { fetchFromCDN, flattenEmojiData, fromCodepointToUnicode, fromHexcodeToCodepoint, fromUnicodeToHexcode, generateEmoticonPermutations, stripHexcode };
  export { TEXT, EMOJI, FEMALE, MALE, LIGHT_SKIN, MEDIUM_LIGHT_SKIN, MEDIUM_SKIN, MEDIUM_DARK_SKIN, DARK_SKIN, LATEST_EMOJI_VERSION, LATEST_UNICODE_VERSION, LATEST_CLDR_VERSION, FIRST_UNICODE_EMOJI_VERSION, SUPPORTED_LOCALES, EMOTICON_OPTIONS } from 'emojibase/lib/constants';
  export { CodePoint, Emoji, Emoticon, Gender, Hexcode, Presentation, Shortcode, SkinTone, Unicode } from 'emojibase/lib/types';

}
