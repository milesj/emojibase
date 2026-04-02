//! Version constants, supported locales, and well-known codepoints.

use crate::types::{GroupKey, SkinTone, SkinToneKey};

// ---------------------------------------------------------------------------
// Latest version info
// ---------------------------------------------------------------------------

/// Latest supported Emoji specification version.
pub const LATEST_EMOJI_VERSION: &str = "17.0";

/// Latest Unicode version.
pub const LATEST_UNICODE_VERSION: &str = "17.0.0";

/// Latest CLDR version.
pub const LATEST_CLDR_VERSION: &str = "48";

// ---------------------------------------------------------------------------
// All known Emoji versions
// ---------------------------------------------------------------------------

pub const EMOJI_VERSIONS: &[&str] = &[
    "1.0", "2.0", "3.0", "4.0", "5.0", "11.0", "12.0", "12.1", "13.0", "13.1", "14.0", "15.0",
    "15.1", "16.0", "17.0",
];

/// All known Unicode versions.
pub const UNICODE_VERSIONS: &[&str] = &[
    "6.0", "6.1", "6.2", "6.3", "7.0", "8.0", "9.0", "10.0", "11.0", "12.0", "12.1", "13.0",
    "14.0", "15.0", "15.1", "16.0", "17.0",
];

// ---------------------------------------------------------------------------
// Supported locales
// ---------------------------------------------------------------------------

pub const SUPPORTED_LOCALES: &[&str] = &[
    "bn", "da", "de", "en", "en-gb", "es", "es-mx", "et", "fi", "fr", "hi", "hu", "it", "ja",
    "ko", "lt", "ms", "nb", "nl", "pl", "pt", "ru", "sv", "th", "uk", "vi", "zh", "zh-hant",
];

// ---------------------------------------------------------------------------
// Special Unicode codepoints (as hex strings)
// ---------------------------------------------------------------------------

/// Zero-width joiner.
pub const ZERO_WIDTH_JOINER: &str = "200D";

/// Variation selector 15 – force text presentation.
pub const TEXT_VARIATION_SELECTOR: &str = "FE0E";

/// Variation selector 16 – force emoji presentation.
pub const EMOJI_VARIATION_SELECTOR: &str = "FE0F";

// Skin-tone modifier hexcodes (Fitzpatrick scale).
pub const LIGHT_SKIN_MODIFIER: &str = "1F3FB";
pub const MEDIUM_LIGHT_SKIN_MODIFIER: &str = "1F3FC";
pub const MEDIUM_SKIN_MODIFIER: &str = "1F3FD";
pub const MEDIUM_DARK_SKIN_MODIFIER: &str = "1F3FE";
pub const DARK_SKIN_MODIFIER: &str = "1F3FF";

/// All skin-tone modifier hex strings, indexed by [`SkinTone`] ordinal − 1.
pub const SKIN_MODIFIER_HEXCODES: &[&str] = &[
    LIGHT_SKIN_MODIFIER,
    MEDIUM_LIGHT_SKIN_MODIFIER,
    MEDIUM_SKIN_MODIFIER,
    MEDIUM_DARK_SKIN_MODIFIER,
    DARK_SKIN_MODIFIER,
];

// Gender sign hexcodes.
pub const FEMALE_SIGN: &str = "2640";
pub const MALE_SIGN: &str = "2642";

// Well-known person hexcodes.
pub const PERSON: &str = "1F9D1";
pub const MAN: &str = "1F468";
pub const WOMAN: &str = "1F469";
pub const BLACK_FLAG: &str = "1F3F4";

// ---------------------------------------------------------------------------
// Group helpers
// ---------------------------------------------------------------------------

/// Ordered list of group keys matching their numeric index (0–9).
pub const GROUP_KEYS: &[GroupKey] = &[
    GroupKey::SmileysEmotion,
    GroupKey::PeopleBody,
    GroupKey::AnimalsNature,
    GroupKey::FoodDrink,
    GroupKey::TravelPlaces,
    GroupKey::Activities,
    GroupKey::Objects,
    GroupKey::Symbols,
    GroupKey::Flags,
    GroupKey::Component,
];

/// Ordered list of skin-tone keys (light → dark).
pub const SKIN_TONE_KEYS: &[SkinToneKey] = &[
    SkinToneKey::Light,
    SkinToneKey::MediumLight,
    SkinToneKey::Medium,
    SkinToneKey::MediumDark,
    SkinToneKey::Dark,
];

/// Ordered list of [`SkinTone`] values.
pub const SKIN_TONES: &[SkinTone] = &[
    SkinTone::Light,
    SkinTone::MediumLight,
    SkinTone::Medium,
    SkinTone::MediumDark,
    SkinTone::Dark,
];

// ---------------------------------------------------------------------------
// Regional indicator mapping (for flag construction)
// ---------------------------------------------------------------------------

/// Maps regional-indicator hexcodes to their letter (A–Z).
pub const REGIONAL_INDICATORS: &[(&str, char)] = &[
    ("1F1E6", 'A'),
    ("1F1E7", 'B'),
    ("1F1E8", 'C'),
    ("1F1E9", 'D'),
    ("1F1EA", 'E'),
    ("1F1EB", 'F'),
    ("1F1EC", 'G'),
    ("1F1ED", 'H'),
    ("1F1EE", 'I'),
    ("1F1EF", 'J'),
    ("1F1F0", 'K'),
    ("1F1F1", 'L'),
    ("1F1F2", 'M'),
    ("1F1F3", 'N'),
    ("1F1F4", 'O'),
    ("1F1F5", 'P'),
    ("1F1F6", 'Q'),
    ("1F1F7", 'R'),
    ("1F1F8", 'S'),
    ("1F1F9", 'T'),
    ("1F1FA", 'U'),
    ("1F1FB", 'V'),
    ("1F1FC", 'W'),
    ("1F1FD", 'X'),
    ("1F1FE", 'Y'),
    ("1F1FF", 'Z'),
];
