import {
	type Emoji,
	type GroupDataset,
	type Hexcode,
	type Locale,
	type ShortcodesDataset,
	SUPPORTED_LOCALES,
} from 'emojibase';
import { log } from '../helpers/log';
import { readCache } from '../helpers/readCache';
import { toArray } from '../helpers/toArray';
import { loadDataset } from '../loaders/loadDatasetPackage';
import { loadPoMessages } from '../loaders/loadPoMessages';
import { loadPoShortcodes } from '../loaders/loadPoShortcodes';

const LOCALES = ['base', ...SUPPORTED_LOCALES];

export async function generatePoFiles(): Promise<void> {
	log.title('data', 'Generating I18N po files');

	const emojiList = await loadDataset<Emoji[]>('en/data.raw.json');
	const emojiMap: Record<Hexcode, Emoji> = {};

	emojiList.forEach((emoji) => {
		emojiMap[emoji.hexcode] = emoji;

		if (emoji.skins) {
			emoji.skins.forEach((skin) => {
				emojiMap[skin.hexcode] = skin;
			});
		}
	});

	const emojibaseShortcodes = await loadDataset<ShortcodesDataset>(
		'en/shortcodes/emojibase.raw.json',
	);
	const groupHierarchy = readCache<GroupDataset>('temp/group-hierarchy.json');

	if (!groupHierarchy) {
		throw new Error('Group hierarchy dataset missing!');
	}

	await Promise.all(
		LOCALES.map(async (locale) => {
			const poShortcodes = await loadPoShortcodes(locale as Locale);
			const poMessages = await loadPoMessages(locale as Locale);

			// We use english as the base so all others inherit
			Object.entries(emojibaseShortcodes).forEach(([hexcode, shortcodeList]) => {
				const shortcodes = toArray(shortcodeList);
				const emoji = emojiMap[hexcode];

				// Skip skin tones since they're automatically generated
				if (emoji.tone) {
					return;
				}

				shortcodes.forEach((shortcode) => {
					poShortcodes.addItem(
						shortcode,
						locale === 'en' ? shortcode : '',
						`EMOJI: ${emoji.emoji || emoji.text} ${emoji.label}`,
						{
							comment: emoji.hexcode,
						},
					);
				});
			});

			Object.entries(groupHierarchy.groups).forEach(([order, key]) => {
				let msgstr = '';

				if (LEGACY_REMAP[key]) {
					msgstr = poMessages.getItem(LEGACY_REMAP[key]).msgstr;
					poMessages.removeItem(LEGACY_REMAP[key]);
				}

				poMessages.addItem(key, msgstr, `EMOJI GROUP: ${key}`, {
					comment: order,
				});
			});

			Object.entries(groupHierarchy.subgroups).forEach(([order, key]) => {
				let msgstr = '';

				if (LEGACY_REMAP[key]) {
					msgstr = poMessages.getItem(LEGACY_REMAP[key]).msgstr;
					poMessages.removeItem(LEGACY_REMAP[key]);
				}

				poMessages.addItem(key, msgstr, `EMOJI SUB-GROUP: ${key}`, {
					comment: order,
				});
			});

			await Promise.all([poShortcodes.write('msgid'), poMessages.write('msgctxt')]);
		}),
	);
}

const LEGACY_REMAP: Record<string, string> = {
	'smileys-emotion': 'smileys & emotion',
	'people-body': 'people & body',
	component: 'components',
	'animals-nature': 'animals & nature',
	'food-drink': 'food & drink',
	'travel-places': 'travel & places',
	activities: 'activities',
	objects: 'objects',
	symbols: 'symbols',
	flags: 'flags',
	'face-smiling': 'smiling',
	'face-affection': 'affectionate',
	'face-tongue': 'with tongue',
	'face-hand': 'with hands',
	'face-neutral-skeptical': 'neutral / skeptical',
	'face-sleepy': 'sleepy',
	'face-unwell': 'unwell',
	'face-hat': 'with hats',
	'face-glasses': 'with glasses',
	'face-concerned': 'concerned',
	'face-negative': 'negative',
	'face-costume': 'costumed & creatures',
	'cat-face': 'cat faces',
	'monkey-face': 'monkey faces',
	emotion: 'emotions',
	'hand-fingers-open': 'fingers open',
	'hand-fingers-partial': 'hand signs',
	'hand-single-finger': 'finger pointing',
	'hand-fingers-closed': 'fingers closed',
	hands: 'hands',
	'hand-prop': 'hand props',
	'body-parts': 'body parts',
	person: 'people',
	'person-gesture': 'gestures',
	'person-role': 'roles & careers',
	'person-fantasy': 'fantasy',
	'person-sport': 'athletics',
	'person-resting': 'resting',
	family: 'family',
	'person-symbol': 'people symbols',
	'skin-tone': 'skin tones',
	'hair-style': 'hair styles',
	'animal-mammal': 'mammals',
	'animal-bird': 'birds',
	'animal-amphibian': 'amphibians',
	'animal-reptile': 'reptiles',
	'animal-marine': 'marine life',
	'animal-bug': 'bugs',
	'plant-flower': 'flowers',
	'plant-other': 'other plants',
	'food-fruit': 'fruit',
	'food-vegetable': 'vegetables',
	'food-prepared': 'cooked / prepared',
	'food-asian': 'asian',
	'food-marine': 'seafood',
	'food-sweet': 'sweets & candy',
	drink: 'drink',
	dishware: 'dishware',
	'place-map': 'globes & maps',
	'place-geographic': 'geographic locations',
	'place-building': 'buildings',
	'place-religious': 'religious buildings',
	'place-other': 'other places',
	'transport-ground': 'ground transportation',
	'transport-water': 'water transportation',
	'transport-air': 'air transportation',
	hotel: 'hotel',
	time: 'time',
	'sky-weather': 'weather',
	event: 'events & holidays',
	'award-medal': 'award medals',
	sport: 'sports',
	game: 'games & hobbies',
	'arts-crafts': 'arts & crafts',
	clothing: 'clothing',
	sound: 'sound',
	music: 'music',
	'musical-instrument': 'musical instruments',
	phone: 'phone',
	computer: 'computer',
	'light-video': 'light, film & video',
	'book-paper': 'books & paper',
	money: 'money',
	mail: 'mail',
	writing: 'writing',
	office: 'office supplies',
	lock: 'lock & keys',
	tool: 'tools',
	science: 'science equipment',
	medical: 'medical',
	household: 'household items',
	'other-object': 'other objects',
	'transport-sign': 'transport signs',
	warning: 'warning symbols',
	arrow: 'arrows',
	religion: 'religious symbols',
	zodiac: 'zodiac signs',
	'av-symbol': 'audio & video symbols',
	gender: 'gender signs',
	math: 'math symbols',
	punctuation: 'punctuation',
	currency: 'currencies',
	'other-symbol': 'other symbols',
	keycap: 'keypad characters',
	alphanum: 'alphanumeric symbols',
	geometric: 'shapes & colors',
	flag: 'other flags',
	'country-flag': 'country flags',
	'subdivision-flag': 'subdivision flags',
};
