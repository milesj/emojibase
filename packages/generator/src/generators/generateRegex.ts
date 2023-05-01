import { EMOTICON_OPTIONS, generateEmoticonPermutations } from 'emojibase';
import type { Trie } from 'regexgen';
import regexgen from 'regexgen';
import { buildEmojiData } from '../builders/buildEmojiData';
import { filterData } from '../helpers/filterData';
import { flattenData } from '../helpers/flattenData';
import { log } from '../helpers/log';
import { toArray } from '../helpers/toArray';
import { writeRegex } from '../helpers/writeRegex';
import { EmojiMap, Hexcode } from '../types';
import { toUnicode } from './toUnicode';

type TrieMap = Record<string, Trie>;

function createRegexPattern(codePointGroups: TrieMap, unicode: boolean = false): string {
	const flags = unicode ? 'u' : '';
	const groups = Object.keys(codePointGroups);

	// Sort from largest to smallest, as we need to match
	// combination characters before base or single characters
	groups.sort((a, b) => Number(b) - Number(a));

	return groups.map((group) => codePointGroups[group].toRegExp(flags).source).join('|');
}

async function createEmojiRegex(
	data: EmojiMap,
	display: 'both' | 'emoji' | 'text' = 'both',
	loose: boolean = false,
): Promise<string[]> {
	let fileName = display === 'both' ? 'index' : display;
	const codePointGroups: TrieMap = {};

	if (loose) {
		fileName += '-loose';
	}

	// Push the unicode characters into the trie,
	// grouped by the number of codepoints
	const addCodePoint = (hexcode: Hexcode) => {
		if (!hexcode) {
			return;
		}

		const group = String(hexcode.split('-').length);

		if (!codePointGroups[group]) {
			codePointGroups[group] = new regexgen.Trie();
		}

		codePointGroups[group].add(toUnicode(hexcode));
	};

	// Note: variation selectors are sometimes added to old emojis,
	// but we still need to support the old non-variation selector,
	// so include the unicode character that does not include FE0E/FE0F
	// when in loose mode.
	Object.keys(data).forEach((hexcode) => {
		const { variations, qualifiers } = data[hexcode];

		switch (display) {
			// Should only contain emoji presentation
			case 'emoji':
				if (!variations || loose) {
					addCodePoint(hexcode);
				}

				if (variations?.emoji) {
					addCodePoint(variations.emoji);
				}

				break;

			// Should only contain text presentation
			case 'text':
				if (loose) {
					addCodePoint(hexcode);
				}

				if (variations?.text) {
					addCodePoint(variations.text);
				}

				break;

			// Should contain everything
			default:
				addCodePoint(hexcode);

				if (variations) {
					addCodePoint(variations.emoji);
					addCodePoint(variations.text);
				}

				if (qualifiers) {
					Object.keys(qualifiers).forEach(addCodePoint);
				}

				break;
		}
	});

	return Promise.all([
		writeRegex(`${fileName}.js`, createRegexPattern(codePointGroups)),
		writeRegex(`codepoint/${fileName}.js`, createRegexPattern(codePointGroups, true), 'u'),
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
