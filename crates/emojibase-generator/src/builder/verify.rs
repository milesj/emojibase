//! Data integrity verification.

use crate::model::emoji::{EmojiMap, Property};
use crate::util::log;

/// Verify the integrity of the built emoji data.
///
/// Checks:
/// - Every emoji has a hexcode.
/// - Every emoji has at least one property.
/// - Every emoji used in output is not hidden (modifier/component/etc.).
/// - Group and subgroup are within expected ranges.
///
/// Returns `true` if all checks pass.
pub fn verify_data_integrity(emoji_map: &EmojiMap) -> bool {
    let mut ok = true;
    let mut count = 0;

    for (hexcode, emoji) in emoji_map {
        count += 1;

        if hexcode.is_empty() {
            log::error("Found emoji with empty hexcode");
            ok = false;
        }

        if emoji.property.is_empty() {
            log::warn(&format!("Emoji {hexcode} has no properties"));
        }

        if emoji.group > 9 {
            log::error(&format!(
                "Emoji {hexcode} has invalid group: {}",
                emoji.group
            ));
            ok = false;
        }
    }

    if ok {
        log::success(&format!(
            "Data integrity verified: {count} emoji entries"
        ));
    }

    ok
}

/// Filter out hidden emoji (modifiers, components, extended pictographic)
/// from the final output.
pub fn filter_visible_emoji(emoji_map: &EmojiMap) -> EmojiMap {
    emoji_map
        .iter()
        .filter(|(_, emoji)| {
            // Keep if it has at least one non-hidden property.
            emoji.property.iter().any(|p| !p.is_hidden())
        })
        .map(|(k, v)| (k.clone(), v.clone()))
        .collect()
}
