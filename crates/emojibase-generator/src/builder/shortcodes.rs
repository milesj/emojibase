//! Generate shortcodes for emoji using various presets.

use crate::model::emoji::{EmojiMap, ShortcodeMap};
use crate::model::shortcode::ShortcodePreset;
use crate::util::slug::slugify;

/// Generate emojibase-style shortcodes from emoji descriptions.
pub fn generate_emojibase_shortcodes(emoji_map: &EmojiMap) -> ShortcodeMap {
    let mut map = ShortcodeMap::new();

    for (hexcode, emoji) in emoji_map {
        let slug = slugify(&emoji.description);
        if !slug.is_empty() {
            map.insert(hexcode.clone(), vec![slug]);
        }
    }

    map
}

/// Generate CLDR-based shortcodes from emoji annotations.
pub fn generate_cldr_shortcodes(
    emoji_map: &EmojiMap,
    tags_map: &std::collections::HashMap<String, Vec<String>>,
) -> ShortcodeMap {
    let mut map = ShortcodeMap::new();

    for (hexcode, emoji) in emoji_map {
        let shortcode = slugify(&emoji.description);
        if !shortcode.is_empty() {
            let mut codes = vec![shortcode];

            // Add tag-based shortcodes.
            if let Some(tags) = tags_map.get(hexcode) {
                for tag in tags.iter().take(2) {
                    let tag_slug = slugify(tag);
                    if !tag_slug.is_empty() && !codes.contains(&tag_slug) {
                        codes.push(tag_slug);
                    }
                }
            }

            map.insert(hexcode.clone(), codes);
        }
    }

    map
}

/// Apply generated shortcodes to the emoji map.
pub fn apply_shortcodes(emoji_map: &mut EmojiMap, shortcodes: &ShortcodeMap) {
    for (hexcode, codes) in shortcodes {
        if let Some(emoji) = emoji_map.get_mut(hexcode) {
            emoji.shortcodes = Some(codes.clone());
        }
    }
}
