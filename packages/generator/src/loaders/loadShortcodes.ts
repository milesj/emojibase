import path from 'path';
import log from '../helpers/log';
import { ShortcodeMap, ShortcodeRawMap } from '../types';

export default function loadShortcodes(): Promise<ShortcodeMap> {
  // eslint-disable-next-line
  const codes: ShortcodeRawMap = require(path.resolve(__dirname, '../resources/shortcodes.js'))
    .default;
  const map: ShortcodeMap = {};

  Object.keys(codes).forEach(hexcode => {
    const shortcodes = codes[hexcode];

    if (Array.isArray(shortcodes)) {
      map[hexcode] = shortcodes;

      if (shortcodes.length === 0) {
        log.error('shortcode', `Shortcode ${hexcode} has no values defined`);
      }
    } else if (typeof shortcodes === 'string') {
      if (codes[shortcodes]) {
        map[hexcode] = codes[shortcodes] as any[];
      } else {
        log.error(
          'shortcode',
          `Shortcode ${hexcode} references non-existent hexcode ${shortcodes}`,
        );
      }
    } else {
      log.error('shortcode', `Shortcode ${hexcode} found with invalid value`);
    }
  });

  return Promise.resolve(map);
}
