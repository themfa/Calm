---
name: calm-onepager-design
description: Design and implement the candidate's Calm recruiter HTML one-pager with an accessible dark palette, editorial hierarchy, and an interactive mobile product concept.
---

# Calm one-pager design

Build one responsive page that helps a recruiter forward credible evidence to a hiring manager. The user explicitly requested the project's DESIGN.md and SKILL.md in dark mode. Apply those files as this page's design requirements; read ../../DARK-MODE.md for their implemented dark mapping. Preserve the source files. Read ../calm-career-story/SKILL.md when shaping career claims.

## Art direction

Use the supplied black base, deep-blue featured surfaces, white text, and light controls with blue text. Use the semantic tokens in styles.css. Check final combinations rather than assuming compliance.

Use Figtree for headings and body with the supplied sans-serif fallbacks and type scale. Do not reintroduce Georgia. Favor spacious editorial sections over a wall of equal cards. Use the strongest actual work artifact as the main visual once supplied. Use semantic CSS variables and spacing tokens or explicit multiples; scraped component counts do not require adding more UI.

The memorable element is a small mobile interaction about choosing a manageable next step. Avoid decorative orbs, autoplay sound, compulsory scrolling effects, and constant breathing animation. Atmosphere should come from composition and color.

## Information architecture

1. Identity, opportunity, concise point of view, and work anchor.
2. Verified mobile AI evidence and two supporting projects; show ownership and status alongside artifacts.
3. Clearly labeled independent concept that makes a product hypothesis testable.
4. Compact workflow with human decisions visible throughout.
5. Visible screening answers, with optional deeper evidence.
6. Creative explorations and direct contact.

Adjust order if verified evidence supports a better narrative. A desktop and phone visitor should find the relevant work without completing the demo.

## Implementation

Prefer portable HTML/CSS/JavaScript for the standalone page. Add a framework or backend only when a real requirement calls for it. Keep copy legible without JavaScript. Use real buttons, headings, landmarks, and links; do not make static cards falsely interactive.

Target WCAG 2.2 AA: check 4.5:1 normal text and 3:1 large text; visible focus, keyboard operation, no reliance on color alone, and appropriately labeled controls. Aim for 44px touch controls. Respect reduced motion. Test at 360px, 768px, and desktop widths, plus zoom/reflow. Print output should remain readable with meaningful expanded evidence.

Do not invent screenshots, logo endorsements, contact addresses, outcome numbers, or case-study links. Show missing material as editorial notes only in clearly marked working drafts. The final shareable version must have verified identity, working links, completed evidence, and no editorial placeholders. Do not deploy merely because a local preview is complete.
