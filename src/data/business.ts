/**
 * Copy for the /business page - the consulting offer for local businesses.
 * Kept separate from the portfolio data because it speaks to a different
 * reader: an owner or manager, not a hiring team.
 */
export const business = {
  /** Replace with a Calendly (or similar) link once one exists. Until then the CTA opens an email. */
  bookingUrl: "",
  bookingSubject: "20-minute process review",
  initials: "YO",
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
  | "dollar";

export const trustPoints: { icon: IconName; text: string }[] = [
  { icon: "dollar", text: "Fixed-price projects" },
  { icon: "layers", text: "Works with your software" },
  { icon: "pin", text: business.serviceArea },
  { icon: "shield", text: "No unnecessary replacement" },
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
    body: "Consolidated six healthcare workflow exports and reconciled them before reporting.",
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
    answer: "Not necessarily. Some problems are best solved in Excel or Google Sheets. If Power BI is the right fit, I'll explain the licensing before you commit.",
  },
  {
    question: "What about privacy and sensitive data?",
    answer: "I'm happy to sign an NDA and can start from sample or de-identified exports. We agree on safe data handling before I see anything sensitive.",
  },
  {
    question: "Who will I be working with?",
    answer: "Me, directly - from the first call through handover. No account managers and no hand-offs.",
  },
  {
    question: "What does it cost?",
    answer: "Most small-business projects land between $600 and $3,500. You get a fixed price in writing before any work starts.",
  },
];
