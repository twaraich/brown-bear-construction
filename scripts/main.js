// Brown Bear Construction — main script
// Minimal starter. Add interactivity here as the site grows.

// Auto-update the year in the footer.
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Project lightbox (projects.html only).
const PROJECTS = {
  foxpoint: {
    name: "Foxpoint",
    location: "Minneapolis, MN",
    category: "Custom Home",
    photos: [
      { src: "assets/projects/foxpoint/exterior.webp", alt: "Foxpoint exterior" },
      { src: "assets/projects/foxpoint/bookshelf.webp", alt: "Foxpoint built-in bookshelf" },
      { src: "assets/projects/foxpoint/fireplace.webp", alt: "Foxpoint stone fireplace" },
    ],
  },
  lyndale: {
    name: "Lyndale",
    location: "Minneapolis, MN",
    category: "Tri-Plex",
    photos: [
      { src: "assets/projects/lyndale/exterior.webp", alt: "Lyndale exterior" },
      { src: "assets/projects/lyndale/kitchen.webp", alt: "Lyndale kitchen and living room" },
      { src: "assets/projects/lyndale/dining.webp", alt: "Lyndale dining nook" },
    ],
  },
  burr: {
    name: "Burr",
    location: "St. Paul, MN",
    category: "Duplex",
    photos: [
      { src: "assets/projects/burr/exterior.webp", alt: "Burr exterior" },
    ],
  },
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
    project.photos.forEach((photo) => {
      const wrap = document.createElement("div");
      wrap.className = "project-photo";
      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.alt;
      wrap.appendChild(img);
      lightboxGrid.appendChild(wrap);
    });
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
