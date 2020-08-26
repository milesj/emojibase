/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import fs from 'fs';
import PO, { POItem, POHeaders } from 'pofile';
import toArray from '../helpers/toArray';

export default class POManager {
  path: string;

  po: PO;

  items: Record<string, POItem> = {};

  constructor(path: string, po: PO) {
    this.path = path;
    this.po = po;

    // Set common headers
    this.setHeader('POT-Creation-Date', new Date());
    this.setHeader('PO-Revision-Date', new Date());
    this.setHeader('MIME-Version', '1.0');
    this.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    this.setHeader('Content-Transfer-Encoding', '8bit');
  }

  mapByComment(): this {
    this.po.items.forEach((item) => {
      if (item.comments.length > 0) {
        this.items[
          toArray(item.comments)
            .map((c) => c.trim())
            .join('')
        ] = item;
      }
    });

    return this;
  }

  mapByID(): this {
    this.po.items.forEach((item) => {
      this.items[item.msgid] = item;
    });

    return this;
  }

  setHeader(name: POHeaders, value: string | Date) {
    if (value instanceof Date) {
      let tz = String(value.getTimezoneOffset());

      if (!tz.startsWith('-')) {
        tz = `+${tz}`;
      }

      this.po.headers[name] = `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(
        2,
        '0',
      )}-${value.getDate()} ${value.getHours()}:${value.getMinutes()}${tz}`;
    } else {
      this.po.headers[name] = value;
    }
  }

  addItem(
    msgid: string,
    msgstr: string,
    msgctxt: string,
    {
      comment,
      flags,
      hexcode,
    }: { comment?: string | string[]; flags?: string[]; hexcode?: string } = {},
  ) {
    const item = (hexcode && this.items[hexcode]) || this.items[msgid] || new PO.Item();
    item.msgid = msgid;
    item.msgctxt = msgctxt;

    if (msgstr) {
      item.msgstr = msgstr;
    }

    if (comment) {
      item.comments = toArray(comment);
    }

    if (flags) {
      flags.forEach((flag) => {
        item.flags[flag] = true;
      });
    }

    this.items[msgid] = item;
  }

  async write(): Promise<void> {
    await fs.promises.writeFile(this.path, this.po.toString(), 'utf8');
  }
}
