declare module 'emojibase-generator/lib/constants' {
  import { Hexcode } from 'emojibase';
  export const ZWJ_PATTERN: RegExp;
  export const GENDER_PATTERN: RegExp;
  export const VARIATION_PATTERN: RegExp;
  export const SKIN_MODIFIER_PATTERN: RegExp;
  export const SEQUENCE_REMOVAL_PATTERN: RegExp;
  export const ZERO_WIDTH_JOINER: Hexcode;
  export const TEXT_VARIATION_SELECTOR: Hexcode;
  export const EMOJI_VARIATION_SELECTOR: Hexcode;
  export const LIGHT_SKIN_MODIFIER: Hexcode;
  export const MEDIUM_LIGHT_SKIN_MODIFIER: Hexcode;
  export const MEDIUM_SKIN_MODIFIER: Hexcode;
  export const MEDIUM_DARK_SKIN_MODIFIER: Hexcode;
  export const DARK_SKIN_MODIFIER: Hexcode;
  export const FEMALE_SIGN: Hexcode;
  export const MALE_SIGN: Hexcode;
  export const BLACK_FLAG: Hexcode;
  export const REGIONAL_INDICATORS: {
      [hexcode: string]: string;
  };
  export const TAG_LATIN_SMALL_LETTERS: {
      [hexcode: string]: string;
  };

}
declare module 'emojibase-generator/lib/types' {
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
      description: string;
      gender?: Gender | null;
      hexcode: Hexcode;
      property: Property[];
      type: Presentation;
      unicodeVersion: string;
      version: string;
      group: number;
      order: number;
      subgroup: number;
      modifications: {
          [tone: string]: EmojiModification;
      };
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
  export type HexcodeMap<T> = {
      [hexcode: string]: T;
  };
  export interface ParsedLine {
      comment: string;
      fields: string[];
  }
  export interface ParsedTotals {
      [property: string]: number;
  }
  export type Property = 'Emoji' | 'Emoji_Presentation' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Modifier_Sequence' | 'Emoji_Flag_Sequence' | 'Emoji_Keycap_Sequence' | 'Emoji_Tag_Sequence' | 'Emoji_ZWJ_Sequence';
  export interface ShortcodeMap {
      [hexcode: string]: Shortcode[];
  }
  export interface UnicodeNamesMap {
      [hexcode: string]: string;
  }
  export interface VersionMap {
      [version: string]: Hexcode[];
  }

}
declare module 'node_modules/chalk/types/index' {
  // Type definitions for Chalk
  // Definitions by: Thomas Sauer <https://github.com/t-sauer>

  export const enum Level {
  	None = 0,
  	Basic = 1,
  	Ansi256 = 2,
  	TrueColor = 3
  }

  export interface ChalkOptions {
  	enabled?: boolean;
  	level?: Level;
  }

  export interface ChalkConstructor {
  	new (options?: ChalkOptions): Chalk;
  	(options?: ChalkOptions): Chalk;
  }

  export interface ColorSupport {
  	level: Level;
  	hasBasic: boolean;
  	has256: boolean;
  	has16m: boolean;
  }

  export interface Chalk {
  	(...text: string[]): string;
  	(text: TemplateStringsArray, ...placeholders: string[]): string;
  	constructor: ChalkConstructor;
  	enabled: boolean;
  	level: Level;
  	rgb(r: number, g: number, b: number): this;
  	hsl(h: number, s: number, l: number): this;
  	hsv(h: number, s: number, v: number): this;
  	hwb(h: number, w: number, b: number): this;
  	bgHex(color: string): this;
  	bgKeyword(color: string): this;
  	bgRgb(r: number, g: number, b: number): this;
  	bgHsl(h: number, s: number, l: number): this;
  	bgHsv(h: number, s: number, v: number): this;
  	bgHwb(h: number, w: number, b: number): this;
  	hex(color: string): this;
  	keyword(color: string): this;

  	readonly reset: this;
  	readonly bold: this;
  	readonly dim: this;
  	readonly italic: this;
  	readonly underline: this;
  	readonly inverse: this;
  	readonly hidden: this;
  	readonly strikethrough: this;

  	readonly visible: this;

  	readonly black: this;
  	readonly red: this;
  	readonly green: this;
  	readonly yellow: this;
  	readonly blue: this;
  	readonly magenta: this;
  	readonly cyan: this;
  	readonly white: this;
  	readonly gray: this;
  	readonly grey: this;
  	readonly blackBright: this;
  	readonly redBright: this;
  	readonly greenBright: this;
  	readonly yellowBright: this;
  	readonly blueBright: this;
  	readonly magentaBright: this;
  	readonly cyanBright: this;
  	readonly whiteBright: this;

  	readonly bgBlack: this;
  	readonly bgRed: this;
  	readonly bgGreen: this;
  	readonly bgYellow: this;
  	readonly bgBlue: this;
  	readonly bgMagenta: this;
  	readonly bgCyan: this;
  	readonly bgWhite: this;
  	readonly bgBlackBright: this;
  	readonly bgRedBright: this;
  	readonly bgGreenBright: this;
  	readonly bgYellowBright: this;
  	readonly bgBlueBright: this;
  	readonly bgMagentaBright: this;
  	readonly bgCyanBright: this;
  	readonly bgWhiteBright: this;
  } const chalk: Chalk & { supportsColor: ColorSupport };

  export default chalk

}
declare module 'emojibase-generator/lib/helpers/log' {
   const _default: {
      error(type: string, ...messages: string[]): void;
      info(type: string, ...messages: string[]): void;
      log(type: string, ...messages: string[]): void;
      success(type: string, ...messages: string[]): void;
      title(type: string, ...messages: string[]): void;
  };
  export default _default;

}
declare module 'emojibase-generator/lib/helpers/hasProperty' {
  import { Property } from 'emojibase-generator/lib/types';
  export default function hasProperty(property: Property[], search: Property[]): boolean;

}
declare module 'emojibase-generator/lib/helpers/writeFile' {
  export default function writeFile(targetFolder: string, fileName: string, data: any): void;

}
declare module 'emojibase-generator/lib/helpers/writeCache' {
  export default function writeCache(name: string, data: any): void;

}
declare module 'emojibase-generator/lib/helpers/readCache' {
  export default function readCache<T>(name: string): T | null;

}
declare module 'emojibase-generator/lib/loaders/fetchAndCache' {
  export default function fetchAndCache<T>(url: string, name: string, parser: (text: string) => T): Promise<T>;

}
declare module 'emojibase-generator/lib/parsers/parseAnnotations' {
  import { CLDRAnnotationMap } from 'emojibase-generator/lib/types';
  export default function parseAnnotations(version: string, content: string): CLDRAnnotationMap;

}
declare module 'emojibase-generator/lib/helpers/formatLocale' {
  export default function formatLocale(locale: string): string;

}
declare module 'emojibase-generator/lib/loaders/loadAnnotations' {
  import { CLDRAnnotationMap } from 'emojibase-generator/lib/types';
  export default function loadAnnotations(locale: string, derived?: boolean, version?: string): Promise<CLDRAnnotationMap>;

}
declare module 'emojibase-generator/lib/parsers/parse' {
  import { ParsedLine, ParsedTotals } from 'emojibase-generator/lib/types';
  export default function parse(content: string): {
      lines: ParsedLine[];
      totals: ParsedTotals;
  };

}
declare module 'emojibase-generator/lib/parsers/extractLineDescription' {
  export default function extractLineDescription(comment: string): string;

}
declare module 'emojibase-generator/lib/parsers/extractUnicodeVersion' {
  export default function extractUnicodeVersion(comment: string): number | null;

}
declare module 'emojibase-generator/lib/parsers/verifyTotals' {
  import { ParsedTotals } from 'emojibase-generator/lib/types';
  export default function verifyTotals<T>(version: string, data: T, totals: ParsedTotals): T;

}
declare module 'emojibase-generator/lib/helpers/formatHexcode' {
  import { Hexcode } from 'emojibase-generator/lib/types';
  export default function formatHexcode(hex: Hexcode): Hexcode;

}
declare module 'emojibase-generator/lib/parsers/parseData' {
  import { EmojiDataMap } from 'emojibase-generator/lib/types';
  export default function parseData(version: string, content: string): EmojiDataMap;

}
declare module 'emojibase-generator/lib/loaders/loadData' {
  import { EmojiDataMap } from 'emojibase-generator/lib/types';
  export default function loadData(version?: string): Promise<EmojiDataMap>;

}
declare module 'emojibase-generator/lib/parsers/parseLocalization' {
  import { CLDRDataMap } from 'emojibase-generator/lib/types';
  export default function parseLocalization(version: string, content: string, nodeName: string, attrName?: string): CLDRDataMap;

}
declare module 'emojibase-generator/lib/loaders/loadLocalization' {
  import { CLDRLocaleMap } from 'emojibase-generator/lib/types';
  export default function loadLocalization(locale: string, version?: string): Promise<CLDRLocaleMap>;

}
declare module 'emojibase-generator/lib/parsers/extractGender' {
  import { Gender, Hexcode } from 'emojibase-generator/lib/types';
  export default function extractGender(hexcode: Hexcode): Gender | null;

}
declare module 'emojibase-generator/lib/parsers/parseSequences' {
  import { EmojiDataMap, Property } from 'emojibase-generator/lib/types';
  export default function parseSequences(version: string, content: string, defaultProperty: Property): EmojiDataMap;

}
declare module 'emojibase-generator/lib/loaders/loadSequences' {
  import { EmojiDataMap } from 'emojibase-generator/lib/types';
  export default function loadSequences(version?: string): Promise<EmojiDataMap>;

}
declare module 'emojibase-generator/lib/loaders/loadZwjSequences' {
  import { EmojiDataMap } from 'emojibase-generator/lib/types';
  export default function loadZwjSequences(version?: string): Promise<EmojiDataMap>;

}
declare module 'emojibase-generator/lib/builders/buildAnnotationData' {
  import { CLDRAnnotationMap } from 'emojibase-generator/lib/types';
  export default function buildAnnotationData(locale: string): Promise<CLDRAnnotationMap>;

}
declare module 'emojibase-generator/lib/loaders/loadEmoticons' {
  import { EmoticonMap } from 'emojibase-generator/lib/types';
  export default function loadEmoticons(): Promise<EmoticonMap>;

}
declare module 'emojibase-generator/lib/parsers/parseNames' {
  import { UnicodeNamesMap } from 'emojibase-generator/lib/types';
  export default function parseNames(content: string): UnicodeNamesMap;

}
declare module 'emojibase-generator/lib/loaders/loadNames' {
  import { UnicodeNamesMap } from 'emojibase-generator/lib/types';
  export default function loadNames(version?: string): Promise<UnicodeNamesMap>;

}
declare module 'emojibase-generator/lib/helpers/slug' {
  export default function slug(value: string): string;

}
declare module 'emojibase-generator/lib/parsers/parseOrderAndGroup' {
  import { EmojiGroupMap } from 'emojibase-generator/lib/types';
  export default function parseOrderAndGroup(content: string): EmojiGroupMap;

}
declare module 'emojibase-generator/lib/loaders/loadOrderAndGroup' {
  import { EmojiGroupMap } from 'emojibase-generator/lib/types';
  export default function loadOrderAndGroup(version?: string): Promise<EmojiGroupMap>;

}
declare module 'emojibase-generator/lib/parsers/parseVariations' {
  import { EmojiVariationMap } from 'emojibase-generator/lib/types';
  export default function parseVariations(version: string, content: string): EmojiVariationMap;

}
declare module 'emojibase-generator/lib/loaders/loadVariations' {
  import { EmojiVariationMap } from 'emojibase-generator/lib/types';
  export default function loadVariations(version?: string): Promise<EmojiVariationMap>;

}
declare module 'emojibase-generator/lib/loaders/loadShortcodes' {
  import { ShortcodeMap } from 'emojibase-generator/lib/types';
  export default function loadShortcodes(): Promise<ShortcodeMap>;

}
declare module 'emojibase-generator/lib/builders/joinData' {
  import { EmojiDataMap } from 'emojibase-generator/lib/types';
  export default function joinData(emojis: EmojiDataMap, data: EmojiDataMap): void;

}
declare module 'emojibase-generator/lib/builders/joinMetadataToData' {
  import { UnicodeNamesMap, EmojiMap, EmojiGroupMap, EmojiVariationMap, ShortcodeMap, EmoticonMap } from 'emojibase-generator/lib/types';
  export default function joinMetadataToData(emojis: EmojiMap, names: UnicodeNamesMap, groups: EmojiGroupMap, variations: EmojiVariationMap, shortcodes: ShortcodeMap, emoticons: EmoticonMap): void;

}
declare module 'emojibase-generator/lib/parsers/extractSkinTone' {
  import { SkinTone } from 'emojibase-generator/lib/types';
  export default function extractSkinTone(name: string): SkinTone | null;

}
declare module 'emojibase-generator/lib/builders/joinModifiersToData' {
  import { EmojiMap } from 'emojibase-generator/lib/types';
  export default function joinModifiersToData(emojis: EmojiMap): void;

}
declare module 'emojibase-generator/lib/helpers/isObject' {
  export default function isObject<T>(value: T): boolean;

}
declare module 'emojibase-generator/lib/helpers/flattenData' {
  import { EmojiMap } from 'emojibase-generator/lib/types';
  export default function flattenData(data: EmojiMap): EmojiMap;

}
declare module 'emojibase-generator/lib/parsers/parseEmojiList' {
  import { EmojiSourceMap } from 'emojibase-generator/lib/types';
  export default function parseEmojiList(content: string): EmojiSourceMap;

}
declare module 'emojibase-generator/lib/loaders/loadEmojiList' {
  import { EmojiSourceMap } from 'emojibase-generator/lib/types';
  export default function loadEmojiList(): Promise<EmojiSourceMap>;

}
declare module 'emojibase-generator/lib/builders/validateData' {
  import { EmojiMap } from 'emojibase-generator/lib/types';
  export default function validateData(data: EmojiMap): Promise<void>;

}
declare module 'emojibase-generator/lib/builders/verifyData' {
  import { EmojiMap } from 'emojibase-generator/lib/types';
  export default function verifyData(emojis: EmojiMap): EmojiMap;

}
declare module 'emojibase-generator/lib/builders/buildEmojiData' {
  import { EmojiMap } from 'emojibase-generator/lib/types';
  export default function buildEmojiData(): Promise<EmojiMap>;

}
