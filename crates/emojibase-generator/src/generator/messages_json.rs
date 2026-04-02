//! Generate `messages.json` for localized group/subgroup/skin-tone labels.

use emojibase_core::constants::{GROUP_KEYS, SKIN_TONE_KEYS};
use emojibase_core::types::{MessageEntry, MessagesDataset};
use std::path::Path;

/// Build a messages dataset from group names and subgroup names.
pub fn build_messages(
    group_names: &[String],
    subgroup_entries: &[(u8, String)],
) -> MessagesDataset {
    let groups: Vec<MessageEntry> = group_names
        .iter()
        .enumerate()
        .map(|(i, name)| {
            let key = GROUP_KEYS
                .get(i)
                .map(|k| k.as_str().to_string())
                .unwrap_or_else(|| format!("group-{i}"));
            MessageEntry {
                key,
                message: name.clone(),
                order: i as u32,
            }
        })
        .collect();

    let subgroups: Vec<MessageEntry> = subgroup_entries
        .iter()
        .enumerate()
        .map(|(i, (_, name))| MessageEntry {
            key: name.clone(),
            message: name.clone(),
            order: i as u32,
        })
        .collect();

    let skin_tones: Vec<MessageEntry> = SKIN_TONE_KEYS
        .iter()
        .enumerate()
        .map(|(i, key)| MessageEntry {
            key: key.as_str().to_string(),
            message: format!("{} Skin Tone", capitalize(key.as_str())),
            order: i as u32,
        })
        .collect();

    MessagesDataset {
        groups,
        subgroups,
        skin_tones,
    }
}

/// Write the messages dataset to `messages.json`.
pub fn write_messages_json(
    messages: &MessagesDataset,
    output_dir: &Path,
) -> Result<(), Box<dyn std::error::Error>> {
    std::fs::create_dir_all(output_dir)?;
    let path = output_dir.join("messages.json");
    let json = serde_json::to_string_pretty(messages)?;
    std::fs::write(&path, &json)?;
    Ok(())
}

fn capitalize(s: &str) -> String {
    let mut chars = s.chars();
    match chars.next() {
        None => String::new(),
        Some(c) => c.to_uppercase().chain(chars).collect(),
    }
}
