//! Hexcode formatting and manipulation utilities.

use emojibase_core::constants::{
    DARK_SKIN_MODIFIER, LIGHT_SKIN_MODIFIER, MEDIUM_DARK_SKIN_MODIFIER,
    MEDIUM_LIGHT_SKIN_MODIFIER, MEDIUM_SKIN_MODIFIER,
};
use emojibase_core::types::SkinTone;
use regex::Regex;
use std::sync::LazyLock;

/// Regex matching any skin modifier hexcode in a hyphen-separated sequence.
pub static SKIN_MODIFIER_PATTERN: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(r"(1F3FB|1F3FC|1F3FD|1F3FE|1F3FF)").unwrap());

/// Regex matching variation selectors.
pub static VARIATION_PATTERN: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(r"(FE0E|FE0F)").unwrap());

/// Regex matching ZWJ.
pub static ZWJ_PATTERN: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"200D").unwrap());

/// Regex matching gender sign hexcodes.
pub static GENDER_PATTERN: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(r"(2640|2642)").unwrap());

/// Regex matching ZWJ, variation selectors (for removal / stripping).
pub static SEQUENCE_REMOVAL_PATTERN: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(r"(200D|FE0E|FE0F)").unwrap());

/// Format a hexcode to uppercase with zero-padding to at least 4 characters.
pub fn format_hexcode(hex: &str) -> String {
    let upper = hex.to_uppercase();
    if upper.len() < 4 {
        format!("{upper:0>4}")
    } else {
        upper
    }
}

/// Resolve the [`SkinTone`] from a skin modifier hexcode.
pub fn skin_tone_from_modifier(modifier: &str) -> Option<SkinTone> {
    match modifier {
        s if s == LIGHT_SKIN_MODIFIER => Some(SkinTone::Light),
        s if s == MEDIUM_LIGHT_SKIN_MODIFIER => Some(SkinTone::MediumLight),
        s if s == MEDIUM_SKIN_MODIFIER => Some(SkinTone::Medium),
        s if s == MEDIUM_DARK_SKIN_MODIFIER => Some(SkinTone::MediumDark),
        s if s == DARK_SKIN_MODIFIER => Some(SkinTone::Dark),
        _ => None,
    }
}

/// Extract all skin tones present in a hexcode sequence.
pub fn extract_skin_tones(hexcode: &str) -> Vec<SkinTone> {
    SKIN_MODIFIER_PATTERN
        .find_iter(hexcode)
        .filter_map(|m| skin_tone_from_modifier(m.as_str()))
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_format_hexcode() {
        assert_eq!(format_hexcode("23"), "0023");
        assert_eq!(format_hexcode("1f600"), "1F600");
    }

    #[test]
    fn test_extract_skin_tones() {
        let tones = extract_skin_tones("1F468-1F3FB-200D-1F4BB");
        assert_eq!(tones, vec![SkinTone::Light]);

        let tones = extract_skin_tones("1F469-1F3FD-200D-1F91D-200D-1F468-1F3FF");
        assert_eq!(tones, vec![SkinTone::Medium, SkinTone::Dark]);
    }
}
