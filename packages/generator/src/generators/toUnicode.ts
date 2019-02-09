import { fromCodepointToUnicode, fromHexcodeToCodepoint } from 'emojibase';
import { Hexcode, Unicode } from '../types';

export default function toUnicode(hexcode: Hexcode): Unicode {
  return fromCodepointToUnicode(fromHexcodeToCodepoint(hexcode));
}
