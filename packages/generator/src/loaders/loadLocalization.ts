/* eslint-disable promise/prefer-await-to-then */
import { LATEST_CLDR_VERSION } from 'emojibase';
import { formatLocale, formatLocaleJson } from '../helpers/formatLocale';
import { parseLocalization } from '../parsers/parseLocalization';
import { CLDRLocaleMap } from '../types';
import { fetchAndCache, importJsonModule } from './fetchAndCache';

const SUBDIVISION_FALLBACK_LOCALES: Record<string, string> = {
	'en-gb': 'en',
	'es-mx': 'es',
};

interface CLDRLocaleNamesTerritories {
	main: Record<string, { localeDisplayNames: { territories: Record<string, string> } }>;
}

export async function loadLocalization(
	locale: string,
	version: string = LATEST_CLDR_VERSION,
): Promise<CLDRLocaleMap> {
	const releaseVersion = version.replace(/\./g, '-');
	const pathLocale = formatLocale(locale);
	const jsonLocale = formatLocaleJson(locale);

	// Load territory names from main XML
	const territoryPromise = importJsonModule<CLDRLocaleNamesTerritories>(
		`cldr-localenames-modern/main/${jsonLocale}/territories.json`,
	).then((cldr) => cldr.main[jsonLocale].localeDisplayNames.territories);

	// Load subdivision names from subdivision XML
	const subdivisionPromise = fetchAndCache(
		`https://raw.githubusercontent.com/unicode-org/cldr/release-${releaseVersion}/common/subdivisions/${
			SUBDIVISION_FALLBACK_LOCALES[locale] || pathLocale
		}.xml`,
		`cldr-${version}/subdivisions-${locale}.json`,
		(data) => parseLocalization(version, data, 'subdivision'),
	);

	const [subdivisions, territories] = await Promise.all([subdivisionPromise, territoryPromise]);

	return {
		subdivisions,
		territories,
	};
}
