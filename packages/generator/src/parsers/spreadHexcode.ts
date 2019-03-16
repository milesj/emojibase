import { fromHexcodeToCodepoint, Hexcode } from 'emojibase';
import formatHexcode from '../helpers/formatHexcode';

export default function spreadHexcode(
  hexcode: string,
  map: (hexcode: Hexcode, range: boolean) => void,
) {
  if (hexcode.includes('..')) {
    const [lowCodepoint, highCodepoint] = fromHexcodeToCodepoint(hexcode, '..');

    for (let codepoint = lowCodepoint; codepoint <= highCodepoint; codepoint += 1) {
      map(
        formatHexcode(
          codepoint
            .toString(16)
            .padStart(4, '0')
            .toUpperCase(),
        ),
        true,
      );
    }
  } else {
    map(formatHexcode(hexcode), false);
  }
}
