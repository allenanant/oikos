export function Footer() {
  return (
    <footer className="bg-forest text-cream/60 border-t border-cream/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="display text-cream text-2xl">
          <span className="italic">oikos</span>
          <span className="text-terracotta-soft">.</span>
        </div>
        <div className="text-xs tracking-[0.18em] uppercase">
          © {new Date().getFullYear()} · Oikos by Angelina · Delhi, India
        </div>
        <div className="flex items-center gap-6 text-xs tracking-[0.18em] uppercase">
          <a href="#what-we-do" className="hover:text-cream transition-colors">
            Work
          </a>
          <a href="#why-oikos" className="hover:text-cream transition-colors">
            Why
          </a>
          <a href="#contact" className="hover:text-cream transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
