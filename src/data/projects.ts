import type { Project } from "@/types/project";

/**
 * All case studies describe enterprise work and are deliberately anonymized:
 * no proprietary data, internal screenshots, or confidential figures.
 */
export const projects: Project[] = [
  {
    slug: "leadership-kpi-dashboard",
    title: "Leadership KPI Dashboard",
    category: "Power BI / Data Visualization",
    summary:
      "Designed and maintained Power BI reporting for senior stakeholders, developed DAX measures, validated data across reports, and investigated discrepancies involving filters, measures, and semantic model relationships.",
    tags: ["Power BI", "DAX", "Data Validation", "Dashboard Design"],
    accent: "accent",
    visual: "kpi",
    featured: true,
    overview:
      "A suite of executive-facing Power BI dashboards providing leadership with reliable, up-to-date KPI visibility across operational areas.",
    problem:
      "Leadership needed a consolidated view of key metrics, but existing reporting was fragmented across spreadsheets with inconsistently defined calculations.",
    role: "I designed the dashboard layout, authored DAX measures for KPIs, and took ownership of data validation — investigating discrepancies between report figures and source data.",
    process: [
      "Started with stakeholder conversations to understand which metrics mattered most and how they would be used.",
      "Mapped data sources and built out semantic model relationships.",
      "Wrote and tested DAX measures, checking results against source data.",
      "Iteratively refined the layout and access configuration based on stakeholder feedback.",
    ],
    tools: ["Power BI Desktop", "DAX", "Power Query", "SharePoint", "Excel"],
    outcome:
      "Leadership gained a consistent, filterable view of KPIs with clearly defined measures. Validation work uncovered and resolved calculation discrepancies that had been producing inaccurate figures.",
    learned:
      "Writing defensible DAX requires understanding how filter context propagates through a model — not just how individual measures are calculated. Aligning stakeholders on metric definitions early prevents significant rework.",
  },
  {
    slug: "cybersecurity-workflow-automation",
    title: "Cybersecurity Workflow Automation",
    category: "Automation / Data Operations",
    summary:
      "Supported the weekly triage of 14,000–16,000 cybersecurity vulnerabilities using Excel VBA automation and CMDB data enrichment, helping organize ownership and maintain a structured tracking process.",
    tags: ["Excel VBA", "Automation", "Data Processing", "CMDB"],
    accent: "teal",
    visual: "workflow",
    featured: true,
    overview:
      "An automated triage pipeline that reduced manual effort in processing large volumes of weekly vulnerability data.",
    problem:
      "The vulnerability tracking process required manually sorting and enriching thousands of rows of data each week — time-consuming and prone to human error.",
    role: "I analyzed the existing manual process, identified repeatable steps that could be automated, and built VBA macros to handle data import, CMDB enrichment lookups, and structured output formatting.",
    process: [
      "Mapped the full manual workflow step by step.",
      "Identified which operations were purely mechanical and safe to automate.",
      "Built VBA procedures for data import, CMDB record matching, and ownership logic.",
      "Generated structured output that fed directly into the vulnerability tracker.",
    ],
    tools: ["Excel VBA", "Microsoft Excel", "CMDB Data", "ServiceNow"],
    outcome:
      "The automated pipeline reduced manual processing time for weekly vulnerability triage. Structured output made it easier to assign ownership and track remediation progress.",
    learned:
      "Automation is most effective when the underlying process is well understood first. Time spent mapping the manual workflow before writing any code made the solution more robust and easier to maintain.",
  },
  {
    slug: "enterprise-survey-platform-migration",
    title: "Enterprise Survey Platform Migration",
    category: "Business Analysis",
    summary:
      "Supported requirements discovery for an enterprise survey platform migration, developed business requirements and traceability documentation, and reviewed an inventory of 188 surveys to support migration planning.",
    tags: [
      "Business Requirements",
      "RTM",
      "Stakeholder Analysis",
      "Process Mapping",
    ],
    accent: "violet",
    visual: "survey",
    featured: true,
    overview:
      "A business analysis engagement supporting the migration of an enterprise survey platform, focused on requirements documentation and survey inventory.",
    problem:
      "The organization needed to migrate a large portfolio of surveys to a new platform but lacked a structured inventory or documented requirements to guide the migration.",
    role: "I ran requirements discovery with stakeholders, translated findings into a Business Requirements Document, built a Requirements Traceability Matrix, and reviewed 188 surveys to categorize them for migration planning.",
    process: [
      "Facilitated stakeholder workshops to surface current-state pain points and desired future-state capabilities.",
      "Documented functional and non-functional requirements in a Business Requirements Document.",
      "Built a Requirements Traceability Matrix linking each requirement to a business objective.",
      "Reviewed the survey inventory to identify categories, owners, and migration complexity.",
    ],
    tools: [
      "Microsoft Word",
      "Excel",
      "Checkbox",
      "SharePoint",
      "Microsoft Teams",
    ],
    outcome:
      "Delivered a complete Business Requirements Document and RTM. The inventory review produced a structured breakdown of 188 surveys by type, owner, and recommended migration approach.",
    learned:
      "An RTM is only as useful as the quality of the requirements it traces. Writing clear, testable requirements upfront made the traceability work meaningful and audit-ready.",
  },
  {
    slug: "customer-analytics-configuration",
    title: "Customer Analytics Configuration",
    category: "Analytics Operations",
    summary:
      "Configured and maintained speech and text analytics topics and phrase libraries in Genesys Cloud to support contact-centre transcription and analytics.",
    tags: [
      "Genesys Cloud",
      "Speech Analytics",
      "Text Analytics",
      "Reporting",
    ],
    accent: "ember",
    visual: "analytics",
    featured: true,
    overview:
      "Configuration and ongoing maintenance of speech and text analytics tooling in Genesys Cloud to improve contact-centre insight quality.",
    problem:
      "The analytics topic library and phrase configurations needed to be kept current and accurate so transcription and reporting outputs stayed meaningful and actionable.",
    role: "I configured new topic categories, expanded phrase libraries, and maintained the accuracy of existing configurations based on operational feedback.",
    process: [
      "Reviewed existing topic categories against real operational usage.",
      "Added and refined phrase libraries to improve transcription accuracy.",
      "Documented configuration decisions to support ongoing maintenance.",
    ],
    tools: ["Genesys Cloud", "Excel", "SharePoint"],
    outcome:
      "Improved topic coverage and phrase library accuracy contributed to more reliable analytics outputs across contact-centre reporting.",
    learned:
      "Analytics configuration is iterative — the first pass rarely captures the full range of relevant phrases, so a feedback loop with operational teams meaningfully improves quality over time.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Ordered neighbours for the prev/next links at the foot of a case study. */
export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
