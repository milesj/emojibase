export default function extractEmojiVersion(comment: string): number | null {
  const version = comment.match(/E(\d+\.\d)/);

  if (version) {
    return parseFloat(version[1].trim());
  }

  return null;
}
