import type { ProjectVisual as VisualKey } from "@/types/project";

/**
 * Illustrative visuals for each case study. Real screenshots of enterprise work
 * cannot be shown, so each card gets a diagram conveying the shape of the work
 * without exposing anything proprietary. Values are synthetic except where a
 * figure is explicitly non-sensitive (survey inventory counts).
 */

/** A report table gaining columns — the queue enhancement work. */
function ReportingVisual() {
  const existing = ["Queue", "Offered", "Answered"];
  const added = ["Forecast", "Variance"];

  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <div className="overflow-hidden rounded-xl border border-line bg-surface">
        <div className="flex">
          {existing.map((column) => (
            <div key={column} className="flex-1 border-r border-line last:border-r-0">
              <p className="border-b border-line px-2 py-1.5 font-mono text-[9px] uppercase tracking-wider text-muted">
                {column}
              </p>
              {[0, 1, 2].map((row) => (
                <div key={row} className="px-2 py-1.5">
                  <span className="block h-1.5 w-full rounded-full bg-line" />
                </div>
              ))}
            </div>
          ))}
          {added.map((column) => (
            <div
              key={column}
              className="flex-1 border-r border-accent/30 bg-accent/5 last:border-r-0"
            >
              <p className="border-b border-accent/30 px-2 py-1.5 font-mono text-[9px] uppercase tracking-wider text-accent">
                {column}
              </p>
              {[0, 1, 2].map((row) => (
                <div key={row} className="px-2 py-1.5">
                  <span className="block h-1.5 w-full rounded-full bg-accent/40" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="text-center">
        <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] text-accent">
          + measures added at report level
        </span>
      </p>
    </div>
  );
}

/** Survey estate composition, shown without figures to limit identifying detail. */
function InventoryVisual() {
  const segments = [
    { label: "Active", weight: 5, color: "var(--color-violet)" },
    { label: "Archived", weight: 4, color: "var(--color-line)" },
    { label: "Draft", weight: 1, color: "var(--color-teal)" },
  ];
  const total = segments.reduce((sum, s) => sum + s.weight, 0);

  return (
    <div className="flex h-full flex-col justify-center gap-4">
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Survey inventory
          </p>
          <p className="font-display text-lg font-bold text-ink">188</p>
        </div>
        <div className="flex h-3 w-full overflow-hidden rounded-full">
          {segments.map((segment) => (
            <span
              key={segment.label}
              className="block h-full"
              style={{
                width: `${(segment.weight / total) * 100}%`,
                background: segment.color,
              }}
            />
          ))}
        </div>
      </div>

      <ul className="space-y-1.5">
        {segments.map((segment) => (
          <li key={segment.label} className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="size-2 shrink-0 rounded-full"
              style={{ background: segment.color }}
            />
            <span className="text-xs text-muted">{segment.label}</span>
          </li>
        ))}
      </ul>

      <p className="rounded-lg bg-surface/70 px-2.5 py-1.5 font-mono text-[10px] leading-relaxed text-muted">
        Categories shown without figures
      </p>
    </div>
  );
}

/** Manual-to-automated pipeline — the vulnerability triage work. */
function WorkflowVisual() {
  const steps = [
    {
      label: "14,000+ records",
      sub: "Weekly raw feed",
      bg: "var(--color-paper)",
      fg: "var(--color-ink)",
    },
    {
      label: "VBA automation",
      sub: "Sort and enrich",
      bg: "var(--color-accent)",
      fg: "#fff",
    },
    {
      label: "CMDB lookup",
      sub: "Ownership mapping",
      bg: "var(--color-teal)",
      fg: "#fff",
    },
    {
      label: "Structured output",
      sub: "Actionable tracker",
      bg: "var(--color-ink)",
      fg: "#fff",
    },
  ];

  return (
    <div className="flex h-full flex-col justify-center gap-2">
      {steps.map((step) => (
        <div
          key={step.label}
          className="rounded-xl border border-line px-3 py-2"
          style={{ background: step.bg }}
        >
          <p className="text-xs font-semibold" style={{ color: step.fg }}>
            {step.label}
          </p>
          <p className="mt-0.5 text-[10px] opacity-70" style={{ color: step.fg }}>
            {step.sub}
          </p>
        </div>
      ))}
      <p className="text-center">
        <span className="rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 font-mono text-[10px] text-teal">
          Manual → automated
        </span>
      </p>
    </div>
  );
}

/** Vehicle spec card — echoes the marketplace's instrument-cluster design language. */
function ProductVisual() {
  const specs = [
    { label: "Range", value: "512 km" },
    { label: "0–100", value: "3.8s" },
    { label: "Drive", value: "AWD" },
  ];

  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <div className="overflow-hidden rounded-2xl border border-line bg-[#12161C] p-4">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">
              Electric · 2026
            </p>
            <p className="mt-0.5 font-display text-sm font-bold text-white">
              Sample Vehicle
            </p>
          </div>
          <span className="rounded-md bg-[#0E63FF] px-2 py-0.5 font-mono text-[9px] text-white">
            Compare
          </span>
        </div>

        {/* Range arc — the prototype's signature gauge motif. */}
        <svg viewBox="0 0 120 42" className="mb-3 w-full" aria-hidden="true">
          <path
            d="M10 38 A 50 50 0 0 1 110 38"
            fill="none"
            stroke="rgb(255 255 255 / 0.12)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M10 38 A 50 50 0 0 1 110 38"
            fill="none"
            stroke="#0E63FF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="157"
            strokeDashoffset="47"
          />
        </svg>

        <div className="flex gap-2">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex-1 rounded-lg bg-white/5 px-2 py-1.5 text-center"
            >
              <p className="font-mono text-[8px] uppercase tracking-wider text-white/40">
                {spec.label}
              </p>
              <p className="mt-0.5 font-mono text-[11px] font-medium text-white">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center font-mono text-[10px] text-muted">
        Illustrative — synthetic vehicle
      </p>
    </div>
  );
}

const visuals: Record<VisualKey, () => React.ReactElement> = {
  reporting: ReportingVisual,
  inventory: InventoryVisual,
  workflow: WorkflowVisual,
  product: ProductVisual,
};

export function ProjectVisual({ visual }: { visual: VisualKey }) {
  const Visual = visuals[visual];
  return <Visual />;
}
