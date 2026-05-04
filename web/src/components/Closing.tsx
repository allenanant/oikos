import { Reveal } from "./Reveal";

export function Closing() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 bg-forest text-cream overflow-hidden"
    >
      {/* Ambient warm wash to soften the deep green */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[60vh] w-[60vh] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(180,106,44,0.55), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-32 h-[60vh] w-[60vh] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(228,197,138,0.45), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1100px] px-6 md:px-10 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 text-cream/65">
            <span className="block h-px w-10 bg-cream/45" />
            <span className="eyebrow">Closing</span>
            <span className="block h-px w-10 bg-cream/45" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="display text-cream text-4xl md:text-7xl mt-10 leading-[1.05] tracking-tight">
            Tell us about
            <br />
            <span className="italic text-gold">your space</span>
            <span className="text-terracotta-soft">,</span>{" "}
            <span className="italic text-gold">your occasion</span>
            <span className="text-terracotta-soft">,</span>
            <br />
            or your office.
          </h2>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-10 md:mt-12 text-cream/80 text-lg md:text-xl leading-relaxed max-w-[44ch] mx-auto">
            We&rsquo;ll take it from there. One short conversation is usually
            all it takes to find the right starting point.
          </p>
        </Reveal>

        <Reveal delay={380}>
          <div className="mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="mailto:oikosbyangelina@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-forest text-sm tracking-wide transition-all hover:bg-gold"
            >
              <span>Get in touch</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform group-hover:translate-x-0.5"
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

            <a
              href="mailto:oikosbyangelina@gmail.com"
              className="cta-link text-cream/85 text-sm tracking-wide"
            >
              <span>oikosbyangelina@gmail.com</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
