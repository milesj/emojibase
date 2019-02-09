import { Emoji } from './types';

export default function flattenEmojiData(data: Emoji[]): Emoji[] {
  const emojis: Emoji[] = [];

  data.forEach(emoji => {
    if (emoji.skins) {
      const { skins, ...restEmoji } = emoji;

      // Dont include nested skins array
      emojis.push(restEmoji);

      // Push each skin modification into the root list
      skins.forEach(skin => {
        const skinEmoji = { ...skin };

        // Inherit tags from parent if they exist
        if (emoji.tags) {
          skinEmoji.tags = [...emoji.tags];
        }

        emojis.push(skinEmoji);
      });
    } else {
      emojis.push(emoji);
    }
  });

  return emojis;
}
