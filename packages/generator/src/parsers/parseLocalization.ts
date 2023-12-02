import cheerio from 'cheerio';
import { INHERIT_PARENT_SYMBOL } from '../constants';
import { CLDRDataMap } from '../types';

/**
 * Parses an official unicode CLDR XML datasource.
 *
 * Example:
 *  https://raw.githubusercontent.com/unicode-org/cldr/release-31-0-1/common/main/en.xml
 *  https://raw.githubusercontent.com/unicode-org/cldr/release-31-0-1/common/subdivisions/en.xml
 */
export function parseLocalization(
	version: string,
	content: string,
	nodeName: string,
	attrName: string = 'type',
): CLDRDataMap {
	const xml = cheerio.load(content, { xmlMode: true });
	const data: CLDRDataMap = {};
	let lastValue = '';

	xml(nodeName).each((i, rawRow) => {
		const row = xml(rawRow);
		const value = row.text().trim();

		if (value === INHERIT_PARENT_SYMBOL) {
			data[row.attr(attrName)!] = lastValue;
		} else {
			data[row.attr(attrName)!] = value;
			lastValue = value;
		}
	});

	return data;
}
