import path from 'path';
import { Emoji as FinalEmoji, TEXT } from 'emojibase';
import writeDataset from '../../helpers/writeDataset';
import { ShortcodeDataMap } from '../../types';
import writeFile from '../../helpers/writeFile';
import { SHORTCODE_GUIDELINES } from '../../constants';

export default async function generateEmojibase() {
  // Generate the dataset
  // eslint-disable-next-line
  const shortcodes: ShortcodeDataMap = require(path.join(__dirname, '../../resources/shortcodes'))
    .default;

  Object.entries(shortcodes).forEach(([hexcode, codes]) => {
    if (Array.isArray(codes) && codes.length === 1) {
      // eslint-disable-next-line prefer-destructuring
      shortcodes[hexcode] = codes[0];
    }
  });

  await Promise.all([
    writeDataset(`en/shortcodes/emojibase.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/emojibase.json`, shortcodes, true),
  ]);

  // Organize and sort the resources file
  // eslint-disable-next-line
  const data: FinalEmoji[] = require(path.join(__dirname, '../../../../data/en/data.json'));
  const output: string[] = [
    '/* eslint-disable sort-keys */',
    '',
    SHORTCODE_GUIDELINES,
    '',
    'export default {',
  ];
  let lastVersion = 0;

  // Sort by version -> order
  data.sort((a, b) =>
    a.version === b.version ? (a.order ?? -1) - (b.order ?? -1) : a.version - b.version,
  );

  // Add each emoji to the list
  data.forEach((emoji) => {
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
