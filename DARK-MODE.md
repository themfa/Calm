# Dark-mode application of the supplied design system

## Context and intent
Apply DESIGN.md and SKILL.md to Paul Banks's Calm application page. The user's explicit dark-mode direction takes precedence over light surface roles in the scraped palette. Career content and source screenshots retain their existing meaning.

## Foundations
- Figtree must be used across headings and body, with the supplied Helvetica/Arial fallbacks. Google Fonts supplies weights 400–700 with swap behavior.
- Type must use the supplied 13.5, 16, 18, 22.5, 31.5, 36, and 49.5px scale. Phone headings use 36px or 31.5px as appropriate.
- Base must use #000000; featured surfaces use #1b2250. The supplied #1c1c1c becomes a dark raised surface. White is primary text; #cccccc is the accessible secondary-text adaptation.
- #f7f7f7 and #1a3e6f must be paired for light action surfaces and blue text. Dark blue must not become small text on black.
- Spacing must use supplied tokens or explicit multiples for larger page intervals. Radii use 10px, 20px, and 100px; transitions use 200ms. The supplied 300ms token is available without adding unnecessary animation.
- #909090 is the dark-mode control/focus-boundary adaptation; #444444 is decorative separation only.

## Components and behavior
- Links, buttons, and disclosures must support pointer, touch, and keyboard. Buttons use Enter/Space; links Enter; native details provide disclosure behavior.
- Primary actions use light fill and blue text. Hover reinforces the action, active changes its fill, and focus-visible draws an offset white outline.
- Intent buttons must expose selection with aria-pressed and contrasting fill. Switching intents resets the variant and updates the live result. The alternate action remains keyboard accessible.
- Disabled controls must be visibly muted and semantically disabled if introduced. Busy controls must expose aria-busy with visible status text if asynchronous work is introduced. The current demo is synchronous, so loading/error states are not fabricated.
- Actual errors must use explicit text and recovery actions rather than color alone. The error class provides a text-and-border treatment for future real failures.
- Static evidence cards have no fake interactive states. Original case-study images must remain unaltered; their surrounding panels stay dark.
- Long labels must wrap. Grids collapse on phones; navigation moves below the identity. Empty case-study data must not produce invented content.

## Accessibility acceptance criteria
- Normal text must meet 4.5:1; control boundaries must meet 3:1 against their immediate surface.
- Interactive targets should be at least 44px tall. Keyboard focus must remain visible and unobscured.
- At 360px and 768px, document width must not exceed viewport width. At browser zoom, content must reflow without clipping.
- Reduced-motion preference must remove smooth scrolling and transitions.
- Text must remain available if the web font or JavaScript fails. Main content must have semantic headings and a skip link.

## Content and anti-patterns
Preserve concise, grounded case-study language. No Georgia headings, undersized 10px captions, unrelated accent palette, or dark-blue body text on black. Do not apply the scraped component counts as a requirement to add redundant UI.

## QA
Check font loading, actual computed theme colors, image loading, desktop/phone reflow, selected-state contrast, keyboard activation, and absence of console errors. Print uses a separate legible light treatment; screen presentation remains dark.
