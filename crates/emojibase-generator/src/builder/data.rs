//! Merge parsed data from multiple sources into a unified [`EmojiMap`].

use crate::model::emoji::{
    EmojiDataMap, EmojiMap, EmojiMetadataMap, EmojiVariationMap, GeneratorEmoji, UnicodeNamesMap,
};
use emojibase_core::types::Presentation;

/// Join emoji data, metadata, variations, and names into a single [`EmojiMap`].
///
/// This is the central merge step that produces the internal representation
/// from which all output formats are derived.
pub fn build_emoji_data(
    data: &EmojiDataMap,
    metadata: &EmojiMetadataMap,
    variations: &EmojiVariationMap,
    names: &UnicodeNamesMap,
) -> EmojiMap {
    let mut map = EmojiMap::new();

    for (hexcode, emoji_data) in data {
        let meta = metadata.get(hexcode);
        let name = names.get(hexcode).cloned().unwrap_or_default();
        let variation = variations.get(hexcode).cloned();

        let group = meta.map(|m| m.group).unwrap_or(0);
        let subgroup = meta.map(|m| m.subgroup).unwrap_or(0);
        let order = meta.map(|m| m.order).unwrap_or(0);

        let emoji = GeneratorEmoji {
            description: emoji_data.description.clone(),
            hexcode: hexcode.clone(),
            property: emoji_data.property.clone(),
            presentation: emoji_data.presentation,
            unicode_version: emoji_data
                .unicode_version
                .map(|v| format!("{v:.1}")),
            version: format!("{:.1}", emoji_data.version),
            gender: emoji_data.gender,
            group,
            order,
            subgroup,
            name,
            modifications: None,
            qualifiers: None,
            variations: variation,
            shortcodes: None,
            emoticon: None,
        };

        map.insert(hexcode.clone(), emoji);
    }

    map
}

/// Merge a secondary data map (e.g. from sequences) into the primary map.
pub fn merge_data_maps(primary: &mut EmojiDataMap, secondary: EmojiDataMap) {
    for (hexcode, data) in secondary {
        primary
            .entry(hexcode)
            .and_modify(|existing| {
                // Merge properties.
                for prop in &data.property {
                    if !existing.property.contains(prop) {
                        existing.property.push(*prop);
                    }
                }
                // Upgrade presentation if needed.
                if data.presentation == Presentation::Emoji {
                    existing.presentation = Presentation::Emoji;
                }
            })
            .or_insert(data);
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::model::emoji::EmojiData;
    use crate::model::emoji::Property;

    #[test]
    fn test_merge_data_maps() {
        let mut primary = EmojiDataMap::new();
        primary.insert(
            "1F600".to_string(),
            EmojiData {
                description: "grinning face".to_string(),
                hexcode: "1F600".to_string(),
                property: vec![Property::Emoji],
                presentation: Presentation::Text,
                unicode_version: Some(6.1),
                version: 1.0,
                gender: None,
            },
        );

        let mut secondary = EmojiDataMap::new();
        secondary.insert(
            "1F600".to_string(),
            EmojiData {
                description: "grinning face".to_string(),
                hexcode: "1F600".to_string(),
                property: vec![Property::EmojiPresentation],
                presentation: Presentation::Emoji,
                unicode_version: Some(6.1),
                version: 1.0,
                gender: None,
            },
        );

        merge_data_maps(&mut primary, secondary);

        let emoji = &primary["1F600"];
        assert!(emoji.property.contains(&Property::Emoji));
        assert!(emoji.property.contains(&Property::EmojiPresentation));
        assert_eq!(emoji.presentation, Presentation::Emoji);
    }
}
