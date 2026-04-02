use serde::{Deserialize, Serialize};

// ---------------------------------------------------------------------------
// Primitive newtypes / aliases
// ---------------------------------------------------------------------------

/// Hex representation of one or more Unicode codepoints, separated by hyphens.
///
/// Examples: `"1F600"`, `"1F468-1F3FB-200D-1F4BB"`.
pub type Hexcode = String;

/// The actual emoji or text character(s).
pub type Unicode = String;

/// ASCII emoticon string, e.g. `":)"`.
pub type Emoticon = String;

/// A platform-specific shortcode **without** surrounding colons.
pub type Shortcode = String;

/// Numeric Unicode codepoint.
pub type CodePoint = u32;

// ---------------------------------------------------------------------------
// Small enums encoded as integers (to match the JSON schema)
// ---------------------------------------------------------------------------

/// Presentation style: `0` = text, `1` = emoji.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[repr(u8)]
pub enum Presentation {
    Text = 0,
    Emoji = 1,
}

/// Gender: `0` = female, `1` = male.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[repr(u8)]
pub enum Gender {
    Female = 0,
    Male = 1,
}

/// Qualification level per UTS #51.
///
/// - `0` – fully qualified (RGI)
/// - `1` – minimally qualified
/// - `2` – unqualified
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[repr(u8)]
pub enum Qualifier {
    FullyQualified = 0,
    MinimallyQualified = 1,
    Unqualified = 2,
}

/// Fitzpatrick skin-tone index (1–5, light → dark).
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[repr(u8)]
pub enum SkinTone {
    Light = 1,
    MediumLight = 2,
    Medium = 3,
    MediumDark = 4,
    Dark = 5,
}

// ---------------------------------------------------------------------------
// Group / Subgroup
// ---------------------------------------------------------------------------

/// Categorical group index (0–9).
pub type Group = u8;

/// Categorical subgroup index.
pub type Subgroup = u8;

/// Well-known group keys matching the Unicode emoji-test.txt categories.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "kebab-case")]
pub enum GroupKey {
    SmileysEmotion,
    PeopleBody,
    AnimalsNature,
    FoodDrink,
    TravelPlaces,
    Activities,
    Objects,
    Symbols,
    Flags,
    Component,
}

impl GroupKey {
    /// Return the string key used in JSON datasets.
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::SmileysEmotion => "smileys-emotion",
            Self::PeopleBody => "people-body",
            Self::AnimalsNature => "animals-nature",
            Self::FoodDrink => "food-drink",
            Self::TravelPlaces => "travel-places",
            Self::Activities => "activities",
            Self::Objects => "objects",
            Self::Symbols => "symbols",
            Self::Flags => "flags",
            Self::Component => "component",
        }
    }
}

/// Skin-tone key strings used in messages datasets.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "kebab-case")]
pub enum SkinToneKey {
    Light,
    MediumLight,
    Medium,
    MediumDark,
    Dark,
}

impl SkinToneKey {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Light => "light",
            Self::MediumLight => "medium-light",
            Self::Medium => "medium",
            Self::MediumDark => "medium-dark",
            Self::Dark => "dark",
        }
    }
}

// ---------------------------------------------------------------------------
// Skin-tone value (single or multi)
// ---------------------------------------------------------------------------

/// A skin-tone value that can be a single tone or a tuple of tones
/// (for multi-person emoji such as handshake with mixed tones).
#[derive(Debug, Clone, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SkinToneValue {
    Single(SkinTone),
    Multi(Vec<SkinTone>),
}

// ---------------------------------------------------------------------------
// Emoticon value (single or list)
// ---------------------------------------------------------------------------

/// An emoticon that may be a single string or a list of variants.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(untagged)]
pub enum EmoticonValue {
    Single(Emoticon),
    Multi(Vec<Emoticon>),
}

// ---------------------------------------------------------------------------
// Main Emoji struct (full format – data.json)
// ---------------------------------------------------------------------------

/// A fully-described emoji entry, matching the `data.json` / `data.raw.json`
/// schema produced by the generator.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Emoji {
    /// Hex representation of the emoji codepoint(s).
    pub hexcode: Hexcode,

    /// CLDR-localized label / description.
    pub label: String,

    /// Emoji-presentation character.
    pub emoji: Unicode,

    /// Text-presentation character (may be empty).
    pub text: Unicode,

    /// Default presentation type.
    #[serde(rename = "type")]
    pub presentation: Presentation,

    /// Emoji version when this character was introduced.
    pub version: f32,

    /// Display order in an emoji picker.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub order: Option<u32>,

    /// Group index (0–9).
    #[serde(skip_serializing_if = "Option::is_none")]
    pub group: Option<Group>,

    /// Subgroup index.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub subgroup: Option<Subgroup>,

    /// CLDR keyword tags for searching.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub tags: Option<Vec<String>>,

    /// Platform-specific shortcodes (without colons).
    #[serde(skip_serializing_if = "Option::is_none")]
    pub shortcodes: Option<Vec<Shortcode>>,

    /// ASCII emoticon(s) associated with this emoji.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub emoticon: Option<EmoticonValue>,

    /// Gender, if this is a gendered variant.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub gender: Option<Gender>,

    /// Skin-tone value(s), if this is a skin-toned variant.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub tone: Option<SkinToneValue>,

    /// Skin-tone variations nested under the base emoji.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub skins: Option<Vec<Emoji>>,
}

// ---------------------------------------------------------------------------
// Compact Emoji struct (compact.json)
// ---------------------------------------------------------------------------

/// A compact emoji entry with fewer fields, for bandwidth-sensitive use.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct CompactEmoji {
    pub hexcode: Hexcode,
    pub label: String,
    pub unicode: Unicode,
    pub group: Group,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub order: Option<u32>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub tags: Option<Vec<String>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub shortcodes: Option<Vec<Shortcode>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub emoticon: Option<EmoticonValue>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub skins: Option<Vec<CompactEmoji>>,
}

// ---------------------------------------------------------------------------
// Messages dataset
// ---------------------------------------------------------------------------

/// A single translated group / subgroup / skin-tone entry.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct MessageEntry {
    pub key: String,
    pub message: String,
    pub order: u32,
}

/// The `messages.json` dataset structure.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct MessagesDataset {
    pub groups: Vec<MessageEntry>,
    pub subgroups: Vec<MessageEntry>,
    #[serde(rename = "skinTones")]
    pub skin_tones: Vec<MessageEntry>,
}

// ---------------------------------------------------------------------------
// Other dataset types
// ---------------------------------------------------------------------------

/// `shortcodes/{preset}.json` – maps hexcode → shortcode list.
pub type ShortcodesDataset = std::collections::HashMap<Hexcode, Vec<Shortcode>>;

/// `meta/hexcodes.json` – maps hexcode → qualifier map.
pub type HexcodesDataset =
    std::collections::HashMap<Hexcode, std::collections::HashMap<Hexcode, Qualifier>>;

/// `versions/emoji.json` / `versions/unicode.json` – maps version string → hexcode list.
pub type VersionDataset = std::collections::HashMap<String, Vec<Hexcode>>;

/// `meta/groups.json` – group dataset with hierarchy.
pub type GroupDataset = std::collections::HashMap<String, serde_json::Value>;
