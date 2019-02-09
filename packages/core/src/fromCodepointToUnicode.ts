import { CodePoint, Unicode } from './types';

export default function fromCodepointToUnicode(codepoint: CodePoint[]): Unicode {
  return String.fromCodePoint(...codepoint);
}
