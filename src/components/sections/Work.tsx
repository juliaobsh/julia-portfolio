import { featuredProjects, supportingProjects } from "@/data/projects";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Work() {
  return (
    <section id="work" className="bg-paper py-24">
      <Container>
        <Reveal className="mb-12">
          <Eyebrow className="mb-3">Selected work</Eyebrow>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-ink">
              Selected work and impact
            </h2>
            <p className="max-w-sm rounded-xl border border-line bg-surface px-3 py-2 text-xs leading-relaxed text-muted">
              All examples are anonymized. No proprietary data, internal system
              names, or confidential figures are included. Visuals are recreated
              using synthetic data.
            </p>
          </div>
        </Reveal>

        <div className="mb-6 space-y-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90} threshold={0.05}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {supportingProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 90}
              threshold={0.08}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
