import fs from 'node:fs';
import PO, { POHeaders, POItem } from 'pofile';
import { toArray } from '../helpers/toArray';

export class POManager {
	path: string;

	po: PO;

	itemsById: Record<string, POItem> = {};

	itemsByComment: Record<string, POItem[]> = {};

	constructor(path: string, po: PO) {
		this.path = path;
		this.po = po;

		// Set common headers
		this.setHeader('PO-Revision-Date', new Date());
		this.setHeader('MIME-Version', '1.0');
		this.setHeader('Content-Type', 'text/plain; charset=UTF-8');
		this.setHeader('Content-Transfer-Encoding', '8bit');

		// Map items
		this.po.items.forEach((item) => {
			this.itemsById[item.msgid] = item;

			if (item.comments.length > 0) {
				toArray(item.comments).forEach((c) => {
					const comment = c.trim();

					if (this.itemsByComment[comment]) {
						this.itemsByComment[comment].push(item);
					} else {
						this.itemsByComment[comment] = [item];
					}
				});
			}
		});
	}

	setHeader(name: POHeaders, value: Date | string) {
		if (value instanceof Date) {
			const pad = (val: number) => String(val).padStart(2, '0');
			let tz = String(value.getTimezoneOffset());

			if (!tz.startsWith('-')) {
				tz = `+${tz}`;
			}

			this.po.headers[name] = `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(
				value.getDate(),
			)} ${pad(value.getHours())}:${pad(value.getMinutes())}${tz}`;
		} else {
			this.po.headers[name] = value;
		}
	}

	addItem(
		msgid: string,
		msgstr: string,
		msgctxt: string,
		{ comment, flags }: { comment?: string[] | string; flags?: string[] } = {},
	) {
		const item = this.itemsById[msgid] || new PO.Item();
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

		this.itemsById[msgid] = item;
	}

	getItem(id: string): POItem {
		const item = this.itemsById[id];

		if (!item) {
			throw new Error(`No PO translation for "${id}".`);
		}

		return item;
	}

	getMessage(id: string): string {
		return toArray(this.getItem(id).msgstr).join('');
	}

	async write(sort: boolean = false): Promise<void> {
		this.po.items = Object.values(this.itemsById);

		if (sort) {
			this.po.items.sort((a, b) => a.msgid.localeCompare(b.msgid));
		}

		await fs.promises.writeFile(this.path, this.po.toString(), 'utf8');
	}
}
