import { Reveal } from "./Reveal";
import { CyclingWord } from "./CyclingWord";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 pb-24 md:pt-32 md:pb-28"
    >
      {/* Decorative ambient glow — soft terracotta wash, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[60vh] w-[60vh] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(180,106,44,0.18), transparent 70%)",
        }}
      />
      {/* Decorative ambient glow — soft sage wash, bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[60vh] w-[60vh] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(11,57,16,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10">
        {/* Tiny eyebrow */}
        <Reveal>
          <div className="flex items-center gap-3 text-forest/60">
            <span className="block h-px w-10 bg-forest/40" />
            <span className="eyebrow">Oikos by Angelina · est. 2024</span>
          </div>
        </Reveal>

        {/* Headline — typographic statement, no photo */}
        <Reveal delay={120}>
          <h1 className="mt-8 md:mt-12 display text-forest text-[14vw] md:text-[10vw] lg:text-[9.2rem] leading-[0.92] tracking-[-0.02em]">
            <span className="block font-normal not-italic">
              Oikos
              <span className="text-terracotta">.</span>
            </span>
            <span className="block mt-2 md:mt-4 text-[0.62em] md:text-[0.6em] font-normal not-italic text-forest/85">
              For a life that
            </span>
            <span className="block mt-1 md:mt-2 italic text-terracotta">
              <CyclingWord
                words={["sustains", "nurtures", "steadies", "shelters"]}
                totalSeconds={14}
              />
              &nbsp;you.
            </span>
          </h1>
        </Reveal>

        {/* Sub — secondary copy + CTA */}
        <Reveal delay={260}>
          <div className="mt-10 md:mt-14 grid gap-8 md:gap-10 md:grid-cols-12 md:items-end">
            <p className="md:col-span-7 lg:col-span-5 text-base md:text-lg leading-relaxed text-forest/75">
              Biophilic interiors, conscious gifting, and a quiet workplace
              concierge &mdash; designed by someone who believes that doing
              right by the planet should also feel beautiful, calm, and
              personal.
            </p>

            <div className="md:col-span-5 lg:col-span-7 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-x-6 gap-y-4 md:justify-end">
              <a
                href="#what-we-do"
                className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-3.5 text-cream text-sm tracking-wide transition-all hover:bg-earth"
              >
                <span>See what we do</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform group-hover:translate-y-0.5"
                >
                  <path
                    d="M7 1v12m0 0L2 8m5 5l5-5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#contact"
                className="cta-link text-sm tracking-wide text-forest"
              >
                <span>Or start a conversation</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 7h12m0 0L8 2m5 5l-5 5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

      </div>

      {/* Bottom-corner index cue — absolute to section so it always sits at fold */}
      <Reveal delay={420} className="absolute inset-x-0 bottom-6 md:bottom-8 z-10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-forest/45">
          <span>Delhi &middot; India</span>
          <span className="hidden md:block">
            Biophilic &middot; Gifting &middot; Concierge
          </span>
          <span>Scroll &darr;</span>
        </div>
      </Reveal>
    </section>
  );
}
