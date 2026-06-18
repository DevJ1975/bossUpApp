import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "@/components/ui/icons";

const points = [
  "Built for hourly and shift workers — not desk-bound teams",
  "Lives on the phone already in every employee's pocket",
  "Turns supervisors into coaches and employees into leaders",
  "Makes the path to the next role — and the next raise — visible",
];

export function Solution() {
  return (
    <section id="platform" className="section-pad relative scroll-mt-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Parallax speed={0.08} className="order-last lg:order-first">
            <div className="relative overflow-hidden rounded-[2rem] border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element -- decorative vector SVG; next/image adds no value for vectors */}
              <img
                src="/images/frontline-team.svg"
                alt="Frontline team members learning together"
                className="h-[480px] w-full object-cover"
                loading="lazy"
              />
              <div className="grain absolute inset-0" />
            </div>
          </Parallax>

          <div>
            <SectionHeading
              eyebrow="Meet BossUp"
              title={
                <>
                  Development that meets people{" "}
                  <span className="text-gradient">where they work.</span>
                </>
              }
              description="BossUp is a mobile-first workforce-development platform that builds skills, sparks coaching, and opens real paths to advancement — designed from the ground up for frontline teams."
            />

            <ul className="mt-9 space-y-4">
              {points.map((point, i) => (
                <Reveal key={point} delay={i * 0.07}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                      <Check size={15} />
                    </span>
                    <span className="text-fg/90">{point}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
