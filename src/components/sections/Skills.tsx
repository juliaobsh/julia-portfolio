import { environmentGroup, languages, skillGroups } from "@/data/skills";
import { accentStyle } from "@/lib/utils";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="bg-surface py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Skills" className="mb-12">
            Tools and capabilities
          </SectionHeading>

          <ul className="mb-5 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <li
                key={group.category}
                style={accentStyle(group.accent)}
                className="group rounded-2xl border border-line bg-paper p-6 transition duration-200 hover:border-[var(--accent)] hover:shadow-[0_4px_20px_rgb(28_25_23/0.06)]"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="size-2 rounded-full bg-[var(--accent)]"
                  />
                  <h3 className="font-display text-sm font-semibold text-ink">
                    {group.category}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-muted transition-colors group-hover:bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] group-hover:text-[var(--accent)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mb-5 rounded-2xl border border-line bg-paper p-6">
            <div className="mb-1 flex flex-wrap items-center gap-2.5">
              <span aria-hidden="true" className="size-2 rounded-full bg-muted" />
              <h3 className="font-display text-sm font-semibold text-ink">
                {environmentGroup.category}
              </h3>
            </div>
            <p className="mb-4 pl-[1.25rem] font-mono text-[10px] uppercase tracking-widest text-muted">
              {environmentGroup.note}
            </p>
            <ul className="flex flex-wrap gap-2">
              {environmentGroup.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-paper p-6">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
              Languages
            </p>
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {languages.map((language, index) => (
                <li key={language} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-ink">
                    {language}
                  </span>
                  {index < languages.length - 1 ? (
                    <span aria-hidden="true" className="text-line">
                      ·
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
