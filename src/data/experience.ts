export type Role = {
  org: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
  /** Used for compressed, non-analytical roles. */
  narrative?: string;
};

export const roles: Role[] = [
  {
    org: "Hydro One",
    title: "Business Data Analyst Co-op",
    period: "May 2025 – Present",
    location: "Markham, ON",
    current: true,
    highlights: [
      "Delivered six enhancements to an enterprise Power BI reporting suite, working directly in eight to nine of its 27 operational and performance reports",
      "Authored and modified DAX measures at the report level, and configured visuals against measures already present in the shared semantic model",
      "Built and tested changes in a non-production Fabric workspace, supported QA cycles with testers, and deployed reviewed changes to production through the deployment pipeline",
      "Lead the discovery work for an enterprise survey platform migration: a 188-survey inventory, stakeholder outreach across the organization, and consolidated requirements documentation",
      "Automated weekly triage of 14,000–16,000 cybersecurity vulnerabilities using Excel VBA and CMDB enrichment, assigning solution owners and maintaining the tracker",
      "Maintained a monthly small-projects financial tracker by ingesting and reconciling SAP actuals, documenting the process for handover",
      "Configured contact-centre speech and text analytics topics and phrase libraries, and produced monthly application performance reporting for senior stakeholders",
    ],
  },
  {
    org: "Me Va Me",
    title: "Customer Service Associate",
    period: "January 2022 – August 2022",
    location: "Maple, ON",
    highlights: [],
    narrative:
      "Customer-facing operations work in a high-volume environment: handling transactions, coordinating driver scheduling, and resolving issues in real time. Early practice at the part of analyst work that isn't technical — reading what someone actually needs from an incomplete request, and staying accurate under time pressure.",
  },
];

export const education = {
  school: "Lassonde School of Engineering",
  university: "York University",
  degree: "Bachelor of Science",
  program: "Specialized Honours Computer Science Co-op",
  period: "2022 – 2027",
  /** Kept short and positioning-relevant — not a transcript. */
  coursework: [
    "Building E-Commerce Systems",
    "User Interfaces",
    "Software Design",
    "Database Systems",
    "Design & Analysis of Algorithms",
  ],
};

export const recognition = [
  { label: "Best UI/UX Award", accent: "accent" },
  { label: "York University Entrance Scholarship", accent: "violet" },
  { label: "Lassonde Entrance Scholarship", accent: "teal" },
] as const;
