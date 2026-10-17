"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Faq = { question: string; answer: string };

/**
 * One-open-at-a-time accordion. The panel animates its height by
 * transitioning grid rows between 0fr and 1fr, which works in every
 * modern browser without measuring the content in JavaScript.
 */
export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((faq, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  "flex w-full items-center justify-between gap-5 py-5 text-left text-[15px] font-bold transition-colors duration-300 hover:text-blue-600",
                  isOpen ? "text-blue-600" : "text-slate-800",
                )}
              >
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
                    isOpen
                      ? "rotate-45 border-blue-600 bg-blue-600 text-white"
                      : "border-slate-200 text-blue-600",
                  )}
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              inert={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "max-w-2xl pb-5 text-[15px] leading-7 text-slate-500 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
                    isOpen ? "translate-y-0" : "-translate-y-2",
                  )}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
