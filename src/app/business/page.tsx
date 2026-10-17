import Image from "next/image";
import Link from "next/link";
import { site, socialLinks } from "@/data/site";
import {
  beforeAfter,
  business,
  credentials,
  dataPractices,
  reference,
  faqs,
  offers,
  process,
  proof,
  signs,
  trustPoints,
  useCases,
  supportNote,
  type IconName,
} from "@/data/business";
import { buildMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { LinkedinIcon } from "@/components/ui/icons";
import { CaseStudyLink } from "@/components/ui/ReturnSpot";
import { FaqAccordion } from "./FaqAccordion";
import styles from "./business.module.css";

export const metadata = buildMetadata({
  title: "Reporting & Automation for Local Businesses",
  description: `${site.name} helps businesses in ${business.serviceArea} automate manual reporting and build dashboards from the data they already have - without replacing their software.`,
  path: "/business",
});

const bookingHref =
  business.bookingUrl ||
  `mailto:${site.email}?subject=${encodeURIComponent(business.bookingSubject)}`;

const bookingIsExternal = bookingHref.startsWith("http");
const bookingTarget = bookingIsExternal
  ? { target: "_blank", rel: "noopener noreferrer" }
  : {};

const linkedin = socialLinks.find((link) => link.label === "LinkedIn");

/** Animation delay, read by the classes in business.module.css. */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const iconPaths: Record<IconName, React.ReactNode> = {
  repeat: <><path d="M20 7h-9a4 4 0 0 0-4 4v1" /><path d="m17 4 3 3-3 3" /><path d="M4 17h9a4 4 0 0 0 4-4v-1" /><path d="m7 20-3-3 3-3" /></>,
  transfer: <><path d="M7 7h11l-3-3" /><path d="m18 7-3 3" /><path d="M17 17H6l3 3" /><path d="m6 17 3-3" /></>,
  sheet: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h3m3 0h2M8 16h3m3 0h2" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  clean: <><path d="m4 17 6-6 3 3-6 6H4v-3Z" /><path d="m12 9 3-3 3 3-3 3" /><path d="M18 3v3m3 0h-3" /></>,
  split: <><path d="M5 5v4c0 2 2 3 4 3h6" /><path d="m13 9 3 3-3 3" /><path d="M5 19v-3c0-2 2-4 4-4" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  arrow: <><path d="M5 12h14" /><path d="m15 8 4 4-4 4" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2" /></>,
  shield: <><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
  dollar: <><circle cx="12" cy="12" r="9" /><path d="M15 8.5c-.7-.7-1.7-1-3-1-1.7 0-3 1-3 2.3 0 3.5 6 1.6 6 5 0 1.3-1.3 2.3-3 2.3-1.4 0-2.6-.5-3.3-1.3M12 5v14" /></>,
};

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

function BookButton({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={bookingHref}
      {...bookingTarget}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 motion-reduce:hover:translate-y-0",
        dark
          ? "bg-white text-slate-950 shadow-lg shadow-black/20"
          : "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700",
      )}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

/** Hero illustration - a sample dashboard. All values are synthetic. */
function DashboardVisual() {
  return (
    <div className={cn(styles.loadVisual, "relative mx-auto w-full max-w-[570px]")} style={delay(250)}>
      <div className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-teal-300/25 blur-3xl" />
      <div className="absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-purple-300/25 blur-3xl" />
      <div className="relative rotate-[1deg] rounded-[28px] border border-white/80 bg-white/90 p-3 shadow-[0_30px_80px_-28px_rgba(15,23,42,.35)] backdrop-blur">
        <div className="flex items-center justify-between border-b border-slate-100 px-3 py-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-slate-400">Weekly operations</p>
            <p className="mt-1 text-sm font-bold text-slate-900">Business overview</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Updated today
          </div>
        </div>
        <div className="flex items-center justify-between px-3 pt-3 text-[8px] font-medium text-slate-400">
          <span>Source: job software export + bookkeeping workbook</span>
          <span>Sample data</span>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          {[["$48.2k", "Revenue", "+12.4%"], ["184", "Jobs completed", "+8.1%"], ["76%", "Team capacity", "+4.2%"]].map(([value, label, trend], i) => (
            <div key={label} className={cn(styles.load, "rounded-2xl border border-slate-100 bg-slate-50/70 p-3")} style={delay(650 + i * 110)}>
              <p className="text-[9px] font-medium text-slate-500">{label}</p>
              <p className="mt-1 text-lg font-bold text-slate-900">{value}</p>
              <p className="mt-1 text-[9px] font-semibold text-teal-600">{trend}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-2 px-3 pb-3 sm:grid-cols-[1.45fr_.8fr]">
          <div className="rounded-2xl border border-slate-100 p-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-700">Revenue by week</span>
              <span className="text-[9px] text-slate-400">Last 6 weeks</span>
            </div>
            <svg viewBox="0 0 330 130" className="mt-3 w-full overflow-visible" aria-hidden="true">
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#2563eb" />
                  <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[25, 60, 95].map((y) => (
                <line key={y} x1="0" x2="330" y1={y} y2={y} stroke="#e2e8f0" strokeDasharray="3 5" />
              ))}
              <path d="M0 103 C28 91,45 95,68 75 S108 78,135 58 S178 69,205 39 S250 50,275 25 S310 30,330 12 L330 130 L0 130Z" fill="url(#chartFill)" opacity=".18" className={styles.fadeIn} style={delay(1500)} />
              <path d="M0 103 C28 91,45 95,68 75 S108 78,135 58 S178 69,205 39 S250 50,275 25 S310 30,330 12" pathLength={1} fill="none" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" className={styles.draw} style={delay(900)} />
            </svg>
          </div>
          <div className="rounded-2xl border border-slate-100 p-4">
            <p className="text-[10px] font-bold text-slate-700">Job status</p>
            <div className={cn(styles.spinIn, "mx-auto mt-4 grid h-24 w-24 place-items-center rounded-full")} style={{ ...delay(1000), background: "conic-gradient(#2563eb 0 58%, #14b8a6 58% 82%, #e2e8f0 82%)" }}>
              <div className="grid h-16 w-16 place-items-center rounded-full bg-white">
                <span className="text-lg font-bold">184</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-[8px] text-slate-500">
              <span>Complete</span>
              <span>Open</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(styles.pop, "absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-white bg-white p-3 shadow-xl sm:-left-9")} style={delay(1600)}>
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-teal-50 text-teal-600">
          <Icon name="check" className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[10px] text-slate-400">Manual steps removed</p>
          <p className="text-sm font-bold text-slate-900">Report ready in minutes</p>
        </div>
      </div>
    </div>
  );
}

export default function BusinessPage() {
  return (
    <div className="overflow-hidden bg-[#fbfaf7] text-slate-900">
      <header className={cn(styles.loadDown, "absolute inset-x-0 top-0 z-20")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <Link href="/business" className="flex items-center gap-2 text-sm font-extrabold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-950 text-xs text-white">{business.initials}</span>
            {site.name}
          </Link>
          <nav aria-label="Business" className="hidden items-center gap-7 text-xs font-medium text-slate-600 md:flex">
            <a href="#help" className="transition-colors hover:text-blue-600">Where I help</a>
            <a href="#services" className="transition-colors hover:text-blue-600">Services</a>
            <a href="#examples" className="transition-colors hover:text-blue-600">Examples</a>
            <a href="#about" className="transition-colors hover:text-blue-600">About</a>
            <a href="#process" className="transition-colors hover:text-blue-600">Process</a>
            <Link href="/" className="transition-colors hover:text-blue-600">Portfolio</Link>
          </nav>
          <div className="flex items-center gap-2">
            {linkedin ? (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-9 items-center gap-2 rounded-full bg-[#0a66c2] px-3 text-xs font-semibold text-white shadow-sm shadow-[#0a66c2]/30 transition hover:-translate-y-0.5 hover:bg-[#004182] sm:px-4"
              >
                <LinkedinIcon size={14} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            ) : null}
            <a href={bookingHref} {...bookingTarget} className="rounded-full bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600">
              Book a free review
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
        <div className={cn(styles.heroGrid, "absolute inset-0 opacity-50")} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <div className={cn(styles.load, "mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.14em] text-blue-700")} style={delay(100)}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>
              Reporting · automation · dashboards
            </div>
            <h1 className={cn(styles.load, "max-w-2xl text-[2.8rem] font-extrabold leading-[1.03] tracking-[-.045em] text-slate-950 sm:text-6xl lg:text-[4.5rem]")} style={delay(200)}>
              Stop rebuilding the same report{" "}
              <span className="relative whitespace-nowrap text-blue-600">
                every week.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 7c75-5 192-6 296-3" pathLength={1} fill="none" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" className={styles.draw} style={delay(900)} />
                </svg>
              </span>
            </h1>
            <p className={cn(styles.load, "mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg")} style={delay(350)}>
              I help local businesses automate manual reporting and turn the data they already have into dashboards they can actually use - without replacing the software they already trust.
            </p>
            <div className={cn(styles.load, "mt-8 flex flex-col gap-3 sm:flex-row")} style={delay(480)}>
              <BookButton>Book a free 30-minute process review</BookButton>
              <a href="#process" className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300">
                How it works <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
            </div>
            <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-slate-200 pt-6 sm:flex sm:flex-wrap">
              {trustPoints.map((point, i) => (
                <div key={point.text} className={cn(styles.load, "flex items-center gap-2 text-[11px] font-semibold text-slate-600")} style={delay(620 + i * 80)}>
                  <Icon name={point.icon} className="h-4 w-4 text-blue-600" />
                  {point.text}
                </div>
              ))}
            </div>
            <ul aria-label="Background" className={cn(styles.load, "mt-5 flex flex-wrap gap-2")} style={delay(980)}>
              {credentials.map((item) => (
                <li key={item} className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-600">
                  {item}
                </li>
              ))}
              {linkedin ? (
                <li>
                  <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 transition-colors hover:border-blue-300">
                    <LinkedinIcon size={11} />
                    Verify on LinkedIn
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
          <DashboardVisual />
        </div>
      </section>

      {/* Where I can help */}
      <section id="help" className="relative bg-[#f7fafc] px-5 py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,.06),transparent_28%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="relative grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <Reveal>
              <p className={styles.eyebrow}>Does this sound familiar?</p>
              <h2 className={styles.sectionTitle}>Where I can help</h2>
              <p className={styles.sectionCopy}>The warning signs are usually simple. The fix should be, too.</p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {signs.map((sign, i) => (
                <Reveal key={sign.title} delay={i * 70} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_-24px_rgba(15,23,42,.5)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <div className={cn("absolute inset-y-0 left-0 w-1", i % 3 === 0 ? "bg-teal-400" : i % 3 === 1 ? "bg-blue-500" : "bg-purple-400")} />
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon name={sign.icon} />
                  </div>
                  <h3 className="font-bold text-slate-900">{sign.title}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-slate-500">{sign.body}</p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="group/reveal">
          <div className="relative mt-16 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_60px_-40px_rgba(15,23,42,.45)]">
            <div className="grid lg:grid-cols-[1fr_auto_1fr]">
              <div className="p-7 sm:p-9">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-rose-50 text-sm font-bold text-rose-500">×</span>
                  <h3 className="text-sm font-extrabold uppercase tracking-[.13em] text-slate-400">Before</h3>
                </div>
                <ul className="space-y-4">
                  {beforeAfter.before.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] font-semibold text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative hidden w-20 place-items-center lg:grid">
                <div className="absolute inset-y-0 left-1/2 w-px bg-slate-200" />
                <div className="relative grid h-11 w-11 scale-50 place-items-center rounded-full bg-blue-600 text-white opacity-0 shadow-lg shadow-blue-600/25 transition duration-700 ease-[cubic-bezier(.34,1.56,.64,1)] [transition-delay:400ms] group-data-[visible=true]/reveal:scale-100 group-data-[visible=true]/reveal:opacity-100">
                  <Icon name="arrow" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50/80 to-teal-50/60 p-7 sm:p-9">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-extrabold uppercase tracking-[.13em] text-blue-600">After</h3>
                </div>
                <ul className="space-y-4">
                  {beforeAfter.after.map((item, i) => (
                    <li key={item} style={{ transitionDelay: `${600 + i * 120}ms` }} className="flex translate-x-3 items-center gap-3 text-[15px] font-bold text-slate-800 opacity-0 transition duration-700 ease-out group-data-[visible=true]/reveal:translate-x-0 group-data-[visible=true]/reveal:opacity-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#f3f1ec] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-4 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <h2 className={styles.sectionTitle}>Three ways to work together</h2>
            <p className={cn(styles.sectionCopy, "lg:ml-auto")}>
              Every project starts with how you work today. Prices are starting points - you get one fixed price in writing before anything starts.
            </p>
          </Reveal>
          <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
            {offers.map((offer, i) => (
              <Reveal key={offer.name} delay={i * 110} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-[26px] border bg-white p-7 shadow-[0_18px_50px_-35px_rgba(15,23,42,.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-32px_rgba(15,23,42,.3)]",
                  offer.highlight
                    ? "border-blue-400 lg:-translate-y-4 lg:shadow-[0_25px_60px_-30px_rgba(37,99,235,.4)] lg:hover:-translate-y-5"
                    : "border-slate-200",
                )}
              >
                {offer.highlight ? (
                  <span className="absolute -top-3 right-6 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {offer.highlight}
                  </span>
                ) : null}
                <div className={cn("mb-6 h-1.5 w-12 rounded-full", offer.tone === "teal" ? "bg-teal-500" : "bg-blue-600")} />
                <p className="text-sm font-semibold text-slate-400">{offer.eyebrow}</p>
                <h3 className="mt-2 text-xl font-extrabold">{offer.name}</h3>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-sm text-slate-400">From</span>
                  <span className="text-4xl font-extrabold tracking-tight">{offer.price}</span>
                </div>
                <p className="mt-5 min-h-20 text-[15px] leading-6 text-slate-600">{offer.summary}</p>
                <div className="my-6 h-px bg-slate-100" />
                <ul className="space-y-3">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-[15px] leading-6 text-slate-600">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry: ${offer.name}`)}`}
                  className={cn("group mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold", offer.highlight ? "text-blue-600" : "text-slate-700")}
                >
                  Talk through this option <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
              <Icon name="shield" className="h-4 w-4 shrink-0 text-teal-600" />
              {supportNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className={styles.sectionTitle}>What this looks like in your industry</h2>
            <p className={styles.sectionCopy}>
              A good dashboard answers one question the owner actually asks. These are the kinds I build - shown here with sample data.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.06fr_.94fr_1.1fr]">
            {useCases.map((item, cardIndex) => (
              <Reveal
                key={item.id}
                delay={cardIndex * 120}
                className={cn("group/reveal", cardIndex === 1 ? "lg:mt-8" : cardIndex === 2 ? "lg:-mt-3" : "")}
              >
              <article
                id={item.id}
                className="scroll-mt-24 overflow-hidden rounded-[24px] border border-slate-200 bg-[#fafafa] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-36px_rgba(15,23,42,.35)]"
              >
                <div className="m-3 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">{item.industry}</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600">● {item.status}</span>
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{item.kpiLabel}</p>
                      <p className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">{item.kpi}</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">↗ {item.trend}</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {item.substats.map(([label, value]) => (
                      <div key={label} className="rounded-lg bg-slate-50 px-2.5 py-2">
                        <p className="text-[9px] font-medium text-slate-400">{label}</p>
                        <p className="mt-0.5 text-xs font-bold text-slate-700">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-3 flex h-14 items-end gap-2" aria-hidden="true">
                    <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-slate-200" />
                    {item.chart.map((h, i) => (
                      <div
                        key={i}
                        className="relative flex-1 origin-bottom scale-y-0 rounded-t-sm transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-data-[visible=true]/reveal:scale-y-100"
                        style={{ height: `${h * 0.5}px`, backgroundColor: item.color, opacity: 0.3 + i * 0.1, transitionDelay: `${cardIndex * 120 + 300 + i * 70}ms` }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[8px] text-slate-300" aria-hidden="true">
                    {["JAN", "FEB", "MAR", "APR", "MAY", "JUN"].map((m) => <span key={m}>{m}</span>)}
                  </div>
                </div>
                <div className="p-6 pt-3">
                  <h3 className="text-lg font-extrabold">{item.name}</h3>
                  <p className="mt-3 min-h-16 border-l-2 pl-3 text-[15px] leading-6 text-slate-600" style={{ borderColor: item.color }}>
                    {item.question}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.metrics.map((metric) => (
                      <span key={metric} className="border-b border-slate-200 py-1 text-xs font-medium text-slate-500">{metric}</span>
                    ))}
                  </div>
                  <p className="mt-5 font-mono text-[10px] text-slate-400">Sample data · ops_export_{cardIndex + 3}.csv</p>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="relative bg-slate-950 px-5 py-24 text-white lg:px-8">
        <div className={cn(styles.proofGlow, "absolute inset-0")} />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className={cn(styles.sectionTitle, styles.sectionTitleLight, "max-w-2xl")}>Work that holds up when the numbers get big.</h2>
            <p className="max-w-md text-base leading-7 text-slate-300">
              Experience from high-volume environments, applied with the practical focus a growing local business needs.
            </p>
          </Reveal>
          <Reveal delay={120} className="group/reveal">
          <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 lg:grid-cols-3">
            {proof.map((item, i) => (
              <div
                key={item.value}
                style={{ transitionDelay: `${250 + i * 150}ms` }}
                className="flex translate-y-4 flex-col bg-slate-950/80 p-8 opacity-0 transition duration-700 ease-out group-data-[visible=true]/reveal:translate-y-0 group-data-[visible=true]/reveal:opacity-100 lg:p-10"
              >
                <p className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-5xl font-extrabold tracking-[-.05em] text-transparent lg:text-6xl">{item.value}</p>
                <p className="mt-3 text-sm font-bold text-white">{item.label}</p>
                <p className="mt-5 text-sm leading-6 text-slate-400">{item.body}</p>
                {item.href ? (
                  <CaseStudyLink href={item.href} label="Back to where you were" className="group mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-blue-300 transition-colors hover:text-white">
                    Read the case study <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </CaseStudyLink>
                ) : null}
              </div>
            ))}
          </div>
          </Reveal>
          <div id="about" className="mt-24 grid scroll-mt-24 items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <Reveal className="group/reveal">
              <div className="relative mx-auto w-full max-w-[440px]">
                <div className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,.22),transparent_60%)] blur-2xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,.8)]">
                  {business.headshot ? (
                    <Image
                      src={business.headshot}
                      alt={`Portrait of ${site.name}`}
                      width={1024}
                      height={1536}
                      sizes="(min-width: 1024px) 440px, 90vw"
                      className="aspect-[4/5] w-full scale-[1.06] object-cover object-[50%_18%] transition-transform duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)] group-data-[visible=true]/reveal:scale-100"
                    />
                  ) : (
                    <div className="grid aspect-[4/5] w-full place-items-center bg-gradient-to-br from-slate-800 to-slate-900 text-6xl font-extrabold text-white/80">
                      {business.initials}
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-20">
                    <p className="text-lg font-extrabold text-white">{site.name}</p>
                    <p className="text-sm text-slate-300">{business.role} · Vaughan, ON</p>
                  </div>
                </div>
                {linkedin ? (
                  <a
                    href={linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -right-3 top-6 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-xl transition hover:-translate-y-0.5 sm:-right-6"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#0a66c2] text-white">
                      <LinkedinIcon size={14} />
                    </span>
                    View profile
                  </a>
                ) : null}
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="mb-3 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-teal-300">Who you&apos;ll work with</p>
                <h2 className={cn(styles.sectionTitle, styles.sectionTitleLight)}>Hi, I&apos;m {business.firstName}.</h2>
                <div className="mt-6 space-y-4 text-base leading-7 text-slate-300">
                  {business.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {credentials.map((item) => (
                    <li key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {linkedin ? (
                    <a
                      href={linkedin.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0a66c2] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0a66c2]/30 transition hover:-translate-y-0.5 hover:bg-[#004182]"
                    >
                      <LinkedinIcon size={16} />
                      Connect on LinkedIn
                    </a>
                  ) : null}
                  <BookButton dark>Book a free review</BookButton>
                </div>
              </Reveal>

              {reference ? (
                <Reveal delay={200}>
                  <figure className="relative mt-10 rounded-[22px] border border-white/10 bg-white/[.04] p-7">
                    <span aria-hidden="true" className="absolute -top-4 left-6 font-serif text-6xl leading-none text-teal-400/70">&ldquo;</span>
                    <blockquote className="text-[15px] leading-7 text-slate-200">{reference.quote}</blockquote>
                    <figcaption className="mt-5 border-t border-white/10 pt-4">
                      <p className="text-sm font-bold text-white">{reference.name}</p>
                      <p className="text-xs text-slate-400">{reference.role}</p>
                      <p className="mt-2 text-[11px] text-slate-500">{reference.context}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-[#f7f8fc] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className={styles.sectionTitle}>From first call to handover</h2>
          </Reveal>
          <Reveal className="group/reveal relative mt-14">
          <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-0.5 origin-left scale-x-0 bg-blue-300 transition-transform duration-[1400ms] ease-[cubic-bezier(.65,0,.35,1)] [transition-delay:200ms] group-data-[visible=true]/reveal:scale-x-100 lg:block" aria-hidden="true" />
          <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-5">
            {process.map((step, i) => (
              <li
                key={step.title}
                style={{ transitionDelay: `${200 + i * 300}ms` }}
                className="relative translate-y-4 opacity-0 transition duration-700 ease-out group-data-[visible=true]/reveal:translate-y-0 group-data-[visible=true]/reveal:opacity-100"
              >
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl border-4 border-[#f7f8fc] bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">{i + 1}</div>
                <h3 className="mt-5 font-extrabold">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-6 text-slate-500">{step.body}</p>
              </li>
            ))}
          </ol>
          </Reveal>
        </div>
      </section>

      {/* Data handling */}
      <section id="data" className="bg-white px-5 pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 to-teal-50/40 p-8 sm:p-10">
            <Reveal className="grid gap-4 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
              <div>
                <p className={styles.eyebrow}>Your data</p>
                <h2 className={cn(styles.sectionTitle, "text-[clamp(1.6rem,3vw,2.4rem)]")}>Handled carefully, by default.</h2>
              </div>
              <p className={cn(styles.sectionCopy, "lg:ml-auto")}>
                Clinics, accountants, and property managers work with information that matters. This is how I handle it on every project.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {dataPractices.map((practice, i) => (
                <Reveal key={practice.title} delay={i * 90} className="h-full">
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 grid h-9 w-9 place-items-center rounded-xl bg-teal-50 text-teal-600">
                      <Icon name={i === 0 ? "layers" : i === 3 ? "shield" : "check"} className="h-4 w-4" />
                    </div>
                    <h3 className="text-[15px] font-bold text-slate-900">{practice.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{practice.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <Reveal>
            <p className={styles.eyebrow}>Before you ask</p>
            <h2 className={styles.sectionTitle}>
              Good questions,
              <br />
              plain answers.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <footer className="relative overflow-hidden bg-[#070b16] px-5 pb-8 pt-24 text-white lg:px-8">
        <div className={cn(styles.footerGrid, "absolute inset-0 opacity-30")} />
        <div className="absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-[-.04em] sm:text-6xl">
            Show me the report
            <br />
            you&apos;re tired of building.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400">
            Thirty minutes on a screen share is usually enough to tell whether it&apos;s worth automating. No cost and no obligation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <BookButton dark>Book a free process review</BookButton>
            {linkedin ? (
              <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0a66c2] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#004182]">
                <LinkedinIcon size={15} />
                Connect on LinkedIn
              </a>
            ) : null}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Or email{" "}
            <a href={`mailto:${site.email}`} className="text-slate-300 underline underline-offset-4 hover:text-white">
              {site.email}
            </a>
          </p>
        </Reveal>
        <div className="relative mx-auto mt-24 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Reporting automation for local businesses · {site.name}</span>
          <span>Vaughan · Thornhill · Greater Toronto Area</span>
        </div>
      </footer>
    </div>
  );
}
