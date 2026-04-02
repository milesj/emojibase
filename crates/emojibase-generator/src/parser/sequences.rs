//! Parse `emoji-sequences.txt` and `emoji-zwj-sequences.txt`.
//!
//! Lines look like:
//! ```text
//! 1F468 200D 2764 FE0F 200D 1F468 ; RGI_Emoji_ZWJ_Sequence ; couple with heart: man, man # E2.0
//! ```

use crate::model::emoji::{EmojiData, EmojiDataMap, Property};
use crate::model::hexcode::format_hexcode;
use crate::parser::{extract_emoji_version, emoji_version_to_unicode_version, parse_unicode_file};
use emojibase_core::types::Presentation;

/// Parse an emoji sequence file and return a hexcode → [`EmojiData`] map.
///
/// `default_property` should be the property to assign when none is specified
/// in the data (e.g. `Property::EmojiZwjSequence` for the ZWJ file).
pub fn parse_sequences(content: &str, default_property: Property) -> EmojiDataMap {
    let lines = parse_unicode_file(content);
    let mut map = EmojiDataMap::new();

    for line in &lines {
        // Convert space-separated codepoints to hyphen-separated hexcode.
        let hexcode = line
            .hexcode
            .split_whitespace()
            .map(|part| format_hexcode(part))
            .collect::<Vec<_>>()
            .join("-");

        // Property from field 1, or use default.
        let property = line
            .fields
            .get(1)
            .and_then(|s| Property::from_str_name(s))
            .unwrap_or(default_property);

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

        // Description from field 2 (if present) or comment.
        let description = line
            .fields
            .get(2)
            .filter(|s| !s.is_empty())
            .cloned()
            .or_else(|| {
                line.comment.as_deref().and_then(|c| {
                    c.rfind(')')
                        .map(|idx| c[idx + 1..].trim().to_string())
                        .or_else(|| Some(c.to_string()))
                })
            })
            .unwrap_or_default();

        let entry = map.entry(hexcode.clone()).or_insert_with(|| EmojiData {
            description,
            hexcode: hexcode.clone(),
            property: Vec::new(),
            presentation: Presentation::Emoji,
            unicode_version,
            version: emoji_version,
            gender: None,
        });

        if !entry.property.contains(&property) {
            entry.property.push(property);
        }
    }

    map
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_zwj_sequence() {
        let content = "1F468 200D 2764 FE0F 200D 1F468 ; RGI_Emoji_ZWJ_Sequence # E2.0 [1] (👨‍❤️‍👨) couple with heart: man, man\n";
        let map = parse_sequences(content, Property::EmojiZwjSequence);
        assert!(map.contains_key("1F468-200D-2764-FE0F-200D-1F468"));
    }
}
