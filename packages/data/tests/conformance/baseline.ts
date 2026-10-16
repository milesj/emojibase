// Known conformance violations are recorded in a baseline, so the suite passes today and
// fails on any change: a new violation is a regression, and a violation that no longer occurs
// must be removed from the baseline, so fixes are locked in as they land.
//
// To rewrite the baseline after an intended change, run `yarn test:conformance:update`.

import fs from 'node:fs';
import path from 'node:path';

const BASELINE_PATH = path.join(__dirname, '../../../../tests/conformance-baseline.json');

export const UPDATE_BASELINE = Boolean(process.env.UPDATE_CONFORMANCE_BASELINE);

const baseline = JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8')) as Record<string, string[]>;
const updates: Record<string, string[]> = {};

function formatList(title: string, list: string[]): string {
	const shown = list.slice(0, 25).map((item) => `  - ${item}`);

	if (list.length > shown.length) {
		shown.push(`  … and ${list.length - shown.length} more`);
	}

	return `${title} (${list.length}):\n${shown.join('\n')}`;
}

export function expectBaseline(check: string, violations: string[]) {
	const actual = [...new Set(violations)].sort();

	if (UPDATE_BASELINE) {
		updates[check] = actual;

		return;
	}

	const known = new Set(baseline[check] ?? []);
	const current = new Set(actual);
	const added = actual.filter((item) => !known.has(item));
	const fixed = [...known].filter((item) => !current.has(item));

	if (added.length === 0 && fixed.length === 0) {
		return;
	}

	const sections = [`Conformance check "${check}" no longer matches the baseline.`];

	if (added.length > 0) {
		sections.push(formatList('New violations', added));
	}

	if (fixed.length > 0) {
		sections.push(formatList('Violations that no longer occur', fixed));
	}

	sections.push(
		'If this change is intended, run `yarn test:conformance:update` and commit the baseline.',
	);

	throw new Error(sections.join('\n\n'));
}

export function writeBaseline() {
	if (!UPDATE_BASELINE) {
		return;
	}

	const next: Record<string, string[]> = { ...baseline, ...updates };
	const sorted: Record<string, string[]> = {};

	Object.keys(next)
		.sort()
		.forEach((key) => {
			if (next[key].length > 0) {
				sorted[key] = next[key];
			}
		});

	fs.writeFileSync(BASELINE_PATH, `${JSON.stringify(sorted, null, '\t')}\n`, 'utf8');
}
