// Possible emoji, after the EBNF in UTS #51 (section 1.4.9): an emoji with an optional skin tone,
// presentation selector, or tags, joined to more of them with ZWJ. Keycap bases (#, *, 0-9) only
// count as part of a keycap. Well-formed sequences that are not RGI emoji match too.
module.exports =
	/(?:\p{RI}\p{RI}|[#*0-9]️?⃣|(?![#*0-9])\p{Emoji}(?:\p{Emoji_Modifier}|️|︎|[\u{E0020}-\u{E007E}]+\u{E007F})?)(?:‍(?:\p{RI}\p{RI}|(?![#*0-9])\p{Emoji}(?:\p{Emoji_Modifier}|️|[\u{E0020}-\u{E007E}]+\u{E007F})?))*/u;
