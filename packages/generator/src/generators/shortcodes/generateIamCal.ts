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

  response.forEach((emoji) => {
    const hexcode = emoji.unified;

    if (!emojis[hexcode]) {
      log.error('iamcal', `IamCal hexcode ${hexcode} does not exist within our system.`);
    }

    if (Array.isArray(emoji.short_names)) {
      if (emoji.short_names.length === 1) {
        // eslint-disable-next-line prefer-destructuring
        shortcodes[hexcode] = emoji.short_names[0];
      } else {
        shortcodes[hexcode] = emoji.short_names;
      }
    }
  });

  await Promise.all([
    writeDataset(`en/shortcodes/iamcal.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/iamcal.json`, shortcodes, true),
  ]);
}
