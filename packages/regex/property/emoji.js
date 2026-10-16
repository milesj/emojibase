// Emoji in emoji presentation, after the definition of fully-qualified emoji in UTS #51 (ED-18):
// every emoji is default-emoji, followed by FE0F, or the base of a skin tone, and may be joined to
// more of them with ZWJ. Well-formed sequences that are not RGI emoji match too.
module.exports =
	/(?:\p{RI}\p{RI}|[#*0-9]️⃣|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}|(?![#*0-9])\p{Emoji}️|\p{Emoji_Presentation}(?!︎))(?:[\u{E0020}-\u{E007E}]+\u{E007F})?(?:‍(?:\p{RI}\p{RI}|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}|(?![#*0-9])\p{Emoji}️|\p{Emoji_Presentation}(?!︎))(?:[\u{E0020}-\u{E007E}]+\u{E007F})?)*/u;
