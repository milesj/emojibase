/* eslint-disable complexity */

import { Emoji as FinalEmoji, GroupMeta, Locale, stripHexcode, SUPPORTED_LOCALES } from 'emojibase';
import { buildAnnotationData } from '../builders/buildAnnotationData';
import { buildEmojiData } from '../builders/buildEmojiData';
import { filterData } from '../helpers/filterData';
import { log } from '../helpers/log';
import { readCache } from '../helpers/readCache';
import { writeDataset } from '../helpers/writeDataset';
import { loadPoMeta } from '../loaders/loadPoMeta';
import {
	CLDRAnnotationMap,
	Emoji,
	EmojiModification,
	Hexcode,
	HexcodeMap,
	VersionMap,
} from '../types';
import { extractCompact } from './extractCompact';
import { toUnicode } from './toUnicode';

type HexcodeVersionMap = Record<string, number>;

function createEmoji(
	baseEmoji: Emoji | EmojiModification,
	versions: HexcodeVersionMap,
	annotations: CLDRAnnotationMap,
): FinalEmoji {
	/* eslint-disable sort-keys */
	const emoji: FinalEmoji = {
		// Classification
		annotation: '',
		hexcode: baseEmoji.hexcode,
		tags: [],
		// Presentation
		emoji: toUnicode(baseEmoji.hexcode),
		text: '',
		type: baseEmoji.type,
		// Categorization
		order: baseEmoji.order,
		group: baseEmoji.group,
		subgroup: baseEmoji.subgroup,
		version: 0,
	};
	/* eslint-enable sort-keys */

	// Release version
	if (versions[baseEmoji.hexcode]) {
		emoji.version = versions[baseEmoji.hexcode];
	}

	// Diversity
	if ('gender' in baseEmoji && baseEmoji.gender !== null) {
		emoji.gender = baseEmoji.gender;
	}

	if ('tone' in baseEmoji && baseEmoji.tone !== null) {
		emoji.tone = baseEmoji.tone;
	}

	// Presentation variations
	if ('variations' in baseEmoji) {
		emoji.emoji = toUnicode(baseEmoji.variations!.emoji);
		emoji.text = toUnicode(baseEmoji.variations!.text);
	}

	if ('emoticon' in baseEmoji) {
		emoji.emoticon = baseEmoji.emoticon;
	}

	// Annotations
	const annotation = annotations[stripHexcode(emoji.hexcode)]; // No ZWJ, selectors

	if (annotation) {
		emoji.annotation = annotation.annotation ? annotation.annotation : baseEmoji.description;

		if (annotation.tags.length > 0) {
			emoji.tags = annotation.tags;

			// Sort the tags for easier diffs
			emoji.tags.sort();

			// Some locales duplicate the annotation in the tag list
			if (emoji.tags.length > 1) {
				emoji.tags = emoji.tags.filter((tag: string) => tag !== emoji.annotation);
			}
		}
	}

	// Skin modifications
	if ('modifications' in baseEmoji) {
		emoji.skins = Object.values(baseEmoji.modifications!).map((mod) => {
			const skin = createEmoji(mod, versions, annotations);

			skin.annotation =
				(annotations[stripHexcode(skin.hexcode)] || {}).annotation || emoji.annotation || '';

			// Remove any tags
			delete skin.tags;

			return skin;
		});
	}

	// Cleanup
	if (emoji.tags?.length === 0) {
		delete emoji.tags;
	}

	return emoji;
}

function sortOrder(a: { order?: number }, b: { order?: number }) {
	return (a.order ?? 0) - (b.order ?? 0);
}

function createVersionMap(): HexcodeVersionMap {
	const cache: { emojiVersions: VersionMap } | undefined = readCache(
		'final/emoji-unicode-versions.json',
	);
	const versions: HexcodeVersionMap = {};

	if (!cache) {
		return versions;
	}

	Object.keys(cache.emojiVersions).forEach((version) => {
		Object.keys(cache.emojiVersions[version]).forEach((hexcode) => {
			versions[hexcode] = Number(version);
		});
	});

	return versions;
}

async function generateMetadata(locale: Locale): Promise<unknown> {
	const data = await loadPoMeta(locale);
	const englishData = await loadPoMeta('en');
	const groups: GroupMeta[] = [];
	const subgroups: GroupMeta[] = [];

	data.po.items.forEach((item) => {
		if (item.msgctxt.includes('ANNOTATION')) {
			return;
		}

		const contexts = String(item.msgctxt).split(',');

		item.comments.forEach((comment, i) => {
			const [id, key] = comment.split(':');
			const meta: GroupMeta = {
				key: key.trim(),
				message: String(item.msgstr),
				order: Number(id.trim()),
			};

			if (!meta.message) {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				meta.message = String(englishData.itemsById[item.msgid].msgstr);
			}

			if (contexts[i].includes('SUB-GROUP')) {
				subgroups.push(meta);
			} else {
				groups.push(meta);
			}
		});
	});

	groups.sort(sortOrder);
	subgroups.sort(sortOrder);

	return Promise.all([
		writeDataset(`${locale}/meta.raw.json`, { groups, subgroups }),
		writeDataset(`${locale}/meta.json`, { groups, subgroups }, true),
	]);
}

export async function generateData(): Promise<void> {
	log.title('data', 'Generating emoji datasets');

	const data = await buildEmojiData();
	const filteredData = filterData(data);
	const versions = createVersionMap();

	// Generate datasets for each locale
	await Promise.all(
		SUPPORTED_LOCALES.map(async (locale: Locale) => {
			const annotations = await buildAnnotationData(locale);
			const emojis = Object.keys(filteredData).map((hexcode) =>
				createEmoji(filteredData[hexcode], versions, annotations),
			);

			// Sort by order
			emojis.sort(sortOrder);

			const compactEmojis = extractCompact(emojis);

			return Promise.all([
				generateMetadata(locale),
				writeDataset(`${locale}/data.raw.json`, emojis),
				writeDataset(`${locale}/data.json`, emojis, true),
				writeDataset(`${locale}/compact.raw.json`, compactEmojis),
				writeDataset(`${locale}/compact.json`, compactEmojis, true),
			]);
		}),
	);

	// Generate metadata and specialized datasets
	const names: HexcodeMap<string> = {};
	const unicode = new Set();
	const hexcodes = new Set();

	const addMetadata = (hexcode: Hexcode, emoji?: Emoji) => {
		unicode.add(toUnicode(hexcode));
		hexcodes.add(hexcode);

		if (emoji) {
			const name = emoji.name || emoji.description.toUpperCase();

			names[hexcode] = name;
		}
	};

	Object.values(filteredData).forEach((emoji) => {
		const { modifications, variations } = emoji;

		addMetadata(emoji.hexcode, emoji);

		if (variations) {
			addMetadata(variations.emoji);
			addMetadata(variations.text);
		}

		if (modifications) {
			Object.values(modifications).forEach((mod) => {
				addMetadata(mod.hexcode, mod);
			});
		}
	});

	await Promise.all([
		writeDataset('meta/unicode.json', [...unicode]),
		writeDataset('meta/unicode-names.json', names),
		writeDataset('meta/hexcodes.json', [...hexcodes]),
	]);

	const groupCache = readCache('final/group-hierarchy.json');

	if (groupCache) {
		await writeDataset('meta/groups.json', groupCache);
	}

	log.success('data', 'Generated emoji datasets');
}
