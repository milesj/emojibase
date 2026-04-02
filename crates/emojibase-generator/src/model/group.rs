//! Group and subgroup definitions matching `emoji-test.txt` categories.

use std::collections::HashMap;

/// Group hierarchy: maps group name → list of subgroup names.
pub type GroupHierarchy = HashMap<String, Vec<String>>;

/// Well-known group names in order.
pub const GROUP_NAMES: &[&str] = &[
    "Smileys & Emotion",
    "People & Body",
    "Animals & Nature",
    "Food & Drink",
    "Travel & Places",
    "Activities",
    "Objects",
    "Symbols",
    "Flags",
    "Component",
];
