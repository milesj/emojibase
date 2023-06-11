import fs from 'node:fs';
import path from 'node:path';
import { Locale } from 'emojibase';
import PO from 'pofile';
import { LOCALE_COUNTRIES } from '../constants';
import { POManager } from '../parsers/POManager';

const instanceCache: Partial<Record<Locale, POManager>> = {};

export async function loadPoShortcodes(locale: Locale): Promise<POManager> {
	if (instanceCache[locale]) {
		return instanceCache[locale]!;
	}

	const poPath = path.resolve(process.cwd(), `po/${locale}/shortcodes.po`);
	const po = PO.parse(await fs.promises.readFile(poPath, 'utf8'));

	if (po.comments.length <= 1) {
		po.comments = [LOCALE_COUNTRIES[locale]];
	}

	const instance = new POManager(poPath, po);

	// eslint-disable-next-line require-atomic-updates
	instanceCache[locale] = instance;

	return instance;
}
