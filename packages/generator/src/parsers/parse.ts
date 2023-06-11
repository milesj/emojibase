/* eslint-disable sort-keys */

import { ParsedLine, ParsedTotals } from '../types';

// Trying to detect the start of each property group is quite complicated,
// so let's take the easy route and match the start of the line.
const PROPERTY_CAPTURES: Record<string, string> = {
	'# Combining sequences': 'Emoji_Combining_Sequence',
	'# Emoji Combining Sequence': 'Emoji_Combining_Sequence',
	'# Emoji Flag Sequence': 'Emoji_Flag_Sequence',
	'# Emoji Keycap Sequence': 'Emoji_Keycap_Sequence',
	'# Emoji Modifier Sequence': 'Emoji_Modifier_Sequence',
	'# Emoji Tag Sequence': 'Emoji_Tag_Sequence',
	'# Emoji ZWJ Sequence': 'Emoji_ZWJ_Sequence',
	'# Flag sequences': 'Emoji_Flag_Sequence',
	'# Modifier sequences': 'Emoji_Modifier_Sequence',
	'# ZWJ sequences': 'Emoji_ZWJ_Sequence',
	// 12.0+
	'# Basic_Emoji': 'Basic_Emoji',
	'# Emoji_Keycap_Sequence': 'Emoji_Keycap_Sequence',
	'# Emoji_Flag_Sequence': 'Emoji_Flag_Sequence',
	'# Emoji_Tag_Sequence': 'Emoji_Tag_Sequence',
	'# Emoji_Modifier_Sequence': 'Emoji_Modifier_Sequence',
	'# Emoji_ZWJ_Sequence': 'Emoji_ZWJ_Sequence',
	// 13.0+
	'# RGI_Emoji_Flag_Sequence': 'RGI_Emoji_Flag_Sequence',
	'# RGI_Emoji_Modifier_Sequence': 'RGI_Emoji_Modifier_Sequence',
	'# RGI_Emoji_Tag_Sequence': 'RGI_Emoji_Tag_Sequence',
	'# RGI_Emoji_ZWJ_Sequence': 'RGI_Emoji_ZWJ_Sequence',
};

/**
 * Parses unicode documents in which each line contains tabular data separated by semi-colons.
 *
 * Examples:
 *  http://unicode.org/Public/10.0.0/ucd/UnicodeData.txt
 *  http://unicode.org/Public/emoji/5.0/emoji-data.txt
 */
export function parse(content: string): {
	lines: ParsedLine[];
	totals: ParsedTotals;
} {
	const lines: ParsedLine[] = [];
	const totals: ParsedTotals = {};
	let lastProperty = 'Emoji';
	let lastTotal = 0;

	// Handle totals
	const addTotal = () => {
		if (!lastTotal) {
			return;
		}

		totals[lastProperty] = (totals[lastProperty] || 0) + lastTotal;
		lastTotal = 0;
	};

	content.split('\n').forEach((baseLine) => {
		let line = baseLine;

		// Skip empty lines
		if (!line.trim()) {
			return;
		}

		// Skip comments
		if (line.startsWith('#')) {
			// But extract property
			if (line.startsWith('# @missing')) {
				addTotal();
				lastProperty = line.split(';')[1].trim();
			} else if (line.startsWith('# All omitted')) {
				addTotal();
				lastProperty = line.replace('# All omitted code points have', '').split('=')[0].trim();
			} else {
				Object.keys(PROPERTY_CAPTURES).some((start) => {
					if (line.startsWith(start)) {
						addTotal();
						lastProperty = PROPERTY_CAPTURES[start];

						return true;
					}

					return false;
				});
			}

			// And the total
			if (line.startsWith('# Total') || line.startsWith('#Total')) {
				lastTotal = Number.parseFloat(line.split(':')[1].trim());
			}

			return;
		}

		// Extract the trailing comment
		const commentIndex = line.indexOf('#');
		let comment = '';

		if (commentIndex > 0) {
			comment = line.slice(commentIndex + 1).trim();
			line = line.slice(0, commentIndex).trim();
		}

		// Split into fields
		const fields = line
			.split(';')
			.map((col) => col.trim())
			.slice(0, 4);

		lines.push({
			comment,
			fields,
		});
	});

	// Capture the last property
	if (lastProperty && lastTotal) {
		addTotal();
	}

	return {
		lines,
		totals,
	};
}
