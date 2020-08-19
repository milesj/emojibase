import path from 'path';
import { TEXT, appendSkinToneIndex } from 'emojibase';
import writeDataset from '../../helpers/writeDataset';
import { ShortcodeDataMap } from '../../types';
import writeFile from '../../helpers/writeFile';
import { SHORTCODE_GUIDELINES } from '../../constants';
import log from '../../helpers/log';
import Database from '../Database';
import shortcodesSource from '../../resources/shortcodes';
// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
import emojisSource from '../../../../data/en/data.raw.json';

export default async function generateEmojibase(db: Database) {
  const shortcodes: ShortcodeDataMap = {};

  db.emojiList.forEach((emoji) => {
    const list = shortcodesSource[emoji.hexcode as keyof typeof shortcodesSource];

    if (!list) {
      log.error(
        'emojibase',
        `Emojibase shortcode ${emoji.hexcode} does not exist within our system.`,
      );

      return;
    }

    shortcodes[emoji.hexcode] = db.formatShortcodes(list);

    if (emoji.modifications) {
      Object.values(emoji.modifications).forEach((mod) => {
        shortcodes[mod.hexcode] = db.formatShortcodes(
          list.map((code) => appendSkinToneIndex(code, mod, 'tone')),
        );
      });
    }
  });

  await Promise.all([
    writeDataset(`en/shortcodes/emojibase.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/emojibase.json`, shortcodes, true),
  ]);

  // Organize and sort the resources file
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
