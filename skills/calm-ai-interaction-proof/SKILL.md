---
name: calm-ai-interaction-proof
description: Prototype and evaluate a small mobile AI interaction for the Calm candidate page, separating simulated product behavior from real AI integration and shipped experience.
---

# Calm AI interaction proof

Demonstrate judgment through an independent product hypothesis: can a small number of choices help a tired person reach suitable content with less effort? This is a proposed experiment, not a finding about Calm's current app.

Start with intent selection, a short recommendation, an understandable reason, and an alternative. Keep browse/skip control available. Do not turn the concept into an unsolicited diagnostic or therapeutic chatbot.

## Honest scope

Label deterministic behavior “Interactive concept · simulated recommendations.” An HTML mockup does not prove native mobile shipping or a production generative AI system. Keep the label visible near the demo.

If real AI is requested later, define source content, model task, data flow, and evaluation before implementation. Keep secrets server-side. Prototype latency, cancellation, unreliable responses, and a useful fallback. Do not stream partial health guidance. User preferences should remain inspectable and editable.

For a local scripted demo, avoid sensitive free-text inputs and persistence. Never silently transmit inferred emotional states. Do not claim personalized clinical benefit from a selection.

## Useful variations

Compare two ways to solve the same problem, such as guided choice versus browse-first selection. Keep content and task consistent. Vary one main decision at a time. Record hypothesis, expected benefit, tradeoff, and what observation would change the designer's mind. Parallel agents and deployment tools are optional capabilities, not evidence of actual use.

Measure task completion, time to first suitable selection, perceived effort, trust in the explanation, and recovery from an unsuitable suggestion. These are proposed measures until tested. Longer sessions or more clicks are not automatically desirable in a sleep context.

## Verification

Check every selectable intent, alternate recommendation, loading/fallback state if present, reset, keyboard focus, announcements, and reduced motion. No fake playback buttons: supply functioning user-initiated audio with pause controls, or accurately label a text-only preview. Report what was actually tested and any remaining uncertainty.
