//! Parse `emoji-test.txt` for group, subgroup, order, and qualification.
//!
//! ```text
//! # group: Smileys & Emotion
//! # subgroup: face-smiling
//! 1F600 ; fully-qualified # 😀 E1.0 grinning face
//! ```

use crate::model::emoji::EmojiMetadataMap;
use crate::model::hexcode::format_hexcode;
use emojibase_core::types::{Qualifier, Subgroup};

use super::extract_emoji_version;

/// Parse `emoji-test.txt` and return a map of hexcode → [`EmojiMetadata`].
///
/// Also populates the group hierarchy.
pub fn parse_test_file(
    content: &str,
) -> (EmojiMetadataMap, Vec<String>, Vec<(u8, String)>) {
    let mut map = EmojiMetadataMap::new();
    let mut group_names: Vec<String> = Vec::new();
    let mut subgroup_entries: Vec<(u8, String)> = Vec::new();

    let mut current_group: u8 = 0;
    let mut current_subgroup: Subgroup = 0;
    let mut order: u32 = 0;

    for raw_line in content.lines() {
        let trimmed = raw_line.trim();

        if trimmed.starts_with("# group:") {
            let group_name = trimmed.strip_prefix("# group:").unwrap().trim().to_string();
            current_group = group_names.len() as u8;
            group_names.push(group_name);
            continue;
        }

        if trimmed.starts_with("# subgroup:") {
            let subgroup_name = trimmed.strip_prefix("# subgroup:").unwrap().trim().to_string();
            current_subgroup = subgroup_entries.len() as Subgroup;
            subgroup_entries.push((current_group, subgroup_name));
            continue;
        }

        if trimmed.is_empty() || trimmed.starts_with('#') {
            continue;
        }

        // Data line: "1F600 ; fully-qualified # ..."
        let (data_part, comment) = if let Some(idx) = trimmed.find('#') {
            (trimmed[..idx].trim(), Some(trimmed[idx + 1..].trim()))
        } else {
            (trimmed, None)
        };

        let fields: Vec<&str> = data_part.split(';').collect();
        if fields.is_empty() {
            continue;
        }

        // Build hexcode from space-separated codepoints.
        let hexcode = fields[0]
            .trim()
            .split_whitespace()
            .map(|part| format_hexcode(part))
            .collect::<Vec<_>>()
            .join("-");

        // Qualifier
        let qualifier = fields.get(1).and_then(|q| match q.trim() {
            "fully-qualified" => Some(Qualifier::FullyQualified),
            "minimally-qualified" => Some(Qualifier::MinimallyQualified),
            "unqualified" => Some(Qualifier::Unqualified),
            _ => None,
        });

        order += 1;

        map.insert(
            hexcode,
            crate::model::emoji::EmojiMetadata {
                group: current_group,
                subgroup: current_subgroup,
                order,
                qualifier,
            },
        );
    }

    (map, group_names, subgroup_entries)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_test_file() {
        let content = "\
# group: Smileys & Emotion

# subgroup: face-smiling
1F600                                      ; fully-qualified     # 😀 E1.0 grinning face
1F603                                      ; fully-qualified     # 😃 E0.6 grinning face with big eyes
";
        let (map, groups, subgroups) = parse_test_file(content);
        assert_eq!(groups, vec!["Smileys & Emotion"]);
        assert_eq!(subgroups, vec![(0, "face-smiling".to_string())]);
        assert!(map.contains_key("1F600"));
        assert!(map.contains_key("1F603"));
        let entry = &map["1F600"];
        assert_eq!(entry.group, 0);
        assert_eq!(entry.order, 1);
        assert_eq!(entry.qualifier, Some(Qualifier::FullyQualified));
    }
}
