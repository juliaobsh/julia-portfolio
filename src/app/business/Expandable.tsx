"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Collapsed-by-default detail panel. The content stays in the page (for
 * search engines) but is inert and visually closed until opened; the height
 * animates by transitioning grid rows between 0fr and 1fr.
 */
export function Expandable({
  openLabel,
  closeLabel,
  children,
}: {
  openLabel: string;
  closeLabel: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <div className="flex justify-center">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
        >
          {open ? closeLabel : openLabel}
          <span
            aria-hidden="true"
            className={cn(
              "grid h-6 w-6 place-items-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
              open && "rotate-180",
            )}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </button>
      </div>
      <div
        id={panelId}
        inert={!open}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(.22,1,.36,1)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
