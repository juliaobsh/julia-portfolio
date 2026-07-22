import type { Metadata } from "next";
import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-paper pt-16">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-45" />
      <Container className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center py-24 text-center">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          Error 404
        </p>
        <h1 className="mb-5 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-ink text-balance">
          No data at this address.
        </h1>
        <p className="mb-9 max-w-md leading-relaxed text-muted">
          The page you were looking for doesn&apos;t exist or has moved. The
          case studies and everything else live on the home page.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/#work" variant="secondary">
            View selected work
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
