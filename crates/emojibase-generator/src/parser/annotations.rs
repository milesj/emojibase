//! Parse CLDR annotation JSON files.

use crate::model::emoji::CldrAnnotationMap;
use std::collections::HashMap;

/// Parse CLDR annotations from a JSON value.
///
/// The JSON structure from `cldr-annotations-full` looks like:
/// ```json
/// {
///   "annotations": {
///     "annotations": {
///       "😀": {
///         "default": ["cheerful", "face", "grin", ...],
///         "tts": ["grinning face"]
///       }
///     }
///   }
/// }
/// ```
pub fn parse_cldr_annotations(json: &serde_json::Value) -> CldrAnnotationMap {
    let mut map = CldrAnnotationMap::new();

    // Navigate the JSON structure.
    let annotations = json
        .get("annotations")
        .and_then(|a| a.get("annotations"))
        .or_else(|| {
            // Derived annotations have a different path.
            json.get("annotationsDerived")
                .and_then(|a| a.get("annotations"))
        });

    let annotations = match annotations {
        Some(serde_json::Value::Object(obj)) => obj,
        _ => return map,
    };

    for (emoji_char, value) in annotations {
        // Convert the emoji character to its hexcode.
        let hexcode = emojibase_core::unicode::from_unicode_to_hexcode(emoji_char);

        let tags = value
            .get("default")
            .and_then(|v| v.as_array())
            .map(|arr| {
                arr.iter()
                    .filter_map(|v| v.as_str().map(|s| s.to_string()))
                    .collect::<Vec<_>>()
            })
            .unwrap_or_default();

        let annotation = value
            .get("tts")
            .and_then(|v| v.as_array())
            .and_then(|arr| arr.first())
            .and_then(|v| v.as_str())
            .unwrap_or("")
            .to_string();

        if !annotation.is_empty() || !tags.is_empty() {
            map.insert(
                hexcode,
                crate::model::emoji::CldrAnnotation { annotation, tags },
            );
        }
    }

    map
}

/// Parse CLDR localization data (territory names).
pub fn parse_cldr_territories(
    json: &serde_json::Value,
) -> HashMap<String, String> {
    let mut map = HashMap::new();

    let territories = json
        .pointer("/main")
        .and_then(|m| {
            // The structure is /main/{locale}/localeDisplayNames/territories
            m.as_object()
                .and_then(|obj| obj.values().next())
                .and_then(|v| v.pointer("/localeDisplayNames/territories"))
        });

    if let Some(serde_json::Value::Object(obj)) = territories {
        for (code, name) in obj {
            if let Some(name_str) = name.as_str() {
                map.insert(code.clone(), name_str.to_string());
            }
        }
    }

    map
}
