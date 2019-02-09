import path from 'path';
import { EmoticonMap } from '../types';

export default function loadEmoticons(): Promise<EmoticonMap> {
  // eslint-disable-next-line
  return Promise.resolve(require(path.resolve(__dirname, '../resources/emoticons.js')).default);
}
