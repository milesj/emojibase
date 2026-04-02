//! Generate metadata files: `meta/groups.json`, `meta/unicode.json`, etc.

use crate::model::emoji::EmojiMap;
use std::collections::HashMap;
use std::path::Path;

/// Build group metadata from parsed group/subgroup names.
pub fn build_group_metadata(
    group_names: &[String],
    subgroup_entries: &[(u8, String)],
) -> serde_json::Value {
    let mut groups = serde_json::Map::new();

    for (i, name) in group_names.iter().enumerate() {
        let subgroups: Vec<&str> = subgroup_entries
            .iter()
            .filter(|(g, _)| *g as usize == i)
            .map(|(_, name)| name.as_str())
            .collect();

        let mut group_obj = serde_json::Map::new();
        group_obj.insert("order".to_string(), serde_json::json!(i));
        group_obj.insert("key".to_string(), serde_json::json!(name));
        group_obj.insert(
            "subgroups".to_string(),
            serde_json::json!(subgroups),
        );
        groups.insert(i.to_string(), serde_json::Value::Object(group_obj));
    }

    serde_json::Value::Object(groups)
}

/// Build the unicode metadata (all hexcodes in the dataset).
pub fn build_unicode_metadata(emoji_map: &EmojiMap) -> Vec<String> {
    let mut hexcodes: Vec<String> = emoji_map.keys().cloned().collect();
    hexcodes.sort();
    hexcodes
}

/// Build the unicode names map (hexcode → character name).
pub fn build_unicode_names(emoji_map: &EmojiMap) -> HashMap<String, String> {
    emoji_map
        .iter()
        .map(|(hex, emoji)| (hex.clone(), emoji.name.clone()))
        .collect()
}

/// Write metadata files to the `meta/` directory.
pub fn write_metadata(
    emoji_map: &EmojiMap,
    group_names: &[String],
    subgroup_entries: &[(u8, String)],
    output_dir: &Path,
) -> Result<(), Box<dyn std::error::Error>> {
    let meta_dir = output_dir.join("meta");
    std::fs::create_dir_all(&meta_dir)?;

    // meta/groups.json
    let groups = build_group_metadata(group_names, subgroup_entries);
    std::fs::write(
        meta_dir.join("groups.json"),
        serde_json::to_string_pretty(&groups)?,
    )?;

    // meta/unicode.json
    let unicode = build_unicode_metadata(emoji_map);
    std::fs::write(
        meta_dir.join("unicode.json"),
        serde_json::to_string_pretty(&unicode)?,
    )?;

    // meta/unicode-names.json
    let names = build_unicode_names(emoji_map);
    std::fs::write(
        meta_dir.join("unicode-names.json"),
        serde_json::to_string_pretty(&names)?,
    )?;

    Ok(())
}
