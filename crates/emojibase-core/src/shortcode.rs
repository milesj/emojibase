//! Shortcode utilities: joining, parsing, and formatting.

use crate::types::Shortcode;

/// Wrap a shortcode in colons: `"grinning"` → `":grinning:"`.
pub fn shortcode_to_colons(shortcode: &str) -> String {
    format!(":{shortcode}:")
}

/// Remove surrounding colons if present: `":grinning:"` → `"grinning"`.
pub fn shortcode_from_colons(text: &str) -> Shortcode {
    text.trim_start_matches(':')
        .trim_end_matches(':')
        .to_string()
}

/// Slugify a label string into a shortcode-friendly form.
///
/// Converts to lowercase, replaces whitespace and special chars with
/// underscores, strips non-alphanumeric/underscore characters, and collapses
/// consecutive underscores.
pub fn slugify(label: &str) -> String {
    let mut slug = String::with_capacity(label.len());
    for ch in label.chars() {
        if ch.is_ascii_alphanumeric() {
            slug.push(ch.to_ascii_lowercase());
        } else if ch == ' ' || ch == '-' || ch == ':' || ch == '&' {
            slug.push('_');
        }
        // else: drop the character
    }
    // Collapse consecutive underscores and trim leading/trailing.
    let collapsed = slug
        .split('_')
        .filter(|s| !s.is_empty())
        .collect::<Vec<_>>()
        .join("_");
    collapsed
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_colons() {
        assert_eq!(shortcode_to_colons("grinning"), ":grinning:");
        assert_eq!(shortcode_from_colons(":grinning:"), "grinning");
        assert_eq!(shortcode_from_colons("grinning"), "grinning");
    }

    #[test]
    fn test_slugify() {
        assert_eq!(slugify("Grinning Face"), "grinning_face");
        assert_eq!(slugify("smileys & emotion"), "smileys_emotion");
        assert_eq!(slugify("face-smiling"), "face_smiling");
        assert_eq!(slugify("flag: Japan"), "flag_japan");
    }
}
