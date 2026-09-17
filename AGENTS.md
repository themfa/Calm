# Calm workflow
Read spec.md, DESIGN.md, and workflow/README.md before changes. User direction takes precedence.
The personal portfolio theme in styles.css controls the page. DESIGN.md contains Calm specimen tokens, not the page-wide theme. Preserve evidence boundaries in spec.md.

## Implementation
- Existing index.html, styles.css, assets/, covers/, work/, and root interaction scripts remain the authored migration source.
- app/page.tsx is a transitional Next.js adapter, not a completed React component migration.
- public/ is generated: edit the source, then run npm run prepare:site. Restart the server after authored HTML changes if necessary.
- New components use TypeScript, semantic tokens, and server components by default. Interactive React components use client boundaries.
- Give one implementation owner each file. Use isolated branches for independent tasks.
- Do not claim v0, Conductor, Devin, GitHub, or cloud previews are connected without a successful handoff.

## Verification and delivery
Run npm run check and npm run test:e2e. Report unrun checks and failures honestly.
Return the branch/commit, scope, changed files, verification evidence, and remaining issues.
Paul approves visual direction and release. Do not push or deploy as a side effect of local editing.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
