import { TEXT, CompactEmoji, Emoji } from 'emojibase';

export default function extractCompact(data: Emoji[]): CompactEmoji[] {
  return data.map(full => {
    const {
      hexcode,
      shortcodes,
      emoji,
      emoticon,
      order,
      group,
      annotation,
      tags,
      text,
      type,
      skins,
    } = full;
    const compact: CompactEmoji = {
      annotation,
      group,
      hexcode,
      order,
      shortcodes,
      tags,
      unicode: text && type === TEXT ? text : emoji,
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
