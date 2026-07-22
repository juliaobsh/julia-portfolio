import { site, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroDashboard } from "@/components/visuals/HeroDashboard";
import { GithubIcon, PinIcon } from "@/components/ui/icons";

const github = socialLinks.find((link) => link.label === "GitHub");
const linkedin = socialLinks.find((link) => link.label === "LinkedIn");

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-paper pt-16">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-45" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 55% at 50% 5%, transparent 35%, var(--color-paper) 100%)",
        }}
      />

      <Container className="relative grid min-h-[calc(100svh-4rem)] items-center gap-12 py-20 lg:grid-cols-2 xl:gap-20">
        <div className="animate-rise">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            Data analysis × technology × design
          </p>

          <h1 className="mb-6 font-display text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-[1.05] text-ink text-balance">
            Turning complex data into{" "}
            <span className="text-accent">clear, useful</span> experiences.
          </h1>

          <p className="mb-8 max-w-[44ch] text-[1.05rem] leading-relaxed text-muted">
            I&apos;m Yulia, a Computer Science co-op student and Business Data
            Analyst who enjoys building dashboards, improving workflows, and
            translating stakeholder needs into practical solutions.
          </p>

          <div className="mb-9 flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="flex items-center gap-2 text-sm font-medium text-teal">
              <span className="size-2 animate-blip rounded-full bg-teal" />
              {site.availability}
            </p>
            <span aria-hidden="true" className="hidden text-line sm:inline">
              ·
            </span>
            <p className="flex items-center gap-1.5 text-sm text-muted">
              <PinIcon />
              {site.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="#work">View my work</ButtonLink>
            {linkedin ? (
              <ButtonLink href={linkedin.href} variant="secondary">
                Connect on LinkedIn
              </ButtonLink>
            ) : null}
            {github ? (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex size-12 items-center justify-center rounded-xl border border-line bg-surface text-ink transition-colors hover:border-ink"
              >
                <GithubIcon size={19} />
              </a>
            ) : null}
          </div>
        </div>

        <div className="animate-rise [animation-delay:150ms]">
          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}
