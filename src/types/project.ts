/** Identifier for the generated SVG visual rendered with a case study. */
export type ProjectVisual = "kpi" | "workflow" | "survey" | "analytics";

/** Named accent used to differentiate case studies across cards and pages. */
export type AccentName = "accent" | "teal" | "violet" | "ember";

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** Card-level description. */
  summary: string;
  tags: string[];
  accent: AccentName;
  visual: ProjectVisual;
  featured?: boolean;
  overview: string;
  problem: string;
  role: string;
  /** Ordered steps — rendered as a numbered process list. */
  process: string[];
  tools: string[];
  outcome: string;
  learned: string;
  liveUrl?: string;
  githubUrl?: string;
};
