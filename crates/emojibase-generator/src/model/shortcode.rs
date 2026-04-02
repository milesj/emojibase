//! Shortcode preset definitions and metadata.

/// All supported shortcode presets.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum ShortcodePreset {
    /// CLDR-native locale-specific shortcodes.
    CldrNative,
    /// CLDR English-based shortcodes.
    Cldr,
    /// Discord shortcodes.
    Discord,
    /// Emojibase legacy shortcodes.
    EmojibaseLegacy,
    /// Emojibase native locale-specific shortcodes.
    EmojibaseNative,
    /// Default emojibase shortcodes.
    Emojibase,
    /// GitHub shortcodes.
    GitHub,
    /// IamCal shortcodes.
    IamCal,
    /// JoyPixels shortcodes.
    JoyPixels,
    /// Slack shortcodes (alias for IamCal).
    Slack,
}

impl ShortcodePreset {
    /// File name used in the `shortcodes/` output directory.
    pub fn file_name(&self) -> &'static str {
        match self {
            Self::CldrNative => "cldr-native",
            Self::Cldr => "cldr",
            Self::Discord => "discord",
            Self::EmojibaseLegacy => "emojibase-legacy",
            Self::EmojibaseNative => "emojibase-native",
            Self::Emojibase => "emojibase",
            Self::GitHub => "github",
            Self::IamCal => "iamcal",
            Self::JoyPixels => "joypixels",
            Self::Slack => "slack",
        }
    }

    /// All known presets.
    pub fn all() -> &'static [Self] {
        &[
            Self::CldrNative,
            Self::Cldr,
            Self::Discord,
            Self::EmojibaseLegacy,
            Self::EmojibaseNative,
            Self::Emojibase,
            Self::GitHub,
            Self::IamCal,
            Self::JoyPixels,
            Self::Slack,
        ]
    }
}
