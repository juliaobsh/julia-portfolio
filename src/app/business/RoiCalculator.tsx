"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type Price = { name: string; amount: number };

const money = (n: number) =>
  n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });

function Field({
  label,
  hint,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  format: (n: number) => string;
}) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-bold text-slate-800">
          {label}
        </label>
        <span className="shrink-0 whitespace-nowrap font-mono text-sm font-semibold text-blue-700">{format(value)}</span>
      </div>
      <p className="mt-0.5 text-xs text-slate-500">{hint}</p>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-blue-600"
      />
    </div>
  );
}

/**
 * A visitor-driven estimate: what a recurring manual task costs per year, and
 * how long each starting price would take to pay for itself. Nothing here is
 * a claim about a past client - every number comes from the visitor's inputs.
 */
export function RoiCalculator({ prices }: { prices: Price[] }) {
  const [hoursNow, setHoursNow] = useState(4);
  const [hoursAfter, setHoursAfter] = useState(0.5);
  const [rate, setRate] = useState(35);

  const saved = Math.max(hoursNow - hoursAfter, 0);
  const hoursYear = Math.round(saved * 52);
  const valueYear = hoursYear * rate;
  const monthly = valueYear / 12;

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_60px_-40px_rgba(15,23,42,.45)]">
      <div className="grid lg:grid-cols-[1fr_1fr]">
        <div className="space-y-7 p-7 sm:p-9">
          <Field
            label="Time spent on it today"
            hint="Hours per week, across everyone involved"
            value={hoursNow}
            onChange={(n) => {
              setHoursNow(n);
              if (hoursAfter > n) setHoursAfter(n);
            }}
            min={1}
            max={20}
            step={0.5}
            format={(n) => `${n} hrs/week`}
          />
          <Field
            label="Time it would take once automated"
            hint="Usually a few minutes to check the result"
            value={hoursAfter}
            onChange={(n) => setHoursAfter(Math.min(n, hoursNow))}
            min={0}
            max={5}
            step={0.25}
            format={(n) => `${n} hrs/week`}
          />
          <Field
            label="Cost of that person's time"
            hint="Hourly wage plus payroll costs"
            value={rate}
            onChange={setRate}
            min={20}
            max={80}
            step={1}
            format={(n) => `$${n}/hr`}
          />
        </div>

        <div className="flex flex-col justify-between gap-6 bg-gradient-to-br from-slate-950 to-[#0b1530] p-7 text-white sm:p-9">
          <div>
            <p className="text-[14px] font-extrabold uppercase tracking-[.16em] text-teal-300">Staff time freed up</p>
            <p className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl" aria-live="polite">
              {money(valueYear)}
              <span className="ml-1 text-base font-semibold text-slate-300">/ year</span>
            </p>
            <p className="mt-2 text-sm text-slate-300">
              worth of staff time - about{" "}<strong className="text-white">{hoursYear} hours</strong>{" "}a year back for more valuable work.
            </p>
          </div>

          <div>
            <p className="text-[14px] font-extrabold uppercase tracking-[.16em] text-slate-300">That time is worth the project cost after about</p>
            <ul className="mt-3 space-y-2">
              {prices.map((price) => {
                const months = monthly > 0 ? price.amount / monthly : Infinity;
                const good = months <= 12;
                return (
                  <li key={price.name} className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-2.5 text-sm">
                    <span className="text-slate-300">
                      {price.name} <span className="text-slate-300">from {money(price.amount)}</span>
                    </span>
                    <span className={cn("shrink-0 whitespace-nowrap font-mono font-semibold", good ? "text-teal-300" : "text-slate-300")}>
                      {Number.isFinite(months) ? (months < 1 ? "< 1 month" : `${months.toFixed(1)} months`) : "-"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="text-[15px] leading-5 text-slate-300">
            An estimate of capacity freed up, based only on the numbers you enter and starting prices. Freeing up staff time
            doesn&apos;t automatically lower payroll - the value depends on how that time gets used. Software subscriptions or
            ongoing support can also affect payback. The Free Consultation is where we work out real figures for your business.
          </p>
        </div>
      </div>
    </div>
  );
}
