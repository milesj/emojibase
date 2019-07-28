import path from 'path';
import { Emoji, TEXT } from 'emojibase';
import writeFile from '../helpers/writeFile';

const GUIDELINES = `/**
 * Official Emojibase shortcodes list.
 *
 * NAMING GUIDELINES
 *
 *  - Gender neutral emoji must be prefixed with "person_",
 *    while female emoji use "woman_", and male "man_".
 *    Plural forms use "people_", "women_", and "men_".
 *    In rare occasions, the gender can be suffixed,
 *    like "bald_man" or "blonde_woman".
 *
 *  - Animals depicted from the side use the animal name,
 *    while animals depicted with a head, or a face,
 *    must use the animal name suffixed with "_face".
 *
 *  - Japenese specific emoji must be prefixed with "ja_".
 *
 *  - Specifiers, like color or size, must be used as a
 *    prefix. For example, "small_", or "red_".
 *
 *  - Use a more descriptive term over the annotation if
 *    applicable. For example, "storm" over the annotation
 *    "cloud with lightning and rain".
 *
 *  - Use emotions when describing smiley faces. For example,
 *    "happy" over the annotation "smiling face with open
 *    mouth & smiling eyes".
 *    https://www.dailywritingtips.com/100-words-for-facial-expressions/
 *
 * ADDING SHORTCODES
 *
 * Please submit a PR with the addition so that it
 * may be discussed.
 *
 * RENAMING/REMOVING SHORTCODES
 *
 * Shortcodes are meant to be permanent, and should never
 * change (excluding typos), as to not destroy historical
 * usage of the shortcode. If a more descriptive term
 * is wanted, or the Unicode standard has changed meaning
 * or naming, we should persist the original shortcode.
 * We can do this by shifting the old shortcode to the end
 * of the array, while placing the new shortcode at the
 * beginning. This allows for backwards compatible changes.
 */`;

export default async function generateShortcodes(): Promise<string> {
  // eslint-disable-next-line
  const data: Required<Emoji>[] = require(path.join(process.cwd(), 'packages/data/en/data.json'));
  const output: string[] = [
    '/* eslint-disable sort-keys */',
    '',
    GUIDELINES,
    '',
    'export default {',
  ];
  let lastVersion = 0;

  // Sort by version -> order
  data.sort((a, b) => (a.version === b.version ? a.order - b.order : a.version - b.version));

  // Add each emoji to the list
  data.forEach(emoji => {
    if (emoji.version !== lastVersion) {
      if (lastVersion !== 0) {
        output.push('');
      }

      output.push(`  // VERSION ${emoji.version}`);

      lastVersion = emoji.version;
    }

    const unicode = emoji.type === TEXT ? emoji.text : emoji.emoji;
    const shortcodes = emoji.shortcodes.map(sc => `'${sc}'`);

    output.push(`  // ${unicode} ${emoji.annotation || emoji.name}`);
    output.push(`  '${emoji.hexcode}': [${shortcodes.join(', ')}],`);
  });

  output.push('};');

  // Write it!
  return writeFile(
    path.join(process.cwd(), 'packages/generator/src/resources'),
    'shortcodes.ts',
    output.join('\n'),
  );
}
