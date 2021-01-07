import writeDataset from '../../helpers/writeDataset';
import fetchAndCache from '../../loaders/fetchAndCache';
import { ShortcodeDataMap } from '../../types';
import Database from '../Database';

export default async function generateIamCal(db: Database) {
  db.preset = 'iamcal';

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

    if (emoji && shortnames.length > 0) {
      db.addShortcodes(shortcodes, emoji.hexcode, shortnames);
    }
  });

  // const sourceLength = Object.keys(response).length;
  // const targetLength = Object.keys(shortcodes).length;

  // if (targetLength !== sourceLength) {
  //   log.warn(
  //     'shortcodes',
  //     `IamCal shortcode dataset has mismatching length (expected ${sourceLength}, received ${targetLength})`,
  //   );
  // }

  await Promise.all([
    writeDataset(`en/shortcodes/iamcal.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/iamcal.json`, shortcodes, true),
  ]);
}
