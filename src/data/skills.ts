import type { AccentName } from "@/types/project";

export type SkillGroup = {
  category: string;
  accent: AccentName;
  note?: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Reporting & data",
    accent: "accent",
    items: ["Power BI", "DAX", "SQL", "Excel", "Microsoft Fabric"],
  },
  {
    category: "Analysis & delivery",
    accent: "teal",
    items: [
      "Requirements",
      "Data validation",
      "Process analysis",
      "QA / UAT",
      "Jira",
    ],
  },
  {
    category: "Development & automation",
    accent: "violet",
    items: ["Python", "Excel VBA", "React", "TypeScript"],
  },
];

export const environmentGroup: SkillGroup = {
  category: "Enterprise environments",
  accent: "accent",
  note: "Worked within; platforms maintained by others",
  items: [
    "Genesys Cloud",
    "ServiceNow",
    "SAP",
    "Dynatrace",
    "Microsoft Entra ID",
  ],
};

export const languages = ["English", "Hebrew", "Russian"];
