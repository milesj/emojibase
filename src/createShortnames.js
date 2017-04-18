/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import cleanName from './cleanName';

const USED = {};

export default function createShortnames(name: string): string[] {
  const type = name.match(/TYPE-(\d)/);
  let shortname = cleanName(name).replace(/\s/g, '_');

  // Currently doesnt have a shortname defined
  if (shortname === 'regional_indicator_symbol_letter_u_regional_indicator_symbol_letter_n') {
    return ['flag_un'];
  }

  // Add skin tone and match EmojiOne format
  if (type) {
    const tone = parseFloat(type[1]);

    // EmojiOne data is 1, 2, 3, 4, 5, while unicode data is 1-2, 3, 4, 5, 6
    shortname += `_tone${(tone > 1) ? (tone - 1) : tone}`;
  }

  // Check if the shortname has been used
  if (USED[shortname]) {
    USED[shortname] += 1;
    shortname += USED[shortname];
  } else {
    USED[shortname] = 1;
  }

  return [shortname];
}
