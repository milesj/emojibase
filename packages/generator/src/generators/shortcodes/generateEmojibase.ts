import path from 'node:path';
import { appendSkinToneIndex, Emoji, Hexcode, SUPPORTED_LOCALES, TEXT } from 'emojibase';
import { SHORTCODE_GUIDELINES } from '../../constants';
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
	const missingShortcodes = new Set<Hexcode>();

	await Promise.all(
		SUPPORTED_LOCALES.map(async (locale) => {
			const translations = await loadPoShortcodes(locale);
			const metaTranslations = await loadPoMessages(locale);
			const shortcodes: ShortcodeDataMap = {};
			const shortcodesNative: ShortcodeDataMap = {};
			const skinToneSuffix = Database.slugify(metaTranslations.getMessage('tone'), true);
			const skinToneSuffixNative = Database.slugify(metaTranslations.getMessage('tone'));
			let count = 0;

			db.emojiList.forEach((emoji) => {
				const items = translations.itemsByComment[emoji.hexcode];

				if (!items) {
					if (locale === 'en') {
						missingShortcodes.add(emoji.hexcode);
					}

					return;
				}

				const list: string[] = [];
				const listNative: string[] = [];

				items
					.map((item) => translations.getMessage(item.msgid))
					.filter(Boolean)
					.forEach((msg) => {
						const code = Database.slugify(msg, true);
						const codeNative = Database.slugify(msg);

						// Avoid dupes
						if (list.includes(code)) {
							return;
						}

						list.push(code);

						if (codeNative !== code) {
							listNative.push(codeNative);
						}
					});

				if (list.length === 0) {
					return;
				}

				list.sort();
				listNative.sort();

				count += 1;
				shortcodes[emoji.hexcode] = db.formatShortcodes(list);

				if (listNative.length > 0) {
					shortcodesNative[emoji.hexcode] = db.formatShortcodes(listNative);
				}

				Object.values(emoji.modifications ?? {}).forEach((mod) => {
					shortcodes[mod.hexcode] = db.formatShortcodes(
						list.map((code) => appendSkinToneIndex(code, mod, skinToneSuffix)),
					);

					if (listNative.length > 0) {
						shortcodesNative[mod.hexcode] = db.formatShortcodes(
							listNative.map((code) => appendSkinToneIndex(code, mod, skinToneSuffixNative)),
						);
					}
				});
			});

			if (locale === 'en') {
				englishShortcodes = shortcodes;
			}

			if (count === 0) {
				return undefined;
			}

			const promises: Promise<unknown>[] = [
				writeDataset(`${locale}/shortcodes/emojibase.raw.json`, shortcodes),
				writeDataset(`${locale}/shortcodes/emojibase.json`, shortcodes, true),
			];

			if (Object.keys(shortcodesNative).length > 0) {
				promises.push(
					writeDataset(`${locale}/shortcodes/emojibase-native.raw.json`, shortcodesNative),
					writeDataset(`${locale}/shortcodes/emojibase-native.json`, shortcodesNative, true),
				);
			}

			return Promise.all(promises);
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
	const poAdditions: string[] = [];
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

		if (missingShortcodes.has(emoji.hexcode)) {
			poAdditions.push(
				'',
				`# ${emoji.hexcode}`,
				`msgctxt "EMOJI: ${unicode} ${emoji.label}"`,
				'msgid ""',
				'msgstr ""',
			);
		}
	});

	output.push('};\n');

	await writeFile(
		path.join(process.cwd(), 'packages/generator/src/resources'),
		'shortcodes.ts',
		output.join('\n'),
	);

	// eslint-disable-next-line no-console
	console.log(poAdditions.join('\n'));
}
