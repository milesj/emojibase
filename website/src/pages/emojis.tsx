import React, { useCallback, useState } from 'react';
import { Emoji, fetchEmojis, ShortcodePreset } from 'emojibase';
import Layout from '@theme/Layout';
import Filters, { FilterFields, processEmojis } from '../components/Filters';
import Shortcodes from '../components/Shortcodes';
import { CDN_VERSION } from '../constants';

export default function EmojiList() {
	const [emojis, setEmojis] = useState<Emoji[]>([]);
	const [loading, setLoading] = useState(false);

	const handleFilterChange = useCallback(async (fields: FilterFields) => {
		const { locale, shortcodePresets } = fields;

		setLoading(true);

		const data = await fetchEmojis(locale, {
			shortcodes: shortcodePresets.map((preset) =>
				preset.includes('cldr') ? preset : `en/${preset}`,
			) as ShortcodePreset[],
			version: CDN_VERSION,
		});

		setEmojis(processEmojis(data, fields));
		setLoading(false);
	}, []);

	return (
		// @ts-expect-error Invalid types
		<Layout description="Table of all emojis across any supported locale." title="Emoji table">
			<main className="table-container">
				<h2>Emoji table</h2>

				{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
				<Filters disabled={loading} onChange={handleFilterChange} />

				<div className="table-responsive">
					<table>
						<thead>
							<tr>
								<th />
								<th>Annotation</th>
								<th>Shortcodes</th>
								<th>Tags</th>
							</tr>
						</thead>
						<tbody>
							{loading && (
								<tr>
									<td className="text--center" colSpan={4}>
										Loading emojis…
									</td>
								</tr>
							)}

							{!loading && (
								<>
									<tr>
										<td className="text--center" colSpan={4}>
											{emojis.length.toLocaleString()} emojis
										</td>
									</tr>

									{emojis.map((emoji) => (
										<tr key={emoji.hexcode} data-hexcode={emoji.hexcode}>
											<td className="text--center emoji--large">{emoji.emoji || emoji.text}</td>
											<td>
												{emoji.label}

												{emoji.emoticon && <span className="text--muted"> {emoji.emoticon}</span>}
											</td>
											<td>
												<Shortcodes preset="emojibase" shortcodes={emoji.shortcodes} />
											</td>
											<td>{emoji.tags?.join(', ')}</td>
										</tr>
									))}
								</>
							)}
						</tbody>
					</table>
				</div>
			</main>
		</Layout>
	);
}
