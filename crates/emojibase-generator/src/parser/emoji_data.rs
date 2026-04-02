//! Parse `emoji-data.txt` into [`EmojiDataMap`].
//!
//! Each line looks like:
//! ```text
//! 1F600         ; Emoji_Presentation   # 6.1  [1] (😀) grinning face
//! 1F3FB..1F3FF  ; Emoji_Modifier       # 8.0  [5] (🏻..🏿) light/dark skin tone
//! ```

use crate::model::emoji::{EmojiData, EmojiDataMap, Property};
use crate::model::hexcode::format_hexcode;
use crate::parser::{extract_emoji_version, emoji_version_to_unicode_version, parse_unicode_file};
use crate::util::hexcode::spread_hexcode;
use emojibase_core::types::Presentation;

/// Parse the full content of `emoji-data.txt` and return a map of hexcode → [`EmojiData`].
pub fn parse_emoji_data(content: &str) -> EmojiDataMap {
    let lines = parse_unicode_file(content);
    let mut map = EmojiDataMap::new();

    for line in &lines {
        // Field 1 = property name
        let property_str = line.fields.get(1).map(|s| s.as_str()).unwrap_or("");
        let property = match Property::from_str_name(property_str) {
            Some(p) => p,
            None => continue,
        };

        // Extract version from comment
        let emoji_version = line
            .comment
            .as_deref()
            .and_then(extract_emoji_version)
            .unwrap_or(0.0);

        let unicode_version = if emoji_version > 0.0 {
            Some(emoji_version_to_unicode_version(emoji_version))
        } else {
            None
        };

        // Determine presentation from property
        let presentation = if property == Property::EmojiPresentation {
            Presentation::Emoji
        } else {
            Presentation::Text
        };

        // Description from comment (after the parenthesized char)
        let description = line
            .comment
            .as_deref()
            .and_then(|c| {
                // Format: "6.1  [1] (😀) grinning face"
                c.rfind(')').map(|idx| c[idx + 1..].trim().to_string())
            })
            .unwrap_or_default();

        // Expand hexcode ranges
        let hexcodes = spread_hexcode(&line.hexcode);
        for hex in hexcodes {
            let hex = format_hexcode(&hex);
            let entry = map.entry(hex.clone()).or_insert_with(|| EmojiData {
                description: description.clone(),
                hexcode: hex,
                property: Vec::new(),
                presentation,
                unicode_version,
                version: emoji_version,
                gender: None,
            });
            if !entry.property.contains(&property) {
                entry.property.push(property);
            }
            // Upgrade presentation if we see Emoji_Presentation
            if property == Property::EmojiPresentation {
                entry.presentation = Presentation::Emoji;
            }
        }
    }

    map
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_single_line() {
        let content = "1F600 ; Emoji_Presentation # 6.1 [1] (😀) grinning face\n";
        let map = parse_emoji_data(content);
        assert!(map.contains_key("1F600"));
        let emoji = &map["1F600"];
        assert_eq!(emoji.presentation, Presentation::Emoji);
        assert!(emoji.property.contains(&Property::EmojiPresentation));
    }

    #[test]
    fn test_parse_range() {
        let content = "1F3FB..1F3FF ; Emoji_Modifier # 8.0 [5] (🏻..🏿) skin tone\n";
        let map = parse_emoji_data(content);
        assert_eq!(map.len(), 5);
        assert!(map.contains_key("1F3FB"));
        assert!(map.contains_key("1F3FF"));
    }
}
