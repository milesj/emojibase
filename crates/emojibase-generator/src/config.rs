//! Generator configuration: version constants, URLs, and locale list.

use emojibase_core::constants;

/// Configuration for a generator run.
#[derive(Debug, Clone)]
pub struct Config {
    /// Emoji specification version (e.g. `"17.0"`).
    pub emoji_version: String,
    /// Unicode version (e.g. `"17.0.0"`).
    pub unicode_version: String,
    /// CLDR version (e.g. `"48"`).
    pub cldr_version: String,
    /// Locales to generate data for.
    pub locales: Vec<String>,
    /// Output directory for generated datasets.
    pub output_dir: String,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            emoji_version: constants::LATEST_EMOJI_VERSION.to_string(),
            unicode_version: constants::LATEST_UNICODE_VERSION.to_string(),
            cldr_version: constants::LATEST_CLDR_VERSION.to_string(),
            locales: constants::SUPPORTED_LOCALES
                .iter()
                .map(|s| s.to_string())
                .collect(),
            output_dir: "packages/data".to_string(),
        }
    }
}
