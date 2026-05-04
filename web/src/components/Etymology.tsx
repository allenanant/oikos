import { Reveal } from "./Reveal";

/**
 * The etymology section is the page's intellectual centerpiece —
 * it visualizes "oikos = home + household + ecosystem" as a glossary entry,
 * branches it forward to ecology + economy via a hand-feel SVG diagram,
 * then opens the manifesto.
 */
export function Etymology() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 text-forest/60">
            <span className="block h-px w-10 bg-forest/40" />
            <span className="eyebrow">A return to the root</span>
          </div>
        </Reveal>

        {/* Glossary-style entry */}
        <Reveal delay={140}>
          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-10 items-baseline">
            <div className="md:col-span-5">
              <div className="display text-forest/60 text-2xl md:text-3xl italic">
                οἶκος
              </div>
              <div className="display text-forest text-6xl md:text-8xl mt-3 leading-none">
                <span className="italic">oíkos</span>
                <span className="text-terracotta">.</span>
              </div>
              <div className="eyebrow mt-5 text-forest/60">
                noun · ancient Greek
              </div>
            </div>

            <div className="md:col-span-7">
              <p className="display italic text-forest text-2xl md:text-[2rem] leading-[1.35] tracking-tight">
                home
                <span className="not-italic text-terracotta mx-3">·</span>
                household
                <span className="not-italic text-terracotta mx-3">·</span>
                the small ecosystem within it
              </p>
              <p className="mt-6 text-forest/70 text-base md:text-lg leading-relaxed max-w-[58ch]">
                Centuries later, the same root branched into two words that
                began their lives as one&thinsp;
                <span className="display italic text-terracotta">↓</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Branching diagram: οἶκος → ecology + economy */}
        <Reveal delay={220} className="mt-20 md:mt-28">
          <EtymologyBranch />
        </Reveal>

        <div className="hairline mt-24 md:mt-32 text-forest" />

        {/* Manifesto block */}
        <Reveal delay={120}>
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <h2 className="display text-forest text-3xl md:text-5xl leading-[1.05]">
                A return
                <br />
                to that idea.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-forest/80 text-lg md:text-xl leading-relaxed max-w-[60ch]">
              <p>
                Oikos by Angelina is a return to that idea: bringing nature,
                intention, and lightness into the places we spend our lives.
              </p>
              <p>
                Our mission is to guide you in creating a thoughtful and lasting
                change &mdash; whether through mindful corporate gifting or
                biophilic home design.
              </p>
              <p className="text-forest">
                We believe sustainability isn&rsquo;t just about reducing harm;
                it&rsquo;s about
                <span className="display italic"> designing systems </span>
                that nurture both people and the planet.
              </p>
              <p className="display italic text-terracotta text-2xl md:text-3xl pt-4">
                Let&rsquo;s collaborate to build a future that sustains us all.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Hand-feel branching diagram: οἶκος → ecology + economy.
 * Two viewBoxes: a wide one for desktop, a tighter (taller) one for mobile so
 * the subtitle micro-text doesn't shrink below readability when the SVG scales
 * with the container width. Path lengths normalized via pathLength="1".
 */
function EtymologyBranch() {
  return (
    <div className="relative flex justify-center">
      {/* Mobile (under md): tighter viewBox + larger relative fonts */}
      <svg
        viewBox="0 0 420 360"
        className="block md:hidden w-full max-w-md"
        fill="none"
        aria-hidden
      >
        <text x="210" y="46" textAnchor="middle" fontFamily="var(--font-display), serif" fontStyle="italic" fontSize="40" fill="var(--color-forest)">οἶκος</text>
        <path d="M 198,62 C 150,100 110,150 95,210" pathLength={1} stroke="var(--color-terracotta)" strokeWidth="1.2" strokeLinecap="round" className="branch-line" style={{ ["--branch-delay" as string]: "150ms" }} />
        <path d="M 222,62 C 270,100 310,150 325,210" pathLength={1} stroke="var(--color-terracotta)" strokeWidth="1.2" strokeLinecap="round" className="branch-line" style={{ ["--branch-delay" as string]: "150ms" }} />
        <circle cx="95" cy="210" r="3.2" fill="var(--color-terracotta)" className="branch-word" style={{ ["--word-delay" as string]: "1500ms" }} />
        <circle cx="325" cy="210" r="3.2" fill="var(--color-terracotta)" className="branch-word" style={{ ["--word-delay" as string]: "1500ms" }} />
        <g className="branch-word" style={{ ["--word-delay" as string]: "1700ms" }}>
          <text x="95" y="252" textAnchor="middle" fontFamily="var(--font-display), serif" fontStyle="italic" fontSize="34" fill="var(--color-forest)">ecology</text>
          <text x="95" y="284" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="14" letterSpacing="2.4" fill="var(--color-forest)" opacity="0.6">THE STUDY</text>
          <text x="95" y="304" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="14" letterSpacing="2.4" fill="var(--color-forest)" opacity="0.6">OF HOME</text>
        </g>
        <g className="branch-word" style={{ ["--word-delay" as string]: "1900ms" }}>
          <text x="325" y="252" textAnchor="middle" fontFamily="var(--font-display), serif" fontStyle="italic" fontSize="34" fill="var(--color-forest)">economy</text>
          <text x="325" y="284" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="14" letterSpacing="2.4" fill="var(--color-forest)" opacity="0.6">THE MANAGEMENT</text>
          <text x="325" y="304" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="14" letterSpacing="2.4" fill="var(--color-forest)" opacity="0.6">OF HOME</text>
        </g>
        <text x="210" y="346" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="13" letterSpacing="2.6" fill="var(--color-forest)" opacity="0.45" className="branch-word" style={{ ["--word-delay" as string]: "2200ms" }}>TWO WORDS · ONE ROOT</text>
      </svg>

      {/* Desktop (md+): the original wide layout */}
      <svg
        viewBox="0 0 800 320"
        className="hidden md:block w-full max-w-3xl"
        fill="none"
        aria-hidden
      >
        {/* Center root */}
        <text
          x="400"
          y="48"
          textAnchor="middle"
          fontFamily="var(--font-display), serif"
          fontStyle="italic"
          fontSize="44"
          fill="var(--color-forest)"
        >
          οἶκος
        </text>

        {/* Branching lines from root */}
        <path
          d="M 380,68 C 280,110 200,150 175,200"
          pathLength={1}
          stroke="var(--color-terracotta)"
          strokeWidth="1.1"
          strokeLinecap="round"
          className="branch-line"
          style={{ ["--branch-delay" as string]: "150ms" }}
        />
        <path
          d="M 420,68 C 520,110 600,150 625,200"
          pathLength={1}
          stroke="var(--color-terracotta)"
          strokeWidth="1.1"
          strokeLinecap="round"
          className="branch-line"
          style={{ ["--branch-delay" as string]: "150ms" }}
        />

        {/* Small leaf accents at branch ends */}
        <circle
          cx="175"
          cy="200"
          r="3"
          fill="var(--color-terracotta)"
          className="branch-word"
          style={{ ["--word-delay" as string]: "1500ms" }}
        />
        <circle
          cx="625"
          cy="200"
          r="3"
          fill="var(--color-terracotta)"
          className="branch-word"
          style={{ ["--word-delay" as string]: "1500ms" }}
        />

        {/* Left node: ecology */}
        <g
          className="branch-word"
          style={{ ["--word-delay" as string]: "1700ms" }}
        >
          <text
            x="175"
            y="240"
            textAnchor="middle"
            fontFamily="var(--font-display), serif"
            fontStyle="italic"
            fontSize="42"
            fill="var(--color-forest)"
          >
            ecology
          </text>
          <text
            x="175"
            y="272"
            textAnchor="middle"
            fontFamily="var(--font-sans), sans-serif"
            fontSize="11"
            letterSpacing="3"
            fill="var(--color-forest)"
            opacity="0.55"
          >
            THE STUDY OF HOME
          </text>
        </g>

        {/* Right node: economy */}
        <g
          className="branch-word"
          style={{ ["--word-delay" as string]: "1900ms" }}
        >
          <text
            x="625"
            y="240"
            textAnchor="middle"
            fontFamily="var(--font-display), serif"
            fontStyle="italic"
            fontSize="42"
            fill="var(--color-forest)"
          >
            economy
          </text>
          <text
            x="625"
            y="272"
            textAnchor="middle"
            fontFamily="var(--font-sans), sans-serif"
            fontSize="11"
            letterSpacing="3"
            fill="var(--color-forest)"
            opacity="0.55"
          >
            THE MANAGEMENT OF HOME
          </text>
        </g>

        {/* Footnote line */}
        <text
          x="400"
          y="312"
          textAnchor="middle"
          fontFamily="var(--font-sans), sans-serif"
          fontSize="11"
          letterSpacing="3"
          fill="var(--color-forest)"
          opacity="0.4"
          className="branch-word"
          style={{ ["--word-delay" as string]: "2200ms" }}
        >
          TWO WORDS · ONE ROOT
        </text>
      </svg>
    </div>
  );
}
