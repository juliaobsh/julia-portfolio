import { BarChart, LineChart } from "./charts";

const kpis = [
  { label: "Reports", value: "24", trend: "+12%", color: "var(--color-accent)" },
  { label: "Dashboards", value: "6", trend: "+3", color: "var(--color-teal)" },
  { label: "Sources", value: "12", trend: "+4", color: "var(--color-violet)" },
];

const activity = [38, 52, 47, 66, 61, 84];
const months = ["Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const quarters = [
  { label: "Q1", primary: 24, secondary: 17 },
  { label: "Q2", primary: 31, secondary: 22 },
  { label: "Q3", primary: 28, secondary: 20 },
  { label: "Q4", primary: 38, secondary: 27 },
];

/**
 * Decorative stand-in for a BI report — the hero's "portrait". Every figure is
 * invented; nothing here reflects real or confidential data.
 */
export function HeroDashboard() {
  return (
    <div className="relative w-full select-none">
      <div className="w-full rounded-3xl border border-line bg-surface p-5 shadow-[0_8px_40px_rgb(28_25_23/0.10),0_2px_8px_rgb(28_25_23/0.04)]">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Analytics overview
            </p>
            <p className="mt-0.5 font-display text-sm font-semibold text-ink">
              Illustrative dashboard
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-accent" />
          </div>
        </div>

        <div className="mb-5 grid grid-cols-3 gap-3">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-2xl border border-line bg-paper p-3"
            >
              <p className="mb-1 font-mono text-[10px] text-muted">
                {kpi.label}
              </p>
              <p className="font-display text-xl font-bold text-ink">
                {kpi.value}
              </p>
              <p
                className="mt-0.5 font-mono text-[10px] font-medium"
                style={{ color: kpi.color }}
              >
                {kpi.trend}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">
            Report activity
          </p>
          <LineChart
            values={activity}
            labels={months}
            area
            height={110}
            gradientId="hero-fade"
          />
        </div>

        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">
            Quarterly
          </p>
          <BarChart groups={quarters} height={52} />
        </div>
      </div>

      <span className="absolute -right-3 top-6 hidden rounded-lg bg-accent px-3 py-1.5 font-mono text-[10px] text-white shadow-[0_4px_12px_rgb(27_72_204/0.35)] lg:block">
        +23% MoM
      </span>
      <span className="absolute -left-3 bottom-10 hidden rounded-lg bg-teal px-3 py-1.5 font-mono text-[10px] text-white shadow-[0_4px_12px_rgb(13_148_136/0.35)] lg:block">
        6 active dashboards
      </span>
    </div>
  );
}
