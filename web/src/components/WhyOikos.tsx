import { Reveal } from "./Reveal";

const pillars = [
  {
    eyebrow: "Pillar one",
    title: "Creative Solutions, Rooted in Nature",
    italicLead: "We believe that responsibility can be beautiful.",
    body: "Our approach blends creativity with ecology — transforming spaces with biophilic art, upcycled materials, and nature-inspired design.",
  },
  {
    eyebrow: "Pillar two",
    title: "Practical Guidance, Personal Approach",
    italicLead:
      "We listen, collaborate, and co-create realistic strategies tailored to your lifestyle or business.",
    body: "Whether it's planning a festive hamper, greening an office, or rethinking how your workplace stocks its essentials, our goal is to make sustainability intuitive — not intimidating.",
  },
];

export function WhyOikos() {
  return (
    <section
      id="why-oikos"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Subtle terracotta wash, top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 h-[55vh] w-[55vh] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(228,197,138,0.35), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Heading */}
        <Reveal>
          <div className="flex items-center gap-3 text-forest/60">
            <span className="block h-px w-10 bg-forest/40" />
            <span className="eyebrow">Why Oikos</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 md:mt-14 max-w-[64rem]">
            <p className="display text-forest text-3xl md:text-[3.6rem] leading-[1.1] tracking-tight">
              At Oikos, sustainability isn&rsquo;t about
              <span className="italic text-forest/45 line-through decoration-1 decoration-forest/30 [text-decoration-skip-ink:none]"> perfection</span>
              <span className="text-terracotta">;</span>
              <br className="hidden md:block" />
              it&rsquo;s about
              <span className="italic text-terracotta"> intention</span>.
            </p>
            <p className="mt-8 text-forest/75 text-lg md:text-xl leading-relaxed max-w-[58ch]">
              We help you bring purpose, creativity, and authenticity into the
              way you live and work — one conscious choice at a time.
            </p>
          </div>
        </Reveal>

        {/* Two pillars */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="space-y-6">
                <div className="flex items-center gap-3 text-forest/55">
                  <span className="block h-px w-8 bg-forest/35" />
                  <span className="eyebrow">{p.eyebrow}</span>
                </div>
                <h3 className="display text-forest text-3xl md:text-[2.6rem] leading-[1.05]">
                  {p.title}
                </h3>
                <p className="display italic text-terracotta text-xl md:text-2xl leading-snug">
                  {p.italicLead}
                </p>
                <p className="text-forest/80 text-base md:text-lg leading-relaxed max-w-[48ch]">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
