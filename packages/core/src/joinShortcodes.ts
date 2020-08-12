import { Emoji, CompactEmoji, ShortcodesDataset, MaybeEmoji } from './types';
import joinShortcodesToEmoji from './joinShortcodesToEmoji';

function joinShortcodes(emojis: Emoji[], shortcodeDatasets: ShortcodesDataset[]): Emoji[];

function joinShortcodes(
  emojis: CompactEmoji[],
  shortcodeDatasets: ShortcodesDataset[],
): CompactEmoji[];

function joinShortcodes(
  emojis: MaybeEmoji[],
  shortcodeDatasets: ShortcodesDataset[],
): MaybeEmoji[] {
  if (shortcodeDatasets.length === 0) {
    return emojis;
  }

  emojis.forEach((emoji) => {
    joinShortcodesToEmoji(emoji as Emoji, shortcodeDatasets);
  });

  return emojis;
}

export default joinShortcodes;
