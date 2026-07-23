import { Container, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  {
    symbol: "◈",
    label: "Enterprise Power BI",
    description: "Report enhancements built, tested, and deployed to production",
  },
  {
    symbol: "◎",
    label: "Validation",
    description: "Checking outputs against source data before anything ships",
  },
  {
    symbol: "◆",
    label: "Requirements",
    description: "Discovery and stakeholder work across the organization",
  },
  {
    symbol: "◉",
    label: "Computer Science",
    description: "Specialized Honours Co-op at York University",
  },
];

export function About() {
  return (
    <section id="about" className="bg-surface py-24">
      <Container>
        <Reveal>
          <div className="grid items-start gap-14 lg:grid-cols-2 xl:gap-20">
            <div>
              <Eyebrow className="mb-4">About</Eyebrow>
              <h2 className="mb-6 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-ink text-balance">
                I like inheriting systems{" "}
                <span className="text-accent">I didn&apos;t build.</span>
              </h2>

              <p className="mb-4 leading-relaxed text-muted">
                Most of my Power BI work hasn&apos;t started with a blank
                canvas. It started with a report that already existed, already
                had users, and already had decisions baked into it — aggregation
                levels, filter defaults, grading rules, metric definitions that
                someone chose for a reason. Before I change anything, I want to
                know what those reasons were.
              </p>
              <p className="mb-4 leading-relaxed text-muted">
                That&apos;s usually where the interesting part is. &ldquo;Add a
                distinct count of agents&rdquo; sounds like a small request
                until you ask what it should do at the interval, day, week, and
                month level, or what happens to it when someone filters to a
                single queue. Distinct counts don&apos;t add up the way totals
                do, and a column that quietly means something different from
                what the person asked for is worse than no column at all.
              </p>
              <p className="leading-relaxed text-muted">
                My Computer Science background shows up less in writing code
                than in how I read systems — following a value from a source
                table through a semantic model into a visual, and staying
                sceptical of a number until I&apos;ve seen where it came from.
                The other half of the job is the opposite skill: most requests
                arrive as one sentence, and turning that sentence into defined
                behaviour — in a report, or in a requirements list — is where
                most of the work actually is.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <li
                  key={highlight.label}
                  className="rounded-2xl border border-line bg-paper p-6 transition duration-300 hover:border-accent hover:shadow-md"
                >
                  <p
                    aria-hidden="true"
                    className="mb-3 font-mono text-2xl text-accent"
                  >
                    {highlight.symbol}
                  </p>
                  <h3 className="mb-1.5 font-display text-sm font-semibold text-ink">
                    {highlight.label}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted">
                    {highlight.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
