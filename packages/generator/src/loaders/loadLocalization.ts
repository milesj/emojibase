import { LATEST_CLDR_VERSION } from 'emojibase';
import { formatLocale } from '../helpers/formatLocale';
import { parseLocalization } from '../parsers/parseLocalization';
import { CLDRLocaleMap } from '../types';
import { fetchAndCache } from './fetchAndCache';

const SUBDIVISION_FALLBACK_LOCALES: Record<string, string> = {
	'en-gb': 'en',
	'es-mx': 'es',
};

export async function loadLocalization(
	locale: string,
	version: string = LATEST_CLDR_VERSION,
): Promise<CLDRLocaleMap> {
	const releaseVersion = version.replace(/\./g, '-');
	const pathLocale = formatLocale(locale);

	// Load territory names from main XML
	const territoryPromise = fetchAndCache(
		`https://raw.githubusercontent.com/unicode-org/cldr/release-${releaseVersion}/common/main/${pathLocale}.xml`,
		`cldr-${version}/messages-${locale}.json`,
		(data) => parseLocalization(version, data, 'territory'),
	);

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
