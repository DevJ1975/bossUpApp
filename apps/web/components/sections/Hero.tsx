import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, Sparkle, ArrowDown } from "@/components/ui/icons";
import { site } from "@/lib/site.config";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28">
      <div className="container-px mx-auto w-full max-w-7xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            <Sparkle size={14} className="text-brand" />
            In partnership with {site.partner}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-7 max-w-4xl text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.96]">
            Help every employee <span className="text-gradient">Boss Up.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            From the gate to the concourse, BossUp turns frontline talent at the
            world&apos;s busiest airport into confident, capable leaders — with
            mobile microlearning, real-time coaching, and clear paths to
            advancement.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#contact">
              Book a pilot
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Button>
            <Button href="#video" variant="outline">
              <Play size={15} />
              Watch the film
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="mt-10 text-sm text-muted/70">
            Purpose-built for {site.audience}.
          </p>
        </Reveal>
      </div>

      <a
        href="#opportunity"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-float text-muted/60 transition-colors hover:text-fg md:block"
      >
        <ArrowDown size={26} />
      </a>
    </section>
  );
}
