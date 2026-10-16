import { EMOJI, EMOTICON_OPTIONS, generateEmoticonPermutations, TEXT } from 'emojibase';
import type { Trie } from 'regexgen';
import regexgen from 'regexgen';
import { buildEmojiData } from '../builders/buildEmojiData';
import { filterData } from '../helpers/filterData';
import { flattenData } from '../helpers/flattenData';
import { log } from '../helpers/log';
import { toArray } from '../helpers/toArray';
import { writeRegex } from '../helpers/writeRegex';
import type { Emoji, EmojiMap, Hexcode } from '../types';
import { toUnicode } from './toUnicode';

type TrieMap = Record<string, Trie>;

type Display = 'both' | 'emoji' | 'text';

type Lookahead = Record<'plain' | 'unicode', string>;

// A single character must not be matched when what follows puts it in the other presentation:
// "👍" in "👍︎" is text, while "⚠" in "⚠️" or "☝" in "☝🏻" is emoji.
// http://unicode.org/reports/tr51/#Emoji_Variation_Sequences
const NOT_BEFORE_TEXT_SELECTOR: Lookahead = {
	plain: String.raw`(?!\uFE0E)`,
	unicode: String.raw`(?!\uFE0E)`,
};

const NOT_BEFORE_EMOJI_CONTEXT: Lookahead = {
	plain: String.raw`(?!\uFE0F|\u200D|\uD83C[\uDFFB-\uDFFF])`,
	unicode: String.raw`(?![\uFE0F\u200D\u{1F3FB}-\u{1F3FF}])`,
};

function createRegexPattern(
	codePointGroups: TrieMap,
	unicode: boolean = false,
	lookahead?: Lookahead,
): string {
	const flags = unicode ? 'u' : '';
	const groups = Object.keys(codePointGroups);

	// Sort from largest to smallest, as we need to match
	// combination characters before base or single characters
	groups.sort((a, b) => Number(b) - Number(a));

	return groups
		.map((group) => {
			const { source } = codePointGroups[group].toRegExp(flags);

			return group === '1' && lookahead
				? `(?:${source})${lookahead[unicode ? 'unicode' : 'plain']}`
				: source;
		})
		.join('|');
}

// The forms of an emoji that a pattern matches
function getForms(emoji: Emoji, display: Display, loose: boolean): (Hexcode | undefined)[] {
	const { hexcode, variations, type } = emoji;
	const qualified = Object.keys(emoji.qualifiers ?? {});

	switch (display) {
		// Emoji presentation: the fully-qualified forms, where default-emoji characters are emoji on
		// their own while default-text characters need FE0F. When loose, also the forms that are
		// missing FE0F (minimally-qualified and unqualified).
		// http://unicode.org/reports/tr51/#def_rgi_emoji_qualification
		case 'emoji':
			return loose
				? [hexcode, variations?.emoji, ...qualified]
				: [type === EMOJI ? hexcode : undefined, variations?.emoji];

		// Text presentation: text presentation sequences, and default-text characters on their own.
		// When loose, also default-emoji characters that have a text presentation sequence.
		case 'text':
			return variations?.text
				? [variations.text, type === TEXT || loose ? hexcode : undefined]
				: [];

		// Should contain everything
		default:
			return [hexcode, variations?.emoji, variations?.text, ...qualified];
	}
}

async function createEmojiRegex(
	data: EmojiMap,
	display: Display = 'both',
	loose: boolean = false,
): Promise<string[]> {
	let fileName = display === 'both' ? 'index' : display;
	const codePointGroups: TrieMap = {};

	if (loose) {
		fileName += '-loose';
	}

	// Push the unicode characters into the trie,
	// grouped by the number of codepoints
	const addCodePoint = (hexcode?: Hexcode) => {
		if (!hexcode) {
			return;
		}

		const group = String(hexcode.split('-').length);

		if (!codePointGroups[group]) {
			codePointGroups[group] = new regexgen.Trie();
		}

		codePointGroups[group].add(toUnicode(hexcode));
	};

	Object.values(data).forEach((emoji) => {
		getForms(emoji, display, loose).forEach(addCodePoint);
	});

	const lookahead = {
		both: undefined,
		emoji: NOT_BEFORE_TEXT_SELECTOR,
		text: NOT_BEFORE_EMOJI_CONTEXT,
	}[display];

	return Promise.all([
		writeRegex(`${fileName}.js`, createRegexPattern(codePointGroups, false, lookahead)),
		writeRegex(
			`codepoint/${fileName}.js`,
			createRegexPattern(codePointGroups, true, lookahead),
			'u',
		),
	]);
}

async function createEmoticonRegex(data: EmojiMap): Promise<string> {
	const trie = new regexgen.Trie();
	let emoticons: string[] = [];

	Object.keys(data).forEach((hexcode) => {
		const { emoticon } = data[hexcode];

		if (emoticon) {
			toArray(emoticon).forEach((emo) => {
				emoticons.push(...generateEmoticonPermutations(emo, EMOTICON_OPTIONS[emo] || {}));
			});
		}
	});

	// Remove duplicates
	emoticons = [...new Set(emoticons)];

	// Sort by longest first
	emoticons.sort((a, b) => b.length - a.length);

	// Add to trie and generate
	trie.addAll(emoticons);

	return writeRegex('emoticon.js', trie.toRegExp().source);
}

export async function generateRegex(): Promise<void> {
	log.title('regex', 'Generating regex patterns');

	const data = flattenData(filterData(await buildEmojiData()));

	await Promise.all([
		createEmojiRegex(data, 'both'),
		createEmojiRegex(data, 'emoji'),
		createEmojiRegex(data, 'emoji', true),
		createEmojiRegex(data, 'text'),
		createEmojiRegex(data, 'text', true),
		createEmoticonRegex(data),
	]);

	log.success('regex', 'Generated regex patterns');
}
