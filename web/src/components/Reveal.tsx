"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Fade-up that auto-triggers when scrolled into view.
 * Above-fold content reveals immediately on mount (no flash, still animates).
 * Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("is-in");
      return;
    }

    const rect = el.getBoundingClientRect();
    const initiallyVisible =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (initiallyVisible) {
      requestAnimationFrame(() => el.classList.add("is-in"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  const style: CSSProperties = { ["--reveal-delay" as string]: `${delay}ms` };
  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Component>
  );
}
