import fs from 'fs';
import path from 'path';
import { Locale } from 'emojibase';
import PO from 'pofile';
import { LOCALE_COUNTRIES } from '../constants';
import POManager from '../parsers/POManager';

export default async function loadPoMeta(locale: Locale): Promise<POManager> {
  const poPath = path.resolve(process.cwd(), `po/${locale}/meta.po`);
  const po = PO.parse(await fs.promises.readFile(poPath, 'utf8'));

  if (po.comments.length <= 1) {
    po.comments = [LOCALE_COUNTRIES[locale]];
  }

  const pom = new POManager(poPath, po);
  pom.mapByID();

  return pom;
}
