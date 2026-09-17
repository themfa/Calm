# Full Flow: Code-Native Cockpit

Figma as an optional bridge. Target workflow; branch names are examples and automated handoffs are not yet connected.

```text
[ FIGMA / DESIGN TEAM ]
  Optional bridge
  DESIGN.md / assets + tokens
          ^
          | Sync / handshake
          v
[ CODE REPOSITORY ] ----> [ CURSOR IDE ] ----------> [ NEXT.JS APP ROUTER ] ----> [ DEVIN ]
  Source of truth          Central cockpit           Streaming / state           Background cloud QA
  | spec.md                | Cursor Composer         | Variant A                  | Playwright QA
  | AGENTS.md              | Integrated terminal     | feat/feed-vertical          | Preview URLs
  | Tailwind tokens        | Optional v0 CLI         | Variant B                  | Screenshots
                           | task-template.md        | feat/feed-horizontal        | Tested commit
                           | v0-brief.md             | spec.md                     | devin-qa.md
                                                     +-- Git push / branch ------> |
          ^                                                                        |
          |                                                                        v
          +---- Update spec.md <---- [ HUMAN REVIEW / NEXT ITERATION ] <---- QA evidence
                                       review-notes.md / findings + outcomes
                                       README.md / handoff + release guidance
```

## Documents at each touchpoint

1. **Frame the right problem:** `spec.md` defines intent, constraints, and acceptance criteria.
2. **Align on a direction:** `DESIGN.md` supplies design reference; `AGENTS.md` sets agent rules. Personal page tokens remain in `styles.css`, mapped into Tailwind.
3. **Explore. Test. Decide:** `workflow/task-template.md` scopes the task; `workflow/v0-brief.md` prepares an optional generation handoff. Compare Next.js variants against `spec.md`.
4. **Carry the craft through:** `workflow/devin-qa.md` specifies browser checks, screenshots, and the exact branch or commit to review.
5. **Measure and evolve:** `workflow/review-notes.md` records findings, outcomes, and next decisions. `workflow/README.md` describes handoff and release steps. Feed the findings back into `spec.md`.

Document names in the diagram are shortened; workflow documents live under `workflow/`.
