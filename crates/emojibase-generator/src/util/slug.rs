//! String slugification for shortcode generation.

/// Slugify a string for use as an emoji shortcode.
///
/// - Converts to lowercase ASCII (via [`any_ascii`]).
/// - Replaces whitespace and special chars with underscores.
/// - Strips non-alphanumeric/underscore characters.
/// - Collapses consecutive underscores.
pub fn slugify(label: &str) -> String {
    let ascii = any_ascii::any_ascii(label);
    let mut slug = String::with_capacity(ascii.len());
    for ch in ascii.chars() {
        if ch.is_ascii_alphanumeric() {
            slug.push(ch.to_ascii_lowercase());
        } else if ch == ' ' || ch == '-' || ch == ':' || ch == '&' || ch == '\'' {
            slug.push('_');
        }
    }
    // Collapse consecutive underscores and trim.
    slug.split('_')
        .filter(|s| !s.is_empty())
        .collect::<Vec<_>>()
        .join("_")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_slugify_basic() {
        assert_eq!(slugify("Grinning Face"), "grinning_face");
        assert_eq!(slugify("woman: red hair"), "woman_red_hair");
    }

    #[test]
    fn test_slugify_non_latin() {
        // any_ascii transliterates non-Latin characters.
        let result = slugify("日本語");
        assert!(!result.is_empty());
    }
}
