//! Generate version mapping files: `versions/emoji.json`, `versions/unicode.json`.

use crate::model::emoji::{EmojiMap, VersionMap};
use std::path::Path;

/// Build a version map: version string → list of hexcodes introduced in that version.
pub fn build_version_map(emoji_map: &EmojiMap) -> VersionMap {
    let mut map = VersionMap::new();

    for (hexcode, emoji) in emoji_map {
        map.entry(emoji.version.clone())
            .or_default()
            .push(hexcode.clone());
    }

    // Sort hexcodes within each version.
    for hexcodes in map.values_mut() {
        hexcodes.sort();
    }

    map
}

/// Write version files.
pub fn write_versions(
    emoji_map: &EmojiMap,
    output_dir: &Path,
) -> Result<(), Box<dyn std::error::Error>> {
    let versions_dir = output_dir.join("versions");
    std::fs::create_dir_all(&versions_dir)?;

    let version_map = build_version_map(emoji_map);
    std::fs::write(
        versions_dir.join("emoji.json"),
        serde_json::to_string_pretty(&version_map)?,
    )?;

    Ok(())
}
