# Notes for Claude Code

This file gives Claude Code context on the project. It's read automatically when Claude Code opens a session in this repo.

## Critical framing: this is a scaffold, not a finished design

**Every decision baked into this repo is a placeholder.** The scaffold was built based on educated guesses by someone helping the owner get started — the owner had no direct input on the initial choices. That means the following are all subject to change at any point, and none of them should be treated as fixed:

- Company name, tagline, and any branding language currently in the files
- Logo placement, color values, typography
- Page structure (Home / Projects / About / Contact) and page names
- Folder structure and file names
- The choice of plain HTML/CSS/JS as the tech stack
- Any content in `content/` or copy in the HTML files
- The contact method (currently a `mailto:` placeholder)

**The owner is the final approver of everything.** When the owner asks for a change, don't push back citing "the current setup" or "the conventions" — those exist to be replaced by their preferences. If a change conflicts with an existing choice in the scaffold, adjust the scaffold to match what the owner wants rather than the other way around. When the owner makes a directional decision (e.g. "let's rebrand," "let's use a framework," "let's restructure the pages"), treat the existing scaffold as raw material to reshape freely.

If the owner asks a question like "what should this be?" — offer options and tradeoffs, but make clear the decision is theirs. Don't assume prior choices in the scaffold reflect their preference; they may not have seen them yet.

## About this project

Brown Bear Construction is a custom home builder in Minneapolis, MN. This is a marketing/portfolio site for the business.

**Sessions in this repo are run by a technical intermediary, not the owner.** The maintainer is comfortable with git, the command line, and web development — there's no need to simplify technical explanations or avoid jargon with them. They own the GitHub repo and the Vercel deployment, and they run Claude Code on the owner's behalf.

**The owner still decides everything substantive.** He does not manage GitHub or Vercel and is usually not present in the session. So when a task touches naming, branding, copy, page structure, or tech direction, don't read the maintainer's instruction as owner approval unless they say the owner has already signed off. Do the work, but flag that it needs the owner's confirmation — see Approval workflow below.

Prefer simple, direct solutions over clever ones. That's a property of this project, not a limitation of who's in the session.

Placeholder tagline: *Building Strength, Crafting Excellence*
Placeholder Instagram: [@brownbearconstructionmn](https://instagram.com/brownbearconstructionmn)

## Approval workflow

- **Typos, broken links, small fixes, and anything the maintainer has explicitly cleared** — commit straight to `main`. It deploys immediately.
- **Everything else** — work on a branch. Pushing the branch produces a Vercel preview URL the maintainer can share with the owner for sign-off before it merges to `main`. This covers new or rewritten copy, design and layout changes, new pages, project entries, branding and color changes, and any change of tech direction.

When in doubt, branch. A preview URL costs nothing and is far easier than reverting something the owner didn't want live.

## Current tech stack

Plain static HTML, CSS, and JavaScript. No build step. No framework. Deploys to Vercel as static files with zero configuration.

This was an intentional choice to keep the foundation flexible. The owner may want to add a framework, a CMS, or other tools later — but nothing should be added without a clear reason. Ask before introducing dependencies.

## Structure conventions

- **Pages** live at the root as `.html` files.
- **Styles** live in `styles/main.css`. One stylesheet for now — split only if it grows unwieldy.
- **Scripts** live in `scripts/main.js`. Keep JS minimal; this is a content site, not an app.
- **Content** (long-form text) lives in `content/` as markdown. Each project has its own file in `content/projects/`. This separation exists so that a future migration to a framework or CMS is straightforward.
- **Assets** live in `assets/`. Logos in `assets/logo/`, project photos in `assets/projects/<project-slug>/`.

## Brand colors (placeholder)

Estimated from the current placeholder logo. Replace freely once the owner confirms brand direction:
- Black: `#000000`
- Gold: `#b8892b` (rough estimate — not confirmed)
- White: `#ffffff`

These are defined as CSS custom properties at the top of `styles/main.css`. If the branding changes entirely, update these values (or replace the palette wholesale) rather than trying to preserve them.

## Open decisions (all pending owner input)

None of these have been decided. The scaffold uses placeholders in the meantime.

- [ ] **Company name and branding.** Currently displayed as "Brown Bear Construction" with the tagline "Building Strength, Crafting Excellence." Confirm or replace.
- [ ] **Logo files.** Upload to `assets/logo/` when finalized. Current header uses a text placeholder — swap to an `<img>` tag once real files exist.
- [ ] **Brand colors.** Confirm the palette or replace the estimates in `styles/main.css`.
- [ ] **Domain name.** Once chosen, connect in Vercel project settings and update any references.
- [ ] **Business email.** Update the `mailto:` link and placeholder address on `contact.html`.
- [ ] **Contact method.** Currently a `mailto:` link. Options include a form service (Formspree, Basin) or Vercel form handling — the owner picks.
- [ ] **Project entries.** Template lives at `content/projects/example-project.md`. Target is under 10 projects at launch, but this is flexible.
- [ ] **About page copy.** Draft in `content/about.md`; final version goes into `about.html` once written.
- [ ] **Favicon.** Add once the logo direction is settled.
- [ ] **Page structure.** The current four-page layout is a suggestion, not a requirement. The owner may want to add, remove, or rearrange pages.
- [ ] **Tech stack.** Plain static HTML/CSS/JS for now. If the owner wants a framework, CMS, or specific integration, discuss tradeoffs and switch.

## Guidance for changes

- **When adding a project:** create the markdown file in `content/projects/`, add photos to `assets/projects/<slug>/`, then add a card to `projects.html`. Ask if the owner would like the photos optimized/resized.
- **When changing content on a page:** update the HTML file directly. If the same content exists in a markdown file under `content/`, update both so they stay in sync (until the site is wired up to read markdown automatically).
- **When considering a framework migration:** don't do it silently. Explain the tradeoffs to the owner first — what problem it solves, what changes for them, and what it costs in complexity. The content in `content/` is structured to make migration to Astro, Eleventy, Next.js, or similar tools straightforward.
- **When adding dependencies:** ask first. This project has none right now, and that's a feature.

## Deployment

Vercel, connected to this GitHub repo. Every push to the main branch triggers a redeploy. No build command needed for the current static setup — if a framework is added later, update the Vercel project settings accordingly.

## Future handoff

The repo lives under the maintainer's GitHub account (`twaraich`) indefinitely, because the owner doesn't want to manage GitHub or Vercel himself. This isn't expected to change soon, but if he ever wants to take over:

1. Transfer the GitHub repo to the owner's account, then switch it to private if desired.
2. Have the owner create his own Vercel account on the **Pro** plan — Vercel's free Hobby plan is restricted to non-commercial use, and this is a business site.
3. Reconnect the repo in Vercel from his account. A GitHub repo transfer breaks the existing Vercel Git connection, so the deployment has to be re-established rather than inherited. Expect to re-link, not to migrate.
4. Re-point any custom domain at the new Vercel project.
