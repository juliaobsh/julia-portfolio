import { principles } from "@/data/approach";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Approach() {
  return (
    <section id="approach" className="bg-paper py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="How I work" className="mb-10">
            Three things I hold to
          </SectionHeading>

          <ol className="grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <p
                  aria-hidden="true"
                  className="mb-4 font-mono text-[10px] tracking-widest text-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2.5 font-display text-base font-semibold leading-snug text-ink">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {principle.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
