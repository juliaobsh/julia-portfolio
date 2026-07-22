import { education, recognition } from "@/data/experience";
import { accentStyle } from "@/lib/utils";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section className="bg-surface py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Education" className="mb-10">
            Academic background
          </SectionHeading>

          <div className="grid items-start gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-paper p-7">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold leading-tight text-ink">
                    {education.school}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {education.university}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent font-display text-base font-bold text-white"
                >
                  YU
                </span>
              </div>
              <p className="mb-0.5 text-sm font-medium text-ink">
                {education.degree}
              </p>
              <p className="mb-1 text-sm text-muted">{education.program}</p>
              <p className="font-mono text-xs text-muted">{education.period}</p>
            </div>

            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted">
                Recognition
              </p>
              <ul className="space-y-3">
                {recognition.map((item) => (
                  <li
                    key={item.label}
                    style={accentStyle(item.accent)}
                    className="flex items-center gap-4 rounded-xl border border-line bg-paper px-5 py-4 transition-colors hover:border-[var(--accent)]"
                  >
                    <span
                      aria-hidden="true"
                      className="size-2.5 rounded-full bg-[var(--accent)]"
                    />
                    <span className="text-sm font-medium text-ink">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
