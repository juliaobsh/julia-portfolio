import type { Project } from "@/types/project";

/**
 * All case studies describe enterprise work and are deliberately anonymized:
 * no system names, internal identifiers, stakeholder names, or business data.
 */
export const projects: Project[] = [
  {
    slug: "enterprise-reporting-suite",
    title: "Enhancing an Enterprise Contact-Centre Reporting Suite",
    category: "Enterprise Power BI · Sustainment & Enhancement",
    summary:
      "Stakeholders raised reporting changes as tickets; I worked out what each one actually required inside an existing report, wrote or modified the DAX behind it, tested the result, and deployed reviewed changes from non-production to production. The suite covered queue performance, daily operations, IVR, and monthly agent and team scorecards used to run a contact centre.",
    evidence: "27-report suite · 8–9 reports worked in · 4 enhancements detailed",
    oneLiner:
      "Ticket-driven Power BI enhancements inside a 27-report operational suite — investigated, built, tested, and deployed from non-production to production.",
    tags: [
      "Power BI",
      "DAX",
      "Microsoft Fabric",
      "Deployment Pipelines",
      "QA Support",
      "Jira",
    ],
    accent: "accent",
    visual: "reporting",
    featured: true,
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: [
          "I spent much of my co-op working inside an established enterprise reporting environment built on Microsoft Fabric and Power BI. The suite contained 27 operational and performance reports used to run a contact-centre operation; I worked directly in eight or nine of them.",
          "The work was sustainment and enhancement rather than greenfield development. Business stakeholders raised requests as tickets; I investigated what each one required, implemented it in the non-production environment, tested the result, and — once the change had been reviewed and confirmed — deployed it to production through the team's deployment pipeline.",
        ],
      },
      {
        kind: "prose",
        heading: "Context",
        body: [
          "These reports were the operating picture for the contact centre: queue volumes and service levels, abandon rates, handle-time and occupancy measures, IVR containment, and monthly performance scorecards used by team managers and coaches to review individual and team results. When someone makes a staffing decision or has a coaching conversation based on a number in a report, a metric that aggregates incorrectly doesn't get caught — it gets trusted.",
          "The platform itself was established before I joined and maintained by a dedicated team. Data was ingested and transformed through layered lakehouse stages by data engineers, and the reporting layer consumed a curated gold layer through a shared semantic model powering most reports in the suite. Non-production and production environments were separated, changes moved between them through deployment pipelines, and end users accessed reports through published applications with role-based access.",
          "I worked in the reporting layer — report files, pages, visuals, filters, and report-level measures — using both Power BI Desktop and the Power BI Service.",
        ],
      },
      {
        kind: "prose",
        heading: "How the work reached me",
        body: [
          "Tickets in this area were formally assigned to a senior analyst on the team. In practice, she would hand me a request and expect me to investigate it, work out how to implement it, and come back with results. I reported completed work and deployment status back to her, and she took it forward to the wider stakeholder group.",
        ],
      },
      {
        kind: "tiers",
        heading: "Scope of my role",
        variant: "list",
        tiers: [
          {
            label: "I owned",
            items: [
              "Investigating assigned requests and working out how they should behave in the report",
              "Writing new DAX measures, modifying existing ones, and configuring visuals against measures already in the model",
              "Building and publishing changes in the non-production workspace",
              "Testing output against expected results, and deploying reviewed changes to production",
            ],
          },
          {
            label: "I collaborated on",
            items: [
              "QA cycles with testers, revising implementations across multiple rounds of feedback",
              "Release readiness and coordination with the senior analyst who owned the tickets",
              "Validation, testing against the expected results she set out — the formal validation artifacts attached to tickets were assembled at her level",
            ],
          },
          {
            label: "Outside my scope",
            items: [
              "The shared semantic model. My measures lived at report level; a model change propagates to every report built on it, and ownership sat elsewhere. Knowing which side of that line a change falls on was part of doing the work correctly",
              "Data engineering pipelines and lakehouse architecture",
              "Platform architecture, the access model, and the deployment runbook",
              "Formal requirements documentation for this work, which sat with another business analyst",
            ],
          },
        ],
      },
      {
        kind: "enhancements",
        heading: "Representative enhancements",
        intro:
          "Four examples from the tickets I implemented. Details are generalized and report names replaced.",
        items: [
          {
            title: "Forecast and variance measures on a queue report",
            status: "Released",
            blocks: [
              {
                label: "The request",
                body: "Add forecast and variance measures alongside existing volume and handle-time columns, across two pages of a queue report.",
              },
              {
                label: "What I had to work out",
                body: "Where columns belong in a table already wide enough to scroll, and how variance should read at a glance — volume as a percentage against forecast, handle time as a signed difference — so someone scanning a row could tell direction without doing arithmetic. Each column had to sit next to the measure it modified rather than being appended at the end.",
              },
              {
                label: "Outcome",
                body: "Reviewed in non-production against the changes I'd made, approved, and deployed to production. Managers gained forecast-to-actual comparison in the report itself.",
              },
            ],
          },
          {
            title: "Distinct agent counts at every aggregation level",
            status: "In testing",
            blocks: [
              {
                label: "The request",
                body: "Add a distinct count of agents to two queue reporting pages, at whichever aggregation level the user is viewing — queue or overall, by interval, day, week, or month.",
              },
              {
                label: "What I had to work out",
                body: "Distinct counts don't roll up. The distinct agents in a week aren't the sum of the distinct agents across its days, and agents work across multiple queues, so the same person can't be double-counted at the overall level. The measure had to recompute inside whatever filter context the user landed in rather than aggregating a stored value. I also needed to be sure the count meant what was intended: how many distinct people were attached to that queue in that period, not how many interactions they handled.",
              },
              {
                label: "What I checked",
                body: "Compared counts against production data, because the non-production environment's data wasn't current enough to prove them on its own.",
              },
              {
                label: "Outcome",
                body: "A reviewer confirmed the layout was correct but couldn't complete validation in the QA environment, because the data there wasn't current — an environment constraint rather than a defect in the change. Saying so plainly was part of the work.",
              },
            ],
          },
          {
            title: "Agent-level filtering on a team scorecard",
            status: "Released",
            blocks: [
              {
                label: "The request",
                body: "Add a filter so managers could exclude specific agents from a team scorecard. One sentence, and the answer wasn't.",
              },
              {
                label: "Multi-select behaviour",
                body: "The default required holding a modifier key to select more than one agent, which most users would never discover. I changed it so multiple selections work with a plain click, starting from select-all with specific people deselected from there.",
              },
              {
                label: "People move between teams",
                body: "When an agent changes teams, their historical months no longer match their current manager and coach combination — so filtering by manager could silently drop part of a person's history. I recommended clearing those filters and filtering on agent name directly when looking across months, and flagged it as behaviour users needed to be told about rather than discover.",
              },
              {
                label: "Invisible filters",
                body: "An exclusion filter in the filter pane would have worked and been faster to build. But a user who applies it and collapses the pane sees a scorecard that looks complete and isn't, with nothing on the page to indicate otherwise. I chose the visible on-canvas approach instead.",
              },
              {
                label: "Outcome",
                body: "Passed QA. The tester asked that defaults be set to include all values, so the report opens in a complete state and anyone narrowing it does so deliberately. Applied, and deployed to production.",
              },
            ],
          },
          {
            title: "Percentages on a daily summary report",
            status: "Released",
            blocks: [
              {
                label: "The request",
                body: "Show percentages alongside raw counts for containment and outage figures across three pages, matching how an existing report presented the same idea. The constraint was consistency: two reports showing the same concept differently is how people stop trusting both.",
              },
              {
                label: "The loop",
                body: "Implemented and published; the reviewer asked for one category to move to the bottom of the chart on every page and thousands separators added for readability; both applied, re-published, approved, deployed. It's the most ordinary of the four, and it's what most of the work looked like.",
              },
            ],
          },
        ],
      },
      {
        kind: "steps",
        heading: "My working process",
        items: [
          "Read the ticket and the report together. The request is one sentence; the report is the real specification.",
          "Find where the change belongs — which page, which visual, and whether it needs a new measure, a modified one, or a visual configured against a measure that already exists.",
          "Build it in non-production. Never in production, per the team's standard.",
          "Test the output against what the result is supposed to be, using production data as the reference where non-production data isn't current.",
          "Publish for QA and let testers use it. Reviewers consistently found things the ticket couldn't have predicted.",
          "Revise on feedback — usually formatting, ordering, or default behaviour.",
          "Deploy to production through the deployment pipeline once the change is confirmed, and report back.",
        ],
      },
      {
        kind: "tiers",
        heading: "Technical environment",
        tiers: [
          {
            label: "Worked in directly",
            items: [
              "Power BI Desktop",
              "Power BI Service",
              "DAX (authored and modified report-level measures)",
              "Report visuals and pages",
              "Report and visual-level filters",
              "Deployment pipelines",
              "Jira",
            ],
          },
          {
            label: "Worked within",
            items: [
              "Microsoft Fabric workspaces",
              "Shared semantic model",
              "Curated gold-layer tables",
              "Published Power BI applications",
              "Role-based access model",
            ],
          },
          {
            label: "Maintained by others",
            items: [
              "Ingestion and transformation pipelines",
              "Lakehouse architecture",
              "The semantic model itself",
              "Access administration",
              "The runbook",
            ],
          },
        ],
      },
      {
        kind: "list",
        heading: "Outcomes",
        items: [
          "Forecast and variance measures released to queue reporting, giving managers forecast-to-actual comparison in the report itself",
          "Agent-level exclusion filtering released on a team scorecard, with defaults set so the report opens complete",
          "Percentage measures released across three pages of a daily summary report, consistent with an existing report's presentation",
          "Distinct agent counts implemented and in testing, correct under the report's filter context at every aggregation level",
          "Changes reviewable by stakeholders in non-production before any deployment decision",
        ],
      },
      {
        kind: "list",
        heading: "What I learned",
        items: [
          "Small requests aren't small. \u201cAdd a column\u201d carried aggregation behaviour, filter interaction, and a definitional question about what was being counted. Writing the measure was the quick part.",
          "Know which layer you're changing. A report-level measure affects one report; a semantic model change affects everything built on it. Understanding that distinction was as important as the DAX itself.",
          "Reviewers see what you can't. Almost all the feedback I received was about usability rather than correctness — ordering, formatting, defaults. Getting the number right is necessary and not sufficient.",
        ],
      },
      {
        kind: "note",
        heading: "Confidentiality",
        body: "This case study describes work completed in an enterprise environment. Report names, system names, internal identifiers, and business figures have been generalized or omitted, and all visuals are recreated using synthetic data. Nothing shown reflects real operational data.",
      },
    ],
  },
  {
    slug: "survey-platform-migration",
    title: "Discovery for an Enterprise Survey Platform Migration",
    category: "Business Analysis · Requirements",
    summary:
      "Before a replacement platform can be chosen, someone has to establish what's on the current one and what each team actually needs. I built the survey inventory, ran outreach across the organization, and gathered and consolidated requirements — surfacing a gap between what different groups need that shapes the whole decision.",
    evidence: "188 surveys inventoried across the organization",
    oneLiner:
      "Inventory, stakeholder outreach, and a consolidated requirements list — the discovery work that determines what a replacement platform has to do.",
    tags: [
      "Requirements Gathering",
      "Stakeholder Analysis",
      "Inventory & Retention",
      "Process Documentation",
    ],
    accent: "violet",
    visual: "inventory",
    featured: true,
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: [
          "A funded enterprise project is replacing an aging survey platform hosting both internal and public-facing forms. Before any platform can be chosen, someone has to answer three questions: what's actually on there, who owns it, and what each line of business genuinely needs.",
          "I lead the day-to-day discovery work — inventory, outreach, requirements gathering, and documentation — working with a manager sponsoring the project and a business analyst supporting the team. Platform selection and architecture assessment sit with others and haven't started; my work is what those decisions will be based on. Unlike my reporting work, the requirements documentation here is mine: I gather it, structure it, confirm it back with stakeholders, and consolidate it.",
        ],
      },
      {
        kind: "enhancements",
        heading: "What I did",
        items: [
          {
            title: "Built the inventory",
            status: "Released",
            blocks: [
              {
                label: "The work",
                body: "I compiled a complete inventory of every survey on the platform — 188 in total, spread across the organization — capturing each one's owner, creation date, status, permissions, last response activity, and lifetime response volume. No structured view of the estate existed before this, and the spreadsheet became the foundation for every conversation that followed.",
              },
            ],
          },
          {
            title: "Ran outreach line of business by line of business",
            status: "Released",
            blocks: [
              {
                label: "The approach",
                body: "Rather than sending one generic request, I sent each team a tailored view of their own surveys with core details pre-filled and specific columns for them to complete — whether historical response data needed retaining, whether a form was internal or customer-facing, and how structurally complex it was.",
              },
              {
                label: "Why it worked",
                body: "Framing it as \u201chere is your list, please confirm\u201d rather than \u201cplease tell us what you have\u201d is why I got responses. Teams corrected my data, added forms I didn't have, and updated statuses — which improved the inventory as a side effect.",
              },
            ],
          },
          {
            title: "Gathered and consolidated requirements",
            status: "Released",
            blocks: [
              {
                label: "Two routes",
                body: "Teams with substantial or complex form estates got a meeting, with requirements captured and sent back in writing for confirmation. Teams with lighter usage got a structured written request asking what they rely on, what would be disruptive to lose, and what concerns them about migrating. Both ended in the same place: a documented, confirmed list rather than a recollection of a conversation.",
              },
              {
                label: "Handoff",
                body: "Requirements from every line of business went into a single consolidated list, and I wrote the context document that lets the next person pick this up — status, stakeholders, what's done, what's outstanding, and which deadlines are time-sensitive.",
              },
            ],
          },
        ],
      },
      {
        kind: "list",
        heading: "What discovery surfaced",
        items: [
          "A substantial share of the estate was already archived, so a meaningful part of the project is cleanup rather than migration — which changes the size of the problem.",
          "Survey ownership was heavily concentrated. A small number of creators account for most of the estate, while a long tail of forms have owners who barely use the platform. That determines who actually needs to be consulted.",
          "Some public-facing forms carry very high lifetime submission volumes and are in active customer use. These aren't surveys — they're operational intake, and migrating them is a materially different exercise from migrating an internal feedback form.",
        ],
      },
      {
        kind: "prose",
        heading: "The finding that matters",
        body: [
          "Requirements gathering surfaced materially different needs between teams. Groups running simple internal forms wanted straightforward things: scheduled open and close dates, results in Excel, ranked selection questions, conditional logic, a confirmation email to the respondent. Groups operating high-volume public intake processes needed considerably more — extensive form customization, branded styling, bulk export, and continuity guarantees for forms customers already use.",
          "That gap is the finding. A platform satisfying the simpler requirements could fail the complex ones, which raises the real question ahead of the project: whether one replacement can serve the full range of use cases, or whether the estate should be treated as more than one problem. Documenting the distance between those positions accurately, rather than flattening them into a single neutral list, is what makes the eventual decision an informed one.",
        ],
      },
      {
        kind: "list",
        heading: "Outcomes",
        items: [
          "A complete, structured inventory of 188 surveys where none existed before, usable for both migration planning and cleanup",
          "Confirmed requirements captured from every responsive line of business and consolidated into a single list",
          "Clear identification of which forms are high-volume, customer-facing, and require the most careful migration planning",
          "Handoff documentation covering status, ownership, outstanding tasks, and time-sensitive deadlines",
        ],
      },
      {
        kind: "list",
        heading: "What I learned",
        items: [
          "Send people their own data, not a blank form. Response rates went up sharply when stakeholders were asked to confirm and correct a list rather than build one from memory.",
          "Where stakeholders want incompatible things, that difference is worth documenting carefully rather than resolving too early. It was the most useful thing to come out of the requirements work.",
          "Knowing how much of the estate is dormant, and which handful of forms carry most of the real traffic, changes what the project is actually about.",
        ],
      },
      {
        kind: "note",
        heading: "Confidentiality",
        body: "This case study describes an in-progress enterprise project. The platform, systems, stakeholders, business units, form names, and URLs are omitted or generalized, and no survey content or response data appears. Figures given are inventory-level counts only.",
      },
    ],
  },
  {
    slug: "vulnerability-triage-automation",
    title: "Cybersecurity Vulnerability Triage Automation",
    category: "Automation · Data Operations",
    summary:
      "Weekly vulnerability data arrived at a volume nobody could sort by hand — 14,000 to 16,000 records. I mapped the manual process step by step, worked out which operations were purely mechanical, and built Excel VBA automation for import, CMDB enrichment, and ownership assignment, producing structured output that fed the tracker.",
    evidence: "14,000–16,000 records processed weekly",
    oneLiner:
      "An automated triage pipeline for weekly vulnerability data at a volume that couldn't be handled manually.",
    tags: ["Excel VBA", "Process Automation", "CMDB", "Data Processing"],
    accent: "teal",
    visual: "workflow",
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: [
          "Each week the vulnerability tracking process received between 14,000 and 16,000 records that had to be sorted, enriched, and assigned to owners before anything could be acted on. Done by hand it was slow and error-prone, and the volume meant mistakes were easy to miss.",
        ],
      },
      {
        kind: "prose",
        heading: "My approach",
        body: [
          "I started by mapping the manual workflow step by step rather than automating what I assumed it was. That distinction mattered: several steps that looked mechanical turned out to involve judgment, and several that looked like judgment were entirely rule-based once written down.",
          "I then built VBA procedures covering the genuinely mechanical parts — data import, matching records against CMDB data to enrich them with ownership information, and formatting structured output that fed directly into the tracker.",
        ],
      },
      {
        kind: "list",
        heading: "Outcomes",
        items: [
          "Weekly triage of 14,000–16,000 records handled through a repeatable process rather than manual sorting",
          "Structured output that made ownership assignment and remediation tracking straightforward",
          "A documented process that survived handover",
        ],
      },
      {
        kind: "prose",
        heading: "What I learned",
        body: [
          "Automation is most effective when the underlying process is understood first. The time spent mapping the manual workflow before writing any code made the result more robust and much easier to maintain than if I'd started from the spreadsheet.",
        ],
      },
      {
        kind: "note",
        heading: "Confidentiality",
        body: "Vulnerability data, system identifiers, and ownership details are omitted entirely. Only the volume and the shape of the process are described.",
      },
    ],
  },
  {
    slug: "speech-analytics-configuration",
    title: "Contact-Centre Speech and Text Analytics Configuration",
    category: "Analytics Operations",
    summary:
      "Analytics output is only as good as the phrase libraries behind it. I reviewed topic categories against how they were actually being used, expanded and refined phrase libraries to improve transcription matching, and documented configuration decisions so the setup stayed maintainable after handover.",
    oneLiner:
      "Configuration and maintenance of speech and text analytics topics to improve the quality of contact-centre insight.",
    tags: ["Speech Analytics", "Text Analytics", "Configuration", "Reporting"],
    accent: "ember",
    visual: "analytics",
    sections: [
      {
        kind: "prose",
        heading: "Overview",
        body: [
          "Speech and text analytics tooling categorizes contact-centre conversations by matching them against configured topics and phrase libraries. If those libraries are incomplete or stale, the reporting built on top of them looks confident and means very little.",
        ],
      },
      {
        kind: "prose",
        heading: "What I did",
        body: [
          "I reviewed existing topic categories against how they were actually being used operationally, rather than against how they were originally defined. Where coverage was thin, I expanded and refined phrase libraries to improve matching accuracy, and documented the reasoning behind configuration decisions so the setup could be maintained by whoever inherited it.",
        ],
      },
      {
        kind: "prose",
        heading: "What I learned",
        body: [
          "Analytics configuration is iterative. The first pass rarely captures the full range of relevant phrasing, because real conversations don't use the vocabulary you expect. Building in a feedback loop with the people who hear those conversations improves quality far faster than reasoning about it from a spreadsheet.",
        ],
      },
      {
        kind: "note",
        heading: "Confidentiality",
        body: "Platform configuration details, topic definitions, and conversation data are omitted. Only the nature of the work is described.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
export const supportingProjects = projects.filter((p) => !p.featured);

/** Ordered neighbours for the prev/next links at the foot of a case study. */
export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
