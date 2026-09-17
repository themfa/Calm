# Full Flow: Code-Native Cockpit

Figma as an optional bridge. Target workflow; branch names are examples and automated handoffs are not yet connected.

```text
[ CODE REPOSITORY / SOURCE OF TRUTH ] <-- Sync / Handshake --> [ FIGMA ]
|  spec.md              Product intent and acceptance criteria  Optional
|  AGENTS.md            Agent rules and implementation context  team bridge
|  DESIGN.md            Design reference
|  styles.css           Personal tokens / Tailwind mapping
|
v
[ CURSOR / CODEX / CENTRAL COCKPIT ]
|  workflow/task-template.md   Scope, constraints, deliverables
|  Cursor Composer            Explore interface variants
|  workflow/v0-brief.md        Brief for optional v0 generation
|  Integrated terminal        Optional v0 CLI handoff
|
v
[ NEXT.JS APP ROUTER / STREAMING + STATE ]
|  Variant A: feat/feed-vertical
|  Variant B: feat/feed-horizontal
|  spec.md                    Check both against acceptance criteria
|
|  Git push / branch + reviewable handoff
v
[ DEVIN / BACKGROUND CLOUD AGENT ]
|  workflow/devin-qa.md        QA scope, browser checks, evidence
|  Playwright                 Desktop / mobile QA
|  Preview URLs               Share the tested build
|
v
[ HUMAN REVIEW / RELEASE ]
   workflow/README.md         Handoff and release guidance
   Paul reviews the result before release
```
