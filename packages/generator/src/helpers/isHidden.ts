import { HIDDEN_EMOJI_PROPERTIES, REGIONAL_INDICATORS } from '../constants';
import type { Emoji } from '../types';
import { hasProperty } from './hasProperty';

const lettersSet = new Set(Object.keys(REGIONAL_INDICATORS));

export function isHidden(emoji: Emoji): boolean {
	return hasProperty(emoji.property, HIDDEN_EMOJI_PROPERTIES) && !lettersSet.has(emoji.hexcode);
}
