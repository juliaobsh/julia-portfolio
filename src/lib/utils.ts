import type { AccentName } from "@/types/project";

/** Minimal class joiner — avoids a clsx dependency for this project's needs. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Accent colours are applied through a CSS custom property so a single
 * inline style can drive borders, text, tints, and shadows in Tailwind
 * classes such as `text-(--accent)` and `border-(--accent)`.
 */
const accentValues: Record<AccentName, string> = {
  accent: "var(--color-accent)",
  teal: "var(--color-teal)",
  violet: "var(--color-violet)",
  ember: "var(--color-ember)",
};

export function accentStyle(accent: AccentName): React.CSSProperties {
  return { "--accent": accentValues[accent] } as React.CSSProperties;
}
