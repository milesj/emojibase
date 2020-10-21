import path from 'path';
import { ShortcodeMap } from '../types';

export default function loadShortcodes(): Promise<ShortcodeMap> {
  // Relative to the lib/ folder!
  // eslint-disable-next-line
  return Promise.resolve(require(path.resolve(__dirname, 'shortcodes.js')));
}
