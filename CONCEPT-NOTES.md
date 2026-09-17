# Calm recruiter page — editorial direction

Status: editorial preview, September 17, 2026. Identity, roles, and two case studies are now populated. Current AI tool usage and a shareable Jane demo artifact remain open. The existing DESIGN.md and SKILL.md remain unchanged. Generated skills live under skills/ as project deliverables; they are not globally installed.

## Confirmed evidence update

- User-confirmed titles: Lead Designer at Credit Karma; Founding Designer at iHeartJane; Senior Designer at Peloton. Prefer these exact titles over inconsistent title labels on the public case pages.
- Portfolio identifies Paul Banks, Principal Product Designer, 16+ years, Charlotte/remote, and paulbankss@gmail.com.
- https://paulbanks.design/work/credit-karma — member sessions, goal-setting, a home experience organized around the goal; reports +34% 90-day retention. The page attributes this outcome to the case study rather than independently validating causation. Local portfolio asset copied from public/work/credit-karma/screens/today-debt.png.
- https://paulbanks.design/work/peloton — Lanebreak gameplay UX, difficulty tiers, reusable Figma components, small product/creative pod, post-ride leaderboard; reports +12% retention. Local portfolio asset copied from public/work/peloton/03-insight.webp.
- Jane user handoff and /Users/mrbanks/Developer/jane/PRODUCT.md establish a Next.js phone prototype on the web, synthetic offers, simulated Santa Cruz, visual discovery, and logistics-only chat. HouseTasteFlow.tsx confirms home → place → hello → activity → feeling → category → price → matches → pdp → cart → order. The current handoff and code take precedence over an older flow description in PRODUCT.md.
- Founding-designer employment and the current Jane prototype are separate pieces of evidence. Do not present the prototype as historical shipped work or a production generative AI integration.
- The requested Jane home changes remain future work in that project. This Calm task does not implement them or change the Jane repository.

## Recommendation

Position for the Principal Designer opportunity in the recruiter message. Lead with judgment, 0-to-1 ownership, mobile AI evidence, and craft. The Senior Designer posting offers useful language about the team but should not override the recruiter's stated role.

The reader should understand fit in two minutes and explore supporting detail if interested. Do not frame the page as an attempt to end a 30-minute conversation early. Use the remaining conversation for mutual assessment and the founders' priorities.

The strongest potential sequence is iHeartJane AI budtender, Peloton, Credit Karma. This is an editorial hypothesis until the artifacts, ownership, platforms, and results are known. A static phone mockup alone cannot substantiate native mobile AI work.

“Financial health equals Mental Health” conveys intent but overstates equivalence. Suggested personal ethic: “Financial wellbeing is part of how I think about wellbeing. I want consequential decisions to feel clearer and less overwhelming.” It still needs an actual Credit Karma example.

Figma is a shared place for exploration, critique, and systems; working code tests interaction and feasibility. Avoid describing Figma as merely a handshake or suggesting that a new hire would unilaterally replace the team's source of truth.

## Proposed page

Hero: “Make the next step feel lighter.” This is proposed copy, not a documented achievement.

Work: one primary AI case with real artifacts, personal decision, uncertainty/fallback behavior, and an outcome; two quieter supporting cases.

Concept: a narrow, scripted “A moment for you” recommendation selector. It illustrates reduced decision effort. Explicitly separate it from shipped work and production AI.

Workflow: understand → explore → build → evaluate, with tools supporting each phase. Establish which tools are actually used before stating experience. Proposed agent workflows belong in an exploration note until practiced.

Q&A: hands-on ownership, research/data, mobile AI, collaboration, systems, and quality. Use concise answers supported by case links.

Explorations: retain all four requested projects in a compact closing section. The Honesty Fetish idea may create a tonal tension with a page about care and nonjudgment. Explain its actual creative question and participant context if featured; do not sanitize or misrepresent it. Favor the strongest reviewed artifact over the most provocative name.

## Evidence needed

- Display name, portfolio, contact, experience and founding-designer history.
- For each named company: dates/role, personal ownership, native/mobile-web/prototype status, shareable screenshots or case links, and defensible results.
- AI budtender: what the model did, what the designer did, what was tested, and what reached users.
- Actual current tools versus proposed workflow; no unsupported speed gains or QA claims.
- Project status and preferred emphasis for each personal exploration.

## Reference notes

- https://careers.calm.com/ — retrieved September 17, 2026. Values shown: Helpful, Empowered, Accountable, Leadership. Translate these into concrete behaviors rather than repeating a values list.
- https://www.calm.com/sleep — retrieved September 17, 2026. Content spans stories, meditations, music, soundscapes, and tracking. This informed the choice concept, not a claim that the existing app has a validated navigation problem.
- https://www.calm.com/careers, /stress-anxiety, and /mindfulness returned access errors in the research tool. Use the supplied posting for the missing team context; do not claim these pages were reviewed.
- The Instagram, Git Design Drops, and BdayParty links could not be inspected in the research tool. Their inclusion uses the candidate's notes; no quality assessment has been made.

## Share-ready requirements

Confirm all career copy, add real work artifacts, replace draft evidence notes, verify contact links, review phone and desktop layouts, test keyboard interactions and contrast, and obtain a shareable hosting destination. The draft is intentionally not presented as recruiter-ready.

## Latest direction and first workflow trial

The user selected personal design tokens, a prominent supplied Calm logo, blue-violet primary actions, green Credit Karma and red Peloton palettes. Personal source: brand-voice-site/Design.md and src/app/globals.css. JetBrains Mono display and Source Sans 3 body are self-hosted; Figtree is confined to the extracted Calm token specimen. Earlier Figtree-only page direction is superseded.

The full Cursor/Figma/Next.js/v0/Devin flow is a target workflow, not established production experience. This revision actually used two specialist agents (personal tokens/evidence and layout review), Codex implementation, and browser verification. No Cursor/Devin integrations were configured, no branches pushed, and no cloud deployment performed.

MustWants: user-supplied story plus local portfolio source records a tested, unshipped concept. 85% refers to the proposed compatibility handoff. IRONLINKINTEL: source records monochrome monitoring with color escalation; the reused portfolio image is reconstructed with synthetic data. No clinical, shipping, or performance claims added.

Mechanical detector ran in degraded regex mode because parser dependencies were unavailable; empty findings are not a full audit.

## Editorial regrouping — September 17
- The hero, selected work, and working approach now form the primary reading sequence. The shortened hero preserves the Calm logo, taste headline, fish-video behavior, and systems-thinker introduction.
- Credit Karma and Peloton lead with original project images, scoped green/red media treatments, white copy, and attributed outcomes. Project images retain their full content.
- MustWants and IRONLINKINTEL demonstrate human handoff decisions without repeated values slogans. The independent Jane prototype now lives with current explorations, distinct from Paul's founding role.
- The AI section leads with the actual decision to move the prototype before the tokens. Prospective integrations are retained in an expandable workflow. No fabricated variant results or usability outcomes.
- The visible palette follows the prototype; spacing, shape, and motion specifications are expandable. Repetitive FAQ content was consolidated into project descriptions.
- Verified valid HTML nesting and unique IDs; browser widths 375, 768, 1100, and 1440 had no horizontal overflow. Verified workflow switching, prototype alternatives, token disclosure, and handoff keyboard interaction.

## Full-bleed editorial layout and homepage card adaptation
- Removed the page-wide fixed container. Hero and Calm prototype span the viewport; IRONLINKINTEL imagery occupies a wide band. Selected work uses a 960px editorial spread, widening to 1120px on large screens; token notes use an 800px measure.
- Adapted the homepage ClientCaseCard cover/title/industry/role hierarchy from brand-voice-site/src/components/sections/portfolio/portfolio-work-section.tsx into standalone HTML. This is an adaptation, not an import of its React animation components.
- Copied existing portfolio hero.webp and exhibit.mp4 assets for Credit Karma and Peloton into this page's assets directory. Previews start only by button, expose pause, and pause offscreen or in background tabs.
- Verified previews load/play, keyboard activation, offscreen pause, mobile single-column cards, and no horizontal overflow at 375/1100/1440px. Full-width hero/prototype/image bands checked against viewport width.

## Recruiter question, grouped prototype, and original covers
- Promoted Jane into a dedicated mobile AI section immediately after the background/roles. Explicitly distinguishes the independent mobile-web interaction prototype from shipped native applications and connected generative-model functionality.
- Restored the four-step process and visible tool inventory, separating tools used in these explorations from the prospective Cursor/Devin pipeline.
- Nested the token specimen inside the Calm prototype's full-width section, with the same background and a subordinate heading.
- Removed the selected-work subtitle as requested.
- Replaced the interim media previews with the actual CreditKarmaSpendingCover and PelotonLanebreakCover React components imported directly from the portfolio repository. covers-src/build.cjs bundles them into self-contained local iframe documents with original token values and local media. A single React instance is enforced for component compatibility. Rebuild uses the existing portfolio dependencies; serving this page needs only the generated local files.
- Verified live animations visually, mobile cover widths/no page overflow, workflow toggle, and nested prototype/token grouping. Earlier React errors were resolved by the shared React alias.

## Premium editorial pass — September 17
- Shortened the hero biography; preserved the headline, personal observation, logo, and experience strip. Fish footage now has a longer visible interval between the existing black fades and 1.2-second hold.
- Added the actual 46-second Jane walkthrough from the Jane repository as a user-controlled recording, with a local poster and explicit recorded-iteration/simulated-flow label. The Jane repository was not changed.
- Enlarged the Calm demo and artwork, kept its swatches inside the same band, and reserved suggestion space to avoid vertical jumps. All previously removed token details remain removed.
- Supporting headings now use Source Sans 3; main editorial and project headings retain JetBrains Mono. Tightened process sentences while retaining used-versus-planned tool lists.
- Original portfolio covers share a parent-controlled playback spotlight through their existing CaseCoverLit context. Selection cycles while visible, and direct interaction selects a cover. Hidden-page and reduced-motion behavior remain supported.
- Git Design Drops uses its actual portfolio artwork as the closing feature; AI Characters remains a text-led secondary feature, with the other project links retained.
- Browser review: 952px desktop and 375px mobile, no horizontal overflow; Jane playback reached readyState 4 and advanced; Calm button and keyboard updates worked with a stable 250px mobile suggestion region; original covers rendered with Credit Karma active and Peloton resting.
