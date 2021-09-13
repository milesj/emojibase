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

export type LocalizedShortcodePreset = `${Locale}/${ShortcodePreset}`;

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

export interface CompactEmoji
	extends Pick<
		Emoji,
		'annotation' | 'emoticon' | 'group' | 'hexcode' | 'order' | 'shortcodes' | 'tags'
	> {
	/** List of skin tones as emoji objects. */
	skins?: CompactEmoji[];
	/** Text or emoji representation unicode character, whichever is default. */
	unicode: Unicode;
}

export type FlatCompactEmoji = Omit<CompactEmoji, 'skins'>;

export interface Emoji {
	/** Localized description. */
	annotation: string;
	/** Emoji representation unicode character. */
	emoji: Unicode;
	/** Emoticon representation of the emoji. */
	emoticon?: Emoticon | Emoticon[];
	/** Gender of the emoji, if applicable. */
	gender?: Gender;
	/** Group the emoji belongs to. */
	group?: Group;
	/** Hexadecimal codepoint. */
	hexcode: Hexcode;
	/** Sorted order index. */
	order?: number;
	/** List of shortcodes without surrounding colons. */
	shortcodes?: Shortcode[];
	/** List of skin tones as emoji objects. */
	skins?: Emoji[];
	/** Sub-group the emoji belongs to. */
	subgroup?: Subgroup;
	/** Tags and keywords for searching. */
	tags?: string[];
	/** Text representation unicode character. */
	text: Unicode;
	/** Skin tones applied, as indices. */
	tone?: SkinTone | SkinTone[];
	/** Default presentation type. */
	type: Presentation;
	/** Version the emoji was added. */
	version: number;
}

export type FlatEmoji = Omit<Emoji, 'skins'>;

export interface EmojiLike {
	hexcode: string;
	shortcodes?: string[];
	skins?: EmojiLike[];
}

export interface GroupDataset {
	groups: Record<string, string>;
	subgroups: Record<string, string>;
	hierarchy: Record<string, number[]>;
}

export type VersionDataset = Record<string, string[]>;

export type ShortcodesDataset = Record<string, string[] | string>;

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
	/** Cache the response in local storage instead of session storage. Defaults to `false`. */
	local?: boolean;
	/** The release version to fetch. Defaults to `latest`. */
	version?: string;
}

export interface FetchEmojisOptions extends FetchFromCDNOptions {
	/** Load the compact dataset instead of the full dataset. Defaults to `false`. */
	compact?: boolean;
	/** Flatten the dataset (moving skin tones to the root). Defaults to `false`. */
	flat?: boolean;
	/** List of shortcode presets to load and merge into the emojis dataset. Defaults to an empty list. */
	shortcodes?: (LocalizedShortcodePreset | ShortcodePreset)[];
}
