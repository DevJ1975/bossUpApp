import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";

const stats = [
  { value: 63, prefix: "", suffix: "K+", label: "Workers across the ATL campus" },
  { value: 4700, prefix: "$", suffix: "", label: "Avg. cost to replace one frontline hire" },
  { value: 33, prefix: "", suffix: "%", label: "Typical annual frontline turnover" },
];

export function Opportunity() {
  return (
    <section id="opportunity" className="section-pad relative scroll-mt-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="The opportunity"
              title={
                <>
                  A world-class airport runs on{" "}
                  <span className="text-gradient">frontline people.</span>
                </>
              }
              description="Hartsfield-Jackson moves more travelers than any airport on earth. Behind every on-time departure are tens of thousands of frontline workers — and keeping, growing, and promoting them is the difference between a good operation and a great one."
            />

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div className="rounded-2xl border border-line bg-white/[0.03] p-5">
                    <div className="font-display text-3xl font-bold text-fg">
                      <Counter
                        value={s.value}
                        prefix={s.prefix}
                        suffix={s.suffix}
                      />
                    </div>
                    <p className="mt-2 text-sm leading-snug text-muted">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted/60">
              Illustrative industry benchmarks for large-scale frontline
              operations.
            </p>
          </div>

          <Parallax speed={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] border border-line">
              {/* Placeholder visual — swap for licensed Adobe Stock photography. */}
              {/* eslint-disable-next-line @next/next/no-img-element -- decorative vector SVG; next/image adds no value for vectors */}
              <img
                src="/images/airport-terminal.svg"
                alt="Airport operations and terminal at dawn"
                className="h-[460px] w-full object-cover"
                loading="lazy"
              />
              <div className="glass absolute bottom-5 left-5 right-5 rounded-2xl px-5 py-4">
                <p className="text-sm font-medium text-fg">
                  Every role is a leadership pipeline.
                </p>
                <p className="mt-1 text-xs text-muted">
                  Ramp · Gate · Concessions · Security · Operations · Guest
                  services
                </p>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
