/* eslint-disable promise/prefer-await-to-then */
import { LATEST_CLDR_VERSION } from 'emojibase';
import { formatLocaleJson } from '../helpers/formatLocale';
import { CLDRLocaleMap } from '../types';
import { importJsonModule } from './fetchAndCache';

interface CLDRLocaleNamesTerritories {
	main: Record<string, { localeDisplayNames: { territories?: Record<string, string> } }>;
}

interface CLDRLocaleNamesDisplayNames {
	main: Record<string, { localeDisplayNames: { subdivisions?: Record<string, string> } }>;
}

export async function loadLocalization(
	locale: string,
	version: string = LATEST_CLDR_VERSION,
): Promise<CLDRLocaleMap> {
	const jsonLocale = formatLocaleJson(locale);

	const territoryPromise = importJsonModule<CLDRLocaleNamesTerritories>(
		`cldr-localenames-full/main/${jsonLocale}/territories.json`,
	).then((cldr) => cldr.main[jsonLocale].localeDisplayNames.territories ?? {});

	const subdivisionPromise = importJsonModule<CLDRLocaleNamesDisplayNames>(
		`cldr-localenames-full/main/${jsonLocale}/localeDisplayNames.json`,
	).then((cldr) => cldr.main[jsonLocale].localeDisplayNames.subdivisions ?? {});

	const [subdivisions, territories] = await Promise.all([subdivisionPromise, territoryPromise]);

	return {
		subdivisions,
		territories,
	};
}
