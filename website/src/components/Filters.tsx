/* eslint-disable sort-keys */
/* eslint-disable node/no-unsupported-features/node-builtins */

import 'url-search-params-polyfill';
import React, { useCallback, useEffect, useState } from 'react';
import {
	Emoji,
	fetchFromCDN,
	fetchMessages,
	GroupDataset,
	GroupMessage,
	Locale,
	ShortcodePreset,
	SubgroupMessage,
} from 'emojibase';
import debounce from 'lodash/debounce';
import upperFirst from 'lodash/upperFirst';
import { CDN_VERSION } from '../constants';
import styles from './styles.module.css';

const isBrowser = typeof location !== 'undefined';

export const LOCALES: { [K in Locale]: string } = {
	bn: 'Bangla',
	da: 'Danish',
	de: 'German',
	'en-gb': 'English, Great Britain',
	en: 'English',
	'es-mx': 'Spanish, Mexico',
	es: 'Spanish',
	et: 'Estonian',
	fi: 'Finnish',
	fr: 'French',
	hi: 'Hindi',
	hu: 'Hungarian',
	it: 'Italian',
	ja: 'Japanese',
	ko: 'Korean',
	lt: 'Lithuanian',
	ms: 'Malay',
	nb: 'Norwegian, Bokmål',
	nl: 'Dutch',
	pl: 'Polish',
	pt: 'Portuguese',
	ru: 'Russian',
	sv: 'Swedish',
	th: 'Thai',
	uk: 'Ukrainian',
	'zh-hant': 'Chinese, Traditional',
	zh: 'Chinese',
};

export const PRESETS: { [K in ShortcodePreset]?: string } = {
	cldr: 'CLDR',
	'cldr-native': 'CLDR (native)',
	emojibase: 'Emojibase',
	'emojibase-legacy': 'Emojibase (legacy)',
	github: 'GitHub',
	iamcal: 'IamCal (Slack)',
	joypixels: 'JoyPixels (Discord)',
};

export function updateUrlFragment(query: URLSearchParams) {
	if (isBrowser) {
		history.pushState(
			{},
			document.title,
			`${location.origin}${location.pathname}?${query.toString()}`,
		);
	}
}

export function processEmojis(
	emojis: Emoji[],
	{ filter, genders, group, subgroup, skinTones }: FilterFields,
): Emoji[] {
	const list: Emoji[] = [];

	// eslint-disable-next-line complexity
	emojis.forEach((emoji) => {
		if (!genders && emoji.gender !== undefined) {
			return;
		}

		if (group >= 0 && emoji.group !== group) {
			return;
		}

		if (subgroup >= 0 && emoji.subgroup !== subgroup) {
			return;
		}

		// This randomly is a set and i'm not sure why...
		if (emoji.shortcodes) {
			const shortcodes: string[] = [];

			emoji.shortcodes.forEach((code) => {
				// @ts-expect-error Debugging
				if (code instanceof Set || Array.isArray(code)) {
					// eslint-disable-next-line no-console
					console.debug('Non-string found', emoji.hexcode, emoji);

					[...code].forEach((sc) => {
						shortcodes.push(String(sc));
					});
				} else if (typeof code === 'string') {
					shortcodes.push(code);
				}
			});

			// eslint-disable-next-line no-param-reassign
			emoji.shortcodes = shortcodes;
		}

		if (filter) {
			const matchesAnnotation = emoji.label.toLocaleLowerCase().includes(filter);
			const matchesAnyShortcodes = emoji.shortcodes?.some((shortcode) =>
				shortcode?.toLocaleLowerCase().includes(filter),
			);
			const matchesAnyTags = emoji.tags?.some((tag) => tag.toLocaleLowerCase().includes(filter));

			if (!matchesAnnotation && !matchesAnyShortcodes && !matchesAnyTags) {
				return;
			}
		}

		list.push(emoji);

		if (skinTones && emoji.skins) {
			list.push(...emoji.skins);
		}
	});

	list.sort((a, b) => (a.order ?? 10_000) - (b.order ?? 10_000));

	return list;
}

type GroupLabels = Record<string, string>;

export function mapGroups(groups: (GroupMessage | SubgroupMessage)[]): GroupLabels {
	const labels: GroupLabels = {};

	groups.forEach((item) => {
		labels[item.order] = item.message;
	});

	return labels;
}

export interface FilterFields {
	filter: string;
	locale: Locale;
	genders: boolean;
	group: number;
	subgroup: number;
	skinTones: boolean;
	shortcodePresets: ShortcodePreset[];
}

export interface FilterProps {
	defaultShortcodePresets?: ShortcodePreset[];
	disabled?: boolean;
	hideCldr?: boolean;
	onChange: (fields: FilterFields) => void;
}

const query = new URLSearchParams(isBrowser ? location.search : '');

// eslint-disable-next-line complexity
export default function Filters({
	defaultShortcodePresets = ['emojibase'],
	disabled = false,
	hideCldr = false,
	onChange,
}: FilterProps) {
	const [inputFilter, setInputFilter] = useState(query.get('filter') ?? '');
	const [filter, setFilter] = useState(inputFilter);
	const [locale, setLocale] = useState<Locale>((query.get('locale') ?? 'en') as 'en');
	const [group, setGroup] = useState(Number(query.get('group') ?? -1));
	const [groupLabels, setGroupLabels] = useState<GroupLabels>();
	const [groupsMeta, setGroupsMeta] = useState<GroupDataset>();
	const [subgroup, setSubgroup] = useState(Number(query.get('subgroup') ?? -1));
	const [subgroupLabels, setSubgroupLabels] = useState<GroupLabels>();
	const [genders, setGenders] = useState(query.get('genders') === 'true');
	const [skinTones, setSkinTones] = useState(query.get('skinTones') === 'true');
	const [shortcodePresets, setShortcodePresets] = useState<ShortcodePreset[]>(
		decodeURIComponent(query.get('shortcodePresets') ?? defaultShortcodePresets.join(','))
			.split(',')
			.filter(Boolean) as ShortcodePreset[],
	);

	useEffect(() => {
		// We cant declare these as standard npm dependencies,
		// since it conflicts with the local workspace and these packages
		// may not have been built yet. So we unfortunately need to
		// fetch the data from the CDN...
		async function load() {
			const metaTranslations = await fetchMessages('en', { version: CDN_VERSION });

			setGroupLabels(mapGroups(metaTranslations.groups));
			setSubgroupLabels(mapGroups(metaTranslations.subgroups));

			const groupsMetaDataset = await fetchFromCDN<GroupDataset>('meta/groups.json', {
				version: CDN_VERSION,
			});

			setGroupsMeta(groupsMetaDataset);
		}

		void load();
	}, []);

	useEffect(() => {
		updateUrlFragment(query);

		onChange({
			filter,
			locale,
			genders,
			group,
			subgroup,
			skinTones,
			shortcodePresets,
		});
	}, [filter, locale, genders, group, subgroup, skinTones, shortcodePresets, onChange]);

	const doFilterChange = debounce((value: string) => {
		query.set('filter', value);
		setFilter(value);
	}, 350);

	const handleFilterChange = useCallback(
		(event: React.FormEvent<HTMLInputElement>) => {
			event.persist();

			const { value } = event.currentTarget;

			setInputFilter(value);
			doFilterChange(value);
		},
		[doFilterChange],
	);

	const handleLocaleChange = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
		const { value } = event.currentTarget;

		query.set('locale', value);
		setLocale(value as Locale);
	}, []);

	const handleGroupChange = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
		const value = Number(event.currentTarget.value);

		query.set('group', String(value));
		query.set('subgroup', '-1');
		setGroup(value);
		setSubgroup(-1);
	}, []);

	const handleSubgroupChange = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
		const value = Number(event.currentTarget.value);

		query.set('subgroup', String(value));
		setSubgroup(value);
	}, []);

	const handleGenderChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
		const { checked } = event.currentTarget;

		query.set('genders', String(checked));
		setGenders(checked);
	}, []);

	const handleSkinToneChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
		const { checked } = event.currentTarget;

		query.set('skinTones', String(checked));
		setSkinTones(checked);
	}, []);

	const handleShortcodePresetChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
		const { checked, value } = event.currentTarget;

		setShortcodePresets((prev) => {
			let next = [...prev];
			const preset = value as ShortcodePreset;

			if (checked && !next.includes(preset)) {
				next.push(preset);
			} else {
				next = next.filter((p) => p !== preset);
			}

			next.sort();

			query.set('shortcodePresets', encodeURIComponent(next.join(',')));

			return next;
		});
	}, []);

	return (
		<div className={styles.browserFilters}>
			<div className="row">
				<div className="col col--3">
					<label htmlFor="filter">Annotation</label>

					<input
						disabled={disabled}
						id="filter"
						name="filter"
						type="search"
						value={inputFilter}
						onChange={handleFilterChange}
					/>
				</div>

				<div className="col col--3">
					<label htmlFor="locale">Locale</label>

					<select
						disabled={disabled}
						id="locale"
						name="locale"
						value={locale}
						onChange={handleLocaleChange}
					>
						{Object.entries(LOCALES)
							.sort((a, b) => a[1].localeCompare(b[1]))
							.map(([value, label]) => (
								<option key={value} value={value}>
									{label} ({value})
								</option>
							))}
					</select>
				</div>

				<div className="col col--3">
					<label htmlFor="group">Group</label>

					<select
						disabled={disabled || !groupsMeta || !groupLabels}
						id="group"
						name="group"
						value={group}
						onChange={handleGroupChange}
					>
						<option value="-1">(none)</option>

						{groupsMeta &&
							groupLabels &&
							Object.keys(groupsMeta.groups).map((id) => (
								<option key={id} value={id}>
									{upperFirst(groupLabels[id])}
								</option>
							))}
					</select>
				</div>

				<div className="col col--3">
					<label htmlFor="subgroup">Subgroup</label>

					<select
						disabled={disabled || !groupsMeta?.hierarchy[group] || !subgroupLabels}
						id="subgroup"
						name="subgroup"
						value={subgroup}
						onChange={handleSubgroupChange}
					>
						<option value="-1">(none)</option>

						{groupsMeta &&
							subgroupLabels &&
							(groupsMeta.hierarchy[group] || []).map((id) => (
								<option key={id} value={id}>
									{upperFirst(subgroupLabels[id])}
								</option>
							))}
					</select>
				</div>
			</div>

			<br />

			<div className="row">
				<div className="col col--3">
					<h4>Display</h4>

					<label className="label--inline" htmlFor="genders">
						<input
							checked={genders}
							disabled={disabled}
							id="genders"
							name="genders"
							type="checkbox"
							onChange={handleGenderChange}
						/>{' '}
						Genders?
					</label>

					<label className="label--inline" htmlFor="skinTones">
						<input
							checked={skinTones}
							disabled={disabled}
							id="skinTones"
							name="skinTones"
							type="checkbox"
							onChange={handleSkinToneChange}
						/>{' '}
						Skin tones?
					</label>
				</div>

				<div className="col col-9">
					<h4>Shortcode presets</h4>

					{Object.entries(PRESETS).map(([value, label]) => {
						if (value.includes('cldr') && hideCldr) {
							return null;
						}

						return (
							<label key={value} className="label--inline" htmlFor={`preset-${value}`}>
								<input
									checked={shortcodePresets.includes(value as ShortcodePreset)}
									disabled={disabled}
									id={`preset-${value}`}
									name="presets"
									type="checkbox"
									value={value}
									onChange={handleShortcodePresetChange}
								/>{' '}
								{label}
							</label>
						);
					})}
				</div>
			</div>
		</div>
	);
}
