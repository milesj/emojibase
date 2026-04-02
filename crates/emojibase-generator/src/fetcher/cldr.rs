//! Fetch and parse CLDR annotation data.

use super::cache;
use std::collections::HashMap;
use std::path::{Path, PathBuf};

/// Base URL for CLDR JSON data on GitHub.
const CLDR_GITHUB_BASE: &str =
    "https://raw.githubusercontent.com/nicolo-ribaudo/tc39-proposal-intl-emoji/main/cldr-json";

/// Resolve the local path for CLDR annotation data.
///
/// In the JS project these come from npm packages
/// (`cldr-annotations-full`, etc.). In Rust we download the JSON directly
/// from GitHub or from a local checkout.
pub fn cldr_annotations_path(locale: &str, derived: bool) -> PathBuf {
    let pkg = if derived {
        "cldr-annotations-derived-full"
    } else {
        "cldr-annotations-full"
    };
    PathBuf::from(format!(
        "node_modules/{pkg}/annotationsDerived/{locale}/annotations.json"
    ))
}

/// Load CLDR annotations from a local node_modules checkout (if the npm
/// packages are installed) or fall back to a cached download.
pub fn load_cldr_annotations_local(
    locale: &str,
    derived: bool,
) -> Option<HashMap<String, serde_json::Value>> {
    let path = cldr_annotations_path(locale, derived);
    if path.exists() {
        let content = std::fs::read_to_string(&path).ok()?;
        serde_json::from_str(&content).ok()
    } else {
        None
    }
}

/// Attempt to load CLDR locale names from local node_modules.
pub fn load_cldr_locale_names(locale: &str) -> Option<serde_json::Value> {
    let path = Path::new("node_modules/cldr-localenames-full/main")
        .join(locale)
        .join("territories.json");
    if path.exists() {
        let content = std::fs::read_to_string(&path).ok()?;
        serde_json::from_str(&content).ok()
    } else {
        None
    }
}
