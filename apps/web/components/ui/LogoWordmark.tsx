import { cn } from "@/lib/utils";

type Variant = "brand" | "client" | "partner";

/**
 * Renders a typographic wordmark. Real logo image files can replace these
 * later without changing any layout — just swap the rendered output here.
 */
export function LogoWordmark({
  name = "BossUp",
  variant = "client",
  className,
}: {
  name?: string;
  variant?: Variant;
  className?: string;
}) {
  if (variant === "brand") {
    return (
      <span
        className={cn(
          "font-display text-xl font-extrabold tracking-tight",
          className
        )}
      >
        Boss<span className="text-gradient">Up</span>
      </span>
    );
  }

  return (
    <span
      className={cn(
        "font-display font-semibold tracking-tight whitespace-nowrap",
        variant === "partner" ? "text-fg" : "text-muted/75",
        className
      )}
    >
      {name}
    </span>
  );
}
