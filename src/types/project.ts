/** Identifier for the generated SVG visual rendered with a case study. */
export type ProjectVisual =
  | "reporting"
  | "inventory"
  | "workflow"
  | "product";

/** Named accent used to differentiate case studies across cards and pages. */
export type AccentName = "accent" | "teal" | "violet" | "ember";

/** Delivery state of an individual enhancement, shown as a chip. */
export type DeliveryStatus = "Released" | "In testing" | "Paused";

/**
 * Case studies are composed from typed section blocks rather than a fixed set
 * of fields, because the two flagship studies have genuinely different shapes:
 * one is a set of discrete enhancements, the other a single discovery effort.
 */
export type CaseStudySection =
  | { kind: "prose"; heading: string; body: string[] }
  | { kind: "list"; heading: string; items: string[] }
  | { kind: "steps"; heading: string; items: string[] }
  | {
      kind: "tiers";
      heading: string;
      /** "chips" for short tool names, "list" for explanatory phrases. */
      variant?: "chips" | "list";
      tiers: { label: string; items: string[] }[];
    }
  | { kind: "note"; heading: string; body: string }
  | {
      kind: "enhancements";
      heading: string;
      intro?: string;
      items: {
        title: string;
        status: DeliveryStatus;
        blocks: { label: string; body: string }[];
      }[];
    };

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** Card-level description. */
  summary: string;
  /** Short factual scope line shown on the card, e.g. "188 surveys inventoried". */
  evidence?: string;
  oneLiner: string;
  tags: string[];
  accent: AccentName;
  visual: ProjectVisual;
  /** Featured projects render at full width, above the rest. */
  featured?: boolean;
  sections: CaseStudySection[];
  liveUrl?: string;
  githubUrl?: string;
};
