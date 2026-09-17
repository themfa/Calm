# QA handoff for Devin
Repository: [URL]
Branch and exact commit: [required]
Preview URL: [URL, or run locally]

Read AGENTS.md and spec.md. Report defects and evidence; do not merge or deploy.
Use Node 22+. Run npm ci, npm run check, npx playwright install --with-deps chromium, and npm run test:e2e.
For exploratory QA run npm run dev -- --hostname 0.0.0.0 --port 3100.

Check at desktop and phone widths:
1. The Calm logo, local typography, hero, and case-study media render.
2. Navigation reaches the intended sections without horizontal overflow.
3. Preview the handoff opens and closes with Enter; expanded state matches visibility.
4. Edit my profile opens, quiet guidance saves, and focus returns to the edit control.
5. Start/end wind-down reports simulated behavior; no real-device claims.
6. Visible keyboard focus and reduced-motion behavior remain usable.
7. Report failed resources and console errors with their origin.

The Jane iframe references a separate local service on port 3005. Treat its absence as a known external dependency, not a passing test or an instruction to modify Jane.
Return the tested commit, pass/fail per journey, reproducible failures, screenshots or recording, and any untested criteria. Escalate visual taste decisions to Paul.
