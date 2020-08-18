export type CodePoint = number;

export type Emoticon = string;

export type Gender = 0 | 1;

export type GenderKey = 'female' | 'male';

export type Group = number;

export type GroupKey =
  | 'smileys-emotion'
  | 'people-body'
  | 'component'
  | 'animals-nature'
  | 'food-drink'
  | 'travel-places'
  | 'activities'
  | 'objects'
  | 'symbols'
  | 'flags';

export type Hexcode = string;

export type Presentation = 0 | 1;

export type PresentationKey = 'text' | 'emoji';

export type Shortcode = string;

export type ShortcodePreset =
  | 'cldr'
  | 'cldr-native'
  | 'discord'
  | 'emojibase'
  | 'github'
  | 'iamcal'
  | 'slack';

export type SkinTone = 1 | 2 | 3 | 4 | 5;

export type SkinToneKey = 'light' | 'medium-light' | 'medium' | 'medium-dark' | 'dark';

export type Subgroup = number;

export type SubgroupKey =
  | 'face-smiling'
  | 'face-affection'
  | 'face-tongue'
  | 'face-hand'
  | 'face-neutral-skeptical'
  | 'face-sleepy'
  | 'face-unwell'
  | 'face-hat'
  | 'face-glasses'
  | 'face-concerned'
  | 'face-negative'
  | 'face-costume'
  | 'cat-face'
  | 'monkey-face'
  | 'emotion'
  | 'hand-fingers-open'
  | 'hand-fingers-partial'
  | 'hand-single-finger'
  | 'hand-fingers-closed'
  | 'hands'
  | 'hand-prop'
  | 'body-parts'
  | 'person'
  | 'person-gesture'
  | 'person-role'
  | 'person-fantasy'
  | 'person-activity'
  | 'person-sport'
  | 'person-resting'
  | 'family'
  | 'person-symbol'
  | 'skin-tone'
  | 'hair-style'
  | 'animal-mammal'
  | 'animal-bird'
  | 'animal-amphibian'
  | 'animal-reptile'
  | 'animal-marine'
  | 'animal-bug'
  | 'plant-flower'
  | 'plant-other'
  | 'food-fruit'
  | 'food-vegetable'
  | 'food-prepared'
  | 'food-asian'
  | 'food-marine'
  | 'food-sweet'
  | 'drink'
  | 'dishware'
  | 'place-map'
  | 'place-geographic'
  | 'place-building'
  | 'place-religious'
  | 'place-other'
  | 'transport-ground'
  | 'transport-water'
  | 'transport-air'
  | 'hotel'
  | 'time'
  | 'sky-weather'
  | 'event'
  | 'award-medal'
  | 'sport'
  | 'game'
  | 'arts-crafts'
  | 'clothing'
  | 'sound'
  | 'music'
  | 'musical-instrument'
  | 'phone'
  | 'computer'
  | 'light-video'
  | 'book-paper'
  | 'money'
  | 'mail'
  | 'writing'
  | 'office'
  | 'lock'
  | 'tool'
  | 'science'
  | 'medical'
  | 'household'
  | 'other-object'
  | 'transport-sign'
  | 'warning'
  | 'arrow'
  | 'religion'
  | 'zodiac'
  | 'av-symbol'
  | 'gender'
  | 'math'
  | 'punctuation'
  | 'currency'
  | 'other-symbol'
  | 'keycap'
  | 'alphanum'
  | 'geometric'
  | 'flag'
  | 'country-flag'
  | 'subdivision-flag';

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
  [hexcode: string]: string | string[];
}

export type Locale =
  | 'da'
  | 'de'
  | 'en'
  | 'en-gb'
  | 'es'
  | 'es-mx'
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
  | 'zh'
  | 'zh-hant';
