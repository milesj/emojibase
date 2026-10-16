import { EMOJI_VARIATION_SELECTOR, TEXT_VARIATION_SELECTOR } from '../constants';
import type { Hexcode } from '../types';

// CLDR annotation keys never contain variation selectors, but do keep ZWJ, so `stripHexcode`
// (which removes both) can't be used. http://unicode.org/reports/tr35/tr35-general.html#Annotations
export function toAnnotationKey(hexcode: Hexcode): Hexcode {
	return hexcode
		.split('-')
		.filter((hex) => hex !== TEXT_VARIATION_SELECTOR && hex !== EMOJI_VARIATION_SELECTOR)
		.join('-');
}
