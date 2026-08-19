/**
 * Inline explanatory diagrams embedded in case-study bodies.
 *
 * These illustrate the *idea* behind a piece of work — why a naive approach
 * fails — rather than reproducing any real interface or data. All figures are
 * synthetic and chosen only to make the concept legible. Colours come from the
 * site's CSS variables so the diagrams sit inside the accent-scoped page.
 */

type DiagramKey =
  | "distinct-count"
  | "filter-visibility"
  | "survey-fork"
  | "triage-flow";

/**
 * Distinct counts don't roll up: a week's distinct people is not the sum of
 * each day's, because the same person recurs. Shown with three days whose
 * totals sum to far more than the true distinct weekly figure.
 */
function DistinctCountDiagram() {
  const days = [
    { day: "Mon", count: 84 },
    { day: "Tue", count: 91 },
    { day: "Wed", count: 87 },
  ];
  const naiveTotal = days.reduce((s, d) => s + d.count, 0); // 262
  const trueDistinct = 143;

  return (
    <div className="rounded-2xl border border-line bg-paper p-5 sm:p-6">
      <div className="grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
            Distinct agents per day
          </p>
          <ul className="space-y-2">
            {days.map((d) => (
              <li key={d.day} className="flex items-center gap-3">
                <span className="w-9 font-mono text-xs text-muted">{d.day}</span>
                <span className="h-5 flex-1 overflow-hidden rounded bg-surface">
                  <span
                    className="block h-full rounded bg-[var(--accent)]/70"
                    style={{ width: `${(d.count / 100) * 100}%` }}
                  />
                </span>
                <span className="w-8 text-right font-mono text-xs text-ink tabular-nums">
                  {d.count}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          aria-hidden="true"
          className="hidden text-2xl text-muted sm:block"
        >
          →
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-line bg-surface p-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-wide text-muted">
              Days added up
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-muted line-through decoration-ember/70">
              {naiveTotal}
            </p>
            <p className="mt-0.5 text-[11px] text-ember">double-counts people</p>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-wide text-muted">
              True weekly distinct
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-[var(--accent)]">
              {trueDistinct}
            </p>
            <p className="mt-0.5 text-[11px] text-muted">recomputed in context</p>
          </div>
        </div>
      </div>

      <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">
        Many of the same people work across days and across queues, so a distinct
        count can&apos;t be summed or stored — the measure has to recompute inside
        whatever period and filter the user is viewing.
      </p>
    </div>
  );
}

/**
 * A filter hidden in the filter pane can be left applied while the pane is
 * collapsed, leaving a report that looks complete but isn't. An on-canvas
 * control keeps the state visible. Shown as an A/B.
 */
function FilterVisibilityDiagram() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {/* Option A — hidden */}
      <div className="rounded-2xl border border-line bg-paper p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-md bg-ember/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ember">
            Option A
          </span>
          <span className="text-xs font-medium text-ink">Filter in the pane</span>
        </div>
        <div className="space-y-2 rounded-xl border border-line bg-surface p-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-muted">
              ▸ Filters (collapsed)
            </span>
            <span className="font-mono text-[10px] text-ember">1 applied</span>
          </div>
          <div className="rounded-lg bg-paper p-3 text-center">
            <p className="font-display text-lg font-bold text-ink">Scorecard</p>
            <p className="text-[11px] text-muted">looks complete</p>
          </div>
        </div>
        <p className="mt-3 flex items-start gap-2 text-[11px] leading-relaxed text-ember">
          <span aria-hidden="true">⚠</span>
          Pane collapsed → the exclusion is invisible, and the reader trusts a
          partial view.
        </p>
      </div>

      {/* Option B — visible */}
      <div className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-md bg-[var(--accent)]/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--accent)]">
            Option B
          </span>
          <span className="text-xs font-medium text-ink">Control on the page</span>
        </div>
        <div className="space-y-2 rounded-xl border border-line bg-surface p-3">
          <div className="flex items-center justify-between rounded-lg border border-[var(--accent)]/30 bg-paper px-2.5 py-1.5">
            <span className="font-mono text-[10px] text-muted">Agents</span>
            <span className="font-mono text-[10px] text-[var(--accent)]">
              All ▾ · 2 excluded
            </span>
          </div>
          <div className="rounded-lg bg-paper p-3 text-center">
            <p className="font-display text-lg font-bold text-ink">Scorecard</p>
            <p className="text-[11px] text-[var(--accent)]">state always shown</p>
          </div>
        </div>
        <p className="mt-3 flex items-start gap-2 text-[11px] leading-relaxed text-muted">
          <span aria-hidden="true" className="text-[var(--accent)]">
            ✓
          </span>
          The current filter is on the canvas, so nobody reads a filtered
          scorecard by accident. I chose B.
        </p>
      </div>
    </div>
  );
}

/**
 * The survey estate splits into two populations with incompatible needs, which
 * is the project's central analytical finding.
 */
function SurveyForkDiagram() {
  const internal = [
    "Scheduling",
    "Excel export",
    "Ranked questions",
    "Conditional logic",
    "Confirmation emails",
  ];
  const intake = [
    "Extensive customization",
    "Branded styling",
    "Bulk export",
    "URL continuity",
    "Data-residency rules",
  ];

  return (
    <div className="rounded-2xl border border-line bg-paper p-5 sm:p-6">
      <p className="mb-5 text-center font-mono text-[10px] uppercase tracking-widest text-muted">
        One &ldquo;survey&rdquo; estate
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-surface p-4">
          <p className="mb-1 font-display text-sm font-semibold text-ink">
            Internal forms
          </p>
          <p className="mb-3 font-mono text-[10px] text-muted">
            simple · occasional
          </p>
          <ul className="space-y-1.5">
            {internal.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-muted">
                <span
                  aria-hidden="true"
                  className="size-1 rounded-full bg-teal"
                />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-violet/30 bg-violet/5 p-4">
          <p className="mb-1 font-display text-sm font-semibold text-ink">
            Operational intake
          </p>
          <p className="mb-3 font-mono text-[10px] text-muted">
            high-volume · customer-facing
          </p>
          <ul className="space-y-1.5">
            {intake.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-muted">
                <span
                  aria-hidden="true"
                  className="size-1 rounded-full bg-violet"
                />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-5 w-fit rounded-full border border-line bg-surface px-4 py-1.5 text-center font-mono text-[11px] text-ink">
        May not be one migration problem
      </p>
    </div>
  );
}

/**
 * The vulnerability triage pipeline: a mostly-automated flow with a tiered
 * exception path at the end, where the last tier is the only genuinely manual
 * judgment. Grounded in the real weekly procedure, fully generalized.
 */
function TriageFlowDiagram() {
  const pipeline = [
    { label: "Weekly raw export", sub: "~14,000–16,000 rows" },
    { label: "Filter to the team", sub: "one business unit" },
    { label: "Derive server + app", sub: "strip names, look up references" },
    { label: "Carry forward owners", sub: "VBA match on prior week by ID" },
  ];
  const exceptions = [
    {
      tier: "Rule",
      label: "End-of-life apps",
      sub: "always the same owner, regardless of the finding",
      tone: "rule",
    },
    {
      tier: "Rule",
      label: "Ordered lookup table",
      sub: "match on plugin, port, or output — in strict order",
      tone: "rule",
    },
    {
      tier: "Judgment",
      label: "Everything still unmatched",
      sub: "compare port, OS, app, and server against prior weeks to decide if it's the same finding",
      tone: "judgment",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-line bg-paper p-5">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
          Automated pass
        </p>
        <ol className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
          {pipeline.map((step, i) => (
            <li key={step.label} className="flex flex-1 items-stretch gap-2">
              <div className="flex-1 rounded-xl border border-line bg-surface p-3">
                <p className="text-xs font-semibold text-ink">{step.label}</p>
                <p className="mt-0.5 text-[10px] leading-snug text-muted">
                  {step.sub}
                </p>
              </div>
              {i < pipeline.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="hidden self-center text-muted sm:inline"
                >
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-2xl border border-line bg-paper p-5">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
          What&apos;s left — the exception path
        </p>
        <ul className="space-y-2.5">
          {exceptions.map((e) => {
            const isJudgment = e.tone === "judgment";
            return (
              <li
                key={e.label}
                className={`flex items-start gap-3 rounded-xl border p-3 ${
                  isJudgment
                    ? "border-[var(--accent)]/30 bg-[var(--accent)]/5"
                    : "border-line bg-surface"
                }`}
              >
                <span
                  className={`shrink-0 rounded-md px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${
                    isJudgment
                      ? "bg-[var(--accent)]/15 text-[var(--accent)]"
                      : "bg-teal/10 text-teal"
                  }`}
                >
                  {e.tier}
                </span>
                <div>
                  <p className="text-xs font-semibold text-ink">{e.label}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-muted">
                    {e.sub}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 border-t border-line pt-3 text-xs leading-relaxed text-muted">
          Mapping the manual process first is what separated these tiers. Two
          steps that looked like judgment turned out to be strict rules worth
          automating; only the last tier genuinely needs a person.
        </p>
      </div>
    </div>
  );
}

const diagrams: Record<DiagramKey, () => React.ReactElement> = {
  "distinct-count": DistinctCountDiagram,
  "filter-visibility": FilterVisibilityDiagram,
  "survey-fork": SurveyForkDiagram,
  "triage-flow": TriageFlowDiagram,
};

export function CaseStudyDiagram({ diagram }: { diagram: DiagramKey }) {
  const Diagram = diagrams[diagram];
  return <Diagram />;
}
