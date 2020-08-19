import fetchAndCache from '../../loaders/fetchAndCache';
import writeDataset from '../../helpers/writeDataset';
import { ShortcodeDataMap } from '../../types';
import log from '../../helpers/log';
import Database from '../Database';

export default async function generateIamCal(db: Database) {
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

  response.forEach(({ unified: hexcode, short_names: shortnames = [] }) => {
    const emoji = db.getEmoji(hexcode);

    if (!emoji) {
      log.error('iamcal', `IamCal shortcode ${hexcode} does not exist within our system.`);

      return;
    }

    if (shortnames.length > 0) {
      shortcodes[emoji.hexcode] = db.formatShortcodes(shortnames);
    }
  });

  await Promise.all([
    writeDataset(`en/shortcodes/iamcal.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/iamcal.json`, shortcodes, true),
  ]);
}
