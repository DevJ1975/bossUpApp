import Reveal from "@/components/motion/Reveal";
import { LeadForm } from "@/components/ui/LeadForm";
import { Button } from "@/components/ui/Button";
import { Download, Check } from "@/components/ui/icons";
import { site } from "@/lib/site.config";

const included = [
  "A tailored BossUp overview PDF",
  "A 20-minute walkthrough with our team",
  "A pilot plan scoped to one department",
];

export function CTASection() {
  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden scroll-mt-20"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative vector SVG; next/image adds no value for vectors */}
      <img
        src="/images/coaching.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
                Ready to help your people{" "}
                <span className="text-gradient">Boss Up?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                Get the overview and let&apos;s scope a pilot for {site.audienceShort}.
                Tell us where to send it.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {included.map((item, i) => (
                <Reveal key={item} delay={0.12 + i * 0.06}>
                  <li className="flex items-center gap-3 text-fg/90">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/15 text-brand">
                      <Check size={14} />
                    </span>
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.3}>
              <div className="mt-9">
                <Button href={site.brochurePath} variant="outline" download>
                  <Download size={18} />
                  Download the overview now
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-8 sm:p-10">
              <h3 className="text-xl font-semibold text-fg">
                Get the BossUp overview
              </h3>
              <p className="mt-2 text-sm text-muted">
                We&apos;ll email you a copy and follow up about a pilot.
              </p>
              <div className="mt-6">
                <LeadForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
