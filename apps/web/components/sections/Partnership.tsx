import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LogoWordmark } from "@/components/ui/LogoWordmark";
import { Check } from "@/components/ui/icons";
import { site } from "@/lib/site.config";

const contributions = [
  "Proven instructional design and curriculum tailored to your roles",
  "Hands-on implementation and change-management support",
  "Train-the-coach programs that activate your supervisors",
  "Ongoing measurement against retention and mobility goals",
];

export function Partnership() {
  return (
    <section
      id="partnership"
      className="section-pad relative scroll-mt-20 border-y border-line bg-night/40"
    >
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Partnership"
              title={
                <>
                  Software plus the people to make it{" "}
                  <span className="text-gradient">truly land.</span>
                </>
              }
              description={`BossUp is delivered in partnership with ${site.partner} — combining a modern platform with the instructional design and implementation muscle that makes workforce programs succeed.`}
            />

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-lg">
              <LogoWordmark variant="brand" className="text-2xl" />
              <span className="text-muted">×</span>
              <LogoWordmark
                variant="partner"
                name={site.partner}
                className="text-xl"
              />
            </div>

            <ul className="mt-9 space-y-4">
              {contributions.map((point, i) => (
                <Reveal key={point} delay={i * 0.07}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check size={15} />
                    </span>
                    <span className="text-fg/90">{point}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Parallax speed={0.08}>
            <div className="relative overflow-hidden rounded-[2rem] border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element -- decorative vector SVG; next/image adds no value for vectors */}
              <img
                src="/images/partnership.svg"
                alt="BossUp and Workplace Learning Systems partnership"
                className="h-[460px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
