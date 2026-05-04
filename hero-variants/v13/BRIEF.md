# Variant 13 — Window Onto a Moment (evolves v07)

**Direction:** Instead of a full-bleed forest video, a SMALL framed video sits as a window into a quiet, intimate biophilic moment — golden afternoon light moving across linen, a hand pouring tea, a leaf catching breeze, dust motes in sunlight. The hero is mostly cream with editorial type; the video is a glimpse, not the main event.

**Signature move:**
- Cream hero background with the headline composed in left/center editorial layout
- Top-right corner of the hero (or a 40% × 50% rectangle anchored right): a small framed `<video>` element with `object-fit: cover`, autoplay/muted/loop. The video is short (5–10s) and intimate — NOT a forest scene. Find a Pexels video URL that fits: search `golden hour light interior`, `linen curtain breeze`, `morning tea pour`, `sunlight wood table`, `dust motes window light`.
- The video frame has a subtle 1px terracotta border + soft drop-shadow grounding it
- Above or below the video frame: a small caption in Inter italic, e.g. `still life · Delhi morning, vol. ii`
- Headline composition (left side): `Oikos.` Garamond Roman, `For a life that` smaller, `sustains you.` Garamond italic terracotta. About + CTAs below.

**Imagery:** Pexels video URL (free CDN). Fallback to a static photo if no video resolves. Whatever video you pick, it must NOT be a forest, NOT a tree, NOT outdoor wilderness — it should be an INTIMATE indoor or close-up moment.

**Constraints:**
- The video must be compact (40% width max), not full-bleed
- Type stack: ONLY EB Garamond + Inter
- The video must be muted, autoplay, loop, plays-inline
- If the video has cool tones, apply `filter: sepia(0.15) saturate(1.05)` to warm it
- One terracotta accent point only (the period in Oikos. or the rule under the video caption)
