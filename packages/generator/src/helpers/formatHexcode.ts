import type { Hexcode } from '../types';

export function formatHexcode(hex: Hexcode): Hexcode {
	return hex.replace(/\s+/g, '-');
}
