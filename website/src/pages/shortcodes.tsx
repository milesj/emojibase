import React, { useCallback, useState } from 'react';
import { Emoji, fetchEmojis, fetchShortcodes, ShortcodePreset, ShortcodesDataset } from 'emojibase';
import Layout from '@theme/Layout';
import Filters, { FilterFields, PRESETS, processEmojis } from '../components/Filters';
import Shortcodes from '../components/Shortcodes';
// import cldrDataset from 'emojibase-data/en/shortcodes/cldr.raw.json';
// import emojibaseDataset from 'emojibase-data/en/shortcodes/emojibase.raw.json';
// import emojibaseLegacyDataset from 'emojibase-data/en/shortcodes/emojibase-legacy.raw.json';
// import githubDataset from 'emojibase-data/en/shortcodes/github.raw.json';
// import iamcalDataset from 'emojibase-data/en/shortcodes/iamcal.raw.json';
// import joypixelsDataset from 'emojibase-data/en/shortcodes/joypixels.raw.json';

function noop<T>(value: T): T {
	return value;
}

function isAllSameShortcodes(shortcodes: (string[] | string)[]) {
	let lastCode = '';

	if (shortcodes.length === 0) {
		return false;
	}

	for (const shortcode of shortcodes) {
		const code = Array.isArray(shortcode) ? shortcode.sort().join(',') : shortcode;

		if (!lastCode) {
			lastCode = code;
		} else if (lastCode !== code) {
			return false;
		}
	}

	return true;
}

export default function ShortcodesTable() {
	const [loading, setLoading] = useState(false);
	const [emojis, setEmojis] = useState<Emoji[]>([]);
	const [cldrShortcodes, setCldrShortcodes] = useState<ShortcodesDataset>({});
	const [shortcodes, setShortcodes] = useState<ShortcodesDataset[]>([]);
	const [presets, setPresets] = useState<ShortcodePreset[]>([
		'emojibase',
		'github',
		'iamcal',
		'joypixels',
	]);

	const handleFilterChange = useCallback(
		async (fields: FilterFields) => {
			const { locale, shortcodePresets } = fields;

			setLoading(true);

			const emojisData = await fetchEmojis(locale, {
				shortcodes: presets,
				version: 'next',
			});

			const cldrDataset = await fetchShortcodes(locale, 'cldr', { version: 'next' });

			const allDatasets = await Promise.all(
				shortcodePresets.map((preset) =>
					fetchShortcodes(locale, preset, { version: 'next' }).catch(noop),
				),
			);

			setEmojis(processEmojis(emojisData, fields));
			setCldrShortcodes(cldrDataset);
			setShortcodes(allDatasets);
			setPresets(shortcodePresets);
			setLoading(false);
		},
		[presets],
	);

	return (
		<Layout
			description="Table of all shortcodes for every emoji character."
			title="Shortcodes table"
		>
			<main className="table-container">
				<h2>Shortcodes table</h2>

				<Filters
					hideCldr
					defaultShortcodePresets={presets}
					disabled={loading}
					onChange={handleFilterChange}
				/>

				<div className="table-responsive">
					<table>
						<thead>
							<tr>
								<th colSpan={2} />
								<th>CLDR</th>
								{presets.map((preset) => (
									<th key={`header-${preset}`}>{PRESETS[preset]}</th>
								))}
								<th />
							</tr>
						</thead>
						<tbody>
							{loading && (
								<tr>
									<td className="text--center" colSpan={4 + presets.length}>
										Loading emojis…
									</td>
								</tr>
							)}

							{!loading && (
								<>
									<tr>
										<td className="text--center" colSpan={4 + presets.length}>
											{emojis.length.toLocaleString()} emojis
										</td>
									</tr>

									{emojis.map((emoji) => {
										const isAllSame = isAllSameShortcodes(
											shortcodes.map((data) => data[emoji.hexcode]),
										);

										return (
											<tr key={emoji.hexcode} data-hexcode={emoji.hexcode}>
												<td className="text--center emoji--large">{emoji.emoji || emoji.text}</td>
												<td>
													<div>{emoji.label}</div>
													<div className="text--muted no-wrap">{emoji.hexcode}</div>
												</td>
												<td>
													<Shortcodes preset="cldr" shortcodes={cldrShortcodes[emoji.hexcode]} />
												</td>
												{isAllSame ? (
													<td colSpan={presets.length}>
														<Shortcodes
															preset={presets[0]}
															shortcodes={shortcodes[0][emoji.hexcode]}
														/>
													</td>
												) : (
													presets.map((preset, i) => (
														<td key={emoji.hexcode + preset}>
															<Shortcodes
																preset={preset}
																shortcodes={shortcodes[i][emoji.hexcode]}
															/>
														</td>
													))
												)}
												<td className="text--center emoji--large">{emoji.emoji || emoji.text}</td>
											</tr>
										);
									})}
								</>
							)}
						</tbody>
					</table>
				</div>
			</main>
		</Layout>
	);
}
