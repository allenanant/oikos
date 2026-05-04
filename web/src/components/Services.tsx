import Image from "next/image";
import { Reveal } from "./Reveal";

type Service = {
  number: string;
  title: string;
  italicWord?: string;
  body: string;
  pull?: string;
  suitedFor: string;
  cta: { label: string; href: string };
  image: { src: string; alt: string; credit: string };
};

const services: Service[] = [
  {
    number: "01",
    title: "Biophilic Design",
    body: "We design offices that draw from nature rather than shut it out. Plants chosen for the light you actually have. Materials that age well. Layouts that follow how a body wants to move through a room. Air, texture, and greenery treated as part of the architecture, not decoration laid on top.",
    suitedFor:
      "Studios, café and retail interiors, and corporate offices that want to feel less like corporate offices.",
    cta: { label: "See our design work", href: "#contact" },
    image: {
      src: "/photos/biophilic.jpg",
      alt: "A Monstera deliciosa in a stoneware pot beside a sculpted chair — calm, plant-led interior",
      credit: "Unsplash",
    },
  },
  {
    number: "02",
    title: "Conscious Gifting",
    body: "Curated gifts for festivals, corporate occasions, and the moments in between — assembled by hand, sourced from small makers, and built around things people actually keep.",
    suitedFor:
      "Personal gifting, wedding favours, client appreciation, employee onboarding, festive hampers.",
    cta: { label: "Browse gifting", href: "#contact" },
    image: {
      src: "/photos/gifting.jpg",
      alt: "A kraft-paper parcel tied in twine, finished with a wax seal and a sprig of cedar",
      credit: "Unsplash",
    },
  },
  {
    number: "03",
    title: "An Eco-friendly Workplace Concierge",
    body: "A standing supply service for the things your workplace quietly runs on — tissues, hand soap, room scents, pantry refills, washroom essentials, seasonal touches. Sourced from sustainable brands, delivered on a schedule that matches your usage, and replenished before anyone has to ask.",
    pull: "One conversation at the start. Ongoing care after that.",
    suitedFor:
      "Offices, co-working spaces, boutique hotels, clinics, studios.",
    cta: { label: "Set up a consultation", href: "#contact" },
    image: {
      src: "/photos/concierge.jpg",
      alt: "Two refillable amber-glass bottles arranged on a warm-wood surface — sustainable workplace supplies",
      credit: "Unsplash",
    },
  },
];

export function Services() {
  return (
    <section
      id="what-we-do"
      className="relative py-24 md:py-36 bg-cream-soft"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Section header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 text-forest/60">
                <span className="block h-px w-10 bg-forest/40" />
                <span className="eyebrow">What we do</span>
              </div>
              <h2 className="display text-forest text-5xl md:text-7xl mt-6 leading-[0.98]">
                Three ways we
                <br />
                <span className="italic text-terracotta">bring oikos in.</span>
              </h2>
            </div>
            <p className="md:max-w-sm text-forest/70 text-base leading-relaxed">
              Each engagement begins the same way — a conversation about your
              space, your people, and the rhythms they live by.
            </p>
          </div>
        </Reveal>

        {/* Services list */}
        <div className="mt-20 md:mt-28 space-y-28 md:space-y-40">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal
                key={s.number}
                className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-12 items-center"
              >
                {/* Image */}
                <div
                  className={`md:col-span-6 ${
                    reverse ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="img-reveal relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-sm bg-sand ring-1 ring-forest/12 shadow-[0_30px_60px_-30px_rgba(60,35,15,0.25)]">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {/* Warm vignette: ties cool/white-walled photos back to the cream brand */}
                    <div
                      className="absolute inset-0 pointer-events-none mix-blend-multiply"
                      style={{
                        background:
                          "radial-gradient(120% 100% at 50% 50%, transparent 55%, rgba(180,106,44,0.12) 80%, rgba(60,35,15,0.22) 100%)",
                      }}
                    />
                    {/* Bottom shade for credit legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-forest/35 to-transparent" />
                    <div className="absolute bottom-3 right-3 text-[10px] tracking-widest text-cream/85 uppercase">
                      {s.image.credit}
                    </div>
                  </div>
                </div>

                {/* Copy */}
                <div
                  className={`md:col-span-6 ${
                    reverse ? "md:order-1 md:pr-6" : "md:order-2 md:pl-6"
                  }`}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="display italic text-terracotta text-3xl md:text-4xl">
                      {s.number}
                    </span>
                    <span className="block h-px flex-1 bg-forest/25" />
                  </div>

                  <h3 className="display text-forest text-4xl md:text-[3.4rem] leading-[1.02] mt-5">
                    {s.title}
                  </h3>

                  <p className="mt-7 text-forest/80 text-base md:text-[1.05rem] leading-[1.75] max-w-[58ch]">
                    {s.body}
                  </p>

                  {s.pull && (
                    <p className="display italic text-forest text-2xl md:text-[1.7rem] leading-snug mt-7 border-l-2 border-terracotta pl-5">
                      {s.pull}
                    </p>
                  )}

                  <div className="mt-9 space-y-1.5">
                    <div className="eyebrow text-forest/55">Suited for</div>
                    <p className="text-forest/80 text-sm leading-relaxed max-w-[52ch]">
                      {s.suitedFor}
                    </p>
                  </div>

                  <a
                    href={s.cta.href}
                    className="cta-link mt-9 text-forest text-sm tracking-wide"
                  >
                    <span>{s.cta.label}</span>
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
