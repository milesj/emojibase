//! Unicode ↔ hexcode ↔ codepoint conversion helpers.

use crate::types::{CodePoint, Hexcode, Unicode};

/// Convert a hexcode string (e.g. `"1F600"`) to a vector of numeric codepoints.
///
/// Multi-codepoint hexcodes are separated by hyphens: `"1F468-200D-1F4BB"`.
pub fn from_hexcode_to_codepoints(hexcode: &str) -> Vec<CodePoint> {
    hexcode
        .split('-')
        .filter_map(|part| u32::from_str_radix(part, 16).ok())
        .collect()
}

/// Convert a vector of numeric codepoints to a hexcode string.
pub fn from_codepoints_to_hexcode(codepoints: &[CodePoint]) -> Hexcode {
    codepoints
        .iter()
        .map(|cp| format!("{cp:X}"))
        .collect::<Vec<_>>()
        .join("-")
}

/// Convert numeric codepoints to a Unicode string.
pub fn from_codepoints_to_unicode(codepoints: &[CodePoint]) -> Unicode {
    codepoints
        .iter()
        .filter_map(|&cp| char::from_u32(cp))
        .collect()
}

/// Convert a hexcode string directly to a Unicode string.
pub fn from_hexcode_to_unicode(hexcode: &str) -> Unicode {
    let codepoints = from_hexcode_to_codepoints(hexcode);
    from_codepoints_to_unicode(&codepoints)
}

/// Convert a Unicode string to a hexcode.
pub fn from_unicode_to_hexcode(unicode: &str) -> Hexcode {
    let codepoints: Vec<CodePoint> = unicode.chars().map(|c| c as u32).collect();
    from_codepoints_to_hexcode(&codepoints)
}

/// Strip variation selectors (`FE0E`, `FE0F`) and ZWJ (`200D`) from a hexcode.
pub fn strip_hexcode(hexcode: &str) -> Hexcode {
    hexcode
        .split('-')
        .filter(|part| !matches!(*part, "200D" | "FE0E" | "FE0F"))
        .collect::<Vec<_>>()
        .join("-")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_hexcode_to_codepoints() {
        assert_eq!(from_hexcode_to_codepoints("1F600"), vec![0x1F600]);
        assert_eq!(
            from_hexcode_to_codepoints("1F468-200D-1F4BB"),
            vec![0x1F468, 0x200D, 0x1F4BB]
        );
    }

    #[test]
    fn test_hexcode_to_unicode() {
        assert_eq!(from_hexcode_to_unicode("1F600"), "😀");
    }

    #[test]
    fn test_unicode_to_hexcode() {
        assert_eq!(from_unicode_to_hexcode("😀"), "1F600");
    }

    #[test]
    fn test_strip_hexcode() {
        assert_eq!(strip_hexcode("1F468-200D-1F4BB"), "1F468-1F4BB");
        assert_eq!(strip_hexcode("1F600-FE0F"), "1F600");
        assert_eq!(strip_hexcode("1F600"), "1F600");
    }
}
