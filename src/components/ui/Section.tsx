import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  children,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={className}>
      {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
      <Tag className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-ink">
        {children}
      </Tag>
    </div>
  );
}
