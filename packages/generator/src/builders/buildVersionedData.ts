import { LATEST_EMOJI_VERSION } from 'emojibase';
import log from '../helpers/log';
import writeCache from '../helpers/writeCache';
import loadData from '../loaders/loadData';
import loadSequences from '../loaders/loadSequences';
import loadZwjSequences from '../loaders/loadZwjSequences';
import { EmojiDataMap } from '../types';
import readCache from '../helpers/readCache';

export interface VersionDataMap {
  [version: string]: EmojiDataMap;
}

export interface VersionDataSet {
  emojiVersions: VersionDataMap;
  unicodeVersions: VersionDataMap;
}

export default async function buildVersionedData(): Promise<VersionDataSet> {
  const cache = readCache<VersionDataSet>('final/emoji-unicode-versions.json');

  if (cache) {
    return cache;
  }

  log.title('build', 'Building versioned data');

  const used: { [hexcode: string]: boolean } = {};
  const emojiVersions: VersionDataMap = {};
  const unicodeVersions: VersionDataMap = {};

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

      if (unicodeVersion) {
        if (unicodeVersions[unicodeVersion]) {
          unicodeVersions[unicodeVersion][hexcode] = emoji;
        } else {
          unicodeVersions[unicodeVersion] = { [hexcode]: emoji };
        }
      }
    });
  };

  // As of v13.0, the versions are included in the data sources,
  // so we don't need to loop and extract from previous versions.
  partitionVersions(await loadData(LATEST_EMOJI_VERSION));
  partitionVersions(await loadSequences(LATEST_EMOJI_VERSION));
  partitionVersions(await loadZwjSequences(LATEST_EMOJI_VERSION));

  // Cache the partitioned files
  await writeCache('final/emoji-unicode-versions.json', {
    emojiVersions,
    unicodeVersions,
  });

  log.success('build', 'Built versioned data');

  return Promise.resolve({
    emojiVersions,
    unicodeVersions,
  });
}
