import path from 'path';
import { appendSkinToneIndex, Emoji, SUPPORTED_LOCALES, TEXT } from 'emojibase';
import { SHORTCODE_GUIDELINES } from '../../constants';
import { toArray } from '../../helpers/toArray';
import { writeDataset } from '../../helpers/writeDataset';
import { writeFile } from '../../helpers/writeFile';
import { loadDataset } from '../../loaders/loadDatasetPackage';
import { loadPoMessages } from '../../loaders/loadPoMessages';
import { loadPoShortcodes } from '../../loaders/loadPoShortcodes';
import { ShortcodeDataMap } from '../../types';
import { Database } from '../Database';

export async function generateEmojibase(db: Database) {
	db.preset = 'emojibase';

	let englishShortcodes: ShortcodeDataMap = {};

	await Promise.all(
		SUPPORTED_LOCALES.map(async (locale) => {
			const shortcodes: ShortcodeDataMap = {};
			const translations = await loadPoShortcodes(locale);
			const metaTranslations = await loadPoMessages(locale);
			const toneMsg = metaTranslations.getMessage('tone');
			let count = 0;

			db.emojiList.forEach((emoji) => {
				const items = translations.itemsByComment[emoji.hexcode];

				if (!items) {
					return;
				}

				const list = items
					.map((item) => Database.slugify(toArray(item.msgstr).join('')))
					.filter(Boolean)
					.sort();

				if (list.length === 0) {
					return;
				}

				count += 1;
				shortcodes[emoji.hexcode] = db.formatShortcodes(list);

				if (emoji.modifications) {
					Object.values(emoji.modifications).forEach((mod) => {
						shortcodes[mod.hexcode] = db.formatShortcodes(
							list.map((code) => appendSkinToneIndex(code, mod, toneMsg)),
						);
					});
				}
			});

			if (locale === 'en') {
				englishShortcodes = shortcodes;
			}

			if (count === 0) {
				return Promise.resolve();
			}

			return Promise.all([
				writeDataset(`${locale}/shortcodes/emojibase.raw.json`, shortcodes),
				writeDataset(`${locale}/shortcodes/emojibase.json`, shortcodes, true),
			]);
		}),
	);

	// Organize and sort the resources file using the raw dataset
	const emojisSource = await loadDataset<Emoji[]>('en/data.raw.json');

	const output: string[] = [
		'/* eslint-disable sort-keys */',
		'',
		SHORTCODE_GUIDELINES,
		'',
		'export const shortcodes = {',
	];
	let lastVersion = 0;

	// Sort by version -> order
	emojisSource.sort((a, b) =>
		a.version === b.version ? (a.order ?? -1) - (b.order ?? -1) : a.version - b.version,
	);

	// Add each emoji to the list
	emojisSource.forEach((emoji) => {
		if (emoji.version !== lastVersion) {
			output.push('', `  // VERSION ${emoji.version}`);

			lastVersion = emoji.version;
		}

		const unicode = emoji.type === TEXT ? emoji.text : emoji.emoji;
		let codes = englishShortcodes[emoji.hexcode] || [];

		if (!Array.isArray(codes)) {
			codes = [codes];
		}

		output.push(
			`  // ${unicode} ${emoji.label}`,
			`  '${emoji.hexcode}': [${codes.map((sc) => `'${sc}'`).join(', ')}],`,
		);
	});

	output.push('};\n');

	await writeFile(
		path.join(process.cwd(), 'packages/generator/src/resources'),
		'shortcodes.ts',
		output.join('\n'),
	);
}
