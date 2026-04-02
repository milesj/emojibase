//! Logging and progress-reporting utilities.

use indicatif::{ProgressBar, ProgressStyle};
use std::time::Duration;

/// Create a progress bar for processing items.
pub fn create_progress_bar(total: u64, message: &str) -> ProgressBar {
    let pb = ProgressBar::new(total);
    pb.set_style(
        ProgressStyle::default_bar()
            .template("{spinner:.cyan} [{bar:40.cyan/blue}] {pos}/{len} {msg}")
            .unwrap()
            .progress_chars("█▓░"),
    );
    pb.set_message(message.to_string());
    pb.enable_steady_tick(Duration::from_millis(100));
    pb
}

/// Create a spinner for an indeterminate task.
pub fn create_spinner(message: &str) -> ProgressBar {
    let pb = ProgressBar::new_spinner();
    pb.set_style(
        ProgressStyle::default_spinner()
            .template("{spinner:.cyan} {msg}")
            .unwrap(),
    );
    pb.set_message(message.to_string());
    pb.enable_steady_tick(Duration::from_millis(80));
    pb
}

/// Log an informational message.
pub fn info(message: &str) {
    eprintln!("ℹ  {message}");
}

/// Log a success message.
pub fn success(message: &str) {
    eprintln!("✅ {message}");
}

/// Log a warning message.
pub fn warn(message: &str) {
    eprintln!("⚠️  {message}");
}

/// Log an error message.
pub fn error(message: &str) {
    eprintln!("❌ {message}");
}
