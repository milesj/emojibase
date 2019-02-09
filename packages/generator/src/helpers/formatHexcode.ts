import { Hexcode } from '../types';

export default function formatHexcode(hex: Hexcode): Hexcode {
  return hex.replace(/\s+/g, '-');
}
