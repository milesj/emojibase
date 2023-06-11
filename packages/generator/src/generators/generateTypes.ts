/* eslint-disable no-console */

import { log } from '../helpers/log';
import { readCache } from '../helpers/readCache';

function unionize(data: unknown[] | object): string {
	if (!Array.isArray(data)) {
		return unionize(Object.values(data));
	}

	return data.map((value) => `'${value}'`).join(' | ');
}

export function generateTypes() {
	log.title('data', 'Generating TypeScript types');

	const groupData = readCache<{
		groups: Record<string, string>;
		subgroups: Record<string, string>;
	}>('temp/group-hierarchy.json')!;

	console.log(`export type GroupKey = ${unionize(groupData.groups)};`);

	console.log(`export type SubgroupKey = ${unionize(groupData.subgroups)};`);

	log.success('data', 'Generated TypeScript types');
}
