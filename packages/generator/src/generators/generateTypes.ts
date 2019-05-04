import log from '../helpers/log';
import readCache from '../helpers/readCache';

function unionize(data: object | any[]): string {
  if (!Array.isArray(data)) {
    return unionize(Object.values(data));
  }

  return data.map(value => `'${value}'`).join(' | ');
}

export default async function generateTypes(): Promise<void> {
  log.title('data', 'Generating TypeScript types');

  const groupData = readCache<{
    groups: { [key: string]: string };
    subgroups: { [key: string]: string };
  }>('final/group-hierarchy.json')!;

  console.log(`export type GroupKey = ${unionize(groupData.groups)};`);

  console.log(`export type SubgroupKey = ${unionize(groupData.subgroups)};`);

  log.success('data', 'Generated TypeScript types');
}
