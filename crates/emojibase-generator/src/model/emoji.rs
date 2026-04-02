use emojibase_core::types::{
    EmoticonValue, Gender, Group, Hexcode, Presentation, Shortcode, SkinToneValue, Subgroup,
};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

// ---------------------------------------------------------------------------
// Unicode emoji property tags
// ---------------------------------------------------------------------------

/// Unicode emoji properties from `emoji-data.txt` and sequence files.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub enum Property {
    BasicEmoji,
    Emoji,
    EmojiPresentation,
    EmojiComponent,
    EmojiModifier,
    EmojiModifierBase,
    EmojiModifierSequence,
    EmojiKeycapSequence,
    EmojiFlagSequence,
    EmojiTagSequence,
    EmojiZwjSequence,
    EmojiCombiningSequence,
    ExtendedPictographic,
    RegionalIndicator,
    RgiEmojiFlagSequence,
    RgiEmojiModifierSequence,
    RgiEmojiTagSequence,
    RgiEmojiZwjSequence,
}

impl Property {
    /// Parse a property name from the Unicode data files.
    pub fn from_str_name(s: &str) -> Option<Self> {
        match s.trim() {
            "Basic_Emoji" => Some(Self::BasicEmoji),
            "Emoji" => Some(Self::Emoji),
            "Emoji_Presentation" => Some(Self::EmojiPresentation),
            "Emoji_Component" => Some(Self::EmojiComponent),
            "Emoji_Modifier" => Some(Self::EmojiModifier),
            "Emoji_Modifier_Base" => Some(Self::EmojiModifierBase),
            "Emoji_Modifier_Sequence" => Some(Self::EmojiModifierSequence),
            "Emoji_Keycap_Sequence" => Some(Self::EmojiKeycapSequence),
            "Emoji_Flag_Sequence" => Some(Self::EmojiFlagSequence),
            "Emoji_Tag_Sequence" => Some(Self::EmojiTagSequence),
            "Emoji_ZWJ_Sequence" => Some(Self::EmojiZwjSequence),
            "Emoji_Combining_Sequence" => Some(Self::EmojiCombiningSequence),
            "Extended_Pictographic" => Some(Self::ExtendedPictographic),
            "Regional_Indicator" => Some(Self::RegionalIndicator),
            "RGI_Emoji_Flag_Sequence" => Some(Self::RgiEmojiFlagSequence),
            "RGI_Emoji_Modifier_Sequence" => Some(Self::RgiEmojiModifierSequence),
            "RGI_Emoji_Tag_Sequence" => Some(Self::RgiEmojiTagSequence),
            "RGI_Emoji_ZWJ_Sequence" => Some(Self::RgiEmojiZwjSequence),
            _ => None,
        }
    }

    /// Whether this property should be hidden from the final output
    /// (modifier, component, extended pictographic, regional indicator).
    pub fn is_hidden(&self) -> bool {
        matches!(
            self,
            Self::EmojiModifier
                | Self::EmojiComponent
                | Self::ExtendedPictographic
                | Self::RegionalIndicator
        )
    }
}

// ---------------------------------------------------------------------------
// Internal emoji representation during building
// ---------------------------------------------------------------------------

/// Minimal emoji data parsed from `emoji-data.txt`.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EmojiData {
    pub description: String,
    pub hexcode: Hexcode,
    pub property: Vec<Property>,
    pub presentation: Presentation,
    pub unicode_version: Option<f32>,
    pub version: f32,
    pub gender: Option<Gender>,
}

/// Metadata extracted from `emoji-test.txt` (group, order, qualifiers).
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EmojiMetadata {
    pub group: Group,
    pub subgroup: Subgroup,
    pub order: u32,
    pub qualifier: Option<emojibase_core::types::Qualifier>,
}

/// Source information parsed from emoji-list.html.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EmojiSource {
    pub group: Group,
    pub subgroup: Subgroup,
}

/// Variation information (text / emoji presentation hexcodes).
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EmojiVariation {
    pub text: Hexcode,
    pub emoji: Hexcode,
    pub property: Option<Vec<Property>>,
}

/// A fully-merged internal emoji, combining all data sources.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GeneratorEmoji {
    // Core data
    pub description: String,
    pub hexcode: Hexcode,
    pub property: Vec<Property>,
    pub presentation: Presentation,
    pub unicode_version: Option<String>,
    pub version: String,
    pub gender: Option<Gender>,

    // Group info
    pub group: Group,
    pub order: u32,
    pub subgroup: Subgroup,

    // Name from UnicodeData.txt
    pub name: String,

    // Optional metadata
    pub modifications: Option<HashMap<Hexcode, EmojiModification>>,
    pub qualifiers: Option<HashMap<Hexcode, emojibase_core::types::Qualifier>>,
    pub variations: Option<EmojiVariation>,
    pub shortcodes: Option<Vec<Shortcode>>,
    pub emoticon: Option<EmoticonValue>,
}

/// A skin-tone modification of a base emoji.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EmojiModification {
    pub hexcode: Hexcode,
    pub description: String,
    pub property: Vec<Property>,
    pub presentation: Presentation,
    pub unicode_version: Option<String>,
    pub version: String,
    pub gender: Option<Gender>,
    pub group: Group,
    pub order: u32,
    pub subgroup: Subgroup,
    pub name: String,
    pub tone: SkinToneValue,
}

/// CLDR annotation for an emoji (localized label + tags).
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CldrAnnotation {
    pub annotation: String,
    pub tags: Vec<String>,
}

/// Map from hexcode to CLDR annotation.
pub type CldrAnnotationMap = HashMap<Hexcode, CldrAnnotation>;

/// Map from hexcode to emoji data (used during parsing).
pub type EmojiDataMap = HashMap<Hexcode, EmojiData>;

/// Map from hexcode to metadata.
pub type EmojiMetadataMap = HashMap<Hexcode, EmojiMetadata>;

/// Map from hexcode to source info.
pub type EmojiSourceMap = HashMap<Hexcode, EmojiSource>;

/// Map from hexcode to variation info.
pub type EmojiVariationMap = HashMap<Hexcode, EmojiVariation>;

/// Map from hexcode to generator emoji.
pub type EmojiMap = HashMap<Hexcode, GeneratorEmoji>;

/// Map from hexcode to Unicode character name.
pub type UnicodeNamesMap = HashMap<Hexcode, String>;

/// Emoticon map from hexcode to emoticon(s).
pub type EmoticonMap = HashMap<Hexcode, EmoticonValue>;

/// Shortcode map from hexcode to shortcode list.
pub type ShortcodeMap = HashMap<Hexcode, Vec<Shortcode>>;

/// Version map from version string to list of hexcodes.
pub type VersionMap = HashMap<String, Vec<Hexcode>>;
