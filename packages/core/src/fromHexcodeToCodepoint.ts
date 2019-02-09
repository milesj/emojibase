import { CodePoint, Hexcode } from './types';

export default function fromHexcodeToCodepoint(code: Hexcode, joiner: string = '-'): CodePoint[] {
  return code.split(joiner).map(point => parseInt(point, 16));
}
