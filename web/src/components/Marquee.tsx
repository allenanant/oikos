import type { ReactNode } from "react";

type Item = { text: string; italic?: boolean };

type Props = {
  items: Item[];
  /** Seconds for one full loop. Default 56s = slow, calm. */
  speedSeconds?: number;
  className?: string;
};

function Row({ items }: { items: Item[] }): ReactNode {
  return (
    <>
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-12 shrink-0">
          <span
            className={`display text-forest text-2xl md:text-3xl ${
              it.italic ? "italic" : "not-italic"
            }`}
          >
            {it.text}
          </span>
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta/80"
          />
        </span>
      ))}
    </>
  );
}

export function Marquee({ items, speedSeconds = 56, className = "" }: Props) {
  return (
    <div
      className={`marquee py-10 md:py-14 ${className}`}
      style={{ ["--marquee-speed" as string]: `${speedSeconds}s` }}
      aria-hidden
    >
      <div className="marquee-track">
        <Row items={items} />
        <Row items={items} />
      </div>
    </div>
  );
}
