---
name: design-system-calm
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Calm

## Mission
Deliver implementation-ready design-system guidance for Calm that can be applied consistently across content site interfaces.

## Brand
- Product/brand: Calm
- URL: https://www.calm.com/
- Audience: readers and knowledge seekers
- Product surface: content site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Figtree`, `font.family.stack=Figtree, Helvetica Neue, Helvetica, Arial, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=normal`
- Typography scale: `font.size.xs=13.5px`, `font.size.sm=16px`, `font.size.md=18px`, `font.size.lg=22.5px`, `font.size.xl=31.5px`, `font.size.2xl=36px`, `font.size.3xl=49.5px`
- Color palette: `color.surface.base=#000000`, `color.text.secondary=#ffffff`, `color.text.tertiary=#1c1c1c`, `color.text.inverse=#1a3e6f`, `color.surface.raised=#f7f7f7`, `color.surface.strong=#1b2250`
- Spacing scale: `space.1=2px`, `space.2=8px`, `space.3=12px`, `space.4=14px`, `space.5=16px`, `space.6=17.78px`, `space.7=18px`, `space.8=20px`
- Radius/shadow/motion tokens: `radius.xs=10px`, `radius.sm=20px`, `radius.md=100px` | `motion.duration.instant=200ms`, `motion.duration.fast=300ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
