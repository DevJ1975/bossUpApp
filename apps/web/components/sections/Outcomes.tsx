import Reveal from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/lib/site.config";

export function Outcomes() {
  return (
    <section
      id="outcomes"
      className="section-pad relative overflow-hidden scroll-mt-20"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative vector SVG; next/image adds no value for vectors */}
      <img
        src="/images/leadership.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          eyebrow="The payoff"
          title={
            <>
              Outcomes leaders <span className="text-gradient">actually feel.</span>
            </>
          }
          description="When frontline teams grow, everything downstream improves — retention, readiness, and the experience travelers remember."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass rounded-2xl p-8 text-center">
                <div className="text-gradient font-display text-5xl font-bold">
                  <Counter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                </div>
                <p className="mt-3 text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-7 text-center text-xs text-muted/60">
          Illustrative outcomes based on workforce-development benchmarks; actual
          results vary by program.
        </p>
      </div>
    </section>
  );
}
