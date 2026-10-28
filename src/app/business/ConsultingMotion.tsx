"use client";

import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

type TransitionDocument = Document & {
  startViewTransition?: (update: () => Promise<void>) => { finished: Promise<void> };
};

// Emphasize a few visual explanations; reading content is visible immediately.
const targets = ".hero-visual, .process-art, .service-artwork, .healthcare-figure";

export function ConsultingMotion({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const container = useRef<HTMLDivElement>(null);
  const navigation = useRef<{ resolve: () => void; timeout: ReturnType<typeof setTimeout> } | null>(null);

  useLayoutEffect(() => {
    if (navigation.current) {
      clearTimeout(navigation.current.timeout);
      navigation.current.resolve();
      navigation.current = null;
    }
  }, [pathname]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || reduced.matches) return;
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>(".consulting a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href);
      const samePage = url.pathname.replace(/\/$/, "") === window.location.pathname.replace(/\/$/, "");
      const doc = document as TransitionDocument;
      if (url.origin !== location.origin || samePage || !url.pathname.startsWith("/business") || !doc.startViewTransition || navigation.current) return;
      event.preventDefault();
      document.documentElement.classList.add("native-page-transition");
      const transition = doc.startViewTransition(() => new Promise<void>(resolve => {
        const timeout = setTimeout(() => { navigation.current = null; resolve(); }, 1500);
        navigation.current = { resolve, timeout };
        router.push(url.pathname + url.search + url.hash);
      }));
      transition.finished.catch(() => { /* A superseded transition does not cancel navigation. */ }).finally(() => document.documentElement.classList.remove("native-page-transition"));
    };
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      if (navigation.current) { clearTimeout(navigation.current.timeout); navigation.current.resolve(); navigation.current = null; }
    };
  }, [router]);

  useLayoutEffect(() => {
    const root = container.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || reduced.matches || !("IntersectionObserver" in window)) return;
    const animations: Animation[] = [];
    const elements = Array.from(root.querySelectorAll<HTMLElement>(targets)).filter(element => !element.parentElement?.closest(targets));
    const reveal = (element: HTMLElement) => {
      element.classList.remove("motion-pending");
      element.classList.add("motion-seen");
      const delay = Number(element.dataset.motionDelay || 0);
      const visual = element.matches(".hero-visual");
      const step = element.matches(".process-art");
      animations.push(element.animate([
        { opacity: 0, transform: visual ? "translate3d(0, 40px, 0) rotate(4deg) scale(.96)" : step ? "translate3d(16px, 0, 0)" : "translate3d(0, 22px, 0)" },
        { opacity: 1, transform: "translate3d(0, 0, 0)" },
      ], { duration: visual ? 1200 : 700, delay, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" }));
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { reveal(entry.target as HTMLElement); observer.unobserve(entry.target); }
      });
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    elements.forEach((element, index) => {
      element.dataset.motionDelay = String((index % 3) * 70);
      if (element.getBoundingClientRect().top < window.innerHeight * .95) {
        // Keep the first screen immediate during a native page crossfade.
        if (!document.documentElement.classList.contains("native-page-transition")) reveal(element);
        else element.classList.add("motion-seen");
      } else { element.classList.add("motion-pending"); observer.observe(element); }
    });
    const onFocus = (event: FocusEvent) => {
      const pending = (event.target as Element)?.closest<HTMLElement>(".motion-pending");
      if (pending) { observer.unobserve(pending); reveal(pending); }
    };
    root.addEventListener("focusin", onFocus);
    const onPreferenceChange = () => {
      if (reduced.matches) { elements.forEach(e => e.classList.remove("motion-pending")); animations.forEach(a => a.cancel()); observer.disconnect(); }
    };
    reduced.addEventListener("change", onPreferenceChange);
    return () => {
      root.removeEventListener("focusin", onFocus);
      observer.disconnect(); reduced.removeEventListener("change", onPreferenceChange);
      animations.forEach(animation => animation.cancel());
      elements.forEach(element => element.classList.remove("motion-pending", "motion-seen"));
    };
  }, [pathname]);

  return <div ref={container}><div className="consult-page-transition">{children}</div></div>;
}
