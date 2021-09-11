import { LATEST_CLDR_VERSION } from 'emojibase';
import { formatLocale } from '../helpers/formatLocale';
import { parseAnnotations } from '../parsers/parseAnnotations';
import { CLDRAnnotationMap } from '../types';
import { fetchAndCache } from './fetchAndCache';

export async function loadAnnotations(
	locale: string,
	derived: boolean = false, // Contains modifiers and sequences
	version: string = LATEST_CLDR_VERSION,
): Promise<CLDRAnnotationMap> {
	const releaseVersion = version.replace(/\./g, '-');
	const folderName = derived ? 'annotationsDerived' : 'annotations';

	// Norwegian locale changed in CLDR 39
	// https://github.com/unicode-org/cldr/pull/1031
	// TODO: Change in next major
	const pathLocale = formatLocale(locale === 'nb' ? 'no' : locale);

	return (
		fetchAndCache(
			`https://raw.githubusercontent.com/unicode-org/cldr/release-${releaseVersion}/common/${folderName}/${pathLocale}.xml`,
			`cldr-${version}/${folderName}-${locale}.json`,
			(data) => parseAnnotations(version, data),
		)
			// Some annotation files do not exist for specific locales,
			// so instead of crashing the entire generator process,
			// just return an empty object and log.
			// eslint-disable-next-line promise/prefer-await-to-then
			.catch(() => ({}))
	);
}
