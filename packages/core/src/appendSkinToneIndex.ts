import { SkinTone } from './types';

export default function appendSkinToneIndex(
  shortcode: string,
  emoji: { tone?: SkinTone | SkinTone[] },
): string {
  return `${shortcode}_${Array.isArray(emoji.tone) ? emoji.tone.join('-') : emoji.tone}`;
}
