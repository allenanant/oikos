# Variant 03 — Live Botanical Centerpiece

**Direction:** A single, exquisite SVG plant illustration sits as the visual centerpiece. It gently breathes — leaves sway with a slow, almost imperceptible CSS keyframe motion (4–8s ease-in-out). The headline orbits the plant.

**Signature move:**
- Hand-drawn line-art SVG of one specific plant: a Monstera deliciosa frond, OR a Boston fern, OR an olive branch — your choice, but research real botanical illustrations to inspire the line work. Stroke is terracotta `#B46A2C`, 1.2–1.5px width, with subtle variation as if hand-drawn
- The SVG sits center-stage at ~60% of viewport height
- Headline wraps around it: "Oikos." top-left, "for a life that" mid-left, "*sustains you.*" bottom-right (italic terracotta)
- Subtle CSS animation: each leaf has its own gentle 6–10s sway via `transform: rotate(...)` keyframes, drift offset per leaf

**Inspiration tone:** Victorian herbarium plates, Linnaean botanical illustrations, Cereal Magazine's quiet motifs

**Constraints:**
- The plant SVG must be DRAWN WELL — not generic clip-art. Spend effort on this. Use cubic Bézier curves, vary stroke widths slightly per leaf, mimic a fine pen-and-ink illustration
- No photographs in this variant — the plant illustration carries everything
- Background: cream `#FFF8EB` only
- The animation must be GENTLE — fast/jerky motion = AI slop
- Optional: a single small terracotta circle as a sun behind one of the leaves
