/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { appendSkinToneIndex, Locale, stripHexcode, SUPPORTED_LOCALES } from 'emojibase';
import KuroshiroImport from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';
import { transliterate } from 'transliteration';
import { buildAnnotationData } from '../../builders/buildAnnotationData';
import { writeDataset } from '../../helpers/writeDataset';
import { loadPoMessages } from '../../loaders/loadPoMessages';
import { POManager } from '../../parsers/POManager';
import { ShortcodeDataMap } from '../../types';
import { Database } from '../Database';

const CUSTOM_SHORTCODES: Record<string, string> = {
	e_mail: 'email',
	t_rex: 'trex',
};

function decodeEscapeSequence(value: string) {
	const replacer = (all: string, match: string) => String.fromCodePoint(Number.parseInt(match, 16));

	return value
		.replace(/\\x{([\dA-Fa-f]{2})}/g, replacer)
		.replace(/\\x([\dA-Fa-f]{2})/g, replacer)
		.normalize();
}

// @ts-expect-error CJS compat
const { default: Kuroshiro } = KuroshiroImport;
const kuroshiro = new Kuroshiro();

async function slugify(
	value: string,
	locale: Locale,
	po: POManager,
	transform: boolean = false,
): Promise<string> {
	let slug = decodeEscapeSequence(value.trim());

	if (transform) {
		// Japanese: https://github.com/dzcpy/transliteration/issues/226
		if (locale === 'ja') {
			slug = await kuroshiro.convert(slug, {
				mode: 'spaced',
				romajiSystem: 'passport',
				to: 'romaji',
			});

			// These characters do not convert automatically
			slug = slug
				.replace('営', 'kanri')
				.replace('々', 'kaku')
				.replace('妊', 'ninshin')
				.replace('浮', 'furotingu');
		} else {
			slug = transliterate(slug);
		}
	}

	// Replace unnecessary dashes before slugging
	slug = slug.replace(/-/gu, '_');

	slug = Database.slugify(slug);

	if (slug.includes('*')) {
		slug = slug.replace('*', await slugify(po.getMessage('asterisk'), locale, po, transform));
	}

	if (slug.includes('#')) {
		slug = slug.replace('#', await slugify(po.getMessage('number sign'), locale, po, transform));
	}

	return CUSTOM_SHORTCODES[slug] || slug;
}

export async function generateCldr(db: Database) {
	db.preset = 'cldr';

	await kuroshiro.init(new KuromojiAnalyzer()); // Japanese

	return Promise.all(
		SUPPORTED_LOCALES.map(async (locale) => {
			const annotations = await buildAnnotationData(locale);
			const translations = await loadPoMessages(locale);
			const cldr: ShortcodeDataMap = {};
			const cldrNative: ShortcodeDataMap = {};
			const skinToneSuffix = await slugify(
				translations.getMessage('tone'),
				locale,
				translations,
				true,
			);
			const skinToneSuffixNative = await slugify(
				translations.getMessage('tone'),
				locale,
				translations,
			);

			for (const emoji of db.emojiList) {
				const row = annotations[emoji.hexcode] || annotations[stripHexcode(emoji.hexcode)];

				if (!row?.annotation || cldr[emoji.hexcode]) {
					// eslint-disable-next-line no-continue
					continue;
				}

				const code = await slugify(row.annotation, locale, translations, true);
				const codeNative = await slugify(row.annotation, locale, translations);

				// eslint-disable-next-line require-atomic-updates
				cldr[emoji.hexcode] = code;

				if (codeNative !== code) {
					cldrNative[emoji.hexcode] = codeNative;
				}

				// Skin tones
				Object.values(emoji.modifications ?? {}).forEach((mod) => {
					cldr[mod.hexcode] = appendSkinToneIndex(String(cldr[emoji.hexcode]), mod, skinToneSuffix);

					if (codeNative !== code) {
						cldrNative[mod.hexcode] = appendSkinToneIndex(
							String(cldrNative[emoji.hexcode]),
							mod,
							skinToneSuffixNative,
						);
					}
				});
			}

			const promises: Promise<unknown>[] = [
				writeDataset(`${locale}/shortcodes/cldr.raw.json`, cldr),
				writeDataset(`${locale}/shortcodes/cldr.json`, cldr, true),
			];

			if (Object.keys(cldrNative).length > 0) {
				promises.push(
					writeDataset(`${locale}/shortcodes/cldr-native.raw.json`, cldrNative),
					writeDataset(`${locale}/shortcodes/cldr-native.json`, cldrNative, true),
				);
			}

			return Promise.all(promises);
		}),
	);
}
