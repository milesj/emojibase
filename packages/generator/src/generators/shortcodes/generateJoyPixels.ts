import { stripHexcode } from 'emojibase';
import fetchAndCache from '../../loaders/fetchAndCache';
import writeDataset from '../../helpers/writeDataset';
import { ShortcodeDataMap, EmojiMap, HexcodeMap } from '../../types';
import log from '../../helpers/log';

export default async function generateJoyPixels(emojis: EmojiMap) {
  const shortcodes: ShortcodeDataMap = {};
  const response = await fetchAndCache<
    HexcodeMap<{ shortname?: string; shortname_alternates?: string[] }>
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
    ([baseHexcode, { shortname = '', shortname_alternates: shortnames = [] }]) => {
      const hexcode = baseHexcode.toUpperCase();
      const emoji = emojis[hexcode] || emojis[stripHexcode(hexcode)];

      if (!emoji) {
        log.error('joypixels', `JoyPixels shortcode ${hexcode} does not exist within our system.`);

        return;
      }

      const names = Array.from(new Set([shortname, ...shortnames])).map((name) =>
        name.replace(/:/g, ''),
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
