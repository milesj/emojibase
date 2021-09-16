/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
	appendSkinToneIndex,
	Locale,
	NON_LATIN_LOCALES,
	stripHexcode,
	SUPPORTED_LOCALES,
} from 'emojibase';
import KuroshiroImport from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';
import { transliterate } from 'transliteration';
import { buildAnnotationData } from '../../builders/buildAnnotationData';
import { writeDataset } from '../../helpers/writeDataset';
import { loadPoMeta } from '../../loaders/loadPoMeta';
import { POManager } from '../../parsers/POManager';
import { ShortcodeDataMap } from '../../types';
import { Database } from '../Database';

const CUSTOM_SHORTCODES: Record<string, string> = {
	e_mail: 'email',
	t_rex: 'trex',
};

// @ts-expect-error CJS compat
const { default: Kuroshiro } = KuroshiroImport;
const kuroshiro = new Kuroshiro();

async function slugify(
	value: string,
	locale: Locale,
	po: POManager,
	transform: boolean = false,
): Promise<string> {
	let slug = value.trim();

	if (transform) {
		// Japanese: https://github.com/dzcpy/transliteration/issues/226
		if (locale === 'ja') {
			slug = await kuroshiro.convert(slug, {
				mode: 'spaced',
				romajiSystem: 'passport',
				to: 'romaji',
			});

			// These characters do not convert automatically
			slug = slug.replace('営', 'kanri').replace('々', 'kaku').replace('妊', 'ninshin');
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
			const isLatinChars = !NON_LATIN_LOCALES.includes(locale);
			const annotations = await buildAnnotationData(locale);
			const translations = await loadPoMeta(locale);
			const cldr: ShortcodeDataMap = {};
			const cldrNonLatin: ShortcodeDataMap = {};
			const skinToneSuffix = await slugify(
				translations.getMessage('tone'),
				locale,
				translations,
				true,
			);
			const skinToneSuffixNonLatin = await slugify(
				translations.getMessage('tone'),
				locale,
				translations,
			);
			let hasLatin = false;
			let hasNonLatin = false;

			for (const emoji of db.emojiList) {
				const row = annotations[emoji.hexcode] || annotations[stripHexcode(emoji.hexcode)];

				if (!row || !row.annotation || cldr[emoji.hexcode]) {
					// eslint-disable-next-line no-continue
					continue;
				}

				// eslint-disable-next-line require-atomic-updates
				cldr[emoji.hexcode] = await slugify(row.annotation, locale, translations, true);
				hasLatin = true;

				if (!isLatinChars) {
					cldrNonLatin[emoji.hexcode] = await slugify(row.annotation, locale, translations);
					hasNonLatin = true;
				}

				// Skin tones
				if (emoji.modifications) {
					// eslint-disable-next-line @typescript-eslint/no-loop-func
					Object.values(emoji.modifications).forEach((mod) => {
						if (hasLatin) {
							cldr[mod.hexcode] = appendSkinToneIndex(
								String(cldr[emoji.hexcode]),
								mod,
								skinToneSuffix,
							);
						}

						if (hasNonLatin) {
							cldrNonLatin[mod.hexcode] = appendSkinToneIndex(
								String(cldrNonLatin[emoji.hexcode]),
								mod,
								skinToneSuffixNonLatin,
							);
						}
					});
				}
			}

			const promises: Promise<unknown>[] = [];

			if (hasLatin) {
				promises.push(
					writeDataset(`${locale}/shortcodes/cldr.raw.json`, cldr),
					writeDataset(`${locale}/shortcodes/cldr.json`, cldr, true),
				);
			}

			if (hasNonLatin) {
				promises.push(
					writeDataset(`${locale}/shortcodes/cldr-native.raw.json`, cldrNonLatin),
					writeDataset(`${locale}/shortcodes/cldr-native.json`, cldrNonLatin, true),
				);
			}

			return Promise.all(promises);
		}),
	);
}
