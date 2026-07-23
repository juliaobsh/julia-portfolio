import type { AccentName } from "@/types/project";

export type SkillGroup = {
  category: string;
  accent: AccentName;
  note?: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Reporting and visualization",
    accent: "accent",
    items: [
      "Power BI Desktop",
      "Power BI Service",
      "DAX",
      "Report-level measures",
      "Report and visual-level filters",
      "Operational report design",
      "Scorecard reporting",
    ],
  },
  {
    category: "Analysis and validation",
    accent: "teal",
    items: [
      "Source-to-report reconciliation",
      "Calculation testing",
      "Discrepancy investigation",
      "Filter context analysis",
      "Excel",
      "PivotTables",
      "SQL",
    ],
  },
  {
    category: "Business analysis and delivery",
    accent: "violet",
    items: [
      "Requirements gathering",
      "Stakeholder outreach and analysis",
      "Inventory and data-retention analysis",
      "Process documentation",
      "Jira",
      "Sprint-based delivery",
      "QA and UAT support",
    ],
  },
  {
    category: "Programming and automation",
    accent: "ember",
    items: ["Python", "Excel VBA", "Workflow automation"],
  },
];

export const environmentGroup: SkillGroup = {
  category: "Enterprise environments",
  accent: "accent",
  note: "Worked within; platform maintained by others",
  items: [
    "Microsoft Fabric workspaces",
    "Shared semantic models",
    "Deployment pipelines",
    "Non-production and production environments",
    "Genesys Cloud",
    "ServiceNow",
    "SAP",
    "Dynatrace",
    "Microsoft Entra ID",
  ],
};

export const languages = ["English", "Hebrew", "Russian"];
