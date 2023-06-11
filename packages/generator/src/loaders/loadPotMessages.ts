import fs from 'node:fs';
import path from 'node:path';
import PO from 'pofile';
import { POManager } from '../parsers/POManager';

export async function loadPotMessages(): Promise<POManager> {
	const poPath = path.resolve(process.cwd(), 'po/messages.pot');
	const po = PO.parse(await fs.promises.readFile(poPath, 'utf8'));

	return new POManager(poPath, po);
}
