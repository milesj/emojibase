import { appendSkinToneIndex } from 'emojibase';
import writeDataset from '../../helpers/writeDataset';
import { ShortcodeDataMap } from '../../types';
import Database from '../Database';
import shortcodesResource from '../../resources/shortcodesLegacy';

export default async function generateEmojibaseLegacy(db: Database) {
  db.preset = 'emojibase-legacy';

  const shortcodes: ShortcodeDataMap = {};

  db.emojiList.forEach((emoji) => {
    const list = shortcodesResource[emoji.hexcode as keyof typeof shortcodesResource];

    db.addShortcodes(shortcodes, emoji.hexcode, list);

    if (emoji.modifications) {
      Object.values(emoji.modifications).forEach((mod) => {
        db.addShortcodes(
          shortcodes,
          mod.hexcode,
          list.map((code) => appendSkinToneIndex(code, mod, 'tone')),
        );
      });
    }
  });

  await Promise.all([
    writeDataset(`en/shortcodes/emojibase-legacy.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/emojibase-legacy.json`, shortcodes, true),
  ]);
}
