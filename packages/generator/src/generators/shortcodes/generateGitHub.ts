import fetchAndCache from '../../loaders/fetchAndCache';
import writeDataset from '../../helpers/writeDataset';
import { ShortcodeDataMap, EmojiMap } from '../../types';
import log from '../../helpers/log';

export default async function generateGitHub(emojis: EmojiMap) {
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

    shortcodes[hexcode] = shortcode;

    if (!emojis[hexcode]) {
      log.error('github', `GitHub shortcode ${hexcode} does not exist within our system.`);
    }
  });

  await Promise.all([
    writeDataset(`en/shortcodes/github.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/github.json`, shortcodes, true),
  ]);
}
