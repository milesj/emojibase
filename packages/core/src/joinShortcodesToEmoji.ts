import { CompactEmoji, Emoji, MaybeEmoji, ShortcodesDataset } from './types';

function joinShortcodesToEmoji(emoji: Emoji, shortcodeDatasets: ShortcodesDataset[]): Emoji;

function joinShortcodesToEmoji(
	emoji: CompactEmoji,
	shortcodeDatasets: ShortcodesDataset[],
): CompactEmoji;

function joinShortcodesToEmoji(
	emoji: MaybeEmoji,
	shortcodeDatasets: ShortcodesDataset[],
): MaybeEmoji {
	if (shortcodeDatasets.length === 0) {
		return emoji;
	}

	const list = new Set(emoji.shortcodes);

	shortcodeDatasets.forEach((dataset) => {
		const shortcodes = dataset[emoji.hexcode];

		if (Array.isArray(shortcodes)) {
			shortcodes.forEach((code) => list.add(code));
		} else if (shortcodes) {
			list.add(shortcodes);
		}
	});

	emoji.shortcodes = [...list];

	if (emoji.skins) {
		emoji.skins.forEach((skin) => {
			joinShortcodesToEmoji(skin as Emoji, shortcodeDatasets);
		});
	}

	return emoji;
}

export { joinShortcodesToEmoji };
