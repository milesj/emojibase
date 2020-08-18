import { REGIONAL_INDICATORS, HIDDEN_EMOJI_PROPERTIES } from '../constants';
import { Emoji } from '../types';
import hasProperty from './hasProperty';

const lettersSet = new Set(Object.keys(REGIONAL_INDICATORS));

export default function isHidden(emoji: Emoji): boolean {
  return hasProperty(emoji.property, HIDDEN_EMOJI_PROPERTIES) && !lettersSet.has(emoji.hexcode);
}
