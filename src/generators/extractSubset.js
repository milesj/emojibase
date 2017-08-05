/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default function extractSubset(data: Object[], format: string): Object[] {
  const emojis = [];

  data.forEach((datum) => {
    switch (format) {
      case 'compact': {
        const { hexcode, shortcodes, emoji, order, group, annotation, tags, skins } = datum;
        const nextDatum = {
          hexcode,
          shortcodes,
          emoji,
          order,
          group,
          annotation,
          tags,
        };

        if (skins) {
          nextDatum.skins = extractSubset(skins, format);
        }

        emojis.push(nextDatum);
        break;
      }

      default:
        emojis.push(datum);
        break;
    }
  });

  return emojis;
}
