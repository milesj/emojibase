/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default function mergeEmojiObject(prev: ?Object, next: Object): Object {
  if (!prev) {
    return next;
  }

  // Do not overwrite previous emoji and unicode versions
  if ('version' in prev) {
    delete next.version;
  }

  if ('unicodeVersion' in prev) {
    delete next.unicodeVersion;
  }

  return {
    ...prev,
    ...next,
  };
}
