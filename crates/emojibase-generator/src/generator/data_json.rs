//! Generate `data.json` and `data.raw.json` output files.

use crate::model::emoji::EmojiMap;
use emojibase_core::types::{Emoji, EmoticonValue, Presentation, SkinToneValue};
use std::collections::HashMap;
use std::path::Path;

/// Convert the internal [`EmojiMap`] to the final output [`Emoji`] list.
///
/// The `tags_map` provides CLDR keyword tags, and `emoticon_map` provides
/// emoticon associations. The resulting list is sorted by display order.
pub fn build_data_list(
    emoji_map: &EmojiMap,
    tags_map: &HashMap<String, Vec<String>>,
) -> Vec<Emoji> {
    let mut list: Vec<Emoji> = emoji_map
        .values()
        .map(|gen| {
            let version: f32 = gen.version.parse().unwrap_or(0.0);
            let emoji_char =
                emojibase_core::unicode::from_hexcode_to_unicode(&gen.hexcode);
            let text_char = if gen.presentation == Presentation::Text {
                emoji_char.clone()
            } else {
                String::new()
            };

            // Build skin variations if present.
            let skins = gen.modifications.as_ref().map(|mods| {
                let mut skin_list: Vec<Emoji> = mods
                    .values()
                    .map(|m| {
                        let skin_emoji =
                            emojibase_core::unicode::from_hexcode_to_unicode(&m.hexcode);
                        Emoji {
                            hexcode: m.hexcode.clone(),
                            label: m.description.clone(),
                            emoji: skin_emoji.clone(),
                            text: String::new(),
                            presentation: m.presentation,
                            version: m.version.parse().unwrap_or(0.0),
                            order: Some(m.order),
                            group: Some(m.group),
                            subgroup: Some(m.subgroup),
                            tags: None,
                            shortcodes: None,
                            emoticon: None,
                            gender: m.gender,
                            tone: Some(m.tone.clone()),
                            skins: None,
                        }
                    })
                    .collect();
                skin_list.sort_by_key(|s| s.hexcode.clone());
                skin_list
            });

            Emoji {
                hexcode: gen.hexcode.clone(),
                label: gen.description.clone(),
                emoji: emoji_char,
                text: text_char,
                presentation: gen.presentation,
                version,
                order: Some(gen.order),
                group: Some(gen.group),
                subgroup: Some(gen.subgroup),
                tags: tags_map.get(&gen.hexcode).cloned(),
                shortcodes: gen.shortcodes.clone(),
                emoticon: gen.emoticon.clone(),
                gender: gen.gender,
                tone: None,
                skins,
            }
        })
        .collect();

    list.sort_by_key(|e| e.order.unwrap_or(u32::MAX));
    list
}

/// Write the data list to `data.json` (with shortcodes) and `data.raw.json`
/// (without shortcodes) under the given output directory.
pub fn write_data_json(
    list: &[Emoji],
    output_dir: &Path,
) -> Result<(), Box<dyn std::error::Error>> {
    std::fs::create_dir_all(output_dir)?;

    // data.raw.json — no shortcodes
    let raw_list: Vec<Emoji> = list
        .iter()
        .map(|e| {
            let mut raw = e.clone();
            raw.shortcodes = None;
            if let Some(skins) = &mut raw.skins {
                for s in skins {
                    s.shortcodes = None;
                }
            }
            raw
        })
        .collect();

    let raw_path = output_dir.join("data.raw.json");
    let raw_json = serde_json::to_string_pretty(&raw_list)?;
    std::fs::write(&raw_path, &raw_json)?;

    // data.json — with shortcodes
    let data_path = output_dir.join("data.json");
    let data_json = serde_json::to_string_pretty(list)?;
    std::fs::write(&data_path, &data_json)?;

    Ok(())
}
