import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Plane, Globe, Clock, Users } from "@/components/ui/icons";

const items = [
  {
    icon: Plane,
    title: "Built for airport scale",
    description:
      "One platform for tens of thousands of workers across domestic and international concourses.",
  },
  {
    icon: Globe,
    title: "Multilingual by design",
    description:
      "Meet ATL's wonderfully diverse workforce in the language they're most comfortable learning in.",
  },
  {
    icon: Clock,
    title: "Made for shift work",
    description:
      "Microlearning that fits around 24/7 operations — five minutes between flights, not a classroom.",
  },
  {
    icon: Users,
    title: "Every department, every role",
    description:
      "Paths for ramp, gate, concessions, custodial, guest services, and operations leadership.",
  },
];

export function BuiltForATL() {
  return (
    <section id="atl" className="section-pad relative scroll-mt-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Built for ATL"
              title={
                <>
                  Tailored for the world&apos;s{" "}
                  <span className="text-gradient">busiest airport.</span>
                </>
              }
              description="Hartsfield-Jackson is unlike any other workplace on earth. BossUp is configured for its scale, its pace, and its people."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <div className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                        <Icon size={22} />
                      </span>
                      <div>
                        <h3 className="font-semibold text-fg">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Parallax speed={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element -- decorative vector SVG; next/image adds no value for vectors */}
              <img
                src="/images/mobile-learning.svg"
                alt="Frontline worker learning on a mobile device at the airport"
                className="h-[480px] w-full object-cover"
                loading="lazy"
              />
              <div className="glass absolute left-5 right-5 top-5 rounded-2xl px-5 py-4">
                <p className="text-sm font-medium text-fg">
                  &ldquo;5 minutes between flights&rdquo;
                </p>
                <p className="mt-1 text-xs text-muted">
                  Learning that respects how frontline work actually happens.
                </p>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
