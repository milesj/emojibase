//! Generate `compact.json` and `compact.raw.json` output files.

use emojibase_core::types::{CompactEmoji, Emoji, Presentation};
use std::path::Path;

/// Convert a full [`Emoji`] to a [`CompactEmoji`].
pub fn to_compact(emoji: &Emoji) -> CompactEmoji {
    let unicode = if emoji.presentation == Presentation::Emoji {
        emoji.emoji.clone()
    } else {
        emoji.text.clone()
    };

    let skins = emoji.skins.as_ref().map(|skins| {
        skins.iter().map(to_compact).collect()
    });

    CompactEmoji {
        hexcode: emoji.hexcode.clone(),
        label: emoji.label.clone(),
        unicode,
        group: emoji.group.unwrap_or(0),
        order: emoji.order,
        tags: emoji.tags.clone(),
        shortcodes: emoji.shortcodes.clone(),
        emoticon: emoji.emoticon.clone(),
        skins,
    }
}

/// Write compact data to `compact.json` and `compact.raw.json`.
pub fn write_compact_json(
    emoji_list: &[Emoji],
    output_dir: &Path,
) -> Result<(), Box<dyn std::error::Error>> {
    std::fs::create_dir_all(output_dir)?;

    let compact_list: Vec<CompactEmoji> = emoji_list.iter().map(to_compact).collect();

    // compact.raw.json — no shortcodes
    let raw_list: Vec<CompactEmoji> = compact_list
        .iter()
        .map(|c| {
            let mut raw = c.clone();
            raw.shortcodes = None;
            if let Some(skins) = &mut raw.skins {
                for s in skins {
                    s.shortcodes = None;
                }
            }
            raw
        })
        .collect();

    let raw_path = output_dir.join("compact.raw.json");
    let raw_json = serde_json::to_string_pretty(&raw_list)?;
    std::fs::write(&raw_path, &raw_json)?;

    let compact_path = output_dir.join("compact.json");
    let compact_json = serde_json::to_string_pretty(&compact_list)?;
    std::fs::write(&compact_path, &compact_json)?;

    Ok(())
}
