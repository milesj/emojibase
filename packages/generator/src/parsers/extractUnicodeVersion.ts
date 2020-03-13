// https://www.unicode.org/reports/tr51/#EmojiVersions
export default function extractUnicodeVersion(emojiVersion: number): number {
  // v11 aligned emoji and unicode specs
  if (emojiVersion >= 11) {
    return emojiVersion;
  }

  switch (emojiVersion) {
    case 0.7:
      return 7;
    case 1:
    case 2:
      return 8;
    case 3:
    case 4:
      return 9;
    case 5:
      return 10;
    default:
      // v6 is the first unicode spec emojis appeared in
      return 6;
  }
}
