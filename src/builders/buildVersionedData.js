/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */
/* eslint-disable no-await-in-loop */

import log from '../helpers/log';
import readCache from '../helpers/readCache';
import writeCache from '../helpers/writeCache';
import loadData from '../loaders/loadData';
import loadSequences from '../loaders/loadSequences';
import loadZwjSequences from '../loaders/loadZwjSequences';
import { LATEST_EMOJI_VERSION } from '../constants';

import type { EmojiDataMap } from '../types';

type VersionMap = { [version: string]: EmojiDataMap };

export default async function buildVersionedData(): Promise<{
  emojiVersions: VersionMap,
  unicodeVersions: VersionMap,
}> {
  const cache = readCache('emoji-unicode-versions.json');

  if (cache) {
    return Promise.resolve(cache);
  }

  log.title('build', 'Building versioned data');

  const used = {};
  const emojiVersions = {};
  const unicodeVersions = {};

  // Handle partitioning each emoji into a specific version
  const partitionVersions = (data: EmojiDataMap) => {
    Object.keys(data).forEach((hexcode) => {
      const emoji = data[hexcode];
      const { version, unicodeVersion } = data[hexcode];

      // Was introduced in a prior version
      if (used[hexcode]) {
        return;
      }

      used[hexcode] = true;

      if (emojiVersions[version]) {
        emojiVersions[version][hexcode] = emoji;
      } else {
        emojiVersions[version] = { [hexcode]: emoji };
      }

      if (unicodeVersions[unicodeVersion]) {
        unicodeVersions[unicodeVersion][hexcode] = emoji;
      } else {
        unicodeVersions[unicodeVersion] = { [hexcode]: emoji };
      }
    });
  };

  // Loop through each version, starting at the earliest
  for (let i = 1; i <= parseFloat(LATEST_EMOJI_VERSION); i += 1) {
    partitionVersions(await loadData(`${i}.0`));

    // Sequences were introduced in v2.0+
    if (i >= 2) {
      partitionVersions(await loadSequences(`${i}.0`));
      partitionVersions(await loadZwjSequences(`${i}.0`));
    }
  }

  // Cache the partitioned files
  writeCache('emoji-unicode-versions.json', {
    emojiVersions,
    unicodeVersions,
  });

  log.success('build', 'Built versioned data');

  return Promise.resolve({
    emojiVersions,
    unicodeVersions,
  });
}
