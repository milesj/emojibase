import type { Hexcode } from '../types';

export function formatHexcode(hex: Hexcode): Hexcode {
	return hex.replaceAll(/\s+/g, '-');
}
