//! # emojibase-core
//!
//! Core types and utilities for working with emoji data, following the
//! Unicode and CLDR specifications. This crate provides:
//!
//! - Data model types ([`Emoji`], [`CompactEmoji`], etc.) with serde support
//! - Hexcode / codepoint / Unicode conversion utilities
//! - Shortcode and emoticon helpers
//! - Constants for groups, skin tones, presentations, and supported locales

pub mod constants;
pub mod shortcode;
pub mod types;
pub mod unicode;

pub use constants::*;
pub use types::*;
