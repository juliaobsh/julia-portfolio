import { HealthcareVisuals } from "./HealthcareVisuals";
import { ServiceIcon } from "./ServiceArtwork";
import Image from "next/image";
import { DeliveryCare } from "./DeliveryCare";
import Link from "next/link";
import { business, reference } from "@/data/business";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({title:"Business Process Improvement & Automation",description:"Practical process improvement, reporting and workflow automation for small businesses in Vaughan, Thornhill and the GTA.",path:"/business"});
const bookingUrl = business.bookingUrl
const Arrow = () => <span aria-hidden="true">↗</span>

const problems = [
  ['The same report, every week', 'Someone rebuilds the same Excel report every week or month.'],
  ['Admin keeps piling up', 'Client files and invoices are hard to find, and recurring tasks depend on memory.'],
  ['Work keeps getting stuck', 'Jobs, approvals, or follow-ups sit waiting - and nobody has a clear picture of why.'],
  ['Systems don’t agree', 'Numbers are copied between programs, reports conflict, or billing gaps go unnoticed.'],
]

export default function BusinessHome() {
  return <div className="reference-home focused-home">


    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Process improvement for growing businesses</p>
        <h1>Less manual work.<br/>Clearer numbers.<br/><em>A business that runs more smoothly.</em></h1>
        <p className="hero-lede">I help small businesses fix inefficient workflows, automate repetitive tasks, and understand their numbers using the systems they already have.</p>
        <div className="hero-actions">
          <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book a Free Consultation <Arrow /></a>
          <span>No prep. No pressure. Just a useful conversation.</span>
        </div>
        <div className="trust-row"><Link href="/business/services">Explore services & pricing ↗</Link><span>Testing & handover included in scope</span><span>Vaughan, Thornhill & GTA</span></div>
      </div>
      <figure className="hero-visual business-hero-visual">
        <Image src="/editorial/hero-workspace.webp" alt="A notebook, pen, coffee and laptop on a light desk" width={1200} height={1080} sizes="(max-width: 600px) 90vw, (max-width: 900px) 530px, 510px" preload />
        <div className="hero-workflow" aria-label="Understand your process, connect your information, and make practical improvements">
          <div><ServiceIcon kind="process-improvement"/><span>Understand</span></div><span aria-hidden="true">→</span>
          <div><ServiceIcon kind="data-analytics"/><span>Connect</span></div><span aria-hidden="true">→</span>
          <div><ServiceIcon kind="automation"/><span>Improve</span></div>
        </div>
        <figcaption>Photo by <a href="https://unsplash.com/photos/coffee-notebook-pencil-and-laptop-on-a-white-desk-RJyqB0RWZ7Q" target="_blank" rel="noopener noreferrer">Aliona Zahrai / Unsplash ↗</a></figcaption>
      </figure>
    </section>

    <section className="proof-strip">
      <div><strong>Validated reporting</strong><span>record counts and financial totals reconciled against source exports</span></div>
      <div><strong>3,000+</strong><span>clinic records brought into one reporting process</span></div>
      <div><strong>6 stages</strong><span>connected in one repeatable clinic reporting workflow</span></div>
    </section>

    <section className="section" id="services">
      <div className="section-heading">
        <p className="eyebrow"><span /> Sound familiar?</p>
        <h2>Small inefficiencies become expensive habits.</h2>
        <p>For clinics, contractors, professional services, and growing service businesses. Start with the problem that sounds familiar.</p>
      </div>
      <div className="problem-grid">{problems.map(([title,text], i) => <article key={title}>
        <div className="icon"><ServiceIcon kind={["reporting","automation","process-improvement","data-analytics"][i]}/></div><h3>{title}</h3><p>{text}</p>
        <Link href={ ["/business/services/reporting", "/business/services/automation", "/business/services/process-improvement", "/business/services/data-analytics"][i] }>Explore how I help <Arrow /></Link>
      </article>)}</div>
    </section>


    <section className="case-study" id="work">
      <div className="case-kicker">Healthcare analytics engagement · In progress</div>
      <div className="case-grid compact-case">
        <div><p className="eyebrow light"><span /> Canadian healthcare clinic</p>
          <h2>Six workflow stages. One repeatable reporting process.</h2>
          <p className="case-lede">The organization already had digital workflows, but no unified analytics layer. I built a cloud-based reporting system that brings six workflow stages together and lets owners explore their numbers in detail.</p>
          <Link className="text-link" href="/business/work">See the project, workflow & validation details <Arrow/></Link>
        </div>
        <HealthcareVisuals preview/>
      </div>
      <details className="home-details case-details"><summary>How the process was checked</summary>
        <div className="before-after">
          <div><span>Before</span><p>Digital operational tools, without an established end-to-end analytics layer</p></div><div><span>After</span><p>A new reporting pipeline connecting six workflow stages to BigQuery and Power BI</p></div>
          <div><span>Before</span><p>Operational and funding information held across different tools</p></div><div><span>After</span><p>A centralized management view with filtering and drill-through to the details</p></div>
        </div>
      <div className="verified-row">
        <div><b>Validated against source exports</b><span>Record counts, individual records, and financial totals reconciled during development.</span></div>
        <div><b>Checked before every update</b><span>A pass/fail check prevents bad data from reaching reports.</span></div>
        <div><b>Privacy built in</b><span>No patient names, contact details, birth dates, or clinical notes appear.</span></div>
      </div>
      </details>
      <p className="case-note">Built from the ground up. Cloud Run processing takes about 2 minutes; Power BI refresh takes about 10–15 minutes, based on current reported runs. These are separate approximate timings. The engagement is ongoing, and longer-term business outcomes have not been quantified. The dashboard uses fictional sample data.</p>
    </section>

    <section className="reference">
      <div className="quote-mark">“</div>
      <blockquote>{reference?.quote}</blockquote>
      <div className="reference-byline"><b>Jessica Matthews</b><span>Senior Manager, Hydro One · Former direct manager · LinkedIn recommendation</span></div>
    </section>

    <section className="about section" id="about">
      <div className="about-label">Why I do this work</div>
      <div className="about-grid">
        <figure className="home-portrait">
          <Image src={business.headshot} width={640} height={678} sizes="(max-width: 700px) 90vw, 430px" alt="Yulia Obshansky, independent business process and analytics consultant"/>
          <figcaption><b>Yulia Obshansky</b><span>Your consultant, from the first conversation to handover.</span></figcaption>
        </figure>
        <div className="about-copy">
          <p className="eyebrow">Meet your consultant</p>
          <h2>One person, from the first conversation to handover.</h2>
          <p>I’m Yulia. I bring enterprise reporting and workflow automation experience at Hydro One, plus hands-on healthcare analytics work to practical problems in smaller businesses.</p>
          <p>I listen, investigate, build the agreed solution, and explain how to use it. You work directly with me throughout.</p>
          <Link className="about-detail-link" href="/business/about">More about my background ↗</Link>
          <details className="home-details"><summary>More about my approach</summary>
          <p>I’ve always been drawn to the point where business questions and data meet. During my work at Hydro One and on a healthcare reporting project, I saw how much valuable information can sit unnoticed inside everyday operations.</p>
          <p>Many businesses don’t ignore their data intentionally. They simply haven’t had someone help them see what it can reveal - financial gaps, process bottlenecks, repeated work, and opportunities to make better decisions.</p>
          <p>My job is to listen carefully, investigate thoroughly, and explain what I find in language that makes sense. I’ll be honest about the benefits, the trade-offs, and the simplest useful next step.</p>
          </details>
        </div>
      </div>
      <details className="home-details values-details"><summary>The principles behind my work</summary>
      <div className="values">
        <div><b>Listen first</b><span>Your experience of the problem matters as much as the numbers.</span></div>
        <div><b>Explain clearly</b><span>No jargon or black boxes - you should understand what I recommend and why.</span></div>
        <div><b>Be honest</b><span>If a simpler solution will do the job, that’s the one I’ll suggest.</span></div>
      </div>      </details>
    </section>

    <section className="section" id="process">
      <div className="section-heading split">
        <div><p className="eyebrow"><span /> What to expect</p><h2>How a project works.</h2></div>
        <p>You don’t need the right terminology or a technical solution. Tell me what feels frustrating, and we’ll work from there.</p>
      </div>

      <div className="steps">
        <article><span>01</span><h3>Free Consultation</h3><p>Show me one frustrating report, task, or workflow. We’ll discuss likely causes and whether a practical fix is worth pursuing.</p></article>
        <article><span>02</span><h3>Written plan & fixed price</h3><p>You’ll know what I’d build, what stays the same, the boundaries, ongoing costs, and one clear price before work starts.</p></article>
        <article><span>03</span><h3>Build, verify & hand over</h3><p>I check the result against your existing figures or workflow, then give you a plain-language walkthrough and instructions.</p></article>
      </div>
      <DeliveryCare/>
      <p className="process-detail-link"><Link href="/business/process">See the full process ↗</Link></p><details className="home-details"><summary>What happens in the Free Consultation?</summary><div className="call-outcome">
        <div><span>What to bring</span><b>One process that feels slow, unclear, or harder than it should be.</b></div>
        <div><span>What you’ll leave with</span><b>An honest view of the likely problem and the simplest useful next step - even if it isn’t a project with me.</b></div>
      </div></details>
    </section>

    <section className="cta">
      <p className="eyebrow light"><span /> A clearer way forward</p>
      <h2>What’s one process you wish worked better?</h2>
      <p>Bring one frustrating report, repetitive task, or workflow. We’ll discuss what is happening and whether there is a practical next step.</p>
      <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Book a Free Consultation <Arrow /></a>
      <small>Free Consultation · 30 minutes · No obligation · No technical prep</small>
    </section>


  </div>
}
