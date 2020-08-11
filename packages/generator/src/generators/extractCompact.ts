import { CompactEmoji, Emoji } from 'emojibase';

export default function extractCompact(data: Emoji[]): CompactEmoji[] {
  return data.map((full) => {
    const { hexcode, emoji, emoticon, order, group, annotation, tags, text, skins } = full;
    const compact: CompactEmoji = {
      annotation,
      group,
      hexcode,
      order,
      tags,
      unicode: emoji || text,
    };

    if (emoticon) {
      compact.emoticon = emoticon;
    }

    if (skins) {
      compact.skins = extractCompact(skins);
    }

    return compact;
  });
}
