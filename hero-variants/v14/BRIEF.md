# Variant 14 — Linen Layered Parallax (evolves v10)

**Direction:** Three layers of warm fabric texture stacked in depth. A linen background, a draped cloth shadow midground, a single pressed-botanical photograph foreground — but small, as a found object. Type sits on top. On mouse-move (or scroll), each layer translates subtly. Tactile, warm, like opening a dresser drawer of folded textiles.

**Signature move:**
- 3 z-stacked layers (CSS transform translateZ feel via parallax):
  1. **Background (z=0):** cream paper/linen texture, very subtle (SVG noise + warm tint), full-bleed
  2. **Midground (z=10):** a soft drape shadow — like a linen cloth crumpled in soft daylight (use a real Unsplash photo of folded linen with soft shadows, blur 6px, opacity 0.4, full-bleed)
  3. **Foreground (z=20):** type + a small photograph of a SINGLE pressed botanical (a sprig of olive, a piece of dried lavender, a fern frond) shown as if placed on the linen. The photo is small (~120×160px), has soft shadow, looks like an analog print on the fabric
- On mouse-move: each layer translates slightly differently (background 0.2x, midground 0.6x, foreground 1x)
- Headline + about copy + CTAs sit center or left-center, Garamond + Inter

**Imagery:** Find Unsplash for `folded linen fabric soft shadow` and `pressed botanical specimen` (one each). Both warm tones, no green grass jungle.

**Constraints:**
- Subtle parallax — max ±15px per layer
- The pressed botanical photo MUST be small (a fragment, not the hero)
- Type stack: ONLY EB Garamond + Inter
- Touch-device fallback: use scrollY position instead of cursor
- The whole composition should feel quiet and cared-for
