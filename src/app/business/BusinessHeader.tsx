"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "@/components/ui/icons";

type Section = { id: string; label: string };

/**
 * Sticky header for /business: transparent over the hero, solid once the
 * page scrolls. Highlights the section in view, shows reading progress, and
 * collapses into a menu on smaller screens.
 */
export function BusinessHeader({
  name,
  initials,
  sections,
  linkedinHref,
  bookingHref,
  bookingLabel,
  className,
}: {
  name: string;
  initials: string;
  sections: Section[];
  linkedinHref?: string;
  bookingHref: string;
  bookingLabel: string;
  className?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const external = bookingHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 16);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The section crossing the middle of the screen counts as "current".
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const onTop = () => {
      if (window.scrollY < 300) setActive(null);
    };
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, [sections]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        open
          ? "border-b border-slate-200/80 bg-white shadow-[0_8px_30px_-20px_rgba(15,23,42,.35)]"
          : solid
            ? "border-b border-slate-200/80 bg-white/85 shadow-[0_8px_30px_-20px_rgba(15,23,42,.35)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        className,
      )}
    >
      <div className={cn("mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-[padding] duration-300 lg:px-8", solid ? "py-3" : "py-5")}>
        <Link href="/business" className="flex shrink-0 items-center gap-2 text-sm font-extrabold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-950 text-xs text-white">{initials}</span>
          <span className="hidden sm:inline">{name}</span>
        </Link>

        <nav aria-label="Page sections" className="hidden items-center gap-1 text-xs font-medium text-slate-600 lg:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={active === section.id ? "true" : undefined}
              className={cn(
                "rounded-full px-3 py-1.5 transition-colors hover:text-blue-600",
                active === section.id && "bg-blue-50 font-semibold text-blue-700",
              )}
            >
              {section.label}
            </a>
          ))}
          <Link href="/" className="rounded-full px-3 py-1.5 transition-colors hover:text-blue-600">
            Portfolio
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {linkedinHref ? (
            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-9 items-center gap-2 rounded-full bg-[#0a66c2] px-3 text-xs font-semibold text-white shadow-sm shadow-[#0a66c2]/30 transition hover:-translate-y-0.5 hover:bg-[#004182] xl:px-4"
            >
              <LinkedinIcon size={14} />
              <span className="hidden xl:inline">LinkedIn</span>
            </a>
          ) : null}
          <a
            href={bookingHref}
            {...external}
            className="rounded-full bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            {bookingLabel}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="business-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
          >
            <span className="flex w-4 flex-col gap-[3px]">
              <span className={cn("h-0.5 w-4 bg-current transition-transform duration-200", open && "translate-y-[5px] rotate-45")} />
              <span className={cn("h-0.5 w-4 bg-current transition-opacity duration-200", open && "opacity-0")} />
              <span className={cn("h-0.5 w-4 bg-current transition-transform duration-200", open && "-translate-y-[5px] -rotate-45")} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="business-menu"
        inert={!open}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-5 pb-5 pt-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl border px-4 py-3 text-sm font-semibold transition-colors",
                    active === section.id ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-700",
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/" className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Reading progress */}
      <div aria-hidden="true" className={cn("absolute inset-x-0 bottom-0 h-0.5 transition-opacity duration-300", scrolled ? "opacity-100" : "opacity-0")}>
        <div className="h-full origin-left bg-gradient-to-r from-blue-600 to-teal-400" style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  );
}

/** Round "back to top" button, shown once the visitor is well down the page. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-white shadow-[0_12px_30px_-8px_rgba(15,23,42,.55)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="m6 11 6-6 6 6" />
      </svg>
    </button>
  );
}
