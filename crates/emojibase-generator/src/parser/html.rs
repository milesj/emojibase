//! Parse HTML emoji charts (emoji-list.html, emoji-style.html) using `scraper`.
//!
//! These are used to extract source info and default presentation styles.

use crate::model::emoji::EmojiSourceMap;
use scraper::{Html, Selector};

/// Parse `emoji-list.html` to extract group/subgroup source information.
///
/// The HTML contains tables with emoji grouped by categories.
/// This is a simplified parser that extracts the basic structure.
pub fn parse_emoji_list_html(html: &str) -> EmojiSourceMap {
    let document = Html::parse_document(html);
    let _row_selector = Selector::parse("tr").unwrap();
    let _td_selector = Selector::parse("td").unwrap();

    // The actual HTML parsing is complex and depends on the exact structure
    // of the emoji-list.html page. This is a skeleton implementation.
    //
    // In the TS version, cheerio is used to iterate over <tr> elements
    // and extract the group/subgroup from header rows, and the hexcode
    // from emoji data rows.
    let map = EmojiSourceMap::new();

    // TODO: Implement full HTML parsing once we have test data.
    // The structure is:
    // - Header rows with class "bighead" contain group names
    // - Header rows with class "mediumhead" contain subgroup names
    // - Data rows contain emoji codepoints and names

    let _ = document; // suppress unused warning

    map
}

/// Emoji style information extracted from emoji-style.html.
pub struct EmojiStyles {
    /// Hexcodes that default to emoji presentation.
    pub emoji: std::collections::HashSet<String>,
    /// Hexcodes that default to text presentation.
    pub text: std::collections::HashSet<String>,
}

/// Parse `emoji-style.html` to extract default presentation styles.
pub fn parse_emoji_styles_html(html: &str) -> EmojiStyles {
    let document = Html::parse_document(html);
    let _td_selector = Selector::parse("td").unwrap();

    // TODO: Implement full HTML parsing.
    // The structure is similar to emoji-list.html but categorizes emoji
    // by their default presentation style (text vs emoji).

    let _ = document;

    EmojiStyles {
        emoji: std::collections::HashSet::new(),
        text: std::collections::HashSet::new(),
    }
}
