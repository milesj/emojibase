import { buildVersionedData } from '../builders/buildVersionedData';
import { log } from '../helpers/log';
import { writeDataset } from '../helpers/writeDataset';
import type { VersionMap } from '../types';

export async function generateVersions(): Promise<void> {
	log.title('data', 'Generating versioned datasets');

	const { emojiVersions, unicodeVersions } = await buildVersionedData();
	const emoji: VersionMap = {};
	const unicode: VersionMap = {};

	Object.keys(emojiVersions).forEach((version) => {
		emoji[version] = Object.keys(emojiVersions[version]);
	});

	Object.keys(unicodeVersions).forEach((version) => {
		unicode[version] = Object.keys(unicodeVersions[version]);
	});

	await Promise.all([
		writeDataset('versions/emoji.json', emoji),
		writeDataset('versions/unicode.json', unicode),
	]);

	log.success('data', 'Generated versioned datasets');
}
