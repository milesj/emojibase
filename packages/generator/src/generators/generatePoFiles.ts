import { type Emoji, type Hexcode, type ShortcodesDataset, SUPPORTED_LOCALES } from 'emojibase';
import { log } from '../helpers/log';
import { toArray } from '../helpers/toArray';
import { loadDataset } from '../loaders/loadDatasetPackage';
import { loadPoShortcodes } from '../loaders/loadPoShortcodes';

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

	// Shortcodes
	const emojibaseShortcodes = await loadDataset<ShortcodesDataset>(
		'en/shortcodes/emojibase.raw.json',
	);

	await Promise.all(
		SUPPORTED_LOCALES.map(async (locale) => {
			const po = await loadPoShortcodes(locale);

			// We use english as the base so all others inherit
			Object.entries(emojibaseShortcodes).forEach(([hexcode, shortcodeList]) => {
				const shortcodes = toArray(shortcodeList);
				const emoji = emojiMap[hexcode];

				// Skip skin tones since they're automatically generated
				if (emoji.tone) {
					return;
				}

				shortcodes.forEach((shortcode) => {
					po.addItem(
						shortcode,
						locale === 'en' ? shortcode : '',
						`EMOJI: ${emoji.emoji || emoji.text} ${emoji.label}`,
						{
							comment: emoji.hexcode,
						},
					);
				});
			});

			return po.write(true);
		}),
	);
}
