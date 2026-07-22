import Link from "next/link";
import type { Project } from "@/types/project";
import { accentStyle } from "@/lib/utils";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";
import { ArrowIcon } from "./icons";

type Props = { project: Project; featured?: boolean };

export function ProjectCard({ project, featured = false }: Props) {
  return (
    <article
      style={accentStyle(project.accent)}
      className={`group relative flex h-full overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_2px_8px_rgb(28_25_23/0.04)] transition duration-300 focus-within:border-[var(--accent)] hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_16px_40px_rgb(28_25_23/0.12)] motion-reduce:hover:translate-y-0 ${
        featured ? "flex-col lg:flex-row" : "flex-col"
      }`}
    >
      <div
        className={featured ? "shrink-0 p-5 lg:w-80 xl:w-96" : "h-52 p-4"}
        style={{
          background: "color-mix(in srgb, var(--accent) 5%, transparent)",
        }}
      >
        <ProjectVisual visual={project.visual} />
      </div>

      <div className={`flex flex-1 flex-col ${featured ? "p-7" : "p-6"}`}>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">
          {project.category}
        </p>

        <h3
          className={`mb-2.5 font-display font-bold text-ink transition-colors group-hover:text-[var(--accent)] ${
            featured ? "text-xl" : "text-lg"
          }`}
        >
          {/* Stretched link keeps the whole card clickable without a clickable div. */}
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {project.title}
          </Link>
        </h3>

        <p
          className={`mb-4 text-sm leading-relaxed text-muted ${
            featured ? "" : "line-clamp-3"
          }`}
        >
          {project.summary}
        </p>

        {project.evidence ? (
          <p className="mb-4 inline-flex w-fit items-center rounded-lg border border-line bg-paper px-2.5 py-1.5 font-mono text-[10px] text-ink">
            {project.evidence}
          </p>
        ) : null}

        <ul className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full px-2.5 py-1 text-xs font-medium text-[var(--accent)]"
              style={{
                background: "color-mix(in srgb, var(--accent) 8%, transparent)",
              }}
            >
              {tag}
            </li>
          ))}
        </ul>

        <p className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)]">
          Read case study
          <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" />
        </p>
      </div>
    </article>
  );
}
