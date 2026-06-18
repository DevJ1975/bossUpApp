import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-ink shadow-[0_10px_40px_-10px_rgba(255,176,32,0.65)] hover:brightness-105",
  outline: "border border-white/15 text-fg hover:bg-white/5 hover:border-white/30",
  ghost: "text-muted hover:text-fg",
};

type ButtonProps = React.ComponentProps<"a"> & {
  href: string;
  variant?: Variant;
};

/** Pill-style link button used for every CTA on the page. */
export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 will-change-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
        variants[variant],
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
