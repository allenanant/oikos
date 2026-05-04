# Variant 07 — Cinematic Video Loop

**Direction:** A muted, slow-motion video loop fills the viewport — sunlight through leaves, a breeze through linen curtains, water on stone, dust motes in golden hour. Headline overlaid in cream italic Garamond, anchored bottom-center.

**Signature move:**
- Full-viewport `<video>` element, autoplay, muted, loop, plays-inline, with `object-fit: cover`
- Source must be a free CDN-served nature loop. Try Pexels: `https://videos.pexels.com/video-files/...` (search Pexels for: `sunlight leaves slow motion`, `linen curtain breeze`, `water on stone golden hour`, `morning fog forest`). Pick a calm, warm-toned one.
- Subtle dark-warm gradient overlay (~30% opacity, terracotta-to-transparent from bottom) for headline contrast
- Headline bottom-center in cream Garamond italic, restrained scale (~9rem)
- A small play/pause icon top-right (1px stroke, cream) — interactive, lets viewers freeze the moment
- Optional: a thin sound-icon to allow muted/unmuted toggle (default muted)

**Inspiration tone:** Nowness film essays, Philippe Petit's nature footage, Apple's first iPad ad

**Constraints:**
- The video MUST autoplay and loop without seams — pick one with a clear endable cycle
- No people on camera (per brief — biophilic abstract only)
- Fallback: if video fails to load, gracefully degrade to a still photo with same headline overlay
- File size: video URL is external; HTML still <60KB
