declare module 'emojibase-test-utils/lib/loadEmojiData' {
  export default function loadEmojiData(): object[];

}
declare module 'emojibase-test-utils/lib/loadFlatEmojiData' {
  export default function loadFlatEmojiData(): object[];

}
declare module 'emojibase-test-utils' {
  import loadEmojiData from 'emojibase-test-utils/lib/loadEmojiData';
  import loadFlatEmojiData from 'emojibase-test-utils/lib/loadFlatEmojiData';
  export { loadEmojiData, loadFlatEmojiData };

}
