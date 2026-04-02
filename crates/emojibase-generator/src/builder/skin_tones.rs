//! Generate skin-tone variations for emoji that support modifiers.

use crate::model::emoji::{EmojiMap, EmojiModification, GeneratorEmoji, Property};
use crate::model::hexcode::{extract_skin_tones, SKIN_MODIFIER_PATTERN};
use emojibase_core::constants::SKIN_MODIFIER_HEXCODES;
use emojibase_core::types::SkinToneValue;
use std::collections::HashMap;

/// For each emoji with `Emoji_Modifier_Base` property, generate the five
/// single-skin-tone modifications and attach them to `modifications`.
pub fn apply_skin_tone_modifications(emoji_map: &mut EmojiMap) {
    let base_hexcodes: Vec<String> = emoji_map
        .iter()
        .filter(|(_, emoji)| emoji.property.contains(&Property::EmojiModifierBase))
        .map(|(hex, _)| hex.clone())
        .collect();

    for base_hex in base_hexcodes {
        let base = match emoji_map.get(&base_hex) {
            Some(e) => e.clone(),
            None => continue,
        };

        let mut modifications = HashMap::new();

        for (i, modifier_hex) in SKIN_MODIFIER_HEXCODES.iter().enumerate() {
            let modified_hexcode = format!("{base_hex}-{modifier_hex}");
            let tone = emojibase_core::constants::SKIN_TONES[i];

            let modification = EmojiModification {
                hexcode: modified_hexcode.clone(),
                description: base.description.clone(),
                property: base.property.clone(),
                presentation: base.presentation,
                unicode_version: base.unicode_version.clone(),
                version: base.version.clone(),
                gender: base.gender,
                group: base.group,
                order: base.order,
                subgroup: base.subgroup,
                name: base.name.clone(),
                tone: SkinToneValue::Single(tone),
            };

            modifications.insert(modified_hexcode, modification);
        }

        if let Some(emoji) = emoji_map.get_mut(&base_hex) {
            emoji.modifications = Some(modifications);
        }
    }
}

/// Detect multi-person skin tones from ZWJ sequences already in the map.
///
/// Sequences like `1F469-1F3FD-200D-1F91D-200D-1F468-1F3FF` have multiple
/// skin tone modifiers. These are extracted and associated with their
/// base (non-toned) sequence.
pub fn detect_multi_person_skin_tones(emoji_map: &mut EmojiMap) {
    let multi_skin_hexcodes: Vec<(String, Vec<emojibase_core::types::SkinTone>)> = emoji_map
        .keys()
        .filter_map(|hex| {
            let tones = extract_skin_tones(hex);
            if tones.len() > 1 {
                Some((hex.clone(), tones))
            } else {
                None
            }
        })
        .collect();

    for (hexcode, tones) in multi_skin_hexcodes {
        let base_hexcode = SKIN_MODIFIER_PATTERN.replace_all(&hexcode, "").to_string();
        // Clean up double hyphens from removed modifiers.
        let base_hexcode = base_hexcode.replace("--", "-");
        let base_hexcode = base_hexcode.trim_matches('-').to_string();

        if let Some(base_emoji) = emoji_map.get_mut(&base_hexcode) {
            let modifications = base_emoji.modifications.get_or_insert_with(HashMap::new);
            if !modifications.contains_key(&hexcode) {
                modifications.insert(
                    hexcode.clone(),
                    EmojiModification {
                        hexcode: hexcode.clone(),
                        description: base_emoji.description.clone(),
                        property: base_emoji.property.clone(),
                        presentation: base_emoji.presentation,
                        unicode_version: base_emoji.unicode_version.clone(),
                        version: base_emoji.version.clone(),
                        gender: base_emoji.gender,
                        group: base_emoji.group,
                        order: base_emoji.order,
                        subgroup: base_emoji.subgroup,
                        name: base_emoji.name.clone(),
                        tone: SkinToneValue::Multi(tones.clone()),
                    },
                );
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use emojibase_core::types::{Presentation, SkinTone};

    fn make_base_emoji(hexcode: &str) -> GeneratorEmoji {
        GeneratorEmoji {
            description: "test".to_string(),
            hexcode: hexcode.to_string(),
            property: vec![Property::EmojiModifierBase],
            presentation: Presentation::Emoji,
            unicode_version: Some("6.0".to_string()),
            version: "1.0".to_string(),
            gender: None,
            group: 0,
            order: 1,
            subgroup: 0,
            name: "TEST".to_string(),
            modifications: None,
            qualifiers: None,
            variations: None,
            shortcodes: None,
            emoticon: None,
        }
    }

    #[test]
    fn test_skin_tone_modifications() {
        let mut map = EmojiMap::new();
        map.insert("1F44D".to_string(), make_base_emoji("1F44D"));

        apply_skin_tone_modifications(&mut map);

        let emoji = &map["1F44D"];
        assert!(emoji.modifications.is_some());
        let mods = emoji.modifications.as_ref().unwrap();
        assert_eq!(mods.len(), 5);
        assert!(mods.contains_key("1F44D-1F3FB"));

        let light = &mods["1F44D-1F3FB"];
        assert_eq!(light.tone, SkinToneValue::Single(SkinTone::Light));
    }
}
