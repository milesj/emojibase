//! Apply CLDR annotations (labels and tags) to emoji data.

use crate::model::emoji::{CldrAnnotationMap, EmojiMap};

/// Merge CLDR annotations into the emoji map.
///
/// For each emoji, if a CLDR annotation exists, the `description` field
/// is updated with the localized label, and tags are stored for later use.
///
/// Returns a map of hexcode → tags for use in output generation.
pub fn apply_annotations(
    emoji_map: &mut EmojiMap,
    annotations: &CldrAnnotationMap,
) -> std::collections::HashMap<String, Vec<String>> {
    let mut tags_map = std::collections::HashMap::new();

    for (hexcode, emoji) in emoji_map.iter_mut() {
        if let Some(annotation) = annotations.get(hexcode) {
            if !annotation.annotation.is_empty() {
                emoji.description = annotation.annotation.clone();
            }
            if !annotation.tags.is_empty() {
                tags_map.insert(hexcode.clone(), annotation.tags.clone());
            }
        }
    }

    tags_map
}

/// Merge derived annotations (for modifier sequences, ZWJ sequences).
///
/// Derived annotations follow the same format but may fill in gaps
/// for sequences not covered by the primary annotation file.
pub fn apply_derived_annotations(
    emoji_map: &mut EmojiMap,
    derived: &CldrAnnotationMap,
    tags_map: &mut std::collections::HashMap<String, Vec<String>>,
) {
    for (hexcode, emoji) in emoji_map.iter_mut() {
        // Only apply if there's no existing annotation.
        if emoji.description.is_empty() || emoji.description == emoji.name {
            if let Some(annotation) = derived.get(hexcode) {
                if !annotation.annotation.is_empty() {
                    emoji.description = annotation.annotation.clone();
                }
                if !annotation.tags.is_empty() {
                    tags_map
                        .entry(hexcode.clone())
                        .or_insert_with(|| annotation.tags.clone());
                }
            }
        }
    }
}
