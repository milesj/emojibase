/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import writeCache from '../helpers/writeCache';
import loadNames from '../loaders/loadNames';
import loadOrderAndGroup from '../loaders/loadOrderAndGroup';
import loadVariations from '../loaders/loadVariations';
// import loadZwjSequences from '../loaders/loadZwjSequences';
import joinModifiersToBaseData from './joinModifiersToBaseData';
import joinVersionedData from './joinVersionedData';

export default async function buildEmojiData() {
  // Load names, groups, order, and variations first
  const names = await loadNames();
  const groups = await loadOrderAndGroup();
  const variations = await loadVariations();

  // Load and join data from all emoji release versions
  const { emojis, modifiers } = await joinVersionedData(names, groups, variations);

  // Join modifiers (skin tones) to base modifiers
  joinModifiersToBaseData(emojis, modifiers);

  // console.log(modifiers);

  // Write to cache
  writeCache('final-emoji-data.json', emojis);

  return emojis;
}
