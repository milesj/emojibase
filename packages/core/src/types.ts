export type CodePoint = number;

export type Emoticon = string;

export type Gender = 0 | 1;

export type GenderKey = 'female' | 'male';

export type Group = number;

export type GroupKey =
  | 'activities'
  | 'animals-nature'
  | 'component'
  | 'flags'
  | 'food-drink'
  | 'objects'
  | 'people-body'
  | 'smileys-emotion'
  | 'symbols'
  | 'travel-places';

export type Hexcode = string;

export type Presentation = 0 | 1;

export type PresentationKey = 'emoji' | 'text';

export type Shortcode = string;

export type ShortcodePreset =
  | 'cldr-native'
  | 'cldr'
  | 'discord'
  | 'emojibase-legacy'
  | 'emojibase'
  | 'github'
  | 'iamcal'
  | 'joypixels'
  | 'slack';

export type SkinTone = 1 | 2 | 3 | 4 | 5;

export type SkinToneKey = 'dark' | 'light' | 'medium-dark' | 'medium-light' | 'medium';

export type Subgroup = number;

export type SubgroupKey =
  | 'alphanum'
  | 'animal-amphibian'
  | 'animal-bird'
  | 'animal-bug'
  | 'animal-mammal'
  | 'animal-marine'
  | 'animal-reptile'
  | 'arrow'
  | 'arts-crafts'
  | 'av-symbol'
  | 'award-medal'
  | 'body-parts'
  | 'book-paper'
  | 'cat-face'
  | 'clothing'
  | 'computer'
  | 'country-flag'
  | 'currency'
  | 'dishware'
  | 'drink'
  | 'emotion'
  | 'event'
  | 'face-affection'
  | 'face-concerned'
  | 'face-costume'
  | 'face-glasses'
  | 'face-hand'
  | 'face-hat'
  | 'face-negative'
  | 'face-neutral-skeptical'
  | 'face-sleepy'
  | 'face-smiling'
  | 'face-tongue'
  | 'face-unwell'
  | 'family'
  | 'flag'
  | 'food-asian'
  | 'food-fruit'
  | 'food-marine'
  | 'food-prepared'
  | 'food-sweet'
  | 'food-vegetable'
  | 'game'
  | 'gender'
  | 'geometric'
  | 'hair-style'
  | 'hand-fingers-closed'
  | 'hand-fingers-open'
  | 'hand-fingers-partial'
  | 'hand-prop'
  | 'hand-single-finger'
  | 'hands'
  | 'hotel'
  | 'household'
  | 'keycap'
  | 'light-video'
  | 'lock'
  | 'mail'
  | 'math'
  | 'medical'
  | 'money'
  | 'monkey-face'
  | 'music'
  | 'musical-instrument'
  | 'office'
  | 'other-object'
  | 'other-symbol'
  | 'person-activity'
  | 'person-fantasy'
  | 'person-gesture'
  | 'person-resting'
  | 'person-role'
  | 'person-sport'
  | 'person-symbol'
  | 'person'
  | 'phone'
  | 'place-building'
  | 'place-geographic'
  | 'place-map'
  | 'place-other'
  | 'place-religious'
  | 'plant-flower'
  | 'plant-other'
  | 'punctuation'
  | 'religion'
  | 'science'
  | 'skin-tone'
  | 'sky-weather'
  | 'sound'
  | 'sport'
  | 'subdivision-flag'
  | 'time'
  | 'tool'
  | 'transport-air'
  | 'transport-ground'
  | 'transport-sign'
  | 'transport-water'
  | 'warning'
  | 'writing'
  | 'zodiac';

export type Unicode = string;

export interface CompactEmoji {
  annotation: string;
  emoticon?: Emoticon;
  group?: Group;
  hexcode: Hexcode;
  order?: number;
  shortcodes?: Shortcode[];
  skins?: CompactEmoji[];
  tags?: string[];
  unicode: Unicode;
}

export type FlatCompactEmoji = Omit<CompactEmoji, 'skins'>;

export interface Emoji {
  annotation: string;
  emoji: Unicode;
  emoticon?: Emoticon;
  gender?: Gender;
  group?: Group;
  hexcode: Hexcode;
  order?: number;
  shortcodes?: Shortcode[];
  skins?: Emoji[];
  subgroup?: Subgroup;
  tags?: string[];
  text: Unicode;
  tone?: SkinTone | SkinTone[];
  type: Presentation;
  version: number;
}

export type FlatEmoji = Omit<Emoji, 'skins'>;

export interface MaybeEmoji {
  hexcode: string;
  shortcodes?: string[];
  skins?: MaybeEmoji[];
}

export interface GroupDataset {
  groups: { [index: string]: string };
  subgroups: { [index: string]: string };
  hierarchy: { [index: string]: number[] };
}

export interface VersionDataset {
  [version: string]: string[];
}

export interface ShortcodesDataset {
  [hexcode: string]: string[] | string;
}

export interface GroupMeta {
  key: string;
  message: string;
  order: number;
}

export interface MetadataDataset {
  groups: GroupMeta[];
  subgroups: GroupMeta[];
}

export type Locale =
  | 'da'
  | 'de'
  | 'en-gb'
  | 'en'
  | 'es-mx'
  | 'es'
  | 'et'
  | 'fi'
  | 'fr'
  | 'hu'
  | 'it'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'ms'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ru'
  | 'sv'
  | 'th'
  | 'uk'
  | 'zh-hant'
  | 'zh';

// OPTIONS

export interface PermutationOptions {
  isFace?: boolean;
  withNose?: boolean;
}

export interface FetchFromCDNOptions extends RequestInit {
  local?: boolean;
  version?: string;
}

export interface FetchEmojisOptions extends FetchFromCDNOptions {
  compact?: boolean;
  flat?: boolean;
  shortcodes?: (ShortcodePreset | string)[];
}
