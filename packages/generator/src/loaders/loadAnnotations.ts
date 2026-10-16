import { fromUnicodeToHexcode, LATEST_CLDR_VERSION } from 'emojibase';
import { formatLocaleJson } from '../helpers/formatLocale';
import { toAnnotationKey } from '../helpers/toAnnotationKey';
import type { CLDRAnnotationMap } from '../types';
import { importJsonModule } from './fetchAndCache';

type CLDRAnnotationData = Record<string, { default?: string[]; tts?: string[] }>;

interface CLDRAnnotations {
	annotations: {
		annotations: CLDRAnnotationData;
	};
}

interface CLDRAnnotationsDerived {
	annotationsDerived: {
		annotations: CLDRAnnotationData;
	};
}

export async function loadAnnotations(
	locale: string, // A CLDR locale ID, such as "en-001"
	derived: boolean = false, // Contains modifiers and sequences
	version: string = LATEST_CLDR_VERSION,
): Promise<CLDRAnnotationMap> {
	const jsonLocale = formatLocaleJson(locale);
	let cldrData: CLDRAnnotationData = {};

	// Not every locale has both files (e.g. en-GB has no derived annotations),
	// and the parent locales fill in whatever is missing
	try {
		cldrData = derived
			? (
					await importJsonModule<CLDRAnnotationsDerived>(
						`cldr-annotations-derived-full/annotationsDerived/${jsonLocale}/annotations.json`,
					)
				).annotationsDerived.annotations
			: (
					await importJsonModule<CLDRAnnotations>(
						`cldr-annotations-full/annotations/${jsonLocale}/annotations.json`,
					)
				).annotations.annotations;
	} catch {
		// Use an empty object
	}

	const data: CLDRAnnotationMap = {};

	// Keywords keep their CLDR casing, such as German nouns and acronyms like "OK"
	Object.entries(cldrData).forEach(([unicode, anno]) => {
		data[toAnnotationKey(fromUnicodeToHexcode(unicode, false))] = {
			annotation: anno.tts?.join(' ') ?? '',
			tags: anno.default ?? [],
		};
	});

	return data;
}
