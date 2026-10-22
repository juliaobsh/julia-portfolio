"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * A booking button that floats in once the visitor scrolls past the hero,
 * so the call is always one tap away. It hides again near the bottom of the
 * page, where the contact section already offers the same button.
 */
export function StickyBook({ href, label }: { href: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const external = href.startsWith("http");

  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 900;
      setVisible(window.scrollY > 800 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-blue-600 py-3 pl-4 pr-5 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(37,99,235,.6)] transition duration-300 hover:bg-blue-700",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/70" />
        <span className="relative h-2 w-2 rounded-full bg-white" />
      </span>
      {label}
    </a>
  );
}
