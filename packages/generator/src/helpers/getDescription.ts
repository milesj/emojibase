import type { EmojiData, EmojiMetadataMap, UnicodeNamesMap } from '../types';

// Range lines in the data files share one description, so use each code point's
// CLDR name from emoji-test.txt, falling back to its Unicode name
export function getDescription(
	emoji: Pick<EmojiData, 'description' | 'hexcode'>,
	names: UnicodeNamesMap,
	metadata: EmojiMetadataMap,
): string {
	if (emoji.description) {
		return emoji.description;
	}

	return metadata[emoji.hexcode]?.name || (names[emoji.hexcode] ?? '').toLowerCase();
}
