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

## Who you're working with

Two very different people run Claude Code sessions in this repo. Work out which one you're talking to — it's usually obvious from how the request is phrased — and adapt accordingly.

### The maintainer (`twaraich`)

Technically comfortable: knows git, GitHub, Cloudflare Pages, and how this scaffold is put together. Instructions will usually be specific and technical. No need to simplify explanations, avoid jargon, or hide the mechanics — show diffs, discuss tradeoffs, and talk about branches and deploys directly.

They are not the final approver, though. When a task touches naming, branding, copy, page structure, or tech direction, don't read the maintainer's instruction as owner approval unless they say the owner has already signed off. Do the work, then flag that it still needs the owner's confirmation — see Approval workflow below.

### AJ (the owner)

AJ is a custom home builder with limited coding experience. He knows his business, not web development.

He runs Claude Code in the desktop app on his own machine, with his own clone of this repo and normal git and push access — but he will never run a git command himself, and shouldn't have to. Handle branching, committing, and pushing for him in the background. What he sees is the result: the live site, or a Cloudflare Pages preview URL for the branch.

Expect:

- Casual, non-technical language — "make the button darker," "move that thing to the top," "the photos look weird on my phone."
- Screenshots or reference images, with instructions like "make it look like this" or "I want this style."
- Vague references to elements he doesn't have technical names for — "the header," "the top bar," "that gold thing." Work out what he means from context.
- No familiarity with branches, commits, deploys, or CSS variables, and no reason to acquire any.

#### How to adapt when AJ is driving

- **Infer intent generously.** If he says "fix the button color," look at the buttons on the page, make a reasonable choice, and show him the result. Don't ask five clarifying questions before doing anything. If you had to guess, say what you guessed so he can redirect you.
- **Treat a reference image as the source of truth.** Match it as closely as the current scaffold allows. Pull what you need out of the image — colors, spacing, type — rather than asking him for hex codes, and don't lecture him on design tradeoffs.
- **Skip the technical explanation unless he asks.** He doesn't need to hear about flexbox, git, or deployment pipelines. He needs "done, here's what changed, want me to publish it live?"
- **Don't dump code at him.** Describe what changed in plain English — "I made the buttons darker and gave them a subtle shadow" — instead of pasting a diff.
- **Handle git and deployment silently** unless something goes wrong. Not "I committed and pushed to main" — just "that's live now," "want me to save this?", or for a branch, "here's a link to see how it looks."
- **On real ambiguity, ask exactly one plain question.** If guessing wrong would be costly — "change the company name" could be a rebrand, a typo fix, or a test — stop and ask. One question at a time, never a list.
- **Lean toward doing what he asks.** The placeholder framing above applies double here. He's the final approver, so if a request conflicts with an earlier scaffold choice, the scaffold gives way.

## About this project

Brown Bear Construction is a custom home builder in Minneapolis, MN. This is a marketing/portfolio site for the business.

The maintainer owns the GitHub repo and the Cloudflare Pages deployment and runs most sessions; AJ, the owner, runs them too, and decides everything substantive. Read "Who you're working with" above before responding — how you communicate differs sharply depending on which of them is driving.

Prefer simple, direct solutions over clever ones. That's a property of this project, not a limitation of who's in the session.

Placeholder tagline: *Building Strength, Crafting Excellence*
Placeholder Instagram: [@brownbearconstructionmn](https://instagram.com/brownbearconstructionmn)

## Approval workflow

What happens to a change depends on **what kind of change it is**, not on who asked for it. AJ can ship content and presentation on his own; structural work waits for the maintainer.

### Ships straight to `main`

Content and presentation. AJ can approve and publish these himself, without waiting on anyone:

- Text and copy edits anywhere on the site
- Photo swaps and additions
- Adding, editing, or removing a project entry
- Color changes and small style adjustments — spacing, sizes, weights
- Typos and broken links

Commit, push to `main`, and Cloudflare Pages publishes it. If AJ is driving, do this silently and just tell him it's live.

### Goes to a branch and waits for the maintainer

Structural work — anything touching how the site is built, organized, or deployed:

- New or removed pages, or changes to the page structure
- New dependencies of any kind
- Tech stack changes: adding a framework, a CMS, or a build step
- Changes to deployment or hosting configuration
- Anything that would be awkward to undo

Commit to a branch and push it. Cloudflare Pages builds a preview URL for that branch, so AJ can see the result — but it does not merge to `main` until the maintainer has reviewed it. Tell AJ it's ready to look at and that the maintainer will publish it.

**When in doubt, branch it.** A preview URL costs nothing; an unwanted change on the live site costs a revert and an awkward conversation.

## Current tech stack

Plain static HTML, CSS, and JavaScript. No build step. No framework. Deploys to Cloudflare Pages as static files with zero configuration.

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
- [ ] **Domain name.** Once chosen, connect it under Custom domains in the Cloudflare Pages project and update any references.
- [ ] **Business email.** Update the `mailto:` link and placeholder address on `contact.html`.
- [ ] **Contact method.** Currently a `mailto:` link. Options include a form service (Formspree, Basin) or a Cloudflare Pages Function — the owner picks.
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

Cloudflare Pages, connected to this GitHub repo. Every push to `main` triggers a redeploy of the live site; every push to any other branch gets its own preview URL, which is what makes the branch-based approval workflow above work.

No build command is needed for the current static setup — the site is served straight from the repo root. If a framework is added later, set the build command and output directory in the Cloudflare Pages project settings accordingly.

Cloudflare Pages was chosen over Vercel because its free tier permits commercial use, which Vercel's Hobby plan does not. This is a business site, so that distinction matters. Keep it in mind before suggesting a move back.

## Future handoff

The repo lives under the maintainer's GitHub account (`twaraich`) indefinitely, because AJ doesn't want to manage GitHub or the hosting himself. This isn't expected to change soon, but if he ever wants to take over:

1. Transfer the GitHub repo to his account, then switch it to private if desired.
2. Have him create his own Cloudflare account. The Pages free tier covers this site, commercial use included — no paid plan required.
3. Reconnect the repo in Cloudflare Pages from his account. A GitHub repo transfer breaks the existing Git connection, because the hosting provider's GitHub App is installed per account. The deployment has to be re-established rather than inherited — expect to re-link, not to migrate.
4. Re-point any custom domain at the new Pages project.
