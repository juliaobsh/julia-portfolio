import { site, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/Section";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink py-8">
      {/* Signature detail: a data line that keeps sweeping across the base of the page. */}
      <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
        <div className="h-full w-1/3 animate-drift bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-ink-soft">
          Designed and built by {site.name}.
        </p>
        <ul className="flex items-center gap-5 text-xs text-ink-soft">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
