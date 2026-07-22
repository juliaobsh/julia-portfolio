import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "onDark";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_4px_14px_rgb(27_72_204/0.28)] hover:bg-accent-strong hover:shadow-[0_6px_20px_rgb(27_72_204/0.38)]",
  secondary:
    "border border-line bg-surface text-ink hover:border-accent hover:text-accent",
  onDark:
    "border border-white/20 text-white hover:border-white/40 hover:bg-white/10",
};

type Props = {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  download?: boolean;
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className,
  download,
}: Props) {
  const classes = cn(base, variants[variant], className);
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal || download) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
