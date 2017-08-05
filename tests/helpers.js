import fs from 'fs';
import path from 'path';

const CACHE = [];

// eslint-disable-next-line
export function loadData() {
  if (CACHE.length > 0) {
    return CACHE;
  }

  // Use the english dataset for testing
  const data = JSON.parse(fs.readFileSync(
    path.resolve(__dirname, '../packages/emojibase-data/en/data.json'),
    'utf8',
  ));

  // Flatten the dataset so we can simply loop through
  Object.keys(data).forEach((hexcode) => {
    const emoji = data[hexcode];

    CACHE.push(emoji);

    if (emoji.skins) {
      emoji.skins.forEach((skinnedEmoji) => {
        CACHE.push(skinnedEmoji);
      });
    }
  });

  return CACHE;
}
