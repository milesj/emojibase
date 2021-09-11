import { Emoticon, PermutationOptions } from './types';

export function generateEmoticonPermutations(
	emoticon: Emoticon,
	options: PermutationOptions = {},
): Emoticon[] {
	const { isFace = true, withNose = true } = options;
	const list = [emoticon];

	// Uppercase variant
	if (emoticon.toUpperCase() !== emoticon) {
		list.push(...generateEmoticonPermutations(emoticon.toUpperCase(), options));
	}

	if (isFace) {
		// Backwards slash mouth variant
		if (emoticon.includes('/')) {
			list.push(...generateEmoticonPermutations(emoticon.replace('/', '\\'), options));
		}

		// Bracket and curly brace mouth variants
		if (emoticon.includes(')')) {
			list.push(
				...generateEmoticonPermutations(emoticon.replace(')', ']'), options),
				...generateEmoticonPermutations(emoticon.replace(')', '}'), options),
			);
		}

		if (emoticon.includes('(')) {
			list.push(
				...generateEmoticonPermutations(emoticon.replace('(', '['), options),
				...generateEmoticonPermutations(emoticon.replace('(', '{'), options),
			);
		}

		// Eye variant
		if (emoticon.includes(':')) {
			list.push(...generateEmoticonPermutations(emoticon.replace(':', '='), options));
		}

		// Nose variant for ALL
		if (withNose) {
			list.forEach((emo) => {
				if (!emo.includes('-')) {
					list.push(`${emo.slice(0, -1)}-${emo.slice(-1)}`);
				}
			});
		}
	}

	// Sort from longest to shortest
	list.sort((a, b) => b.length - a.length);

	return [...new Set(list)];
}
