"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, sectionIds, site } from "@/data/site";
import { cn } from "@/lib/utils";

/** Tracks which section is currently in view, for the active nav state. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    if (!enabled) return;

    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.25, rootMargin: "-72px 0px 0px 0px" },
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [enabled]);

  return active;
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(isHome);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-line bg-paper/95 shadow-[0_1px_12px_rgb(28_25_23/0.06)] backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Main" className="mx-auto w-full max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-display text-[1.05rem] font-bold tracking-tight text-ink transition-colors hover:text-accent"
          >
            {site.name}
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => {
              const isActive = isHome && activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={hrefFor(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    isActive ? "text-accent" : "text-muted",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={site.resumePath}
              download
              className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:-translate-y-px hover:bg-accent-strong motion-reduce:hover:translate-y-0"
            >
              Download résumé
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-lg transition-colors hover:bg-line md:hidden"
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "h-0.5 w-5 bg-ink transition-transform duration-200",
                  open && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-5 bg-ink transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-5 bg-ink transition-transform duration-200",
                  open && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="border-t border-line bg-paper md:hidden"
      >
        <ul className="flex flex-col px-6 py-4">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={hrefFor(item.id)}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pb-2 pt-3">
            <a
              href={site.resumePath}
              download
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Download résumé
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
