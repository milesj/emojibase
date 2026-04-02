//! Parse `UnicodeData.txt` for character names.
//!
//! Each line looks like:
//! ```text
//! 0023;NUMBER SIGN;Po;0;ON;;;;;N;;;;;
//! ```
//! Field 0 = hexcode, field 1 = character name.

use crate::model::emoji::UnicodeNamesMap;
use crate::model::hexcode::format_hexcode;

/// Parse `UnicodeData.txt` and return a hexcode → name map.
pub fn parse_unicode_names(content: &str) -> UnicodeNamesMap {
    let mut map = UnicodeNamesMap::new();

    for raw_line in content.lines() {
        let trimmed = raw_line.trim();
        if trimmed.is_empty() || trimmed.starts_with('#') {
            continue;
        }

        let fields: Vec<&str> = trimmed.splitn(3, ';').collect();
        if fields.len() < 2 {
            continue;
        }

        let hexcode = format_hexcode(fields[0].trim());
        let name = fields[1].trim().to_string();

        if !name.is_empty() && !name.starts_with('<') {
            map.insert(hexcode, name);
        }
    }

    map
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_names() {
        let content = "\
0023;NUMBER SIGN;Po;0;ON;;;;;N;;;;;
0024;DOLLAR SIGN;Sc;0;ET;;;;;N;;;;;
";
        let map = parse_unicode_names(content);
        assert_eq!(map.get("0023"), Some(&"NUMBER SIGN".to_string()));
        assert_eq!(map.get("0024"), Some(&"DOLLAR SIGN".to_string()));
    }
}
