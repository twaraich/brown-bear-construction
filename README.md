# Brown Bear Construction — Website Scaffold

*Building Strength, Crafting Excellence*

This is the starting scaffold for the Brown Bear Construction website — a custom home builder based in Minneapolis, MN.

This README is written for the technical maintainer who runs the repo and the deployment on the owner's behalf. It explains what's here, how to make changes, and how the site gets published online.

---

## Important: everything here is a placeholder

**The owner is the final approver of every decision on this site.** Nothing in this scaffold is locked in. The current setup — the company name displayed on the pages, the tagline, the color scheme, the page structure, the tech choices, even the folder names — was chosen as a reasonable starting point based on educated guesses. Every one of those choices can change.

Specifically, treat these as open:

- **The name and branding.** If "Brown Bear Construction" evolves, gets a new tagline, or gets a full rebrand, all of it can be swapped out.
- **The logo and colors.** The color values in the stylesheet are estimates from the logo image. Change them to match the real brand guidelines once the owner confirms them.
- **The page structure.** Four pages (Home, Projects, About, Contact) is a common starting shape, but the owner may want more, fewer, or different pages.
- **The technology.** Right now the site is plain HTML/CSS/JavaScript. That was chosen because it's the most flexible starting point — but the site can move to any framework or content management system later without throwing this work away.
- **How anything works.** If something in the scaffold doesn't fit how the owner wants to run the site, change it.

The scaffold exists to give the site a running start, not to constrain what it becomes. When in doubt, change it.

---

## Who decides what

Two people are involved, with a clear split:

- **The owner** is the final approver on everything substantive — the company name, branding, logo, colors, copy, page structure, and the overall direction of the site. He does not manage GitHub or Vercel directly.
- **The maintainer** (currently the GitHub account `twaraich`) does the technical work — running Claude Code sessions, editing files, committing, and managing the GitHub repo and the Vercel deployment.

The maintainer executes; the owner decides. When a change involves a real choice rather than a fix, it goes to the owner first — usually as a Vercel preview URL from a branch, so he can see it on a real page before it goes live.

---

## What's in this repo

Think of this like a filing cabinet for your website. Every folder has one job:

- **`index.html`, `projects.html`, `about.html`, `contact.html`** — The four main pages of the website. Open any of these in a text editor to see or change what's on that page.
- **`styles/`** — Controls how the site looks (colors, fonts, spacing). Edit `main.css` to adjust the look.
- **`scripts/`** — Small bits of code that make the site interactive. Currently just updates the copyright year automatically.
- **`assets/`** — Photos, logos, and other images.
  - `logo/` — Your company logo files.
  - `projects/` — Photos of your completed builds. One folder per project keeps things organized.
- **`content/`** — The words on your site, kept separate from the design.
  - `about.md` — The story that appears on the About page.
  - `projects/` — One file per completed project. Each file has the project's title, location, year, and description.
- **`README.md`** — This file. Explains the project.
- **`CLAUDE.md`** — Notes for Claude Code (the AI assistant you'll use to make changes). Claude reads this automatically when it opens the project.
- **`.gitignore`** — Tells the system which files to ignore. You can leave this alone.

---

## How to make changes

Changes are made by the maintainer, working from a local clone of this repo.

### Typical flow

1. Pull the latest `main`.
2. For anything beyond a typo or a small fix, start a branch. Pushing the branch produces a Vercel preview URL you can send to the owner for sign-off before the change goes live.
3. Make the edits. Claude Code is the usual tool and reads `CLAUDE.md` automatically, so it follows the project's conventions — but editing by hand works just as well.
4. Commit with a message that says what changed and why.
5. Push. Merging to `main` publishes to the live site (see below).

### Editing by hand

HTML files hold the page content, `styles/main.css` controls the look, and markdown files under `content/` hold long-form text. There's no build step and no dependencies — open a file, change it, save it.

To preview locally, serve the folder rather than opening the files directly:

```
npx serve
```

Opening `index.html` straight from the filesystem looks like it works, but every nav link will 404 — the links are root-absolute (`/about.html`), which resolves correctly when served but not from a `file://` path.

---

## How the site gets published

The site is deployed with **Vercel**, a free hosting service that publishes the site automatically.

Here's the flow:

1. You (or Claude Code) make a change to a file.
2. That change is saved to GitHub (the "cloud filing cabinet" that holds this repo).
3. Vercel notices the change and republishes the site — usually within a minute.

You don't need to manually upload anything. Once Vercel is connected to the GitHub repo, it just works.

---

## Common tasks

### Add a new completed project

1. Go to the `content/projects/` folder.
2. Duplicate `example-project.md` and rename it (for example, `lakeside-home.md`).
3. Open the new file and fill in the title, location, year, and description.
4. Put project photos in a new folder inside `assets/projects/` (for example, `assets/projects/lakeside-home/`).
5. Update `projects.html` to show the new project.

### Update your story on the About page

Edit `content/about.md`. If the About page hasn't been wired up to read this file automatically yet, also update `about.html` with the same content.

### Change your Instagram or contact info

- Instagram link: appears in the footer of every HTML page and on the Contact page.
- Email: update the `mailto:` link on the Contact page.

### Update the logo

Once your logo files are added to `assets/logo/`, replace the text placeholder in the site header. See `CLAUDE.md` for a note about this.

---

## Domain and email

- **Domain**: TODO — Once you pick a domain name (e.g. `brownbearconstruction.com`), Vercel can connect it in the project settings.
- **Business email**: TODO — Currently the contact page uses a placeholder email. Update it once your real business email is set up.

---

## Questions?

Content, design, and direction questions go to the owner — those are his calls. Technical questions (git, Vercel, how the site works) sit with the maintainer. `CLAUDE.md` holds the working conventions and the running list of decisions still open.
