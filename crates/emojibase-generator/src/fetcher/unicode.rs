//! Fetch Unicode data files from unicode.org.

use super::cache;

/// Base URL for Unicode Public data.
const UNICODE_PUBLIC_BASE: &str = "https://unicode.org/Public";

/// Fetch a text resource, using the local cache if available.
pub async fn fetch_text(url: &str) -> Result<String, Box<dyn std::error::Error>> {
    if let Some(cached) = cache::read_cache(url) {
        return Ok(cached);
    }

    let response = reqwest::get(url).await?;
    let text = response.text().await?;
    cache::write_cache(url, &text)?;
    Ok(text)
}

/// Build the URL for `emoji-data.txt`.
pub fn emoji_data_url(unicode_version: &str) -> String {
    format!("{UNICODE_PUBLIC_BASE}/{unicode_version}/ucd/emoji/emoji-data.txt")
}

/// Build the URL for `emoji-sequences.txt`.
pub fn emoji_sequences_url(emoji_version: &str) -> String {
    format!("{UNICODE_PUBLIC_BASE}/emoji/{emoji_version}/emoji-sequences.txt")
}

/// Build the URL for `emoji-zwj-sequences.txt`.
pub fn emoji_zwj_sequences_url(emoji_version: &str) -> String {
    format!("{UNICODE_PUBLIC_BASE}/emoji/{emoji_version}/emoji-zwj-sequences.txt")
}

/// Build the URL for `emoji-variation-sequences.txt`.
pub fn emoji_variation_sequences_url(emoji_version: &str) -> String {
    format!("{UNICODE_PUBLIC_BASE}/emoji/{emoji_version}/emoji-variation-sequences.txt")
}

/// Build the URL for `UnicodeData.txt`.
pub fn unicode_data_url(unicode_version: &str) -> String {
    format!("{UNICODE_PUBLIC_BASE}/{unicode_version}/ucd/UnicodeData.txt")
}

/// Build the URL for `emoji-test.txt`.
pub fn emoji_test_url(emoji_version: &str) -> String {
    format!("https://unicode.org/Public/emoji/{emoji_version}/emoji-test.txt")
}

/// Fetch `emoji-data.txt`.
pub async fn fetch_emoji_data(
    unicode_version: &str,
) -> Result<String, Box<dyn std::error::Error>> {
    fetch_text(&emoji_data_url(unicode_version)).await
}

/// Fetch `emoji-sequences.txt`.
pub async fn fetch_emoji_sequences(
    emoji_version: &str,
) -> Result<String, Box<dyn std::error::Error>> {
    fetch_text(&emoji_sequences_url(emoji_version)).await
}

/// Fetch `emoji-zwj-sequences.txt`.
pub async fn fetch_emoji_zwj_sequences(
    emoji_version: &str,
) -> Result<String, Box<dyn std::error::Error>> {
    fetch_text(&emoji_zwj_sequences_url(emoji_version)).await
}

/// Fetch `emoji-variation-sequences.txt`.
pub async fn fetch_emoji_variation_sequences(
    emoji_version: &str,
) -> Result<String, Box<dyn std::error::Error>> {
    fetch_text(&emoji_variation_sequences_url(emoji_version)).await
}

/// Fetch `UnicodeData.txt`.
pub async fn fetch_unicode_data(
    unicode_version: &str,
) -> Result<String, Box<dyn std::error::Error>> {
    fetch_text(&unicode_data_url(unicode_version)).await
}

/// Fetch `emoji-test.txt`.
pub async fn fetch_emoji_test(
    emoji_version: &str,
) -> Result<String, Box<dyn std::error::Error>> {
    fetch_text(&emoji_test_url(emoji_version)).await
}
