import path from 'node:path';
import type { ShortcodePreset, ShortcodesDataset } from 'emojibase';
import SHORTCODE_PATTERN from 'emojibase-regex/shortcode';
import SHORTCODE_NATIVE_PATTERN from 'emojibase-regex/shortcode-native';

const locale = process.env.TEST_LOCALE ?? 'en';
const localeCache: Record<string, ShortcodesDataset> = {};

function loadShortcodesData(preset: ShortcodePreset): ShortcodesDataset {
	const key = `${locale}:${preset}`;

	if (localeCache[key]) {
		return localeCache[key];
	}

	try {
		localeCache[key] = require(path.join(__dirname, '..', locale, `shortcodes/${preset}.raw.json`));
	} catch {
		return {};
	}

	return localeCache[key];
}

describe('shortcodes', () => {
	const presets: ShortcodePreset[] = [
		'cldr',
		'cldr-native',
		'emojibase',
		'emojibase-native',
		'emojibase-legacy',
		'github',
		'iamcal',
		'joypixels',
	];

	presets.forEach((preset) => {
		const pattern =
			preset === 'cldr-native' || preset === 'emojibase-native'
				? SHORTCODE_NATIVE_PATTERN
				: SHORTCODE_PATTERN;

		describe(`${preset}`, () => {
			Object.entries(loadShortcodesData(preset)).forEach(([, shortcodes]) => {
				(Array.isArray(shortcodes) ? shortcodes : [shortcodes]).forEach((code) => {
					const shortcode = `:${code}:`; // Does not include colons by default

					it(`matches shortcode by itself for ${shortcode}`, () => {
						expect(shortcode).toMatch(pattern);
					});

					it(`matches shortcode in the middle of a string for ${shortcode}`, () => {
						expect(`In the middle ${shortcode} of a string.`).toMatch(pattern);
					});

					it(`matches multiple shortcode for ${shortcode}`, () => {
						const globalPattern = new RegExp(pattern.source, 'g');
						const matches = `One ${shortcode} Two ${shortcode} Three ${shortcode}.`.match(
							globalPattern,
						);
						expect(matches).toHaveLength(3);
					});
				});
			});
		});
	});
});
