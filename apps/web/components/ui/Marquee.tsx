import { cn } from "@/lib/utils";

/**
 * Infinite horizontal marquee. Renders its children twice so the
 * `-50%` keyframe loops seamlessly. Pauses on hover.
 */
export function Marquee({
  children,
  reverse = false,
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mask-fade-x group w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        <div className="flex shrink-0 items-center gap-16 pr-16">{children}</div>
        <div
          className="flex shrink-0 items-center gap-16 pr-16"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
