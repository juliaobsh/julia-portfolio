import type { ProjectVisual as VisualKey } from "@/types/project";
import { BarChart, LineChart } from "./charts";

/**
 * Illustrative visuals for each case study. Real screenshots of enterprise work
 * cannot be shown, so each card gets a diagram that conveys the shape of the
 * work without exposing anything proprietary. All figures are invented.
 */

function KpiVisual() {
  const tiles = [
    { label: "Uptime", value: "99.7%", color: "var(--color-accent)" },
    { label: "Reports", value: "24", color: "var(--color-teal)" },
    { label: "Alerts", value: "3", color: "var(--color-ember)" },
    { label: "Latency", value: "42ms", color: "var(--color-violet)" },
  ];

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="grid grid-cols-2 gap-2">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className="rounded-xl border border-line bg-surface/70 p-2.5 text-center"
          >
            <p className="font-mono text-[9px] text-muted">{tile.label}</p>
            <p
              className="mt-0.5 font-display text-sm font-bold"
              style={{ color: tile.color }}
            >
              {tile.value}
            </p>
          </div>
        ))}
      </div>
      <LineChart
        values={[38, 52, 47, 66, 84]}
        height={54}
        gradientId="kpi-fade"
      />
      <BarChart
        groups={[
          { label: "Q1", primary: 24, secondary: 17 },
          { label: "Q2", primary: 31, secondary: 22 },
          { label: "Q3", primary: 28, secondary: 20 },
          { label: "Q4", primary: 38, secondary: 27 },
        ]}
        height={38}
      />
    </div>
  );
}

function WorkflowVisual() {
  const steps = [
    {
      label: "14,000+ vulnerabilities",
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
          <p
            className="mt-0.5 text-[10px] opacity-70"
            style={{ color: step.fg }}
          >
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

function SurveyVisual() {
  const nodes = [
    { label: "Stakeholder discovery", color: "var(--color-accent)" },
    { label: "Requirements doc", color: "var(--color-violet)" },
    { label: "188 surveys reviewed", color: "var(--color-teal)" },
    { label: "Migration plan", color: "var(--color-ink)" },
  ];

  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <div className="grid grid-cols-2 gap-2">
        {nodes.map((node) => (
          <div
            key={node.label}
            className="rounded-xl p-3 text-center text-[11px] font-semibold leading-tight text-white"
            style={{ background: node.color }}
          >
            {node.label}
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-line bg-paper p-3">
        <p className="mb-2 font-mono text-[10px] text-muted">RTM coverage</p>
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className="h-4 w-5 rounded-sm"
              style={{
                background:
                  index < 9 ? "var(--color-violet)" : "var(--color-line)",
              }}
            />
          ))}
        </div>
        <p className="mt-1.5 font-mono text-[10px] text-muted">
          188 surveys catalogued
        </p>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  const topics = [
    { label: "Billing enquiries", pct: 68, color: "var(--color-teal)" },
    { label: "Technical support", pct: 52, color: "var(--color-muted)" },
    { label: "Account changes", pct: 41, color: "var(--color-teal)" },
    { label: "Complaints", pct: 18, color: "var(--color-ember)" },
  ];

  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      {topics.map((topic) => (
        <div key={topic.label} className="flex items-center gap-3">
          <span className="w-28 shrink-0 font-mono text-[10px] leading-tight text-muted">
            {topic.label}
          </span>
          <span className="h-2 flex-1 overflow-hidden rounded-full bg-line">
            <span
              className="block h-full rounded-full"
              style={{ width: `${topic.pct}%`, background: topic.color }}
            />
          </span>
          <span className="w-8 text-right font-mono text-[10px] text-muted">
            {topic.pct}%
          </span>
        </div>
      ))}
      <div className="mt-1 flex flex-wrap gap-1.5">
        {["billing", "support", "account", "resolve", "callback"].map(
          (keyword) => (
            <span
              key={keyword}
              className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[9px] text-accent"
            >
              {keyword}
            </span>
          ),
        )}
      </div>
    </div>
  );
}

const visuals: Record<VisualKey, () => React.ReactElement> = {
  kpi: KpiVisual,
  workflow: WorkflowVisual,
  survey: SurveyVisual,
  analytics: AnalyticsVisual,
};

export function ProjectVisual({ visual }: { visual: VisualKey }) {
  const Visual = visuals[visual];
  return <Visual />;
}
