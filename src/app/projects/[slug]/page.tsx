import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import { accentStyle } from "@/lib/utils";
import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowIcon, GithubIcon } from "@/components/ui/icons";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return buildMetadata({
      title: "Case study not found",
      description: "This case study does not exist.",
      path: `/projects/${slug}`,
    });
  }

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(project.slug);

  const narrative = [
    { heading: "Overview", body: project.overview },
    { heading: "Problem", body: project.problem },
    { heading: "My role", body: project.role },
  ];

  const results = [
    { heading: "Outcome", body: project.outcome },
    { heading: "What I learned", body: project.learned },
  ];

  return (
    <article style={accentStyle(project.accent)}>
      <header className="relative overflow-hidden border-b border-line bg-paper pt-16">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

        <Container className="relative py-16">
          <Link
            href="/#work"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowIcon className="rotate-180" />
            All work
          </Link>

          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {project.category}
          </p>
          <h1 className="mb-6 max-w-3xl font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-ink text-balance">
            {project.title}
          </h1>
          <p className="mb-7 max-w-2xl leading-relaxed text-muted">
            {project.summary}
          </p>

          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-[var(--accent)]"
                style={{
                  background:
                    "color-mix(in srgb, var(--accent) 8%, transparent)",
                }}
              >
                {tag}
              </li>
            ))}
          </ul>

          {project.liveUrl || project.githubUrl ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <ButtonLink href={project.liveUrl}>View live project</ButtonLink>
              ) : null}
              {project.githubUrl ? (
                <ButtonLink href={project.githubUrl} variant="secondary">
                  <GithubIcon size={16} />
                  Source code
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </Container>
      </header>

      <div className="bg-surface py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-16">
          <div className="space-y-10">
            {narrative.map((block) => (
              <section key={block.heading}>
                <h2 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-widest text-ink">
                  {block.heading}
                </h2>
                <p className="leading-relaxed text-muted">{block.body}</p>
              </section>
            ))}

            <section>
              <h2 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-widest text-ink">
                Process
              </h2>
              <ol className="space-y-4">
                {project.process.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="flex size-7 shrink-0 items-center justify-center rounded-full font-mono text-xs text-[var(--accent)]"
                      style={{
                        background:
                          "color-mix(in srgb, var(--accent) 10%, transparent)",
                      }}
                    >
                      {index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-muted">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {results.map((block) => (
              <section key={block.heading}>
                <h2 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-widest text-ink">
                  {block.heading}
                </h2>
                <p className="leading-relaxed text-muted">{block.body}</p>
              </section>
            ))}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div
              className="rounded-3xl border border-line p-5"
              style={{
                background:
                  "color-mix(in srgb, var(--accent) 5%, var(--color-surface))",
              }}
            >
              <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted">
                Illustrative visual
              </p>
              <div className="min-h-52">
                <ProjectVisual visual={project.visual} />
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-paper p-6">
              <h2 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-widest text-ink">
                Tools used
              </h2>
              <ul className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            <p className="rounded-3xl border border-line bg-paper p-6 text-xs leading-relaxed text-muted">
              This case study describes enterprise work and is anonymized. Data,
              figures, and visuals shown here are illustrative and contain no
              proprietary or confidential information.
            </p>
          </aside>
        </Container>
      </div>

      <nav
        aria-label="More case studies"
        className="border-t border-line bg-paper py-12"
      >
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between">
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group flex-1 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent"
            >
              <span className="mb-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                <ArrowIcon size={12} className="rotate-180" />
                Previous
              </span>
              <span className="font-display text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span className="hidden flex-1 sm:block" />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex-1 rounded-2xl border border-line bg-surface p-5 text-right transition-colors hover:border-accent"
            >
              <span className="mb-1 flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                Next
                <ArrowIcon size={12} />
              </span>
              <span className="font-display text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          ) : (
            <span className="hidden flex-1 sm:block" />
          )}
        </Container>
      </nav>

      <section className="bg-surface py-16">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-display text-xl font-bold text-ink">
            Interested in working together?
          </h2>
          <ButtonLink href="/#contact">Get in touch</ButtonLink>
        </Container>
      </section>
    </article>
  );
}
