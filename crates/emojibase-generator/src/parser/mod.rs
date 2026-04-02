pub mod annotations;
pub mod emoji_data;
pub mod emoticons;
pub mod html;
pub mod sequences;
pub mod test_file;
pub mod unicode_data;
pub mod variations;

/// A parsed line from a Unicode data file (semicolon-separated fields).
#[derive(Debug, Clone)]
pub struct ParsedLine {
    /// The hexcode or hexcode range (first field).
    pub hexcode: String,
    /// All fields from the line.
    pub fields: Vec<String>,
    /// The trailing comment, if any.
    pub comment: Option<String>,
}

/// Parse a Unicode data file into structured lines.
///
/// Each line has the format:
/// ```text
/// HEXCODE(..HEXCODE)? ; FIELD ; ... # COMMENT
/// ```
///
/// Blank lines and lines starting with `#` (without data) are skipped.
pub fn parse_unicode_file(content: &str) -> Vec<ParsedLine> {
    let mut lines = Vec::new();

    for raw_line in content.lines() {
        let trimmed = raw_line.trim();
        if trimmed.is_empty() || trimmed.starts_with('#') {
            continue;
        }

        // Split data from comment.
        let (data_part, comment) = if let Some(idx) = trimmed.find('#') {
            let data = trimmed[..idx].trim();
            let comment = trimmed[idx + 1..].trim().to_string();
            (data, Some(comment))
        } else {
            (trimmed, None)
        };

        let fields: Vec<String> = data_part.split(';').map(|f| f.trim().to_string()).collect();

        if fields.is_empty() {
            continue;
        }

        let hexcode = fields[0].clone();
        lines.push(ParsedLine {
            hexcode,
            fields,
            comment,
        });
    }

    lines
}

/// Extract an emoji version number from a comment string.
///
/// Looks for patterns like `E1.0`, `E13.1`, `E17.0`.
pub fn extract_emoji_version(comment: &str) -> Option<f32> {
    let re = regex::Regex::new(r"E(\d+\.\d)").ok()?;
    let caps = re.captures(comment)?;
    caps.get(1)?.as_str().parse().ok()
}

/// Map an emoji version to the corresponding Unicode version.
pub fn emoji_version_to_unicode_version(emoji_version: f32) -> f32 {
    match emoji_version as u32 {
        1 => 6.1,
        2 => 6.1,
        3 => 9.0,
        4 => 9.0,
        5 => 10.0,
        v if v >= 11 => emoji_version,
        _ => emoji_version,
    }
}
