/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

export default function formatLocale(locale: string): string {
  const [lang, region] = locale.split('-');
  let newLocale = lang;

  if (region) {
    newLocale += '_';
    newLocale +=
      region.length === 2 ? region.toUpperCase() : region.charAt(0).toUpperCase() + region.slice(1);
  }

  return newLocale;
}
