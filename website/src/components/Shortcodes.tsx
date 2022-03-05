import React from 'react';
import { ShortcodePreset } from 'emojibase';

export interface ShortcodesProps {
	preset: ShortcodePreset;
	shortcodes?: Set<string> | string[] | string;
}

export default function Shortcodes({ preset, shortcodes }: ShortcodesProps) {
	if (!shortcodes) {
		return null;
	}

	const list: string[] = [];

	// There's a weird bug where shortcdes in production are rendered as `:[object Set]:`,
	// but it works completely fine locally. Even after a ton of debugging, I cannot
	// figure it out, so I'm adding this function to just check a bunch of scenarios.
	const handleValue = (value: ShortcodesProps['shortcodes'], depth: number = 0) => {
		if (depth > 1) {
			return;
		}

		if (typeof value === 'string') {
			list.push(value);
		} else if (value instanceof Set || Array.isArray(value)) {
			[...value].forEach((v) => {
				handleValue(v, depth + 1);
			});
		}
	};

	handleValue(shortcodes);

	return (
		<>
			{list.sort().map((s) => (
				<div key={`${preset}-${s}`}>{`:${s}:`}</div>
			))}
		</>
	);
}
