// Brown Bear Construction — main script
// Minimal starter. Add interactivity here as the site grows.

// Auto-update the year in the footer.
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Project lightbox (homepage only).
const PROJECTS = {
  foxpoint: {
    name: "Foxpoint",
    location: "Minneapolis, MN",
    category: "Custom Home",
    photos: [
      { src: "assets/projects/foxpoint/exterior.webp", alt: "Foxpoint exterior" },
      { src: "assets/projects/foxpoint/bookshelf.webp", alt: "Foxpoint built-in bookshelf" },
      { src: "assets/projects/foxpoint/fireplace.webp", alt: "Foxpoint stone fireplace" },
      { src: "assets/projects/foxpoint/kitchen-sink.webp", alt: "Foxpoint kitchen sink and windows" },
      { src: "assets/projects/foxpoint/mudroom-hooks.webp", alt: "Foxpoint mudroom hooks" },
      { src: "assets/projects/foxpoint/coffee-bar.webp", alt: "Foxpoint built-in coffee bar" },
      { src: "assets/projects/foxpoint/mudroom-hallway.webp", alt: "Foxpoint mudroom hallway" },
      { src: "assets/projects/foxpoint/staircase.webp", alt: "Foxpoint staircase and entry" },
    ],
  },
  dale: {
    name: "Dale",
    location: "Minneapolis, MN",
    category: "Triplex",
    photos: [
      { src: "assets/projects/dale/exterior.webp", alt: "Dale exterior" },
      { src: "assets/projects/dale/kitchen.webp", alt: "Dale kitchen and living room" },
      { src: "assets/projects/dale/dining.webp", alt: "Dale dining nook" },
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
      wrap.className = "lightbox-photo";
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

  document.querySelectorAll(".project-card[data-project]").forEach((card) => {
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
