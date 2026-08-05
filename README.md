# Brown Bear Construction — Website Scaffold

*Building Strength, Crafting Excellence*

This is the starting scaffold for the Brown Bear Construction website — a custom home builder based in Minneapolis, MN.

This README is written for the business owner who will own and maintain this site. It explains what's here, how to make common changes, and how the site gets published online.

---

## Important: everything here is a placeholder

**You are the final approver of every decision on this site.** Nothing in this scaffold is locked in. The current setup — the company name displayed on the pages, the tagline, the color scheme, the page structure, the tech choices, even the folder names — was chosen as a reasonable starting point based on educated guesses. Every one of those choices can change.

Specifically, treat these as open:

- **The name and branding.** If "Brown Bear Construction" evolves, gets a new tagline, or gets a full rebrand, all of it can be swapped out.
- **The logo and colors.** The color values in the stylesheet are estimates from the logo image. Change them to match your actual brand guidelines whenever you're ready.
- **The page structure.** Four pages (Home, Projects, About, Contact) is a common starting shape, but you might want more, fewer, or different pages.
- **The technology.** Right now the site is plain HTML/CSS/JavaScript. That was chosen because it's the most flexible starting point — but you can move to any framework or content management system later without throwing this work away.
- **How anything works.** If something in the scaffold doesn't fit how you want to run the site, change it.

The scaffold exists to give you a running start, not to constrain what the site becomes. When in doubt, ask Claude Code to change it.

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

You have two good options.

### Option 1: Use Claude Code (recommended)

Claude Code is a command-line AI assistant that can make changes to the site for you. You describe what you want in plain English, and it edits the files.

Examples of things to ask:
- "Add a new project called 'Lakeside Home' built in 2024 in Wayzata, MN."
- "Change the tagline on the homepage."
- "Update the phone number on the contact page."
- "Make the header background darker."

Claude will read the `CLAUDE.md` file automatically and follow the conventions of the project.

To get started with Claude Code, see: https://docs.claude.com/en/docs/claude-code

### Option 2: Edit the files directly

If you're comfortable with a text editor (like VS Code), you can open any file and change it directly. HTML files contain the page content, CSS files control the look, and markdown files (`.md`) hold long-form text.

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
5. Update `projects.html` to show the new project, or ask Claude Code to do it for you.

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

The person who set up this scaffold can help with the initial handoff. After that, Claude Code is your best friend — just describe what you want in plain English and it will do the work.
