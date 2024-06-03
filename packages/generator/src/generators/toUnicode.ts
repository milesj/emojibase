import { fromCodepointToUnicode, fromHexcodeToCodepoint } from 'emojibase';
import type { Hexcode, Unicode } from '../types';

export function toUnicode(hexcode: Hexcode): Unicode {
	return fromCodepointToUnicode(fromHexcodeToCodepoint(hexcode));
}
