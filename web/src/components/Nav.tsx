"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "What we do", href: "#what-we-do" },
  { label: "Why Oikos", href: "#why-oikos" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-sm bg-cream/88 border-b border-forest/10 shadow-[0_1px_0_0_rgba(11,57,16,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="display text-forest text-2xl md:text-[28px] leading-none"
          aria-label="Oikos — home"
        >
          <span className="italic">oikos</span>
          <span className="text-terracotta">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-forest/80 hover:text-forest transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-forest/25 px-5 py-2 text-sm tracking-wide text-forest transition-all hover:bg-forest hover:text-cream"
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
        </nav>

        <a
          href="#contact"
          className="md:hidden text-sm text-forest underline underline-offset-4"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
