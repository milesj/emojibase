import path from 'path';
import { TEXT, appendSkinToneIndex, Emoji } from 'emojibase';
import writeDataset from '../../helpers/writeDataset';
import { ShortcodeDataMap } from '../../types';
import writeFile from '../../helpers/writeFile';
import { SHORTCODE_GUIDELINES } from '../../constants';
import Database from '../Database';
import shortcodesResource from '../../resources/shortcodes';

export default async function generateEmojibase(db: Database) {
  db.preset = 'emojibase';

  const shortcodes: ShortcodeDataMap = {};

  db.emojiList.forEach((emoji) => {
    const list = shortcodesResource[emoji.hexcode as keyof typeof shortcodesResource];

    if (!list) {
      return;
    }

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
    writeDataset(`en/shortcodes/emojibase.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/emojibase.json`, shortcodes, true),
  ]);

  // Organize and sort the resources file using the raw dataset
  // eslint-disable-next-line
  const emojisSource: Emoji[] = require('../../../../data/en/data.raw.json');
  const output: string[] = [
    '/* eslint-disable sort-keys */',
    '',
    SHORTCODE_GUIDELINES,
    '',
    'export default {',
  ];
  let lastVersion = 0;

  // Sort by version -> order
  emojisSource.sort((a, b) =>
    a.version === b.version ? (a.order ?? -1) - (b.order ?? -1) : a.version - b.version,
  );

  // Add each emoji to the list
  emojisSource.forEach((emoji) => {
    if (emoji.version !== lastVersion) {
      output.push('');
      output.push(`  // VERSION ${emoji.version}`);

      lastVersion = emoji.version;
    }

    const unicode = emoji.type === TEXT ? emoji.text : emoji.emoji;
    let codes = shortcodes[emoji.hexcode] || [];

    if (!Array.isArray(codes)) {
      codes = [codes];
    }

    output.push(`  // ${unicode} ${emoji.annotation}`);
    output.push(`  '${emoji.hexcode}': [${codes.map((sc) => `'${sc}'`).join(', ')}],`);
  });

  output.push('};\n');

  await writeFile(
    path.join(process.cwd(), 'packages/generator/src/resources'),
    'shortcodes.ts',
    output.join('\n'),
  );
}
