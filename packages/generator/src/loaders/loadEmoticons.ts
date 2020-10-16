import path from 'path';
import { EmoticonMap } from '../types';

export default function loadEmoticons(): Promise<EmoticonMap> {
  // Relative to the lib/ folder!
  // eslint-disable-next-line
  return Promise.resolve(require(path.resolve(__dirname, 'emoticons.js')));
}
