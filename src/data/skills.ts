import type { AccentName } from "@/types/project";

export type SkillGroup = {
  category: string;
  accent: AccentName;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Data & Business Intelligence",
    accent: "accent",
    items: [
      "Power BI",
      "DAX",
      "SQL",
      "Excel",
      "PivotTables",
      "Reporting & Analysis",
      "Data Validation",
    ],
  },
  {
    category: "Programming & Automation",
    accent: "teal",
    items: ["Python", "Excel VBA", "Workflow Automation"],
  },
  {
    category: "Business Analysis",
    accent: "violet",
    items: [
      "Requirements Gathering",
      "Business Requirements Documents",
      "Requirements Traceability Matrices",
      "Stakeholder Communication",
      "Process Documentation",
      "Data Investigation",
    ],
  },
  {
    category: "Platforms & Tools",
    accent: "ember",
    items: [
      "Genesys Cloud",
      "ServiceNow",
      "SAP",
      "Dynatrace",
      "Microsoft Entra ID",
      "Checkbox",
    ],
  },
];

export const languages = ["English", "Hebrew", "Russian", "French"];
