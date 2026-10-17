"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "./icons";

/**
 * "Back to where you were" for case studies.
 *
 * A CaseStudyLink remembers the page and scroll position it was clicked from.
 * The case study shows a ReturnButton while that memory exists, and
 * ScrollRestorer (mounted once in the root layout) jumps back to the saved
 * position when the visitor returns. sessionStorage keeps it per-tab, and every
 * access is guarded because storage can be unavailable (private mode, etc.).
 */

const ORIGIN_KEY = "case-study-origin";
const RESTORE_KEY = "scroll-restore";

type Spot = { path: string; y: number; label: string };

function read(key: string): Spot | null {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as Spot) : null;
  } catch {
    return null;
  }
}

function write(key: string, spot: Spot | null) {
  try {
    if (spot) sessionStorage.setItem(key, JSON.stringify(spot));
    else sessionStorage.removeItem(key);
  } catch {
    // Storage unavailable - the fallback link still works.
  }
}

/** A link to a case study that remembers where it was clicked from. */
export function CaseStudyLink({
  href,
  label,
  className,
  children,
}: {
  href: string;
  /** Where "back" leads, e.g. "Back to services". */
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        write(ORIGIN_KEY, {
          path: window.location.pathname,
          y: window.scrollY,
          label,
        })
      }
    >
      {children}
    </Link>
  );
}

/**
 * Shown on case studies. With a remembered origin it returns there at the
 * same scroll position, and a floating copy appears once the reader scrolls
 * down. Without one it is a plain link to the fallback.
 */
export function ReturnButton({
  fallbackHref,
  fallbackLabel,
}: {
  fallbackHref: string;
  fallbackLabel: string;
}) {
  const router = useRouter();
  const [origin, setOrigin] = useState<Spot | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Read after mount: sessionStorage doesn't exist during server rendering.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrigin(read(ORIGIN_KEY));
    const onScroll = () => setScrolled(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goBack = (event: React.MouseEvent) => {
    if (!origin) return;
    event.preventDefault();
    write(RESTORE_KEY, origin);
    write(ORIGIN_KEY, null);
    router.push(origin.path, { scroll: false });
  };

  const href = origin?.path ?? fallbackHref;
  const label = origin?.label ?? fallbackLabel;

  return (
    <>
      <Link
        href={href}
        onClick={goBack}
        className={cn(
          "mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors",
          origin
            ? "rounded-full bg-ink px-4 py-2 text-white hover:bg-accent"
            : "text-muted hover:text-accent",
        )}
      >
        <ArrowIcon className="rotate-180" />
        {label}
      </Link>

      {origin ? (
        <Link
          href={href}
          onClick={goBack}
          aria-hidden={!scrolled}
          tabIndex={scrolled ? 0 : -1}
          className={cn(
            "fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgb(28_25_23/0.3)] transition duration-300 hover:bg-accent",
            scrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
          )}
        >
          <ArrowIcon className="rotate-180" />
          {label}
        </Link>
      ) : null}
    </>
  );
}

/** Mounted once in the root layout: jumps to a saved position after "back". */
export function ScrollRestorer() {
  const pathname = usePathname();

  useEffect(() => {
    const spot = read(RESTORE_KEY);
    if (!spot || spot.path !== pathname) return;
    write(RESTORE_KEY, null);
    // Wait a frame so the page has laid out, then jump without smooth scrolling.
    requestAnimationFrame(() => {
      window.scrollTo({ top: spot.y, behavior: "instant" });
    });
  }, [pathname]);

  return null;
}
