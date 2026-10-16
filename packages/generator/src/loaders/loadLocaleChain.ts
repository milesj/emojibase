import { formatLocaleJson } from '../helpers/formatLocale';
import { importJsonModule } from './fetchAndCache';

interface CLDRParentLocales {
	supplemental: {
		parentLocales: {
			parentLocale: Record<string, string>;
			_localeRules?: { parentLocale?: { nonlikelyScript?: string } };
		};
	};
}

interface CLDRLikelySubtags {
	supplemental: { likelySubtags: Record<string, string> };
}

const ROOT = new Set(['root', 'und']);

// A locale and its CLDR ancestors, most specific first. Each parent comes from <parentLocales>,
// then the nonlikelyScript rule (e.g. zh-Hant goes straight to root), then truncation. Root is
// left out, as its annotations are placeholders. http://unicode.org/reports/tr35/#Parent_Locales
export async function loadLocaleChain(locale: string): Promise<string[]> {
	const { parentLocales } = (
		await importJsonModule<CLDRParentLocales>('cldr-core/supplemental/parentLocales.json')
	).supplemental;
	const { likelySubtags } = (
		await importJsonModule<CLDRLikelySubtags>('cldr-core/supplemental/likelySubtags.json')
	).supplemental;

	const getParent = (id: string): string => {
		if (parentLocales.parentLocale[id]) {
			return parentLocales.parentLocale[id];
		}

		const parts = id.split('-');
		const nonlikelyScript = parentLocales._localeRules?.parentLocale?.nonlikelyScript;

		if (
			nonlikelyScript &&
			parts.length === 2 &&
			parts[1].length === 4 &&
			!likelySubtags[parts[0]]?.split('-').includes(parts[1])
		) {
			return nonlikelyScript;
		}

		return parts.length > 1 ? parts.slice(0, -1).join('-') : 'root';
	};

	const chain: string[] = [];

	for (let id = formatLocaleJson(locale); !ROOT.has(id); id = getParent(id)) {
		chain.push(id);
	}

	return chain;
}
