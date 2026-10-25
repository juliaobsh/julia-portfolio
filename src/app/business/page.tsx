import Image from "next/image";
import { site, socialLinks } from "@/data/site";
import {
  additionalWork,
  approach,
  business,
  clientEngagement,
  comparison,
  customWork,
  dataPractices,
  faqs,
  offers,
  practiceComparison,
  process,
  proof,
  reference,
  roiNote,
  scopeNote,
  signs,
  software,
  supportNote,
  useCases,
} from "@/data/business";
import { buildMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { LinkedinIcon } from "@/components/ui/icons";
import { CaseStudyLink } from "@/components/ui/ReturnSpot";
import { FaqAccordion } from "./FaqAccordion";
import { RoiCalculator } from "./RoiCalculator";
import { BackToTop, BusinessHeader } from "./BusinessHeader";
import { Expandable } from "./Expandable";
import styles from "./business.module.css";

export const metadata = buildMetadata({
  title: "Business Process Improvement & Automation",
  description: `${site.name} helps GTA businesses investigate operational bottlenecks, improve reporting, organize records, and simplify work using existing tools.`,
  path: "/business",
});

const bookingHref =
  business.bookingUrl ||
  `mailto:${site.email}?subject=${encodeURIComponent(
    business.bookingSubject,
  )}`;

const linkedin = socialLinks.find((link) => link.label === "LinkedIn");

const pageSections = [
  { id: "help", label: "Approach" },
  { id: "client-work", label: "Client work" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
];

const card =
  "rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8";

const copy = "text-[15px] leading-7 text-slate-600";

function BookButton({
  children = "Book a free 30-minute process review",
  dark = false,
}: {
  children?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <a
      href={bookingHref}
      {...(bookingHref.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold transition hover:-translate-y-0.5",
        dark
          ? "bg-white text-slate-950"
          : "bg-blue-600 text-white hover:bg-blue-700",
      )}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function BeforeAfter({ rows }: { rows: string[][] }) {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
      <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-wider">
        <p className="bg-slate-100 p-3 text-slate-500">Before</p>
        <p className="bg-teal-50 p-3 text-teal-700">After</p>
      </div>

      {rows.map(([before, after]) => (
        <div
          key={before}
          className="grid grid-cols-2 border-t border-slate-100 text-sm leading-6"
        >
          <p className="bg-white p-3 text-slate-500">{before}</p>
          <p className="bg-teal-50/40 p-3 font-medium text-slate-800">
            {after}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function BusinessPage() {
  return (
    <div className="overflow-hidden bg-[#fbfaf7] text-slate-900">
      <BusinessHeader
        name={site.name}
        initials={business.initials}
        sections={pageSections}
        linkedinHref={linkedin?.href}
        bookingHref={bookingHref}
        bookingLabel="Free 30-min call"
      />

            {/* Hero and proof snapshot */}
      <section className="relative px-5 pb-14 pt-32 lg:px-8 lg:pt-40">
        <div
          className={cn(styles.heroGrid, "absolute inset-0")}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className={styles.eyebrow}>
                Process improvement · automation · reporting
              </p>

              <h1 className="max-w-2xl text-[clamp(2.7rem,4.8vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-.045em]">
                Stop losing{" "}
                <span className="text-blue-600">time and money</span>{" "}
                to inefficient processes.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                I help GTA businesses uncover operational bottlenecks,
                find overlooked problems, and simplify the work
                happening behind the scenes.
              </p>

              <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
                Whether it’s disorganized records, financial
                discrepancies, repetitive administration, or
                disconnected software, I investigate what’s slowing
                your business down and build practical solutions using
                the tools you already have.
              </p>

              <div className="mt-7">
                <BookButton>{business.ctaLabel}</BookButton>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                {business.ctaNote}
              </p>

              <p className="mt-6 max-w-xl text-sm font-medium leading-6 text-slate-600">
                Fixed-price projects · Works with your software ·{" "}
                {business.serviceArea}
              </p>
            </div>

            {/* Original-style dashboard visual */}
            <figure
              className={cn(
                styles.loadVisual,
                "relative mx-auto hidden w-full max-w-[570px] lg:block",
              )}
            >
              <span className="absolute -top-4 right-6 z-10 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-800 shadow-sm">
                Illustrative · sample business data
              </span>

              <div className="relative">
                <div
                  className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-teal-300/25 blur-3xl"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-purple-300/25 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative rotate-[1deg] rounded-[28px] border border-white/80 bg-white/90 p-3 shadow-[0_30px_80px_-28px_rgba(15,23,42,.35)] backdrop-blur">
                  <div className="flex items-center justify-between border-b border-slate-100 px-3 py-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-slate-400">
                        Weekly operations
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-900">
                        Business overview
                      </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Updated today
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 px-3 pt-3 text-[8px] font-medium text-slate-400">
                    <span>
                      Source: job software export + bookkeeping workbook
                    </span>
                    <span className="shrink-0">Sample data</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 p-3">
                    {[
                      ["$48.2k", "Revenue", "+12.4%"],
                      ["184", "Jobs completed", "+8.1%"],
                      ["76%", "Team capacity", "+4.2%"],
                    ].map(([value, label, trend]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3"
                      >
                        <p className="text-[9px] font-medium text-slate-500">
                          {label}
                        </p>
                        <p className="mt-1 text-lg font-bold text-slate-900">
                          {value}
                        </p>
                        <p className="mt-1 text-[9px] font-semibold text-teal-600">
                          {trend}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-[1.45fr_.8fr] gap-2 px-3 pb-3">
                    <div className="rounded-2xl border border-slate-100 p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold text-slate-700">
                          Revenue by week
                        </span>
                        <span className="text-[9px] text-slate-400">
                          Last 6 weeks
                        </span>
                      </div>

                      <svg
                        viewBox="0 0 330 130"
                        className="mt-3 w-full overflow-visible"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient
                            id="heroRevenueFill"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop stopColor="#2563eb" />
                            <stop
                              offset="1"
                              stopColor="#2563eb"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>

                        {[25, 60, 95].map((y) => (
                          <line
                            key={y}
                            x1="0"
                            x2="330"
                            y1={y}
                            y2={y}
                            stroke="#e2e8f0"
                            strokeDasharray="3 5"
                          />
                        ))}

                        <path
                          d="M0 103 C28 91,45 95,68 75 S108 78,135 58 S178 69,205 39 S250 50,275 25 S310 30,330 12 L330 130 L0 130Z"
                          fill="url(#heroRevenueFill)"
                          opacity=".18"
                          className={styles.fadeIn}
                        />
                        <path
                          d="M0 103 C28 91,45 95,68 75 S108 78,135 58 S178 69,205 39 S250 50,275 25 S310 30,330 12"
                          pathLength={1}
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="4"
                          strokeLinecap="round"
                          className={styles.draw}
                        />
                      </svg>
                    </div>

                    <div className="rounded-2xl border border-slate-100 p-4">
                      <p className="text-[10px] font-bold text-slate-700">
                        Job status
                      </p>

                      <div
                        className={cn(
                          styles.spinIn,
                          "mx-auto mt-4 grid h-24 w-24 place-items-center rounded-full",
                        )}
                        style={{
                          background:
                            "conic-gradient(#2563eb 0 58%, #14b8a6 58% 82%, #e2e8f0 82%)",
                        }}
                      >
                        <div className="grid h-16 w-16 place-items-center rounded-full bg-white">
                          <span className="text-lg font-bold">
                            184
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-between text-[8px] text-slate-500">
                        <span>Complete</span>
                        <span>Open</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-white bg-white p-3 shadow-xl">
                  <span
                    className="grid h-9 w-9 place-items-center rounded-xl bg-teal-50 font-bold text-teal-600"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <div>
                    <p className="text-[10px] text-slate-400">
                      Manual steps removed
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Report ready in minutes
                    </p>
                  </div>
                </div>
              </div>

              <figcaption className="mt-12 text-center text-sm leading-6 text-slate-500">
                See revenue, open jobs, and team capacity{" "}
                <strong className="font-semibold text-slate-700">
                  without waiting for someone to rebuild a spreadsheet.
                </strong>
              </figcaption>
            </figure>
          </div>

          <a
            href="#client-work"
            className="mt-10 block rounded-2xl border border-teal-200 bg-white/90 p-5 transition hover:border-blue-400 lg:mt-14 sm:p-6"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Featured healthcare project · current engagement
            </p>
            <p className="mt-2 text-lg font-bold">
              No consolidated reporting → financial exceptions and
              workflow issues made visible
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              3,000+ records · 6 workflow stages · approximately 5–10 min
              refresh
              <span className="ml-2 font-semibold text-blue-600">
                See the project →
              </span>
            </p>
          </a>
        </div>
      </section>

      {/* Problems and diagnostic approach */}
      <section
        id="help"
        className="scroll-mt-20 bg-white px-5 py-14 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className={styles.sectionTitle}>Where I can help</h2>
          </Reveal>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {signs.map((sign) => (
              <div key={sign.title} className={card}>
                <h3 className="font-bold">{sign.title}</h3>
                <p className={cn(copy, "mt-2")}>{sign.body}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-2xl font-extrabold tracking-tight">
            I don’t start with a dashboard. I start with the problem.
          </h3>

          <ol className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step, i) => (
              <li
                key={step.title}
                className="border-t-2 border-teal-200 pt-4"
              >
                <p className="text-xs font-bold text-teal-700">
                  0{i + 1}
                </p>
                <h4 className="mt-2 font-bold">{step.title}</h4>
                <p className={cn(copy, "mt-2")}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Selected work */}
      <section
        id="client-work"
        className="scroll-mt-20 px-5 py-14 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className={styles.eyebrow}>
              Real results and client experience
            </p>
            <h2 className={styles.sectionTitle}>
              Practical improvements, at every scale.
            </h2>
          </Reveal>

          <article className={cn(card, "mt-8 border-teal-200")}>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Featured client project · Canadian healthcare clinic ·
              ongoing
            </p>

            <h3 className="mt-3 max-w-3xl text-2xl font-extrabold tracking-tight sm:text-3xl">
              {clientEngagement.title}
            </h3>

            <p className={cn(copy, "mt-4 max-w-4xl")}>
              {clientEngagement.impact}
            </p>

            <dl className="mt-6 grid grid-cols-3 gap-3">
              {clientEngagement.stats.slice(0, 3).map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-xl bg-blue-50 p-3 sm:p-5"
                >
                  <dt className="text-xs leading-5 text-slate-600">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-extrabold tracking-tight text-blue-700 sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <BeforeAfter
              rows={[
                [
                  "No consolidated reporting",
                  "Unified management reporting",
                ],
                [
                  "Fragmented funding and billing information",
                  "Financial exceptions surfaced",
                ],
                [
                  "Bottlenecks difficult to identify",
                  "Workflow issues made visible",
                ],
              ]}
            />

            <p className="mt-4 text-xs leading-6 text-slate-500">
              {clientEngagement.measuring}
            </p>

            <div className="mt-5">
              <Expandable
                openLabel="How I built it"
                closeLabel="Hide technical details"
              >
                <div className="grid gap-8 pt-7 lg:grid-cols-2">
                  <div>
                    <h4 className="font-bold">The challenge</h4>
                    <p className={cn(copy, "mt-2")}>
                      {clientEngagement.challenge}
                    </p>

                    <h4 className="mt-5 font-bold">What I built</h4>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                      {clientEngagement.built.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold">How it was verified</h4>
                    <p className={cn(copy, "mt-2")}>
                      {clientEngagement.validated}
                    </p>

                    <h4 className="mt-5 font-bold">
                      How the data flows
                    </h4>
                    <ol className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                      {clientEngagement.pipeline.map((step, i) => (
                        <li key={step.title}>
                          {i + 1}. {step.title}{" "}
                          <span className="text-slate-400">
                            · {step.detail}
                          </span>
                        </li>
                      ))}
                    </ol>

                    <h4 className="mt-5 font-bold">
                      Next phase · planned
                    </h4>
                    <p className={cn(copy, "mt-2")}>
                      {clientEngagement.nextPhase}
                    </p>

                    <p className="mt-4 text-xs leading-6 text-slate-500">
                      {clientEngagement.tools.join(" · ")}
                    </p>
                    <p className="mt-4 text-xs leading-6 text-slate-500">
                      {clientEngagement.privacyNote}
                    </p>
                  </div>
                </div>
              </Expandable>
            </div>
          </article>

          <div className="mt-5 grid items-start gap-5 lg:grid-cols-2">
            <article id="practice-operations" className={card}>
              <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Independent healthcare practice · ongoing support
              </p>
              <h3 className="mt-3 text-xl font-extrabold">
                {additionalWork[0].title}
              </h3>
              <p className={cn(copy, "mt-3")}>
                {additionalWork[0].summary}
              </p>
              <p className="mt-3 text-xs font-semibold text-slate-500">
                February 2025–Present · GTA, Ontario
              </p>

              <div className="mt-5">
                <Expandable
                  openLabel="See practice project details"
                  closeLabel="Hide practice details"
                >
                  <div className="pt-5">
                    <BeforeAfter rows={practiceComparison} />
                    <p className={cn(copy, "mt-4")}>
                      {additionalWork[0].challenge}
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                      {additionalWork[0].contributions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p className={cn(copy, "mt-4")}>
                      {additionalWork[0].outcome}
                    </p>
                    <p className="mt-4 text-sm font-medium leading-7 text-teal-800">
                      {additionalWork[0].takeaway}
                    </p>
                  </div>
                </Expandable>
              </div>
            </article>

            <article className={card}>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Enterprise systems · Hydro One
              </p>
              <h3 className="mt-3 text-xl font-extrabold">
                High-volume automation and production reporting
              </h3>

              <div className="mt-4 space-y-4">
                {proof.map((item) => (
                  <div key={item.value}>
                    <p className="text-2xl font-extrabold text-blue-700">
                      {item.value}{" "}
                      <span className="text-sm font-semibold text-slate-600">
                        {item.label}
                      </span>
                    </p>
                    <p className={cn(copy, "mt-1")}>{item.body}</p>
                    <CaseStudyLink
                      href={item.href}
                      label="Back to client experience"
                      className="mt-2 inline-block text-sm font-semibold text-blue-600"
                    >
                      Read the case study →
                    </CaseStudyLink>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside
            id="opportunity-system"
            className="mt-5 rounded-2xl border border-dashed border-slate-300 p-5 sm:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Collaborative project · in development · October–November
              2026
            </p>
            <h3 className="mt-2 text-lg font-bold">
              {additionalWork[1].title}
            </h3>
            <p className={cn(copy, "mt-2")}>
              {additionalWork[1].summary}
            </p>

            <div className="mt-4">
              <Expandable
                openLabel="Explore the project in development"
                closeLabel="Hide project details"
              >
                <div className="pt-5">
                  <p className={copy}>{additionalWork[1].challenge}</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                    {additionalWork[1].contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className={cn(copy, "mt-4")}>
                    {additionalWork[1].outcome}
                  </p>
                  <p className={cn(copy, "mt-3")}>
                    {additionalWork[1].takeaway}
                  </p>
                </div>
              </Expandable>
            </div>
          </aside>
        </div>
      </section>

      {/* Services, boundaries, and ROI */}
      <section
        id="services"
        className="scroll-mt-20 bg-[#f3f1ec] px-5 py-14 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className={styles.sectionTitle}>
              What do you need fixed?
            </h2>
            <p className={styles.sectionCopy}>
              Clear starting prices. A written scope and fixed quote
              before work begins.
            </p>
          </Reveal>

          <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offers.map((offer) => (
              <article
                key={offer.name}
                className={cn(
                  card,
                  "flex flex-col",
                  offer.highlight && "border-blue-400",
                )}
              >
                <p className="text-xs font-semibold text-blue-600">
                  {offer.highlight || "Fixed-price project"}
                </p>
                <h3 className="mt-3 text-xl font-extrabold">
                  {offer.name}
                </h3>
                <p className="mt-3 text-3xl font-extrabold">
                  <span className="text-xs font-medium text-slate-500">
                    From{" "}
                  </span>
                  {offer.price}
                </p>
                <p className={cn(copy, "mt-3")}>{offer.summary}</p>

                <div className="mt-auto pt-5">
                  <Expandable
                    openLabel="Deliverables"
                    closeLabel="Hide deliverables"
                  >
                    <ul className="list-disc space-y-2 pl-4 pt-4 text-sm leading-6 text-slate-600">
                      {offer.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </Expandable>
                </div>
              </article>
            ))}

            <article
              className={cn(
                card,
                "flex flex-col border-dashed border-purple-300",
              )}
            >
              <p className="text-xs font-semibold text-purple-600">
                Scope tailored to your process
              </p>
              <h3 className="mt-3 text-xl font-extrabold">
                {customWork.label}
              </h3>
              <p className="mt-3 text-lg font-bold">
                {customWork.price}
              </p>
              <p className={cn(copy, "mt-3")}>
                Organize records, configure scheduling tools, improve
                handoffs, or simplify recurring administration.
              </p>

              <div className="mt-auto pt-5">
                <Expandable
                  openLabel="Examples"
                  closeLabel="Hide examples"
                >
                  <div className="pt-4">
                    <p className={copy}>{customWork.body}</p>
                    <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-slate-600">
                      {customWork.examples.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm text-slate-500">
                      {customWork.honesty}
                    </p>
                  </div>
                </Expandable>
              </div>
            </article>
          </div>

          <div className="mt-6">
            <Expandable
              openLabel="Compare the three reporting packages"
              closeLabel="Hide package comparison"
            >
              <div className="grid gap-4 pt-5 md:grid-cols-3">
                {offers.map((offer, i) => (
                  <div key={offer.name} className={card}>
                    <h3 className="font-bold">{offer.name}</h3>
                    <dl className="mt-4 space-y-3">
                      {comparison.rows.map((row) => (
                        <div key={row.label}>
                          <dt className="text-xs font-bold text-slate-500">
                            {row.label}
                          </dt>
                          <dd className="mt-1 text-sm leading-6">
                            {row.values[i]}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
              <p className={cn(copy, "mt-4")}>{comparison.note}</p>
            </Expandable>
          </div>

          <div className="mt-8 grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 lg:grid-cols-2">
            <div>
              <h3 className="font-bold">
                What your project price includes
              </h3>
              <p className={cn(copy, "mt-2")}>{scopeNote}</p>
            </div>
            <div>
              <h3 className="font-bold">{software.title}</h3>
              <p className={cn(copy, "mt-2")}>{software.body}</p>
              <p className="mt-2 text-sm font-medium text-teal-800">
                {software.note}
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-500">
            {supportNote}
          </p>

          <div className="mt-10 border-t border-slate-300 pt-8">
            <h3 className="text-2xl font-extrabold tracking-tight">
              How much time is the manual work taking?
            </h3>
            <p className={cn(copy, "mt-2")}>
              Estimate the time spent on one recurring report,
              reconciliation, or administrative task.
            </p>
            <div className="mt-5">
              <RoiCalculator
                prices={offers.map((offer) => ({
                  name: offer.name,
                  amount: Number(
                    offer.price.replace(/[^0-9]/g, ""),
                  ),
                }))}
              />
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              {roiNote}
            </p>
          </div>
        </div>
      </section>

      {/* Compact illustrative dashboards */}
      <section
        id="examples"
        className="bg-white px-5 py-12 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold tracking-tight">
            What reporting could look like in your industry
          </h2>
          <p className={cn(copy, "mt-2")}>
            Illustrative dashboard previews with made-up data. These
            are examples, not client results.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {useCases.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-sm font-bold">
                  {item.industry}
                </h3>

                <div className="mt-3 flex items-end justify-between gap-3">
                  <p
                    className="text-3xl font-extrabold"
                    style={{ color: item.color }}
                  >
                    {item.kpi}
                    <span className="mt-1 block text-xs font-medium text-slate-500">
                      {item.kpiLabel}
                    </span>
                  </p>
                  <div
                    className="flex h-12 items-end gap-1.5"
                    aria-hidden="true"
                  >
                    {item.chart.map((height, i) => (
                      <span
                        key={i}
                        className="w-3 rounded-t"
                        style={{
                          height: `${height / 2}px`,
                          backgroundColor: item.color,
                          opacity: 0.35 + i / 10,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.question}
                </p>
                <p className="mt-3 text-xs leading-5 text-slate-400">
                  Sample data · {item.metrics.join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About and manager recommendation */}
      <section
        id="about"
        className="relative scroll-mt-20 bg-slate-950 px-5 py-14 text-white lg:px-8"
      >
        <div
          className={cn(styles.proofGlow, "absolute inset-0")}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
          <Image
            src={business.headshot}
            alt={`Portrait of ${site.name}`}
            width={1024}
            height={1536}
            sizes="(min-width:1024px) 360px, 80vw"
            className="mx-auto aspect-[4/5] w-full max-w-[360px] rounded-[28px] object-cover object-[50%_18%]"
          />

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-300">
              Who you’ll work with
            </p>
            <h2
              className={cn(
                styles.sectionTitle,
                styles.sectionTitleLight,
                "mt-3",
              )}
            >
              Hi, I’m {business.firstName}.
            </h2>

            <div className="mt-5 space-y-3 text-base leading-7 text-slate-300">
              {business.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300"
              >
                <LinkedinIcon size={16} />
                Connect on LinkedIn
              </a>
            )}

            {reference && (
              <figure className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
                <blockquote className="text-[15px] leading-7 text-slate-200">
                  “{reference.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <p className="font-bold">{reference.name}</p>
                  <p className="text-slate-400">{reference.role}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {reference.context}
                  </p>
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </section>

      {/* Delivery and data protection */}
      <section id="process" className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold tracking-tight">
            From first conversation to handover
          </h2>

          <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li key={step.title}>
                <p className="text-xs font-bold text-blue-600">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-bold">{step.title}</h3>
                <p className={cn(copy, "mt-2")}>{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold">
              Your data, handled carefully.
            </h3>
            <p className={cn(copy, "mt-2")}>
              Minimum necessary access, de-identified samples first,
              secure sharing, and storage and deletion terms agreed
              before production data. NDA on request.
            </p>

            <div className="mt-4">
              <Expandable
                openLabel="Read the data-handling practices"
                closeLabel="Hide data-handling practices"
              >
                <div className="grid gap-4 pt-5 sm:grid-cols-2">
                  {dataPractices.map((item) => (
                    <div key={item.title}>
                      <h4 className="text-sm font-bold">
                        {item.title}
                      </h4>
                      <p className={cn(copy, "mt-1")}>
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Expandable>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-20 bg-white px-5 py-12 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.65fr_1.35fr]">
          <h2 className={styles.sectionTitle}>
            Good questions,
            <br />
            plain answers.
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* Final booking invitation */}
      <footer className="relative bg-[#070b16] px-5 py-16 text-white lg:px-8">
        <div
          className={cn(styles.footerGrid, "absolute inset-0")}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Not sure what’s slowing your business down?
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Show me one frustrating report, administrative task, or
            process. In a free 30-minute conversation, we’ll look at
            what’s happening, discuss possible causes, and identify
            whether there’s a practical improvement worth pursuing.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            If there’s a simpler solution you can implement yourself,
            I’ll tell you.
          </p>
          <div className="mt-7">
            <BookButton dark />
          </div>
          <p className="mt-5 text-sm text-slate-400">
            Or email{" "}
            <a
              className="underline underline-offset-4"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
          <p className="mt-10 text-xs text-slate-500">
            Business process improvement & automation · {site.name} ·
            Vaughan, Thornhill & GTA
          </p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
