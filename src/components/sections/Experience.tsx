import { roles } from "@/data/experience";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="bg-surface py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Experience" className="mb-12">
            Where I&apos;ve worked
          </SectionHeading>

          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute bottom-4 left-4 top-4 w-px bg-line"
            />

            <ol className="space-y-10">
              {roles.map((role) => (
                <li key={role.org} className="relative pl-14">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1.5 flex size-8 items-center justify-center rounded-full border-2 ${
                      role.current
                        ? "border-accent bg-accent"
                        : "border-line bg-surface"
                    }`}
                  >
                    <span
                      className={`size-2 rounded-full ${
                        role.current ? "bg-white" : "bg-muted"
                      }`}
                    />
                  </span>

                  <div className="rounded-2xl border border-line bg-paper p-6">
                    <div className="mb-1 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <h3 className="font-display text-lg font-bold text-ink">
                        {role.org}
                      </h3>
                      {role.current ? (
                        <p className="inline-flex items-center gap-1.5 self-start rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent sm:self-auto">
                          <span className="size-1.5 animate-blip rounded-full bg-accent" />
                          Current role
                        </p>
                      ) : null}
                    </div>
                    <p className="mb-0.5 text-sm font-medium text-muted">
                      {role.title}
                    </p>
                    <p className="mb-5 font-mono text-xs text-muted">
                      {role.period}
                    </p>

                    <ul className="grid gap-2 sm:grid-cols-2">
                      {role.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1 shrink-0 rounded-full bg-teal"
                          />
                          <span className="text-sm leading-relaxed text-muted">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
