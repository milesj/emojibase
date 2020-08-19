import fetchAndCache from '../../loaders/fetchAndCache';
import writeDataset from '../../helpers/writeDataset';
import { ShortcodeDataMap } from '../../types';
import log from '../../helpers/log';
import Database from '../Database';

export default async function generateGitHub(db: Database) {
  const shortcodes: ShortcodeDataMap = {};
  const response = await fetchAndCache<Record<string, string>>(
    'https://api.github.com/emojis',
    'temp/github-emojis.json',
    (text) => JSON.parse(text),
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Emojibase',
      },
    },
  );
  // let ignoreCount = 0;

  Object.entries(response).forEach(([shortcode, url]) => {
    const match = url.match(/emoji\/unicode\/([\da-z-]+)\.png/i);

    // Non-standard emojis
    if (!match) {
      // ignoreCount += 1;

      return;
    }

    const hexcode = match[1].toUpperCase();
    const emoji = db.getEmoji(hexcode);

    if (!emoji) {
      log.error('shortcodes', `GitHub shortcode ${hexcode} does not exist within our system.`);

      return;
    }

    db.addShortcodes(shortcodes, emoji.hexcode, shortcode);
  });

  // const sourceLength = Object.keys(response).length - ignoreCount;
  // const targetLength = Object.keys(shortcodes).length;

  // if (targetLength !== sourceLength) {
  //   log.warn(
  //     'shortcodes',
  //     `GitHub shortcode dataset has mismatching length (expected ${sourceLength}, received ${targetLength})`,
  //   );
  // }

  await Promise.all([
    writeDataset(`en/shortcodes/github.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/github.json`, shortcodes, true),
  ]);
}
