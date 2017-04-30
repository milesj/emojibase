/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import cleanName from './cleanName';
import extractSkinTone from './extractSkinTone';

const USED_SHORTNAMES = {};

export default function createShortnames(name: string): string[] {
  let shortname = cleanName(name).replace(/\s/g, '_');

  // Currently doesnt have a shortname defined
  if (shortname === 'regional_indicator_symbol_letter_u_regional_indicator_symbol_letter_n') {
    return ['flag_un'];
  }

  // Add skin tone and match EmojiOne format
  const skinTone = extractSkinTone(name);

  if (skinTone) {
    shortname += `_tone${skinTone}`;
  }

  // Check if the shortname has been used
  if (USED_SHORTNAMES[shortname]) {
    USED_SHORTNAMES[shortname] += 1;
    shortname += USED_SHORTNAMES[shortname];
  } else {
    USED_SHORTNAMES[shortname] = 1;
  }

  return [shortname];
}
