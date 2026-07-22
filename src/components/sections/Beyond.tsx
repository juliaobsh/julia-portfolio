import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const statements = [
  "I gravitate toward designing interfaces that explain themselves — where someone can open a dashboard and immediately understand what matters.",
  "Ambiguous problems are more interesting to me than well-defined ones. The most useful work often starts with a vague question and a messy dataset.",
  "I'm consistently learning new tools and approaches — not because it's expected, but because the field moves quickly and I'd rather keep up than catch up.",
  "I find the translation layer between technical work and business needs genuinely interesting — helping people understand what the data is actually saying.",
];

export function Beyond() {
  return (
    <section className="bg-paper py-24">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <SectionHeading eyebrow="More about me" className="mb-8">
              Beyond the dashboard
            </SectionHeading>

            <ul className="space-y-3">
              {statements.map((statement, index) => (
                <li
                  key={statement}
                  className="flex gap-4 rounded-2xl border border-line bg-surface p-5"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 font-mono text-xl text-teal"
                  >
                    {["◈", "◎", "◆", "◉"][index]}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">
                    {statement}
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
