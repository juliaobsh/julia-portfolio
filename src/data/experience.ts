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
      "Delivered five to six enhancements to a 27-report enterprise Power BI suite supporting contact-centre operations, covering queue statistics, daily summary, IVR, and monthly performance scorecard reports",
      "Authored new DAX measures and modified existing ones at the report level, and configured visuals against measures already present in the shared semantic model",
      "Implemented and published changes in a non-production Fabric workspace, then deployed reviewed changes to production through the team's deployment pipeline",
      "Tested new and modified metrics against production data and expected results before release, reporting outcomes back to the senior analyst who owned the tickets",
      "Supported QA by publishing changes for tester review and revising implementations across multiple feedback cycles until approved",
      "Resolved report discrepancies by tracing calculations through filter context, model relationships, and source data",
      "Lead the day-to-day discovery work for an enterprise survey platform migration: compiled a 188-survey inventory, ran stakeholder outreach across more than a dozen lines of business, and gathered, confirmed, and consolidated requirements for platform assessment",
      "Authored the migration project's context and handoff documentation covering status, stakeholder positions, and outstanding work",
      "Processed and triaged 14,000–16,000 weekly cybersecurity vulnerabilities using Excel VBA automation and CMDB enrichment, assigning solution owners and maintaining the tracker",
      "Maintained a monthly small-projects financial tracker by ingesting and reconciling SAP actuals, and documented the full monthly process as a step-by-step procedure for handover",
      "Configured and maintained speech and text analytics topics and phrase libraries for contact-centre transcription",
      "Produced monthly application performance reports for senior stakeholders and authored onboarding documentation across several operational workflows",
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
};

export const recognition = [
  { label: "Best UI/UX Award", accent: "accent" },
  { label: "York University Entrance Scholarship", accent: "violet" },
  { label: "Lassonde Entrance Scholarship", accent: "teal" },
] as const;
