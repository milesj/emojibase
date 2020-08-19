import { SkinTone } from './types';

export default function appendSkinToneIndex(
  shortcode: string,
  emoji: { tone?: SkinTone | SkinTone[] },
  prefix: string = '',
): string {
  return `${shortcode}_${prefix}${Array.isArray(emoji.tone) ? emoji.tone.join('-') : emoji.tone}`;
}
