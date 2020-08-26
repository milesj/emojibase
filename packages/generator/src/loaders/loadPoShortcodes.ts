import fs from 'fs';
import path from 'path';
import PO from 'pofile';
import { Locale } from 'emojibase';
import POManager from '../parsers/POManager';
import { LOCALE_COUNTRIES } from '../constants';

export default async function loadPoShortcodes(locale: Locale): Promise<POManager> {
  const poPath = path.resolve(__dirname, `../../../../po/${locale}/shortcodes.po`);
  const po = PO.parse(await fs.promises.readFile(poPath, 'utf8'));

  if (po.comments.length <= 1) {
    po.comments = [LOCALE_COUNTRIES[locale]];
  }

  const pom = new POManager(poPath, po);
  pom.mapByComment();
  pom.mapByID();

  return pom;
}
