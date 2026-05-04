# Variant 10 — Material Layered Parallax

**Direction:** Multiple physical-feeling layers stacked in depth, each responding to mouse or scroll. Linen back, leaf shadow midground, glass-overlay foreground type. Tactile, cinematic, premium.

**Signature move:**
- Three z-stacked layers:
  1. **Background (z=0):** cream paper texture, very subtle, full-bleed
  2. **Midground (z=10):** a soft-shadow leaf cluster (use a real Unsplash photo of a Monstera or fern with a clean cream/white background, blur 4–8px, opacity 0.5, drop-shadow). The shadow extends across half the viewport.
  3. **Foreground (z=20):** the headline type, in deep forest Garamond, with a subtle layered depth via `filter: drop-shadow(0 30px 40px rgba(60,35,15,0.15))`
- On mouse-move (or scroll), each layer translates slightly differently:
  - Background: 0.2× movement
  - Midground: 0.6× movement (more pronounced)
  - Foreground: 1× (normal)
- This creates a 3D cinematic feel — the leaf shadow drifts as the cursor moves, like sunlight shifting

**Inspiration tone:** Apple's home page hero, Linear's product hero, Google's Year in Search retrospectives

**Constraints:**
- Subtle parallax — max ±20px translation per layer, NOT dramatic
- Smooth: use `transform: translate3d(...)` for GPU acceleration, transition `0.4s cubic-bezier(0.22, 1, 0.36, 1)`
- Touch fallback: if no mouse (mobile), use scroll position instead of cursor
- The midground photo MUST have a clean cream/white background that blends with the canvas — find one on Unsplash that's a leaf on cream linen, or apply CSS filters to make it integrate
- Headline: standard hierarchy, no kinetic word cycler in this variant — let the parallax be the motion
