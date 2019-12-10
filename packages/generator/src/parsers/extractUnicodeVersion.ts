import { FIRST_UNICODE_EMOJI_VERSION } from 'emojibase';

export default function extractUnicodeVersion(comment: string): number | null {
  const unicodeVersion = comment.match(/^V?([\d.]+)/);

  return parseFloat(unicodeVersion ? unicodeVersion[1] : FIRST_UNICODE_EMOJI_VERSION);
}
