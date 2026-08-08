// Brown Bear Construction — main script
// Minimal starter. Add interactivity here as the site grows.

// Auto-update the year in the footer.
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Project lightbox (projects.html only). Photos are still placeholders —
// once real photos exist, swap PROJECTS[slug].photos for image paths and
// render <img> tags instead of the placeholder boxes below.
const PROJECTS = {
  foxpoint: { name: "Foxpoint", location: "Minneapolis, MN", category: "Custom Home", photos: 4 },
  lyndale: { name: "Lyndale", location: "Minneapolis, MN", category: "Tri-Plex", photos: 4 },
  burr: { name: "Burr", location: "St. Paul, MN", category: "Duplex", photos: 4 },
};

const lightbox = document.getElementById("project-lightbox");
if (lightbox) {
  const lightboxName = document.getElementById("lightbox-name");
  const lightboxMeta = document.getElementById("lightbox-meta");
  const lightboxGrid = document.getElementById("lightbox-grid");
  const lightboxClose = document.getElementById("lightbox-close");

  function openProject(slug) {
    const project = PROJECTS[slug];
    if (!project) return;
    lightboxName.textContent = project.name;
    lightboxMeta.textContent = project.location + " · " + project.category;
    lightboxGrid.innerHTML = "";
    for (let i = 1; i <= project.photos; i++) {
      const photo = document.createElement("div");
      photo.className = "project-image-placeholder";
      photo.textContent = "Photo " + i;
      lightboxGrid.appendChild(photo);
    }
    lightbox.hidden = false;
  }

  function closeProject() {
    lightbox.hidden = true;
  }

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openProject(card.dataset.project));
  });

  lightboxClose.addEventListener("click", closeProject);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeProject();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeProject();
  });
}

// Contact form (contact.html only). No form backend is set up yet (see the
// "Contact method" open decision in CLAUDE.md), so submitting opens an
// email draft with the entered details instead of posting anywhere.
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.name.value;
    const phone = contactForm.phone.value;
    const email = contactForm.email.value;
    const type = contactForm.type.value;
    const message = contactForm.message.value;

    const body = [
      "Name: " + name,
      "Phone: " + phone,
      "Email: " + email,
      "Project type: " + type,
      "",
      message,
    ].join("\n");

    const mailto =
      "mailto:brownbearconstructionmn@gmail.com" +
      "?subject=" + encodeURIComponent("New project inquiry from " + (name || "website")) +
      "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
  });
}
