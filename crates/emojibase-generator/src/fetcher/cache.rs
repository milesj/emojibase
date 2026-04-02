//! File-based caching for downloaded resources.

use std::path::{Path, PathBuf};

/// Resolve the default cache directory (`<project>/.cache`).
pub fn cache_dir() -> PathBuf {
    let dir = PathBuf::from(".cache");
    if !dir.exists() {
        std::fs::create_dir_all(&dir).expect("failed to create cache directory");
    }
    dir
}

/// Return the cached file path for a given URL.
pub fn cache_path_for(url: &str) -> PathBuf {
    // Create a filesystem-safe key from the URL.
    let key: String = url
        .chars()
        .map(|c| if c.is_ascii_alphanumeric() || c == '.' { c } else { '_' })
        .collect();
    cache_dir().join(key)
}

/// Read a cached file if it exists and is not empty.
pub fn read_cache(url: &str) -> Option<String> {
    let path = cache_path_for(url);
    if path.exists() {
        let content = std::fs::read_to_string(&path).ok()?;
        if !content.is_empty() {
            return Some(content);
        }
    }
    None
}

/// Write content to the cache for a given URL.
pub fn write_cache(url: &str, content: &str) -> std::io::Result<()> {
    let path = cache_path_for(url);
    if let Some(parent) = path.parent() {
        std::fs::create_dir_all(parent)?;
    }
    std::fs::write(&path, content)
}

/// Check if a cache file exists at the given path.
pub fn cache_exists(path: &Path) -> bool {
    path.exists() && path.metadata().map(|m| m.len() > 0).unwrap_or(false)
}
