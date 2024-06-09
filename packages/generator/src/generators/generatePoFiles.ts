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
				poMessages.addItem(key, '', `EMOJI GROUP: ${key}`, {
					comment: order,
				});
			});

			Object.entries(groupHierarchy.subgroups).forEach(([order, key]) => {
				poMessages.addItem(key, '', `EMOJI SUB-GROUP: ${key}`, {
					comment: order,
				});
			});

			await Promise.all([poShortcodes.write('msgid'), poMessages.write('msgctxt')]);
		}),
	);
}
