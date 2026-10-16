// Emoji in text presentation, after UTS #51 (ED-7, ED-8a): an emoji followed by FE0E, or a
// default-text emoji on its own. A default-text emoji followed by FE0F, ZWJ, or a skin tone is in
// emoji presentation instead. Keycap bases (#, *, 0-9) are left out.
module.exports =
	/(?![#*0-9])\p{Emoji}︎|(?![#*0-9])(?!\p{Emoji_Presentation})\p{Emoji}(?![️‍⃣\p{Emoji_Modifier}])/u;
