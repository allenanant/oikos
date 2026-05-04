import type { CSSProperties } from "react";

type Props = {
  words: string[];
  /** Total duration of the cycle (seconds). Each word gets total / words.length. */
  totalSeconds?: number;
  className?: string;
};

/**
 * CSS-only word cycler. All words occupy the same grid cell;
 * each one fades + blurs in, holds, then fades out, offset by per-word delay.
 * No JS, SSR-safe. Width auto-fits the longest word so layout doesn't jump.
 */
export function CyclingWord({
  words,
  totalSeconds = 12,
  className = "",
}: Props) {
  const stepRatio = 1 / words.length;
  return (
    <span
      className={`cycle ${className}`}
      style={{ ["--cycle-total" as string]: `${totalSeconds}s` }}
      aria-label={words.join(", ")}
    >
      {words.map((w, i) => {
        const style: CSSProperties = {
          animationDelay: `${(i * totalSeconds * stepRatio).toFixed(3)}s`,
        };
        return (
          <span key={w} style={style} aria-hidden={i !== 0}>
            {w}
          </span>
        );
      })}
    </span>
  );
}
