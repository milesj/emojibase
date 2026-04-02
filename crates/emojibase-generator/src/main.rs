//! # emojibase-generator
//!
//! A CLI tool that fetches Unicode and CLDR data sources, normalizes them,
//! and produces pre-generated JSON datasets, regex patterns, and shortcode
//! mappings for the emojibase project.
//!
//! ## Usage
//!
//! ```text
//! emojibase-generator generate --output packages/data
//! emojibase-generator generate --locale en --locale ja
//! ```

use clap::{Parser, Subcommand};
use std::path::PathBuf;

mod builder;
mod config;
mod fetcher;
mod generator;
mod model;
mod parser;
mod util;

/// Emojibase dataset generator: fetches Unicode / CLDR data and produces
/// pre-built JSON datasets, regex patterns, and shortcode mappings.
#[derive(Parser)]
#[command(name = "emojibase-generator", version, about)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Generate emoji datasets for all (or selected) locales.
    Generate {
        /// Output directory for generated files.
        #[arg(short, long, default_value = "packages/data")]
        output: PathBuf,

        /// Specific locale(s) to generate. If omitted, all supported locales
        /// are generated.
        #[arg(short, long)]
        locale: Vec<String>,

        /// Emoji specification version.
        #[arg(long)]
        emoji_version: Option<String>,

        /// Unicode version.
        #[arg(long)]
        unicode_version: Option<String>,
    },

    /// Verify integrity of previously-generated data.
    Verify {
        /// Directory containing generated data.
        #[arg(short, long, default_value = "packages/data")]
        data_dir: PathBuf,
    },
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let cli = Cli::parse();

    match cli.command {
        Commands::Generate {
            output,
            locale,
            emoji_version,
            unicode_version,
        } => {
            let mut cfg = config::Config::default();
            if let Some(ev) = emoji_version {
                cfg.emoji_version = ev;
            }
            if let Some(uv) = unicode_version {
                cfg.unicode_version = uv;
            }
            if !locale.is_empty() {
                cfg.locales = locale;
            }
            cfg.output_dir = output.to_string_lossy().to_string();

            run_generate(cfg).await?;
        }
        Commands::Verify { data_dir } => {
            run_verify(&data_dir)?;
        }
    }

    Ok(())
}

/// Main generation pipeline.
async fn run_generate(cfg: config::Config) -> Result<(), Box<dyn std::error::Error>> {
    util::log::info(&format!(
        "Generating emoji data (emoji v{}, unicode v{})",
        cfg.emoji_version, cfg.unicode_version
    ));

    // -------------------------------------------------------------------
    // Phase 1: Fetch Unicode data files
    // -------------------------------------------------------------------
    let spinner = util::log::create_spinner("Fetching Unicode data files...");

    let (emoji_data_content, sequences_content, zwj_content, variation_content, unicode_data_content, test_content) = tokio::try_join!(
        fetcher::unicode::fetch_emoji_data(&cfg.unicode_version),
        fetcher::unicode::fetch_emoji_sequences(&cfg.emoji_version),
        fetcher::unicode::fetch_emoji_zwj_sequences(&cfg.emoji_version),
        fetcher::unicode::fetch_emoji_variation_sequences(&cfg.emoji_version),
        fetcher::unicode::fetch_unicode_data(&cfg.unicode_version),
        fetcher::unicode::fetch_emoji_test(&cfg.emoji_version),
    )?;

    spinner.finish_with_message("Fetched Unicode data files");

    // -------------------------------------------------------------------
    // Phase 2: Parse data files
    // -------------------------------------------------------------------
    let spinner = util::log::create_spinner("Parsing data files...");

    let mut emoji_data = parser::emoji_data::parse_emoji_data(&emoji_data_content);
    let sequences = parser::sequences::parse_sequences(
        &sequences_content,
        model::emoji::Property::EmojiModifierSequence,
    );
    let zwj_sequences = parser::sequences::parse_sequences(
        &zwj_content,
        model::emoji::Property::EmojiZwjSequence,
    );
    let variations = parser::variations::parse_variations(&variation_content);
    let names = parser::unicode_data::parse_unicode_names(&unicode_data_content);
    let (metadata, group_names, subgroup_entries) =
        parser::test_file::parse_test_file(&test_content);

    // Merge sequence data into the primary map.
    builder::data::merge_data_maps(&mut emoji_data, sequences);
    builder::data::merge_data_maps(&mut emoji_data, zwj_sequences);

    spinner.finish_with_message("Parsed data files");

    // -------------------------------------------------------------------
    // Phase 3: Build unified emoji map
    // -------------------------------------------------------------------
    let spinner = util::log::create_spinner("Building emoji map...");

    let mut emoji_map =
        builder::data::build_emoji_data(&emoji_data, &metadata, &variations, &names);

    // Apply gender detection.
    builder::gender::apply_gender(&mut emoji_map);

    // Generate skin tone modifications.
    builder::skin_tones::apply_skin_tone_modifications(&mut emoji_map);
    builder::skin_tones::detect_multi_person_skin_tones(&mut emoji_map);

    // Load and apply emoticons.
    let emoticons = parser::emoticons::builtin_emoticons();
    for (hex, emoticon) in &emoticons {
        if let Some(emoji) = emoji_map.get_mut(hex) {
            emoji.emoticon = Some(emoticon.clone());
        }
    }

    spinner.finish_with_message("Built emoji map");

    // -------------------------------------------------------------------
    // Phase 4: Verify
    // -------------------------------------------------------------------
    let visible = builder::verify::filter_visible_emoji(&emoji_map);
    builder::verify::verify_data_integrity(&visible);

    // -------------------------------------------------------------------
    // Phase 5: Generate shortcodes
    // -------------------------------------------------------------------
    let shortcodes = builder::shortcodes::generate_emojibase_shortcodes(&visible);
    let mut output_map = visible.clone();
    builder::shortcodes::apply_shortcodes(&mut output_map, &shortcodes);

    // -------------------------------------------------------------------
    // Phase 6: Generate output for each locale
    // -------------------------------------------------------------------
    let pb = util::log::create_progress_bar(cfg.locales.len() as u64, "Generating datasets");
    let tags_map = std::collections::HashMap::new();

    for locale in &cfg.locales {
        let locale_dir = PathBuf::from(&cfg.output_dir).join(locale);

        // Build data list and write output files.
        let data_list =
            generator::data_json::build_data_list(&output_map, &tags_map);

        generator::data_json::write_data_json(&data_list, &locale_dir)?;
        generator::compact_json::write_compact_json(&data_list, &locale_dir)?;

        // Messages
        let messages =
            generator::messages_json::build_messages(&group_names, &subgroup_entries);
        generator::messages_json::write_messages_json(&messages, &locale_dir)?;

        pb.inc(1);
    }

    pb.finish_with_message("Generated locale datasets");

    // -------------------------------------------------------------------
    // Phase 7: Generate metadata and regex
    // -------------------------------------------------------------------
    let output_path = PathBuf::from(&cfg.output_dir);
    generator::metadata::write_metadata(
        &output_map,
        &group_names,
        &subgroup_entries,
        &output_path,
    )?;
    generator::versions::write_versions(&output_map, &output_path)?;

    util::log::success("Generation complete!");
    Ok(())
}

/// Verify previously generated data.
fn run_verify(data_dir: &PathBuf) -> Result<(), Box<dyn std::error::Error>> {
    util::log::info(&format!("Verifying data in {}", data_dir.display()));

    // Load the English data.json as a sanity check.
    let data_path = data_dir.join("en/data.json");
    if !data_path.exists() {
        return Err(format!("Data file not found: {}", data_path.display()).into());
    }

    let content = std::fs::read_to_string(&data_path)?;
    let emojis: Vec<emojibase_core::types::Emoji> = serde_json::from_str(&content)?;

    util::log::success(&format!(
        "Loaded {} emoji entries from en/data.json",
        emojis.len()
    ));

    // Basic integrity checks.
    let mut issues = 0;
    for emoji in &emojis {
        if emoji.hexcode.is_empty() {
            util::log::error("Empty hexcode found");
            issues += 1;
        }
        if emoji.label.is_empty() {
            util::log::warn(&format!("Empty label for {}", emoji.hexcode));
            issues += 1;
        }
    }

    if issues == 0 {
        util::log::success("All checks passed");
    } else {
        util::log::error(&format!("{issues} issue(s) found"));
    }

    Ok(())
}
