# Oikos by Angelina · Brand Spec

> Source: extracted from existing Wix site oikosbyangelina.com (2026-05-04)
> Confidence: high on palette + fonts (extracted from real CSS), partial on logo (no logo image found — wordmark only)

---

## 🎨 Palette (real, from Wix theme variables Angelina configured)

| Role | Hex | RGB | Name |
|---|---|---|---|
| Background (primary) | `#FFF8EB` | 255,248,235 | Warm cream / parchment |
| Ink (primary text, dark) | `#0B3910` | 11,57,16 | Deep forest green |
| Accent (warm, primary CTA) | `#B46A2C` | 180,106,44 | Terracotta |
| Sand | `#ECCDB2` | 236,205,178 | Soft peach-beige |
| Honey | `#DA9B66` | 218,155,102 | Warm tan |
| Gold | `#E4C58A` | 228,197,138 | Muted gold |
| Earth | `#3C230F` | 60,35,15 | Dark cocoa brown |
| Berry (rare accent) | `#6E1919` | 110,25,25 | Deep maroon |
| Sage (subtle) | `#939991` | 147,153,145 | Olive-gray |

**Logic**: Earthy Mediterranean palette — cream + terracotta + forest green is the spine. Sand/honey/gold are nuance shades. Dark cocoa for depth. Sage as quiet neutral.

---

## ✍️ Type stack

| Role | Font | Notes |
|---|---|---|
| Display (hero, large headers) | **EB Garamond** italic | Serif. Echoes the "ancient Greek roots" of *oikos* etymology. Used sparingly in italic for emotional moments. |
| Display alt (utility headers) | **Alfabet** (or fallback `Söhne`/`Inter`) | Clean sans for section headers. |
| Body | **Poppins** | Readable, contemporary. |

For the new Next.js build I'll use **EB Garamond** (Google Fonts) + **Inter** as Alfabet substitute (Alfabet is paid Wix font; Inter is closest free-tier match) + **Poppins**.

---

## 🪄 Visual signature

- **Earthy palette over white**: cream background carries everything
- **Italic serif for emotion**: Garamond italic on hero phrases is the signature gesture
- **Biophilic imagery**: plants, organic textures, natural light, soft focus
- **Hand-feel over digital-feel**: muted, layered, tactile — not glassy/glossy

---

## 🚫 Anti-slop guards (for this brand specifically)

- **Never use** purple gradients, neon greens, generic "eco" cliché green badges
- **Never use** emoji-as-icon (Notion-style 🌱) — clashes with the curated tone
- **Never use** Inter / Roboto as display font — too generic
- **No stock "diverse hands holding plants"** photography — too clichéd
- **No CSS-drawn leaf SVGs** — use real photographs of foliage

---

## ✏️ Logo

- **No logo image asset found** on existing site — wordmark is rendered as styled text
- Existing tagline `Oikos ~ your sustainability partner` — **DEPRECATED** (business model changed)
- New approach: typographic wordmark in EB Garamond italic, lowercase `oikos.` with the period as a subtle anchor — easy to swap if Angelina has/wants a real logo file later

---

## 🌿 Imagery direction

- Real biophilic photography — plants, foliage, natural materials, hand-curated objects
- Warm light, soft focus
- Source priority: (1) Angelina's own photos if available, (2) Unsplash (free, attributable), (3) AI-generated as last resort
