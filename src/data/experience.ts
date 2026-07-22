
export type Role = {
  org: string;
  title: string;
  period: string;
  current?: boolean;
  highlights: string[];
};

export const roles: Role[] = [
  {
    org: "Hydro One",
    title: "Business Data Analyst Co-op",
    period: "May 2025 – Present",
    current: true,
    highlights: [
      "Power BI dashboard development and DAX measure authoring",
      "Data validation and discrepancy investigation",
      "Business requirements and traceability documentation",
      "Excel VBA and Python workflow automation",
      "Financial reporting and SAP data reconciliation",
      "Genesys Cloud analytics configuration",
      "Technical onboarding documentation",
      "Cross-functional stakeholder collaboration",
    ],
  },
  {
    org: "Me Va Me",
    title: "Customer Service Associate",
    period: "January 2022 – August 2022",
    highlights: [
      "Customer communication and problem resolution",
      "Scheduling and operational coordination",
      "Working effectively in a fast-paced environment",
    ],
  },
];

export const education = {
  school: "Lassonde School of Engineering",
  university: "York University",
  degree: "Bachelor of Science",
  program: "Specialized Honours Computer Science Co-op",
  period: "2022 – 2027",
};

export const recognition = [
  { label: "Best UI/UX Award", accent: "accent" },
  { label: "York University Entrance Scholarship", accent: "violet" },
  { label: "Lassonde Entrance Scholarship", accent: "teal" },
] as const;
