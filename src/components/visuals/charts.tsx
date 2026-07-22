/**
 * Small decorative charts drawn as plain SVG.
 *
 * The prototype used recharts for these, but every chart here is static and
 * illustrative — inline SVG keeps them server-rendered, removes a ~100kB
 * client dependency, and lets the line "draw itself" with a CSS animation
 * that `prefers-reduced-motion` already disables globally.
 *
 * None of this data is real; it exists to suggest the shape of analytics work.
 */

const VIEW_W = 300;
const VIEW_H = 100;

function toPoints(values: number[]) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = values.length > 1 ? (VIEW_W - 16) / (values.length - 1) : 0;

  return values.map((value, index) => {
    const x = 8 + index * step;
    const y = VIEW_H - 12 - ((value - min) / range) * (VIEW_H - 26);
    return { x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) };
  });
}

type LineChartProps = {
  values: number[];
  labels?: string[];
  color?: string;
  /** Fills the area beneath the line with a soft gradient. */
  area?: boolean;
  height?: number;
  gradientId?: string;
  className?: string;
};

export function LineChart({
  values,
  labels,
  color = "var(--color-accent)",
  area = false,
  height = 110,
  gradientId = "line-fade",
  className,
}: LineChartProps) {
  const points = toPoints(values);
  const line = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x},${point.y}`)
    .join(" ");
  const shape = `${line} L${points[points.length - 1].x},${VIEW_H} L${points[0].x},${VIEW_H} Z`;

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="none"
        role="presentation"
        aria-hidden="true"
        className="w-full"
        style={{ height }}
      >
        {area ? (
          <>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.18} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <path d={shape} fill={`url(#${gradientId})`} />
          </>
        ) : null}
        <path
          d={line}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          className="animate-draw [stroke-dasharray:400] [--dash:400]"
        />
        <circle
          cx={points[points.length - 1].x}
          cy={points[points.length - 1].y}
          r={3}
          fill={color}
        />
      </svg>
      {labels ? (
        <div className="mt-1 flex justify-between font-mono text-[10px] text-muted">
          {labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

type BarChartProps = {
  /** Each group renders one primary and one secondary bar. */
  groups: Array<{ label: string; primary: number; secondary: number }>;
  color?: string;
  height?: number;
  showLabels?: boolean;
  className?: string;
};

export function BarChart({
  groups,
  color = "var(--color-accent)",
  height = 56,
  showLabels = false,
  className,
}: BarChartProps) {
  const max = Math.max(...groups.flatMap((g) => [g.primary, g.secondary]));

  return (
    <div className={className}>
      <div className="flex items-end gap-3" style={{ height }}>
        {groups.map((group) => (
          <div key={group.label} className="flex flex-1 items-end gap-1">
            <div
              className="flex-1 rounded-t-[3px]"
              style={{
                height: `${(group.primary / max) * 100}%`,
                backgroundColor: color,
              }}
            />
            <div
              className="flex-1 rounded-t-[3px] bg-line"
              style={{ height: `${(group.secondary / max) * 100}%` }}
            />
          </div>
        ))}
      </div>
      {showLabels ? (
        <div className="mt-1 flex gap-3 font-mono text-[10px] text-muted">
          {groups.map((group) => (
            <span key={group.label} className="flex-1 text-center">
              {group.label}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
