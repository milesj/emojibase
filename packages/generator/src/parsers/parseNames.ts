import { ParsedLine, UnicodeNamesMap } from '../types';
import { parse } from './parse';

/**
 * Parses the official unicode list for all character names.
 *
 * Example: http://unicode.org/Public/10.0.0/ucd/UnicodeData.txt
 */
export function parseNames(content: string): UnicodeNamesMap {
	const { lines } = parse(content);

	return lines.reduce((map: UnicodeNamesMap, line: ParsedLine) => {
		const [hexcode, name] = line.fields;

		map[hexcode] = name;

		return map;
	}, {});
}
