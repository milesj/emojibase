import fs from 'fs';
import path from 'path';
import PO from 'pofile';
import { Locale } from 'emojibase';
import POManager from '../parsers/POManager';
import { LOCALE_COUNTRIES } from '../constants';

export default async function loadPoMeta(locale: Locale): Promise<POManager> {
  const poPath = path.resolve(__dirname, `../../../../po/${locale}/meta.po`);
  const po = PO.parse(await fs.promises.readFile(poPath, 'utf8'));

  if (po.comments.length <= 1) {
    po.comments = [LOCALE_COUNTRIES[locale]];
  }

  return new POManager(poPath, po);
}
