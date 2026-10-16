import { LATEST_CLDR_VERSION } from 'emojibase';
import type { CLDRDataMap, CLDRLocaleMap } from '../types';
import { importJsonModule } from './fetchAndCache';
import { loadLocaleChain } from './loadLocaleChain';

interface CLDRLocaleNamesTerritories {
	main: Record<string, { localeDisplayNames: { territories?: CLDRDataMap } }>;
}

interface CLDRLocaleNamesDisplayNames {
	main: Record<string, { localeDisplayNames: { subdivisions?: CLDRDataMap } }>;
}

interface CLDRMiscCharacterLabels {
	main: Record<
		string,
		{ characterLabelPatterns?: CLDRDataMap; characterLabels?: CLDRDataMap }
	>;
}

async function tryImport<T>(name: string): Promise<T | undefined> {
	try {
		return await importJsonModule<T>(name);
	} catch {
		return undefined;
	}
}

async function loadLocalizationFor(id: string): Promise<CLDRLocaleMap> {
	const [territories, names, labels] = await Promise.all([
		tryImport<CLDRLocaleNamesTerritories>(`cldr-localenames-full/main/${id}/territories.json`),
		tryImport<CLDRLocaleNamesDisplayNames>(
			`cldr-localenames-full/main/${id}/localeDisplayNames.json`,
		),
		tryImport<CLDRMiscCharacterLabels>(`cldr-misc-full/main/${id}/characterLabels.json`),
	]);

	return {
		labelPatterns: labels?.main[id].characterLabelPatterns ?? {},
		labels: labels?.main[id].characterLabels ?? {},
		subdivisions: names?.main[id].localeDisplayNames.subdivisions ?? {},
		territories: territories?.main[id].localeDisplayNames.territories ?? {},
	};
}

// Each item inherits through the locale chain on its own, so a locale that only
// overrides a few names still gets the rest from its parents
export async function loadLocalization(
	locale: string,
	version: string = LATEST_CLDR_VERSION,
): Promise<CLDRLocaleMap> {
	const chain = await loadLocaleChain(locale);
	const maps = await Promise.all(chain.map(loadLocalizationFor));

	return maps.reduceRight<CLDRLocaleMap>(
		(merged, map) => ({
			labelPatterns: { ...merged.labelPatterns, ...map.labelPatterns },
			labels: { ...merged.labels, ...map.labels },
			subdivisions: { ...merged.subdivisions, ...map.subdivisions },
			territories: { ...merged.territories, ...map.territories },
		}),
		{ labelPatterns: {}, labels: {}, subdivisions: {}, territories: {} },
	);
}
