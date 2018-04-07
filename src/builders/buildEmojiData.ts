/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import log from '../helpers/log';
import writeCache from '../helpers/writeCache';
import loadData from '../loaders/loadData';
import loadEmoticons from '../loaders/loadEmoticons';
import loadNames from '../loaders/loadNames';
import loadOrderAndGroup from '../loaders/loadOrderAndGroup';
import loadVariations from '../loaders/loadVariations';
import loadSequences from '../loaders/loadSequences';
import loadZwjSequences from '../loaders/loadZwjSequences';
import loadShortcodes from '../loaders/loadShortcodes';
import joinData from './joinData';
import joinMetadataToData from './joinMetadataToData';
import joinModifiersToData from './joinModifiersToData';
import validateData from './validateData';
import verifyData from './verifyData';
import { EmojiMap } from '../types';

export default async function buildEmojiData(): Promise<EmojiMap> {
  log.title('build', 'Building emoji data');

  // 1) Load and merge all emoji data from the latest release version
  const emojis = {};

  joinData(emojis, await loadData());
  joinData(emojis, await loadSequences());
  joinData(emojis, await loadZwjSequences());

  // 2) Load and merge metadata into the emoji data
  const names = await loadNames();
  const groups = await loadOrderAndGroup();
  const variations = await loadVariations();
  const shortcodes = await loadShortcodes();
  const emoticons = await loadEmoticons();

  joinMetadataToData(emojis, names, groups, variations, shortcodes, emoticons);

  // 3) Append skin tone modifications
  joinModifiersToData(emojis); // Requires names

  // 4) Verify we joined the data correctly
  await verifyData(emojis);

  // 5) Validate the built data against the official unicode emoji list
  await validateData(emojis);

  writeCache('final-emoji-data.json', emojis);

  log.success('build', 'Built emoji data');

  return Promise.resolve(emojis);
}
