import {
	EMOTICON_OPTIONS,
	fromCodepointToUnicode,
	fromHexcodeToCodepoint,
	generateEmoticonPermutations,
} from 'emojibase';
import { loadFlatEmojiData } from 'emojibase-test-utils';
import CODEPOINT_COMBO_PATTERN from '../codepoint';
import CODEPOINT_EMOJI_PATTERN from '../codepoint/emoji';
import CODEPOINT_EMOJI_LOOSE_PATTERN from '../codepoint/emoji-loose';
import CODEPOINT_TEXT_PATTERN from '../codepoint/text';
import CODEPOINT_TEXT_LOOSE_PATTERN from '../codepoint/text-loose';
import EMOJI_PATTERN from '../emoji';
import EMOJI_LOOSE_PATTERN from '../emoji-loose';
import EMOTICON_PATTERN from '../emoticon';
import TEXT_PATTERN from '../text';
import TEXT_LOOSE_PATTERN from '../text-loose';

import COMBO_PATTERN from '..';

const PATTERNS = {
	combo: COMBO_PATTERN,
	comboCodepoint: CODEPOINT_COMBO_PATTERN,
	emoji: EMOJI_PATTERN,
	emojiLoose: EMOJI_LOOSE_PATTERN,
	emojiCodepoint: CODEPOINT_EMOJI_PATTERN,
	emojiCodepointLoose: CODEPOINT_EMOJI_LOOSE_PATTERN,
	text: TEXT_PATTERN,
	textLoose: TEXT_LOOSE_PATTERN,
	textCodepoint: CODEPOINT_TEXT_PATTERN,
	textCodepointLoose: CODEPOINT_TEXT_LOOSE_PATTERN,
};

const PATTERN_DESCRIPTIONS = {
	combo: 'combo regex',
	comboCodepoint: 'combo unicode codepoint regex',
	emoji: 'emoji regex',
	emojiLoose: 'emoji regex (loose)',
	emojiCodepoint: 'emoji unicode codepoint regex',
	emojiCodepointLoose: 'emoji unicode codepoint regex (loose)',
	text: 'text regex',
	textLoose: 'text regex (loose)',
	textCodepoint: 'text unicode codepoint regex',
	textCodepointLoose: 'text unicode codepoint regex (loose)',
};

const VARIATION_DESCRIPTIONS = {
	emoji: 'emoji presentation',
	text: 'text presentation',
	none: 'no presentation',
};

type VariationType = keyof typeof VARIATION_DESCRIPTIONS;

type PatternType = keyof typeof PATTERN_DESCRIPTIONS;

interface Test {
	type: VariationType;
	unicode: string;
	pass: PatternType[];
	fail?: PatternType[];
}

const BASE_PATTERNS: PatternType[] = ['combo', 'comboCodepoint'];

describe('regex', () => {
	loadFlatEmojiData().forEach((emoji) => {
		const tests: Test[] = [];

		// Has emoji variation
		if (emoji.emoji) {
			tests.push({
				type: 'emoji',
				unicode: emoji.emoji,
				pass: [...BASE_PATTERNS, 'emojiLoose', 'emojiCodepoint', 'emojiCodepointLoose'],
			});
		}

		// Has text variation
		if (emoji.text) {
			tests.push({
				type: 'text',
				unicode: emoji.text,
				pass: [...BASE_PATTERNS, 'textLoose', 'textCodepoint', 'textCodepointLoose'],
			});
		}

		tests.forEach(({ unicode, type, pass }) => {
			describe(`${VARIATION_DESCRIPTIONS[type]}`, () => {
				pass.forEach((passType) => {
					const pattern = PATTERNS[passType];

					describe(`passes ${PATTERN_DESCRIPTIONS[passType]}`, () => {
						it(`matches unicode by itself for ${unicode}`, () => {
							const match = unicode.match(pattern)!;
							expect(match).not.toBeNull();
							expect(match[0]).toBe(unicode);
						});

						it(`matches unicode in the middle of a string for ${unicode}`, () => {
							const match = `In the middle ${unicode} of a string.`.match(pattern)!;
							expect(match).not.toBeNull();
							expect(match[0]).toBe(unicode);
						});

						it(`matches multiple unicode for ${unicode}`, () => {
							const matches = `One ${unicode} Two ${unicode} Three ${unicode}.`.match(
								new RegExp(pattern.source, `g${pattern.flags}`),
							);
							expect(matches).not.toBeNull();
							expect(matches).toHaveLength(3);
							expect(matches).toEqual([unicode, unicode, unicode]);
						});
					});
				});
			});
		});

		if (emoji.emoticon) {
			const emoticons = Array.isArray(emoji.emoticon) ? emoji.emoticon : [emoji.emoticon];

			emoticons.forEach((emoticon) => {
				generateEmoticonPermutations(emoticon, EMOTICON_OPTIONS[emoticon] || {}).forEach((emo) => {
					it(`matches emoticon variation ${emo}`, () => {
						expect(emo).toMatch(EMOTICON_PATTERN);
					});
				});
			});
		}
	});

	function createEmoji(hexcode: string): string {
		return fromCodepointToUnicode(fromHexcodeToCodepoint(hexcode));
	}

	const variationSelectors: Test[] = [
		{
			type: 'none',
			unicode: createEmoji('26A0'),
			pass: [
				'combo',
				'comboCodepoint',
				'emojiLoose',
				'emojiCodepointLoose',
				'textLoose',
				'textCodepointLoose',
			],
			fail: ['emoji', 'emojiCodepoint', 'text', 'textCodepoint'],
		},
		{
			type: 'emoji',
			unicode: createEmoji('26A0-FE0F'),
			pass: [
				'combo',
				'comboCodepoint',
				'emoji',
				'emojiLoose',
				'emojiCodepoint',
				'emojiCodepointLoose',
				'textLoose',
				'textCodepointLoose',
			],
			fail: ['text', 'textCodepoint'],
		},
		{
			type: 'text',
			unicode: createEmoji('26A0-FE0E'),
			pass: [
				'combo',
				'comboCodepoint',
				'text',
				'textLoose',
				'textCodepoint',
				'textCodepointLoose',
				'emojiLoose',
				'emojiCodepointLoose',
			],
			fail: ['emoji', 'emojiCodepoint'],
		},
	];

	variationSelectors.forEach(({ type, unicode, pass, fail = [] }) => {
		describe(`${VARIATION_DESCRIPTIONS[type]}`, () => {
			pass.forEach((passType) => {
				it(`passes ${PATTERN_DESCRIPTIONS[passType]}`, () => {
					expect(unicode.match(PATTERNS[passType])).not.toBeNull();
				});
			});

			fail.forEach((failType) => {
				it(`fails ${PATTERN_DESCRIPTIONS[failType]}`, () => {
					expect(unicode.match(PATTERNS[failType])).toBeNull();
				});
			});
		});
	});
});
