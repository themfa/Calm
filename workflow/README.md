# Calm design workflow

## Start locally
Requires Node 22+ and npm. Install with `npm ci`. Run `npm run dev -- --port 3100`, then open http://localhost:3100.
`npm run check` runs lint, TypeScript, and a production build.
`npx playwright install chromium` installs the test browser; `npm run test:e2e` runs desktop/mobile interaction checks.

## Ownership and handoffs
Paul directs and approves → spec.md defines acceptance → v0 drafts a bounded component → Cursor integrates → Conductor isolates independent implementation tasks → Devin tests the specified branch → Paul reviews the preview before release.
Start each task with task-template.md. Use v0-brief.md and devin-qa.md for the tool-specific handoffs.
This is a manual handoff workflow. No background agent scheduling or automatic publishing is configured.

## Files and migration
The current authored site remains index.html, styles.css, root interaction scripts, assets/, covers/, and work/.
Next.js App Router serves the page using a transitional adapter. This preserves existing HTML and behavior; it is not yet a component-by-component React rewrite. New React sections should replace the corresponding legacy section so content never appears twice.
The prepare:site command copies public assets and extracts inline interactions. public/ is generated and ignored. Rerun preparation after editing assets, styles, or scripts.
Tailwind utilities are available in app/globals.css without replacing the site's existing reset. Semantic utility aliases point to the existing CSS tokens.
The Jane iframe requires a separate local service on port 3005. Cloud QA must report it as unavailable until given a reachable prototype URL; do not alter Jane to make these tests pass.

## Cursor
Open this folder in Cursor. The always-apply rule is .cursor/rules/workflow.mdc. Have Cursor read AGENTS.md and spec.md. Verify a first task by asking it to identify the correct page theme and Calm specimen distinction before generating a component.

## Conductor
Installed locally. Shared setup/run configuration is in .conductor/settings.toml using the current documented format.
After creating the Git baseline, import this repository in Conductor, create a workspace, and press Run. Setup runs npm ci; Run uses CONDUCTOR_PORT or 3100.
A successful check means the isolated workspace installs dependencies and serves this page on its assigned port. Configuration on disk is not evidence that this has happened.

## GitHub and CI
The local GitHub CLI reported an invalid saved login during setup. Reauthenticate with `gh auth login --hostname github.com --web` in your own terminal.
Choose a repository before creating a remote. Once published, .github/workflows/quality.yml runs install, static checks, build, and browser checks on pull requests and pushes to main.
Do not put account tokens in Markdown or commit .env files.

## v0
Sign in at https://v0.app and use v0-brief.md with the relevant token excerpt and component reference. Review the draft, then bring the selected files into the feature branch through supported export or GitHub integration. No unverified v0 CLI command is assumed.
Confirm completion by running the imported component locally and verifying the acceptance criteria. No v0 connection has been tested yet.

## Devin
Sign in at https://app.devin.ai, connect the chosen repository, and configure a repository environment with Node 22+, npm ci, and the Chromium browser install above. Send devin-qa.md with an exact commit and reachable preview or startup instructions.
Return findings with screenshots/recordings and the tested commit. No Devin connection has been tested yet.

## Official references
- https://nextjs.org/docs/app/getting-started/installation
- https://prod.cursor.com/docs/rules
- https://www.conductor.build/docs/reference/scripts/share-with-teammates
- https://v0.app/docs/faqs
- https://docs.devin.ai/work-with-devin/testing-and-recordings
