import { site, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

const github = socialLinks.find((link) => link.label === "GitHub");
const linkedin = socialLinks.find((link) => link.label === "LinkedIn");

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-inverse" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgb(27 72 204 / 0.15) 0%, transparent 70%)",
        }}
      />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              Get in touch
            </p>
            <h2 className="mb-6 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white text-balance">
              Let&apos;s talk about reporting that needs to be right.
            </h2>
            <p className="mb-10 leading-relaxed text-[#a8a29e]">
              I&apos;m looking for roles in business intelligence, data
              analysis, and technical business analysis — particularly on
              reporting that people depend on operationally.
            </p>

            <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={`mailto:${site.email}`}
                className="w-full sm:w-auto"
              >
                <MailIcon />
                {site.email}
              </ButtonLink>
              {linkedin ? (
                <ButtonLink
                  href={linkedin.href}
                  variant="onDark"
                  className="w-full sm:w-auto"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </ButtonLink>
              ) : null}
            </div>

            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-ink-soft">
              {github ? (
                <li>
                  <a
                    href={github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-colors hover:text-[#a8a29e]"
                  >
                    <GithubIcon size={15} />
                    {github.handle}
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href={site.resumePath}
                  download
                  className="flex items-center gap-2 transition-colors hover:text-[#a8a29e]"
                >
                  <DownloadIcon />
                  Download résumé
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
