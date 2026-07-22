/**
 * The hero visual: a source-versus-report reconciliation panel.
 *
 * This replaces the earlier illustrative KPI dashboard, which showed invented
 * metrics in the most prominent position on the page. Checking a report figure
 * against its source is the actual working method being described, so the
 * visual shows that instead. All values are synthetic and labelled as such.
 */

type Row = {
  metric: string;
  source: string;
  report: string;
  state: "matched" | "investigating";
};

const rows: Row[] = [
  { metric: "Distinct agents", source: "412", report: "412", state: "matched" },
  { metric: "Offered", source: "8,940", report: "8,940", state: "matched" },
  { metric: "Answered", source: "8,612", report: "8,612", state: "matched" },
  {
    metric: "Avg handle",
    source: "4m 32s",
    report: "4m 51s",
    state: "investigating",
  },
];

export function HeroReconciliation() {
  return (
    <div className="relative w-full select-none">
      <div className="w-full rounded-3xl border border-line bg-surface p-5 shadow-[0_8px_40px_rgb(28_25_23/0.10),0_2px_8px_rgb(28_25_23/0.04)]">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Validation check
            </p>
            <p className="mt-0.5 font-display text-sm font-semibold text-ink">
              Source vs. report
            </p>
          </div>
          <span className="rounded-lg bg-paper px-2.5 py-1 font-mono text-[10px] text-muted">
            3 of 4 matched
          </span>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-line">
              {["Metric", "Source", "Report", ""].map((label, i) => (
                <th
                  key={label || i}
                  scope="col"
                  className={`pb-2 font-mono text-[10px] font-normal uppercase tracking-widest text-muted ${
                    i === 0 ? "text-left" : "text-right"
                  }`}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const flagged = row.state === "investigating";
              return (
                <tr key={row.metric} className="border-b border-line/60">
                  <td className="py-2.5 text-xs font-medium text-ink">
                    {row.metric}
                  </td>
                  <td className="py-2.5 text-right font-mono text-xs text-muted tabular-nums">
                    {row.source}
                  </td>
                  <td
                    className={`py-2.5 text-right font-mono text-xs tabular-nums ${
                      flagged ? "text-ember" : "text-muted"
                    }`}
                  >
                    {row.report}
                  </td>
                  <td className="w-6 py-2.5 pl-3 text-right">
                    <span
                      aria-hidden="true"
                      className={`inline-block size-1.5 rounded-full ${
                        flagged ? "animate-blip bg-ember" : "bg-teal"
                      }`}
                    />
                    <span className="sr-only">
                      {flagged ? "Investigating" : "Matched"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <p className="mt-4 font-mono text-[10px] leading-relaxed text-muted">
          Illustrative — synthetic values. Average handle time differs between
          source and report; investigating filter context.
        </p>
      </div>

      <span className="absolute -right-3 top-6 hidden rounded-lg bg-accent px-3 py-1.5 font-mono text-[10px] text-white shadow-[0_4px_12px_rgb(27_72_204/0.35)] lg:block">
        Non-prod → prod
      </span>
      <span className="absolute -left-3 bottom-10 hidden rounded-lg bg-teal px-3 py-1.5 font-mono text-[10px] text-white shadow-[0_4px_12px_rgb(13_148_136/0.35)] lg:block">
        27 reports
      </span>
    </div>
  );
}
