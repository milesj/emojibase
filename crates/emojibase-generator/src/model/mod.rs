//! Generator-internal data model types used during the build pipeline.
//!
//! These types carry more metadata than the final output types in
//! `emojibase-core` and are reduced/mapped during the generation phase.

pub mod emoji;
pub mod group;
pub mod hexcode;
pub mod shortcode;

pub use emoji::*;
pub use group::*;
pub use hexcode::*;
pub use shortcode::*;
