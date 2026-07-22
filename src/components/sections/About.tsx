import { Container, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  {
    symbol: "◈",
    label: "Computer Science",
    description: "Specialized Honours Co-op at York University",
  },
  {
    symbol: "◎",
    label: "Data Visualization",
    description: "Power BI dashboards for senior stakeholders",
  },
  {
    symbol: "◆",
    label: "Business Analysis",
    description: "Requirements, traceability, and documentation",
  },
  {
    symbol: "◉",
    label: "Process Automation",
    description: "Excel VBA and Python workflow automation",
  },
];

const interests = [
  "Understanding stakeholder needs before writing a line of code",
  "Investigating data discrepancies until the root cause is clear",
  "Designing dashboards that are actually useful to the people reading them",
  "Automating repetitive processes so teams can focus on what matters",
  "Making technical information easier to understand for everyone",
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
                Technical enough to build it.{" "}
                <span className="text-accent">Analytical enough</span> to
                explain it.
              </h2>

              <p className="mb-4 leading-relaxed text-muted">
                I&apos;m completing a Specialized Honours Computer Science Co-op
                degree at York University, with hands-on enterprise experience
                as a Business Data Analyst at Hydro One.
              </p>
              <p className="mb-7 leading-relaxed text-muted">
                My work spans reporting, dashboard development, business
                analysis, workflow automation, documentation, and stakeholder
                collaboration. I&apos;m drawn to the intersection of technical
                systems and the people who use them.
              </p>

              <ul className="space-y-2.5">
                {interests.map((interest) => (
                  <li key={interest} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-teal"
                    />
                    <span className="text-sm leading-relaxed text-muted">
                      {interest}
                    </span>
                  </li>
                ))}
              </ul>
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
