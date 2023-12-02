import { fromUnicodeToHexcode, LATEST_CLDR_VERSION, stripHexcode } from 'emojibase';
import { formatLocaleJson } from '../helpers/formatLocale';
import { CLDRAnnotationMap } from '../types';
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
	locale: string,
	derived: boolean = false, // Contains modifiers and sequences
	version: string = LATEST_CLDR_VERSION,
): Promise<CLDRAnnotationMap> {
	const jsonLocale = formatLocaleJson(locale === 'nb' ? 'no' : locale);
	let cldrData: CLDRAnnotationData = {};

	if (derived) {
		try {
			const cldr = await importJsonModule<CLDRAnnotationsDerived>(
				`cldr-annotations-derived-full/annotationsDerived/${jsonLocale}/annotations.json`,
			);
			cldrData = cldr.annotationsDerived.annotations;
		} catch {
			// Some annotation files do not exist for specific locales,
			// so instead of crashing the entire generator process,
			// just use an empty object and log.
		}
	} else {
		const cldr = await importJsonModule<CLDRAnnotations>(
			`cldr-annotations-full/annotations/${jsonLocale}/annotations.json`,
		);
		cldrData = cldr.annotations.annotations;
	}

	const data: CLDRAnnotationMap = {};

	Object.entries(cldrData).forEach(([unicode, anno]) => {
		const hexcode = stripHexcode(fromUnicodeToHexcode(unicode));

		if (!data[hexcode]) {
			data[hexcode] = {
				annotation: '',
				tags: [],
			};
		}

		if (anno.tts) {
			data[hexcode].annotation = anno.tts.join(' ');
		}

		if (anno.default) {
			data[hexcode].tags = anno.default.map((tag) => tag.toLocaleLowerCase());
		}
	});

	return data;
}
