//! Emoticon data and parsing.

use crate::model::emoji::EmoticonMap;
use emojibase_core::types::EmoticonValue;
use std::collections::HashMap;

/// Generate all permutations for an emoticon.
///
/// Mirrors the TypeScript `generateEmoticonPermutations` function:
/// - Swaps `)` ↔ `(`, `/` ↔ `\`, `>` ↔ `<`
/// - Adds/removes nose (`-`)
/// - Swaps `:` ↔ `=`
/// - Lowercases/uppercases letters
pub fn generate_emoticon_permutations(
    emoticon: &str,
    is_face: bool,
    with_nose: bool,
) -> Vec<String> {
    let mut perms = vec![emoticon.to_string()];

    // Only apply face-specific permutations if this is a face emoticon.
    if is_face {
        // Mouth swaps
        let mut extra = Vec::new();
        for p in &perms {
            if p.contains(')') {
                extra.push(p.replace(')', "}"));
                extra.push(p.replace(')', "]"));
            }
            if p.contains('(') {
                extra.push(p.replace('(', "{"));
                extra.push(p.replace('(', "["));
            }
        }
        perms.extend(extra);

        // Eyes swap: : ↔ =
        let mut extra = Vec::new();
        for p in &perms {
            if p.starts_with(':') {
                extra.push(format!("={}", &p[1..]));
            } else if p.starts_with('=') {
                extra.push(format!(":{}", &p[1..]));
            }
        }
        perms.extend(extra);

        // Nose: add/remove '-'
        if with_nose {
            let mut extra = Vec::new();
            for p in &perms {
                // The nose character is at position 1 (after the eyes character).
                if p.len() >= 2 {
                    let chars: Vec<char> = p.chars().collect();
                    if chars.get(1) == Some(&'-') {
                        // Remove nose
                        let without: String =
                            std::iter::once(chars[0]).chain(chars[2..].iter().copied()).collect();
                        extra.push(without);
                    } else {
                        // Add nose
                        let with: String = std::iter::once(chars[0])
                            .chain(std::iter::once('-'))
                            .chain(chars[1..].iter().copied())
                            .collect();
                        extra.push(with);
                    }
                }
            }
            perms.extend(extra);
        }
    } else {
        // Non-face emoticons: slash swap
        let mut extra = Vec::new();
        for p in &perms {
            if p.contains('/') {
                extra.push(p.replace('/', "\\"));
            }
            if p.contains('\\') {
                extra.push(p.replace('\\', "/"));
            }
        }
        perms.extend(extra);
    }

    // Case variants
    let mut extra = Vec::new();
    for p in &perms {
        let lower = p.to_lowercase();
        let upper = p.to_uppercase();
        if lower != *p {
            extra.push(lower);
        }
        if upper != *p {
            extra.push(upper);
        }
    }
    perms.extend(extra);

    // Deduplicate
    perms.sort();
    perms.dedup();
    perms
}

/// Return the built-in emoticon map.
///
/// This mirrors the data from `packages/generator/src/resources/emoticons.ts`.
pub fn builtin_emoticons() -> EmoticonMap {
    let mut map = EmoticonMap::new();

    let single = |map: &mut EmoticonMap, hex: &str, emoticon: &str| {
        map.insert(hex.to_string(), EmoticonValue::Single(emoticon.to_string()));
    };

    let multi = |map: &mut EmoticonMap, hex: &str, emoticons: &[&str]| {
        map.insert(
            hex.to_string(),
            EmoticonValue::Multi(emoticons.iter().map(|s| s.to_string()).collect()),
        );
    };

    // Happy
    single(&mut map, "1F642", ":)");
    single(&mut map, "1F604", ":D");
    single(&mut map, "1F60A", ":>");
    single(&mut map, "1F609", ";)");

    // Playful
    single(&mut map, "1F602", ":')" );
    single(&mut map, "1F923", ":'D");
    multi(&mut map, "1F606", &["xD", "XD"]);

    // Sad / upset
    single(&mut map, "1F641", ":(");
    single(&mut map, "1F622", ":'(");
    single(&mut map, "1F62D", ":'o");
    single(&mut map, "1F620", ">:(");
    single(&mut map, "1F624", ">:E");

    // Surprise / neutral
    single(&mut map, "1F62E", ":o");
    single(&mut map, "1F610", ":|");
    single(&mut map, "1F611", "-_-");
    single(&mut map, "1F636", ":x");

    // Tongue / wink
    single(&mut map, "1F61B", ":p");
    single(&mut map, "1F61C", ";p");

    // Cool / special
    single(&mut map, "1F60E", "B)");
    single(&mut map, "1F913", "8)");
    single(&mut map, "1F615", ":/");
    single(&mut map, "1F607", "O)");
    single(&mut map, "1F608", "3)");

    // Hearts / non-face
    single(&mut map, "2764", "<3");
    single(&mut map, "1F494", "</3");
    multi(&mut map, "1F918", &[r"\m/", r"\M/"]);

    map
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_permutations_face() {
        let perms = generate_emoticon_permutations(":)", true, true);
        assert!(perms.contains(&":)".to_string()));
        assert!(perms.contains(&":-)".to_string()));
        assert!(perms.contains(&"=)".to_string()));
    }

    #[test]
    fn test_permutations_non_face() {
        let perms = generate_emoticon_permutations("<3", false, false);
        assert!(perms.contains(&"<3".to_string()));
    }

    #[test]
    fn test_builtin_emoticons() {
        let map = builtin_emoticons();
        assert!(map.contains_key("1F642"));
        assert!(map.contains_key("2764"));
    }
}
