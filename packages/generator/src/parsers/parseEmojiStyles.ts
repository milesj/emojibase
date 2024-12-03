import * as cheerio from 'cheerio';
import { fromUnicodeToHexcode } from 'emojibase';
import type { EmojiStylesMap } from '../types';

/**
 * Parses an official unicode emoji default styles chart.
 *
 * Example: https://unicode.org/emoji/charts-12.1/emoji-style.html
 */
export function parseEmojiStyles(content: string): EmojiStylesMap {
	const xml = cheerio.load(content, { xmlMode: true });
	const styles: EmojiStylesMap = { emoji: {}, text: {} };

	xml('table')
		.first()
		.find('tr')
		.each((i, row) => {
			const tr = xml(row);
			const tds = tr.find('td');

			if (tds.length === 0 || tds.eq(1).text().trim() !== 'plain') {
				return;
			}

			const type = tds.eq(0).find('a').first().text().trim();

			tr.find('.tick').each((l, tick) => {
				const hexcode = fromUnicodeToHexcode(xml(tick).find('a').first().text().trim());

				if (type === 'text-vs') {
					styles.text[hexcode] = true;
					delete styles.emoji[hexcode];
				} else if (!styles.text[hexcode]) {
					styles.emoji[hexcode] = true;
				}
			});
		});

	return styles;
}
