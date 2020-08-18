import { stripHexcode } from 'emojibase';
import fetchAndCache from '../../loaders/fetchAndCache';
import writeDataset from '../../helpers/writeDataset';
import { ShortcodeDataMap, EmojiMap } from '../../types';
import log from '../../helpers/log';

export default async function generateIamCal(emojis: EmojiMap) {
  const shortcodes: ShortcodeDataMap = {};
  const response = await fetchAndCache<{ unified: string; short_names?: string[] }[]>(
    'https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json',
    'temp/iamcal-emoji-data.json',
    (text) => JSON.parse(text),
    {
      headers: {
        'User-Agent': 'Emojibase',
      },
    },
  );

  response.forEach(({ unified, short_names: names }) => {
    const emoji = emojis[unified] || emojis[stripHexcode(unified)];

    if (!emoji) {
      log.error('iamcal', `IamCal shortcode ${unified} does not exist within our system.`);

      return;
    }

    if (Array.isArray(names)) {
      if (names.length === 1) {
        // eslint-disable-next-line prefer-destructuring
        shortcodes[emoji.hexcode] = names[0];
      } else {
        shortcodes[emoji.hexcode] = names;
      }
    }
  });

  await Promise.all([
    writeDataset(`en/shortcodes/iamcal.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/iamcal.json`, shortcodes, true),
  ]);
}
