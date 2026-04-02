//! Re-export core hexcode utilities plus generator-specific helpers.

pub use emojibase_core::unicode::*;

use crate::model::hexcode::format_hexcode;

/// Expand a hexcode range `"1F600..1F64F"` into individual hexcodes,
/// or return a single hexcode unchanged.
pub fn spread_hexcode(hexcode: &str) -> Vec<String> {
    if let Some((start_str, end_str)) = hexcode.split_once("..") {
        let start = u32::from_str_radix(start_str.trim(), 16).unwrap_or(0);
        let end = u32::from_str_radix(end_str.trim(), 16).unwrap_or(0);
        (start..=end).map(|cp| format!("{cp:X}")).collect()
    } else {
        vec![format_hexcode(hexcode)]
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_spread_single() {
        assert_eq!(spread_hexcode("1F600"), vec!["1F600"]);
    }

    #[test]
    fn test_spread_range() {
        let result = spread_hexcode("1F600..1F603");
        assert_eq!(result, vec!["1F600", "1F601", "1F602", "1F603"]);
    }
}
