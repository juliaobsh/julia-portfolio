export const business = {
  bookingUrl: "https://calendly.com/yuliaobs/30min",
  bookingSubject: "30-minute process review",
  initials: "YO",
  headshot: "/headshot.jpg",
  bio: [
    "I’m a business process improvement and automation consultant based in Vaughan. I spent 16 months as a Business Data Analyst at Hydro One, working with enterprise reporting and high-volume automation.",
    "Today I combine that technical experience with hands-on small-business support: investigating reporting gaps, organizing records, configuring existing software, and making everyday operations easier to manage. You work directly with me, from the first conversation through handover.",
  ],
  role: "Business process improvement & automation consultant",
  firstName: "Yulia",
  serviceArea: "Vaughan, Thornhill & GTA",
  ctaLabel: "Find out where you're losing time",
  ctaNote: "Free 30-minute conversation · no obligation · no prep needed",
  idealClient:
    "Built for growing service businesses where disorganized records, recurring administration, reporting, and disconnected systems have become too much to manage by hand.",
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
  | "chart"
  | "clock";

export const trustPoints: { icon: IconName; text: string }[] = [
  { icon: "dollar", text: "Fixed-price projects" },
  { icon: "layers", text: "Works with your software" },
  { icon: "pin", text: business.serviceArea },
  { icon: "shield", text: "No unnecessary replacement" },
];

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
  context:
    "Managed Yulia directly during her 16-month term · LinkedIn recommendation",
};

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

export const signs = [
  {
    title: "Information is hard to trust",
    body: "Reports disagree, balances don’t reconcile, or billing discrepancies go unnoticed.",
  },
  {
    title: "Admin keeps piling up",
    body: "Client files and invoices are hard to find, and recurring tasks depend on memory.",
  },
  {
    title: "Work gets stuck",
    body: "Requests, approvals, and follow-ups wait without a clear view of the cause.",
  },
  {
    title: "Systems don’t work together",
    body: "Your team retypes information or rebuilds the same report every week.",
  },
];

export const approach = [
  {
    title: "Understand your operations",
    body: "Look at how your team works, the tools you use, and where time or information gets lost.",
  },
  {
    title: "Find the underlying cause",
    body: "Investigate the data, handoffs, and workflows behind the problem.",
  },
  {
    title: "Choose the simplest solution",
    body: "Improve a process, organize records, configure existing tools, or automate where it helps.",
  },
  {
    title: "Build, verify, and hand over",
    body: "Implement the agreed solution, check the results, and show your team how to use it.",
  },
];

export type Offer = {
  eyebrow: string;
  name: string;
  price: string;
  summary: string;
  features: string[];
  tone: "teal" | "blue";
  highlight?: string;
};

export const offers: Offer[] = [
  {
    eyebrow: "You have one report you keep rebuilding by hand.",
    name: "Reporting rescue",
    price: "$600",
    summary:
      "I take that one report and make it repeatable, so it takes minutes instead of hours.",
    features: [
      "I look at how the report is built today and where its numbers come from",
      "The copying, cleanup, and calculations happen automatically",
      "Checked against your last few hand-built versions",
      "Simple written steps so anyone on your team can run it",
    ],
    tone: "teal",
  },
  {
    eyebrow:
      "You have the information, but it's hard to see what's happening across the business.",
    name: "Operations dashboard",
    price: "$1,250",
    summary:
      "I turn the data you already have into one clear dashboard showing the numbers you run the business on.",
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
    eyebrow:
      "Your information is spread across different programs, and you want it brought together automatically.",
    name: "Automation + dashboard",
    price: "$2,500",
    summary:
      "I connect those programs, clean and combine the information automatically, and feed it into a dashboard that stays up to date.",
    features: [
      "Brings together your booking, job, accounting, or customer software",
      "The cleanup happens automatically every time - no more copying",
      "Updates on a schedule where your software allows it",
      "Written instructions and 30 days of fixes after handover",
    ],
    tone: "teal",
  },
];

export const comparison = {
  rows: [
    {
      label: "Best for",
      values: [
        "One report you rebuild by hand",
        "Seeing your business numbers clearly",
        "Information spread across several programs",
      ],
    },
    {
      label: "What you get",
      values: [
        "A faster, repeatable report",
        "An interactive dashboard",
        "An automatic connection between your programs, plus a dashboard",
      ],
    },
    {
      label: "Where the data comes from",
      values: [
        "Usually 1-2 files or exports",
        "Exports or files you already have",
        "Several programs or files",
      ],
    },
    {
      label: "How it stays up to date",
      values: [
        "Run it when you need it - in minutes",
        "Add the latest export and refresh",
        "Updates on its own, on a schedule where possible",
      ],
    },
  ],
  note:
    "Not sure which one you need? You don't have to be. Book the free review, show me how you work today, and I'll recommend the simplest option - even if it's smaller than you expected.",
};

export const customWork = {
  label: "Custom process fix",
  price: "Quoted after the free review",
  title: "Not every problem is a report or a dashboard",
  body:
    "Your business has grown, but the processes behind it haven’t kept up. Files are hard to find, admin keeps piling up, or your existing software isn’t working the way you need it to. I help organize information, configure existing tools, and put simpler, repeatable workflows in place. Every project starts with a free review and a clear, fixed-price scope.",
  examples: [
    "Document organization and records management",
    "Administrative workflows and recurring tasks",
    "Scheduling and business software configuration",
    "Follow-up and handoff processes",
    "Spreadsheet cleanup and workflow automation",
  ],
  honesty:
    "If it's outside what I do well, I'll say so and point you somewhere better.",
};

export const supportNote =
  "After any project: ongoing support from $150/month - making sure everything keeps updating, small changes, new numbers on your dashboard, and a monthly check-in.";

export const useCases = [
  {
    id: "clinics",
    industry: "Clinics & practices",
    name: "Clinic operations",
    question:
      "Which practitioners have open capacity, and where are we losing appointments?",
    metrics: [
      "Booked vs. available hours",
      "Cancellations & no-shows",
      "Revenue by service",
    ],
    kpi: "82%",
    kpiLabel: "Capacity used",
    trend: "+6.4%",
    status: "4 openings",
    substats: [
      ["Booked", "126 hrs"],
      ["Available", "28 hrs"],
    ],
    color: "#0d9488",
    chart: [44, 66, 57, 78, 70, 88],
  },
  {
    id: "field-service",
    industry: "Plumbing, HVAC & electrical",
    name: "Field service",
    question:
      "Which lead sources turn into paid jobs, and what is each type of job worth?",
    metrics: [
      "Lead-to-job conversion",
      "Revenue by lead source",
      "Average job value",
    ],
    kpi: "$1,840",
    kpiLabel: "Avg. job value",
    trend: "+12.8%",
    status: "18 active jobs",
    substats: [
      ["Jobs won", "42"],
      ["Revenue", "$77.3k"],
    ],
    color: "#2563eb",
    chart: [54, 72, 48, 82, 64, 91],
  },
  {
    id: "construction",
    industry: "Construction & renovation",
    name: "Project tracking",
    question:
      "Is each active project still on budget once change orders are counted?",
    metrics: [
      "Budget vs. actual",
      "Approved change orders",
      "Projected margin",
    ],
    kpi: "24.6%",
    kpiLabel: "Projected margin",
    trend: "+2.1%",
    status: "On track",
    substats: [
      ["Budget used", "68%"],
      ["Change orders", "$14.2k"],
    ],
    color: "#0f766e",
    chart: [82, 68, 76, 55, 63, 48],
  },
];

/** Client identity and confidential operational details remain anonymous. */
export const clientEngagement = {
  eyebrow: "Real-world project · Current client engagement",
  title:
    "From no consolidated reporting to actionable business intelligence",
  tags: [
    "Canadian healthcare clinic",
    "Healthcare operations analytics",
    "In progress",
  ],
  challenge:
    "A Canadian healthcare clinic had no consolidated management reporting. Funding and billing information was fragmented, and treatment delays and administrative bottlenecks were difficult to identify across the workflow.",
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
    {
      value: "3,000+",
      label: "records brought together into one reporting process",
    },
    {
      value: "6",
      label: "parts of the clinic's workflow combined",
    },
    {
      value: "5–10 min",
      label: "approximate current reporting refresh",
    },
    {
      value: "0",
      label: "patient names, contact details, or clinical notes in the reports",
    },
  ],
  solution:
    "One repeatable reporting process that brings the information together and checks it before management uses it.",
  impact:
    "Management gained visibility into previously overlooked funding discrepancies, outstanding balances, treatment delays, and administrative bottlenecks through unified reporting.",
  beforeAfter: {
    before:
      "No consolidated reporting; fragmented funding and billing information; bottlenecks difficult to identify.",
    after:
      "Unified management reporting; financial exceptions surfaced; workflow issues made visible.",
  },
  measuring:
    "Ongoing project. Figures are approximate and describe reporting capabilities, not verified financial savings.",
  whyItMatters: [
    {
      title: "Fewer gaps slip through",
      body:
        "Missing or inconsistent information - the kind that can delay funding or billing follow-up - gets flagged instead of discovered later.",
    },
    {
      title: "Faster answers",
      body:
        "Questions like \"how many cases are waiting on funding?\" become a dashboard lookup instead of an hour of digging.",
    },
    {
      title: "Grows without more admin",
      body:
        "More records don't mean more manual reporting work - the same process handles them.",
    },
    {
      title: "Groundwork for what's next",
      body:
        "Documenting what the clinic's data actually means makes future software decisions faster and cheaper.",
    },
  ],
  pipeline: [
    {
      icon: "layers",
      title: "The clinic’s existing software",
      detail: "ClickUp",
    },
    {
      icon: "transfer",
      title: "Connected automatically",
      detail: "REST API",
    },
    {
      icon: "code",
      title: "Cleaned and combined",
      detail: "Python · pandas",
    },
    {
      icon: "shield",
      title: "Checked for errors",
      detail: "Automated validation",
    },
    {
      icon: "database",
      title: "Personal details left out",
      detail: "Names, contacts & notes excluded",
    },
    {
      icon: "chart",
      title: "Dashboard built",
      detail: "Power BI",
    },
    {
      icon: "search",
      title: "Management sees the numbers",
      detail: "Workflow · funding · bottlenecks",
    },
  ] as { icon: IconName; title: string; detail: string }[],
  tools: [
    "ClickUp",
    "Python",
    "pandas",
    "REST APIs",
    "Power BI",
    "Power Query",
    "Data modelling",
    "Git",
  ],
  screenshot: "",
  privacyNote:
    "Client confidentiality: business and patient-identifying information has been removed. Project details are shown at a high level to protect confidential operational data.",
};

export const proof = [
  {
    value: "14,000–16,000",
    label: "records triaged every week",
    body:
      "Automated a weekly cybersecurity triage process at Hydro One, replacing manual sorting and owner assignment.",
    href: "/projects/vulnerability-triage-automation",
  },
  {
    value: "27",
    label: "reports in an enterprise Power BI suite",
    body:
      "Built, tested, and released reporting changes at Hydro One used daily by contact-centre managers.",
    href: "/projects/enterprise-reporting-suite",
  },
];

export const process = [
  {
    title: "Free 30-minute process review",
    body:
      "Show me one frustrating task or process. We’ll discuss possible causes and whether a practical fix is worth pursuing.",
  },
  {
    title: "Written plan and fixed price",
    body:
      "Agree on deliverables, boundaries, ongoing costs, and a fixed price before work starts.",
  },
  {
    title: "Build and check your numbers",
    body:
      "Implement the agreed improvement and verify it against your existing records or workflow.",
  },
  {
    title: "Handover and support",
    body:
      "A team walkthrough, plain-language documentation, and 30 days of fixes.",
  },
];

export const faqs = [
  {
    question: "Do I have to replace the software I already use?",
    answer:
      "No. I start by understanding what your tools already do. I regularly learn unfamiliar platforms through guidance from their users and my own technical investigation, then assess whether configuration, a simpler process, or an integration can help.",
  },
  {
    question: "Will this disrupt how my team works?",
    answer:
      "As little as possible. I start from the software and routines you already use, agree on any access or changes with you first, and build alongside your current process - nothing switches over until you've checked the results. Most of what I need from your team is one conversation about how the work gets done today, then a walkthrough and plain-language instructions at the end.",
  },
  {
    question:
      "Who owns what you build, and what does it cost to keep running?",
    answer:
      "You own your business data and receive the deliverables agreed in the written proposal. I explain paid software, hosting, and maintenance costs before you commit. Ongoing support is optional unless specified in your proposal; ownership and support terms are set out in the service agreement.",
  },
  {
    question: "Do I need Power BI?",
    answer:
      "Not necessarily. Some problems are best solved in Excel or Google Sheets. If Power BI is the right fit, I'll explain the licensing before you commit. I'd rather remove four hours of manual work than build a dashboard nobody checks.",
  },
  {
    question: "What about privacy and sensitive data?",
    answer:
      "I'm happy to sign an NDA and can start from sample or de-identified exports. We agree on safe data handling before I see anything sensitive.",
  },
  {
    question: "Do you only work with clinics, trades, and contractors?",
    answer:
      "No. I also work with accounting and bookkeeping firms, property managers, logistics companies, and other service businesses. If someone rebuilds the same report every week, there's usually something worth looking at.",
  },
  {
    question: "Who will I be working with?",
    answer:
      "Me, directly - from the first call through handover. No account managers and no hand-offs.",
  },
  {
    question: "What does it cost?",
    answer:
      "Most small-business projects land between $600 and $3,500. You get a fixed price in writing before any work starts.",
  },
  {
    question: "How does payment work?",
    answer:
      "For fixed-price projects, a 40-50% deposit to start, and the rest when you've signed off on the finished work. No hourly billing and no surprise invoices.",
  },
];

export const additionalWork = [
  {
    id: "practice-operations",
    category: "Healthcare operations",
    client: "Independent Healthcare Practice · GTA, Ontario",
    status: "Ongoing support · February 2025–Present",
    title: "From administrative overload to organized operations",
    summary:
      "Reorganized hundreds of client records, established consistent administrative workflows, and configured everyday business systems for an independent healthcare practice.",
    challenge:
      "Years of physical and digital client records, invoices, consent forms, and administrative documentation had accumulated without a consistent structure. Finding information and keeping records current had become difficult to manage.",
    contributions: [
      "Reorganized hundreds of physical client files by year and alphabetically for easier retrieval.",
      "Organized historical invoices spanning multiple years into a consistent digital filing structure.",
      "Maintain administrative records and invoice documentation through repeatable processes, under the practitioner’s direction.",
      "Configured and continue to maintain an online appointment-booking platform around the owner’s operational needs.",
      "Maintain the existing website and support online advertising activities.",
    ],
    outcomeLabel: "What changed",
    outcome:
      "An overwhelming administrative backlog became a structured system that is easier to navigate and maintain. Records are organized for easier access, with ongoing support to keep information current.",
    takeaway:
      "Sometimes the most useful improvement is organizing existing information, configuring tools properly, and creating processes a business can maintain.",
    tags: [
      "Records management",
      "Process improvement",
      "Software configuration",
    ],
  },
  {
    id: "opportunity-system",
    category: "Collaborative business systems project",
    client: "Business Strategy & Advisory Firm · Canadian Business Services",
    status: "In development · October–November 2026",
    title:
      "Designing a structured system for business growth opportunities",
    summary:
      "Contributing to the early design of a reliable data foundation for evaluating funding, procurement, partnership, and growth opportunities as part of a collaborative team.",
    challenge:
      "Business opportunities are scattered across sources, with inconsistent eligibility requirements and frequently changing information. The project explores a more structured way to evaluate opportunities and connect businesses with relevant programs.",
    contributions: [
      "Exploring database structures for opportunity records, eligibility requirements, and source tracking.",
      "Defining consistent fields and relationships to support filtering, comparison, and future matching.",
      "Investigating data quality, duplicate detection, and record verification processes.",
      "Considering how records can be updated and maintained as programs and requirements change.",
    ],
    outcomeLabel: "Intended outcome · work in progress",
    outcome:
      "The team aims to produce a testable framework for collecting, organizing, and evaluating business growth opportunities. My focus is the underlying data structure and maintenance approach. Design and prototyping are ongoing.",
    takeaway:
      "Useful automation begins with reliable data, clear rules, and a practical plan for keeping information current.",
    tags: ["Database design", "Data quality", "Systems planning"],
  },
];

export const software = {
  title: "Your software doesn’t have to change.",
  body:
    "I’ve worked with Excel, QuickBooks, ClickUp, OPIE, WordPress, Noterro, and other business platforms. I regularly learn unfamiliar systems with guidance from the people who use them and my own technical investigation. I start with what your tools already do, then assess whether better configuration, a simpler process, or a practical integration could help.",
  note:
    "You don’t need to know what technology you need. That’s part of what we’ll figure out together.",
};

export const scopeNote =
  "Every project starts with a written scope and fixed price. I explain paid software, hosting, and maintenance costs before you commit. You own your business data and receive the agreed deliverables. Ongoing support is optional unless specified in your proposal; the service agreement sets out ownership and support terms.";

export const roiNote =
  "Time savings are only one part of the value. Better reporting can also uncover billing discrepancies, missed follow-ups, delayed work, and problems that weren’t previously visible. These benefits are assessed separately during your free review.";

export const practiceComparison = [
  [
    "Hundreds of files difficult to navigate",
    "Organized physical filing system",
  ],
  [
    "Years of invoices inconsistently organized",
    "Consistent digital invoice structure",
  ],
  [
    "Admin difficult to maintain",
    "Repeatable procedures and ongoing support",
  ],
  [
    "Booking and website tools needed attention",
    "Configured and maintained existing systems",
  ],
];
