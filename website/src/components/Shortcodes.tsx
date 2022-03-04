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

	return (
		<>
			{(typeof shortcodes === 'string' ? [shortcodes] : [...shortcodes]).sort().map((s) => (
				<div key={`${preset}-${s}`}>{`:${s}:`}</div>
			))}
		</>
	);
}
