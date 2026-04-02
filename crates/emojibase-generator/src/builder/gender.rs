//! Gender modifier handling for emoji.

use crate::model::emoji::{EmojiMap, Property};
use emojibase_core::constants::{FEMALE_SIGN, MALE_SIGN};
use emojibase_core::types::Gender;

/// Detect gender from a hexcode sequence and set the `gender` field.
///
/// An emoji is considered gendered if its hexcode contains the
/// female sign (`2640`) or male sign (`2642`).
pub fn apply_gender(emoji_map: &mut EmojiMap) {
    let updates: Vec<(String, Gender)> = emoji_map
        .iter()
        .filter_map(|(hex, _)| {
            if hex.contains(FEMALE_SIGN) {
                Some((hex.clone(), Gender::Female))
            } else if hex.contains(MALE_SIGN) {
                Some((hex.clone(), Gender::Male))
            } else {
                None
            }
        })
        .collect();

    for (hex, gender) in updates {
        if let Some(emoji) = emoji_map.get_mut(&hex) {
            emoji.gender = Some(gender);
        }
    }
}

/// Check if an emoji has a gender-related property.
pub fn has_gender_property(emoji: &crate::model::emoji::GeneratorEmoji) -> bool {
    emoji.gender.is_some()
        || emoji
            .hexcode
            .contains(FEMALE_SIGN)
        || emoji
            .hexcode
            .contains(MALE_SIGN)
}
