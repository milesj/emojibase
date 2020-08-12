import { Emoji, ShortcodesDataset, CompactEmoji, MaybeEmoji } from './types';
import joinShortcodesToEmoji from './joinShortcodesToEmoji';

function flattenEmojiData(data: Emoji[], shortcodeDatasets?: ShortcodesDataset[]): Emoji[];

function flattenEmojiData(
  data: CompactEmoji[],
  shortcodeDatasets?: ShortcodesDataset[],
): CompactEmoji[];

function flattenEmojiData(
  data: MaybeEmoji[],
  shortcodeDatasets: ShortcodesDataset[] = [],
): MaybeEmoji[] {
  const emojis: Emoji[] = [];

  (data as Emoji[]).forEach((emoji) => {
    if (emoji.skins) {
      // Dont include nested skins array
      const { skins, ...baseEmoji } = emoji;

      emojis.push(joinShortcodesToEmoji(baseEmoji, shortcodeDatasets));

      // Push each skin modification into the root list
      skins.forEach((skin) => {
        const skinEmoji = { ...skin };

        // Inherit tags from parent if they exist
        if (baseEmoji.tags) {
          skinEmoji.tags = [...baseEmoji.tags];
        }

        emojis.push(joinShortcodesToEmoji(skinEmoji, shortcodeDatasets));
      });
    } else {
      emojis.push(joinShortcodesToEmoji(emoji, shortcodeDatasets));
    }
  });

  return emojis;
}

export default flattenEmojiData;
