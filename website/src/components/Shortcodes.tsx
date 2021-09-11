import React from 'react';
import { ShortcodePreset } from 'emojibase';

export interface ShortcodesProps {
	preset: ShortcodePreset;
	shortcodes?: string[] | string;
}

export default function Shortcodes({ preset, shortcodes }: ShortcodesProps) {
	if (!shortcodes || shortcodes.length === 0) {
		return null;
	}

	return (
		<>
			{(Array.isArray(shortcodes) ? shortcodes : [shortcodes]).sort().map((s) => (
				<div key={`${preset}-${s}`}>{`:${s}:`}</div>
			))}
		</>
	);
}
