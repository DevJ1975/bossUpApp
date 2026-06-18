import Reveal from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/lib/site.config";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-pad relative scroll-mt-20 border-y border-line bg-night/40"
    >
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              A simple loop that{" "}
              <span className="text-gradient">compounds.</span>
            </>
          }
          description="Assess, learn, coach, advance — then do it again. Every cycle builds skills, confidence, and your leadership bench."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-10 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <li className="relative">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-line bg-surface font-display text-lg font-bold text-brand">
                    {step.number}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-fg">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
