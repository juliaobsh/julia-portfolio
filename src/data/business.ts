/**
 * Copy for the /business page - the consulting offer for local businesses.
 * Kept separate from the portfolio data because it speaks to a different
 * reader: an owner or manager, not a hiring team.
 */
export const business = {
  /** Booking page for the free process review. Leave empty to fall back to email. */
  bookingUrl: "https://calendly.com/yuliaobs/30min",
  bookingSubject: "20-minute process review",
  initials: "YO",
  headshot: "/headshot.jpg",
  /** Shown beside the photo. */
  bio: [
    "I spent 16 months as a Business Data Analyst at Hydro One, working inside a 27-report enterprise Power BI suite and automating high-volume workflows that people relied on every week.",
    "Now I bring that same care to local businesses. I handle the first conversation, build the solution, check the numbers against yours, and walk your team through it - no sales hand-off and no junior delivery team.",
  ],
  role: "Data & automation consultant",
  firstName: "Yulia",
  serviceArea: "Vaughan, Thornhill & GTA",
};

export type IconName =
  | "repeat"
  | "transfer"
  | "sheet"
  | "search"
  | "clean"
  | "split"
  | "check"
  | "arrow"
  | "pin"
  | "shield"
  | "layers"
  | "dollar"
  | "code"
  | "database"
  | "chart";

export const trustPoints: { icon: IconName; text: string }[] = [
  { icon: "dollar", text: "Fixed-price projects" },
  { icon: "layers", text: "Works with your software" },
  { icon: "pin", text: business.serviceArea },
  { icon: "shield", text: "No unnecessary replacement" },
];

/** Short background line under the hero - lets a cold prospect place you in five seconds. */
export const credentials = [
  "16 months as a Business Data Analyst at Hydro One",
  "Power BI · Python · SQL",
  "Computer Science, York University",
];

/**
 * A real recommendation from LinkedIn - labelled as coming from a manager,
 * not a client. Set to null to hide it. Ask before quoting someone on a sales page.
 */
export const reference: {
  quote: string;
  name: string;
  role: string;
  context: string;
} | null = {
  quote:
    "She was able to pick up tasks quickly, ask insightful questions and complete tasks with minimal oversight. … I would definitely have her as part of my team again in the future.",
  name: "Jessica Matthews",
  role: "Senior Manager, Hydro One",
  context: "Managed Yulia directly during her 16-month term · LinkedIn recommendation",
};

/** How client data is handled - especially relevant for clinics and accountants. */
export const dataPractices: { title: string; body: string }[] = [
  {
    title: "Only the access a project needs",
    body: "I ask for the smallest set of data that answers the question, with read-only access wherever your software allows it.",
  },
  {
    title: "De-identified samples first",
    body: "Scoping happens on sample or de-identified exports, with names and personal details removed, before anything else.",
  },
  {
    title: "Nothing sensitive by ordinary email",
    body: "Sensitive files go through a secure sharing method we agree on - not as everyday email attachments.",
  },
  {
    title: "Agreed in writing before production data",
    body: "Where data is stored, who can see it, and when it's deleted are agreed before I touch real records. NDA on request.",
  },
];

/** The symptoms an owner should recognise in their own business. */
export const signs: { icon: IconName; title: string; body: string }[] = [
  { icon: "repeat", title: "Same report, every week", body: "Someone rebuilds the same Excel report every week or month" },
  { icon: "transfer", title: "Copying between systems", body: "Numbers get exported from one system and retyped into another" },
  { icon: "sheet", title: "Side spreadsheets", body: "Jobs, appointments, or projects are tracked in spreadsheets on the side" },
  { icon: "search", title: "Answers take too long", body: "You can't see the numbers you care about without asking someone to pull them" },
  { icon: "clean", title: "Messy exports", body: "Hours go into cleaning up CSV exports before anyone can use them" },
  { icon: "split", title: "Conflicting numbers", body: "Different reports give different answers to the same question" },
];

export const beforeAfter = {
  before: ["Hours spent rebuilding one report", "Numbers copied between systems", "Owner asks staff for every update"],
  after: ["Report updates automatically", "One trusted place for the numbers", "Answers available when you need them"],
};

export type Offer = {
  eyebrow: string;
  name: string;
  price: string;
  summary: string;
  features: string[];
  tone: "teal" | "blue";
  /** Highlighted card. */
  highlight?: string;
};

export const offers: Offer[] = [
  {
    eyebrow: "A faster weekly workflow",
    name: "Reporting rescue",
    price: "$600",
    summary: "One report your team rebuilds by hand, turned into a repeatable process that takes minutes instead of hours.",
    features: ["Review the current report and data sources", "Automated cleanup and calculations", "Checked against past manual versions", "Plain-English steps for your team"],
    tone: "teal",
  },
  {
    eyebrow: "See the whole business",
    name: "Operations dashboard",
    price: "$1,250",
    summary: "The numbers you actually run the business on - in one clear, filterable place, built from data you already have.",
    features: ["Short, focused requirements session", "Power BI dashboard with your KPIs", "Data cleanup and validation", "Team walkthrough and handover"],
    tone: "blue",
    highlight: "Good place to start",
  },
  {
    eyebrow: "Connect the moving parts",
    name: "Automation + dashboard",
    price: "$2,500",
    summary: "A reliable pipeline that combines and cleans data across systems, feeding a dashboard that stays current.",
    features: ["Combine booking, job, CRM, and accounting exports", "Python or Power Query cleanup pipeline", "Scheduled refresh where your setup allows", "Documentation and 30 days of fixes"],
    tone: "teal",
  },
];

/** Shown under the service cards. */
export const supportNote =
  "After any project: ongoing support from $150/month - refresh monitoring, small changes, new KPIs, and a monthly check-in.";

/** Example dashboards by industry. All figures are sample data. */
export const useCases = [
  {
    id: "clinics",
    industry: "Clinics & practices",
    name: "Clinic operations",
    question: "Which practitioners have open capacity, and where are we losing appointments?",
    metrics: ["Booked vs. available hours", "Cancellations & no-shows", "Revenue by service"],
    kpi: "82%",
    kpiLabel: "Capacity used",
    trend: "+6.4%",
    status: "4 openings",
    substats: [["Booked", "126 hrs"], ["Available", "28 hrs"]],
    color: "#0d9488",
    chart: [44, 66, 57, 78, 70, 88],
  },
  {
    id: "field-service",
    industry: "Plumbing, HVAC & electrical",
    name: "Field service",
    question: "Which lead sources turn into paid jobs, and what is each type of job worth?",
    metrics: ["Lead-to-job conversion", "Revenue by lead source", "Average job value"],
    kpi: "$1,840",
    kpiLabel: "Avg. job value",
    trend: "+12.8%",
    status: "18 active jobs",
    substats: [["Jobs won", "42"], ["Revenue", "$77.3k"]],
    color: "#2563eb",
    chart: [54, 72, 48, 82, 64, 91],
  },
  {
    id: "construction",
    industry: "Construction & renovation",
    name: "Project tracking",
    question: "Is each active project still on budget once change orders are counted?",
    metrics: ["Budget vs. actual", "Approved change orders", "Projected margin"],
    kpi: "24.6%",
    kpiLabel: "Projected margin",
    trend: "+2.1%",
    status: "On track",
    substats: [["Budget used", "68%"], ["Change orders", "$14.2k"]],
    color: "#0f766e",
    chart: [82, 68, 76, 55, 63, 48],
  },
];

/**
 * Current client engagement, written to be fully anonymous: no client name,
 * specialty, location, software names, internal field names, or figures that
 * could identify the clinic. Only claim what has actually been built.
 */
export const clientEngagement = {
  eyebrow: "Real-world project · Current client engagement",
  title: "From scattered operational data to automated management reporting",
  tags: ["Canadian healthcare clinic", "Healthcare operations analytics", "In progress"],
  challenge:
    "A growing healthcare clinic was coordinating patient workflows, funding and billing activity, and handoffs between clinical and administrative teams across several systems. The data was valuable, but it was fragmented - turning it into reliable reporting meant manual exports and spreadsheet work.",
  built: [
    "API-based extraction from the clinic's workflow platform, replacing manual exports",
    "Python cleaning and business logic that merges six separate workflow stages into one dataset",
    "Funding and payer analysis: approvals, collections, and payer mix across funding pathways",
    "Workflow and bottleneck analysis: time in each status, ageing work, and stage-to-stage movement",
    "Data-quality and process-adherence checks that flag missing or inconsistent fields",
    "De-identified reporting tables - names, contact details, birth dates, and clinical notes never reach the dashboard",
    "Automated pass/fail validation before reporting data is refreshed",
    "Interactive Power BI dashboard prototypes for management",
    "A maintenance runbook, so the system doesn't depend on one person",
  ],
  validated:
    "Before switching over, the API pipeline was reconciled against the original manual export - record counts, record IDs, stage and payer values, and financial totals all had to match.",
  goal:
    "Move the clinic from piecing information together by hand to a repeatable reporting system with a clear view of workflow performance, funding timelines, and operational bottlenecks.",
  nextPhase:
    "Moving the pipeline and its de-identified outputs into clinic-controlled cloud storage, so the dashboards refresh on a schedule without depending on anyone's laptop.",
  stats: [
    { value: "3,000+", label: "records consolidated" },
    { value: "6", label: "workflow stages unified" },
    { value: "1 command", label: "full, validated refresh" },
  ],
  pipeline: [
    { icon: "layers", title: "Workflow system", detail: "Where the clinic's work already lives" },
    { icon: "transfer", title: "API extraction", detail: "No more manual exports" },
    { icon: "code", title: "Python cleaning + business logic", detail: "Six stages merged into one dataset" },
    { icon: "shield", title: "Validation + quality checks", detail: "Pass/fail before anything refreshes" },
    { icon: "database", title: "De-identified reporting dataset", detail: "Personal details removed" },
    { icon: "chart", title: "Power BI", detail: "Semantic model and measures" },
    { icon: "search", title: "Management dashboard", detail: "Workflow, funding, and bottlenecks" },
  ] as { icon: IconName; title: string; detail: string }[],
  tools: ["Python", "pandas", "REST APIs", "Power BI", "Power Query", "Data modelling", "Git"],
  /** Optional: a portfolio-safe dashboard screenshot with sample data, e.g. "/client-dashboard-sample.png". */
  screenshot: "",
  privacyNote:
    "Client confidentiality: business and patient-identifying information has been removed. Project details are shown at a high level to protect confidential operational data.",
};

/** Real, verifiable work - the evidence behind the offer. */
export const proof = [
  {
    value: "14,000–16,000",
    label: "records triaged every week",
    body: "Automated a weekly cybersecurity triage process at Hydro One, replacing manual sorting and owner assignment.",
    href: "/projects/vulnerability-triage-automation",
  },
  {
    value: "27",
    label: "reports in an enterprise Power BI suite",
    body: "Built, tested, and released reporting changes at Hydro One used daily by contact-centre managers.",
    href: "/projects/enterprise-reporting-suite",
  },
  {
    value: "3,000+",
    label: "records in a Python pipeline",
    body: "Consolidated six healthcare workflow stages through an API pipeline and reconciled them before reporting.",
    href: "#client-work",
  },
];

export const process = [
  { title: "Free 20-minute process review", body: "Show me the report or workflow. I'll tell you honestly if it's worth automating." },
  { title: "Written plan and fixed price", body: "A short plan covering what I'd build, what stays the same, and one clear price." },
  { title: "Build and check your numbers", body: "I use real exports and reconcile the results against your existing figures." },
  { title: "Handover and support", body: "A team walkthrough, plain-language documentation, and 30 days of fixes." },
];

export const faqs = [
  {
    question: "Do I have to replace the software I already use?",
    answer: "No. I work with what you have - booking, job, accounting, or CRM software - and handle what happens after the data comes out of it. If your software already gives you everything you need, I'll tell you that.",
  },
  {
    question: "Do I need Power BI?",
    answer: "Not necessarily. Some problems are best solved in Excel or Google Sheets. If Power BI is the right fit, I'll explain the licensing before you commit. I'd rather remove four hours of manual work than build a dashboard nobody checks.",
  },
  {
    question: "What about privacy and sensitive data?",
    answer: "I'm happy to sign an NDA and can start from sample or de-identified exports. We agree on safe data handling before I see anything sensitive.",
  },
  {
    question: "Do you only work with clinics, trades, and contractors?",
    answer: "No. I also work with accounting and bookkeeping firms, property managers, logistics companies, and other service businesses. If someone rebuilds the same report every week, there's usually something worth looking at.",
  },
  {
    question: "Who will I be working with?",
    answer: "Me, directly - from the first call through handover. No account managers and no hand-offs.",
  },
  {
    question: "What does it cost?",
    answer: "Most small-business projects land between $600 and $3,500. You get a fixed price in writing before any work starts.",
  },
  {
    question: "How does payment work?",
    answer: "For fixed-price projects, a 40-50% deposit to start, and the rest when you've signed off on the finished work. No hourly billing and no surprise invoices.",
  },
];
