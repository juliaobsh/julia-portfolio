import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import { accentStyle } from "@/lib/utils";
import type { CaseStudySection, DeliveryStatus } from "@/types/project";
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
    description: project.oneLiner,
    path: `/projects/${project.slug}`,
  });
}

const statusStyles: Record<DeliveryStatus, string> = {
  Released: "bg-teal/10 text-teal border-teal/25",
  "In testing": "bg-accent-soft text-accent border-accent/25",
  Paused: "bg-ember/10 text-ember border-ember/25",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-widest text-ink">
      {children}
    </h2>
  );
}

function Section({ section }: { section: CaseStudySection }) {
  switch (section.kind) {
    case "prose":
      return (
        <section>
          <SectionHeading>{section.heading}</SectionHeading>
          <div className="space-y-4">
            {section.body.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      );

    case "list":
      return (
        <section>
          <SectionHeading>{section.heading}</SectionHeading>
          <ul className="space-y-3">
            {section.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                />
                <span className="text-sm leading-relaxed text-muted">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>
      );

    case "steps":
      return (
        <section>
          <SectionHeading>{section.heading}</SectionHeading>
          <ol className="space-y-4">
            {section.items.map((item, index) => (
              <li key={item} className="flex gap-4">
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
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </section>
      );

    case "tiers": {
      const asList = section.variant === "list";
      return (
        <section>
          <SectionHeading>{section.heading}</SectionHeading>
          <div className={asList ? "space-y-6" : "space-y-5"}>
            {section.tiers.map((tier) => (
              <div key={tier.label}>
                <p className="mb-2.5 text-sm font-semibold text-ink">
                  {tier.label}
                </p>
                {asList ? (
                  <ul className="space-y-2.5 border-l-2 border-[var(--accent)]/25 pl-4">
                    {tier.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="flex flex-wrap gap-2">
                    {tier.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-line bg-paper px-3 py-1.5 text-xs font-medium text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      );
    }

    case "note":
      return (
        <section className="rounded-2xl border border-line bg-paper p-6">
          <SectionHeading>{section.heading}</SectionHeading>
          <p className="text-xs leading-relaxed text-muted">{section.body}</p>
        </section>
      );

    case "enhancements":
      return (
        <section>
          <SectionHeading>{section.heading}</SectionHeading>
          {section.intro ? (
            <p className="mb-6 text-sm leading-relaxed text-muted">
              {section.intro}
            </p>
          ) : null}
          <div className="space-y-5">
            {section.items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-paper p-6"
              >
                <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-display text-base font-bold leading-snug text-ink">
                    {item.title}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>
                <dl className="space-y-4">
                  {item.blocks.map((block) => (
                    <div key={block.label}>
                      <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                        {block.label}
                      </dt>
                      <dd className="text-sm leading-relaxed text-muted">
                        {block.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>
      );
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(project.slug);
  const asideSections = project.sections.filter((s) => s.kind === "note");
  const mainSections = project.sections.filter((s) => s.kind !== "note");

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
            {project.oneLiner}
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
        <Container className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16">
          <div className="space-y-12">
            {mainSections.map((section, index) => (
              <Section key={index} section={section} />
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

            {asideSections.map((section, index) => (
              <Section key={index} section={section} />
            ))}
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
