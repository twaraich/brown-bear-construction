// Brown Bear Construction — main script
// Minimal starter. Add interactivity here as the site grows.

// Auto-update the year in the footer.
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
