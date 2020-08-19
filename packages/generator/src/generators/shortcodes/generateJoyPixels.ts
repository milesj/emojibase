import { transliterate } from 'transliteration';
import fetchAndCache from '../../loaders/fetchAndCache';
import writeDataset from '../../helpers/writeDataset';
import { ShortcodeDataMap, HexcodeMap } from '../../types';
import log from '../../helpers/log';
import Database from '../Database';

// These should not be in the dataset according to the spec
const IGNORE_HEXCODES = new Set([
  // Pound symbol
  '0023-FE0F',
  // Asterisk
  '002A-FE0F',
  // Digits 0-9
  '0030-FE0F',
  '0031-FE0F',
  '0032-FE0F',
  '0033-FE0F',
  '0034-FE0F',
  '0035-FE0F',
  '0036-FE0F',
  '0037-FE0F',
  '0038-FE0F',
  '0039-FE0F',
]);

export default async function generateJoyPixels(db: Database) {
  const shortcodes: ShortcodeDataMap = {};
  const response = await fetchAndCache<
    HexcodeMap<{
      code_points: { fully_qualified: string };
      shortname?: string;
      shortname_alternates?: string[];
    }>
  >(
    'https://raw.githubusercontent.com/joypixels/emoji-toolkit/master/emoji.json',
    'temp/joypixels-emoji-data.json',
    (text) => JSON.parse(text),
    {
      headers: {
        'User-Agent': 'Emojibase',
      },
    },
  );

  Object.values(response).forEach(
    ({
      code_points: { fully_qualified: fullCodePoint },
      shortname = '',
      shortname_alternates: shortnames = [],
    }) => {
      const hexcode = fullCodePoint.toUpperCase();
      const emoji = db.getEmoji(hexcode);

      if (IGNORE_HEXCODES.has(hexcode)) {
        return;
      }

      if (!emoji) {
        log.error('shortcodes', `JoyPixels shortcode ${hexcode} does not exist within our system.`);

        return;
      }

      const names = Array.from(new Set([shortname, ...shortnames]))
        .filter(Boolean)
        .map((name) => transliterate(name.replace(/:/g, '')));

      if (names.length > 0) {
        db.addShortcodes(shortcodes, emoji.hexcode, names);
      }
    },
  );

  // const sourceLength = Object.keys(response).length - IGNORE_HEXCODES.size;
  // const targetLength = Object.keys(shortcodes).length;

  // if (targetLength !== sourceLength) {
  //   log.warn(
  //     'shortcodes',
  //     `JoyPixels shortcode dataset has mismatching length (expected ${sourceLength}, received ${targetLength})`,
  //   );
  // }

  await Promise.all([
    writeDataset(`en/shortcodes/joypixels.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/joypixels.json`, shortcodes, true),
  ]);
}
