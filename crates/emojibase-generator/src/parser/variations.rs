//! Parse `emoji-variation-sequences.txt`.
//!
//! Lines look like:
//! ```text
//! 0023 FE0E  ; text style;  # (1.1) NUMBER SIGN
//! 0023 FE0F  ; emoji style; # (6.0) NUMBER SIGN
//! ```

use crate::model::emoji::{EmojiVariation, EmojiVariationMap};
use crate::model::hexcode::format_hexcode;
use crate::parser::parse_unicode_file;

/// Parse the content of `emoji-variation-sequences.txt`.
pub fn parse_variations(content: &str) -> EmojiVariationMap {
    let lines = parse_unicode_file(content);
    let mut map = EmojiVariationMap::new();

    for line in &lines {
        // Field 0 = "0023 FE0E" or "0023 FE0F"
        let parts: Vec<&str> = line.hexcode.split_whitespace().collect();
        if parts.len() < 2 {
            continue;
        }

        let base_hex = format_hexcode(parts[0]);
        let selector = parts[1].to_uppercase();

        // Field 1 = "text style" or "emoji style"
        let style = line.fields.get(1).map(|s| s.as_str()).unwrap_or("");

        let entry = map.entry(base_hex.clone()).or_insert_with(|| EmojiVariation {
            text: String::new(),
            emoji: String::new(),
            property: None,
        });

        let full_hex = format!("{}-{}", base_hex, selector);
        if style.contains("text") || selector == "FE0E" {
            entry.text = full_hex;
        } else {
            entry.emoji = full_hex;
        }
    }

    map
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_variations() {
        let content = "\
0023 FE0E  ; text style;  # (1.1) NUMBER SIGN
0023 FE0F  ; emoji style; # (6.0) NUMBER SIGN
";
        let map = parse_variations(content);
        assert!(map.contains_key("0023"));
        let v = &map["0023"];
        assert_eq!(v.text, "0023-FE0E");
        assert_eq!(v.emoji, "0023-FE0F");
    }
}
