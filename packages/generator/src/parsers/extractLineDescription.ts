export default function extractLineDescription(comment: string): string {
  let description = comment.trim();

  // Remove unicode version
  description = description.replace(/^V?([0-9.]+)/, '');

  // Remove range
  description = description.replace(/\[\d+\]/, '');

  // Remove example emojis
  description = description.replace(/\(*.+\)/, '');

  return description.toLowerCase().trim();
}
