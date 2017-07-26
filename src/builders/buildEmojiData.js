/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */
/* eslint-disable no-await-in-loop */

import writeCache from '../helpers/writeCache';
import loadData from '../loaders/loadData';
import loadNames from '../loaders/loadNames';
import loadOrderAndGroup from '../loaders/loadOrderAndGroup';
// import loadZwjSequences from '../loaders/loadZwjSequences';
import { LATEST_EMOJI_VERSION } from '../constants';

const INVALID_PROPERTIES: string[] = ['Text', 'Emoji_Modifier', 'Emoji_Component'];

function mergeEmoji(prev: ?Object, next: Object): Object {
  if (!prev) {
    return next;
  }

  // Do not overwrite previous emoji and unicode versions
  if ('version' in prev) {
    delete next.version;
  }

  if ('unicodeVersion' in prev) {
    delete next.unicodeVersion;
  }

  return {
    ...prev,
    ...next,
  };
}

export default async function buildEmojiData() {
  const emojis = {};
  const latestVersion = parseFloat(LATEST_EMOJI_VERSION);

  // Load names, groups, and order first
  const names = await loadNames();
  const groups = await loadOrderAndGroup();

  // Load and combine data from all versions
  for (let i = 1; i <= latestVersion; i += 1) {
    const data = await loadData(`${i}.0`);

    Object.keys(data).forEach((hexcode) => {
      const emoji = mergeEmoji(emojis[hexcode], data[hexcode]);

      // Omit certain properties from the final data
      if (INVALID_PROPERTIES.includes(emoji.property)) {
        return;
      }

      // Only the latest version should inject complex data
      if (i < latestVersion) {
        emojis[hexcode] = emoji;

        return;
      }

      // Verify and inherit data
      if (!names[hexcode]) {
        throw new Error(`Missing name for ${hexcode}`);
      }

      if (!groups[hexcode]) {
        throw new Error(`Missing group and order for ${hexcode}`);
      }

      emojis[hexcode] = {
        ...emoji,
        ...groups[hexcode],
        name: names[hexcode],
      };
    });
  }

  // Write to cache
  writeCache('final-emoji-data.json', emojis);

  return emojis;
}
