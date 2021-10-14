import { log } from '../helpers/log';
import { readCache } from '../helpers/readCache';
import { writeCache } from '../helpers/writeCache';
import { loadData } from '../loaders/loadData';
import { loadEmoticons } from '../loaders/loadEmoticons';
import { loadMetadata } from '../loaders/loadMetadata';
import { loadNames } from '../loaders/loadNames';
import { loadSequences } from '../loaders/loadSequences';
import { loadVariations } from '../loaders/loadVariations';
import { loadZwjSequences } from '../loaders/loadZwjSequences';
import { EmojiMap } from '../types';
import { joinData } from './joinData';
import { joinMetadataToData } from './joinMetadataToData';
import { joinModifiersToData } from './joinModifiersToData';
import { mergeDuplicateVariations } from './mergeDuplicateVariations';
import { validateDataAgainstOfficialList } from './validateDataAgainstOfficialList';
import { verifyDataIntegrity } from './verifyDataIntegrity';

export async function buildEmojiData(): Promise<EmojiMap> {
	const cache = readCache<EmojiMap>('final/emoji-data.json');
	const emojis = {};

	if (cache) {
		return cache;
	}

	log.title('build', 'Building emoji data');

	// 1) Load and merge all emoji data from the latest release version
	joinData(emojis, await loadData());
	joinData(emojis, await loadSequences());
	joinData(emojis, await loadZwjSequences());

	// 2) Load and merge metadata into the emoji data
	const names = await loadNames();
	const groups = await loadMetadata();
	const variations = await loadVariations();
	const emoticons = await loadEmoticons();

	joinMetadataToData(emojis, names, groups, variations, emoticons);

	// 3) Append skin tone modifications
	joinModifiersToData(emojis); // Requires names

	// 4) Merge and remove duplicate variations
	mergeDuplicateVariations(emojis); // Requires joined variations

	// 5) Verify we joined the data correctly
	await verifyDataIntegrity(emojis);

	// 6) Validate the built data against the official unicode emoji list
	await validateDataAgainstOfficialList(emojis);

	// 7) Save the dataset
	await writeCache('final/emoji-data.json', emojis);

	log.success('build', 'Built emoji data');

	return Promise.resolve(emojis);
}
