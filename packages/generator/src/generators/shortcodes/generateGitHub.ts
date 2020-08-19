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

  Object.entries(response).forEach(([shortcode, url]) => {
    const match = url.match(/emoji\/unicode\/([\da-z-]+)\.png/i);

    if (!match) {
      return;
    }

    const hexcode = match[1].toUpperCase();
    const emoji = db.getEmoji(hexcode);

    if (!emoji) {
      log.error('github', `GitHub shortcode ${hexcode} does not exist within our system.`);

      return;
    }

    shortcodes[emoji.hexcode] = shortcode;
  });

  await Promise.all([
    writeDataset(`en/shortcodes/github.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/github.json`, shortcodes, true),
  ]);
}
