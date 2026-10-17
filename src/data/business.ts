/**
 * Copy for the /business page - the consulting offer for local businesses.
 * Kept separate from the portfolio data because it speaks to a different
 * reader: an owner or manager, not a hiring team.
 */
export const business = {
  /** Booking page for the free process review. Leave empty to fall back to email. */
  bookingUrl: "https://calendly.com/yuliaobs/30min",
  bookingSubject: "30-minute process review",
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
    eyebrow: "You have one report you keep rebuilding by hand.",
    name: "Reporting rescue",
    price: "$600",
    summary: "I take that one report and make it repeatable, so it takes minutes instead of hours.",
    features: [
      "I look at how the report is built today and where its numbers come from",
      "The copying, cleanup, and calculations happen automatically",
      "Checked against your last few hand-built versions",
      "Simple written steps so anyone on your team can run it",
    ],
    tone: "teal",
  },
  {
    eyebrow: "You have the information, but it's hard to see what's happening across the business.",
    name: "Operations dashboard",
    price: "$1,250",
    summary: "I turn the data you already have into one clear dashboard showing the numbers you run the business on.",
    features: [
      "A short conversation about the decisions you make and what you need to see",
      "A dashboard you can click into and filter (usually Power BI)",
      "Your data cleaned up and checked against your own figures",
      "A walkthrough for you and your team",
    ],
    tone: "blue",
    highlight: "Good place to start",
  },
  {
    eyebrow: "Your information is spread across different programs, and you want it brought together automatically.",
    name: "Automation + dashboard",
    price: "$2,500",
    summary: "I connect those programs, clean and combine the information automatically, and feed it into a dashboard that stays up to date.",
    features: [
      "Brings together your booking, job, accounting, or customer software",
      "The cleanup happens automatically every time - no more copying",
      "Updates on a schedule where your software allows it",
      "Written instructions and 30 days of fixes after handover",
    ],
    tone: "teal",
  },
];

/** Side-by-side comparison of the three offers, in the same order as `offers`. */
export const comparison = {
  rows: [
    {
      label: "Best for",
      values: ["One report you rebuild by hand", "Seeing your business numbers clearly", "Information spread across several programs"],
    },
    {
      label: "What you get",
      values: ["A faster, repeatable report", "An interactive dashboard", "An automatic connection between your programs, plus a dashboard"],
    },
    {
      label: "Where the data comes from",
      values: ["Usually 1-2 files or exports", "Exports or files you already have", "Several programs or files"],
    },
    {
      label: "How it stays up to date",
      values: ["Run it when you need it - in minutes", "Add the latest export and refresh", "Updates on its own, on a schedule where possible"],
    },
  ],
  note: "Not sure which one you need? You don't have to be. Book the free review, show me how you work today, and I'll recommend the simplest option - even if it's smaller than you expected.",
};

/** Shown under the service cards. */
export const supportNote =
  "After any project: ongoing support from $150/month - making sure everything keeps updating, small changes, new numbers on your dashboard, and a monthly check-in.";

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
    "Connected directly to the clinic's existing software, so staff no longer export data by hand",
    "Combined information from six parts of the clinic's workflow into one reliable source",
    "Funding and payment analysis: what's been approved, what's been collected, and who's paying",
    "Showed where work slows down - how long things sit at each step, and what's piling up",
    "Automatic checks that flag missing or inconsistent information",
    "Patient privacy built in: names, contact details, birth dates, and clinical notes never reach the dashboard",
    "A pass/fail check before every update, so bad data doesn't slip into the reports",
    "Interactive dashboard prototypes for management",
    "Written instructions, so the system doesn't depend on one person",
  ],
  validated:
    "Before switching over, I checked the new automatic process against the old manual one - the number of records, the records themselves, and the financial totals all had to match.",
  goal:
    "Move the clinic from piecing information together by hand to a repeatable reporting system with a clear view of how work is flowing, where funding stands, and where things get stuck.",
  nextPhase:
    "Moving everything into secure, clinic-controlled cloud storage, so the dashboards update on their own on a schedule - nobody needs to run anything from their laptop.",
  stats: [
    { value: "3,000+", label: "records brought together" },
    { value: "6", label: "parts of the workflow combined" },
    { value: "1 step", label: "to refresh everything, with checks" },
  ],
  /** Plain-language title, with the technical name underneath for technical readers. */
  pipeline: [
    { icon: "layers", title: "The clinic's existing software", detail: "Workflow platform" },
    { icon: "transfer", title: "Connected automatically", detail: "REST API" },
    { icon: "code", title: "Cleaned and combined", detail: "Python · pandas" },
    { icon: "shield", title: "Checked for errors", detail: "Automated validation" },
    { icon: "database", title: "Private details removed", detail: "De-identified dataset" },
    { icon: "chart", title: "Dashboard built", detail: "Power BI" },
    { icon: "search", title: "Management sees the numbers", detail: "Workflow · funding · bottlenecks" },
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
  { title: "Free 30-minute process review", body: "Show me the report or workflow. I'll tell you honestly if it's worth automating." },
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
