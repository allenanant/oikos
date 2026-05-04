# Variant 09 — Scroll-Driven Kinetic Type

**Direction:** The headline reveals progressively as the user scrolls within the hero. A choreographed kinetic type sequence — every word has its moment.

**Signature move:**
- On initial view: only `Oikos.` is visible, centered, large
- As user scrolls (within hero, ~80vh of scroll length), additional fragments fade/translate in:
  - `for a life that` appears below `Oikos.` at scroll 25%
  - `sustains` appears italic terracotta at scroll 50%
  - `you.` appears at scroll 75%
  - At scroll 100%, the entire headline is composed, then a small `↓ continue` cue appears at the bottom
- Use `IntersectionObserver` with thresholds OR scroll-driven CSS animations (modern `animation-timeline: scroll()`)
- Each word transitions with: `opacity 0 → 1` + `translateY(40px → 0)` + `filter: blur(8px → 0)` over the scroll range
- Type kerning shifts subtly with scroll progress (use `letter-spacing` interpolation)

**Inspiration tone:** Apple's product launch pages, Studio Frantic experimental type, Maxime Bouvier's scroll experiments

**Constraints:**
- Must work without JS too — fallback: all text visible, no scroll-bound animation
- If using `animation-timeline: scroll()`, also include a JS fallback for non-supporting browsers
- The choreography must feel intentional, not gimmicky
- Keep total scroll distance reasonable (~80vh) — not a 5-screen tease
- Background cream, no photos in this variant
