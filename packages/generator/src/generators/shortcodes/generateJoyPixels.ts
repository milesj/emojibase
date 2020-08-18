import { stripHexcode } from 'emojibase';
import { transliterate } from 'transliteration';
import fetchAndCache from '../../loaders/fetchAndCache';
import writeDataset from '../../helpers/writeDataset';
import { ShortcodeDataMap, EmojiMap, HexcodeMap } from '../../types';
import log from '../../helpers/log';

// These should not be in the dataset according to the spec
const IGNORE_HEXCODES = new Set([
  // Pound symbol
  '0023',
  // Asterisk
  '002A',
  // Digits 0-9
  '0030',
  '0031',
  '0032',
  '0033',
  '0034',
  '0035',
  '0036',
  '0037',
  '0038',
  '0039',
]);

export default async function generateJoyPixels(emojis: EmojiMap) {
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

  Object.entries(response).forEach(
    ([
      baseCodePoint,
      {
        code_points: { fully_qualified: fullCodePoint },
        shortname = '',
        shortname_alternates: shortnames = [],
      },
    ]) => {
      const hexcode = baseCodePoint.toUpperCase();
      const fullHexcode = fullCodePoint.toUpperCase();
      const emoji = emojis[fullHexcode] || emojis[hexcode] || emojis[stripHexcode(hexcode)];

      if (IGNORE_HEXCODES.has(hexcode) || IGNORE_HEXCODES.has(fullHexcode)) {
        return;
      }

      if (!emoji) {
        log.error(
          'joypixels',
          `JoyPixels shortcode ${hexcode} (${fullHexcode}) does not exist within our system.`,
        );

        return;
      }

      const names = Array.from(new Set([shortname, ...shortnames])).map((name) =>
        transliterate(name.replace(/:/g, '')),
      );

      if (names.length === 1) {
        // eslint-disable-next-line prefer-destructuring
        shortcodes[emoji.hexcode] = names[0];
      } else {
        shortcodes[emoji.hexcode] = names;
      }
    },
  );

  await Promise.all([
    writeDataset(`en/shortcodes/joypixels.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/joypixels.json`, shortcodes, true),
  ]);
}
