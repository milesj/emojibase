import { NON_LATIN_LOCALES } from './constants';
import { fetchFromCDN } from './fetchFromCDN';
import { FetchFromCDNOptions, Locale, ShortcodePreset, ShortcodesDataset } from './types';

const ALIASES: Partial<Record<ShortcodePreset, string>> = {
	discord: 'joypixels',
	slack: 'iamcal',
};

export async function fetchShortcodes(
	locale: Locale,
	preset: ShortcodePreset,
	options?: FetchFromCDNOptions,
): Promise<ShortcodesDataset> {
	if (preset === 'cldr-native' && !NON_LATIN_LOCALES.includes(locale)) {
		return Promise.resolve({});
	}

	return fetchFromCDN(`${locale}/shortcodes/${ALIASES[preset] ?? preset}.json`, options);
}
